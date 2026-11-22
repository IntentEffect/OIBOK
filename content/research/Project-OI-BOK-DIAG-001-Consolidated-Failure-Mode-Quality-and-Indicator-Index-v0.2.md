# Project OI Body of Knowledge

# Consolidated Failure Mode, Quality and Indicator Index

**Artefact ID:** OI-BOK-DIAG-001  
**Version:** 0.2  
**Status:** Layered regenerated diagnostic index; pending final release proof  
**Source chapters:** OI-BOK-001 through OI-BOK-009 v0.3  
**Terminology baseline:** OI-BOK-GLO-001 — Consolidated Project OI Glossary v0.2  
**Proposition baseline:** OI-BOK-PROP-001 — Consolidated Proposition and Evidence Register v0.2  
**Roadmap authority:** OI-BOK-SYN-001 — Chapters 1–5 Synthesis and Remaining-Chapter Roadmap  
**Source inventory:** 437 failure modes; 205 explicit quality dimensions; 97 indicator groups; 253 source-derived semantic indicator statements  
**Validation status:** The classifications and indicator-strength judgements are provisional consolidation metadata, not validated diagnostic scales  
**Date:** 15 August 2026

---

## 1. Purpose

This index consolidates the diagnostic material produced across the nine completed Project OI domain chapters.

It is intended to:

- assign stable identifiers to every source failure mode, quality dimension and observable indicator;
- preserve the exact chapter wording and source location;
- distinguish source-derived material from cross-chapter consolidation analysis;
- group related failure modes without erasing their chapter-specific meaning;
- expose exact-name collisions and repeated quality labels for the final BOK release;
- distinguish direct capability evidence, process evidence, enabling conditions, transition evidence, governance evidence, outcome evidence, risk signals and learning evidence;
- make weak-proxy and non-causal-use risks explicit;
- and prevent Chapter 10 from treating hundreds of chapter-level diagnostic items as independent validated constructs or one universal maturity scale.

This register does not validate a diagnostic instrument.

A source failure mode remains a chapter-level working construct.

A source quality dimension remains a proposed evaluative question.

An observable indicator remains a candidate evidence category and should not be treated as standalone proof of Organisational Intelligence.

---

## 2. Reader-Facing Diagnostic Architecture

The release-facing diagnostic model has three layers.

### 2.1 Seven Primary Failure Classes

```text
Capability failure
Transition or handoff failure
Epistemic or evidence failure
Authority and governance failure
Coordination and operational failure
Feedback and learning failure
Persistence and adaptation failure
```

### 2.2 Sixteen Quality Families

The 205 source quality dimensions are navigated through sixteen higher-order families rather than presented as one flat checklist.

### 2.3 Eight Evidence Roles

```text
Direct capability-behaviour evidence
Process, mechanism or control evidence
Transition, handoff or connection evidence
Enabling-condition evidence
Governance, authority or accountability evidence
Outcome or consequence evidence
Risk, weakness or failure-signal evidence
Learning, persistence or adaptation evidence
```

The complete source registers remain available for research traceability.

They should not be administered as one 437-item failure checklist, one 205-dimension quality score or one 253-indicator survey.

---

## 3. Inventory Summary

| Chapter | Title | Capability position | Failure modes | Quality dimensions | Indicator groups | Semantic indicators |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| OI-BOK-001 | Signals and Attention | Sense | 15 | 8 | 6 | 26 |
| OI-BOK-002 | Organisational Context | Contextualise | 18 | 12 | 6 | 20 |
| OI-BOK-003 | Knowledge and Expertise | Know | 21 | 14 | 8 | 27 |
| OI-BOK-004 | Decision and Authority | Choose | 38 | 18 | 11 | 37 |
| OI-BOK-005 | Coordination and Collective Action | Mobilise — coordination | 47 | 25 | 12 | 34 |
| OI-BOK-006 | Execution and Operational Reliability | Mobilise — execution | 67 | 30 | 14 | 16 |
| OI-BOK-007 | Outcomes, Feedback and Evaluation | Outcome–feedback bridge | 66 | 30 | 12 | 29 |
| OI-BOK-008 | Organisational Memory, Reflection and Learning | Learn | 85 | 33 | 14 | 29 |
| OI-BOK-009 | Capability Development and Adaptation | Adapt | 80 | 35 | 14 | 35 |
| **Total** |  |  | 437 | 205 | 97 | 253 |

### 3.1 Signals and Attention Quality Added Transparently

OI-BOK-001 v0.3 now contains eight explicit quality dimensions introduced during the adversarial correction pass.

They remain labelled as Project OI synthesis rather than retrospectively attributed to the original chapter source base.

The quality register therefore contains 205 dimensions in total.


### 3.2 Indicator Normalisation

The nine source chapters contain observable-indicator lists in two forms:

1. complete bullet statements;
2. lists of noun phrases followed by one shared predicate.

For indexing purposes, 24 shared-predicate lists were converted into complete semantic statements. The exact source body is preserved in the machine-readable register, and every normalised statement is labelled as consolidation-derived.

This avoids counting fragments such as:

```text
success;
failure;
near miss;
and external experience

are examined
```

as four incomplete indicators. The indexed statement preserves the combined source meaning.

---

## 4. Stable ID Scheme

| Record type | Format | Example |
|---|---|---|
| Failure mode | `OI-FM-[DOMAIN]-[SEQUENCE]` | `OI-FM-EXE-015` |
| Quality dimension | `OI-QUAL-[DOMAIN]-[SEQUENCE]` | `OI-QUAL-EVL-012` |
| Indicator group | `OI-INDG-[DOMAIN]-[SEQUENCE]` | `OI-INDG-LRN-009` |
| Semantic indicator | `OI-IND-[DOMAIN]-[SEQUENCE]` | `OI-IND-ADP-028` |
| Exact failure-name collision | `OI-FMC-[SEQUENCE]` | `OI-FMC-006` |
| Exact quality-name collision | `OI-QDC-[SEQUENCE]` | `OI-QDC-011` |
| Exact indicator-group collision | `OI-IGC-[SEQUENCE]` | `OI-IGC-001` |

Domain codes follow the proposition register:

| Code | Chapter | Position |
|---|---|---|
| SEN | OI-BOK-001 | Sense |
| CTX | OI-BOK-002 | Contextualise |
| KNW | OI-BOK-003 | Know |
| DEC | OI-BOK-004 | Choose |
| COO | OI-BOK-005 | Mobilise — coordination |
| EXE | OI-BOK-006 | Mobilise — execution |
| EVL | OI-BOK-007 | Outcome–feedback bridge |
| LRN | OI-BOK-008 | Learn |
| ADP | OI-BOK-009 | Adapt |

Stable IDs preserve source provenance. They do not imply that every item will survive unchanged into the final integrated diagnostic architecture.

---

## 5. Consolidation Method and Epistemic Status

### 5.1 Source-Derived Content

The following fields are source-derived:

- source chapter;
- source section;
- source name;
- source description or question;
- observable-indicator group;
- and source indicator wording.

### 5.2 Consolidation-Derived Content

The following fields are Project OI consolidation analysis:

- diagnostic class;
- diagnostic family;
- quality family;
- evidence role;
- proxy-risk warning;
- collision group;
- modifier;
- disposition flag;
- and proposed Chapter 10 use.

These classifications are not claims made by the source chapters.

They remain subject to:

- terminology review;
- cross-chapter review;
- construct-validity review;
- level-of-analysis review;
- empirical testing;
- and the final adversarial review.

### 5.3 No Automatic Merging

Exact or similar names do not prove conceptual identity.

For example:

- **Outcome Bias** in decision review;
- **Outcome Bias** in evaluation;
- and **Outcome Bias** in organisational learning

describe related mechanisms at different stages of the OI cycle.

The source items remain separate until the final synthesis decides whether they should be:

- retained as scoped variants;
- consolidated under one higher-order family;
- qualified;
- or merged with provenance.

---

## 6. Failure-Mode Diagnostic Classes

The 437 failure modes are assigned one provisional primary class.

| Code | Primary diagnostic class | Count | Interpretation |
| --- | --- | ---: | --- |
| CAP | Capability availability or local performance failure | 36 | Primary consolidation class; not a source-chapter label. |
| TRN | Transition, handoff or loop-connection failure | 18 | Primary consolidation class; not a source-chapter label. |
| EPI | Epistemic, evidence, context or interpretation failure | 41 | Primary consolidation class; not a source-chapter label. |
| GOV | Purpose, authority, legitimacy, accountability or governance failure | 47 | Primary consolidation class; not a source-chapter label. |
| OPS | Coordination, execution, reliability, safety or operational-control failure | 108 | Primary consolidation class; not a source-chapter label. |
| FBL | Outcome, feedback, evaluation, reflection or learning failure | 75 | Primary consolidation class; not a source-chapter label. |
| PAD | Persistence, memory, institutionalisation, capability-lifecycle or adaptation failure | 112 | Primary consolidation class; not a source-chapter label. |

### 6.1 Class Distribution by Chapter

| Chapter | CAP | TRN | EPI | GOV | OPS | FBL | PAD | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| OI-BOK-001 | 11 | 1 | 1 | 0 | 1 | 0 | 1 | 15 |
| OI-BOK-002 | 0 | 0 | 17 | 1 | 0 | 0 | 0 | 18 |
| OI-BOK-003 | 11 | 3 | 5 | 2 | 0 | 0 | 0 | 21 |
| OI-BOK-004 | 0 | 3 | 1 | 31 | 1 | 2 | 0 | 38 |
| OI-BOK-005 | 2 | 3 | 0 | 3 | 38 | 1 | 0 | 47 |
| OI-BOK-006 | 3 | 0 | 2 | 5 | 56 | 1 | 0 | 67 |
| OI-BOK-007 | 4 | 0 | 5 | 0 | 1 | 56 | 0 | 66 |
| OI-BOK-008 | 1 | 5 | 8 | 2 | 3 | 12 | 54 | 85 |
| OI-BOK-009 | 4 | 3 | 2 | 3 | 8 | 3 | 57 | 80 |
| **Total** | 36 | 18 | 41 | 47 | 108 | 75 | 112 | 437 |

### 6.2 Why the Classes Are Broad

The classes describe the **kind of organisational breakdown**, while the 25 diagnostic families describe the more specific mechanism.

A failure can have secondary classes.

For example:

- a missing handoff can be both a transition failure and an epistemic failure;
- an AI Agent permission leak can be both a governance failure and an operational failure;
- a lessons graveyard can be both a feedback-and-learning failure and a persistence failure.

The register preserves up to two provisional secondary classes.

---

## 7. Consolidated Diagnostic Families

| Family | Diagnostic family | Failure modes | Source chapters |
| --- | --- | ---: | --- |
| F01 | Signal visibility and attention allocation | 26 | OI-BOK-001, OI-BOK-002, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |
| F02 | Purpose, framing and relevance | 7 | OI-BOK-001, OI-BOK-002, OI-BOK-004, OI-BOK-006, OI-BOK-008 |
| F03 | Context, scope and temporal fit | 23 | OI-BOK-002, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| F04 | Evidence, provenance and epistemic integrity | 14 | OI-BOK-001, OI-BOK-004, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |
| F05 | Knowledge and expertise availability | 23 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| F06 | Authority, legitimacy, accountability and ownership | 29 | OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| F07 | Voice, dissent, relational safety and human judgement | 15 | OI-BOK-001, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-008 |
| F08 | Decision commitment, escalation and action translation | 11 | OI-BOK-001, OI-BOK-004, OI-BOK-005 |
| F09 | Dependencies, roles, shared state and resource coordination | 29 | OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| F10 | Handoffs, interfaces and boundary translation | 8 | OI-BOK-003, OI-BOK-005, OI-BOK-006 |
| F11 | Operational readiness, state, completion and external effects | 14 | OI-BOK-005, OI-BOK-006, OI-BOK-007 |
| F12 | Reliability, safety, capacity, containment and recovery | 32 | OI-BOK-004, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |
| F13 | Exceptions, workarounds, drift and organisational debt | 15 | OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| F14 | Outcome definition, stakeholder coverage and unintended consequence | 21 | OI-BOK-004, OI-BOK-006, OI-BOK-007, OI-BOK-008 |
| F15 | Causal inference, attribution and contribution | 7 | OI-BOK-007, OI-BOK-008 |
| F16 | Measurement validity, metric reactivity and gaming | 15 | OI-BOK-007, OI-BOK-009 |
| F17 | Evaluation governance, timeliness and use | 7 | OI-BOK-007 |
| F18 | Memory selection, retention, retrieval and supersession | 28 | OI-BOK-003, OI-BOK-008, OI-BOK-009 |
| F19 | Reflection, lesson formation and learning persistence | 22 | OI-BOK-004, OI-BOK-008, OI-BOK-009 |
| F20 | Capability configuration, ownership and institutionalisation | 31 | OI-BOK-003, OI-BOK-008, OI-BOK-009 |
| F21 | Transfer, scaling, exploration and path dependence | 14 | OI-BOK-008, OI-BOK-009 |
| F22 | Capability maintenance, retirement and adaptation coherence | 3 | OI-BOK-009 |
| F23 | Human–AI role, reliance and capability effects | 25 | OI-BOK-001, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |
| F24 | AI/Agent identity, authority, context, tools and execution | 11 | OI-BOK-005, OI-BOK-006, OI-BOK-008 |
| F25 | Transition integrity and closure of the OI loop | 7 | OI-BOK-003, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |

### 7.1 Chapter 10 Use

Chapter 10 should use the 25 diagnostic families as the primary failure-mode architecture.

It should not reproduce all 437 source modes in the main narrative.

The source modes remain the traceability and diagnostic-detail layer beneath the integrated model.

### 7.2 Transition Integrity

Family `F25 — Transition integrity and closure of the OI loop` should receive explicit treatment in Chapter 10.

It currently includes failures such as:

- knowledge without application;
- decision–execution loss;
- coordination–execution gaps;
- outcome without a learning handoff;
- learning without a capability handoff;
- and capability change without outcome evaluation.

These failures support the Project OI hypothesis that Organisational Intelligence depends materially on the quality of conversion boundaries, not only the existence of local capabilities.

---

## 8. Recurrent System-Level Failure Patterns

The following patterns cut across several diagnostic families. Counts overlap because one failure mode can participate in more than one pattern.

| Pattern | Matching source modes | Example stable IDs |
| --- | ---: | --- |
| Capability and adaptation failure | 68 | OI-FM-KNW-007, OI-FM-KNW-016, OI-FM-COO-028, OI-FM-EXE-003, OI-FM-EXE-036, OI-FM-EVL-028… |
| Memory and learning persistence failure | 64 | OI-FM-CTX-008, OI-FM-KNW-021, OI-FM-DEC-038, OI-FM-COO-046, OI-FM-EVL-050, OI-FM-EVL-066… |
| AI, Agent and automation failure | 52 | OI-FM-SEN-014, OI-FM-CTX-007, OI-FM-KNW-017, OI-FM-KNW-018, OI-FM-KNW-019, OI-FM-DEC-031… |
| Substitution and proxy failure | 50 | OI-FM-CTX-008, OI-FM-KNW-006, OI-FM-KNW-007, OI-FM-KNW-013, OI-FM-DEC-002, OI-FM-DEC-003… |
| Visibility and access failure | 48 | OI-FM-SEN-001, OI-FM-SEN-002, OI-FM-SEN-015, OI-FM-CTX-001, OI-FM-CTX-012, OI-FM-CTX-013… |
| Ownership, authority and accountability failure | 46 | OI-FM-SEN-006, OI-FM-CTX-009, OI-FM-CTX-012, OI-FM-CTX-013, OI-FM-KNW-013, OI-FM-KNW-017… |
| Drift, decay and stale-state failure | 32 | OI-FM-SEN-013, OI-FM-CTX-005, OI-FM-CTX-015, OI-FM-KNW-009, OI-FM-DEC-025, OI-FM-DEC-036… |
| Metric and evaluation distortion | 25 | OI-FM-SEN-009, OI-FM-SEN-015, OI-FM-DEC-027, OI-FM-EXE-066, OI-FM-EVL-008, OI-FM-EVL-018… |
| Handoff and transition failure | 23 | OI-FM-SEN-006, OI-FM-CTX-007, OI-FM-KNW-015, OI-FM-KNW-020, OI-FM-DEC-024, OI-FM-DEC-028… |
| Overload, queue and capacity failure | 19 | OI-FM-SEN-007, OI-FM-CTX-003, OI-FM-KNW-003, OI-FM-KNW-005, OI-FM-DEC-010, OI-FM-DEC-012… |
| Repair, workaround and exception failure | 13 | OI-FM-SEN-004, OI-FM-DEC-023, OI-FM-COO-032, OI-FM-COO-033, OI-FM-COO-046, OI-FM-EXE-023… |

### 8.1 Substitution Is a Recurrent Failure Mechanism

Fifty source modes concern substitution, illusion, theatre or confusion.

Examples include treating:

- information volume as attention;
- a repository as memory;
- search as knowledge;
- approval as decision ownership;
- task assignment as coordination;
- completion as outcome;
- training as capability;
- and model performance as organisational capability.

This supports a higher-order Chapter 10 distinction:

> **A visible artefact, activity or proxy should not be confused with the organisational capability or conversion it is intended to support.**

### 8.2 Persistence and Capability Failure Accumulate Later in the Cycle

The number of source failure modes increases in the later chapters because:

- memory;
- learning;
- capability;
- and adaptation

inherit unresolved failures from earlier stages and add lifecycle, persistence and reconfiguration risks of their own.

This does not prove that later capabilities are more important or objectively more complex. It reflects the scope and granularity of the current chapter drafts.

---

## 9. Exact Failure-Name Collisions

There are **24 repeated failure-mode labels across 50 source items**.

No pair has both the same label and an identical source description.

| Collision | Source label | Count | Chapters | Stable IDs | Disposition |
| --- | --- | ---: | --- | --- | --- |
| OI-FMC-001 | Accountability Diffusion | 2 | OI-BOK-004, OI-BOK-005 | OI-FM-DEC-026, OI-FM-COO-045 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-002 | AI Authority Laundering | 2 | OI-BOK-003, OI-BOK-004 | OI-FM-KNW-017, OI-FM-DEC-031 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-003 | AI Role Ambiguity | 2 | OI-BOK-005, OI-BOK-006 | OI-FM-COO-038, OI-FM-EXE-053 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-004 | Authority Mismatch | 2 | OI-BOK-005, OI-BOK-009 | OI-FM-COO-012, OI-FM-ADP-013 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-005 | Automation Surprise | 2 | OI-BOK-005, OI-BOK-006 | OI-FM-COO-037, OI-FM-EXE-049 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-006 | Blame Substitution | 2 | OI-BOK-006, OI-BOK-008 | OI-FM-EXE-044, OI-FM-LRN-056 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-007 | Competency Trap | 2 | OI-BOK-008, OI-BOK-009 | OI-FM-LRN-049, OI-FM-ADP-046 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-008 | Context Stripping | 2 | OI-BOK-002, OI-BOK-008 | OI-FM-CTX-007, OI-FM-LRN-007 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-009 | Definition Drift | 2 | OI-BOK-007, OI-BOK-008 | OI-FM-EVL-035, OI-FM-LRN-024 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-010 | Documentation Substitution | 2 | OI-BOK-003, OI-BOK-009 | OI-FM-KNW-007, OI-FM-ADP-003 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-011 | Escalation Failure | 2 | OI-BOK-001, OI-BOK-004 | OI-FM-SEN-006, OI-FM-DEC-024 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-012 | Exception Normalisation | 3 | OI-BOK-004, OI-BOK-005, OI-BOK-006 | OI-FM-DEC-023, OI-FM-COO-033, OI-FM-EXE-026 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-013 | Hidden Queue | 2 | OI-BOK-005, OI-BOK-006 | OI-FM-COO-016, OI-FM-EXE-033 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-014 | Knowledge Hoarding | 2 | OI-BOK-003, OI-BOK-008 | OI-FM-KNW-005, OI-FM-LRN-031 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-015 | Model-Change Drift | 2 | OI-BOK-004, OI-BOK-006 | OI-FM-DEC-036, OI-FM-EXE-059 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-016 | Near-Miss Dismissal | 2 | OI-BOK-006, OI-BOK-008 | OI-FM-EXE-046, OI-FM-LRN-017 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-017 | Outcome Bias | 3 | OI-BOK-004, OI-BOK-007, OI-BOK-008 | OI-FM-DEC-027, OI-FM-EVL-052, OI-FM-LRN-065 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-018 | Ownership Vacuum | 2 | OI-BOK-005, OI-BOK-009 | OI-FM-COO-009, OI-FM-ADP-011 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-019 | Purpose Drift | 2 | OI-BOK-002, OI-BOK-007 | OI-FM-CTX-015, OI-FM-EVL-007 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-020 | Redundancy Illusion | 2 | OI-BOK-006, OI-BOK-009 | OI-FM-EXE-036, OI-FM-ADP-027 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-021 | Search Substitution | 2 | OI-BOK-003, OI-BOK-008 | OI-FM-KNW-006, OI-FM-LRN-005 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-022 | Success Trap | 2 | OI-BOK-008, OI-BOK-009 | OI-FM-LRN-048, OI-FM-ADP-045 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-023 | Tool Contention | 2 | OI-BOK-005, OI-BOK-006 | OI-FM-COO-042, OI-FM-EXE-062 | Retain scoped variants; qualify by chapter or object before any merge. |
| OI-FMC-024 | Version Divergence | 2 | OI-BOK-005, OI-BOK-006 | OI-FM-COO-019, OI-FM-EXE-010 | Retain scoped variants; qualify by chapter or object before any merge. |

### 9.1 Collision Rule

The final glossary and Chapter 10 should:

- qualify generic labels by object or stage where ambiguity exists;
- preserve chapter provenance;
- merge only where mechanism, level of analysis and consequence align;
- and avoid creating one generic term that obscures distinct failure boundaries.

---

## 10. Quality-Dimension Consolidation

The eight chapters containing explicit quality sections contribute **197 quality dimensions**.

They use **160 unique labels**.

Twenty-five labels repeat across 62 source dimensions.

### 10.1 Higher-Order Quality Families

| Family | Higher-order quality family | Source dimensions | Source chapters |
| --- | --- | ---: | --- |
| Q01 | Purpose, relevance and scope | 16, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009, OI-BOK-001 |
| Q02 | Epistemic integrity, evidence and provenance | 18, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009, OI-BOK-001 |
| Q03 | Temporal integrity, currentness and timeliness | 9, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-001 |
| Q04 | Availability, accessibility and capacity | 15, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009, OI-BOK-001 |
| Q05 | Authority, legitimacy, accountability and governance | 14 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-009 |
| Q06 | Decision, deliberation and commitment quality | 4 | OI-BOK-004, OI-BOK-009 |
| Q07 | Clarity, interpretability and common understanding | 10, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-001 |
| Q08 | Coordination, interface, handoff and integration | 17, OI-BOK-001 | OI-BOK-003, OI-BOK-005, OI-BOK-006, OI-BOK-008, OI-BOK-001 |
| Q09 | Operational correctness, reliability, safety and recovery | 34 | OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-006, OI-BOK-007, OI-BOK-008, OI-BOK-009 |
| Q10 | Outcome, evaluation and measurement quality | 17 | OI-BOK-004, OI-BOK-005, OI-BOK-007, OI-BOK-009 |
| Q11 | Memory, reflection, learning and persistence | 13 | OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-007, OI-BOK-008 |
| Q12 | Capability configuration, lifecycle and adaptation | 17 | OI-BOK-003, OI-BOK-008, OI-BOK-009 |
| Q13 | Contestability, fairness and relational quality | 8, OI-BOK-001 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-005, OI-BOK-007, OI-BOK-001 |
| Q14 | Traceability, transparency and reconstructability | 5 | OI-BOK-002, OI-BOK-004, OI-BOK-005, OI-BOK-008, OI-BOK-009 |
| Q15 | Efficiency, proportionality and sustainability | 4 | OI-BOK-004, OI-BOK-006, OI-BOK-007 |
| Q16 | Human–AI role and automation integrity | 4 | OI-BOK-005, OI-BOK-008, OI-BOK-009 |

### 10.2 Quality Family Matrix

| Chapter | Q01 | Q02 | Q03 | Q04 | Q05 | Q06 | Q07 | Q08 | Q09 | Q10 | Q11 | Q12 | Q13 | Q14 | Q15 | Q16 | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| OI-BOK-001 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| OI-BOK-002 | 2 | 2 | 1 | 2 | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 12 |
| OI-BOK-003 | 1 | 3 | 1 | 1 | 1 | 0 | 2 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 14 |
| OI-BOK-004 | 1 | 2 | 1 | 0 | 3 | 3 | 1 | 0 | 1 | 1 | 1 | 0 | 2 | 1 | 1 | 0 | 18 |
| OI-BOK-005 | 2 | 0 | 0 | 0 | 1 | 0 | 3 | 13 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 25 |
| OI-BOK-006 | 1 | 2 | 1 | 2 | 1 | 0 | 1 | 1 | 20 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 30 |
| OI-BOK-007 | 1 | 3 | 2 | 2 | 0 | 0 | 1 | 0 | 3 | 13 | 1 | 0 | 2 | 0 | 2 | 0 | 30 |
| OI-BOK-008 | 3 | 3 | 2 | 3 | 4 | 0 | 0 | 1 | 4 | 0 | 9 | 1 | 0 | 1 | 0 | 2 | 33 |
| OI-BOK-009 | 4 | 2 | 0 | 3 | 2 | 1 | 0 | 0 | 4 | 2 | 0 | 15 | 0 | 1 | 0 | 1 | 35 |
| **Total** | 15 | 17 | 8 | 13 | 14 | 4 | 9 | 16 | 34 | 17 | 13 | 17 | 7 | 5 | 4 | 4 | 197 |

### 10.3 Final Synthesis Rule

Chapter 10 should use the 16 higher-order quality families to organise the integrated construct.

It should not claim that the 197 chapter-level dimensions are:

- independent;
- equally weighted;
- directly measurable;
- or suitable for aggregation into one score.

### 10.4 Scope Matters

Repeated labels often have different objects.

For example:

- context authority;
- knowledge authority;
- decision authority;
- and capability authority

are related but not interchangeable.

The source dimension remains attached to its chapter and definition.

---

## 11. Exact Quality-Name Collisions

There are **25 repeated quality labels across 62 source dimensions**.

| Collision | Source label | Count | Chapters | Stable IDs | Disposition |
| --- | --- | ---: | --- | --- | --- |
| OI-QDC-001 | Accessibility | 3 | OI-BOK-002, OI-BOK-003, OI-BOK-008 | OI-QUAL-CTX-008, OI-QUAL-KNW-007, OI-QUAL-LRN-009 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-002 | Accountability | 3 | OI-BOK-004, OI-BOK-005, OI-BOK-008 | OI-QUAL-DEC-015, OI-QUAL-COO-005, OI-QUAL-LRN-022 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-003 | Actionability | 2 | OI-BOK-002, OI-BOK-003 | OI-QUAL-CTX-010, OI-QUAL-KNW-010 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-004 | Adaptability | 2 | OI-BOK-005, OI-BOK-009 | OI-QUAL-COO-016, OI-QUAL-ADP-025 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-005 | Authority | 4 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-008 | OI-QUAL-CTX-003, OI-QUAL-KNW-004, OI-QUAL-DEC-003, OI-QUAL-LRN-012 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-006 | Availability | 2 | OI-BOK-006, OI-BOK-008 | OI-QUAL-EXE-008, OI-QUAL-LRN-008 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-007 | Coherence | 2 | OI-BOK-007, OI-BOK-009 | OI-QUAL-EVL-026, OI-QUAL-ADP-026 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-008 | Contestability | 4 | OI-BOK-002, OI-BOK-003, OI-BOK-004, OI-BOK-007 | OI-QUAL-CTX-011, OI-QUAL-KNW-011, OI-QUAL-DEC-014, OI-QUAL-EVL-024 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-009 | Evidence Quality | 2 | OI-BOK-008, OI-BOK-009 | OI-QUAL-LRN-020, OI-QUAL-ADP-014 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-010 | Freshness | 2 | OI-BOK-002, OI-BOK-008 | OI-QUAL-CTX-005, OI-QUAL-LRN-013 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-011 | Knowledge Fit | 2 | OI-BOK-004, OI-BOK-009 | OI-QUAL-DEC-004, OI-QUAL-ADP-006 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-012 | Learning | 2 | OI-BOK-004, OI-BOK-005 | OI-QUAL-DEC-018, OI-QUAL-COO-025 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-013 | Learning Readiness | 2 | OI-BOK-006, OI-BOK-007 | OI-QUAL-EXE-030, OI-QUAL-EVL-030 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-014 | Local–System Alignment | 2 | OI-BOK-005, OI-BOK-006 | OI-QUAL-COO-018, OI-QUAL-EXE-026 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-015 | Maintainability | 2 | OI-BOK-006, OI-BOK-009 | OI-QUAL-EXE-016, OI-QUAL-ADP-020 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-016 | Outcome Observability | 2 | OI-BOK-004, OI-BOK-007 | OI-QUAL-DEC-017, OI-QUAL-EVL-016 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-017 | Provenance | 2 | OI-BOK-002, OI-BOK-008 | OI-QUAL-CTX-004, OI-QUAL-LRN-003 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-018 | Readiness | 2 | OI-BOK-006, OI-BOK-009 | OI-QUAL-EXE-004, OI-QUAL-ADP-015 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-019 | Relevance | 3 | OI-BOK-002, OI-BOK-003, OI-BOK-004 | OI-QUAL-CTX-001, OI-QUAL-KNW-001, OI-QUAL-DEC-002 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-020 | Reliability | 2 | OI-BOK-006, OI-BOK-009 | OI-QUAL-EXE-007, OI-QUAL-ADP-012 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-021 | Resilience | 4 | OI-BOK-003, OI-BOK-005, OI-BOK-006, OI-BOK-009 | OI-QUAL-KNW-012, OI-QUAL-COO-022, OI-QUAL-EXE-013, OI-QUAL-ADP-021 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-022 | Reversibility | 2 | OI-BOK-004, OI-BOK-006 | OI-QUAL-DEC-016, OI-QUAL-EXE-018 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-023 | Security | 3 | OI-BOK-002, OI-BOK-006, OI-BOK-008 | OI-QUAL-CTX-009, OI-QUAL-EXE-027, OI-QUAL-LRN-018 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-024 | Timeliness | 3 | OI-BOK-004, OI-BOK-006, OI-BOK-007 | OI-QUAL-DEC-008, OI-QUAL-EXE-010, OI-QUAL-EVL-022 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |
| OI-QDC-025 | Traceability | 3 | OI-BOK-002, OI-BOK-004, OI-BOK-005 | OI-QUAL-CTX-012, OI-QUAL-DEC-013, OI-QUAL-COO-021 | Retain scoped dimensions; final Chapter 10 may consolidate only at higher-order family level. |

### 11.1 Quality Collision Rule

A shared label should become a higher-order family only where the final synthesis can state:

- the common construct;
- the scoped objects;
- the difference in evidence;
- and the reason the dimensions should remain related.

---

## 12. Observable-Indicator Evidence Model

The source chapters contain:

- **97 indicator groups**;
- and **253 source-derived semantic indicator statements** after explicit shared-predicate normalisation.

Every indicator is classified by its provisional evidence role.

| Code | Evidence role | Statements | Default proxy risk |
| --- | --- | ---: | --- |
| DCE | Direct capability-behaviour evidence | 14 | Moderate |
| PCE | Process, mechanism or control evidence | 105 | Moderate |
| TCE | Transition, handoff or connection evidence | 23 | Moderate |
| ENC | Enabling-condition evidence | 27 | High |
| GVE | Governance, authority or accountability evidence | 25 | High |
| OCE | Outcome or consequence evidence | 9 | High |
| RSE | Risk, weakness or failure-signal evidence | 28 | Moderate |
| LAE | Learning, persistence or adaptation evidence | 22 | Moderate |

### 12.1 Indicator Interpretation

#### Direct Capability-Behaviour Evidence

Shows the organisation performing the relevant behaviour.

It remains:

- bounded;
- context-dependent;
- and insufficient by itself.

#### Process or Control Evidence

Shows that a mechanism, practice or control operates.

It does not prove that the capability produces the intended outcome.

#### Transition Evidence

Shows that a conversion, handoff, routing or loop connection operates.

This is especially important for Project OI because local capability can exist while connections fail.

#### Enabling-Condition Evidence

Shows the presence of a condition such as:

- access;
- role clarity;
- capacity;
- or shared state.

An enabler is not direct proof of capability.

#### Governance Evidence

Shows that authority, accountability, permission or challenge conditions exist.

It does not prove that they are used effectively.

#### Outcome Evidence

Shows consequence or performance.

Outcome evidence does not establish:

- causality;
- process quality;
- or capability persistence.

#### Risk-Signal Evidence

Shows possible weakness, failure, drift or unresolved condition.

It does not identify cause automatically.

#### Learning and Adaptation Evidence

Shows that feedback changes:

- memory;
- practice;
- capability;
- or future response.

It requires longitudinal evidence.

### 12.2 No Standalone Proof

Every indicator record contains:

> **No — requires corroboration and construct-boundary review**

in the `standalone_proof` field.

This is deliberate.

Project OI should not infer Organisational Intelligence from:

- one metric;
- one outcome;
- one governance document;
- one AI benchmark;
- one successful response;
- or one maturity-survey answer.

### 12.3 Proxy-Risk Distribution

| Proxy-risk warning | Indicator statements |
| --- | ---: |
| High | 61 |
| Moderate | 192 |

High proxy risk is attached by default to:

- enabling conditions;
- governance conditions;
- and outcome evidence.

This does not make the evidence unimportant. It means the evidence is especially vulnerable to being interpreted as proof of a broader capability that may not exist.

---

## 13. Indicator-Group Name Collisions

Only two indicator-group labels repeat exactly across the source chapters.

| Collision | Source label | Count | Chapters | Group IDs | Disposition |
| --- | --- | ---: | --- | --- | --- |
| OI-IGC-001 | Adaptation | 2 | OI-BOK-005, OI-BOK-009 | OI-INDG-COO-009, OI-INDG-ADP-011 | Retain chapter-specific meaning. |
| OI-IGC-002 | AI Participation | 2 | OI-BOK-004, OI-BOK-005 | OI-INDG-DEC-010, OI-INDG-COO-011 | Retain chapter-specific meaning. |

The group names are retained in their source chapters because their specific indicators and objects differ.

---

## 14. Candidate Integrated Evidence Portfolio

Chapter 10 should require a **portfolio of evidence** for any material Organisational Intelligence capability claim.

A candidate portfolio contains:

1. **Enabling-condition evidence**  
   Relevant structures, resources, roles and access exist.

2. **Process or control evidence**  
   The capability mechanism is enacted.

3. **Transition evidence**  
   Inputs are converted and accepted by the next capability.

4. **Governance evidence**  
   Purpose, authority, accountability and contestability are present.

5. **Direct capability-behaviour evidence**  
   The organisation performs the relevant behaviour under stated conditions.

6. **Outcome evidence**  
   Material consequences are observed across relevant stakeholders and time.

7. **Risk-signal evidence**  
   Weakness, debt, drift and failure remain visible.

8. **Learning and adaptation evidence**  
   Feedback changes future understanding or capability and persists.

This portfolio is a Chapter 10 synthesis candidate.

It is not yet an assessment instrument.

---

## 15. Weak Proxies That Should Not Be Treated as Proof of OI

The source chapters repeatedly warn against treating the following as standalone evidence:

- information quantity;
- notification volume;
- number of documents;
- number of experts listed;
- number of decisions;
- approval completion;
- meeting frequency;
- message volume;
- task or Workflow completion;
- uptime alone;
- output volume;
- one positive outcome;
- one performance target;
- number of lessons recorded;
- training completion;
- technology adoption;
- AI benchmark scores;
- number of Agents;
- or change-initiative volume.

Each can be useful for a defined purpose.

None proves that the organisation can:

```text
Orient
→ Coordinate
→ Improve
```

as a connected and persistent system.

---

## 16. Diagnostic Use and Non-Use

### 16.1 Appropriate Uses

The index may support:

- construct reconciliation;
- case-study coding;
- interview design;
- failure analysis;
- evidence planning;
- capability audits;
- adversarial review;
- and future measurement research.

### 16.2 Inappropriate Uses

Do not use this register as:

- a validated maturity model;
- a compliance checklist;
- an employee score;
- an organisation ranking;
- a product requirements list;
- a causal model;
- a diagnostic survey without testing;
- or a direct architecture contract.

### 16.3 Negative Evidence

Absence of a positive indicator may be:

- a data gap;
- a scope issue;
- or a capability weakness.

Presence of a failure signal may indicate:

- one episode;
- a recurring mechanism;
- or a structural condition.

Classification requires context.

---

## 17. AI and Automation Diagnostic Boundary

The register identifies:

- **55 failure modes** with an AI, Agent or automation modifier;
- **6 quality dimensions** with an explicit AI or automation modifier;
- and **25 indicator statements** in AI-specific groups or wording.

These items remain distributed through the same diagnostic architecture as human and organisational work.

AI does not create a separate Organisational Intelligence cycle.

The final synthesis should preserve domain-specific AI risks while consolidating cross-cutting principles such as:

- explicit role;
- identity;
- bounded authority;
- source and inference separation;
- state integrity;
- independent evaluation;
- human capability effects;
- provider and model change;
- portability;
- and exit.

AI-specific evidence is time-sensitive and requires review by:

- model;
- task;
- interface;
- organisation;
- human role;
- deployment condition;
- and date.

---

## 18. Recommended Chapter 10 Diagnostic Architecture

OI-BOK-010 should contain a concise diagnostic structure with four layers.

### Layer 1 — OI Capability Position

```text
Sense
Contextualise
Know
Choose
Mobilise — coordinate
Mobilise — execute
Outcome–feedback bridge
Learn
Adapt
```

### Layer 2 — Primary Failure Class

```text
Capability
Transition
Epistemic
Governance
Operational
Feedback and learning
Persistence and adaptation
```

### Layer 3 — Diagnostic Family

Use the 25 families in Section 6.

### Layer 4 — Source Detail

Use the 437 stable failure-mode IDs, 197 source quality dimensions and 253 indicator statements in the machine-readable registers.

This architecture preserves parsimony in the final theory while retaining diagnostic traceability.

---

## 19. Adversarial Cautions

### 19.1 Diagnostic Proliferation

The current chapters contain hundreds of items because they were developed as detailed domain syntheses.

The item count should not be used as evidence that Project OI has discovered hundreds of independent constructs.

### 19.2 Failure-Mode Availability Bias

Later and more technical chapters contain more named failure modes partly because they were drafted with greater granularity.

### 19.3 Positive–Negative Asymmetry

Failure modes are more numerous and specific than quality dimensions.

That does not mean the BOK is a deficit model.

### 19.4 Level-of-Analysis Drift

The source material moves among:

- individual;
- team;
- organisational;
- technical-system;
- and ecosystem levels.

The final review must challenge any item whose object is unclear.

### 19.5 Normative Ambiguity

A capability can be:

- reliable;
- adaptive;
- and harmful.

Quality and indicator use must remain connected to responsible purpose.

### 19.6 Indicator Reactivity

Indicators used for control can change behaviour and lose validity.

The index should itself be evaluated if it becomes an assessment tool.

### 19.7 Product Bias

A diagnostic item should not become a software feature merely because it has a stable ID.

### 19.8 AI Exceptionalism

AI failures should not be separated so completely that ordinary authority, evidence, coordination and operational principles stop applying.

---

## 20. Machine-Readable Register Fields

### 20.1 Failure Register

- stable ID;
- source chapter and heading;
- exact source name;
- exact source description;
- capability position;
- primary and secondary diagnostic class;
- diagnostic family;
- modifier;
- exact-name collision;
- and disposition flags.

### 20.2 Quality Register

- stable ID;
- source chapter and heading;
- exact source dimension;
- exact source question or definition;
- higher-order quality family;
- modifier;
- exact-name collision;
- and disposition flags.

### 20.3 Indicator Register

- stable ID;
- source indicator group;
- source body or bullet;
- source-derived semantic statement;
- normalisation note;
- capability position;
- evidence role;
- quality family;
- proxy-risk warning;
- modifier;
- standalone-proof warning;
- and disposition flags.

---

## 21. Next Active Artefact

The diagnostic register has been regenerated after the source-chapter correction pass. The next release step is:

> **OI-BOK-RELEASE-001 — Body of Knowledge Completion Record**

The roadmap originally placed OI-BOK-DIAG-001 before the traceability matrix.

The traceability matrix should now connect:

```text
OI transformation
→ operational capability
→ chapter
→ construct
→ process
→ proposition
→ evidence anchor
→ failure family
→ quality family
→ indicator evidence role
→ open validation question
```

The separate OI-BOK-OPEN-001 limitations and open-questions register should follow the traceability matrix.

---

## Appendix A — Failure Mode Index

### OI-BOK-001 — Signals and Attention

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-SEN-001 | Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-002 | Suppression | CAP | F07 | — | RETAIN_SOURCE |
| OI-FM-SEN-003 | Fragmentation | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-004 | Normalisation | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-005 | Threshold Failure | OPS | F02 | — | RETAIN_SOURCE |
| OI-FM-SEN-006 | Escalation Failure | TRN | F08 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-SEN-007 | Notification Saturation | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-008 | Seniority Distortion | CAP | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-SEN-009 | Metric Fixation | EPI | F02 | — | RETAIN_SOURCE |
| OI-FM-SEN-010 | Premature Interpretation | CAP | F02 | — | RETAIN_SOURCE |
| OI-FM-SEN-011 | False Consensus | CAP | F04 | — | RETAIN_SOURCE |
| OI-FM-SEN-012 | Orphaned Attention | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-013 | Attention Decay | PAD | F01 | — | RETAIN_SOURCE |
| OI-FM-SEN-014 | Automated Amplification | CAP | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-SEN-015 | Algorithmic Suppression | CAP | F01 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |

### OI-BOK-002 — Organisational Context

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-CTX-001 | Context Absence | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-002 | Context Fragmentation | EPI | F01 | — | RETAIN_SOURCE |
| OI-FM-CTX-003 | Context Overload | EPI | F03 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-CTX-004 | Context Staleness | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-005 | Context Drift | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-006 | Context Collapse | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-007 | Context Stripping | EPI | F03 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-CTX-008 | Context Substitution | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-009 | Context Laundering | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-010 | Context Poisoning | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-011 | Context Leakage | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-012 | Authority Blindness | GOV | F01 | — | RETAIN_SOURCE |
| OI-FM-CTX-013 | Role Blindness | EPI | F01 | — | RETAIN_SOURCE |
| OI-FM-CTX-014 | Temporal Blindness | EPI | F01 | — | RETAIN_SOURCE |
| OI-FM-CTX-015 | Purpose Drift | EPI | F02 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-CTX-016 | False Completeness | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-CTX-017 | Tacit-Context Erasure | EPI | F05 | — | RETAIN_SOURCE |
| OI-FM-CTX-018 | Missing Negative Context | EPI | F03 | — | RETAIN_SOURCE |

### OI-BOK-003 — Knowledge and Expertise

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-KNW-001 | Expertise Invisibility | CAP | F05 | — | RETAIN_SOURCE |
| OI-FM-KNW-002 | Expertise Misclassification | EPI | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-003 | Expert Bottleneck | CAP | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-004 | Founder as Organisational Router | CAP | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-005 | Knowledge Hoarding | EPI | F05 | Human/relational | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-KNW-006 | Search Substitution | EPI | F05 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-KNW-007 | Documentation Substitution | CAP | F20 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-KNW-008 | Repository Graveyard | CAP | F05 | — | RETAIN_SOURCE |
| OI-FM-KNW-009 | Stale Expertise | EPI | F05 | — | RETAIN_SOURCE |
| OI-FM-KNW-010 | Expertise Without Access | CAP | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-011 | Access Without Translation | CAP | F05 | — | RETAIN_SOURCE |
| OI-FM-KNW-012 | Consultation Without Influence | CAP | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-013 | Authority Confusion | GOV | F06 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-014 | Status-Driven Consensus | CAP | F07 | — | RETAIN_SOURCE |
| OI-FM-KNW-015 | Transfer Without Recontextualisation | TRN | F10 | — | RETAIN_SOURCE |
| OI-FM-KNW-016 | Expertise Concentration | CAP | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-017 | AI Authority Laundering | GOV | F06 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-KNW-018 | Expertise Homogenisation | EPI | F05 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-019 | Automation Deskilling | CAP | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-KNW-020 | Knowledge Without Application | TRN | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |
| OI-FM-KNW-021 | Application Without Retention | TRN | F18 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |

### OI-BOK-004 — Decision and Authority

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-DEC-001 | Decision Ambiguity | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-002 | Recommendation Substitution | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-003 | Approval Substitution | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-004 | Action Without Decision | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-005 | Wrong-Problem Framing | EPI | F02 | — | RETAIN_SOURCE |
| OI-FM-DEC-006 | Authority Ambiguity | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-007 | Shadow Authority | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-008 | Authority Without Knowledge | GOV | F05 | — | RETAIN_SOURCE |
| OI-FM-DEC-009 | Knowledge Without Authority | GOV | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-DEC-010 | Overcentralisation | GOV | F03 | — | RETAIN_SOURCE |
| OI-FM-DEC-011 | Overdelegation | GOV | F04 | — | RETAIN_SOURCE |
| OI-FM-DEC-012 | Approval Congestion | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-013 | Hidden Veto | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-014 | Rubber-Stamp Review | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-015 | Hidden-Profile Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-DEC-016 | Consensus Substitution | GOV | F07 | — | RETAIN_SOURCE |
| OI-FM-DEC-017 | Suppressed Dissent | GOV | F07 | — | RETAIN_SOURCE |
| OI-FM-DEC-018 | Affective Conflict | GOV | F07 | — | RETAIN_SOURCE |
| OI-FM-DEC-019 | Analysis Paralysis | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-020 | Premature Closure | TRN | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-021 | Urgency Laundering | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-022 | Reversibility Blindness | GOV | F01 | — | RETAIN_SOURCE |
| OI-FM-DEC-023 | Exception Normalisation | GOV | F13 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-DEC-024 | Escalation Failure | TRN | F08 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-DEC-025 | Decision Drift | GOV | F08 | — | RETAIN_SOURCE |
| OI-FM-DEC-026 | Accountability Diffusion | GOV | F06 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-DEC-027 | Outcome Bias | FBL | F14 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-DEC-028 | Escalation of Commitment | TRN | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-029 | Retrospective Reconstruction | GOV | F05 | — | RETAIN_SOURCE |
| OI-FM-DEC-030 | Rationale Loss | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-031 | AI Authority Laundering | GOV | F06 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-DEC-032 | Automation Bias | GOV | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-DEC-033 | Algorithm Aversion | GOV | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-DEC-034 | Explanation Theatre | GOV | F04 | — | RETAIN_SOURCE |
| OI-FM-DEC-035 | Human-Oversight Theatre | GOV | F03 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-DEC-036 | Model-Change Drift | GOV | F23 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-DEC-037 | Appeal Failure | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-DEC-038 | Decision Without Learning | FBL | F19 | — | RETAIN_SOURCE |

### OI-BOK-005 — Coordination and Collective Action

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-COO-001 | Communication Substitution | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-002 | Meeting Substitution | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-003 | Task-Assignment Substitution | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-004 | Activity Illusion | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-005 | Decision–Action Gap | CAP | F08 | — | RETAIN_SOURCE |
| OI-FM-COO-006 | Commitment Ambiguity | OPS | F08 | — | RETAIN_SOURCE |
| OI-FM-COO-007 | Invisible Dependency | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-008 | Wrong Interdependence Model | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-009 | Ownership Vacuum | GOV | F09 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-010 | Ownership Collision | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-COO-011 | Shared-Responsibility Diffusion | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-012 | Authority Mismatch | GOV | F06 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-013 | Role Rigidity | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-014 | Role Drift | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-015 | Resource Contention | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-016 | Hidden Queue | OPS | F09 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-017 | Schedule Without Readiness | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-018 | State Drift | OPS | F13 | — | RETAIN_SOURCE |
| OI-FM-COO-019 | Version Divergence | OPS | F11 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-020 | Handoff Stripping | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-COO-021 | Fire-and-Forget Handoff | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-COO-022 | Translation Failure | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-COO-023 | Pragmatic Boundary Denial | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-COO-024 | Local Optimisation | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-025 | Coordination Overload | OPS | F03 | — | RETAIN_SOURCE |
| OI-FM-COO-026 | Coordination Debt | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-027 | Brittle Standardisation | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-028 | Protocol Rigidity | OPS | F13 | — | RETAIN_SOURCE |
| OI-FM-COO-029 | Premature Mutual Adjustment | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-COO-030 | Implicit Coordination Overreach | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-031 | Escalation Vacuum | TRN | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-032 | Escalation Congestion | TRN | F13 | — | RETAIN_SOURCE |
| OI-FM-COO-033 | Exception Normalisation | OPS | F13 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-034 | Distributed-Team Drift | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-035 | Relationship Deficit | OPS | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-COO-036 | Status Theatre | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-037 | Automation Surprise | OPS | F23 | AI/automation; Human/relational | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-COO-038 | AI Role Ambiguity | OPS | F09 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-COO-039 | AI Handoff Failure | OPS | F10 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-COO-040 | Agent Duplication | OPS | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-COO-041 | Agent Goal Conflict | OPS | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-COO-042 | Tool Contention | OPS | F24 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-COO-043 | Integration Failure | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-COO-044 | Human-Oversight Bottleneck | CAP | F09 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-COO-045 | Accountability Diffusion | OPS | F06 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-COO-046 | Repair Without Learning | TRN | F13 | — | RETAIN_SOURCE |
| OI-FM-COO-047 | Outcome Fragmentation | FBL | F01 | — | RETAIN_SOURCE |

### OI-BOK-006 — Execution and Operational Reliability

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-EXE-001 | Execution Ambiguity | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-002 | Action Without Authority | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-EXE-003 | Authority Without Readiness | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-EXE-004 | Decision–Execution Loss | OPS | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |
| OI-FM-EXE-005 | Coordination–Execution Gap | OPS | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |
| OI-FM-EXE-006 | Task Completion Substitution | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-007 | Output–Outcome Confusion | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EXE-008 | Stale Operational Intent | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-EXE-009 | Scope Drift | OPS | F03 | — | RETAIN_SOURCE |
| OI-FM-EXE-010 | Version Divergence | OPS | F11 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EXE-011 | State Blindness | OPS | F01 | — | RETAIN_SOURCE |
| OI-FM-EXE-012 | Observability Theatre | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-013 | Hidden Side Effect | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-014 | Partial Completion | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-015 | Indeterminate Effect | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-016 | Duplicate Execution | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-017 | Orphaned Execution | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-018 | Zombie Workflow | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-019 | Silent Failure | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-020 | False Success | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-021 | Acceptance Failure | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EXE-022 | Procedure Literalism | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-023 | Coercive Formalisation | OPS | F05 | — | RETAIN_SOURCE |
| OI-FM-EXE-024 | Procedure Drift | OPS | F13 | — | RETAIN_SOURCE |
| OI-FM-EXE-025 | Workaround Concealment | OPS | F13 | — | RETAIN_SOURCE |
| OI-FM-EXE-026 | Exception Normalisation | OPS | F13 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EXE-027 | Boundary Migration | OPS | F13 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-028 | Local Reliability | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-029 | Availability Substitution | CAP | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-030 | Reliability–Safety Conflict | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-031 | Tight-Coupling Cascade | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-032 | Resource Saturation | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-033 | Hidden Queue | OPS | F09 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EXE-034 | Retry Storm | OPS | F12 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-035 | Failover Oscillation | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-036 | Redundancy Illusion | OPS | F12 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EXE-037 | Degradation Invisibility | CAP | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-038 | Recovery Fantasy | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-039 | Rollback Incompatibility | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-040 | Compensation Mismatch | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-041 | Backup Without Restore | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-042 | Incident Ownership Ambiguity | OPS | F06 | — | RETAIN_SOURCE |
| OI-FM-EXE-043 | Evidence Destruction | OPS | F04 | — | RETAIN_SOURCE |
| OI-FM-EXE-044 | Blame Substitution | OPS | F07 | Human/relational | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-EXE-045 | Error Suppression | OPS | F07 | — | RETAIN_SOURCE |
| OI-FM-EXE-046 | Near-Miss Dismissal | OPS | F12 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EXE-047 | Alarm Flood | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-048 | Manual Fallback Illusion | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-049 | Automation Surprise | OPS | F23 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-EXE-050 | Out-of-the-Loop Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-051 | Oversight Congestion | OPS | F12 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-052 | Override Without Trace | OPS | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-053 | AI Role Ambiguity | OPS | F09 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-EXE-054 | Agent Authority Leakage | GOV | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-055 | Agent Hijacking | OPS | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-056 | Agent Context Drift | EPI | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-057 | Long-Horizon Coherence Loss | OPS | F02 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-058 | Self-Approval | GOV | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-059 | Model-Change Drift | OPS | F23 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-EXE-060 | Multi-Agent Duplication | OPS | F24 | Agent; Multi-Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-061 | Multi-Agent Goal Conflict | OPS | F24 | Agent; Multi-Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EXE-062 | Tool Contention | OPS | F24 | AI/automation | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-EXE-063 | Circular Delegation | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-EXE-064 | Kill-Switch Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-EXE-065 | Operational Evidence Gap | CAP | F04 | — | RETAIN_SOURCE |
| OI-FM-EXE-066 | Completion Without Evaluation Handoff | OPS | F10 | — | RETAIN_SOURCE |
| OI-FM-EXE-067 | Repair Without Structural Resolution | OPS | F13 | — | RETAIN_SOURCE |

### OI-BOK-007 — Outcomes, Feedback and Evaluation

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-EVL-001 | Activity Substitution | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-002 | Output Substitution | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-003 | Completion Substitution | OPS | F11 | — | RETAIN_SOURCE |
| OI-FM-EVL-004 | Implementation–Outcome Collapse | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-005 | Outcome–Impact Inflation | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-006 | Result Ambiguity | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-007 | Purpose Drift | FBL | F14 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EVL-008 | Retrospective Targeting | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-009 | Baseline Absence | EPI | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-010 | Baseline Incomparability | EPI | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-011 | Counterfactual Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-012 | Correlation–Causation Error | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-013 | Attribution Inflation | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-014 | Contribution Evasion | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-015 | Selection Bias | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-016 | Regression-to-the-Mean Error | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-017 | Concurrent-Change Confounding | FBL | F15 | — | RETAIN_SOURCE |
| OI-FM-EVL-018 | Spillover Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-019 | Displacement | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-020 | Stakeholder Omission | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-021 | Average-Outcome Masking | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-022 | Survivor Bias | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-023 | Complaint Silence | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-024 | Unintended-Consequence Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-025 | Delayed-Outcome Blindness | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-026 | Immediate-Interest Bias | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-027 | Implementation Fidelity Blindness | FBL | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-028 | Adaptation Misclassification | FBL | F12 | — | RETAIN_SOURCE |
| OI-FM-EVL-029 | Mechanism Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-030 | Logic-Model Literalism | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-031 | Measurement Validity Failure | EPI | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-032 | Reliable Invalidity | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-033 | Data-Provenance Loss | EPI | F04 | — | RETAIN_SOURCE |
| OI-FM-EVL-034 | Missing-Data Concealment | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-035 | Definition Drift | EPI | F16 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EVL-036 | Dashboard Compression | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-037 | Leading-Indicator Overconfidence | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-038 | Lagging-Indicator Paralysis | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-039 | Metric Gaming | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-040 | Goal Displacement | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-041 | Goodhart-Type Collapse | FBL | F16 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-042 | Campbell-Type Corruption | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-043 | Ranking Reactivity | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-044 | Indicator Proliferation | FBL | F16 | — | RETAIN_SOURCE |
| OI-FM-EVL-045 | Positive-Only Reporting | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-046 | Evaluation Capture | FBL | F01 | — | RETAIN_SOURCE |
| OI-FM-EVL-047 | External-Evaluator Detachment | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-048 | Evaluation Theatre | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-049 | Evaluation Delay | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-050 | Evaluation Non-Use | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-051 | Evaluation Misuse | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-052 | Outcome Bias | FBL | F14 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-EVL-053 | Blame Attribution | FBL | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-054 | Feedback Delay Misattribution | FBL | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-055 | Feedback Noise Overreaction | FBL | F14 | — | RETAIN_SOURCE |
| OI-FM-EVL-056 | Feedback Suppression | FBL | F07 | — | RETAIN_SOURCE |
| OI-FM-EVL-057 | Feedback Laundering | FBL | F17 | — | RETAIN_SOURCE |
| OI-FM-EVL-058 | AI Benchmark Substitution | FBL | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-059 | AI Task–System Confusion | FBL | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-060 | AI Average-Performance Masking | FBL | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-061 | AI Self-Evaluation | FBL | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-062 | AI Drift Blindness | FBL | F01 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-063 | Human-Behaviour Omission | FBL | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-064 | Model-Version Ambiguity | FBL | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-065 | Evaluator Automation Bias | FBL | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-EVL-066 | Outcome Without Learning Handoff | FBL | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |

### OI-BOK-008 — Organisational Memory, Reflection and Learning

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-LRN-001 | Repository Substitution | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-002 | Capture Fetish | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-003 | Lesson Graveyard | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-004 | Retention Substitution | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-005 | Search Substitution | EPI | F05 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-006 | Source Loss | EPI | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-007 | Context Stripping | EPI | F03 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-008 | Decision-Time Erasure | PAD | F05 | — | RETAIN_SOURCE |
| OI-FM-LRN-009 | Summary-as-Source | EPI | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-010 | Reconstruction Concealment | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-011 | Hindsight Contamination | PAD | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-012 | Narrative Simplification | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-013 | Official-Memory Capture | PAD | F01 | — | RETAIN_SOURCE |
| OI-FM-LRN-014 | Prestige Selection | PAD | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-015 | Success-Only Memory | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-016 | Failure-Only Memory | PAD | F12 | — | RETAIN_SOURCE |
| OI-FM-LRN-017 | Near-Miss Dismissal | PAD | F19 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-018 | Near-Miss Normalisation | PAD | F01 | — | RETAIN_SOURCE |
| OI-FM-LRN-019 | Lesson Laundering | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-020 | Lesson Inflation | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-021 | Lesson Under-Specification | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-022 | Stale Memory | PAD | F03 | — | RETAIN_SOURCE |
| OI-FM-LRN-023 | Supersession Failure | PAD | F12 | — | RETAIN_SOURCE |
| OI-FM-LRN-024 | Definition Drift | EPI | F13 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-025 | Memory Drift | PAD | F13 | — | RETAIN_SOURCE |
| OI-FM-LRN-026 | Accidental Forgetting | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-027 | Institutional Amnesia | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-028 | Inability to Forget | PAD | F05 | — | RETAIN_SOURCE |
| OI-FM-LRN-029 | Unlearning Theatre | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-030 | Deletion Substitution | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-031 | Knowledge Hoarding | EPI | F18 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-032 | Founder Memory Dependency | PAD | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-033 | Transactive-Memory Collapse | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-034 | Turnover Amnesia | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-LRN-035 | Technology Lock-In | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-036 | Archive Without Migration | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-037 | Retrieval Mismatch | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-038 | Retrieval Overload | PAD | F03 | — | RETAIN_SOURCE |
| OI-FM-LRN-039 | Retrieval Without Applicability | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-040 | Memory Without Authority | PAD | F06 | — | RETAIN_SOURCE |
| OI-FM-LRN-041 | Dissemination Substitution | TRN | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-042 | Application Absence | TRN | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-043 | Application Without Understanding | TRN | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |
| OI-FM-LRN-044 | Institutionalisation of a Wrong Lesson | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-045 | Superstitious Learning | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-046 | Overgeneralisation | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-047 | Undergeneralisation | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-048 | Success Trap | PAD | F21 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-049 | Competency Trap | PAD | F21 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-050 | Failure Fixation | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-LRN-051 | Recency Bias | PAD | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-052 | Availability Bias | CAP | F12 | — | RETAIN_SOURCE |
| OI-FM-LRN-053 | Single-Loop Trap | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-054 | Double-Loop Overreach | TRN | F02 | — | RETAIN_SOURCE |
| OI-FM-LRN-055 | Defensive Routine | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-056 | Blame Substitution | PAD | F19 | Human/relational | RETAIN_SOURCE; QUALIFY_SCOPE; MODIFIER_REVIEW |
| OI-FM-LRN-057 | Accountability Evasion | GOV | F06 | — | RETAIN_SOURCE |
| OI-FM-LRN-058 | Psychological-Safety Theatre | OPS | F07 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-059 | Review Theatre | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-060 | Postmortem Boilerplate | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-061 | Action-Item Decay | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-062 | Review Without Evidence | FBL | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-063 | Evidence Without Reflection | EPI | F04 | — | RETAIN_SOURCE |
| OI-FM-LRN-064 | Reflection Without Decision | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-065 | Outcome Bias | FBL | F14 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-LRN-066 | Causal Overclaim | EPI | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-067 | Counterfactual Fantasy | PAD | F15 | — | RETAIN_SOURCE |
| OI-FM-LRN-068 | Individual Insight Dependency | OPS | F09 | — | RETAIN_SOURCE |
| OI-FM-LRN-069 | Team-Silo Learning | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-070 | Boundary Loss | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-071 | Vicarious-Learning Misfit | FBL | F19 | — | RETAIN_SOURCE |
| OI-FM-LRN-072 | Memory Governance Vacuum | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-073 | Privacy Over-Retention | PAD | F06 | — | RETAIN_SOURCE |
| OI-FM-LRN-074 | Deletion Without Trace | PAD | F06 | — | RETAIN_SOURCE |
| OI-FM-LRN-075 | Memory Contamination | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-076 | AI Fabricated Memory | PAD | F18 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-077 | AI Stale Memory | PAD | F03 | AI/automation; Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-078 | AI Memory Leakage | PAD | F18 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-079 | AI Retrieval Bias | PAD | F18 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-080 | AI Self-Reinforcing Memory | PAD | F18 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-081 | Memory Poisoning | PAD | F24 | Agent | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-082 | Model-Change Memory Drift | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-083 | Memory Consolidation Loss | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-LRN-084 | Automated Forgetting Without Governance | GOV | F06 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-LRN-085 | Learning Without Capability Handoff | TRN | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |

### OI-BOK-009 — Capability Development and Adaptation

| ID | Source name | Class | Family | Modifier | Disposition |
| --- | --- | --- | --- | --- | --- |
| OI-FM-ADP-001 | Learning–Capability Substitution | PAD | F19 | — | RETAIN_SOURCE |
| OI-FM-ADP-002 | Training Substitution | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-003 | Documentation Substitution | PAD | F20 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-004 | Tool Substitution | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-005 | Resource Substitution | OPS | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-006 | Performance Substitution | PAD | F04 | — | RETAIN_SOURCE |
| OI-FM-ADP-007 | Heroic Performance | PAD | F20 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-008 | Expert Scaffolding Concealment | PAD | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-009 | Capability Boundary Ambiguity | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-010 | Capability Claim Inflation | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-011 | Ownership Vacuum | GOV | F06 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-012 | Ownership Fragmentation | GOV | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-013 | Authority Mismatch | GOV | F06 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-014 | Resource Mismatch | OPS | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-015 | Complement Blindness | CAP | F01 | — | RETAIN_SOURCE |
| OI-FM-ADP-016 | Practice Absence | CAP | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-017 | Feedback Absence | FBL | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-018 | Training–Work Disconnect | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-019 | Routine Without Understanding | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-020 | Overstandardisation | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-021 | Understandardisation | PAD | F05 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-022 | Institutionalisation of Error | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-023 | Institutionalisation Without Review | FBL | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-024 | Distribution Failure | OPS | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-025 | Universalisation Error | PAD | F09 | — | RETAIN_SOURCE |
| OI-FM-ADP-026 | Capability Concentration | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-027 | Redundancy Illusion | PAD | F12 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-028 | Succession Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-ADP-029 | Transfer by Copy | TRN | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-030 | Adaptation Overfit | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-031 | Source-Context Overfit | EPI | F03 | — | RETAIN_SOURCE |
| OI-FM-ADP-032 | Scaling Before Reliability | PAD | F12 | — | RETAIN_SOURCE |
| OI-FM-ADP-033 | Scaling Without Governance | PAD | F06 | — | RETAIN_SOURCE |
| OI-FM-ADP-034 | Scaling Without Local Knowledge | PAD | F05 | — | RETAIN_SOURCE |
| OI-FM-ADP-035 | Replication Drift | PAD | F13 | — | RETAIN_SOURCE |
| OI-FM-ADP-036 | Absorptive-Capacity Illusion | CAP | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-037 | Not-Invented-Here | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-038 | External-Copying Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-ADP-039 | Exploration Starvation | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-040 | Exploitation Starvation | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-041 | Innovation Theatre | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-042 | Pilot Permanence | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-043 | Demonstration–Production Gap | CAP | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-044 | Selection Failure | OPS | F12 | — | RETAIN_SOURCE |
| OI-FM-ADP-045 | Success Trap | PAD | F21 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-046 | Competency Trap | PAD | F21 | — | RETAIN_SOURCE; QUALIFY_SCOPE |
| OI-FM-ADP-047 | Capability Trap | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-048 | Path Lock-In | PAD | F21 | — | RETAIN_SOURCE |
| OI-FM-ADP-049 | Identity Rigidity | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-050 | Metric Lock-In | EPI | F16 | — | RETAIN_SOURCE |
| OI-FM-ADP-051 | Initiative Overload | PAD | F03 | — | RETAIN_SOURCE |
| OI-FM-ADP-052 | Change Without Learning | TRN | F19 | — | RETAIN_SOURCE |
| OI-FM-ADP-053 | Transformation Theatre | PAD | F22 | — | RETAIN_SOURCE |
| OI-FM-ADP-054 | Change Fatigue | PAD | F22 | Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-055 | Adaptation Fragmentation | PAD | F01 | — | RETAIN_SOURCE |
| OI-FM-ADP-056 | Adaptation Without Coherence | PAD | F22 | — | RETAIN_SOURCE |
| OI-FM-ADP-057 | Local Adaptation Harm | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-058 | Resource Reallocation Avoidance | OPS | F06 | — | RETAIN_SOURCE |
| OI-FM-ADP-059 | Capability Debt Concealment | PAD | F13 | — | RETAIN_SOURCE |
| OI-FM-ADP-060 | Capability Decay Blindness | PAD | F01 | — | RETAIN_SOURCE |
| OI-FM-ADP-061 | Capability Erosion Through Automation | PAD | F20 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-062 | Capability Obsolescence Denial | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-063 | Capability Retirement Avoidance | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-064 | Tool Decommissioning Substitution | PAD | F09 | — | RETAIN_SOURCE |
| OI-FM-ADP-065 | Retirement Without Dependency Analysis | PAD | F09 | — | RETAIN_SOURCE |
| OI-FM-ADP-066 | Retirement Without Memory | PAD | F18 | — | RETAIN_SOURCE |
| OI-FM-ADP-067 | Provider Capability Confusion | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-068 | Borrowed-Capability Concealment | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-069 | Capability Opacity | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-070 | Capability Sovereignty Loss | PAD | F20 | — | RETAIN_SOURCE |
| OI-FM-ADP-071 | AI Adoption Substitution | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-072 | AI Productivity–Capability Confusion | PAD | F20 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-073 | AI Skill Erosion | PAD | F23 | AI/automation; Human/relational | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-074 | AI Homogenisation | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-075 | AI Provider Lock-In | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-076 | AI Model-Change Drift | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-077 | AI Capability Boundary Ambiguity | PAD | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-078 | AI Evaluation Gap | FBL | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-079 | AI Exit Failure | OPS | F23 | AI/automation | RETAIN_SOURCE; MODIFIER_REVIEW |
| OI-FM-ADP-080 | Capability Without Outcome Handoff | TRN | F25 | — | RETAIN_SOURCE; CH10_CONNECTION_CLUSTER |

---

## Appendix B — Quality Dimension Index

### OI-BOK-001 — Signals and Attention

No explicit source quality section exists in this chapter. The register does not infer one.

### OI-BOK-002 — Organisational Context

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-CTX-001 | Relevance | Q01 | Does the context materially affect the purpose? |
| OI-QUAL-CTX-002 | Sufficiency | Q04 | Is enough context available to proceed responsibly? Sufficiency is not completeness. |
| OI-QUAL-CTX-003 | Authority | Q05 | Are governing and authoritative sources distinguishable? |
| OI-QUAL-CTX-004 | Provenance | Q02 | Can the source and transformation history be inspected? |
| OI-QUAL-CTX-005 | Freshness | Q03 | Does the context reflect the relevant time? |
| OI-QUAL-CTX-006 | Specificity | Q01 | Is the context appropriately scoped to the entity, task, role and situation? |
| OI-QUAL-CTX-007 | Consistency | Q02 | Are contradictions visible and explainable? Consistency does not require hiding disagreement. |
| OI-QUAL-CTX-008 | Accessibility | Q04 | Can the appropriate actor or system retrieve and understand it? |
| OI-QUAL-CTX-009 | Security | Q05 | Is the context supplied only within legitimate boundaries? |
| OI-QUAL-CTX-010 | Actionability | Q07 | Does the context help form orientation or response? |
| OI-QUAL-CTX-011 | Contestability | Q13 | Can an actor challenge, correct or qualify it? |
| OI-QUAL-CTX-012 | Traceability | Q14 | Can later reviewers determine which context influenced the decision or action? |

### OI-BOK-003 — Knowledge and Expertise

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-KNW-001 | Relevance | Q01 | Does the knowledge or expertise apply to the problem? |
| OI-QUAL-KNW-002 | Domain Fit | Q02 | Is the expertise specific to the task and context? |
| OI-QUAL-KNW-003 | Evidence | Q02 | What supports the claim or judgement? |
| OI-QUAL-KNW-004 | Authority | Q05 | What knowledge authority does the source hold? |
| OI-QUAL-KNW-005 | Currency | Q03 | Is the knowledge current enough for the purpose? |
| OI-QUAL-KNW-006 | Calibration | Q02 | Does the source recognise uncertainty and limits? |
| OI-QUAL-KNW-007 | Accessibility | Q04 | Can the organisation gain timely access? |
| OI-QUAL-KNW-008 | Interpretability | Q07 | Can the knowledge be understood by the receiving actor? |
| OI-QUAL-KNW-009 | Integrability | Q08 | Can it be combined with other necessary perspectives? |
| OI-QUAL-KNW-010 | Actionability | Q07 | Can it influence orientation or authorised response? |
| OI-QUAL-KNW-011 | Contestability | Q13 | Can the knowledge or expert judgement be challenged? |
| OI-QUAL-KNW-012 | Resilience | Q09 | Does the capability survive absence, turnover or system failure? |
| OI-QUAL-KNW-013 | Retention | Q11 | Can learning influence future work? |
| OI-QUAL-KNW-014 | Development | Q12 | Does use of the knowledge strengthen or weaken future human and organisational capability? |

### OI-BOK-004 — Decision and Authority

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-DEC-001 | Clarity | Q07 | Can the decision be stated precisely? |
| OI-QUAL-DEC-002 | Relevance | Q01 | Does the decision address the real issue? |
| OI-QUAL-DEC-003 | Authority | Q05 | Was it made under valid decision rights? |
| OI-QUAL-DEC-004 | Knowledge Fit | Q02 | Did relevant context and expertise reach the decision? |
| OI-QUAL-DEC-005 | Evidence Integrity | Q02 | Are source, currentness, uncertainty and limitations visible? |
| OI-QUAL-DEC-006 | Alternative Quality | Q06 | Were realistic alternatives considered? |
| OI-QUAL-DEC-007 | Dissent Quality | Q13 | Could material challenge enter without becoming personal conflict? |
| OI-QUAL-DEC-008 | Timeliness | Q03 | Was the decision made within the useful window? |
| OI-QUAL-DEC-009 | Proportionality | Q15 | Did governance match risk, novelty and reversibility? |
| OI-QUAL-DEC-010 | Legitimacy | Q05 | Do affected participants understand why the process and authority were appropriate? |
| OI-QUAL-DEC-011 | Executability | Q06 | Can the decision be translated into action? |
| OI-QUAL-DEC-012 | Commitment | Q06 | Do required actors understand and accept their implementation obligations? |
| OI-QUAL-DEC-013 | Traceability | Q14 | Can the organisation reconstruct: - evidence; - authority; - rationale; - and action? |
| OI-QUAL-DEC-014 | Contestability | Q13 | Can the decision be challenged or appealed appropriately? |
| OI-QUAL-DEC-015 | Accountability | Q05 | Is there an actor and forum capable of explanation, judgement and consequence? |
| OI-QUAL-DEC-016 | Reversibility | Q09 | Are containment, rollback, compensation or review proportionate? |
| OI-QUAL-DEC-017 | Outcome Observability | Q10 | Can consequences be connected to the decision and implementation? |
| OI-QUAL-DEC-018 | Learning | Q11 | Does review improve: - future decisions; - authority; - policy; - and context? |

### OI-BOK-005 — Coordination and Collective Action

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-COO-001 | Purpose Clarity | Q01 | Do actors understand the authorised objective? |
| OI-QUAL-COO-002 | Commitment Clarity | Q07 | Do actors know which decision is effective and what obligations follow? |
| OI-QUAL-COO-003 | Dependency Visibility | Q08 | Are material dependencies identifiable? |
| OI-QUAL-COO-004 | Role Clarity | Q07 | Are contribution, authority and boundaries understood? |
| OI-QUAL-COO-005 | Accountability | Q05 | Can actors identify ownership and explanation obligations? |
| OI-QUAL-COO-006 | Predictability | Q08 | Can actors anticipate relevant contributions and timing? |
| OI-QUAL-COO-007 | Common Understanding | Q07 | Is there sufficient shared comprehension of state, language and objective? |
| OI-QUAL-COO-008 | Shared-State Integrity | Q08 | Does the representation match real work? |
| OI-QUAL-COO-009 | Interface Quality | Q08 | Are inputs, outputs, acceptance and error behaviour clear? |
| OI-QUAL-COO-010 | Handoff Integrity | Q08 | Does transfer preserve required context and responsibility? |
| OI-QUAL-COO-011 | Timing and Synchronisation | Q08 | Are activities aligned within the useful window? |
| OI-QUAL-COO-012 | Resource Coordination | Q08 | Are constrained resources allocated legitimately? |
| OI-QUAL-COO-013 | Communication Quality | Q08 | Is communication timely, accurate and problem solving? |
| OI-QUAL-COO-014 | Relational Quality | Q13 | Do shared goals, shared knowledge and mutual respect support work? |
| OI-QUAL-COO-015 | Boundary Translation | Q01 | Can specialised contributions be transferred, translated or transformed as required? |
| OI-QUAL-COO-016 | Adaptability | Q08 | Can the organisation change coordination mode when conditions change? |
| OI-QUAL-COO-017 | Exception Handling | Q08 | Are deviation and escalation governed? |
| OI-QUAL-COO-018 | Local–System Alignment | Q08 | Do local actions support the wider outcome? |
| OI-QUAL-COO-019 | Coordination Load | Q08 | Is the coordination effort proportionate? |
| OI-QUAL-COO-020 | Integration | Q08 | Do outputs combine into one usable result? |
| OI-QUAL-COO-021 | Traceability | Q14 | Can the organisation reconstruct commitments, handoffs and changes? |
| OI-QUAL-COO-022 | Resilience | Q09 | Can coordination continue through absence, failure and surprise? |
| OI-QUAL-COO-023 | AI Role Integrity | Q16 | Are AI contribution, authority and state visible? |
| OI-QUAL-COO-024 | Outcome Linkage | Q10 | Can consequences be connected to coordinated work? |
| OI-QUAL-COO-025 | Learning | Q11 | Does repair improve future coordination? |

### OI-BOK-006 — Execution and Operational Reliability

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-EXE-001 | Intent Clarity | Q07 | Can actors state what authorised change should occur? |
| OI-QUAL-EXE-002 | Action Fidelity | Q09 | Does actual execution preserve purpose and constraints? |
| OI-QUAL-EXE-003 | Authority Integrity | Q09 | Are action, override, stop and recovery rights valid? |
| OI-QUAL-EXE-004 | Readiness | Q09 | Were prerequisites, capacity, context and recovery sufficient? |
| OI-QUAL-EXE-005 | State Integrity | Q09 | Is current state accurate, attributable and consistent? |
| OI-QUAL-EXE-006 | Observability | Q09 | Can material progress, deviation and failure be understood? |
| OI-QUAL-EXE-007 | Reliability | Q09 | Does acceptable service continue under stated conditions? |
| OI-QUAL-EXE-008 | Availability | Q04 | Is service ready when required? |
| OI-QUAL-EXE-009 | Correctness | Q09 | Does execution produce the required state or output? |
| OI-QUAL-EXE-010 | Timeliness | Q03 | Does execution occur within the useful window? |
| OI-QUAL-EXE-011 | Capacity | Q04 | Can the system handle expected load and demand? |
| OI-QUAL-EXE-012 | Robustness | Q09 | Can it tolerate defined variation? |
| OI-QUAL-EXE-013 | Resilience | Q09 | Can it recover or extend performance under surprise? |
| OI-QUAL-EXE-014 | Safety | Q09 | Are unacceptable harms constrained? |
| OI-QUAL-EXE-015 | Integrity | Q09 | Are state and evidence protected from unauthorised or accidental change? |
| OI-QUAL-EXE-016 | Maintainability | Q09 | Can operation be repaired or modified safely? |
| OI-QUAL-EXE-017 | Recoverability | Q09 | Can acceptable operation be restored? |
| OI-QUAL-EXE-018 | Reversibility | Q09 | Can effects be undone, contained or compensated? |
| OI-QUAL-EXE-019 | Exception Fitness | Q01 | Can ordinary and exceptional conditions be distinguished and handled? |
| OI-QUAL-EXE-020 | Degradation Quality | Q09 | Does reduced service preserve critical purpose visibly? |
| OI-QUAL-EXE-021 | Human Manageability | Q09 | Can people understand and intervene effectively? |
| OI-QUAL-EXE-022 | Automation Calibration | Q02 | Does reliance match automation capability and failure mode? |
| OI-QUAL-EXE-023 | Evidence Completeness | Q02 | Can material execution be reconstructed? |
| OI-QUAL-EXE-024 | Completion Integrity | Q09 | Does terminal state reflect actual effect and acceptance? |
| OI-QUAL-EXE-025 | Resource Efficiency | Q15 | Does reliability remain proportionate to cost and capacity? |
| OI-QUAL-EXE-026 | Local–System Alignment | Q08 | Does local execution support the wider organisational commitment? |
| OI-QUAL-EXE-027 | Security | Q05 | Are identity, authorisation and tool boundaries preserved? |
| OI-QUAL-EXE-028 | Incident Responsiveness | Q09 | Can failure be contained and stabilised? |
| OI-QUAL-EXE-029 | Recovery Integrity | Q09 | Does recovery restore usable and trustworthy operation? |
| OI-QUAL-EXE-030 | Learning Readiness | Q09 | Does execution preserve the evidence required for later evaluation and learning? |

### OI-BOK-007 — Outcomes, Feedback and Evaluation

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-EVL-001 | Purpose Alignment | Q01 | Does the evaluation address the authorised purpose and current need? |
| OI-QUAL-EVL-002 | Outcome Clarity | Q07 | Are output, outcome and impact distinguished? |
| OI-QUAL-EVL-003 | Stakeholder Coverage | Q04 | Are material affected groups represented? |
| OI-QUAL-EVL-004 | Distributional Visibility | Q10 | Are uneven benefits and harms visible? |
| OI-QUAL-EVL-005 | Temporal Adequacy | Q03 | Does the evaluation cover relevant immediate and delayed effects? |
| OI-QUAL-EVL-006 | Theory Quality | Q10 | Is the expected pathway and mechanism plausible and explicit? |
| OI-QUAL-EVL-007 | Implementation Evidence | Q02 | Is what actually occurred known? |
| OI-QUAL-EVL-008 | Baseline Quality | Q10 | Is the reference condition valid and comparable? |
| OI-QUAL-EVL-009 | Counterfactual Credibility | Q10 | Is the alternative explanation addressed proportionately? |
| OI-QUAL-EVL-010 | Attribution Discipline | Q10 | Does the causal claim match the design? |
| OI-QUAL-EVL-011 | Contribution Credibility | Q10 | Is the contribution story supported and challenged? |
| OI-QUAL-EVL-012 | Measurement Validity | Q10 | Do measures represent intended constructs? |
| OI-QUAL-EVL-013 | Measurement Reliability | Q09 | Are measures sufficiently consistent? |
| OI-QUAL-EVL-014 | Data Integrity | Q02 | Are source, definition and transformation trustworthy? |
| OI-QUAL-EVL-015 | Feedback Completeness | Q10 | Are intended, unintended, positive, negative and distributional effects sufficiently represented? |
| OI-QUAL-EVL-016 | Outcome Observability | Q09 | Can material consequences be detected and interpreted? |
| OI-QUAL-EVL-017 | Uncertainty Transparency | Q02 | Are limits, assumptions and confidence visible? |
| OI-QUAL-EVL-018 | Metric Robustness | Q09 | Does the measurement portfolio resist gaming and proxy collapse? |
| OI-QUAL-EVL-019 | Reactivity Awareness | Q10 | Does the evaluation account for behavioural response to measurement? |
| OI-QUAL-EVL-020 | Independence | Q10 | Can the evaluation challenge the intervention and owner? |
| OI-QUAL-EVL-021 | Contextual Understanding | Q10 | Does the evaluator understand implementation and conditions? |
| OI-QUAL-EVL-022 | Timeliness | Q03 | Does feedback arrive within the useful decision window? |
| OI-QUAL-EVL-023 | Usefulness | Q10 | Is the evaluation designed for a legitimate use and user? |
| OI-QUAL-EVL-024 | Contestability | Q13 | Can evidence and judgement be challenged? |
| OI-QUAL-EVL-025 | Fairness | Q13 | Does evaluation consider the distribution of benefit, burden and voice? |
| OI-QUAL-EVL-026 | Coherence | Q10 | Does the intervention align with other organisational action? |
| OI-QUAL-EVL-027 | Efficiency | Q15 | Are outcome and resource use considered together? |
| OI-QUAL-EVL-028 | Sustainability | Q15 | Does the outcome or capability persist sufficiently? |
| OI-QUAL-EVL-029 | AI Sociotechnical Coverage | Q04 | Does AI evaluation include human, workflow and stakeholder consequences? |
| OI-QUAL-EVL-030 | Learning Readiness | Q11 | Can evaluation transfer a coherent evidence package into reflection and learning? |

### OI-BOK-008 — Organisational Memory, Reflection and Learning

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-LRN-001 | Selection Relevance | Q01 | Are material experiences selected for learning? |
| OI-QUAL-LRN-002 | Coverage | Q04 | Are success, failure, near miss and affected perspectives represented? |
| OI-QUAL-LRN-003 | Provenance | Q02 | Can retained memory be traced to source? |
| OI-QUAL-LRN-004 | Temporal Integrity | Q03 | Are original and later knowledge distinguishable? |
| OI-QUAL-LRN-005 | Context Integrity | Q09 | Are scope, conditions and uncertainty preserved? |
| OI-QUAL-LRN-006 | Memory Accuracy | Q02 | Does retained memory represent the available evidence appropriately? |
| OI-QUAL-LRN-007 | Reconstruction Transparency | Q14 | Is current interpretation distinguishable from historical record? |
| OI-QUAL-LRN-008 | Availability | Q04 | Does the memory exist? |
| OI-QUAL-LRN-009 | Accessibility | Q04 | Can an authorised actor retrieve it in time? |
| OI-QUAL-LRN-010 | Retrievability | Q11 | Can relevant cues locate it? |
| OI-QUAL-LRN-011 | Applicability | Q11 | Can the actor determine whether it fits the current context? |
| OI-QUAL-LRN-012 | Authority | Q05 | Is current, historical, proposed and superseded guidance distinguishable? |
| OI-QUAL-LRN-013 | Freshness | Q03 | Is fitness for current use visible? |
| OI-QUAL-LRN-014 | Maintenance | Q12 | Are ownership and review active? |
| OI-QUAL-LRN-015 | Supersession Integrity | Q09 | Can the organisation see what replaced what and why? |
| OI-QUAL-LRN-016 | Forgetting Integrity | Q09 | Is retirement deliberate, lawful and traceable? |
| OI-QUAL-LRN-017 | Privacy | Q05 | Is retention proportionate and permission-bound? |
| OI-QUAL-LRN-018 | Security | Q05 | Is memory protected from alteration, leakage and poisoning? |
| OI-QUAL-LRN-019 | Inquiry Quality | Q11 | Does reflection test assumptions and alternatives? |
| OI-QUAL-LRN-020 | Evidence Quality | Q02 | Are primary evidence and interpretation distinct? |
| OI-QUAL-LRN-021 | Psychological Safety | Q09 | Can relevant actors speak candidly? |
| OI-QUAL-LRN-022 | Accountability | Q05 | Can decisions, violations and ownership be examined legitimately? |
| OI-QUAL-LRN-023 | Lesson Specificity | Q01 | Does the lesson state: - mechanism; - scope; - confidence; - and implication? |
| OI-QUAL-LRN-024 | Lesson Contestability | Q11 | Can the lesson be challenged and corrected? |
| OI-QUAL-LRN-025 | Dissemination Fitness | Q01 | Does learning reach actors who may need it? |
| OI-QUAL-LRN-026 | Application | Q11 | Does the learning influence future work? |
| OI-QUAL-LRN-027 | Persistence | Q11 | Does it survive time and turnover? |
| OI-QUAL-LRN-028 | Transfer Quality | Q11 | Can it move across contexts without losing conditions? |
| OI-QUAL-LRN-029 | Learning Depth | Q11 | Does inquiry challenge the appropriate level of action or assumption? |
| OI-QUAL-LRN-030 | Learning-System Quality | Q11 | Can the organisation improve how it learns? |
| OI-QUAL-LRN-031 | AI Memory Integrity | Q16 | Are source, model, transformation and permission visible? |
| OI-QUAL-LRN-032 | AI Abstention | Q16 | Can the system state that memory is missing or conflicting? |
| OI-QUAL-LRN-033 | Learning-to-Capability Handoff | Q08 | Can retained learning support a governed capability-change decision? |

### OI-BOK-009 — Capability Development and Adaptation

| ID | Source dimension | Family | Source question or definition |
| --- | --- | --- | --- |
| OI-QUAL-ADP-001 | Purpose Fit | Q01 | Does the capability serve a legitimate and current need? |
| OI-QUAL-ADP-002 | Boundary Clarity | Q01 | Are scope, conditions and exclusions explicit? |
| OI-QUAL-ADP-003 | Configuration Completeness | Q12 | Are critical capability elements present and integrated? |
| OI-QUAL-ADP-004 | Ownership | Q12 | Is one role accountable for the complete capability lifecycle? |
| OI-QUAL-ADP-005 | Authority Fit | Q05 | Do performers and maintainers possess appropriate rights? |
| OI-QUAL-ADP-006 | Knowledge Fit | Q06 | Is relevant explicit and tacit knowledge available? |
| OI-QUAL-ADP-007 | Skill and Practice | Q12 | Can people perform under representative conditions? |
| OI-QUAL-ADP-008 | Routine Fitness | Q01 | Do routines support reliability and adaptation? |
| OI-QUAL-ADP-009 | Technology Fit | Q12 | Does technology support rather than obscure capability? |
| OI-QUAL-ADP-010 | Resource Sufficiency | Q04 | Are time, capacity, budget and infrastructure adequate? |
| OI-QUAL-ADP-011 | Relationship Fit | Q12 | Are internal and external dependencies usable? |
| OI-QUAL-ADP-012 | Reliability | Q09 | Can the capability perform repeatedly? |
| OI-QUAL-ADP-013 | Outcome Connection | Q10 | Is capability use connected to material outcome? |
| OI-QUAL-ADP-014 | Evidence Quality | Q02 | Does the capability claim rest on representative evidence? |
| OI-QUAL-ADP-015 | Readiness | Q09 | Can the capability operate at the required risk, scale and condition? |
| OI-QUAL-ADP-016 | Distribution | Q12 | Is capability available where needed? |
| OI-QUAL-ADP-017 | Redundancy | Q12 | Are critical dependencies protected proportionately? |
| OI-QUAL-ADP-018 | Transferability | Q12 | Can capability move across people or units? |
| OI-QUAL-ADP-019 | Scalability | Q12 | Can volume or reach increase without unacceptable degradation? |
| OI-QUAL-ADP-020 | Maintainability | Q09 | Can the capability be refreshed and repaired? |
| OI-QUAL-ADP-021 | Resilience | Q09 | Can it recover or extend under disruption? |
| OI-QUAL-ADP-022 | Exploration Capacity | Q04 | Can the organisation search for alternatives? |
| OI-QUAL-ADP-023 | Exploitation Quality | Q12 | Can useful capability be refined and deployed? |
| OI-QUAL-ADP-024 | Absorptive Capacity | Q04 | Can external knowledge be recognised and applied? |
| OI-QUAL-ADP-025 | Adaptability | Q12 | Can the capability change when conditions change? |
| OI-QUAL-ADP-026 | Coherence | Q10 | Does the capability fit the wider organisational system? |
| OI-QUAL-ADP-027 | Portability | Q12 | Can critical capability survive provider, tool or location change? |
| OI-QUAL-ADP-028 | Transparency | Q14 | Can the organisation explain the capability and dependencies? |
| OI-QUAL-ADP-029 | Ethical and Legal Fitness | Q01 | Does the capability operate responsibly? |
| OI-QUAL-ADP-030 | Lifecycle Governance | Q05 | Are development, maintenance, renewal and retirement governed? |
| OI-QUAL-ADP-031 | Capability Debt Visibility | Q12 | Are deferred weaknesses known? |
| OI-QUAL-ADP-032 | Capability Sovereignty | Q12 | Does the organisation retain sufficient control and exit? |
| OI-QUAL-ADP-033 | AI Human-Capability Balance | Q16 | Does AI use preserve necessary human learning, oversight and recovery? |
| OI-QUAL-ADP-034 | Learning Integration | Q12 | Does feedback change capability appropriately? |
| OI-QUAL-ADP-035 | Adaptation Evidence | Q02 | Can the organisation show that change improved or preserved future response capacity? |

---

## Appendix C — Observable Indicator Group Index

### OI-BOK-001 — Signals and Attention

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-SEN-001 | Signal Capture | 5 | — |
| OI-INDG-SEN-002 | Qualification | 4 | — |
| OI-INDG-SEN-003 | Routing | 4 | — |
| OI-INDG-SEN-004 | Attention | 4 | — |
| OI-INDG-SEN-005 | Contextualisation | 5 | — |
| OI-INDG-SEN-006 | Continuity | 4 | — |

### OI-BOK-002 — Organisational Context

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-CTX-001 | Context Availability | 3 | — |
| OI-INDG-CTX-002 | Context Quality | 4 | — |
| OI-INDG-CTX-003 | Context Fitness | 3 | — |
| OI-INDG-CTX-004 | Context Continuity | 3 | — |
| OI-INDG-CTX-005 | Context Governance | 4 | — |
| OI-INDG-CTX-006 | Context Use | 3 | — |

### OI-BOK-003 — Knowledge and Expertise

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-KNW-001 | Knowledge Visibility | 3 | — |
| OI-INDG-KNW-002 | Expertise Access | 3 | — |
| OI-INDG-KNW-003 | Expertise Quality | 4 | — |
| OI-INDG-KNW-004 | Integration | 3 | — |
| OI-INDG-KNW-005 | Organisational Resilience | 3 | — |
| OI-INDG-KNW-006 | Transfer | 3 | — |
| OI-INDG-KNW-007 | Retention | 3 | — |
| OI-INDG-KNW-008 | Human–AI Capability | 5 | — |

### OI-BOK-004 — Decision and Authority

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-DEC-001 | Decision Identification | 3 | — |
| OI-INDG-DEC-002 | Authority Clarity | 4 | — |
| OI-INDG-DEC-003 | Evidence and Context | 4 | — |
| OI-INDG-DEC-004 | Deliberation | 3 | — |
| OI-INDG-DEC-005 | Timeliness | 3 | — |
| OI-INDG-DEC-006 | Legitimacy and Commitment | 3 | — |
| OI-INDG-DEC-007 | Action | 4 | — |
| OI-INDG-DEC-008 | Accountability | 3 | — |
| OI-INDG-DEC-009 | Exceptions and Escalation | 3 | — |
| OI-INDG-DEC-010 | AI Participation | 4 | OI-IGC-002 |
| OI-INDG-DEC-011 | Learning | 3 | — |

### OI-BOK-005 — Coordination and Collective Action

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-COO-001 | Commitment | 3 | — |
| OI-INDG-COO-002 | Dependencies | 3 | — |
| OI-INDG-COO-003 | Roles and Authority | 3 | — |
| OI-INDG-COO-004 | Shared State | 3 | — |
| OI-INDG-COO-005 | Handoffs | 3 | — |
| OI-INDG-COO-006 | Timing | 3 | — |
| OI-INDG-COO-007 | Communication | 3 | — |
| OI-INDG-COO-008 | Boundaries | 3 | — |
| OI-INDG-COO-009 | Adaptation | 3 | OI-IGC-001 |
| OI-INDG-COO-010 | Coordination Load | 1 | — |
| OI-INDG-COO-011 | AI Participation | 3 | OI-IGC-002 |
| OI-INDG-COO-012 | Collective Outcome | 3 | — |

### OI-BOK-006 — Execution and Operational Reliability

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-EXE-001 | Intent and Authority | 3 | — |
| OI-INDG-EXE-002 | Readiness | 1 | — |
| OI-INDG-EXE-003 | Execution Fidelity | 1 | — |
| OI-INDG-EXE-004 | Reliability | 1 | — |
| OI-INDG-EXE-005 | Observability | 1 | — |
| OI-INDG-EXE-006 | Capacity and Saturation | 1 | — |
| OI-INDG-EXE-007 | Exceptions and Workarounds | 1 | — |
| OI-INDG-EXE-008 | Incidents | 1 | — |
| OI-INDG-EXE-009 | Recovery | 1 | — |
| OI-INDG-EXE-010 | Human Intervention | 1 | — |
| OI-INDG-EXE-011 | Automation | 1 | — |
| OI-INDG-EXE-012 | AI and Agents | 1 | — |
| OI-INDG-EXE-013 | Completion | 1 | — |
| OI-INDG-EXE-014 | Learning Readiness | 1 | — |

### OI-BOK-007 — Outcomes, Feedback and Evaluation

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-EVL-001 | Outcome Definition | 3 | — |
| OI-INDG-EVL-002 | Theory and Assumptions | 3 | — |
| OI-INDG-EVL-003 | Implementation | 1 | — |
| OI-INDG-EVL-004 | Baseline and Comparison | 3 | — |
| OI-INDG-EVL-005 | Measurement Quality | 4 | — |
| OI-INDG-EVL-006 | Stakeholder Coverage | 3 | — |
| OI-INDG-EVL-007 | Feedback Timing | 2 | — |
| OI-INDG-EVL-008 | Causal Discipline | 3 | — |
| OI-INDG-EVL-009 | Metric Behaviour | 1 | — |
| OI-INDG-EVL-010 | Evaluation Governance | 1 | — |
| OI-INDG-EVL-011 | AI Evaluation | 4 | — |
| OI-INDG-EVL-012 | Learning Handoff | 1 | — |

### OI-BOK-008 — Organisational Memory, Reflection and Learning

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-LRN-001 | Memory Availability | 3 | — |
| OI-INDG-LRN-002 | Memory Integrity | 1 | — |
| OI-INDG-LRN-003 | Retrieval | 2 | — |
| OI-INDG-LRN-004 | Decision-Time Memory | 1 | — |
| OI-INDG-LRN-005 | Reflection | 2 | — |
| OI-INDG-LRN-006 | Learning Breadth | 1 | — |
| OI-INDG-LRN-007 | Inquiry Conditions | 1 | — |
| OI-INDG-LRN-008 | Lesson Quality | 6 | — |
| OI-INDG-LRN-009 | Lesson Lifecycle | 1 | — |
| OI-INDG-LRN-010 | Forgetting and Supersession | 3 | — |
| OI-INDG-LRN-011 | Application | 1 | — |
| OI-INDG-LRN-012 | Persistence | 3 | — |
| OI-INDG-LRN-013 | AI Memory | 3 | — |
| OI-INDG-LRN-014 | Capability Handoff | 1 | — |

### OI-BOK-009 — Capability Development and Adaptation

| Group ID | Source group | Semantic indicator statements | Collision |
| --- | --- | ---: | --- |
| OI-INDG-ADP-001 | Capability Definition | 3 | — |
| OI-INDG-ADP-002 | Configuration | 3 | — |
| OI-INDG-ADP-003 | Institutionalisation | 4 | — |
| OI-INDG-ADP-004 | Distribution | 3 | — |
| OI-INDG-ADP-005 | Performance Evidence | 3 | — |
| OI-INDG-ADP-006 | Transfer and Scaling | 3 | — |
| OI-INDG-ADP-007 | Exploration and Exploitation | 3 | — |
| OI-INDG-ADP-008 | Absorptive Capacity | 1 | — |
| OI-INDG-ADP-009 | Lifecycle | 1 | — |
| OI-INDG-ADP-010 | Decay and Obsolescence | 1 | — |
| OI-INDG-ADP-011 | Adaptation | 3 | OI-IGC-001 |
| OI-INDG-ADP-012 | Coherence | 2 | — |
| OI-INDG-ADP-013 | AI Capability | 3 | — |
| OI-INDG-ADP-014 | OI Loop Closure | 2 | — |

---

## Editorial Guardrail

> **Project OI must not confuse a named failure mode, quality question, positive indicator, metric or maturity label with validated evidence of Organisational Intelligence. Diagnostic value comes from preserving scope, mechanism, transition, authority, context, outcome and persistence strongly enough to explain what the organisation can and cannot do—not from counting checked boxes.**
