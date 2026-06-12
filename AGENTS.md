# Agent Rules

These rules are mandatory for any agent working in this repository.

## Truthfulness

- ABSOLUTE COMPLIANCE: never claim that a regimen adverse event existed in `adverseSections`, `symptoms`, `labs`, or `dayHints` unless you have verified it in the current code or cited source.
- ABSOLUTE COMPLIANCE: when giving a retrospective or root-cause explanation, do not fill gaps with plausible-sounding guesses.
- ABSOLUTE COMPLIANCE: if an adverse event was missing from both `adverseSections` and `symptoms`, say exactly that.
- ABSOLUTE COMPLIANCE: do not describe a miss as a sync mismatch unless it was actually present in one structure and absent in the other.
- ABSOLUTE COMPLIANCE: if you are uncertain, say so plainly and re-check the file before answering.

## Root Cause Labels

Use these labels precisely when explaining misses:

- `extraction miss`: the AE was not added anywhere in the regimen definition.
- `sync miss`: the AE was added to one structure but not another.
- `evidence miss`: the AE was not captured from the supporting sources or drug-level review.

Do not mix these labels casually. Verify the code first, then choose the label.

## Regimen Review Discipline

- Review both regimen-level sources and drug-level sources.
- For combination regimens, explicitly check whether each component drug contributes a characteristic toxicity that should appear in overview or AE evaluation.
- After implementing or revising a regimen, compare `adverseSections` and `symptoms` and look for missing high-risk or drug-specific toxicities.
- Follow the standard workflow in [REGIMEN_REVIEW_WORKFLOW.md](/Users/wadakou/Desktop/Codex/regimen AE App/REGIMEN_REVIEW_WORKFLOW.md) for every future regimen addition or revision.
- Before implementation, prepare a candidate AE table that maps each candidate adverse event to one or more of `adverseSections`, `symptoms`, `labs`, and `dayHints`.
- Review the regimen as a named regimen first, then review every component drug by full name and record at least one characteristic or easy-to-miss toxicity for each drug.
- Review the original paper and supplement / appendix when available; abstract-only review is not sufficient when fuller sources exist.
- After implementation, reconcile the candidate AE table against the actual code one item at a time instead of relying on memory.
- Do not finalize a combination regimen until each component drug has been checked for regimen-level toxicities that may be low-frequency but clinically important.

## Preferred Evidence Sources

- Use a fixed source order for every regimen review so that important warnings are less likely to be missed.
- Start with the named regimen, then repeat the same source check for each component drug by full name.
- Review the original paper and supplement / appendix first when available.
- Use `PubMed` to find the paper and supporting publication trail: `https://pubmed.ncbi.nlm.nih.gov/`
- Use `ClinicalTrials.gov` to look for protocol documents, results tables, and posted adverse-event details when relevant: `https://clinicaltrials.gov/`
- Review the Japanese label in `PMDA` for warnings, serious adverse reactions, precautions, and revision history: `https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?category=medical`
- Check PMDA revision / safety reflection pages when late-emerging safety issues may matter: `https://www.info.pmda.go.jp/zsearch/html/menu_tenpu_kaitei.html`
- For oncology supportive interpretation, review `PMDA医療安全情報` when a safety topic has dedicated guidance: `https://www.pmda.go.jp/safety/info-services/medical-safety-info/0009.html`
- Review the manufacturer HCP site or official proper-use guide when available, especially for CAR-T, antibody therapies, and products with special monitoring workflows.
- Review the latest U.S. label via `DailyMed`, `FDA Online Label Repository`, or the manufacturer prescribing information page when warnings or boxed warnings may be more explicit than PMDA:
  - `https://dailymed.nlm.nih.gov/`
  - `https://labels.fda.gov/`
- Review `EMA` product information when Japanese and U.S. labeling leave uncertainty or use different safety framing: `https://www.ema.europa.eu/en/medicines`
- Use regimen monograph sites such as `eviQ` and `Cancer Care Ontario` as cross-checks after primary-source review, not as substitutes for original papers and labels:
  - `https://www.eviq.org.au/`
  - `https://www.cancercareontario.ca/en/drugformulary/regimens`
- Do not rely on abstract-only review when fuller sources exist.
- Do not use spontaneous-reporting databases such as `FAERS` or `JADER` as the primary basis for adding a core regimen AE. They may suggest a signal, but implementation still needs label-, trial-, or official-guidance-level support.

## Documentation

- If you add or revise a regimen, preserve enough written evidence-review context that the next session can resume safely.
- When evidence review is partial, state which sources were reviewed, which drugs were checked, which candidate AEs were identified, and what remains unresolved.

## Communication

- Truth is more important than fluency.
- If a previous explanation was wrong, correct it directly and specifically.
- Do not minimize or blur factual mistakes in retrospective explanations.
