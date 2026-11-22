# Project OI Body of Knowledge

# Final Source-to-Derived Consistency Proof

**Artefact ID:** OI-BOK-VALIDATION-001  
**Version:** 1.0  
**Status:** Passed  
**Validated source set:** OI-BOK-001 through OI-BOK-010 v0.3  
**Validated derived set:** GLO, PROP, DIAG, TRACE, OPEN and INDEX v0.2  
**Correction basis:** OI-BOK-CORR-002  
**Review authority:** OI-BOK-REVIEW-001  
**Validation date:** 15 August 2026  
**Blocking test result:** PASS  
**Tests executed:** 37  
**Tests passed:** 37  
**Tests failed:** 0

---

## 1. Decision

> **The corrected Project OI Body of Knowledge passes the final source-to-derived consistency proof and is technically eligible for OI-BOK-RELEASE-001.**

The proof confirms that:

- the active source-chapter bytes are intact;
- the corrected chapter ZIP and complete correction bundle agree;
- chapter metadata and semantic ownership match the final model;
- the product and editorial residue identified by adversarial review is absent;
- every cited footnote resolves;
- source and derived register counts reconcile;
- proposition and trace identifiers agree exactly;
- source occurrences resolve to the source manifest and verification register;
- the AI evidence lifecycle is complete for the current 18-record set;
- active JSON files parse strictly;
- active derived narratives contain no stale v0.1 or v0.2 chapter-file references;
- all 21 adversarial corrections are implemented once OI-COR-020 is closed by the completion record;
- and the reader path required by review is present.

---

## 2. Test Summary

| Test | Category | Requirement | Actual | Result | Blocking |
| --- | --- | --- | --- | --- | --- |
| OI-VAL-001 | Package integrity | CORR-002 bundle passes ZIP integrity testing | No corrupt member | PASS | Yes |
| OI-VAL-002 | Package integrity | Every CORR-002 checksum entry verifies | 44 entries; 0 failures | PASS | Yes |
| OI-VAL-003 | Chapter set | Exactly ten corrected v0.3 chapters are present | 10 | PASS | Yes |
| OI-VAL-004 | Chapter set | Corrected-chapter ZIP matches the active chapter bytes | 10 members; 0 mismatches | PASS | Yes |
| OI-VAL-005 | Chapter structure | Chapter IDs, numbers, versions and capability metadata agree | 0 discrepancies | PASS | Yes |
| OI-VAL-006 | Chapter structure | Numbered level-two sections are unique, ordered and gap-free | 0 failures | PASS | Yes |
| OI-VAL-007 | Citation structure | Every cited footnote has exactly one definition | 0 missing; 0 duplicate-definition files | PASS | Yes |
| OI-VAL-008 | Citation structure | Defined but uncited footnotes are recorded as non-blocking editorial residuals | 3 chapter records: Project-OI-BOK-006-Execution-and-Operational-Reliability-v0.3.md: ['22']; Project-OI-BOK-008-Organisational-Memory-Reflection-and-Learning-v0.3.md: ['11', '18', '24', '35']; Project-OI-BOK-009-Capability-Development-and-Adaptation-v0.3.md: ['14'] | PASS | No |
| OI-VAL-009 | Scope control | No product name or obsolete OI-REF/OI-PAT/OI-BIP commitment remains | 0 hits | PASS | Yes |
| OI-VAL-010 | Scope control | No unresolved TODO, TBD or placeholder remains | 0 hits | PASS | Yes |
| OI-VAL-011 | Terminology | Generic product-style Workflow and Run capitals have been removed from chapter prose | 0 generic-capital findings | PASS | Yes |
| OI-VAL-012 | Glossary | Tiered glossary contains 432 unique terms | 432 rows; 432 unique | PASS | Yes |
| OI-VAL-013 | Glossary | Core glossary tier contains 64 terms and all six tiers are present | T1=64; tiers=['T1', 'T2', 'T3', 'T4', 'T5', 'T6'] | PASS | Yes |
| OI-VAL-014 | Propositions | Proposition register contains 182 unique stable IDs | 182 rows; 182 unique | PASS | Yes |
| OI-VAL-015 | Propositions | Every proposition points to a v0.3 source chapter | 182 of 182 | PASS | Yes |
| OI-VAL-016 | Propositions | Proposition JSON is structurally consistent with the 182-row register | JSON exposed records=182 | PASS | Yes |
| OI-VAL-017 | Diagnostics | Failure-mode register contains 437 unique IDs | 437 rows; 437 unique | PASS | Yes |
| OI-VAL-018 | Diagnostics | Quality register contains 205 unique IDs including eight Sense-quality dimensions | 205 rows; 205 unique; Chapter 1=8 | PASS | Yes |
| OI-VAL-019 | Diagnostics | Indicator-group and semantic-indicator counts reconcile | groups=97; statements=253; linked groups=97 | PASS | Yes |
| OI-VAL-020 | Traceability | Trace registers contain 11 stages, 9 domain chapters, 103 process stages, 14 transitions and 47 constructs | 11/9/103/14/47 | PASS | Yes |
| OI-VAL-021 | Traceability | Proposition trace is one-to-one with the 182-proposition register | trace=182; exact-ID-match=True | PASS | Yes |
| OI-VAL-022 | Traceability | All process and transition IDs are unique | process unique=103; transition unique=14 | PASS | Yes |
| OI-VAL-023 | Open questions | Open-question registers contain 28 integrated questions and 173 source items | 28/173 | PASS | Yes |
| OI-VAL-024 | Open questions | Every integrated question has a working disposition, release status and empirical target | blank rows=0 | PASS | Yes |
| OI-VAL-025 | Index | Chapter register contains the exact ten v0.3 source files | 10 rows; exact match=True | PASS | Yes |
| OI-VAL-026 | Index | Chapter hashes and sizes agree with the active source files | 0 hash failures | PASS | Yes |
| OI-VAL-027 | Sources | Source manifest and occurrence crosswalk contain 290 unique records and 338 occurrences | 290/338 | PASS | Yes |
| OI-VAL-028 | Sources | Every source occurrence resolves to the unique-source manifest | 0 missing source IDs | PASS | Yes |
| OI-VAL-029 | Sources | Bibliographic verification register is one-to-one with citation occurrences | verification=338; exact content-key match=True | PASS | Yes |
| OI-VAL-030 | Sources | The 290-source count remains explicitly provisional | Deduplication still contains compound-entry and title-normalisation limitations | PASS | No |
| OI-VAL-031 | AI evidence | AI evidence lifecycle contains 18 unique, fully governed records | 18 rows; unique=18; incomplete=0 | PASS | Yes |
| OI-VAL-032 | AI evidence | All AI lifecycle records were verified on the release date | dates=['2026-08-15'] | PASS | Yes |
| OI-VAL-033 | Machine-readable integrity | Every active JSON register parses strictly | 6 files; 0 failures | PASS | Yes |
| OI-VAL-034 | Derived-register integrity | Active derived narratives contain no stale v0.1 or v0.2 chapter-file references | 0 stale references | PASS | Yes |
| OI-VAL-035 | Review closure | Correction register contains all 21 adversarial actions | 21 rows; unique=21 | PASS | Yes |
| OI-VAL-036 | Review closure | Only OI-COR-020 remained for the completion record | PREPARED; FINAL CLAIM LANGUAGE TO BE CONFIRMED IN OI-BOK-RELEASE-001 | PASS | Yes |
| OI-VAL-037 | Reader architecture | The index provides the three-layer reader path required by review | Present | PASS | Yes |

The machine-readable test register contains the full notes.

---

## 3. Reconciled Counts

```text
10 corrected chapters
432 glossary terms
64 core glossary terms
182 working propositions
437 failure modes
205 quality dimensions
97 indicator groups
253 semantic indicator statements
11 integrated stages
14 transitions
103 source-process stages
47 traced constructs
28 integrated open questions
173 source open items
338 citation occurrences
290 provisional unique-source records
18 time-sensitive AI evidence records
```

---

## 4. Accepted Non-Blocking Residuals

### 4.1 Defined but Uncited Supporting Footnotes

Six footnote definitions remain uncited in Chapters 6, 8 and 9. No cited footnote lacks a definition and no duplicate definition exists. These records are preserved as supporting bibliographic residue rather than treated as a release blocker.

### 4.2 Provisional Unique-Source Count

The 290-source count uses DOI-based and title-and-year deduplication. Compound chapter entries can still under- or over-count the number of distinct works. The 338-row occurrence crosswalk preserves the exact source-chapter evidence.

### 4.3 Older Stable Source Verification

CORR-002 structurally normalised the complete bibliography and verified current or anomalous AI-era evidence. It did not independently reopen every older monograph and journal record at the publisher site.

These limitations are repeated in OI-BOK-RELEASE-001.

---

## 5. Correction Closure

The adversarial correction plan contains 21 actions.

```text
20 actions completed before this proof
1 action, OI-COR-020, completed by OI-BOK-RELEASE-001
0 open release-blocking corrections
```

Closure means that the release condition is corrected or explicitly bounded. It does not mean that every empirical question has been resolved.

---

## 6. Validation Boundary

This proof establishes:

- file integrity;
- structural consistency;
- source-to-derived traceability;
- identifier and count reconciliation;
- citation-link closure;
- correction closure;
- and release-package reproducibility.

It does not establish:

- construct validity;
- causal validity;
- field validity;
- predictive validity;
- measurement reliability;
- SMB generalisability;
- ethical legitimacy of a particular application;
- or continued currency of AI evidence after the recorded verification date.

---

## 7. Guardrail

> **A consistency proof can establish that the BOK says what its controlled sources and registers say. It cannot establish that the proposed Organisational Intelligence construct is true.**
