const SESSION_KEY = "regimen-ae-app-session";

const LAB_DEFINITIONS = {
  wbc: {
    0: "正常／評価対象外",
    1: "< LLN 〜 3,000 /μL",
    2: "< 3,000 〜 2,000 /μL",
    3: "< 2,000 〜 1,000 /μL",
    4: "< 1,000 /μL",
    5: "死亡。",
  },
  anc: {
    0: "正常／評価対象外",
    1: "< LLN 〜 1,500 /μL",
    2: "< 1,500 〜 1,000 /μL",
    3: "< 1,000 〜 500 /μL",
    4: "< 500 /μL",
    5: "死亡。",
  },
  hb: {
    0: "正常／評価対象外",
    1: "< LLN 〜 10.0 g/dL",
    2: "< 10.0 〜 8.0 g/dL",
    3: "< 8.0 g/dL; 輸血を要する",
    4: "生命を脅かす; 緊急対応を要する",
    5: "死亡。",
  },
  plt: {
    0: "正常／評価対象外",
    1: "< LLN 〜 7.5 x 10^4 /μL",
    2: "< 7.5 〜 5.0 x 10^4 /μL",
    3: "< 5.0 〜 2.5 x 10^4 /μL",
    4: "< 2.5 x 10^4 /μL",
    5: "死亡。",
  },
  ast: {
    0: "正常／評価対象外",
    1: "> ULN 〜 3.0 x ULN",
    2: "> 3.0 〜 5.0 x ULN",
    3: "> 5.0 〜 20.0 x ULN",
    4: "> 20.0 x ULN",
    5: "死亡。",
  },
  alt: {
    0: "正常／評価対象外",
    1: "> ULN 〜 3.0 x ULN",
    2: "> 3.0 〜 5.0 x ULN",
    3: "> 5.0 〜 20.0 x ULN",
    4: "> 20.0 x ULN",
    5: "死亡。",
  },
  alp: {
    0: "正常／評価対象外",
    1: "> ULN 〜 2.5 x ULN",
    2: "> 2.5 〜 5.0 x ULN",
    3: "> 5.0 〜 20.0 x ULN",
    4: "> 20.0 x ULN",
    5: "死亡。",
  },
  tbil: {
    0: "正常／評価対象外",
    1: "> ULN 〜 1.5 x ULN",
    2: "> 1.5 〜 3.0 x ULN",
    3: "> 3.0 〜 10.0 x ULN",
    4: "> 10.0 x ULN",
    5: "死亡。",
  },
  cr: {
    0: "正常／評価対象外",
    1: "> ULN 〜 1.5 x ULN",
    2: "> 1.5 〜 3.0 x baseline または > 1.5 〜 3.0 x ULN",
    3: "> 3.0 x baseline または > 3.0 〜 6.0 x ULN",
    4: "> 6.0 x ULN",
    5: "死亡。",
  },
  egfr: {
    0: "正常／評価対象外",
    1: "<LLN-60 mL/min/1.73m2",
    2: "<60-30 mL/min/1.73m2",
    3: "<30-15 mL/min/1.73m2",
    4: "<15 mL/min/1.73m2 / 透析相当",
    5: "死亡。",
  },
  na: {
    0: "正常／評価対象外",
    1: "Na < LLN 〜 130 mmol/L / > ULN 〜 150 mmol/L",
    2: "Na < 130 〜 125 mmol/L / > 150 〜 155 mmol/L",
    3: "Na < 125 〜 120 mmol/L / > 155 〜 160 mmol/L",
    4: "Na < 120 mmol/L / > 160 mmol/L",
    5: "死亡。",
  },
  k: {
    0: "正常／評価対象外",
    1: "K < LLN 〜 3.0 mmol/L / > ULN 〜 5.5 mmol/L",
    2: "K < 3.0 〜 2.5 mmol/L / > 5.5 〜 6.0 mmol/L",
    3: "K < 2.5 〜 2.0 mmol/L / > 6.0 〜 7.0 mmol/L",
    4: "K < 2.0 mmol/L / > 7.0 mmol/L",
    5: "死亡。",
  },
  ca: {
    0: "正常／評価対象外",
    1: "補正 Ca < LLN 〜 8.0 mg/dL / > ULN 〜 11.5 mg/dL",
    2: "補正 Ca < 8.0 〜 7.0 mg/dL / > 11.5 〜 12.5 mg/dL",
    3: "補正 Ca < 7.0 〜 6.0 mg/dL / > 12.5 〜 13.5 mg/dL",
    4: "補正 Ca < 6.0 mg/dL / > 13.5 mg/dL",
    5: "死亡。",
  },
  mg: {
    0: "正常／評価対象外",
    1: "Mg < LLN 〜 1.2 mg/dL / > ULN 〜 3.0 mg/dL",
    2: "Mg < 1.2 〜 0.9 mg/dL / > 3.0 〜 8.0 mg/dL",
    3: "Mg < 0.9 〜 0.7 mg/dL / > 8.0 〜 10.0 mg/dL",
    4: "Mg < 0.7 mg/dL / > 10.0 mg/dL",
    5: "死亡。",
  },
  ldh: {
    0: "正常／評価対象外",
    1: ">ULN-2.5 x ULN",
    2: ">2.5-5.0 x ULN",
    3: ">5.0-10.0 x ULN",
    4: ">10.0 x ULN",
    5: "死亡。",
  },
  "uric-acid": {
    0: "正常／評価対象外",
    1: "> ULN 〜 10.0 mg/dL",
    2: "> 10.0 〜 12.0 mg/dL",
    3: "> 12.0 mg/dL; 治療を要する",
    4: "生命を脅かす; 緊急対応を要する",
    5: "死亡。",
  },
  phosphate: {
    0: "正常／評価対象外",
    1: "P > ULN 〜 5.0 mg/dL / < LLN 〜 2.5 mg/dL",
    2: "P > 5.0 〜 7.0 mg/dL / < 2.5 〜 2.0 mg/dL",
    3: "P > 7.0 〜 10.0 mg/dL / < 2.0 〜 1.0 mg/dL",
    4: "P > 10.0 mg/dL / < 1.0 mg/dL",
    5: "死亡。",
  },
};

const LAB_REF_MODES = {
  wbc: "low",
  anc: "low",
  hb: "low",
  plt: "low",
  ast: "high",
  alt: "high",
  alp: "high",
  tbil: "high",
  cr: "high",
  na: "both",
  k: "both",
  ca: "both",
  mg: "both",
  "uric-acid": "high",
  phosphate: "both",
};

function parseNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

const DEFAULT_LAB_REFS = {
  wbc: { low: "3300", high: "8600" },
  anc: { low: "1500", high: "" },
  hb: { low: "11.6", high: "14.8" },
  plt: { low: "15.8", high: "34.8" },
  ast: { low: "13", high: "30" },
  alt: { low: "7", high: "42" },
  alp: { low: "106", high: "322" },
  tbil: { low: "0.4", high: "1.5" },
  cr: { low: "0.46", high: "1.07" },
  na: { low: "138", high: "145" },
  k: { low: "3.6", high: "4.8" },
  ca: { low: "8.8", high: "10.1" },
  mg: { low: "1.8", high: "2.4" },
  "uric-acid": { low: "2.6", high: "7.8" },
  phosphate: { low: "2.7", high: "4.6" },
};

function defaultRefLow(labId) {
  return DEFAULT_LAB_REFS[labId]?.low ?? "0";
}

function defaultRefHigh(labId) {
  return DEFAULT_LAB_REFS[labId]?.high ?? "1";
}

function getLabGrade(labId, value, low, high) {
  const numericValue = parseNumber(value);
  const lln = parseNumber(low) ?? 0;
  const uln = parseNumber(high) ?? 1;

  if (numericValue === null) return 0;

  switch (labId) {
    case "wbc":
      if (numericValue < 1000) return 4;
      if (numericValue < 2000) return 3;
      if (numericValue < 3000) return 2;
      if (numericValue < lln) return 1;
      return 0;
    case "anc":
      if (numericValue < 500) return 4;
      if (numericValue < 1000) return 3;
      if (numericValue < 1500) return 2;
      if (numericValue < lln) return 1;
      return 0;
    case "hb":
      if (numericValue < 8) return 3;
      if (numericValue < 10) return 2;
      if (numericValue < lln) return 1;
      return 0;
    case "plt":
      if (numericValue < 2.5) return 4;
      if (numericValue < 5.0) return 3;
      if (numericValue < 7.5) return 2;
      if (numericValue < lln) return 1;
      return 0;
    case "ast":
    case "alt": {
      const ratio = uln > 0 ? numericValue / uln : 0;
      if (ratio > 20) return 4;
      if (ratio > 5) return 3;
      if (ratio > 3) return 2;
      if (ratio > 1) return 1;
      return 0;
    }
    case "alp": {
      const ratio = uln > 0 ? numericValue / uln : 0;
      if (ratio > 20) return 4;
      if (ratio > 5) return 3;
      if (ratio > 2.5) return 2;
      if (ratio > 1) return 1;
      return 0;
    }
    case "tbil": {
      const ratio = uln > 0 ? numericValue / uln : 0;
      if (ratio > 10) return 4;
      if (ratio > 3) return 3;
      if (ratio > 1.5) return 2;
      if (ratio > 1) return 1;
      return 0;
    }
    case "cr": {
      const ratio = uln > 0 ? numericValue / uln : 0;
      if (ratio > 6) return 4;
      if (ratio > 3) return 3;
      if (ratio > 1.5) return 2;
      if (ratio > 1) return 1;
      return 0;
    }
    case "na":
      if (numericValue < 120 || numericValue > 160) return 4;
      if (numericValue < 125 || numericValue > 155) return 3;
      if (numericValue < 130 || numericValue > 150) return 2;
      if (numericValue < lln || numericValue > uln) return 1;
      return 0;
    case "k":
      if (numericValue < 2 || numericValue > 7) return 4;
      if (numericValue < 2.5 || numericValue > 6) return 3;
      if (numericValue < 3 || numericValue > 5.5) return 2;
      if (numericValue < lln || numericValue > uln) return 1;
      return 0;
    case "ca":
      if (numericValue < 6 || numericValue > 13.5) return 4;
      if (numericValue < 7 || numericValue > 12.5) return 3;
      if (numericValue < 8 || numericValue > 11.5) return 2;
      if (numericValue < lln || numericValue > uln) return 1;
      return 0;
    case "mg":
      if (numericValue < 0.7 || numericValue > 10) return 4;
      if (numericValue < 0.9 || numericValue > 8) return 3;
      if (numericValue < 1.2 || numericValue > 3) return 2;
      if (numericValue < lln || numericValue > uln) return 1;
      return 0;
    case "uric-acid":
      if (numericValue > 12) return 3;
      if (numericValue > 10) return 2;
      if (numericValue > uln) return 1;
      return 0;
    case "phosphate":
      if (numericValue > 10 || numericValue < 1) return 4;
      if (numericValue > 7 || numericValue < 2) return 3;
      if (numericValue > 5 || numericValue < 2.5) return 2;
      if (numericValue > uln || numericValue < lln) return 1;
      return 0;
    default:
      return 0;
  }
}

const REGIMENS = {
  gb: {
    id: "gb",
    name: "GB療法",
    subtitle: "Obinutuzumab + Bendamustine",
    dayHints: [
      { min: 1, max: 3, text: "day 1-3 は輸注関連反応、悪寒、発熱、消化器症状を意識して確認。" },
      { min: 4, max: 10, text: "day 4-10 は発熱、粘膜症状、消化器症状、早期感染兆候を確認。" },
      { min: 11, max: 21, text: "day 11-21 は骨髄抑制、感染徴候、出血傾向を意識。次コース影響も確認。" },
      { min: 22, max: 99, text: "遅発性の骨髄抑制、感染症、肝機能障害、次コースへの影響を確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "発熱性好中球減少症 / 感染症", marker: "最優先", note: "生命に関わりうるため、発熱・悪寒・咳・呼吸苦・局所症状を見たら優先して評価。" },
          { title: "高度好中球減少", marker: "要介入", note: "遅発性の骨髄抑制もあり、次コース延期判断に影響しやすい。" },
          { title: "高度血小板減少 / 出血", marker: "要介入", note: "皮下出血、歯肉出血、血尿、黒色便の有無を確認。" },
          { title: "輸注関連反応", marker: "day 1重要", note: "特に obinutuzumab 投与近接時の発熱、悪寒、低血圧、呼吸器症状に注意。" },
          { title: "重度皮膚障害 / 重症薬疹", marker: "見逃し注意", note: "ベンダムスチンや obinutuzumab で重症薬疹がありうる。発疹に加えて発熱、粘膜症状、水疱、疼痛、びらんを伴う場合は重症化を疑う。" },
          { title: "B型肝炎再活性化", marker: "見逃し注意", note: "症状が乏しいことがあり、肝機能異常や既往があれば強く意識する。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "好中球減少", marker: "10%以上", note: "頻度が高く、発熱や感染徴候のトリガーとして確認が必要。" },
          { title: "血小板減少", marker: "10%以上", note: "出血傾向や次コース可否に影響しやすい。" },
          { title: "貧血", marker: "10%以上", note: "倦怠感、息切れ、頻脈などの症候とセットで確認。" },
          { title: "皮疹 / 皮膚症状", marker: "10-24%", note: "CCO regimen monograph では rash が 10-24% に含まれる。軽症に見えても、範囲拡大や粘膜症状があれば重症薬疹を除外する。" },
          { title: "悪心・嘔吐・食欲低下", marker: "症候確認", note: "脱水や経口摂取低下につながるため、day情報とあわせて確認。" },
          { title: "倦怠感", marker: "症候確認", note: "感染や貧血、臓器障害のサインでないか併せて判断。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "遅発性を含む感染リスク", marker: "GBらしさ", note: "抗 CD20 抗体による免疫影響を踏まえ、時期を問わず感染兆候を意識する。" },
          { title: "B細胞枯渇関連イベント", marker: "GBらしさ", note: "一般的な化学療法毒性だけでなく、抗体由来の感染リスクを忘れない。" },
          { title: "骨髄抑制の遷延", marker: "次コース影響", note: "次コース延期や介入判断に直結しやすい。" },
          { title: "皮疹の遷延 / 重症化", marker: "ベンダムスチン注意", note: "皮疹は AE評価だけでなく overview でも意識する。特に再投与で増悪する皮膚症状や重症薬疹の初期像を見逃さない。" },
        ],
      },
    ],
    symptoms: [
      { id: "febrile-neutropenia", name: "発熱性好中球減少症", tag: "重篤", checklist: "発熱、ANC低下、悪寒、血圧低下、呼吸器症状、局所感染徴候", grades: { 1: "-", 2: "慎重な評価を要する。", 3: "速やかな医学的評価または治療介入を要する。", 4: "生命を脅かす感染症や血行動態不安定を伴い、緊急対応を要する。", 5: "死亡。" } },
      { id: "infusion-reaction", name: "輸注関連反応", tag: "特徴的", grades: { 1: "軽度。", 2: "治療または投与中断を要する。速やかに改善しうる。", 3: "遷延または再発しうる高度の症状で、入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー／水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴・TPN・入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "diarrhea", name: "下痢", tag: "頻用", grades: { 1: "ベースラインより < 4 回/日の増加。", 2: "ベースラインより 4 〜 6 回/日の増加。", 3: "ベースラインより >= 7 回/日の増加、失禁、入院、高度脱水。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "constipation", name: "便秘", tag: "頻用", grades: { 1: "ときどき症状がある。軽い介入で対応可能。", 2: "定期的な下剤／浣腸／治療を要する。", 3: "便塞栓など高度介入を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "mucositis", name: "口腔粘膜炎", tag: "頻用", grades: { 1: "無症候または軽度。", 2: "中等度の疼痛があるが、経口摂取は可能。", 3: "高度の疼痛があり、経口摂取に支障をきたす。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "rash", name: "斑状丘疹状皮疹", tag: "特徴的", grades: { 1: "限局性。", 2: "範囲が広がる／症候を伴う。", 3: "広範囲で ADL に影響し、全身治療を要する。", 4: "生命を脅かす重度皮膚障害。", 5: "死亡。" } },
      { id: "dyspnea", name: "呼吸困難", tag: "重篤", checklist: "SpO2低下、頻呼吸、起坐呼吸、会話困難、胸部異常所見、画像異常", grades: { 1: "強い運動時のみ。", 2: "軽い労作で出現する。", 3: "安静時に出現する／ADL に支障をきたす。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "bleeding", name: "出血", tag: "重篤", checklist: "皮下出血、歯肉出血、鼻出血、血尿、黒色便 / 下血、Hb低下、血小板減少", grades: { 1: "軽度。", 2: "局所処置／軽度介入を要する。", 3: "輸血、処置、または入院を要する。", 4: "生命を脅かす出血。", 5: "死亡。" } },
      { id: "hbv-reactivation", name: "B型肝炎再活性化", tag: "重篤", checklist: "HBV既往 / キャリア、AST / ALT上昇、ビリルビン上昇、倦怠感、黄疸、肝炎所見", grades: { 1: "無症候。検査異常のみ。", 2: "内服治療または精査を要する。", 3: "高度の肝障害を伴い、入院または明確な医学的介入を要する。", 4: "生命を脅かす肝不全。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "ast", label: "AST増加", shortLabel: "AST", unit: "U/L", grades: LAB_DEFINITIONS.ast },
      { id: "alt", label: "ALT増加", shortLabel: "ALT", unit: "U/L", grades: LAB_DEFINITIONS.alt },
      { id: "alp", label: "ALP増加", shortLabel: "ALP", unit: "U/L", grades: LAB_DEFINITIONS.alp },
      { id: "tbil", label: "血中ビリルビン増加", shortLabel: "T-Bil", unit: "mg/dL", grades: LAB_DEFINITIONS.tbil },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
      { id: "na", label: "低ナトリウム血症 / 高ナトリウム血症", shortLabel: "Na", unit: "mmol/L", grades: LAB_DEFINITIONS.na },
      { id: "k", label: "低カリウム血症 / 高カリウム血症", shortLabel: "K", unit: "mmol/L", grades: LAB_DEFINITIONS.k },
      { id: "ca", label: "低カルシウム血症 / 高カルシウム血症", shortLabel: "Ca", unit: "mg/dL", grades: LAB_DEFINITIONS.ca },
    ],
  },
  polaBr: {
    id: "polaBr",
    name: "Pola-BR療法",
    subtitle: "Polatuzumab vedotin + Bendamustine + Rituximab",
    dayHints: [
      { min: 1, max: 3, text: "day 1-3 は輸注関連反応、発熱、悪寒、消化器症状、TLS を意識して確認。" },
      { min: 4, max: 10, text: "day 4-10 は発熱、感染徴候、下痢、食欲低下、末梢神経障害の出現を確認。" },
      { min: 11, max: 21, text: "day 11-21 は骨髄抑制、感染症、肺炎、出血傾向、神経障害遷延を意識。" },
      { min: 22, max: 99, text: "遅発性の骨髄抑制、感染症、末梢神経障害、次コース影響を確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "重度感染症 / 肺炎", marker: "最優先", note: "FDA は serious adverse reactions の多くが infection としており、肺炎も頻度上位。発熱、咳、SpO2低下を優先確認。" },
          { title: "発熱性好中球減少症 / 高度好中球減少", marker: "要介入", note: "cytopenia は治療中断理由としても重要。発熱や感染徴候と合わせて評価。" },
          { title: "高度血小板減少 / 出血", marker: "要介入", note: "出血症状と次コース可否に直結しやすい。" },
          { title: "輸注関連反応", marker: "day 1重要", note: "polatuzumab と rituximab の初回近接投与で特に注意。grade 3-4 なら中止検討。" },
          { title: "重度皮膚障害 / SCARs", marker: "見逃し注意", note: "CCO と eviQ では SJS / TEN / DRESS を含む重度皮膚障害が強調される。発疹に加えて粘膜症状、水疱、疼痛、全身症状を伴う場合は重症化を疑う。" },
          { title: "腫瘍崩壊症候群", marker: "見逃し注意", note: "高腫瘍量や治療初期で意識。電解質異常、腎機能、尿酸上昇を確認。" },
          { title: "進行性多巣性白質脳症 / 神経症状", marker: "まれだが重篤", note: "polatuzumab の警告として意識。新規の神経症状は見逃さない。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "好中球減少", marker: "49%", note: "FDA の GO29365 安全性表で all-grade 49%。感染症のトリガーとして重要。" },
          { title: "血小板減少", marker: "49%", note: "FDA の GO29365 安全性表で all-grade 49%。出血リスクと次コース判断に影響。" },
          { title: "貧血", marker: "47%", note: "FDA の GO29365 安全性表で all-grade 47%。倦怠感、息切れの背景として確認。" },
          { title: "末梢神経障害", marker: "特徴的", note: "polatuzumab 由来として重要。感覚障害やしびれの遷延を確認。" },
          { title: "下痢", marker: "38%", note: "FDA の GO29365 安全性表で all-grade 38%。脱水や栄養低下につながるため確認。" },
          { title: "発熱", marker: "33%", note: "FDA の GO29365 安全性表で all-grade 33%。感染症、FN、輸注関連反応との切り分けが必要。" },
          { title: "食欲低下", marker: "27%", note: "FDA の GO29365 安全性表で all-grade 27%。全身状態低下の把握に有用。" },
          { title: "皮疹 / そう痒 / 皮膚症状", marker: "10-24%", note: "CCO regimen monograph では rash, pruritus が 10-24% に含まれる。PMDA でも発疹は 10%以上の副作用として記載される。" },
          { title: "肺炎", marker: "22%", note: "FDA の GO29365 安全性表で all-grade 22%、grade 3+ 16%。見逃し注意。" },
          { title: "疲労", marker: "eviQ/実臨床", note: "eviQ と P-DRIVE/リアルワールド報告でも継続して重要。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "末梢神経障害", marker: "Polaらしさ", note: "GO29365 と eviQ で継続的に強調される有害事象。次コース判断に影響。" },
          { title: "輸注関連反応", marker: "抗体/ADC", note: "rituximab・polatuzumab 投与日に評価優先度が高い。" },
          { title: "日和見感染を含む感染症", marker: "見逃し注意", note: "FDA 警告事項として serious and opportunistic infections がある。" },
          { title: "腫瘍崩壊症候群", marker: "初期評価", note: "治療導入初期に特に意識。" },
          { title: "皮疹の遷延 / 重症化", marker: "皮膚毒性", note: "eviQ では skin rash と SCARs、CCO では severe or progressive skin reactions に言及がある。軽症皮疹でも進展がないか追う。" },
          { title: "PMLを示唆する神経症状", marker: "まれだが重篤", note: "eviQ と FDA 警告事項で強調。新規の認知・行動・神経症状は要注意。" },
        ],
      },
    ],
    symptoms: [
      { id: "febrile-neutropenia", name: "発熱性好中球減少症", tag: "重篤", checklist: "発熱、ANC低下、悪寒、血圧低下、呼吸器症状、局所感染徴候", grades: { 1: "-", 2: "慎重な評価を要する。", 3: "速やかな医学的評価または治療介入を要する。", 4: "生命を脅かす感染症や血行動態不安定を伴い、緊急対応を要する。", 5: "死亡。" } },
      { id: "infusion-reaction", name: "輸注関連反応", tag: "特徴的", grades: { 1: "軽度。", 2: "治療または投与中断を要する。速やかに改善しうる。", 3: "遷延または再発しうる高度の症状で、入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "pneumonia", name: "肺炎", tag: "重篤", checklist: "発熱、咳、喀痰、SpO2低下、呼吸数増加、胸部画像浸潤影", grades: { 1: "-", 2: "内服治療を要する。", 3: "静注治療または入院を要する。", 4: "生命を脅かす呼吸不全を伴う。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "appetite", name: "食欲不振", tag: "頻用", grades: { 1: "食習慣の変化を伴わない食欲低下。", 2: "経口摂取量の変化を伴うが、著明な体重減少はない。経口栄養補助を要することがある。", 3: "著明な体重減少または栄養不良を伴う。経管栄養／TPNを要する。", 4: "-", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー／水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴・TPN・入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "diarrhea", name: "下痢", tag: "頻用", grades: { 1: "ベースラインより < 4 回/日の増加。", 2: "ベースラインより 4 〜 6 回/日の増加。", 3: "ベースラインより >= 7 回/日の増加、失禁、入院、高度脱水。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "peripheral-sensory-neuropathy", name: "末梢性感覚ニューロパチー", tag: "特徴的", grades: { 1: "無症候。深部腱反射消失または知覚異常はあるが機能障害なし。", 2: "中等度の症状。手段的ADLが制限される。", 3: "高度の症状。self care ADL が制限される。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "rash", name: "斑状丘疹状皮疹", tag: "特徴的", grades: { 1: "限局性。", 2: "範囲が広がる／症候を伴う。", 3: "広範囲で ADL に影響し、全身治療を要する。", 4: "生命を脅かす重度皮膚障害。", 5: "死亡。" } },
      { id: "dyspnea", name: "呼吸困難", tag: "重篤", checklist: "SpO2低下、頻呼吸、起坐呼吸、会話困難、胸部異常所見、画像異常", grades: { 1: "強い運動時のみ。", 2: "軽い労作で出現する。", 3: "安静時に出現する／ADL に支障をきたす。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "hemorrhage", name: "出血", tag: "重篤", checklist: "皮下出血、歯肉出血、鼻出血、血尿、黒色便 / 下血、Hb低下、血小板減少", grades: { 1: "軽度。", 2: "局所処置／軽度介入を要する。", 3: "輸血、処置、または入院を要する。", 4: "生命を脅かす出血。", 5: "死亡。" } },
      { id: "tumor-lysis", name: "腫瘍崩壊症候群", tag: "重篤", checklist: "K上昇、P上昇、Ca低下、尿酸上昇、Cr上昇、不整脈、乏尿", grades: { 1: "-", 2: "臨床的または検査上の異常を認め、慎重な評価を要する。", 3: "入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "cognitive-disturbance", name: "認知障害 / 中枢神経症状", tag: "重篤", checklist: "意識変容、記銘力低下、性格変化、失語、麻痺、けいれん、新規神経脱落症状", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "ast", label: "AST増加", shortLabel: "AST", unit: "U/L", grades: LAB_DEFINITIONS.ast },
      { id: "alt", label: "ALT増加", shortLabel: "ALT", unit: "U/L", grades: LAB_DEFINITIONS.alt },
      { id: "alp", label: "ALP増加", shortLabel: "ALP", unit: "U/L", grades: LAB_DEFINITIONS.alp },
      { id: "tbil", label: "血中ビリルビン増加", shortLabel: "T-Bil", unit: "mg/dL", grades: LAB_DEFINITIONS.tbil },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
      { id: "na", label: "低ナトリウム血症 / 高ナトリウム血症", shortLabel: "Na", unit: "mmol/L", grades: LAB_DEFINITIONS.na },
      { id: "k", label: "低カリウム血症 / 高カリウム血症", shortLabel: "K", unit: "mmol/L", grades: LAB_DEFINITIONS.k },
      { id: "mg", label: "低マグネシウム血症 / 高マグネシウム血症", shortLabel: "Mg", unit: "mg/dL", grades: LAB_DEFINITIONS.mg },
      { id: "ca", label: "低カルシウム血症 / 高カルシウム血症", shortLabel: "Ca", unit: "mg/dL", grades: LAB_DEFINITIONS.ca },
      { id: "uric-acid", label: "高尿酸血症", shortLabel: "尿酸", unit: "mg/dL", grades: LAB_DEFINITIONS["uric-acid"] },
      { id: "phosphate", label: "高リン血症 / 低リン血症", shortLabel: "P", unit: "mg/dL", grades: LAB_DEFINITIONS.phosphate },
    ],
  },
  atra: {
    id: "atra",
    name: "ATRA+ATO療法",
    subtitle: "All-trans retinoic acid + arsenic trioxide",
    dayHints: [
      { min: 1, max: 7, text: "day 1-7 は出血 / DIC、分化症候群、QT延長リスク、K / Mg低下、頭痛を優先確認。" },
      { min: 8, max: 14, text: "day 8-14 は分化症候群、呼吸苦、浮腫、肝機能障害、QT延長 / 不整脈症状を意識。" },
      { min: 15, max: 28, text: "day 15-28 は頭痛、皮膚 / 粘膜症状、肝障害、電解質異常、末梢神経症状を確認。" },
      { min: 29, max: 99, text: "維持や後半ではQT延長 / 電解質異常、肝障害、頭痛、皮膚症状、神経症状を継続確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "分化症候群", marker: "最優先", note: "ATRA+ATO でも最重要。発熱、呼吸苦、浮腫、体重増加、胸水 / 心嚢液、腎障害を伴い致死的になりうる。" },
          { title: "出血 / DIC", marker: "初期重要", note: "APL では治療初期の出血死が重要。皮下出血、歯肉出血、血尿、頭蓋内出血を示唆する症状を見逃さない。" },
          { title: "QT延長 / 不整脈", marker: "ATO重要", note: "ATO で特徴的な重篤毒性。失神、動悸、めまいがあれば心電図と K / Mg を至急確認する。" },
          { title: "高度肝機能障害", marker: "要介入", note: "eviQ、CCO、PMDA で transaminase 上昇や肝毒性が強調される。" },
          { title: "感染症", marker: "要介入", note: "化学療法主体よりは少ないが、APL 治療初期では感染症を除外できない。発熱、咳、局所症状を優先確認。" },
          { title: "頭蓋内圧亢進 / 偽腫瘍性脳圧亢進", marker: "特徴的重篤", note: "ATRA 由来として重要。強い頭痛、悪心、視覚異常があれば意識する。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "頭痛", marker: "高頻度", note: "ATRA と ATO の両方で重要。頭蓋内圧亢進の初期像でないか併せて判断。" },
          { title: "悪心 / 嘔吐", marker: "10%以上", note: "CCO と PMDA で高頻度。脱水や内服継続に影響する。" },
          { title: "疲労", marker: "10%以上", note: "全身状態低下の把握に有用で、分化症候群や感染の前景症状でないか併せて判断。" },
          { title: "皮疹 / 皮膚乾燥 / 口唇炎", marker: "10%以上", note: "ATRA のレチノイド毒性として頻度が高い。" },
          { title: "肝機能障害", marker: "10%以上", note: "ATRA+ATO では transaminase 上昇が比較的よく見られ、治療継続判断に影響する。" },
          { title: "低K / 低Mg などの電解質異常", marker: "ATO関連", note: "QT延長リスクと直結するため、症状がなくても継続確認する。" },
          { title: "浮腫 / 体重増加", marker: "症候確認", note: "単独でも起こるが、分化症候群の早期サインとしても重要。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "分化症候群", marker: "ATRA+ATOらしさ", note: "ATRA / ATO 系レジメンで最重要の特徴的毒性。" },
          { title: "QT延長 / 電解質異常", marker: "ATOらしさ", note: "ATO では心電図変化と K / Mg 管理が重要。レジメンの安全運用に直結する。" },
          { title: "頭蓋内圧亢進 / 視覚症状", marker: "ATRAらしさ", note: "強い頭痛や視覚異常が持続する場合に意識する。" },
          { title: "高ビタミンA様症候群", marker: "レチノイド毒性", note: "皮膚乾燥、口唇炎、浮腫、悪心などの組み合わせで現れうる。" },
          { title: "末梢神経症状", marker: "ATO注意", note: "ATO ではしびれや感覚障害が遷延することがあり、継続確認が必要。" },
          { title: "早期出血合併症", marker: "APL特有", note: "レジメン毒性だけでなく APL 病態に伴う早期出血リスクも常に確認する。" },
        ],
      },
    ],
    symptoms: [
      { id: "differentiation-syndrome", name: "分化症候群", tag: "特徴的", checklist: "発熱、体重増加、呼吸不全、肺浸潤、胸水 / 心嚢液、低血圧、腎不全", grades: { 1: "-", 2: "慎重な評価を要する。発熱、浮腫、体重増加、呼吸器症状などの早期徴候を認める。", 3: "ステロイド投与、入院、または明確な医学的介入を要する。", 4: "生命を脅かす呼吸 / 循環不全、多臓器障害を伴う。", 5: "死亡。" } },
      { id: "bleeding", name: "出血", tag: "重篤", checklist: "皮下出血、歯肉出血、鼻出血、血尿、黒色便 / 下血、凝固異常、血小板減少", grades: { 1: "軽度。", 2: "局所処置 / 軽度介入を要する。", 3: "輸血、処置、または入院を要する。", 4: "生命を脅かす出血。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "qt-prolongation", name: "QT延長 / 不整脈症状", tag: "特徴的", checklist: "QTc延長、動悸、失神、めまい、徐脈 / 頻脈、低K、低Mg", grades: { 1: "無症候。心電図異常のみ。", 2: "症候または治療調整を要する。", 3: "明確な医学的介入または入院を要する。", 4: "生命を脅かす不整脈。緊急対応を要する。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "dyspnea", name: "呼吸困難", tag: "重篤", checklist: "SpO2低下、頻呼吸、起坐呼吸、会話困難、胸部異常所見、画像異常", grades: { 1: "強い運動時のみ。", 2: "軽い労作で出現する。", 3: "安静時に出現する / ADL に支障をきたす。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "edema-limbs", name: "浮腫", tag: "特徴的", grades: { 1: "軽度。", 2: "中等度。内服や局所対応を要する。", 3: "高度で ADL に影響し、明確な医学的介入を要する。", 4: "生命を脅かす全身浮腫 / 臓器障害を伴う。", 5: "死亡。" } },
      { id: "headache", name: "頭痛", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。内服治療を要する。", 3: "高度または持続性で、画像 / 眼科評価や明確な医学的介入を要する。", 4: "生命を脅かす神経学的異常を伴う。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー / 水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴 / TPN / 入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "mucositis", name: "口腔粘膜炎", tag: "頻用", grades: { 1: "無症候または軽度。", 2: "中等度の疼痛があるが、経口摂取は可能。", 3: "高度の疼痛があり、経口摂取に支障をきたす。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "rash", name: "斑状丘疹状皮疹", tag: "特徴的", grades: { 1: "限局性。", 2: "範囲が広がる / 症候を伴う。", 3: "広範囲で ADL に影響し、全身治療を要する。", 4: "生命を脅かす重度皮膚障害。", 5: "死亡。" } },
      { id: "peripheral-sensory-neuropathy", name: "末梢性感覚ニューロパチー", tag: "特徴的", grades: { 1: "無症候。深部腱反射消失または知覚異常はあるが機能障害なし。", 2: "中等度の症状。手段的ADLが制限される。", 3: "高度の症状。self care ADL が制限される。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "ast", label: "AST増加", shortLabel: "AST", unit: "U/L", grades: LAB_DEFINITIONS.ast },
      { id: "alt", label: "ALT増加", shortLabel: "ALT", unit: "U/L", grades: LAB_DEFINITIONS.alt },
      { id: "alp", label: "ALP増加", shortLabel: "ALP", unit: "U/L", grades: LAB_DEFINITIONS.alp },
      { id: "tbil", label: "血中ビリルビン増加", shortLabel: "T-Bil", unit: "mg/dL", grades: LAB_DEFINITIONS.tbil },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
      { id: "na", label: "低ナトリウム血症 / 高ナトリウム血症", shortLabel: "Na", unit: "mmol/L", grades: LAB_DEFINITIONS.na },
      { id: "k", label: "低カリウム血症 / 高カリウム血症", shortLabel: "K", unit: "mmol/L", grades: LAB_DEFINITIONS.k },
      { id: "ca", label: "低カルシウム血症 / 高カルシウム血症", shortLabel: "Ca", unit: "mg/dL", grades: LAB_DEFINITIONS.ca },
      { id: "mg", label: "低マグネシウム血症 / 高マグネシウム血症", shortLabel: "Mg", unit: "mg/dL", grades: LAB_DEFINITIONS.mg },
      { id: "uric-acid", label: "高尿酸血症", shortLabel: "尿酸", unit: "mg/dL", grades: LAB_DEFINITIONS["uric-acid"] },
      { id: "phosphate", label: "高リン血症 / 低リン血症", shortLabel: "P", unit: "mg/dL", grades: LAB_DEFINITIONS.phosphate },
    ],
  },
  hdMtx: {
    id: "hdMtx",
    name: "HD-MTX療法（MTX / Ara-C）",
    subtitle: "High-dose methotrexate + cytarabine for Secondary CNS Lymphoma",
    dayHints: [
      { min: 1, max: 3, text: "day 1-3 は悪心 / 嘔吐、頭痛、発熱、眼症状、ふらつき / 構音障害、尿量変化を確認。" },
      { min: 4, max: 7, text: "day 4-7 は口腔粘膜炎、下痢、食欲低下、肝腎機能悪化、持続する発熱を確認。" },
      { min: 8, max: 15, text: "day 8-15 は好中球減少、発熱性好中球減少症、感染症、血小板減少 / 出血、貧血症状を優先確認。" },
      { min: 16, max: 21, text: "後半は骨髄抑制の遷延、腎障害による MTX 排泄遅延、肝障害、神経 / 眼症状の持続を確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "発熱性好中球減少症 / 重度感染症", marker: "最優先", note: "Ferreri 2015 の SCNSL 誘導相（HD-MTX + HD-ara-C + rituximab + IT liposomal ara-C）では、grade 3-4 の febrile neutropenia / infection が 11 / 71 コースでみられた。発熱、悪寒、咳、局所症状を優先して評価する。" },
          { title: "高度好中球減少", marker: "grade 4 77%", note: "同誘導相の toxicity table で grade 4 neutropenia は 55 / 71 コース。感染症のトリガーとして最重要。" },
          { title: "高度血小板減少 / 出血", marker: "grade 4 62%", note: "同誘導相で grade 4 thrombocytopenia は 44 / 71 コース。血尿、鼻出血、歯肉出血、黒色便を確認する。" },
          { title: "腎障害 / MTX排泄遅延", marker: "HD-MTX注意", note: "eviQ と methotrexate label で強調される重要毒性。尿量低下や Cr 上昇があると遷延毒性につながるため、早期に拾う。" },
          { title: "神経毒性 / 脳症・小脳症状", marker: "見逃し注意", note: "高用量 cytarabine と methotrexate の両方で中枢神経毒性がありうる。ふらつき、複視、構音障害、意識変容、けいれんは要注意。" },
          { title: "肝障害", marker: "要モニター", note: "同誘導相で grade 3-4 hepatotoxicity は 8 / 71 コース。倦怠感、黄疸、食欲低下や AST / ALT 上昇を追う。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "好中球減少", marker: "grade 4 77%", note: "Ferreri 2015 の SCNSL 誘導相で最も目立つ毒性。day 8 以降の感染評価とセットで見る。" },
          { title: "血小板減少", marker: "grade 4 62%", note: "出血兆候や次コース可否に直結しやすい。" },
          { title: "貧血", marker: "grade 3-4 27%", note: "同誘導相で grade 3-4 anemia は 19 / 71 コース。疲労、息切れ、頻脈の背景として確認する。" },
          { title: "悪心 / 嘔吐", marker: "症候確認", note: "eviQ patient information でも重要な early toxicity。脱水や経口摂取低下につながる。" },
          { title: "口腔粘膜炎 / 口内炎", marker: "症候確認", note: "methotrexate label と eviQ で一貫して重要。食事摂取低下や感染リスクに影響する。" },
          { title: "疲労 / 食欲低下", marker: "症候確認", note: "骨髄抑制、感染、肝腎障害の前景症状でないか併せて判断する。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "眼障害 / 結膜炎・角膜障害", marker: "Ara-Cらしさ", note: "eviQ では eye changes として明示される。充血、流涙、眼痛、羞明、霧視を見逃さない。" },
          { title: "サイトカラビン症候群", marker: "6-12時間", note: "cytarabine の characteristic toxicity。発熱、筋肉痛、骨痛、発疹、倦怠感が投与後に出ることがある。" },
          { title: "脳症 / 小脳失調", marker: "HD-Ara-C / HD-MTX", note: "高用量 antimetabolite の神経毒性として重要。歩行障害、書字障害、構音障害、複視、傾眠に注意する。" },
          { title: "腎障害による毒性遷延", marker: "HD-MTXらしさ", note: "腎機能悪化で methotrexate の排泄が遅れると、粘膜障害や骨髄抑制が長引きうる。" },
        ],
      },
    ],
    symptoms: [
      { id: "febrile-neutropenia", name: "発熱性好中球減少症", tag: "重篤", checklist: "発熱、ANC低下、悪寒、血圧低下、呼吸器症状、局所感染徴候", grades: { 1: "-", 2: "慎重な評価を要する。", 3: "速やかな医学的評価または治療介入を要する。", 4: "生命を脅かす感染症や血行動態不安定を伴い、緊急対応を要する。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "appetite", name: "食欲不振", tag: "頻用", grades: { 1: "食習慣の変化を伴わない食欲低下。", 2: "経口摂取量の変化を伴うが、著明な体重減少はない。経口栄養補助を要することがある。", 3: "著明な体重減少または栄養不良を伴う。経管栄養 / TPNを要する。", 4: "-", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー / 水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴 / TPN / 入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "diarrhea", name: "下痢", tag: "頻用", grades: { 1: "ベースラインより < 4 回/日の増加。", 2: "ベースラインより 4 〜 6 回/日の増加。", 3: "ベースラインより >= 7 回/日の増加、失禁、入院、高度脱水。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "mucositis", name: "口腔粘膜炎", tag: "頻用", grades: { 1: "無症候または軽度。", 2: "中等度の疼痛があるが、経口摂取は可能。", 3: "高度の疼痛があり、経口摂取に支障をきたす。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "headache", name: "頭痛", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。内服治療を要する。", 3: "高度または持続性で、画像 / 神経学的評価や明確な医学的介入を要する。", 4: "生命を脅かす神経学的異常を伴う。", 5: "死亡。" } },
      { id: "bleeding", name: "出血", tag: "重篤", checklist: "皮下出血、歯肉出血、鼻出血、血尿、黒色便 / 下血、Hb低下、血小板減少", grades: { 1: "軽度。", 2: "局所処置 / 軽度介入を要する。", 3: "輸血、処置、または入院を要する。", 4: "生命を脅かす出血。", 5: "死亡。" } },
      { id: "encephalopathy-cerebellar", name: "脳症 / 小脳失調", tag: "特徴的", checklist: "ふらつき、傾眠、複視、興奮、歩行障害、書字障害、構音障害、意識変容、けいれん", grades: { 1: "軽いふらつき、複視、集中低下などで機能障害は軽度。", 2: "歩行、書字、会話などに中等度の支障があり、経過観察や治療調整を要する。", 3: "明らかな脳症 / 小脳症状で ADL に支障をきたし、入院または明確な医学的介入を要する。", 4: "けいれん、昏睡、急速な神経学的悪化など生命を脅かす。", 5: "死亡。" } },
      { id: "ocular-toxicity", name: "結膜炎 / 角膜障害", tag: "特徴的", checklist: "充血、眼痛、刺激感、流涙、ざらつき、羞明、霧視", grades: { 1: "軽度の眼刺激症状。", 2: "点眼や眼科的評価を要する中等度症状。", 3: "高度の疼痛、視機能低下、または明確な医学的介入を要する。", 4: "視力に重大な影響を及ぼす。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "ast", label: "AST増加", shortLabel: "AST", unit: "U/L", grades: LAB_DEFINITIONS.ast },
      { id: "alt", label: "ALT増加", shortLabel: "ALT", unit: "U/L", grades: LAB_DEFINITIONS.alt },
      { id: "alp", label: "ALP増加", shortLabel: "ALP", unit: "U/L", grades: LAB_DEFINITIONS.alp },
      { id: "tbil", label: "血中ビリルビン増加", shortLabel: "T-Bil", unit: "mg/dL", grades: LAB_DEFINITIONS.tbil },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
    ],
  },
  lisoCel: {
    id: "lisoCel",
    name: "CAR-T細胞療法（Liso-cel）",
    subtitle: "Lisocabtagene maraleucel + lymphodepleting fludarabine / cyclophosphamide",
    dayHints: [
      { min: 1, max: 3, text: "day 1-3 は前処置 CPA / FLU に伴う悪心 / 嘔吐、食欲低下、下痢、血尿と、輸注関連反応、発熱、早期 CRS、TLS の初期徴候を確認。" },
      { min: 4, max: 7, text: "day 4-7 は CRS、低血圧、低酸素、発熱持続、初期の神経系事象に加え、血尿 / 出血性膀胱炎や消化器症状の遷延を確認。" },
      { min: 8, max: 14, text: "day 8-14 は遅れて出る神経系事象、感染症、血球減少遷延、頭痛や振戦を意識する。" },
      { min: 15, max: 28, text: "day 15-28 は遷延する血球減少、感染症、低γグロブリン血症、倦怠感の持続を確認。" },
      { min: 29, max: 99, text: "day 29以降は遷延する好中球 / 血小板減少、再発感染、低γグロブリン血症、遅発神経症状を継続確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "サイトカイン放出症候群（CRS）", marker: "最優先", note: "ブレヤンジの重大な副作用で約半数にみられる。発熱に加えて低血圧、低酸素、頻脈、悪寒があれば最優先で評価する。" },
          { title: "神経系事象（ICANS）", marker: "最優先", note: "重大な副作用として 34.0%。錯乱、失語、振戦、傾眠、けいれんを見逃さない。初回発現は投与後 1〜66 日の範囲が報告されている。" },
          { title: "重度感染症", marker: "要介入", note: "重大な副作用として感染症 6.4%。遷延する血球減少や低γグロブリン血症を背景に遅れて出る感染にも注意する。" },
          { title: "遷延する血球減少", marker: "day 29以降", note: "重大な副作用として血球減少 35.4%。数週間にわたり好中球減少、血小板減少、貧血が続きうるため、CBC を継続確認する。" },
          { title: "輸注関連反応", marker: "投与日", note: "重大な副作用として infusion reaction 0.8%。投与中の過敏反応、呼吸器症状、血行動態変化に注意する。" },
          { title: "腫瘍崩壊症候群", marker: "初期重要", note: "重大な副作用として腫瘍崩壊症候群 0.5%。導入初期の電解質異常、Cr 上昇、不整脈、乏尿を見逃さない。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "好中球減少", marker: "55.6%", note: "BMS 製品特性ページでは主な副作用の最上位。感染症のトリガーとして最重要。" },
          { title: "発熱", marker: "29.6%", note: "CRS、感染症、輸注関連反応の切り分け起点になるため、単独でも軽視しない。" },
          { title: "血小板減少", marker: "25.9%", note: "数週間遷延しうるため、出血徴候と次の処置判断に影響する。" },
          { title: "貧血 / 白血球減少", marker: "18.5% / 14.8%", note: "倦怠感や感染リスクの背景として確認する。" },
          { title: "疲労", marker: "頻用", note: "米国添付文書でも common AE。CRS、感染症、貧血の前景症状でないか併せて判断する。" },
          { title: "悪心 / 嘔吐・食欲低下 / 下痢", marker: "CPA / FLU", note: "フルダラビン PMDA とシクロホスファミド添付文書で支持される前処置由来AE。脱水や経口摂取低下につながるため、投与初期から確認する。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "サイトカイン放出症候群（CRS）", marker: "CAR-Tらしさ", note: "ブレヤンジの bedside review で最も見逃したくない特異的毒性。" },
          { title: "神経系事象（ICANS）", marker: "遅発に注意", note: "CRS と同時でも、その後でも起こりうる。書字障害、失語、振戦、傾眠を継続確認する。" },
          { title: "低γグロブリン血症", marker: "感染再発", note: "重大な副作用として 5.8%。反復感染や遷延感染の背景として意識する。" },
          { title: "遷延する血球減少", marker: "数週間", note: "CAR-T 本体と前処置の双方で起こりうる。感染症や出血傾向の遅発リスクにつながる。" },
          { title: "血尿 / 出血性膀胱炎", marker: "CPA注意", note: "シクロホスファミド由来として見逃したくない。肉眼的血尿、排尿時痛、頻尿、血塊があれば早めに評価する。" },
        ],
      },
    ],
    symptoms: [
      { id: "cytokine-release-syndrome", name: "サイトカイン放出症候群", tag: "重篤", checklist: "発熱、低血圧、頻脈、低酸素、悪寒、SpO2低下、倦怠感", grades: { 1: "発熱など軽度症状のみ。", 2: "補液、低流量酸素、または単回のトシリズマブ等を要する。", 3: "昇圧薬 1 剤、高流量酸素、または明確な入院管理を要する。", 4: "多剤昇圧 / 人工呼吸管理など生命を脅かす。", 5: "死亡。" } },
      { id: "neurologic-events", name: "神経系事象（ICANS）", tag: "重篤", checklist: "錯乱、失語、振戦、書字障害、傾眠、注意障害、けいれん、意識変容", grades: { 1: "軽度。注意低下、軽い振戦、軽い書字障害など。", 2: "中等度。会話、書字、手段的 ADL に支障があり、評価や治療調整を要する。", 3: "高度。明らかな意識障害や失語があり、入院または明確な医学的介入を要する。", 4: "けいれん、昏睡、急速な神経学的悪化など生命を脅かす。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "infusion-reaction", name: "輸注関連反応", tag: "特徴的", grades: { 1: "軽度。", 2: "治療または投与中断を要する。速やかに改善しうる。", 3: "遷延または再発しうる高度の症状で、入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "dyspnea", name: "呼吸困難", tag: "重篤", checklist: "SpO2低下、頻呼吸、起坐呼吸、会話困難、胸部異常所見、画像異常", grades: { 1: "強い運動時のみ。", 2: "軽い労作で出現する。", 3: "安静時に出現する / ADL に支障をきたす。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "appetite", name: "食欲不振", tag: "頻用", grades: { 1: "食習慣の変化を伴わない食欲低下。", 2: "経口摂取量の変化を伴うが、著明な体重減少はない。経口栄養補助を要することがある。", 3: "著明な体重減少または栄養不良を伴う。経管栄養 / TPNを要する。", 4: "-", 5: "死亡。" } },
      { id: "headache", name: "頭痛", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。内服治療を要する。", 3: "高度または持続性で、神経学的評価や明確な医学的介入を要する。", 4: "生命を脅かす神経学的異常を伴う。", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー / 水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴 / TPN / 入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "diarrhea", name: "下痢", tag: "頻用", grades: { 1: "ベースラインより < 4 回/日の増加。", 2: "ベースラインより 4 〜 6 回/日の増加。", 3: "ベースラインより >= 7 回/日の増加、失禁、入院、高度脱水。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "hematuria", name: "血尿 / 出血性膀胱炎", tag: "特徴的", checklist: "肉眼的血尿、排尿時痛、頻尿、残尿感、尿混濁、血塊、Hb低下", grades: { 1: "顕微鏡的血尿または軽度症状。", 2: "肉眼的血尿または中等度症状。内服や局所対応を要する。", 3: "持続する血尿、血塊、膀胱洗浄、入院または明確な医学的介入を要する。", 4: "生命を脅かす出血または尿路閉塞。緊急対応を要する。", 5: "死亡。" } },
      { id: "tumor-lysis", name: "腫瘍崩壊症候群", tag: "重篤", checklist: "K上昇、P上昇、Ca低下、尿酸上昇、Cr上昇、不整脈、乏尿", grades: { 1: "-", 2: "臨床的または検査上の異常を認め、慎重な評価を要する。", 3: "入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
      { id: "k", label: "低カリウム血症 / 高カリウム血症", shortLabel: "K", unit: "mmol/L", grades: LAB_DEFINITIONS.k },
      { id: "ca", label: "低カルシウム血症 / 高カルシウム血症", shortLabel: "Ca", unit: "mg/dL", grades: LAB_DEFINITIONS.ca },
      { id: "uric-acid", label: "高尿酸血症", shortLabel: "尿酸", unit: "mg/dL", grades: LAB_DEFINITIONS["uric-acid"] },
      { id: "phosphate", label: "高リン血症 / 低リン血症", shortLabel: "P", unit: "mg/dL", grades: LAB_DEFINITIONS.phosphate },
    ],
  },
  daEpochR: {
    id: "daEpochR",
    name: "DA-EPOCH-R療法",
    subtitle: "Dose-adjusted Etoposide + Prednisone + Vincristine + Cyclophosphamide + Doxorubicin + Rituximab",
    dayHints: [
      { min: 1, max: 3, text: "day 1-3 は輸注関連反応、悪寒、発熱、悪心 / 嘔吐、腫瘍崩壊症候群の初期徴候を確認。" },
      { min: 4, max: 7, text: "day 4-7 は口腔粘膜炎、便通異常、末梢神経障害、食欲低下、脱水を意識して確認。" },
      { min: 8, max: 14, text: "day 8-14 は好中球減少、発熱性好中球減少症、感染症、出血傾向を優先して確認。" },
      { min: 15, max: 28, text: "後半は骨髄抑制の遷延、感染症、心機能低下、神経障害遷延、次コースへの影響を確認。" },
    ],
    adverseSections: [
      {
        title: "重篤な副作用",
        tone: "danger",
        items: [
          { title: "発熱性好中球減少症 / 重度感染症", marker: "最優先", note: "eviQ と CCO で主要毒性。発熱、悪寒、咳、呼吸苦、局所症状があれば優先して評価する。" },
          { title: "高度好中球減少", marker: "要介入", note: "DA-EPOCH-R の dose adjustment に直結し、感染症のトリガーとして重要。" },
          { title: "高度血小板減少 / 出血", marker: "要介入", note: "出血症状や次コース可否に直結するため、皮下出血、歯肉出血、血尿を確認する。" },
          { title: "輸注関連反応", marker: "day 1重要", note: "rituximab 初回で特に重要。発熱、悪寒、低血圧、呼吸器症状、皮疹の有無を確認する。" },
          { title: "腫瘍崩壊症候群", marker: "見逃し注意", note: "高腫瘍量や治療導入初期で重要。K、P、Ca、尿酸、Cr の変化や不整脈、乏尿を確認する。" },
          { title: "心機能低下 / 心毒性", marker: "アントラサイクリン", note: "doxorubicin 由来として重要。息切れ、浮腫、動悸、体重増加があれば心不全や心筋障害を疑う。" },
        ],
      },
      {
        title: "頻度の高い副作用",
        tone: "warn",
        items: [
          { title: "好中球減少", marker: "高頻度", note: "eviQ と CCO で主要毒性として一貫して強調される。" },
          { title: "貧血", marker: "10%以上", note: "倦怠感、息切れ、頻脈の背景として確認する。" },
          { title: "血小板減少", marker: "10%以上", note: "出血傾向と次コース判断に影響しやすい。" },
          { title: "悪心 / 嘔吐", marker: "10%以上", note: "脱水や経口摂取低下につながるため、day情報とあわせて確認する。" },
          { title: "口腔粘膜炎 / 口内炎", marker: "10%以上", note: "eviQ でも early toxicity として重要で、食事摂取や感染リスクに影響する。" },
          { title: "下痢", marker: "症候確認", note: "脱水や電解質異常につながるため、回数増加や経口摂取低下をあわせて確認する。" },
          { title: "疲労", marker: "症候確認", note: "骨髄抑制、感染、臓器障害の前景症状でないか併せて判断する。" },
        ],
      },
      {
        title: "特徴的な副作用",
        tone: "info",
        items: [
          { title: "末梢神経障害", marker: "vincristineらしさ", note: "しびれ、感覚低下、巧緻運動低下、便秘悪化などで出やすく、用量調整に影響する。" },
          { title: "便秘 / イレウス傾向", marker: "vincristineらしさ", note: "vincristine 由来として特徴的。排便間隔延長、腹満、腹痛、腸蠕動低下があれば早めに評価する。" },
          { title: "口腔粘膜炎の遷延", marker: "持続投与", note: "EPOCH の持続投与で粘膜障害が目立つことがあり、食事摂取や感染リスクに影響する。" },
          { title: "出血性膀胱炎 / 血尿", marker: "cyclophosphamide注意", note: "頻度の最上位ではないが見逃したくない。血尿、排尿時痛、頻尿、残尿感があれば膀胱炎や出血性膀胱炎を疑う。" },
          { title: "心毒性", marker: "doxorubicin注意", note: "累積投与量や既往によりリスクが上がり、遅発性もありうる。" },
          { title: "B型肝炎再活性化 / PML", marker: "rituximab注意", note: "rituximab 由来の見逃したくない重篤事象として意識する。" },
          { title: "腫瘍崩壊症候群", marker: "高腫瘍量注意", note: "導入初期に特に意識し、検査値変化と全身症状をあわせて確認する。" },
        ],
      },
    ],
    symptoms: [
      { id: "febrile-neutropenia", name: "発熱性好中球減少症", tag: "重篤", checklist: "発熱、ANC低下、悪寒、血圧低下、呼吸器症状、局所感染徴候", grades: { 1: "-", 2: "慎重な評価を要する。", 3: "速やかな医学的評価または治療介入を要する。", 4: "生命を脅かす感染症や血行動態不安定を伴い、緊急対応を要する。", 5: "死亡。" } },
      { id: "infusion-reaction", name: "輸注関連反応", tag: "特徴的", grades: { 1: "軽度。", 2: "治療または投与中断を要する。速やかに改善しうる。", 3: "遷延または再発しうる高度の症状で、入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "infection", name: "感染症", tag: "重篤", checklist: "発熱、悪寒、咳、呼吸苦、咽頭痛、局所疼痛 / 発赤、血圧低下", grades: { 1: "軽度。局所症状のみ。", 2: "局所治療または内服治療を要する。", 3: "静注治療、侵襲的処置、または入院を要する。", 4: "生命を脅かす感染症。緊急対応を要する。", 5: "死亡。" } },
      { id: "fever", name: "発熱", tag: "頻用", grades: { 1: "38.0 ℃以上 39.0 ℃未満。", 2: "39.0 ℃以上 40.0 ℃未満。", 3: "40.0 ℃以上 > 24 時間、または入院相当の評価・介入を要する。", 4: "生命を脅かす全身状態悪化を伴う。", 5: "死亡。" } },
      { id: "fatigue", name: "疲労", tag: "頻用", grades: { 1: "軽度。", 2: "中等度。ADLが制限される。", 3: "高度。self care ADL が制限される。", 4: "-", 5: "死亡。" } },
      { id: "appetite", name: "食欲不振", tag: "頻用", grades: { 1: "食習慣の変化を伴わない食欲低下。", 2: "経口摂取量の変化を伴うが、著明な体重減少はない。経口栄養補助を要することがある。", 3: "著明な体重減少または栄養不良を伴う。経管栄養／TPNを要する。", 4: "-", 5: "死亡。" } },
      { id: "nausea", name: "悪心", tag: "頻用", grades: { 1: "食欲低下を伴うが、食事量低下は軽度。", 2: "経口摂取量が明らかに低下する。", 3: "カロリー／水分補給に医療的介入を要する。", 4: "-", 5: "死亡。" } },
      { id: "vomiting", name: "嘔吐", tag: "頻用", grades: { 1: "24 時間に 1 〜 2 回。", 2: "24 時間に 3 〜 5 回。", 3: "24 時間に 6 回以上、または点滴・TPN・入院を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "diarrhea", name: "下痢", tag: "頻用", grades: { 1: "ベースラインより < 4 回/日の増加。", 2: "ベースラインより 4 〜 6 回/日の増加。", 3: "ベースラインより >= 7 回/日の増加、失禁、入院、高度脱水。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "constipation", name: "便秘", tag: "特徴的", grades: { 1: "ときどき症状がある。軽い介入で対応可能。", 2: "定期的な下剤／浣腸／治療を要する。", 3: "便塞栓など高度介入を要する。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "mucositis", name: "口腔粘膜炎", tag: "頻用", grades: { 1: "無症候または軽度。", 2: "中等度の疼痛があるが、経口摂取は可能。", 3: "高度の疼痛があり、経口摂取に支障をきたす。", 4: "生命を脅かす。", 5: "死亡。" } },
      { id: "peripheral-sensory-neuropathy", name: "末梢性感覚ニューロパチー", tag: "特徴的", grades: { 1: "無症候。深部腱反射消失または知覚異常はあるが機能障害なし。", 2: "中等度の症状。手段的ADLが制限される。", 3: "高度の症状。self care ADL が制限される。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "hematuria", name: "血尿 / 出血性膀胱炎", tag: "特徴的", checklist: "肉眼的血尿、排尿時痛、頻尿、残尿感、尿混濁、Hb低下", grades: { 1: "顕微鏡的血尿または軽度症状。", 2: "肉眼的血尿または中等度症状。内服や局所対応を要する。", 3: "持続する血尿、血塊、膀胱洗浄、入院または明確な医学的介入を要する。", 4: "生命を脅かす出血または尿路閉塞。緊急対応を要する。", 5: "死亡。" } },
      { id: "dyspnea", name: "呼吸困難", tag: "重篤", checklist: "SpO2低下、頻呼吸、起坐呼吸、会話困難、胸部異常所見、画像異常", grades: { 1: "強い運動時のみ。", 2: "軽い労作で出現する。", 3: "安静時に出現する／ADL に支障をきたす。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "bleeding", name: "出血", tag: "重篤", checklist: "皮下出血、歯肉出血、鼻出血、血尿、黒色便 / 下血、Hb低下、血小板減少", grades: { 1: "軽度。", 2: "局所処置／軽度介入を要する。", 3: "輸血、処置、または入院を要する。", 4: "生命を脅かす出血。", 5: "死亡。" } },
      { id: "tumor-lysis", name: "腫瘍崩壊症候群", tag: "重篤", checklist: "K上昇、P上昇、Ca低下、尿酸上昇、Cr上昇、不整脈、乏尿", grades: { 1: "-", 2: "臨床的または検査上の異常を認め、慎重な評価を要する。", 3: "入院または明確な医学的介入を要する。", 4: "生命を脅かす。緊急対応を要する。", 5: "死亡。" } },
      { id: "cardiac-disorders", name: "心機能低下 / 心不全症状", tag: "重篤", checklist: "息切れ、起坐呼吸、浮腫、体重増加、動悸、LVEF低下、胸部異常所見", grades: { 1: "無症候。検査異常のみ。", 2: "症候または内服治療を要する。", 3: "高度の症候または入院を要する。", 4: "生命を脅かす心不全。緊急対応を要する。", 5: "死亡。" } },
    ],
    labs: [
      { id: "wbc", label: "白血球数減少", shortLabel: "WBC", unit: "/μL", grades: LAB_DEFINITIONS.wbc },
      { id: "anc", label: "好中球数減少", shortLabel: "ANC", unit: "/μL", grades: LAB_DEFINITIONS.anc },
      { id: "hb", label: "貧血", shortLabel: "Hb", unit: "g/dL", grades: LAB_DEFINITIONS.hb },
      { id: "plt", label: "血小板数減少", shortLabel: "Plt", unit: "×10^4/μL", grades: LAB_DEFINITIONS.plt },
      { id: "ast", label: "AST増加", shortLabel: "AST", unit: "U/L", grades: LAB_DEFINITIONS.ast },
      { id: "alt", label: "ALT増加", shortLabel: "ALT", unit: "U/L", grades: LAB_DEFINITIONS.alt },
      { id: "alp", label: "ALP増加", shortLabel: "ALP", unit: "U/L", grades: LAB_DEFINITIONS.alp },
      { id: "tbil", label: "血中ビリルビン増加", shortLabel: "T-Bil", unit: "mg/dL", grades: LAB_DEFINITIONS.tbil },
      { id: "cr", label: "血中クレアチニン増加", shortLabel: "Cr", unit: "mg/dL", grades: LAB_DEFINITIONS.cr },
      { id: "na", label: "低ナトリウム血症 / 高ナトリウム血症", shortLabel: "Na", unit: "mmol/L", grades: LAB_DEFINITIONS.na },
      { id: "k", label: "低カリウム血症 / 高カリウム血症", shortLabel: "K", unit: "mmol/L", grades: LAB_DEFINITIONS.k },
      { id: "ca", label: "低カルシウム血症 / 高カルシウム血症", shortLabel: "Ca", unit: "mg/dL", grades: LAB_DEFINITIONS.ca },
      { id: "uric-acid", label: "高尿酸血症", shortLabel: "尿酸", unit: "mg/dL", grades: LAB_DEFINITIONS["uric-acid"] },
      { id: "phosphate", label: "高リン血症 / 低リン血症", shortLabel: "P", unit: "mg/dL", grades: LAB_DEFINITIONS.phosphate },
    ],
  },
};

const state = {
  regimenId: "gb",
  disease: "",
  cycle: "",
  day: "",
  symptomGrades: {},
  labValues: {},
  labRefLow: {},
  labRefHigh: {},
};

const elements = {
  regimenSelect: document.querySelector("#regimen-select"),
  diseaseInput: document.querySelector("#disease-input"),
  cycleInput: document.querySelector("#cycle-input"),
  dayInput: document.querySelector("#day-input"),
  contextSummary: document.querySelector("#context-summary"),
  timingHint: document.querySelector("#timing-hint"),
  adverseSections: document.querySelector("#adverse-sections"),
  selectedSymptoms: document.querySelector("#selected-symptoms"),
  symptomTemplate: document.querySelector("#symptom-card-template"),
  labGrid: document.querySelector("#lab-grid"),
  summaryCards: document.querySelector("#summary-cards"),
  resetSession: document.querySelector("#reset-session"),
};

function init() {
  hydrateState();
  bindEvents();
  renderAll();
  registerServiceWorker();
}

function hydrateState() {
  const saved = sessionStorage.getItem(SESSION_KEY);
  if (!saved) return;
  try {
    Object.assign(state, JSON.parse(saved));
  } catch (error) {
    console.warn("session restore failed", error);
  }
}

function persistState() {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
}

function bindEvents() {
  elements.regimenSelect.addEventListener("change", (event) => {
    state.regimenId = event.target.value;
    state.symptomGrades = {};
    state.labValues = {};
    state.labRefLow = {};
    state.labRefHigh = {};
    renderAll();
  });

  elements.diseaseInput.addEventListener("input", (event) => {
    state.disease = event.target.value;
    updateContext();
    persistState();
  });

  elements.cycleInput.addEventListener("input", (event) => {
    state.cycle = event.target.value;
    updateContext();
    persistState();
  });

  elements.dayInput.addEventListener("input", (event) => {
    state.day = event.target.value;
    updateContext();
    persistState();
  });

  elements.resetSession.addEventListener("click", () => {
    Object.assign(state, {
      regimenId: "gb",
      disease: "",
      cycle: "",
      day: "",
      symptomGrades: {},
      labValues: {},
      labRefLow: {},
      labRefHigh: {},
    });
    sessionStorage.removeItem(SESSION_KEY);
    renderAll();
  });
}

function renderAll() {
  syncInputs();
  renderAdverseSections();
  renderSymptoms();
  renderLabs();
  updateContext();
  renderSummary();
  persistState();
}

function syncInputs() {
  const regimenOptions = Object.values(REGIMENS)
    .map((regimen) => `<option value="${regimen.id}">${regimen.name}</option>`)
    .join("");
  if (elements.regimenSelect.innerHTML !== regimenOptions) {
    elements.regimenSelect.innerHTML = regimenOptions;
  }
  elements.regimenSelect.value = state.regimenId;
  elements.diseaseInput.value = state.disease;
  elements.cycleInput.value = state.cycle;
  elements.dayInput.value = state.day;
}

function currentRegimen() {
  return REGIMENS[state.regimenId];
}

function updateContext() {
  const regimen = currentRegimen();
  const disease = state.disease.trim() || "疾患名未入力";
  const cycle = state.cycle || "未入力";
  const day = state.day || "未入力";
  elements.contextSummary.textContent = `${regimen.name} / ${disease} / cycle ${cycle} / day ${day}`;
  elements.timingHint.textContent = findTimingHint(regimen, Number(state.day));
}

function findTimingHint(regimen, day) {
  if (!day) return "dayを入れると、発現時期の参考メモがここに出ます。";
  const match = regimen.dayHints.find((hint) => day >= hint.min && day <= hint.max);
  return match ? match.text : "このdayに対する個別メモは未設定です。骨髄抑制、感染、出血傾向を中心に確認。";
}

function renderAdverseSections() {
  const regimen = currentRegimen();
  elements.adverseSections.innerHTML = "";
  const sectionOrder = { danger: 0, info: 1, warn: 2 };

  [...regimen.adverseSections]
    .sort((left, right) => (sectionOrder[left.tone] ?? 99) - (sectionOrder[right.tone] ?? 99))
    .forEach((section) => {
    const card = document.createElement("article");
    card.className = "adverse-card";
    const markerClass = section.tone === "danger" ? "marker marker-danger" : section.tone === "warn" ? "marker marker-warn" : "marker marker-info";

    card.innerHTML = `
      <header>
        <h3>${section.title}</h3>
        <span class="${markerClass}">${section.tone === "danger" ? "見逃し注意" : section.tone === "warn" ? "高頻度" : "レジメン特異性"}</span>
      </header>
      <div class="adverse-list"></div>
    `;

    const list = card.querySelector(".adverse-list");
    section.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "adverse-item";
      row.innerHTML = `
        <div class="adverse-item-title">
          <strong>${item.title}</strong>
          <span class="${markerClass}">${item.marker}</span>
        </div>
      `;
      list.appendChild(row);
    });
    elements.adverseSections.appendChild(card);
  });
}

function renderSymptoms() {
  const regimen = currentRegimen();
  elements.selectedSymptoms.innerHTML = "";
  const symptomOrder = { 重篤: 0, 特徴的: 1, 頻用: 2 };

  [...regimen.symptoms]
    .sort((left, right) => (symptomOrder[left.tag] ?? 99) - (symptomOrder[right.tag] ?? 99))
    .forEach((symptom) => {
    const grades = { 0: "症候なし／評価対象外", ...symptom.grades };
    state.symptomGrades[symptom.id] ||= "0";

    const fragment = elements.symptomTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".symptom-card");
    const tag = fragment.querySelector(".symptom-tag");
    const name = fragment.querySelector(".symptom-name");
    const checklist = fragment.querySelector(".symptom-checklist");
    const checklistCopy = fragment.querySelector(".symptom-checklist-copy");
    const select = fragment.querySelector(".grade-select");

    tag.textContent = symptom.tag;
    name.textContent = symptom.name;
    if (symptom.checklist) {
      checklist.hidden = false;
      checklistCopy.textContent = symptom.checklist;
    }

    Object.entries(grades).forEach(([grade, definition]) => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = `Grade ${grade}  ${definition}`;
      select.appendChild(option);
    });

    select.value = state.symptomGrades[symptom.id];
    decorateGradeCard(card, Number(select.value));

    select.addEventListener("change", (event) => {
      state.symptomGrades[symptom.id] = event.target.value;
      decorateGradeCard(card, Number(event.target.value));
      renderSummary();
      persistState();
    });

    elements.selectedSymptoms.appendChild(fragment);
  });
}

function renderLabs() {
  const regimen = currentRegimen();
  elements.labGrid.innerHTML = "";

  regimen.labs.forEach((lab) => {
    state.labValues[lab.id] ??= "";
    state.labRefLow[lab.id] ??= defaultRefLow(lab.id);
    state.labRefHigh[lab.id] ??= defaultRefHigh(lab.id);

    const card = document.createElement("article");
    card.className = "lab-card";
    const refMode = LAB_REF_MODES[lab.id] || "both";
    const lowField = refMode === "high"
      ? ""
      : `
        <label class="field">
          <span>基準下限</span>
          <input id="lab-low-${lab.id}" name="lab-low-${lab.id}" type="number" step="any" inputmode="decimal" />
        </label>
      `;
    const highField = refMode === "low"
      ? ""
      : `
        <label class="field">
          <span>基準上限</span>
          <input id="lab-high-${lab.id}" name="lab-high-${lab.id}" type="number" step="any" inputmode="decimal" />
        </label>
      `;
    card.innerHTML = `
      <div class="lab-head">
        <strong>${lab.label}</strong>
        <details class="lab-reference lab-reference-inline">
          <summary>基準値編集</summary>
          <div class="lab-meta">
            ${lowField}
            ${highField}
          </div>
        </details>
      </div>
      <label class="field">
        <span>検査値</span>
        <div class="input-with-unit">
          <input id="lab-value-${lab.id}" name="lab-value-${lab.id}" type="number" step="any" inputmode="decimal" />
          <span class="input-unit">${lab.unit}</span>
        </div>
      </label>
      <div class="field">
        <span>Grade</span>
        <label class="field">
          <select id="lab-grade-${lab.id}" name="lab-grade-${lab.id}" disabled></select>
        </label>
      </div>
    `;

    const valueInput = card.querySelector(`#lab-value-${lab.id}`);
    const lowInput = card.querySelector(`#lab-low-${lab.id}`);
    const highInput = card.querySelector(`#lab-high-${lab.id}`);
    const gradeSelect = card.querySelector(`#lab-grade-${lab.id}`);
    Object.entries(lab.grades).forEach(([grade, definition]) => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = `Grade ${grade}  ${definition}`;
      gradeSelect.appendChild(option);
    });
    valueInput.value = state.labValues[lab.id];
    if (lowInput) lowInput.value = state.labRefLow[lab.id];
    if (highInput) highInput.value = state.labRefHigh[lab.id];

    const syncComputedGrade = () => {
      const grade = getLabGrade(
        lab.id,
        valueInput.value,
        lowInput ? lowInput.value : state.labRefLow[lab.id],
        highInput ? highInput.value : state.labRefHigh[lab.id],
      );
      gradeSelect.value = String(grade);
      decorateGradeCard(card, grade);
      renderSummary();
      persistState();
    };

    valueInput.addEventListener("input", (event) => {
      state.labValues[lab.id] = event.target.value;
      syncComputedGrade();
    });

    if (lowInput) {
      lowInput.addEventListener("input", (event) => {
        state.labRefLow[lab.id] = event.target.value;
        syncComputedGrade();
      });
    }

    if (highInput) {
      highInput.addEventListener("input", (event) => {
        state.labRefHigh[lab.id] = event.target.value;
        syncComputedGrade();
      });
    }

    syncComputedGrade();

    elements.labGrid.appendChild(card);
  });
}

function decorateGradeCard(card, grade) {
  card.classList.toggle("is-grade-3", grade >= 3);
}

function renderSummary() {
  const regimen = currentRegimen();
  const symptomItems = regimen.symptoms.map((symptom) => {
    const grade = Number(state.symptomGrades[symptom.id] || 0);
    const detail = grade === 0 ? "症候なし／評価対象外" : symptom.grades[String(grade)];
    return { name: symptom.name, grade, detail };
  });
  const labItems = regimen.labs.map((lab) => {
    const grade = getLabGrade(lab.id, state.labValues[lab.id], state.labRefLow[lab.id], state.labRefHigh[lab.id]);
    const detail = lab.grades[String(grade)] || "正常／評価対象外";
    return { name: lab.label, grade, detail };
  });
  const allItems = [...symptomItems, ...labItems];
  const grade3Plus = allItems.filter((item) => item.grade >= 3);

  elements.summaryCards.innerHTML = "";

  const topCard = document.createElement("article");
  topCard.className = `summary-card ${grade3Plus.length > 0 ? "is-danger" : "is-neutral"}`;
  topCard.innerHTML = `
    <header>
      <h3>${grade3Plus.length > 0 ? "要介入候補あり" : "現時点の要介入候補は未選択"}</h3>
      <span class="summary-badge">${grade3Plus.length > 0 ? `${grade3Plus.length}件` : "0件"}</span>
    </header>
    <p>${grade3Plus.length > 0
      ? "Grade 3以上のAEがあります。感染症、輸注関連反応、出血、呼吸器症状、重度骨髄抑制は優先して確認してください。"
      : "Grade 3以上に相当するAEはまだ選ばれていません。全体一覧を見ながら評価を続けてください。"}</p>
  `;
  elements.summaryCards.appendChild(topCard);

  const listCard = document.createElement("article");
  listCard.className = "summary-card is-neutral";
  listCard.innerHTML = `
    <header>
      <h3>AE一覧</h3>
      <span class="summary-badge">${allItems.length}件</span>
    </header>
  `;

  const inline = document.createElement("div");
  inline.className = "summary-inline";
  allItems.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = `summary-inline-item ${item.grade >= 3 ? "is-danger" : ""}`;
    chip.textContent = `${item.name} G${item.grade}`;
    inline.appendChild(chip);
  });
  listCard.appendChild(inline);

  const priority = document.createElement("div");
  priority.className = "summary-list";
  if (grade3Plus.length === 0) {
    const row = document.createElement("div");
    row.className = "summary-item";
    row.textContent = "Grade 3以上のAEはありません。";
    priority.appendChild(row);
  } else {
    grade3Plus.forEach((item) => {
      const row = document.createElement("div");
      row.className = "summary-item";
      row.innerHTML = `<strong>${item.name} G${item.grade}</strong><p>${item.detail}</p>`;
      priority.appendChild(row);
    });
  }
  listCard.appendChild(priority);
  elements.summaryCards.appendChild(listCard);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("service worker registration failed", error);
    });
  });
}

init();
