const CACHE_NAME = "regimen-ae-app-v8";
const APP_SHELL_PATHS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg"];
const APP_SHELL_URLS = APP_SHELL_PATHS.map((path) => new URL(path, self.registration.scope).toString());
const APP_SHELL_URL_SET = new Set(APP_SHELL_URLS);
const OFFLINE_DOCUMENT_URL = new URL("./index.html", self.registration.scope).toString();

function isCacheableResponse(response) {
  return Boolean(response && response.status === 200 && response.type === "basic");
}

async function cacheResponse(request, response) {
  if (!isCacheableResponse(response)) return response;
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, response.clone());
  return response;
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const networkResponse = await fetch(request);
  return cacheResponse(request, networkResponse);
}

async function networkFirst(request, preloadResponsePromise) {
  try {
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
      return cacheResponse(request, preloadResponse);
    }

    const networkResponse = await fetch(request);
    return cacheResponse(request, networkResponse);
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;

    const offlineDocument = await caches.match(OFFLINE_DOCUMENT_URL);
    if (offlineDocument) return offlineDocument;

    throw error;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(APP_SHELL_URLS.map((url) => new Request(url, { cache: "reload" })));
    })(),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));

      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable().catch(() => {});
      }

      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === "navigate" || event.request.destination === "document") {
    event.respondWith(networkFirst(event.request, event.preloadResponse));
    return;
  }

  if (APP_SHELL_URL_SET.has(event.request.url)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => cacheResponse(event.request, response));
    }),
  );
});
