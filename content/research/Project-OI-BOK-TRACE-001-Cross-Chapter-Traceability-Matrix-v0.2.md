# Project OI Body of Knowledge

# Cross-Chapter Traceability Matrix

**Artefact ID:** OI-BOK-TRACE-001  
**Version:** 0.2  
**Status:** Regenerated cross-chapter traceability matrix; pending final release proof  
**Source basis:** OI-BOK-001 through OI-BOK-009; OI-BOK-GLO-001; OI-BOK-PROP-001; OI-BOK-DIAG-001; OI-BOK-SYN-001  
**Chapters traced:** 9  
**Integrated stages:** 11  
**Cross-chapter transitions:** 14  
**Source process stages:** 103  
**Propositions traced:** 182  
**Evidence anchors:** 87  
**Construct terms used by propositions:** 47  
**Failure modes linked through diagnostic families:** 437  
**Quality dimensions linked through quality families:** 197  
**Semantic indicators linked through evidence roles:** 253  
**Canonical status:** Candidate, not yet canonical  
**Finalisation gate:** OI-BOK-010 and OI-BOK-REVIEW-001  
**Product-contract status:** Research traceability only; does not create product, architecture, schema or API contracts  
**Date:** 13 August 2026

---

## 1. Purpose

This artefact connects the nine domain chapters into one inspectable evidence and diagnostic system.

Its governing trace is:

```text
OI transformation
→ operational capability or connective mechanism
→ chapter
→ owned construct
→ source process
→ working proposition
→ evidence anchor
→ diagnostic family
→ quality family
→ indicator evidence role
→ unresolved validation question
```

The matrix exists to prevent the final synthesis from becoming a persuasive narrative whose terms, propositions and evidence cannot be traced back to their source chapters.

It also prevents the reverse error: treating the presence of hundreds of local definitions, propositions, failure modes and indicators as proof that one coherent construct already exists.

This is a **traceability artefact**, not:

- a causal model;
- a maturity assessment;
- a scoring system;
- a validated measurement instrument;
- a product ontology;
- or evidence that every proposed relationship is empirically supported.

---

## 2. Traceability Rules

### 2.1 One Semantic Owner

Construct meaning follows OI-BOK-GLO-001. A trace may link one term to several propositions or stages, but it does not create a second definition.

### 2.2 Exact Source and Synthesised Link Must Remain Distinct

The following are source-derived:

- chapter processes;
- proposition wording;
- evidence anchors;
- failure modes;
- quality dimensions;
- and indicator statements.

The following are consolidation metadata introduced by this artefact:

- proposition-to-process-stage mappings;
- proposition-to-diagnostic-family relevance;
- proposition-to-quality-family relevance;
- recommended evidence roles;
- and the 14-transition crosswalk.

These mappings are deliberately labelled provisional and must be reviewed rather than treated as original chapter claims.

### 2.3 Trace Does Not Establish Causality

A proposition linked to an evidence anchor has a research basis. The link does not prove that the proposition:

- is universally true;
- operates at the claimed organisational level;
- causes the expected outcome;
- or can be measured using the linked indicators.

### 2.4 Indicators Are Corroborating Evidence

No source indicator is standalone proof of Organisational Intelligence. The evidence-role model requires a portfolio rather than one preferred metric.

### 2.5 Cross-Chapter Connections Require Their Own Validation

A chapter may be well supported locally while the proposed transition to the next capability remains weak. Connection Quality therefore remains a Project OI working construct reserved for final synthesis and empirical challenge.

---

## 3. Integrated OI Stage Register

| ID | Transformation | Capability or mechanism | Stage type | Owner |
|---|---|---|---|---|
| OI-INT-001 | Orient | Sense | Operational capability | OI-BOK-001 |
| OI-INT-002 | Orient | Contextualise | Connective mechanism | OI-BOK-002 |
| OI-INT-003 | Orient | Know | Operational capability | OI-BOK-003 |
| OI-INT-004 | Orient | Organisational orientation | Integrative state | OI-BOK-002 + OI-BOK-003; final owner OI-BOK-010 |
| OI-INT-005 | Coordinate | Choose | Operational capability | OI-BOK-004 |
| OI-INT-006 | Coordinate | Mobilise | Operational capability — coordination | OI-BOK-005 |
| OI-INT-007 | Coordinate | Mobilise | Operational capability — execution | OI-BOK-006 |
| OI-INT-008 | Improve | Outcome–feedback bridge | Connective mechanism | OI-BOK-007 |
| OI-INT-009 | Improve | Learn | Operational capability | OI-BOK-008 |
| OI-INT-010 | Improve | Adapt | Operational capability | OI-BOK-009 |
| OI-INT-011 | Integrated loop | Connection Quality | Project OI working integrative construct | Reserved for OI-BOK-010 |

The integrated register preserves six operational capabilities:

```text
Sense
→ Know
→ Choose
→ Mobilise
→ Learn
→ Adapt
```

It also represents:

- **Contextualise** as a connective mechanism;
- **Organisational Orientation** as an integrative state;
- **Outcome–Feedback** as the bridge into Improve;
- and **Connection Quality** as a working cross-stage construct rather than a seventh capability.

---

## 4. Chapter Trace Summary

| Chapter | Title | Transformation | Capability position | Propositions | Failure modes | Quality dimensions | Indicators |
|---|---|---|---|---:|---:|---:|---:|
| OI-BOK-001 | Signals and Attention | Orient | Sense | 10 | 15 | 0 | 26 |
| OI-BOK-002 | Organisational Context | Orient | Contextualise | 14 | 18 | 12 | 20 |
| OI-BOK-003 | Knowledge and Expertise | Orient | Know | 16 | 21 | 14 | 27 |
| OI-BOK-004 | Decision and Authority | Coordinate | Choose | 20 | 38 | 18 | 37 |
| OI-BOK-005 | Coordination and Collective Action | Coordinate | Mobilise | 20 | 47 | 25 | 34 |
| OI-BOK-006 | Execution and Operational Reliability | Coordinate | Mobilise | 25 | 67 | 30 | 16 |
| OI-BOK-007 | Outcomes, Feedback and Evaluation | Improve | Outcome–feedback bridge | 25 | 66 | 30 | 29 |
| OI-BOK-008 | Organisational Memory, Reflection and Learning | Improve | Learn | 25 | 85 | 33 | 29 |
| OI-BOK-009 | Capability Development and Adaptation | Improve | Adapt | 27 | 80 | 35 | 35 |

- **OI-BOK-001 — Signals and Attention:** 10 propositions; 15 failure modes; 0 source quality dimensions; 26 semantic indicators.
- **OI-BOK-002 — Organisational Context:** 14 propositions; 18 failure modes; 12 source quality dimensions; 20 semantic indicators.
- **OI-BOK-003 — Knowledge and Expertise:** 16 propositions; 21 failure modes; 14 source quality dimensions; 27 semantic indicators.
- **OI-BOK-004 — Decision and Authority:** 20 propositions; 38 failure modes; 18 source quality dimensions; 37 semantic indicators.
- **OI-BOK-005 — Coordination and Collective Action:** 20 propositions; 47 failure modes; 25 source quality dimensions; 34 semantic indicators.
- **OI-BOK-006 — Execution and Operational Reliability:** 25 propositions; 67 failure modes; 30 source quality dimensions; 16 semantic indicators.
- **OI-BOK-007 — Outcomes, Feedback and Evaluation:** 25 propositions; 66 failure modes; 30 source quality dimensions; 29 semantic indicators.
- **OI-BOK-008 — Organisational Memory, Reflection and Learning:** 25 propositions; 85 failure modes; 33 source quality dimensions; 29 semantic indicators.
- **OI-BOK-009 — Capability Development and Adaptation:** 27 propositions; 80 failure modes; 35 source quality dimensions; 35 semantic indicators.

The zero source quality-dimension count for OI-BOK-001 is preserved. Chapter 10 may synthesise Sense-quality dimensions, but it must identify them as final integration rather than retroactive source content.

---

## 5. Cross-Chapter Transition Matrix

| ID | Source condition | Target condition | Owning chapter(s) | Conversion question |
|---|---|---|---|---|
| OI-TRN-001 | Event or experience | Signal | OI-BOK-001 | What makes an occurrence potentially material? |
| OI-TRN-002 | Signal | Attention | OI-BOK-001 | How does a signal receive scarce organisational processing capacity? |
| OI-TRN-003 | Attention | Organisational context | OI-BOK-001 + OI-BOK-002 | How does attended information acquire purpose-bound organisational meaning? |
| OI-TRN-004 | Organisational context | Knowledge and expertise availability | OI-BOK-002 + OI-BOK-003 | Which understanding and expertise apply to this situated organisational need? |
| OI-TRN-005 | Knowledge and expertise | Organisational orientation | OI-BOK-002 + OI-BOK-003; OI-BOK-010 reserved | How are context, evidence and expertise integrated into a usable and sufficiently aligned organisational view? |
| OI-TRN-006 | Organisational orientation | Authorised decision | OI-BOK-004 | How does a grounded orientation become an attributable and legitimate commitment? |
| OI-TRN-007 | Authorised decision | Shared commitment | OI-BOK-004 + OI-BOK-005 | How does the decision become sufficiently shared, legitimate and actionable across affected actors? |
| OI-TRN-008 | Shared commitment | Coordinated collective action | OI-BOK-005 | How are dependencies, roles, resources, interfaces and shared state arranged? |
| OI-TRN-009 | Coordination | Operational execution | OI-BOK-005 + OI-BOK-006 | How do coordinated commitments become ready, controlled and observable work under real conditions? |
| OI-TRN-010 | Execution | Outcome and changed state | OI-BOK-006 + OI-BOK-007 | How are operational outputs, completion states and external effects translated into observable consequences? |
| OI-TRN-011 | Outcome | Evaluative feedback | OI-BOK-007 | How are consequences observed and judged relative to stakeholder, baseline, purpose and alternative explanation? |
| OI-TRN-012 | Evaluative feedback | Organisational learning | OI-BOK-007 + OI-BOK-008 | How does credible feedback enter memory, reflection and inquiry rather than terminate as a report? |
| OI-TRN-013 | Organisational learning | Capability change | OI-BOK-008 + OI-BOK-009 | How does a scoped lesson become durable, distributed and governable organisational capability? |
| OI-TRN-014 | Adapted capability configuration | Future Organisational Intelligence cycle | OI-BOK-009 + OI-BOK-010 reserved | How does capability change alter the organisation’s future ability to Orient, Coordinate and Improve without losing coherence or responsibility? |

### 5.1 Transition Status

The first nine domain chapters now cover the complete operational loop in local chapter terms.

What remains unvalidated is whether the full set of transitions forms a distinct and empirically defensible organisation-level capability rather than a useful integrative framework assembled from adjacent research traditions.

### 5.2 Transition Integrity

Each transition should eventually be tested for:

- source visibility;
- accepted output and input contract;
- preservation of context, evidence and uncertainty;
- legitimate authority;
- failure detectability;
- reconstructability;
- dependence on one heroic actor;
- and responsiveness to later feedback.

These are candidate Connection Quality dimensions, not a final scale.

---

## 6. Source Process Trace

The nine chapters contain 103 explicit process stages.

The machine-readable process register distinguishes:

- **OWNED** — inside the chapter’s semantic ownership;
- **FORWARD_LINK** — included in the source chapter to show continuity but owned substantively by a later chapter;
- **HANDOFF_OUT** — the explicit transfer into the next capability or connective mechanism.

This distinction resolves a development-stage overlap identified by OI-BOK-SYN-001. For example:

- OI-BOK-001 owns occurrence through attention, not the full production of orientation;
- OI-BOK-004 owns the authorised decision, not complete implementation and consequence review;
- OI-BOK-005 owns dependency coordination, not the full reliability model of execution;
- OI-BOK-007 owns evaluative feedback, not durable organisational learning;
- OI-BOK-008 owns learning, not the complete capability change owned by OI-BOK-009.

The complete 103-row process-stage register accompanies this document.

---

## 7. Proposition Trace

All 182 propositions have been connected to:

- one or more source process stages;
- at least one evidence anchor;
- preferred glossary terms;
- relevant diagnostic and quality families;
- a recommended portfolio of indicator evidence roles;
- disposition;
- and unresolved validation questions.

### 7.1 Evidence-Class Distribution

| Evidence class | Proposition count |
|---|---:|
| Direct literature anchor | 79 |
| Source-grounded synthesis | 50 |
| Emerging AI-era evidence | 26 |
| Project OI integrative extension | 27 |

### 7.2 Process Mapping Boundary

The proposition-to-process-stage field is a manual semantic crosswalk.

It means:

> This proposition most directly governs or explains these process stages.

It does not mean:

> The proposition was empirically tested at each mapped stage.

### 7.3 Diagnostic and Quality Relevance

Diagnostic and quality families are linked through:

- proposition glossary terms;
- proposition cluster membership;
- proposition wording;
- and chapter ownership.

They indicate where a proposition should be challenged and what kind of evidence may be relevant. They are not one-to-one operationalisations.

---

## 8. Construct Trace

The proposition register uses 47 glossary terms.

The construct trace register records, for each term:

- preferred definition;
- semantic owner;
- glossary status;
- source section;
- proposition count;
- proposition IDs;
- source chapters;
- transformations;
- and capability positions.

This enables Chapter 10 to distinguish:

- central constructs used throughout the model;
- domain-local constructs;
- technical analogies;
- and Project OI working terms requiring adversarial review.

High proposition frequency does not establish construct centrality or validity. It may also indicate broad wording or overuse.

---

## 9. Diagnostic Trace

The trace uses the 25 diagnostic families established provisionally by OI-BOK-DIAG-001:

```text
F01 Signal visibility and attention allocation
F02 Purpose, framing and relevance
F03 Context, scope and temporal fit
F04 Evidence, provenance and epistemic integrity
F05 Knowledge and expertise availability
F06 Authority, legitimacy, accountability and ownership
F07 Voice, dissent, relational safety and human judgement
F08 Decision commitment, escalation and action translation
F09 Dependencies, roles, shared state and resource coordination
F10 Handoffs, interfaces and boundary translation
F11 Operational readiness, state, completion and external effects
F12 Reliability, safety, capacity, containment and recovery
F13 Exceptions, workarounds, drift and organisational debt
F14 Outcome definition, stakeholder coverage and unintended consequence
F15 Causal inference, attribution and contribution
F16 Measurement validity, metric reactivity and gaming
F17 Evaluation governance, timeliness and use
F18 Memory selection, retention, retrieval and supersession
F19 Reflection, lesson formation and learning persistence
F20 Capability configuration, ownership and institutionalisation
F21 Transfer, scaling, exploration and path dependence
F22 Capability maintenance, retirement and adaptation coherence
F23 Human–AI role, reliance and capability effects
F24 AI/Agent identity, authority, context, tools and execution
F25 Transition integrity and closure of the OI loop
```

F25 is the principal cross-chapter family. It should not absorb every local failure. It concerns the integrity of conversion among capabilities.

---

## 10. Quality Trace

The trace uses 16 higher-order quality families:

```text
Q01 Purpose, relevance and scope
Q02 Epistemic integrity, evidence and provenance
Q03 Temporal integrity, currentness and timeliness
Q04 Availability, accessibility and capacity
Q05 Authority, legitimacy, accountability and governance
Q06 Decision, deliberation and commitment quality
Q07 Clarity, interpretability and common understanding
Q08 Coordination, interface, handoff and integration
Q09 Operational correctness, reliability, safety and recovery
Q10 Outcome, evaluation and measurement quality
Q11 Memory, reflection, learning and persistence
Q12 Capability configuration, lifecycle and adaptation
Q13 Contestability, fairness and relational quality
Q14 Traceability, transparency and reconstructability
Q15 Efficiency, proportionality and sustainability
Q16 Human–AI role and automation integrity
```

A higher-order family permits comparison across chapters without erasing the local object being evaluated.

For example, **Reliability** in execution and **Capability Reliability** in adaptation remain different source dimensions within related families.

---

## 11. Indicator Evidence Roles

The trace recommends evidence portfolios using eight roles:

```text
DCE  Direct capability-behaviour evidence
PCE  Process, mechanism or control evidence
TCE  Transition, handoff or connection evidence
ENC  Enabling-condition evidence
GVE  Governance, authority or accountability evidence
OCE  Outcome or consequence evidence
RSE  Risk, weakness or failure-signal evidence
LAE  Learning, persistence or adaptation evidence
```

### 11.1 Minimum Portfolio Principle

A future material OI assessment should ordinarily include evidence from several roles.

A defensible portfolio may contain:

```text
Enabling conditions
        +
Process and control evidence
        +
Transition evidence
        +
Governance evidence
        +
Direct capability behaviour
        +
Outcome evidence
        +
Risk signals
        +
Learning and adaptation evidence
```

The exact portfolio should be proportionate to the claim and context.

### 11.2 Weak-Proxy Guardrail

The following should not be treated as standalone evidence of OI:

- information volume;
- document count;
- search usage;
- completed expert profiles;
- decision speed;
- meeting frequency;
- task completion;
- uptime;
- output volume;
- recorded lessons;
- training completion;
- AI benchmark performance;
- model access;
- or Agent count.

---

## 12. Unresolved Validation Questions

| Code | Question |
|---|---|
| V1 | Are the construct boundary and preferred terminology distinct, coherent and glossary-aligned? |
| V2 | Is the proposition consistent with adjacent chapters and the integrity of the OI transitions? |
| V3 | Is the organisational unit and level of analysis explicit and defensible? |
| V4 | Is the proposed mechanism, temporal order or causal interpretation supported and properly bounded? |
| V5 | Are AI- and technology-dependent claims current, versioned, task-specific and setting-qualified? |
| V6 | Can the construct be operationalised without substituting a weak proxy or creating circular measurement? |
| V7 | Are purpose, governance, ethics, power, accountability and responsible-use implications addressed? |
| V8 | Does the proposition hold empirically across relevant organisations, including SMB settings? |

All 182 propositions retain V8 because the BOK remains a literature-grounded synthesis rather than a field-validated organisation-level theory.

AI-era propositions additionally require V5 where model, provider, task and interface change may invalidate the claim.

---

## 13. Coverage Result

### 13.1 Complete Provisional Trace

Every working proposition is linked to:

- chapter and integrated stage;
- owned glossary terms;
- source process stage;
- evidence anchor;
- diagnostic family;
- quality family;
- evidence role;
- validation question;
- and disposition.

### 13.2 No Empirical Closure

The trace does not resolve:

- whether Organisational Intelligence is sufficiently distinct from adjacent constructs;
- whether the six-capability architecture is the most parsimonious model;
- whether Connection Quality is a distinct higher-order construct;
- whether the operational levels and units of analysis are coherent;
- whether the proposed indicators are measurable and non-circular;
- or whether the model generalises across SMBs, public organisations and large enterprises.

### 13.3 Known Source Gaps

The trace preserves these material gaps:

1. OI-BOK-001 lacks an explicit source quality-dimension section.
2. Organisational Orientation has no standalone chapter and must be integrated carefully in OI-BOK-010.
3. Connection Quality is supported through cross-chapter synthesis rather than an established literature stream under that name.
4. AI-era propositions remain more time- and setting-sensitive than most foundational propositions.
5. The current indicator set is a candidate evidence inventory, not a validated assessment instrument.
6. Cross-cutting purpose, ethics, power, legitimacy and governance remain distributed and require Chapter 10 integration.

---

## 14. Implications for OI-BOK-010

Chapter 10 should use this trace to produce a smaller integrated theory rather than repeat the nine chapters.

It should:

1. define the complete OI construct and its unit of analysis;
2. retain Orient, Coordinate and Improve;
3. retain Sense, Know, Choose, Mobilise, Learn and Adapt;
4. explain Contextualise, Orientation and Outcome–Feedback as connective mechanisms or states;
5. define Connection Quality cautiously and show its evidence basis;
6. present a concise higher-order proposition set supported by the 182-proposition register;
7. distinguish direct capability evidence from enabling conditions and outcomes;
8. integrate purpose, governance, ethics, power, accountability and responsible human–AI participation;
9. state counterexamples and construct boundaries;
10. and preserve the unresolved questions that belong in OI-BOK-OPEN-001 and the final adversarial review.

---

## 15. Machine-Readable Artefacts

This package includes:

- an 11-row integrated-stage register;
- a 9-row chapter trace register;
- a 103-row process-stage register;
- a 14-row transition register;
- a 47-row construct trace register;
- a 182-row proposition trace matrix;
- and one complete JSON register.

All generated files are included in the checksum manifest and bundle.

---

## 16. Next Active Artefact

The traceability system has been regenerated against the corrected source set. The next release step is:

> **OI-BOK-RELEASE-001 — Body of Knowledge Completion Record**

It should distinguish:

- construct and boundary questions;
- empirical and causal questions;
- measurement and operationalisation questions;
- governance, ethics and power questions;
- AI-era and technology-sensitive questions;
- and future field and SMB research requirements.

The blog, product-implication, implementation-pattern and architecture-reconciliation workstreams remain paused.

---

## 17. Editorial Guardrail

> **Traceability should make the evidential and conceptual chain inspectable without creating false precision. A source proposition linked to a process, diagnostic family, quality family or indicator role remains a working claim requiring boundary, causal, measurement, governance and field validation.**
