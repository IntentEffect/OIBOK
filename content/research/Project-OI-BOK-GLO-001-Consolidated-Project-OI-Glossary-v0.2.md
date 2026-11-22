# Project OI Body of Knowledge

# Consolidated Project OI Glossary

**Artefact ID:** OI-BOK-GLO-001  
**Version:** 0.2  
**Status:** Tiered consolidated glossary; pending final release proof  
**Source basis:** OI-BOK-001 through OI-BOK-010 v0.3; OI-WD-002; OI-BOK-SYN-001; OI-BOK-REVIEW-001  
**Entries:** 432  
**Term authority:** One semantic owner per preferred term, with qualified applications where necessary  
**Canonical status:** Candidate, not yet canonical  
**Finalisation gate:** OI-BOK-RELEASE-001  
**Product-contract status:** Research terminology only; does not create product, architecture, schema or API terms  
**Date:** 15 August 2026

---

## 1. Purpose

This glossary consolidates the terminology developed across the ten Project OI Body of Knowledge chapters.

Its purpose is to:

- establish one preferred definition for each material term;
- assign one semantic owner;
- preserve distinctions among adjacent constructs;
- resolve duplicated terms through qualification or ownership;
- identify Project OI working terms;
- control ambiguous or misleading usage;
- and provide the terminology baseline for the release candidate and future source-controlled revision.

This glossary is a release-candidate BOK governance artefact.

It does not:

- claim that every definition is empirically validated;
- convert research terms into product architecture;
- create a universal maturity model;
- or prevent later correction through the final adversarial review.

---

## 2. Terminology Governance Rules

### 2.1 One Semantic Owner

Every preferred term has one owning chapter or one reserved owner in OI-BOK-010.

Other chapters may apply the term.

They should not redefine it.

### 2.2 Qualification Where Meaning Changes

Where a generic term carries materially different meanings, use an explicit qualifier.

Examples:

- governance accountability;
- coordination accountability;
- coordination exception;
- operational exception;
- operational monitoring;
- memory retention;
- capability retention;
- coordination repair.

### 2.3 Core Model Capitalisation

Use capital letters for the named Project OI model elements:

- **Organisational Intelligence**
- **Orient**
- **Coordinate**
- **Improve**
- **Sense**
- **Know**
- **Choose**
- **Mobilise**
- **Learn**
- **Adapt**

Use lowercase for generic activity:

- coordination;
- learning;
- adaptation;
- orientation;
- capability.

### 2.4 Australian English

Use:

- organisational;
- contextualise;
- mobilise;
- authorised;
- behaviour;
- and judgement

except inside source titles and quotations.

### 2.5 Precision Over Convenience

Prefer the narrowest correct term.

Do not use:

- result;
- success;
- impact;
- intelligence;
- memory;
- capability;
- decision;
- or learning

as rhetorical emphasis where the defined construct is not present.

### 2.6 Status Must Remain Visible

Project OI working terms must remain labelled until they are:

- retained;
- redefined;
- merged;
- or rejected

through source-controlled correction and future release review.

---

## 3. Status Legend

| Status | Meaning |
|---|---|
| **Core construct — provisional** | A central Project OI term retained for the release candidate but not empirically validated. |
| **Preferred term** | The current preferred BOK term within its owning domain. |
| **Qualified preferred term** | A term that must retain its qualifier because the unqualified form is ambiguous across chapters. |
| **Project OI working term** | A Project OI synthesis term that requires conceptual or empirical challenge before canonical adoption. |
| **Use cautiously** | A valid term with a known risk of overgeneralisation or false precision. |
| **Discouraged umbrella term** | A term that should be replaced by a more precise available term. |
| **Qualified technical analogy** | A technical analogy useful within a bounded domain but not equivalent to the human or organisational construct. |

---

## 4. Construct Ownership Summary

| Owner | Current glossary entries |
|---|---:|
| OI-BOK-010 (reserved) | 17 |
| OI-BOK-001 | 11 |
| OI-BOK-002 | 16 |
| OI-BOK-003 | 18 |
| OI-BOK-004 | 28 |
| OI-BOK-005 | 35 |
| OI-BOK-005–006 | 1 |
| OI-BOK-006 | 56 |
| OI-BOK-007 | 80 |
| OI-BOK-008 | 84 |
| OI-BOK-009 | 83 |


The count reflects glossary ownership and does not measure the importance, maturity or validation of a chapter.

---

## 5. Core Model at a Glance

```text
PURPOSE, GOVERNANCE AND RESPONSIBLE CONDITIONS
shape the complete cycle

Signals and experience
        ↓
SENSE
        ↓
CONTEXTUALISE
        ↓
KNOW
        ↓
ORGANISATIONAL ORIENTATION
        ↓
CHOOSE
        ↓
MOBILISE
        ↓
EXECUTION
        ↓
OUTCOME
        ↓
FEEDBACK AND EVALUATION
        ↓
LEARN
        ↓
ADAPT
        ↓
Changes future orientation and response
```

The three higher-order transformations are:

```text
ORIENT
→ COORDINATE
→ IMPROVE
```

---

## 6. Term Tier Architecture

The adversarial review found that the extended glossary is useful as a research register but too large to function as one undifferentiated reader vocabulary.

The v0.2 glossary therefore assigns every term to one release-facing tier.

| Tier | Meaning | Terms |
| --- | --- | ---: |
| **T1 — Core construct and model vocabulary** | Terms required to understand the integrated Project OI construct and its principal transitions. | 64 |
| **T2 — Domain-owned preferred terms** | Established or preferred terms needed within one domain chapter. | 313 |
| **T3 — Cross-cutting governance or responsible-use terms** | Terms concerning authority, evidence, legitimacy, accountability, rights and responsible exercise. | 22 |
| **T4 — Working diagnostic or research terms** | Project OI extensions or adapted diagnostic labels that remain provisional. | 31 |
| **T5 — Implementation heuristics** | Useful design and governance patterns that must not be mistaken for constitutive OI constructs or automatic product objects. | 1 |
| **T6 — Discouraged or deprecated language** | Ambiguous, inflated or misleading wording that should be replaced by a defined term. | 1 |

The complete tier assignment is provided in `Project-OI-BOK-GLO-001-Term-Tier-Register-v0.2.csv`.

A tier does not establish empirical validity.

---

## 7. Core Glossary Index

The following terms form the primary reader vocabulary for the first coherent BOK release.

| Term | Preferred definition | Owner | Status |
| --- | --- | --- | --- |
| Adapt | The OI operational capability to develop, retire or reconfigure organisational capability, authority, structure and resources in response to credible learning and changed conditions. | OI-BOK-009 | Core OI operational capability — provisional |
| Adaptation | An evidence-linked change to organisational capability or configuration that improves or preserves viable and responsible response under changed conditions. | OI-BOK-009 | Preferred term |
| Attention | The selective allocation of limited cognitive and organisational processing capacity. At the organisational level, attention includes: what is monitored, what is measured, what is discussed, what is escalated, what appears in dashboards, what leaders ask about, what systems notify, what meetings prioritise, and what is ignored. | OI-BOK-001 | Preferred term |
| Attention Structure | The organisational arrangement through which issues, answers and decision-makers are brought together. Attention structures include: roles, reporting lines, meeting cadences, dashboards, thresholds, escalation pathways, inboxes, queues, workflows, incentives, policies, and software interfaces. | OI-BOK-001 | Preferred term |
| Capability Development | Capability development is the process through which a capability becomes more: reliable, distributed, integrated, governable, and fit for its intended conditions. | OI-BOK-009 | Preferred term |
| Capability Lifecycle | A capability lifecycle is the evolution of a capability across formation, development, maturity and later branching, renewal, retrenchment, redeployment, replication or retirement. | OI-BOK-009 | Preferred term |
| Capability Retirement | Capability retirement is the governed withdrawal of a capability from ordinary organisational use. | OI-BOK-009 | Preferred term |
| Choose | The OI operational capability to frame a response, evaluate alternatives and make an attributable and authorised organisational commitment under uncertainty. | OI-BOK-004 | Core OI operational capability — provisional |
| Collective Action | The connected and mutually adjusted contributions of multiple actors or systems toward an accepted organisational purpose or authorised commitment. | OI-BOK-005 | Preferred term |
| Collective Response | A deliberate organisation-level response shaped by orientation and authority that may include acting, delaying, monitoring, escalating, experimenting, seeking further evidence or deliberate non-action. | OI-BOK-010 (reserved) | Core response term — provisional |
| Contextualise | The bridge process that connects attended signals and source material to purpose, relationships, current state, time, history, evidence, authority and uncertainty so they can become usable by Know and contribute to orientation. | OI-BOK-002 | Core connective mechanism — provisional |
| Coordinate | The organisation-level capacity to convert orientation into a deliberate collective response. | OI-BOK-010 (reserved) | Core higher-order transformation — provisional |
| Coordination | The ongoing management of dependencies among authorised and interdependent contributions so that actors can understand how their work connects, anticipate relevant actions, adjust when conditions change and integrate their outputs into a coherent organisational response. | OI-BOK-005 | Preferred term |
| Core Construct | The minimum distinctive Project OI phenomenon expressed as forming orientation, coordinating response and improving future response. | OI-BOK-010 (reserved) | Core model term — provisional |
| Decision | An attributable commitment made by an authorised actor or mechanism that selects, approves, rejects, defers, conditions, delegates, revokes or deliberately preserves a course of action, allocation, rule or non-action for a defined organisational scope. | OI-BOK-004 | Preferred term |
| Decision Right | A decision right is the bounded right to make a defined class of decisions for an organisational scope. | OI-BOK-004 | Preferred term |
| Decision-Time Memory | The preserved record of what was known, believed, authorised and uncertain when a decision was made. | OI-BOK-008 | Preferred term |
| Dependency | A dependency exists where the performance, timing, resources, state, output or legitimacy of one activity affects another. Malone and Crowston define coordination as managing dependencies among activities. | OI-BOK-005 | Preferred term |
| Double-Loop Learning | Learning that questions and may revise the governing assumptions, values, policies or objectives that produced the action. | OI-BOK-008 | Preferred term |
| Evaluation | A governed and evidence-bearing process of making a reasoned judgement about the relevance, coherence, implementation, effectiveness, efficiency, impact, fairness, sustainability or other material qualities of an intervention, decision, system or response. | OI-BOK-007 | Preferred core chapter construct |
| Event | Something that occurs in the organisation or its environment. An event exists whether or not the organisation notices it. | OI-BOK-001 | Preferred term |
| Execution | The performance and control of authorised work through a sequence or configuration of actions that is intended to realise an organisational commitment under actual operating conditions. | OI-BOK-006 | Preferred term |
| Expertise | High-level, domain-specific capacity to recognise relevant patterns, diagnose conditions, exercise judgement and perform effectively, developed through structured knowledge and sufficiently rich practice and learning. | OI-BOK-003 | Preferred term |
| Feedback | Feedback is information returned about state, action or consequence that can influence future behaviour or understanding. Feedback is not learning automatically. | OI-BOK-007 | Preferred term |
| Handoff | A handoff is the transfer of primary responsibility, work state or next action from one actor or mechanism to another. A handoff is not simply a notification. | OI-BOK-005 | Preferred term |
| Higher-Order Transformation | One of the three organisation-level transformations through which Project OI interprets Organisational Intelligence: Orient, Coordinate or Improve. | OI-BOK-010 (reserved) | Core model term — provisional |
| Impact | A material, broader or longer-term positive or negative effect on people, organisations, systems or environments, including effects beyond the immediate scope of execution. | OI-BOK-007 | Use cautiously |
| Improve | The organisation-level capacity to use feedback from response and consequences to strengthen future orientation and response. | OI-BOK-010 (reserved) | Core higher-order transformation — provisional |
| Institutionalisation | Institutionalisation is the embedding of learning or practice into sufficiently durable organisational arrangements such as: routines, roles, structures, systems, authority, incentives, and shared expectations. | OI-BOK-009 | Preferred term |
| Know | The OI operational capability to create, validate, locate, combine and apply relevant knowledge and expertise in context. | OI-BOK-003 | Core OI operational capability — provisional |
| Learn | The OI operational capability to revise organisationally available understanding, memory, routines and future response through credible feedback, reflection and inquiry. | OI-BOK-008 | Core OI operational capability — provisional |
| Lesson | A lesson is a bounded conclusion about: what happened, why it matters, where it applies, and what should influence future understanding or response. A lesson should preserve uncertainty and scope. | OI-BOK-008 | Preferred term |
| Mobilise | The OI operational capability to translate an authorised commitment into coordinated, governed and reliable collective action and execution. | OI-BOK-005–006 | Core OI operational capability — provisional |
| OI Operational Capability Model | The six-capability Project OI decomposition consisting of Sense, Know, Choose, Mobilise, Learn and Adapt. | OI-BOK-010 (reserved) | Core model term — provisional |
| Operational Intent | Operational intent is the execution-ready statement of: what must change, what must remain protected, which conditions apply, who or what may act, and how acceptable completion will be recognised. Operational intent translates a decision into work without reducing it to one task. | OI-BOK-006 | Preferred term |
| Operational Readiness | The condition in which the organisation has sufficient authority, context, resources, capability, capacity, prerequisites, control, observability and failure handling to begin work responsibly. | OI-BOK-006 | Preferred term |
| Operational Reliability | The organisation’s capacity to perform authorised work within acceptable service, safety, integrity and time boundaries repeatedly and over time while detecting material deviation, containing failure and restoring or safely adapting operation when assumptions no longer hold. | OI-BOK-006 | Preferred core chapter construct |
| Operational State | The current condition of the work, relevant entities, dependencies, resources, authority and operating environment at a specific time. | OI-BOK-006 | Preferred term |
| Organisational Capability | A sufficiently repeatable and coordinated organisational capacity to perform a class of activity or produce a class of effect through an identifiable configuration of people, knowledge, practice, routines, authority, relationships, technology and resources. | OI-BOK-009 | Preferred term |
| Organisational Context | The relational, temporal, situational, purposive and authoritative conditions that determine how organisational information, knowledge, events, decisions and actions should be interpreted and used. | OI-BOK-002 | Preferred core chapter construct |
| Organisational Feedback | Evidence about the state, effects and consequences of organisational response that can be connected credibly enough to prior purpose, decision, execution and context to support evaluation and future learning. | OI-BOK-007 | Preferred core chapter construct |
| Organisational Intelligence | The persistent organisation-level capacity to form an orientation from relevant signals and experience, coordinate collective response, and improve future response through feedback. | OI-BOK-010 (reserved) | Core construct — provisional |
| Organisational Knowledge | Knowledge available through the organisation’s people, relationships, practices, routines, artefacts, systems and external ties that can influence organisational interpretation or action. | OI-BOK-003 | Preferred term |
| Organisational Learning | A change in organisationally available understanding or future response arising from experience, inquiry or acquired knowledge that is retained sufficiently to influence more than the immediate individual or episode. | OI-BOK-008 | Preferred term |
| Organisational Memory | The distributed and dynamic system through which past experience, decisions, knowledge, relationships, routines, artefacts and interpretations are selectively retained, located, reconstructed, contested, updated and made available to current organisational work. | OI-BOK-008 | Preferred term |
| Organisational Orientation | A sufficiently shared or aligned organisational account of what is happening, why it matters, what remains uncertain and what should shape response. | OI-BOK-010 (reserved) | Core integrated state — provisional |
| Organisational System | A bounded and persistent arrangement of people, relationships, structures, practices, technologies and external ties with sufficient identity and coherence to form orientation, coordinate response, receive feedback and alter future response. | OI-BOK-010 | Core unit-of-analysis term — provisional |
| Orient | The organisation-level capacity to form a sufficiently shared or aligned understanding of what is happening, why it matters and what conditions should shape response. | OI-BOK-010 (reserved) | Core higher-order transformation — provisional |
| Outcome | A consequential change in the state, behaviour, experience, capability, relationship or condition of an organisational entity, stakeholder, system or environment following an intervention or response. | OI-BOK-007 | Preferred term |
| Outcome–Feedback Bridge | The connective sequence through which execution outputs interact with the environment to produce consequences that are observed, evaluated and made available as feedback suitable for learning. | OI-BOK-010 | Core connective mechanism — provisional |
| Output | An output is an immediate product, service, artefact, state transition or completed action produced through execution. | OI-BOK-007 | Preferred term |
| Recommendation | A recommendation is a proposed course of action supported by evidence, expertise, analysis or preference. A recommendation may influence a decision. | OI-BOK-004 | Preferred term |
| Recovery | Recovery is the restoration of acceptable operation after disturbance or failure. Recovery may return to: the previous state, a safe state, or a new viable state. | OI-BOK-006 | Preferred term |
| Reflection | Reflection is deliberate examination of experience and its meaning. | OI-BOK-008 | Preferred term |
| Reliability | Adapted from dependability engineering, reliability is the continuity of acceptable service or performance under stated conditions and for a stated period. Organisational reliability requires the service and conditions to be defined. | OI-BOK-006 | Preferred term |
| Resilience | The capacity to sustain, recover or extend viable performance when disruption, saturation or surprise challenges the system’s ordinary operating assumptions. | OI-BOK-006 | Preferred term |
| Safety | Safety is the absence of unacceptable harm or loss arising from operation. Safety is not equivalent to reliability. | OI-BOK-006 | Preferred term |
| Sense | The OI operational capability to notice, capture, recognise, qualify and route material signals and experience for organisational attention. | OI-BOK-001 | Core OI operational capability — provisional |
| Shared Commitment | A shared commitment is the sufficiently distributed understanding that: a decision is effective, specified actors have obligations, dependencies must be managed, and the organisation will support the resulting coordinated response. Shared commitment can exist despite disagreement with the decision. | OI-BOK-005 | Preferred term |
| Shared State | Shared state is a sufficiently current and inspectable representation of: work progress, dependencies, decisions, exceptions, and relevant conditions. It is not necessarily one database or screen. | OI-BOK-005 | Preferred term |
| Signal | A cue, event or pattern that may indicate a material condition, change, risk, opportunity or need for response. A signal is relational. Its significance depends on: organisational purpose, context, thresholds, timing, risk, prior knowledge, and the consequences of missing it. | OI-BOK-001 | Preferred term |
| Single-Loop Learning | Single-loop learning corrects action or performance while preserving the underlying: goals, governing values, and assumptions. | OI-BOK-008 | Preferred term |
| Sociotechnical System | An implementation perspective describing how organisational capability is instantiated through interacting human, technical, structural and relational elements. | OI-BOK-010 | Preferred implementation perspective |
| Weak Signal | An early, incomplete or ambiguous indication of a potentially significant development. A weak signal may have: low confidence, low frequency, incomplete evidence, uncertain meaning, or limited organisational sponsorship. | OI-BOK-001 | Preferred term |

---

## 8. Alphabetical Glossary

## A

### Absorptive Capacity

**Definition:** The organisational capacity to recognise, acquire, assimilate, transform and apply relevant external knowledge under current purpose and context.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.57 · **Status:** Preferred term

**Usage note:** Access to external knowledge is not the same as assimilating and applying it.

### Acceptance

**Definition:** Acceptance is the receiving actor’s or governance mechanism’s confirmation that an output or state satisfies the relevant dependency or completion condition. Execution may finish before acceptance.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.11 · **Status:** Preferred term

### Accountability

**Definition:** A relational obligation in which an actor must explain and justify conduct to a forum that may question, judge and impose consequences or require correction.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.17 · **Status:** Preferred term

**Usage note:** Use “governance accountability” where confusion with coordination accountability is possible.

### Acquisition

**Definition:** Acquisition is the process through which the organisation encounters or obtains potentially relevant experience, information or knowledge.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.8 · **Status:** Preferred term

### Action

**Definition:** An action is a discrete intervention that may change: organisational state, a physical or digital environment, another actor’s obligations, or the availability of resources.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.2 · **Status:** Preferred term

### Action Authority

**Definition:** Action authority is the right to execute the organisational response. The person or system authorised to act may differ from the person who decided.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.15 · **Status:** Preferred term

### Action Fidelity

**Definition:** The degree to which actual execution preserves the purpose, authority, constraints and material conditions of the authorised commitment.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.7 · **Status:** Project OI working term

### Activity

**Definition:** A unit of work performed by a person, team, system, workflow, partner or AI. Activity records what was done; it does not establish what changed or whether a wider dependency was satisfied.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.1 · **Status:** Preferred term

**Usage note:** Activity measures what was done; it does not establish what changed or whether the wider dependency was satisfied.

### Adapt

**Definition:** The OI operational capability to develop, retire or reconfigure organisational capability, authority, structure and resources in response to credible learning and changed conditions.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-009 · **Status:** Core OI operational capability — provisional

**Usage note:** Not equivalent to change volume or transformation rhetoric.

### Adaptation

**Definition:** An evidence-linked change to organisational capability or configuration that improves or preserves viable and responsible response under changed conditions.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.75 · **Status:** Preferred term

**Usage note:** Not equivalent to change volume.

### Adaptation Coherence

**Definition:** Project OI uses adaptation coherence as a working term for the degree to which changes across capability, authority, resources, identity and purpose remain mutually compatible.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.79 · **Status:** Project OI working term

### Ad Hoc Problem Solving

**Definition:** Ad hoc problem solving is a non-routinised response used to address a particular issue or change. It may be effective.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.16 · **Status:** Preferred term

### After-Action Review

**Definition:** An after-action review is a structured review of: what was intended, what occurred, why differences occurred, and what should follow.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.64 · **Status:** Preferred term

### After-Event Review

**Definition:** After-event review is a broader term for structured reflection after: success, failure, or other experience.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.65 · **Status:** Preferred term

### Agent Execution Envelope

**Definition:** The bounded conditions under which an AI agent may operate, including objective, acting principal, identity, tools, data, authority, budget, time, state, evidence, prohibited actions, approvals, stop conditions and recovery.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §21.3 · **Status:** Project OI working term

**Usage note:** A BOK concept, not a proposed product primitive.

### AI Memory

**Definition:** AI memory is the retained state, records or retrieval mechanism used to make information from prior interactions available to a model or Agent. AI memory is not organisational memory by itself.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.78 · **Status:** Qualified technical analogy

**Usage note:** Not organisational memory by itself.

### Alignment

**Definition:** Alignment is the degree to which objectives, contributions, authority and incentives are mutually compatible. Alignment reduces some coordination demands.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.18 · **Status:** Preferred term

### Approver

**Definition:** An Approver holds a defined right to consent before a decision, action or publication becomes effective. Approval may: permit, reject, condition, or return the matter for correction.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.12 · **Status:** Preferred term

### Archival Retention

**Definition:** Preservation of material for legal, historical, accountability or research purposes without presenting it as current guidance.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.32 · **Status:** Preferred term

### Asset

**Definition:** An asset is a resource with current or potential value to the organisation. Assets may be: tangible, intangible, owned, accessed, leased, or relational.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.2 · **Status:** Preferred term

### Assumption

**Definition:** An assumption is a condition treated as true or sufficiently likely within the outcome pathway.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.32 · **Status:** Preferred term

### Attention

**Definition:** The selective allocation of limited cognitive and organisational processing capacity. At the organisational level, attention includes: what is monitored, what is measured, what is discussed, what is escalated, what appears in dashboards, what leaders ask about, what systems notify, what meetings prioritise, and what is ignored.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.7 · **Status:** Preferred term

### Attentional Debt

**Definition:** The accumulated organisational consequence of repeatedly deferring, fragmenting or suppressing signals that require interpretation or response. This is a Project OI working term, not an established construct.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.10 · **Status:** Project OI working term

### Attention Episode

**Definition:** A bounded period in which a signal competes for, gains, retains or loses organisational attention.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.9 · **Status:** Preferred term

### Attention Structure

**Definition:** The organisational arrangement through which issues, answers and decision-makers are brought together. Attention structures include: roles, reporting lines, meeting cadences, dashboards, thresholds, escalation pathways, inboxes, queues, workflows, incentives, policies, and software interfaces.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.8 · **Status:** Preferred term

### Attribution

**Definition:** Attribution is the assignment of causal responsibility for an observed outcome to an intervention, actor or condition. Strong attribution requires a defensible counterfactual or equivalent causal design.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.39 · **Status:** Preferred term

### Authorisation

**Definition:** Authorisation is the governed conferral of permission to perform an action, use a resource, access information or exercise a decision right.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.14 · **Status:** Preferred term

### Authorised Work

**Definition:** Authorised work is activity that: follows a legitimate decision, policy, role or delegation, remains inside an approved scope, uses permitted resources and tools, and is attributable to an actor or mechanism. Technical ability to perform an action is not authorisation.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.1 · **Status:** Preferred term

### Authoritative Context

**Definition:** The dimension of context that makes source authority, governing policy, decision ownership, approved exception, action rights and escalation visible.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3.5 · **Status:** Preferred context dimension

**Usage note:** Content without authority may support a plausible but unauthorised response.

### Availability

**Definition:** Availability is readiness to provide acceptable service when required. A system may be available and still: provide wrong information, perform slowly, or violate a safety constraint.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.21 · **Status:** Preferred term

**Usage note:** A service may be available while incorrect, unsafe or unusable.

## B

### Baseline

**Definition:** A baseline is the state or measured condition before the relevant intervention or comparison period. A baseline is not automatically a counterfactual.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.34 · **Status:** Preferred term

### Benchmark

**Definition:** A benchmark is a reference point based on: prior performance, another unit, an external standard, or an expected level.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.35 · **Status:** Preferred term

### Benefit

**Definition:** A benefit is a valued positive consequence for a specified stakeholder or purpose. Benefit is not objective without a value frame.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.15 · **Status:** Preferred term

### Blame

**Definition:** Blame is the attribution of fault or moral responsibility to an actor. Blame may be warranted.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.61 · **Status:** Preferred term

### Borrowed Capability

**Definition:** Performance enabled materially by an external provider, expert, platform, model, partner or temporary support arrangement that the organisation cannot reproduce, govern or sustain independently.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.80 · **Status:** Project OI working term

### Boundary Object

**Definition:** A boundary object is an artefact that retains enough common identity to support coordination across groups while allowing legitimate local interpretation.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.27 · **Status:** Preferred term

### Boundary Spanner

**Definition:** A boundary spanner is an actor or role that connects groups, translates across domains, manages dependencies or represents one unit to another.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.28 · **Status:** Preferred term

## C

### Campbell-Type Distortion

**Definition:** Project OI uses Campbell-type distortion for the pattern in which greater use of a quantitative indicator for decision or control creates greater pressure to corrupt the indicator and the process it is intended to monitor.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.77 · **Status:** Preferred term

### Capability Augmentation

**Definition:** Capability augmentation occurs where technology or external support extends an existing human or organisational capability while retaining meaningful internal understanding and control.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.81 · **Status:** Preferred term

### Capability Boundary

**Definition:** The organisational unit, class of work, operating conditions, authority and outcome within which a capability claim is made.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.9 · **Status:** Preferred term

### Capability Branching

**Definition:** Capability branching occurs where an existing capability develops into: renewed, replicated, redeployed, recombined, or otherwise altered forms.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.37 · **Status:** Preferred term

### Capability Claim

**Definition:** A capability claim is a statement about what the organisation can perform.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.30 · **Status:** Preferred term

**Usage note:** Should identify scope, conditions, evidence and limitations.

### Capability Concentration

**Definition:** Capability concentration is the degree to which performance depends on one or a small number of: people, systems, suppliers, models, or relationships.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.25 · **Status:** Preferred term

### Capability Configuration

**Definition:** The arrangement of people, roles, skills, knowledge, routines, workflow, technology, authority, resources, relationships and governance through which a capability is enacted.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.10 · **Status:** Preferred term

### Capability Debt

**Definition:** Accumulated skill gaps, outdated routines, hidden dependencies, weak ownership, deferred maintenance and unsupported workarounds that reduce the organisation’s future ability to perform or adapt.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.34 · **Status:** Project OI working term

### Capability Decay

**Definition:** Capability decay is the gradual reduction in capability quality or availability through: disuse, turnover, knowledge loss, deferred maintenance, or changed context.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.46 · **Status:** Preferred term

### Capability Dependency

**Definition:** A capability dependency is reliance on another capability, resource, actor or external party for performance.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.32 · **Status:** Preferred term

### Capability Deployment

**Definition:** Capability deployment is the use of a capability in organisational work.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.19 · **Status:** Preferred term

### Capability Development

**Definition:** Capability development is the process through which a capability becomes more: reliable, distributed, integrated, governable, and fit for its intended conditions.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.18 · **Status:** Preferred term

### Capability Distribution

**Definition:** Capability distribution is the spread of required knowledge, practice, authority and supporting arrangements across the actors and units that need to exercise or sustain the capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.24 · **Status:** Preferred term

### Capability Divestment

**Definition:** Capability divestment is the removal, sale, outsourcing or release of capability-related resources and arrangements. Divestment may or may not eliminate the organisational need for the capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.51 · **Status:** Preferred term

### Capability Drift

**Definition:** Capability drift occurs where the enacted capability changes gradually while the organisation’s description, governance or assumptions remain static.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.48 · **Status:** Preferred term

### Capability Element

**Definition:** A capability element is one constituent of a capability configuration. No single element should be assumed sufficient.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.11 · **Status:** Preferred term

### Capability Enrichment

**Definition:** Capability enrichment strengthens or expands an existing capability using additional knowledge, practice, resource or technology.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.40 · **Status:** Preferred term

### Capability Erosion

**Definition:** Capability erosion is the loss of capability through repeated substitution, reduced practice, outsourcing, automation or removal of supporting conditions.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.47 · **Status:** Preferred term

### Capability Evidence

**Definition:** Capability evidence is observable evidence that the organisation can perform the class of activity or effect claimed under relevant conditions. Evidence may include: repeated performance, successful transfer, performance after turnover, recovery, outcome, and demonstrable use beyond one expert.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.29 · **Status:** Preferred term

### Capability Extension

**Definition:** Expansion of the scope, scale, population or conditions under which a capability can perform.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.39 · **Status:** Preferred term

### Capability Formation

**Definition:** Capability formation is the process through which a new capability begins to emerge from: prior experience, resources, knowledge, routines, roles, and organising choices.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.17 · **Status:** Preferred term

### Capability Fragility

**Definition:** Capability fragility is the susceptibility of a capability to material loss or failure under: absence, change, disruption, or overload.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.33 · **Status:** Preferred term

### Capability Gap

**Definition:** A capability gap is a material difference between the capability required and the capability currently available. A gap may concern: existence, capacity, quality, distribution, authority, integration, or resilience.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.31 · **Status:** Preferred term

### Capability Lifecycle

**Definition:** A capability lifecycle is the evolution of a capability across formation, development, maturity and later branching, renewal, retrenchment, redeployment, replication or retirement.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.36 · **Status:** Preferred term

### Capability Maturity

**Definition:** The degree to which a capability is established, repeatable, understood, governable and resilient under stated conditions. It does not imply one universal linear maturity scale.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.35 · **Status:** Project OI working term — use cautiously

**Usage note:** Use descriptively; do not imply one universal linear maturity scale.

### Capability Obsolescence

**Definition:** Capability obsolescence is the condition in which a capability no longer fits: current purpose, environment, technology, risk, or stakeholder need.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.49 · **Status:** Preferred term

### Capability Opacity

**Definition:** The degree to which the organisation cannot explain or inspect how a capability performs, where it depends, why it fails or what would be required to reproduce it.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.83 · **Status:** Project OI working term

### Capability Owner

**Definition:** A Capability Owner is the role accountable for the capability’s: purpose, design, currentness, performance, development, and retirement. The Capability Owner may not perform the work directly.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.27 · **Status:** Preferred term

### Capability Pioneering

**Definition:** Capability pioneering is the creation of materially new capability rather than incremental improvement of an existing one.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.41 · **Status:** Preferred term

### Capability Portability

**Definition:** The degree to which a capability can move across people, units, technologies, providers or locations without losing its essential function, authority and evidence.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.45 · **Status:** Project OI working term

### Capability Purpose

**Definition:** A capability purpose is the organisational need or class of outcome the capability exists to support.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.8 · **Status:** Preferred term

### Capability Readiness

**Definition:** Capability readiness is the condition in which the required capability configuration can perform the relevant class of work responsibly.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.21 · **Status:** Preferred term

### Capability Redundancy

**Definition:** Capability redundancy is deliberate overlap sufficient to preserve continuity, challenge and recovery.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.26 · **Status:** Preferred term

### Capability Reliability

**Definition:** Capability reliability is the consistency with which a capability performs acceptably across stated conditions and time.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.22 · **Status:** Preferred term

### Capability Renewal

**Definition:** Capability renewal is the substantive update of an existing capability so that it remains fit under changed conditions.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.38 · **Status:** Preferred term

### Capability Replication

**Definition:** Capability replication is the deliberate recreation of a capability in another unit or setting using a source template and adaptation process. Winter and Szulanski treat replication as a process involving exploration of the business model followed by exploitation through replication, not simple copying.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.43 · **Status:** Preferred term

### Capability Resilience

**Definition:** The capacity of a capability configuration to absorb, recover or extend performance under disruption without losing its essential purpose and integrity.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.23 · **Status:** Preferred term

### Capability Retention

**Definition:** The preservation and repeated use of selected capability elements or configurations within capability evolution.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.69 · **Status:** Qualified preferred term

**Usage note:** Distinct from memory retention.

### Capability Retirement

**Definition:** Capability retirement is the governed withdrawal of a capability from ordinary organisational use.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.50 · **Status:** Preferred term

### Capability Scaling

**Definition:** Expansion of a capability’s volume, reach, frequency or organisational coverage while maintaining acceptable performance and governance.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.44 · **Status:** Preferred term

### Capability Selection

**Definition:** The retention or amplification of some capability variations over others.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.68 · **Status:** Qualified preferred term

**Usage note:** Part of variation–selection–retention in capability evolution.

### Capability Sovereignty

**Definition:** The degree to which the organisation retains legitimate control over purpose, authority, essential knowledge, operational continuity, portability and exit for a capability. It does not imply that every capability element must be owned internally.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.84 · **Status:** Project OI working term — use cautiously

### Capability Steward

**Definition:** A Capability Steward supports the maintenance, coordination or improvement of one or more capability elements without necessarily owning the complete capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.28 · **Status:** Preferred term

### Capability Substitution

**Definition:** Capability substitution occurs where one capability, technology or provider performs work previously dependent on another capability. Substitution can reduce cost and increase performance while also creating: skill erosion, dependency, and recovery risk.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.82 · **Status:** Preferred term

### Capability System

**Definition:** A capability system is a set of interdependent capabilities and enabling arrangements that together produce a broader organisational response. A capability can be strong locally and weak as part of the system.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.13 · **Status:** Preferred term

### Capability Transfer

**Definition:** Capability transfer is the movement of capability-related knowledge and arrangements from one actor or unit to another. Transfer is not complete merely because documentation moved.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.42 · **Status:** Preferred term

### Capability Trap

**Definition:** Repenning and Sterman use capability trap to describe a self-reinforcing pattern in which pressure to improve current performance diverts resources from process improvement, worsening capability and reinforcing the belief that improvement investment is unaffordable.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.74 · **Status:** Preferred term

### Capability Utilisation

**Definition:** Capability utilisation is the degree to which available capability is actually used. Unused capability may decay.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.20 · **Status:** Preferred term

### Capacity

**Definition:** The amount or extent of work, load, change or response that an actor or system can accommodate within defined constraints.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.6 · **Status:** Preferred term

### Causal Effect

**Definition:** A causal effect is the difference between outcomes under alternative conditions attributable to the treatment, action or intervention within a defined causal model.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.38 · **Status:** Preferred term

### Checkpoint

**Definition:** A checkpoint is a durable record of execution state from which work can: resume, recover, or be reconstructed.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.49 · **Status:** Preferred term

### Choice

**Definition:** A choice is a selection among alternatives. A choice becomes an organisational decision only where it is: made under legitimate authority, attributable, and connected to organisational commitment.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.3 · **Status:** Preferred term

### Choose

**Definition:** The OI operational capability to frame a response, evaluate alternatives and make an attributable and authorised organisational commitment under uncertainty.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-004 · **Status:** Core OI operational capability — provisional

**Usage note:** May include acting, delaying, monitoring, escalating, experimenting, seeking more evidence or deliberate non-action.

### Collaboration

**Definition:** Collaboration is joint work in which participants contribute to a shared activity, problem or output. Collaboration often involves direct interaction and co-creation.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.14 · **Status:** Preferred term

### Collective Action

**Definition:** The connected and mutually adjusted contributions of multiple actors or systems toward an accepted organisational purpose or authorised commitment.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.12 · **Status:** Preferred term

### Collective Response

**Definition:** A deliberate organisation-level response shaped by orientation and authority that may include acting, delaying, monitoring, escalating, experimenting, seeking further evidence or deliberate non-action.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §8 · **Status:** Core response term — provisional

**Usage note:** The defining condition is that orientation influences deliberate collective response, not that visible activity occurs.

### Commitment

**Definition:** Commitment is the organisational willingness or obligation to support and implement a decision. Commitment does not require personal agreement.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.18 · **Status:** Preferred term

### Common Understanding

**Definition:** Sufficient shared comprehension of the objective, relevant roles, dependencies, state, vocabulary and constraints to allow interdependent action.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.10 · **Status:** Preferred term

### Communication

**Definition:** Communication is the exchange or representation of information, meaning or intent. Communication is one coordination mechanism.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.15 · **Status:** Preferred term

### Comparator

**Definition:** A comparator is the alternative group, condition, period or treatment used to interpret the observed outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.36 · **Status:** Preferred term

### Compensation

**Definition:** Compensation is a new action intended to counteract or account for a completed or partially completed effect. The saga pattern in distributed systems formalises long-lived work as a series of transactions with compensating actions where full rollback is not possible.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.46 · **Status:** Preferred term

**Usage note:** A new action that addresses a prior effect; it does not erase history.

### Competence

**Definition:** Competence is sufficient ability to perform work to an expected standard in a defined context. Competence does not necessarily imply expert-level performance.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.9 · **Status:** Preferred term

**Usage note:** Sufficient ability under specified conditions; not necessarily expertise or organisational capability.

### Competency Trap

**Definition:** A condition in which positive experience with an existing capability reinforces its use and reduces search for potentially superior alternatives.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.73 · **Status:** Preferred term

**Usage note:** Owned by OI-BOK-009 as a capability and adaptation construct.

### Completion

**Definition:** Completion is the governed determination that the defined execution obligations have been satisfied or terminated. Completion should distinguish: successful completion, partial completion, failed completion, cancellation, safe termination, compensation complete, and indeterminate state.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.10 · **Status:** Preferred term

### Completion Integrity

**Definition:** The degree to which a completion state accurately represents work performed, required effects, unresolved ambiguity, evidence and receiving acceptance.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §10.5 · **Status:** Project OI working term

**Usage note:** Avoid one generic “done” state for material execution.

### Concurrent Control

**Definition:** Concurrent control acts during execution.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.16 · **Status:** Preferred term

### Confounder

**Definition:** A confounder is a factor associated with both the intervention and outcome that can distort causal inference.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.42 · **Status:** Preferred term

### Connection Quality

**Definition:** The reliability and integrity with which one Organisational Intelligence capability or state is converted into, accepted by and made usable within the next relevant capability or state.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-BOK-SYN-001 §§3.6 and 6 · **Status:** Project OI integrative working term

**Usage note:** Candidate dimensions include evidence preservation, attribution, authority, acceptance, detectability and reconstructability.

### Consequence

**Definition:** A consequence is any state change, experience or effect associated with action, inaction or environmental interaction. Consequences may be: intended or unintended, anticipated or unanticipated, beneficial, harmful or mixed, direct or indirect, immediate or delayed, reversible or persistent, and visible or hidden.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.6 · **Status:** Preferred term

### Containment

**Definition:** Containment limits the spread, consequence or scope of failure.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.42 · **Status:** Preferred term

### Contestability

**Definition:** The ability of an affected or authorised actor to question, challenge, appeal, correct or request review of a decision, its evidence, its authority or its application.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.24 · **Status:** Preferred term

### Context Condition

**Definition:** A context condition is an environmental or organisational condition affecting whether the mechanism operates and which outcome occurs.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.33 · **Status:** Preferred term

### Context Decay

**Definition:** The reduction in usefulness or validity of context as organisational conditions change.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §10.1 · **Status:** Project OI working term

**Usage note:** Requires later operationalisation.

### Context Drift

**Definition:** Gradual change in surrounding conditions while the focal artefact or representation appears stable.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §10.2 · **Status:** Project OI working term

**Usage note:** Examples include unchanged guidance after operating practice or metric definitions have changed.

### Context Laundering

**Definition:** The process by which uncertain, inferred or low-authority material becomes presented as established context after passing through summaries, systems or repeated reuse.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §14.9 · **Status:** Project OI working term

**Usage note:** Distinct from context poisoning, which introduces incorrect or malicious material.

### Contextualise

**Definition:** The bridge process that connects attended signals and source material to purpose, relationships, current state, time, history, evidence, authority and uncertainty so they can become usable by Know and contribute to orientation.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-SYN-001 §§3.4 and 4.1 · **Status:** Core connective mechanism — provisional

**Usage note:** Not a seventh OI operational capability.

### Context Window

**Definition:** The set of tokens available to a language model during an inference invocation.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §4.9 · **Status:** Preferred technical term

**Usage note:** A context window is a technical container and is not equivalent to organisational context.

### Contribution

**Definition:** Contribution is a credible claim that an intervention was one material cause among several influencing an outcome. Contribution analysis develops a reasoned performance story by testing a theory of change and alternative explanations rather than claiming sole attribution where that claim is not supportable.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.40 · **Status:** Preferred term

### Control Loop

**Definition:** A recurring process that observes state, compares it with intent, constraint or an acceptable range, selects or triggers adjustment, and observes the new state.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.14 · **Status:** Preferred term

### Cooperation

**Definition:** Cooperation is the willingness of actors to support one another or contribute toward compatible aims. Cooperation can make coordination easier.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.13 · **Status:** Preferred term

### Coordinate

**Definition:** The organisation-level capacity to convert orientation into a deliberate collective response.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §8 · **Status:** Core higher-order transformation — provisional

**Usage note:** Combines Choose and Mobilise. Distinguish Coordinate from the Chapter 5 mechanism coordination.

### Coordination

**Definition:** The ongoing management of dependencies among authorised and interdependent contributions so that actors can understand how their work connects, anticipate relevant actions, adjust when conditions change and integrate their outputs into a coherent organisational response.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.5 · **Status:** Preferred term

### Coordination Accountability

**Definition:** The condition in which actors can identify who is responsible for each contribution, what others may expect and where explanation or correction is required.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.8 · **Status:** Qualified preferred term

**Usage note:** Use the qualifier to distinguish it from governance accountability owned by OI-BOK-004.

### Coordination Debt

**Definition:** Project OI uses coordination debt as a working term for accumulated unresolved dependencies, unclear ownership, brittle workarounds and inconsistent interfaces that make future collective action harder and more expensive. The term requires later comparison and operationalisation.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.33 · **Status:** Project OI working term

### Coordination Exception

**Definition:** A condition in which the ordinary coordination mechanism no longer fits the situation.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.30 · **Status:** Qualified preferred term

**Usage note:** Distinct from an authorised governance exception and from an operational execution exception.

### Coordination Failure

**Definition:** A coordination failure occurs where interdependent contributions do not combine as required because dependencies, roles, information, timing, authority, adjustment or integration are inadequate. ---.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.35 · **Status:** Preferred term

### Coordination Load

**Definition:** Project OI uses coordination load as a working term for the time, attention and interaction required to manage dependencies. Coordination load may be necessary.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.32 · **Status:** Project OI working term

### Coordination Mechanism

**Definition:** A coordination mechanism is a structure, practice, artefact, relationship or rule used to manage one or more dependencies.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.6 · **Status:** Preferred term

### Coordination Repair

**Definition:** The process of restoring coherent action after surprise, failure, changed conditions, missing information or a broken dependency.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.31 · **Status:** Qualified preferred term

**Usage note:** Repair restores the current episode; it is not organisational learning automatically.

### Core Construct

**Definition:** The minimum distinctive Project OI phenomenon expressed as forming orientation, coordinating response and improving future response.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §6 · **Status:** Core model term — provisional

**Usage note:** Does not imply that every episode follows a rigid linear sequence.

### Correlation

**Definition:** Correlation is an association between variables. Correlation does not establish causation.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.41 · **Status:** Preferred term

### Counterfactual

**Definition:** A counterfactual is the unobserved outcome that would have occurred for the same unit, group or system under a different condition. Holland’s causal-inference framework emphasises that causal effects require comparison between potential outcomes that cannot both be observed for the same unit at the same time.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.37 · **Status:** Preferred term

### Counterfactual Reflection

**Definition:** Counterfactual reflection examines how the episode might have unfolded under different actions or conditions.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.67 · **Status:** Preferred term

### Cue

**Definition:** A feature of an event or data point that an actor uses to begin interpretation. A cue is selected rather than inherently meaningful.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.3 · **Status:** Preferred term

## D

### Data Point

**Definition:** A recorded representation of an event or state. A data point may be accurate, inaccurate, partial, duplicated or irrelevant.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.2 · **Status:** Preferred term

### Data Provenance

**Definition:** Data provenance is the traceable origin and transformation history of evaluative data.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.65 · **Status:** Preferred term

### Debrief

**Definition:** A debrief is a structured reflection after performance intended to improve later performance.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.63 · **Status:** Preferred term

### Decision

**Definition:** An attributable commitment made by an authorised actor or mechanism that selects, approves, rejects, defers, conditions, delegates, revokes or deliberately preserves a course of action, allocation, rule or non-action for a defined organisational scope.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.2 · **Status:** Preferred term

### Decision-Maker

**Definition:** A decision-maker is the authorised actor or mechanism that makes the specific decision.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.10 · **Status:** Preferred term

### Decision Owner

**Definition:** The person or governance body accountable for ensuring that a decision is properly framed, made under valid authority, connected to action and reviewed where required. The Decision Owner may differ from the decision-maker.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.9 · **Status:** Preferred term

**Usage note:** Accountable for the integrity of the decision process and connection to action; may or may not make the specific decision.

### Decision Quality

**Definition:** Decision quality has several dimensions: framing quality, evidence quality, process quality, authority quality, content quality, implementation quality, and outcome quality. These dimensions are related but not interchangeable.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.26 · **Status:** Preferred term

### Decision Record

**Definition:** A Decision Record is the durable representation of: the decision, authority, material context, evidence, options, dissent, rationale, conditions, action ownership, and review point. It should preserve organisational reasoning without requiring private mental process or chain-of-thought.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.22 · **Status:** Preferred term

### Decision Right

**Definition:** A decision right is the bounded right to make a defined class of decisions for an organisational scope.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.5 · **Status:** Preferred term

### Decision-Time Context

**Definition:** Decision-Time Context is the material context that was available, believed and authorised when a decision was made. It remains distinct from information learned later.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.23 · **Status:** Preferred term

### Decision-Time Memory

**Definition:** The preserved record of what was known, believed, authorised and uncertain when a decision was made.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.23 · **Status:** Preferred term

### Defensive Routine

**Definition:** A defensive routine is an organisational pattern that protects actors from embarrassment or threat while preventing examination of the conditions producing the problem.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.60 · **Status:** Preferred term

### Degraded Mode

**Definition:** A degraded mode is an explicitly recognised operating state in which the organisation provides reduced service while preserving critical constraints.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.39 · **Status:** Preferred term

### Delegation

**Definition:** Delegation is the transfer of a bounded decision right or action authority from one authorised actor to another. Delegation should specify: what is delegated, to whom, for which scope, under which thresholds, with which constraints, until when, and under what review and revocation conditions.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.8 · **Status:** Preferred term

### Deliberate Non-Action

**Definition:** Deliberate non-action is an attributable decision not to act at the present time.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.21 · **Status:** Preferred term

### Deliverable

**Definition:** A deliverable is an agreed output that satisfies a defined obligation or acceptance condition. A deliverable can be accepted without producing its intended outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.4 · **Status:** Preferred term

### Dependability

**Definition:** Dependability is an umbrella term covering attributes such as: reliability, availability, safety, integrity, and maintainability. Project OI uses the term as a technical reference rather than a proposed organisation-level capability.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.23 · **Status:** Use cautiously

**Usage note:** Technical umbrella term; not a proposed organisation-level OI capability.

### Dependency

**Definition:** A dependency exists where the performance, timing, resources, state, output or legitimacy of one activity affects another. Malone and Crowston define coordination as managing dependencies among activities.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.3 · **Status:** Preferred term

### Deviation

**Definition:** A deviation is a difference between: expected, specified, planned, and actual execution. A deviation may be beneficial, neutral or harmful.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.36 · **Status:** Preferred term

### Disaggregation

**Definition:** Disaggregation is the separation of aggregate data by relevant: population, role, customer, region, time, condition, or other dimension.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.66 · **Status:** Preferred term

### Displacement

**Definition:** A shift of cost, workload, delay, risk or harm from an improving area to another area.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.46 · **Status:** Preferred term

### Distributional Outcome

**Definition:** A distributional outcome concerns how benefits, harms, burdens and opportunities are distributed among: groups, roles, regions, customers, employees, or other populations. Average improvement may conceal concentrated harm.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.20 · **Status:** Preferred term

### Double-Loop Learning

**Definition:** Learning that questions and may revise the governing assumptions, values, policies or objectives that produced the action.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.56 · **Status:** Preferred term

### Dynamic Capability

**Definition:** A repeatable organisational capacity to create, extend, combine, modify, redeploy or retire operational capabilities and their supporting resource configurations.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.15 · **Status:** Preferred term

**Usage note:** Not every change process or one-off response is a dynamic capability.

## E

### Effect

**Definition:** An effect is a change associated causally or plausibly with an intervention, action or condition. The strength of the causal claim should remain explicit.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.13 · **Status:** Preferred term

### Embedment

**Definition:** Embedment is the degree to which capability is incorporated into the organisation’s actual work and relationships.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.53 · **Status:** Preferred term

### Encoding

**Definition:** Encoding is the process through which selected experience is represented in a form capable of later retention and retrieval. Encoding always involves: framing, compression, categorisation, and omission.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.10 · **Status:** Preferred term

### End Outcome

**Definition:** An end outcome is the later or more final condition the intervention is intended to influence. The term does not imply that effects have ceased.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.12 · **Status:** Preferred term

### Episode

**Definition:** An episode is a bounded sequence of events and actions examined as one unit for: reconstruction, evaluation, reflection, or learning.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.2 · **Status:** Preferred term

### Episodic AI Memory

**Definition:** Episodic AI memory is retained information about specific prior interactions or events.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.79 · **Status:** Qualified technical analogy

### Epistemic Quality

**Definition:** The quality of evidence, reasoning, source integrity, uncertainty representation and challenge supporting organisational orientation and response, proportionate to the risk involved.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §4 · **Status:** Cross-cutting condition — provisional

**Usage note:** Distinct from certainty and from outcome success.

### Error

**Definition:** An error is a system state capable of leading to failure. In human work, “error” should not become a moral label for the person involved.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.31 · **Status:** Preferred term

### Escalation

**Definition:** Escalation is the governed transfer or referral of a matter where: authority is insufficient, risk exceeds the threshold, context is incomplete, conflict remains unresolved, or the current route cannot produce a legitimate decision. Escalation is not inherently a failure.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.19 · **Status:** Preferred term

### Espoused Theory

**Definition:** An espoused theory is the explanation an actor or organisation gives for how it acts.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.58 · **Status:** Preferred term

### Evaluation

**Definition:** A governed and evidence-bearing process of making a reasoned judgement about the relevance, coherence, implementation, effectiveness, efficiency, impact, fairness, sustainability or other material qualities of an intervention, decision, system or response.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §2 · **Status:** Preferred core chapter construct

**Usage note:** Distinct from monitoring, measurement and learning.

### Evaluation Independence

**Definition:** Evaluation independence is the degree to which evaluative judgement is protected from inappropriate influence by: delivery, ownership, interest, or hierarchy. Independence does not require evaluators to be organisationally isolated.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.73 · **Status:** Preferred term

### Evaluation Use

**Definition:** The application of evaluation findings, process or reasoning to decisions, accountability, learning or improvement.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.74 · **Status:** Preferred term

### Evaluative Judgement

**Definition:** An evaluative judgement is a reasoned conclusion about the merit, worth, significance or fitness of an intervention, decision, system or response against explicit criteria and evidence.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.67 · **Status:** Preferred term

### Event

**Definition:** Something that occurs in the organisation or its environment. An event exists whether or not the organisation notices it.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.1 · **Status:** Preferred term

### Evidence

**Definition:** Information, observation, artefact or record capable of supporting, challenging or qualifying a claim, interpretation, decision, action, outcome or lesson when its source and limitations remain inspectable.

**Owner:** OI-BOK-010 (reserved) · **Source:** Cross-chapter synthesis; OI-BOK-SYN-001 §7.13 · **Status:** Cross-cutting preferred term — provisional

**Usage note:** Evidence is not equivalent to proof, authority or interpretation.

### Evidence-Bearing Context

**Definition:** Context that preserves enough source, validity, support, contradiction, confidence and interpretation status for material beliefs to be inspected and challenged.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §18 · **Status:** Project OI working design principle

**Usage note:** A summary should not become a source detached from its evidence.

### Exception

**Definition:** An authorised and bounded deviation from a governing rule, policy, threshold or ordinary process, with explicit reason, authority, scope, conditions, effective period, review and expiry.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.20 · **Status:** Preferred term

**Usage note:** Generic governance meaning. Use coordination exception or operational exception for domain-specific conditions.

### Execution

**Definition:** The performance and control of authorised work through a sequence or configuration of actions that is intended to realise an organisational commitment under actual operating conditions.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.3 · **Status:** Preferred term

**Usage note:** Owned by OI-BOK-006. Chapter 5 coordinates the contributions that execution performs.

### Experience

**Definition:** An event, condition, action, interaction or consequence encountered by an individual, group, organisation or system. Experience does not become learning automatically.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.1 · **Status:** Preferred term

**Usage note:** Chapter 3 uses experience more narrowly as exposure relevant to expertise development.

### Experiential Learning

**Definition:** Experiential learning is learning through action and consequence.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.48 · **Status:** Preferred term

### Experiment

**Definition:** An experiment is a bounded intervention designed to produce evidence about: a mechanism, capability, option, or condition.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.63 · **Status:** Preferred term

### Expert

**Definition:** An expert is a person recognised as possessing expertise relevant to a domain or problem. Recognition does not prove that the person’s expertise is: current, applicable, unbiased, available, or sufficient for the present situation.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.6 · **Status:** Preferred term

**Usage note:** Expert recognition does not prove currentness, applicability, availability or sufficiency.

### Expertise

**Definition:** High-level, domain-specific capacity to recognise relevant patterns, diagnose conditions, exercise judgement and perform effectively, developed through structured knowledge and sufficiently rich practice and learning.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.5 · **Status:** Preferred term

### Expertise Dependency

**Definition:** The degree to which an organisational capability relies on continued access to one or a small number of people.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §15 · **Status:** Project OI working term

**Usage note:** Descriptive; requires later operationalisation.

### Expertise Location

**Definition:** Expertise location is the organisation’s capacity to identify where relevant knowledge or skill resides.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.13 · **Status:** Preferred term

### Expertise Routing

**Definition:** The process of matching an organisational knowledge need with relevant, accessible and credible expertise, then bringing that expertise into interpretation, decision or work.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.14 · **Status:** Project OI working term

### Explicit Coordination

**Definition:** Explicit coordination uses deliberate communication, assignment, plans, schedules or commands to align work.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.25 · **Status:** Preferred term

### Explicit Knowledge

**Definition:** Explicit knowledge is knowledge that has been articulated into a communicable representation, such as: language, diagrams, procedures, rules, records, models, or examples. Explicit representation can improve transfer without reproducing the complete tacit understanding that produced it.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.11 · **Status:** Preferred term

### Exploitation

**Definition:** Exploitation includes: refinement, efficiency, implementation, replication, and use of existing knowledge and capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.61 · **Status:** Preferred term

### Exploration

**Definition:** Exploration includes: search, variation, experimentation, discovery, and development of new alternatives.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.60 · **Status:** Preferred term

### Externality

**Definition:** An externality is a consequence experienced by a party or system not fully represented in the decision, transaction or evaluation boundary.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.18 · **Status:** Preferred term

## F

### Failure

**Definition:** A failure occurs when delivered service or performance deviates from the specified or acceptable service at the system boundary. Failure depends on: the boundary, expectation, and affected actor.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.32 · **Status:** Preferred term

### Failure Learning

**Definition:** Failure learning is inquiry into an undesired outcome or service failure intended to change future understanding or response.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.70 · **Status:** Preferred term

### Fault

**Definition:** Adapted from dependable-computing terminology, a fault is the adjudged or hypothesised cause of an error. Faults may be: human, technical, organisational, environmental, accidental, or malicious.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.30 · **Status:** Preferred term

### Feedback

**Definition:** Feedback is information returned about state, action or consequence that can influence future behaviour or understanding. Feedback is not learning automatically.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.47 · **Status:** Preferred term

**Usage note:** Does not become learning automatically.

### Feedback Completeness

**Definition:** Project OI uses feedback completeness as a working term for the degree to which material positive, negative, intended, unintended and distributional consequences are represented sufficiently for evaluation. Complete feedback in an absolute sense is impossible.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.51 · **Status:** Project OI working term

### Feedback Control

**Definition:** Feedback control uses observed results or state to adjust current execution. This operational feedback is distinct from the broader outcome evaluation owned by Chapter 7.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.17 · **Status:** Preferred term

### Feedback Delay

**Definition:** A feedback delay is the time between: action, consequence, observation, and organisational availability.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.49 · **Status:** Preferred term

### Feedback Distortion

**Definition:** Feedback distortion occurs where the information returned differs materially from the underlying consequence because of: measurement, aggregation, filtering, incentives, delay, selection, or interpretation.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.50 · **Status:** Preferred term

### Feedback Signal

**Definition:** A feedback signal is a specific piece of information about: progress, state, output, outcome, deviation, or impact.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.48 · **Status:** Preferred term

### Feedforward Control

**Definition:** Feedforward control acts before or at initiation to reduce predictable failure.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.15 · **Status:** Preferred term

### Forgetting

**Definition:** Organisational forgetting is the loss, degradation, inaccessibility or displacement of retained organisational knowledge or memory. Forgetting may be: accidental, emergent, imposed, or deliberate.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.28 · **Status:** Preferred term

### Formal Authority

**Definition:** Formal authority is the officially granted right to make a decision or direct action.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.6 · **Status:** Preferred term

**Usage note:** Distinct from real authority.

### Formative Evaluation

**Definition:** Evaluation conducted to improve design, implementation or operation while change remains possible.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.68 · **Status:** Preferred term

## G

### Goal Displacement

**Definition:** Goal displacement occurs where attention shifts from the original purpose to the measure, procedure or target used to represent it.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.76 · **Status:** Preferred term

### Goodhart-Type Effect

**Definition:** Project OI uses Goodhart-type effect for the loss of a useful statistical or behavioural relationship when the measure becomes an object of control. Goodhart’s original observation concerned monetary management.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.78 · **Status:** Preferred term

### Governance

**Definition:** The cross-cutting arrangements through which an organisation establishes authority, constraints, accountability, control, contestability and responsible conditions for collective action.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §4; OI-BOK-SYN-001 §4.3 · **Status:** Cross-cutting condition — provisional

**Usage note:** Governance is not one sequential stage in the OI cycle.

### Graceful Degradation

**Definition:** The deliberate reduction of quality, scope, speed or functionality to preserve the most important service or safety conditions under constraint.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.26 · **Status:** Preferred term

### Group Learning

**Definition:** Group learning is a change in the shared or coordinated understanding and response of a group.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.46 · **Status:** Preferred term

## H

### Handoff

**Definition:** A handoff is the transfer of primary responsibility, work state or next action from one actor or mechanism to another. A handoff is not simply a notification.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.21 · **Status:** Preferred term

### Handoff Integrity

**Definition:** The degree to which a handoff preserves the information and conditions required for the receiving actor to continue responsibly.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §14 · **Status:** Project OI working term

**Usage note:** A handoff is complete when the receiving dependency is accepted or explicitly failed, not when the sender transmits.

### Harm

**Definition:** A harm is a material negative consequence affecting: wellbeing, rights, safety, opportunity, resources, trust, or organisational viability.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.16 · **Status:** Preferred term

### Hazard

**Definition:** A hazard is a system state or condition that, together with particular environmental conditions, can lead to harm or loss.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.28 · **Status:** Preferred term

### Higher-Order Transformation

**Definition:** One of the three organisation-level transformations through which Project OI interprets Organisational Intelligence: Orient, Coordinate or Improve.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §§6–9 · **Status:** Core model term — provisional

**Usage note:** Distinct from the six OI operational capabilities.

### Human Capital

**Definition:** Human capital is the knowledge, skills, abilities and other attributes embodied in people that may support productive activity. Human capital contributes to organisational capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.3 · **Status:** Preferred term

### Human Intervention

**Definition:** Human intervention is an authorised human action that: supervises, confirms, corrects, pauses, redirects, contains, or terminates execution. Human intervention is meaningful only where the person has: sufficient state, expertise, time, authority, and effective controls.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.51 · **Status:** Preferred term

## I

### Idempotency

**Definition:** An idempotent action can be repeated without changing the effective result beyond the first successful application. Organisational actions are often not naturally idempotent.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.48 · **Status:** Preferred term

**Usage note:** Many organisational effects are not naturally idempotent.

### Impact

**Definition:** A material, broader or longer-term positive or negative effect on people, organisations, systems or environments, including effects beyond the immediate scope of execution.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.14 · **Status:** Use cautiously

**Usage note:** Reserve for material broader or longer-term effects; do not use merely to make an output sound important.

### Impact Evaluation

**Definition:** Impact evaluation assesses the causal effects of an intervention, usually through explicit counterfactual reasoning.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.72 · **Status:** Preferred term

### Implementation

**Definition:** Implementation is the process through which a decision, policy, intervention or system is put into use.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.22 · **Status:** Preferred term

### Implementation Failure

**Definition:** An implementation failure occurs where the intended intervention was not delivered, adopted, sustained or used adequately.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.28 · **Status:** Preferred term

### Implementation Fidelity

**Definition:** Implementation fidelity is the degree to which an intervention or programme is delivered as intended. Fidelity should not be interpreted as literal procedural conformity where local adaptation is authorised and necessary.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.23 · **Status:** Preferred term

### Implementation Outcome

**Definition:** An implementation outcome is an effect of the deliberate effort to introduce or use an intervention. Proctor and colleagues distinguish implementation outcomes such as: acceptability, adoption, appropriateness, feasibility, fidelity, implementation cost, penetration, and sustainability.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.24 · **Status:** Preferred term

### Implementation Quality

**Definition:** Implementation quality is the degree to which implementation creates the conditions necessary for the intervention to operate as intended and responsibly.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.25 · **Status:** Preferred term

### Implicit Coordination

**Definition:** Implicit coordination occurs where actors anticipate one another’s needs and adjust without direct requests at every step. It depends on sufficiently accurate shared or compatible knowledge of: the task, team, situation, and expected actions.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.26 · **Status:** Preferred term

### Improve

**Definition:** The organisation-level capacity to use feedback from response and consequences to strengthen future orientation and response.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §9 · **Status:** Core higher-order transformation — provisional

**Usage note:** Combines Learn and Adapt. Improvement may confirm or stabilise current practice rather than require change.

### Incident

**Definition:** An operational event or condition requiring coordinated attention because service, safety, integrity, authority or continuity may be materially affected.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.33 · **Status:** Preferred term

### Indicator

**Definition:** An indicator is an observable sign used as evidence of a condition or construct that may not be measured directly.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.57 · **Status:** Preferred term

### Individual Learning

**Definition:** Individual learning is a change in one person’s: understanding, skill, expectation, or behaviour.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.45 · **Status:** Preferred term

### Information

**Definition:** Information is data organised or communicated in a form capable of reducing uncertainty for a recipient. Information may be correct and still fail to provide: understanding, judgement, applicable know-how, or a reliable basis for action.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.1 · **Status:** Preferred term

### Input

**Definition:** An input is a resource consumed, allocated or made available for an intervention or operation.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.2 · **Status:** Preferred term

### Inquiry

**Definition:** Inquiry is disciplined questioning intended to test: assumptions, explanations, evidence, and alternative interpretations.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.37 · **Status:** Preferred term

### Institutional Amnesia

**Definition:** Loss of continuity in the organisation’s understanding of why structures, policies, relationships and decisions exist across longer periods or repeated changes.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.27 · **Status:** Preferred term

### Institutionalisation

**Definition:** Institutionalisation is the embedding of learning or practice into sufficiently durable organisational arrangements such as: routines, roles, structures, systems, authority, incentives, and shared expectations.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.52 · **Status:** Preferred term

### Instrumentally Capable but Irresponsibly Governed

**Definition:** A Project OI description for an organisation that displays substantial instrumental capability to orient, coordinate or improve while exercising that capability under illegitimate, unaccountable, unethical or otherwise irresponsible governance.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §4 · **Status:** Preferred diagnostic phrase — provisional

**Usage note:** Avoids implying that effective coordination or adaptation is inherently legitimate or beneficial.

### Integrative Condition

**Definition:** An integrative condition is an organisational condition that allows coordination mechanisms to produce coordinated activity.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.7 · **Status:** Preferred term

### Intended Consequence

**Definition:** An intended consequence is an effect included within the purpose or expected result of the decision or intervention.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.7 · **Status:** Preferred term

### Interdependence

**Definition:** Interdependence is the condition in which two or more actors or activities affect one another’s ability to perform or achieve the intended outcome. Interdependence may be: pooled, sequential, reciprocal, intensive, temporal, resource-based, informational, interpretive, or authority-based.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.4 · **Status:** Preferred term

### Interface

**Definition:** An interface is the governed point at which actors, activities, systems or organisational units exchange: information, work, resources, authority, or outputs. Interfaces can be human, organisational or technical.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.20 · **Status:** Preferred term

### Intermediate Outcome

**Definition:** An intermediate outcome is a change expected to contribute to a later outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.11 · **Status:** Preferred term

### Issue

**Definition:** An issue is a condition, question, opportunity, risk or conflict that may require organisational attention and response. An issue is not automatically a decision.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.1 · **Status:** Preferred term

## K

### Know

**Definition:** The OI operational capability to create, validate, locate, combine and apply relevant knowledge and expertise in context.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-003 · **Status:** Core OI operational capability — provisional

**Usage note:** Not equivalent to information storage or search.

### Knowing

**Definition:** Knowing is knowledge enacted in practice.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.3 · **Status:** Preferred term

### Knowledge

**Definition:** Understanding, know-how, judgement or justified belief capable of informing interpretation or action within a domain.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.2 · **Status:** Preferred term

### Knowledge Authority

**Definition:** Knowledge authority is the legitimacy and reliability a source holds for a particular claim or domain. It is distinct from decision authority.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.12 · **Status:** Preferred term

### Knowledge Integration

**Definition:** Knowledge integration is the process through which specialist contributions are combined into coordinated organisational understanding or capability. ---.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.17 · **Status:** Preferred term

### Knowledge Transfer

**Definition:** Knowledge transfer occurs where one organisational unit’s experience or knowledge changes the knowledge or performance of another. Transfer is not equivalent to sending information.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.16 · **Status:** Preferred term

## L

### Lagging Indicator

**Definition:** A lagging indicator reflects an outcome or condition after it has occurred.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.61 · **Status:** Preferred term

### Leading Indicator

**Definition:** A leading indicator is intended to provide earlier evidence of a future outcome or risk.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.60 · **Status:** Preferred term

### Learn

**Definition:** The OI operational capability to revise organisationally available understanding, memory, routines and future response through credible feedback, reflection and inquiry.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-008 · **Status:** Core OI operational capability — provisional

**Usage note:** Feedback is an input to Learn, not learning itself.

### Learning About Learning

**Definition:** Learning about how the organisation detects, reflects, retains and applies learning. Argyris and Schön use the related term deutero-learning.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.57 · **Status:** Preferred term

### Learning Depreciation

**Definition:** Learning depreciation is loss in the performance or availability of acquired learning over time.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.53 · **Status:** Preferred term

### Learning Myopia

**Definition:** A tendency to privilege the near in time, the near in place and success over distant, external and failure-related knowledge.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.74 · **Status:** Preferred term

### Learning Persistence

**Definition:** The degree to which a learning-induced change remains available and influential across time, personnel and repeated work.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.54 · **Status:** Project OI working term

### Learning Retention

**Definition:** Learning retention is the persistence of learning over time.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.52 · **Status:** Preferred term

### Learning Transfer

**Definition:** Learning transfer is the movement and application of learning to another: person, team, task, or context.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.51 · **Status:** Preferred term

### Lesson

**Definition:** A lesson is a bounded conclusion about: what happened, why it matters, where it applies, and what should influence future understanding or response. A lesson should preserve uncertainty and scope.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.38 · **Status:** Preferred term

### Lesson Applied

**Definition:** A lesson applied has influenced current: decision, action, policy, routine, or design.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.42 · **Status:** Preferred term

### Lesson Disseminated

**Definition:** A lesson disseminated has been made available to actors who may benefit from it.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.41 · **Status:** Preferred term

### Lesson Identified

**Definition:** A lesson identified is a proposed lesson recognised from experience.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.39 · **Status:** Preferred term

### Lesson Institutionalised

**Definition:** A lesson embedded sufficiently in shared knowledge, routine, role, policy, structure, tool or practice to influence organisational behaviour beyond the original episode.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.43 · **Status:** Preferred term

### Lesson Recorded

**Definition:** A lesson recorded has been represented in a durable form.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.40 · **Status:** Preferred term

### Local Optimisation

**Definition:** Local optimisation occurs where an actor, team or system improves its own measure or completion state while degrading the wider organisational outcome.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.34 · **Status:** Preferred term

### Lock-In

**Definition:** Lock-in is a condition in which alternatives become difficult to select or implement despite evidence that the current path may no longer be desirable.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.72 · **Status:** Preferred term

### Logic Model

**Definition:** A structured representation connecting inputs, activities, outputs, intermediate outcomes and end outcomes.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.30 · **Status:** Preferred term

## M

### Maintainability

**Definition:** Maintainability is the capacity to undergo repair, correction or modification while preserving or restoring acceptable operation.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.22 · **Status:** Preferred term

### Maintenance

**Definition:** The work required to preserve the integrity, currentness, meaning, permissions and retrievability of retained memory.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.12 · **Status:** Preferred term

### Managed Forgetting

**Definition:** The governed retirement, de-emphasis or restriction of memory that is obsolete, harmful, unlawfully retained, duplicative or no longer fit for use.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.29 · **Status:** Preferred term

### Measure

**Definition:** A measure is the operational method used to represent an attribute.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.55 · **Status:** Preferred term

### Measurement

**Definition:** Measurement is the assignment of values to attributes according to explicit rules.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.54 · **Status:** Preferred term

### Measurement Reliability

**Definition:** Measurement reliability concerns the consistency or stability of a measure under defined conditions. A reliable measure can be invalid.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.64 · **Status:** Preferred term

### Measurement Validity

**Definition:** Measurement validity concerns whether a measure represents the intended construct and supports the intended interpretation.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.63 · **Status:** Preferred term

### Mechanism

**Definition:** A mechanism is a process or interaction through which an intervention is expected to contribute to an outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.31 · **Status:** Preferred term

### Memory Accessibility

**Definition:** Memory accessibility is the practical ability of an authorised actor or system to locate and use the memory within the required time and context.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.18 · **Status:** Preferred term

### Memory Availability

**Definition:** Memory availability is the existence of a retained trace that can potentially be accessed.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.17 · **Status:** Preferred term

### Memory Confidence

**Definition:** Memory confidence is the represented strength or certainty associated with a retained claim or reconstruction. Confidence is not authority.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.84 · **Status:** Preferred term

**Usage note:** Confidence is not authority.

### Memory Consolidation

**Definition:** Memory consolidation is the transformation of lower-level records into more stable or abstract representations. Consolidation can improve usability.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.82 · **Status:** Preferred term

### Memory Contamination

**Definition:** The introduction or propagation of incorrect, misleading, unauthorised or context-stripped material into organisational memory.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.76 · **Status:** Project OI working term

### Memory Context

**Definition:** Memory context is the set of conditions required to interpret the retained experience appropriately.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.22 · **Status:** Preferred term

### Memory Decay

**Definition:** Loss of detail, accessibility, confidence, currentness or practical usefulness over time.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.24 · **Status:** Project OI working term

### Memory Drift

**Definition:** Project OI uses memory drift as a working term for gradual divergence between the retained representation and the organisation’s current understanding, practice or environment.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.25 · **Status:** Project OI working term

### Memory Freshness

**Definition:** Memory freshness is the degree to which a retained representation reflects the current status of the underlying claim, relationship, routine or condition. Historical memory may be old and still accurate as history.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.19 · **Status:** Preferred term

### Memory Governance

**Definition:** Memory governance is the set of decisions and controls determining: what is retained, for how long, under whose authority, with which access, and how memory is corrected, superseded or forgotten.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.75 · **Status:** Preferred term

### Memory Integrity

**Definition:** The degree to which retained memory preserves source, time, scope, status and transformation history without unauthorised or misleading alteration.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.20 · **Status:** Preferred term

### Memory Item

**Definition:** A bounded retained representation with identifiable source, time, scope, status and relationship to organisational experience.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.6 · **Status:** Project OI working term

### Memory Poisoning

**Definition:** Memory poisoning is a deliberate attack or manipulation that causes a memory or retrieval system to return or use harmful content.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.77 · **Status:** Preferred term

### Memory Provenance

**Definition:** Memory provenance is the traceable origin and transformation history of a retained memory representation.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.21 · **Status:** Preferred term

### Memory Reservoir

**Definition:** A memory reservoir is a location, medium or organisational arrangement through which memory is retained.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.7 · **Status:** Preferred term

### Memory Retention

**Definition:** The continued preservation of a memory trace or organisational disposition across time.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.11 · **Status:** Qualified preferred term

**Usage note:** Retention does not establish accessibility or use.

### Memory Retrieval Policy

**Definition:** A memory retrieval policy determines which retained material is considered and supplied for a current purpose.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.83 · **Status:** Preferred term

### Memory Selection

**Definition:** The process through which some aspects of experience receive retention attention while others do not.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.9 · **Status:** Qualified preferred term

**Usage note:** Selection may be deliberate, habitual, technical, political or accidental.

### Memory Trace

**Definition:** A memory trace is retained evidence or representation from which part of a prior experience may be reconstructed.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.5 · **Status:** Preferred term

### Metadata

**Definition:** Information describing the properties of an information object, such as author, creation date, type, classification, version or source system.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §4.3 · **Status:** Preferred term

**Usage note:** Metadata can supply context but is not equivalent to organisational context.

### Metric

**Definition:** A metric is a quantified measure used to track, compare or evaluate some aspect of performance, process, output or outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.56 · **Status:** Preferred term

### Metric Gaming

**Definition:** Metric gaming is behaviour intended to improve the measured result without producing the intended underlying outcome.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.75 · **Status:** Preferred term

### Microfoundation

**Definition:** A microfoundation is an individual- or interaction-level basis through which organisation-level capability emerges. Microfoundations research emphasises that organisational capability cannot be explained adequately without considering the actions and interactions of individuals, processes and structures.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.12 · **Status:** Preferred term

### Minimum Sufficient Context

**Definition:** The smallest context set that allows the intended actor or system to form a responsible orientation and perform authorised work while retaining access to deeper evidence where needed.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §17 · **Status:** Project OI working principle

**Usage note:** Depends on purpose, risk, uncertainty, reversibility, role, time and consequence.

### Mobilise

**Definition:** The OI operational capability to translate an authorised commitment into coordinated, governed and reliable collective action and execution.

**Owner:** OI-BOK-005–006 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-005–006 · **Status:** Core OI operational capability — provisional

**Usage note:** Coordination and execution are distinct mechanisms within Mobilise.

### Monitoring

**Definition:** The repeated collection and review of selected information about implementation, output, state, risk or outcome. Monitoring does not itself make an evaluative judgement.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.53 · **Status:** Preferred term

**Usage note:** Use operational monitoring where the concern is current execution.

### Mutual Adjustment

**Definition:** Mutual adjustment is coordination through ongoing reciprocal communication and adaptation among actors. It is especially important where work cannot be specified fully in advance.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.24 · **Status:** Preferred term

## N

### Near Miss

**Definition:** A near miss is an event that could have produced material failure or harm but did not, because of: recovery, intervention, redundancy, timing, or chance. A near miss is not proof that the system is safe.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.34 · **Status:** Preferred term

### Near-Miss Learning

**Definition:** Near-miss learning is learning from an event that approached failure or harm without producing the complete negative outcome.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.68 · **Status:** Preferred term

### Noise

**Definition:** Information that consumes attention without materially improving orientation or response in the relevant context. Noise is also contextual. Information irrelevant to one decision may be critical to another.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.6 · **Status:** Preferred term

## O

### Observability

**Definition:** The organisation’s capacity to infer and inspect material operational state, progress, deviation and failure from available evidence and signals.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.18 · **Status:** Preferred term

### Observational Learning

**Definition:** Observational learning is learning by observing behaviour, result or demonstration.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.50 · **Status:** Preferred term

### OI Operational Capability Model

**Definition:** The six-capability Project OI decomposition consisting of Sense, Know, Choose, Mobilise, Learn and Adapt.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-BOK-SYN-001 §§3.3–4 · **Status:** Core model term — provisional

**Usage note:** Use the prefix “OI” to distinguish this model from the generic Chapter 9 term operational capability.

### Operation

**Definition:** An operation is a bounded instance of work performed by: a person, team, workflow, machine, software service, AI agent, or combination of actors.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.4 · **Status:** Preferred term

### Operational Capability

**Definition:** An operational capability is a capability used to perform current organisational work.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.14 · **Status:** Preferred term

**Usage note:** A generic Chapter 9 term for capability used to perform current work. Do not confuse with the OI Operational Capability Model.

### Operational Control

**Definition:** Operational control is the set of structures and mechanisms used to keep execution within authorised and acceptable boundaries. Control may operate through: constraints, procedures, monitoring, permissions, feedback, limits, supervision, automation, and intervention.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.13 · **Status:** Preferred term

### Operational Debt

**Definition:** Accumulated brittle workarounds, untested recovery, hidden dependencies, stale procedures, manual repair and deferred reliability work that increase future execution risk and cost.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.53 · **Status:** Project OI working term

### Operational Evidence

**Definition:** Operational evidence is the durable record required to understand: what was attempted, by whom or what, under which authority, with which inputs and state, which actions occurred, and how execution terminated.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.52 · **Status:** Preferred term

### Operational Exception

**Definition:** A condition in which ordinary execution rules or assumptions do not fit.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.35 · **Status:** Qualified preferred term

**Usage note:** May be expected and governed, unexpected but manageable, or outside authorised operation.

### Operational Intent

**Definition:** Operational intent is the execution-ready statement of: what must change, what must remain protected, which conditions apply, who or what may act, and how acceptable completion will be recognised. Operational intent translates a decision into work without reducing it to one task.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.6 · **Status:** Preferred term

### Operational Monitoring

**Definition:** The repeated observation of selected operational variables, events or conditions.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.19 · **Status:** Qualified preferred term

**Usage note:** Monitoring supplies data; operational observability is the capacity to understand state.

### Operational Readiness

**Definition:** The condition in which the organisation has sufficient authority, context, resources, capability, capacity, prerequisites, control, observability and failure handling to begin work responsibly.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.12 · **Status:** Preferred term

### Operational Reliability

**Definition:** The organisation’s capacity to perform authorised work within acceptable service, safety, integrity and time boundaries repeatedly and over time while detecting material deviation, containing failure and restoring or safely adapting operation when assumptions no longer hold.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §2 · **Status:** Preferred core chapter construct

**Usage note:** Distinct from availability, robustness, resilience and safety.

### Operational State

**Definition:** The current condition of the work, relevant entities, dependencies, resources, authority and operating environment at a specific time.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.8 · **Status:** Preferred term

### Operational System

**Definition:** The sociotechnical arrangement of people, roles, routines, workflows, tools, interfaces, information, authority, infrastructure and environmental conditions through which work is performed.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.5 · **Status:** Preferred term

### Orchestration

**Definition:** Orchestration is the deliberate arrangement and direction of several activities, actors or capabilities toward a desired sequence or outcome. It usually implies a coordinating actor or mechanism.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.16 · **Status:** Preferred term

### Organisational Ambidexterity

**Definition:** Organisational ambidexterity is the ability to pursue exploration and exploitation through a suitable organisational arrangement rather than allowing one to eliminate the other.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.62 · **Status:** Preferred term

**Usage note:** No one arrangement for balancing exploration and exploitation is universally superior.

### Organisational Amnesia

**Definition:** Organisational amnesia is a material loss of access to prior organisational knowledge, rationale or experience required for current or future work. Amnesia may result from: turnover, technology change, structural change, deletion, or failure to encode and retrieve.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.26 · **Status:** Preferred term

### Organisational Capability

**Definition:** A sufficiently repeatable and coordinated organisational capacity to perform a class of activity or produce a class of effect through an identifiable configuration of people, knowledge, practice, routines, authority, relationships, technology and resources.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.7 · **Status:** Preferred term

### Organisational Context

**Definition:** The relational, temporal, situational, purposive and authoritative conditions that determine how organisational information, knowledge, events, decisions and actions should be interpreted and used.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3 · **Status:** Preferred core chapter construct

**Usage note:** Not equivalent to information volume, metadata or a model context window.

### Organisational Feedback

**Definition:** Evidence about the state, effects and consequences of organisational response that can be connected credibly enough to prior purpose, decision, execution and context to support evaluation and future learning.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §2 · **Status:** Preferred core chapter construct

**Usage note:** Data arriving after action is not automatically organisational feedback.

### Organisational Intelligence

**Definition:** The persistent organisation-level capacity to form an orientation from relevant signals and experience, coordinate collective response, and improve future response through feedback.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §§2–3 · **Status:** Core construct — provisional

**Usage note:** Not reducible to one person, model, Agent, repository, graph, score, technology or platform layer.

### Organisational Knowledge

**Definition:** Knowledge available through the organisation’s people, relationships, practices, routines, artefacts, systems and external ties that can influence organisational interpretation or action.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.4 · **Status:** Preferred term

### Organisational Learning

**Definition:** A change in organisationally available understanding or future response arising from experience, inquiry or acquired knowledge that is retained sufficiently to influence more than the immediate individual or episode.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.44 · **Status:** Preferred term

**Usage note:** Not every change, feedback item or individual insight is organisational learning.

### Organisational Learning Process

**Definition:** The set of interactions through which individual, group and organisational learning become connected across levels.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.47 · **Status:** Preferred term

### Organisational Memory

**Definition:** The distributed and dynamic system through which past experience, decisions, knowledge, relationships, routines, artefacts and interpretations are selectively retained, located, reconstructed, contested, updated and made available to current organisational work.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.3 · **Status:** Preferred term

**Usage note:** Not a repository and not exact playback of the past.

### Organisational Orientation

**Definition:** A sufficiently shared or aligned organisational account of what is happening, why it matters, what remains uncertain and what should shape response.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-BOK-002 §4.8; OI-BOK-SYN-001 §4.1 · **Status:** Core integrated state — provisional

**Usage note:** Context and knowledge contribute to orientation; neither is orientation by itself.

### Organisational Performance

**Definition:** Organisational performance is a broad judgement about how well an organisation is achieving relevant objectives or obligations. March and Sutton caution that organisational performance is causally complex, competitively unstable and often evaluated using retrospective accounts that do not support strong causal inference.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.21 · **Status:** Preferred term

**Usage note:** Broad and causally complex; not one outcome or direct evidence of OI.

### Organisational Reconfiguration

**Definition:** The deliberate alteration of capability, resources, structure, authority, relationships, routines and technology across the organisational system.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.76 · **Status:** Preferred term

### Organisational Remembering

**Definition:** Organisational remembering is the enacted process through which prior experience is: located, reconstructed, interpreted, and brought into current work. Remembering is not exact playback.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.4 · **Status:** Preferred term

### Orient

**Definition:** The organisation-level capacity to form a sufficiently shared or aligned understanding of what is happening, why it matters and what conditions should shape response.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §7 · **Status:** Core higher-order transformation — provisional

**Usage note:** Combines Sense and Know. Distinguish the transformation Orient from the resulting organisational orientation.

### Outcome

**Definition:** A consequential change in the state, behaviour, experience, capability, relationship or condition of an organisational entity, stakeholder, system or environment following an intervention or response.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.10 · **Status:** Preferred term

**Usage note:** Distinct from output and from improvement.

### Outcome Evaluation

**Definition:** Outcome evaluation assesses whether and how outcomes changed.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.71 · **Status:** Preferred term

### Outcome Observability

**Definition:** The organisation’s capacity to detect and interpret material consequences across relevant stakeholders, systems and time horizons from available evidence.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.52 · **Status:** Preferred term

### Output

**Definition:** An output is an immediate product, service, artefact, state transition or completed action produced through execution.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.3 · **Status:** Preferred term

## P

### Path Dependence

**Definition:** Path dependence is a process in which prior choices and self-reinforcing mechanisms progressively narrow the range of available future action.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.70 · **Status:** Preferred term

### Pilot

**Definition:** A pilot is a limited implementation used to test a capability under selected operational conditions. A pilot is not necessarily an experiment unless comparison and evidence are designed explicitly.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.64 · **Status:** Preferred term

**Usage note:** A pilot is not necessarily an experiment unless comparison and evidence are designed explicitly.

### Postmortem

**Definition:** A postmortem is a structured review of an incident, failure or material event, often used in technical and operational contexts.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.66 · **Status:** Preferred term

### Potential Absorptive Capacity

**Definition:** The organisation’s ability to acquire and assimilate external knowledge.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.58 · **Status:** Preferred term

### Predictability

**Definition:** Predictability is the ability to form sufficiently reliable expectations about: who will act, when, under which conditions, and with which output. Predictability does not require the environment to be deterministic.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.9 · **Status:** Preferred term

### Procedural AI Memory

**Definition:** Procedural AI memory is retained information about: how to perform work, tool use, or preferred process. These labels borrow from cognitive-memory distinctions and should be treated as engineering analogies rather than evidence that AI has human memory.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.81 · **Status:** Qualified technical analogy

### Process

**Definition:** A process is the sequence or pattern through which work and interaction occur.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.26 · **Status:** Preferred term

### Process Evaluation

**Definition:** Process evaluation examines: what was done, how, for whom, and under which conditions.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.70 · **Status:** Preferred term

### Process Outcome

**Definition:** A process outcome is a result concerning how work was carried out.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.27 · **Status:** Preferred term

### Prototype

**Definition:** A prototype is an early representation or implementation used to explore: design, feasibility, and interaction. A prototype may borrow capability from expert operators or manual support.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.65 · **Status:** Preferred term

**Usage note:** May borrow capability from expert operators or manual support.

### Provenance

**Definition:** The traceable origin and transformation history of information, evidence, claims, memory or evaluative data.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-BOK-002, 007 and 008; OI-BOK-SYN-001 §7.13 · **Status:** Cross-cutting preferred term — provisional

**Usage note:** Preserve source, time, scope and material transformations.

### Proxy

**Definition:** A proxy is a measurable variable used to represent a less directly observable construct.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.62 · **Status:** Preferred term

### Psychological Safety

**Definition:** Psychological safety is a shared belief that interpersonal risk-taking, including speaking about error and uncertainty, is possible within the group. Psychological safety does not remove performance standards or accountability.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.62 · **Status:** Preferred term

### Purpose

**Definition:** The legitimate organisational need, direction or intended consequence that shapes relevance, commitment, coordination, evaluation and improvement.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §§4 and 10; OI-BOK-SYN-001 §4.5 · **Status:** Cross-cutting condition — provisional

**Usage note:** Purpose should remain explicit, communicable, contestable, legitimate and revisable.

### Purposive Context

**Definition:** The dimension of context through which relevance is determined by the question, objective, decision, audience, output, risk and completion condition for which context is assembled.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3.4 · **Status:** Preferred context dimension

**Usage note:** There is no universally complete context; there is context sufficient for a purpose.

## R

### Reactivity

**Definition:** Reactivity is change in behaviour produced by being: observed, measured, ranked, or evaluated. Espeland and Sauder show how public rankings can change expectations and organisational behaviour through self-fulfilling prophecy and commensuration.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.79 · **Status:** Preferred term

### Real Authority

**Definition:** Real authority is effective control over a decision in practice. It may arise from: superior information, expertise, control of agenda or resources, urgency, workload, reputation, or the inability of the formal authority holder to review every case.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.7 · **Status:** Preferred term

**Usage note:** May sit outside the formal model and should be examined for shadow authority.

### Realised Absorptive Capacity

**Definition:** The organisation’s ability to transform and exploit or apply acquired external knowledge.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.59 · **Status:** Preferred term

### Recall

**Definition:** Recall is the production or reconstruction of prior information without the complete original stimulus.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.14 · **Status:** Preferred term

### Recognition

**Definition:** Recognition is identifying a current cue, object or condition as connected to prior experience.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.15 · **Status:** Preferred term

### Recommendation

**Definition:** A recommendation is a proposed course of action supported by evidence, expertise, analysis or preference. A recommendation may influence a decision.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.4 · **Status:** Preferred term

**Usage note:** Does not confer authority to commit the organisation.

### Reconstruction

**Definition:** Reconstruction is the process of reassembling an account of prior experience from incomplete traces, current context and interpretation. Reconstruction can introduce: hindsight, omission, narrative coherence, and power effects.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.16 · **Status:** Preferred term

### Recovery

**Definition:** Recovery is the restoration of acceptable operation after disturbance or failure. Recovery may return to: the previous state, a safe state, or a new viable state.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.43 · **Status:** Preferred term

### Redundancy

**Definition:** The deliberate provision of overlapping capability, resources, information or pathways to reduce dependence on one component.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.40 · **Status:** Preferred term

### Reflection

**Definition:** Reflection is deliberate examination of experience and its meaning.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.33 · **Status:** Preferred term

### Reflection-in-Action

**Definition:** Reflection-in-action is reflective adjustment while work is occurring. The term is associated with Schön’s work on reflective practice.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.34 · **Status:** Preferred term

### Reflection-on-Action

**Definition:** Reflection-on-action is examination after the episode.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.35 · **Status:** Preferred term

### Regression to the Mean

**Definition:** Regression to the mean is the tendency for unusually high or low measurements to be followed by less extreme measurements, even without intervention.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.44 · **Status:** Preferred term

### Relational Context

**Definition:** The dimension of context through which meaning depends on relationships among entities, sources, decisions, work, risks and outcomes.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3.1 · **Status:** Preferred context dimension

**Usage note:** Preferred glossary form of the chapter heading “Relational”.

### Reliability

**Definition:** Adapted from dependability engineering, reliability is the continuity of acceptable service or performance under stated conditions and for a stated period. Organisational reliability requires the service and conditions to be defined.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.20 · **Status:** Preferred term

**Usage note:** Requires a defined service, boundary, conditions and time period.

### Repair

**Definition:** Correction or bypass of the immediate condition preventing acceptable operation. Repair does not necessarily remove the underlying fault.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.44 · **Status:** Preferred term

**Usage note:** Operational repair corrects or bypasses the immediate condition; coordination repair restores coherent interdependent action.

### Resilience

**Definition:** The capacity to sustain, recover or extend viable performance when disruption, saturation or surprise challenges the system’s ordinary operating assumptions.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.25 · **Status:** Preferred term

**Usage note:** Do not collapse rebound, robustness, graceful extensibility and sustained adaptability.

### Resource

**Definition:** A resource is an asset, input or means that may contribute to organisational work.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.1 · **Status:** Preferred term

### Resource Orchestration

**Definition:** Resource orchestration is the deliberate structuring, bundling and leveraging of resources to create and use capability.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.55 · **Status:** Preferred term

### Resource Reallocation

**Definition:** The movement of money, people, attention, authority, technology and capacity among capabilities or opportunities.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.56 · **Status:** Preferred term

### Responsibility

**Definition:** Responsibility is an assigned duty to perform, support or ensure work. Responsibility may be shared.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.16 · **Status:** Preferred term

### Responsible Exercise of Organisational Intelligence

**Definition:** The exercise of Organisational Intelligence under epistemic quality proportionate to risk, legitimate authority, accountability, contestable purpose and appropriate human and technical controls.

**Owner:** OI-BOK-010 (reserved) · **Source:** OI-WD-002 §4 · **Status:** Core governance condition — provisional

**Usage note:** Governs how OI is exercised; it is not a second definition of OI.

### Result

**Definition:** Result is a broad term that may refer to: output, outcome, impact, or implementation consequence. Project OI should avoid using it where a more precise term is available.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.5 · **Status:** Discouraged umbrella term

**Usage note:** Avoid where output, implementation outcome, outcome, effect or impact can be named precisely.

### Retrieval

**Definition:** Retrieval is the process of locating and bringing retained memory into a current context. Retrieval can be: deliberate, triggered, social, procedural, or system-mediated.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.13 · **Status:** Preferred term

### Retry

**Definition:** A retry repeats an attempted action after failure or uncertainty. Retries are safe only where: the failure is transient, the action is idempotent or otherwise protected, the retry is bounded, and added load will not worsen the failure.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.47 · **Status:** Preferred term

**Usage note:** Requires classification, bounds and duplicate-effect protection.

### Reversibility

**Definition:** Reversibility is the degree to which a decision and its consequences can be undone, compensated, contained or changed at acceptable cost. Reversibility is a property of the complete organisational effect, not only the software command.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.25 · **Status:** Preferred term

### Review

**Definition:** A structured examination of work, evidence, outcome or process against defined questions or criteria.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.36 · **Status:** Preferred term

### Reviewer

**Definition:** A Reviewer evaluates: evidence, compliance, quality, risk, or fitness. Review does not imply decision authority unless that authority is explicit.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.11 · **Status:** Preferred term

**Usage note:** Review does not imply decision authority unless explicitly granted.

### Risk

**Definition:** Risk combines uncertainty about events or conditions with the severity and distribution of potential consequences. Risk is not exhausted by probability multiplied by impact.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.29 · **Status:** Preferred term

### Robustness

**Definition:** Robustness is the ability to continue acceptable performance under a defined range of disturbance or variation without material reconfiguration.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.24 · **Status:** Preferred term

### Role

**Definition:** A role is an expected pattern of contribution, responsibility, authority and relationship within work. Roles help actors anticipate one another.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.19 · **Status:** Preferred term

### Rollback

**Definition:** Rollback is an attempt to restore a previous system or organisational state. Rollback is feasible only where: the prior state is known, intervening effects can be reversed, and external commitments do not make the state irrecoverable.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.45 · **Status:** Preferred term

**Usage note:** Not possible where intervening external effects cannot be reversed.

## S

### Safe State

**Definition:** A safe state is a condition in which unacceptable harm is controlled, even if ordinary service is unavailable.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.50 · **Status:** Preferred term

### Safety

**Definition:** Safety is the absence of unacceptable harm or loss arising from operation. Safety is not equivalent to reliability.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.27 · **Status:** Preferred term

**Usage note:** A system can perform an unsafe or illegitimate function reliably.

### Sandbox

**Definition:** A sandbox is a bounded environment that limits the consequence of experimentation.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.66 · **Status:** Preferred term

### Selection Effect

**Definition:** A selection effect occurs where the units receiving an intervention differ systematically from those that do not.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.43 · **Status:** Preferred term

### Self-Reinforcement

**Definition:** Self-reinforcement occurs where use of a capability increases the incentives, knowledge, infrastructure or coordination advantages supporting further use.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.71 · **Status:** Preferred term

### Semantic AI Memory

**Definition:** Semantic AI memory is retained generalised information or assertions derived from prior material.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.80 · **Status:** Qualified technical analogy

### Sense

**Definition:** The OI operational capability to notice, capture, recognise, qualify and route material signals and experience for organisational attention.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-SYN-001 §4.1; OI-BOK-001 · **Status:** Core OI operational capability — provisional

**Usage note:** Not equivalent to receiving data or generating notifications.

### Sequencing

**Definition:** Sequencing is the ordering of dependent activities.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.23 · **Status:** Preferred term

### Shadow Authority

**Definition:** Effective control over a decision that is not represented in the formal authority model.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §8 · **Status:** Project OI working term

**Usage note:** May sit with an expert, gatekeeper, interface default, founder or algorithmic recommendation.

### Shared Commitment

**Definition:** A shared commitment is the sufficiently distributed understanding that: a decision is effective, specified actors have obligations, dependencies must be managed, and the organisation will support the resulting coordinated response. Shared commitment can exist despite disagreement with the decision.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.11 · **Status:** Preferred term

### Shared State

**Definition:** Shared state is a sufficiently current and inspectable representation of: work progress, dependencies, decisions, exceptions, and relevant conditions. It is not necessarily one database or screen.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.29 · **Status:** Preferred term

### Signal

**Definition:** A cue, event or pattern that may indicate a material condition, change, risk, opportunity or need for response. A signal is relational. Its significance depends on: organisational purpose, context, thresholds, timing, risk, prior knowledge, and the consequences of missing it.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.4 · **Status:** Preferred term

### Single-Loop Learning

**Definition:** Single-loop learning corrects action or performance while preserving the underlying: goals, governing values, and assumptions.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.55 · **Status:** Preferred term

### Situation

**Definition:** The bounded combination of relevant entities, current state, recent events, constraints, goals, relationships and uncertainties within which organisational interpretation or response occurs.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §4.7 · **Status:** Preferred term

**Usage note:** Context characterises the situation and the conditions for interpreting and using information within it.

### Situational Context

**Definition:** The dimension of context through which relevance depends on the immediate organisational situation and operating conditions.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3.3 · **Status:** Preferred context dimension

**Usage note:** Distinct from situation, which is the bounded combination of entities, state, events, constraints, goals, relationships and uncertainty.

### Skill

**Definition:** A skill is a learned ability to perform a task or class of tasks. Expertise usually involves multiple skills plus: structured domain knowledge, pattern recognition, judgement, and adaptation to variation.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.8 · **Status:** Preferred term

**Usage note:** Individual or role-level ability; not organisational capability by itself.

### Slack

**Definition:** Available capacity or time that allows variation, recovery and adaptation without immediate system failure.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.41 · **Status:** Preferred term

### Spillover

**Definition:** A spillover is an effect of an intervention on actors or units outside the direct treatment or execution boundary.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.45 · **Status:** Preferred term

### Stakeholder Outcome

**Definition:** A stakeholder outcome is an outcome assessed from the perspective of a defined affected group or actor. Different stakeholders may experience the same intervention differently.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.19 · **Status:** Preferred term

### Standardisation

**Definition:** Standardisation is the creation of common rules, interfaces or practices to improve consistency and transfer. Standardisation can strengthen exploitation and inhibit exploration where applied indiscriminately.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.54 · **Status:** Preferred term

### State

**Definition:** The current condition of a system, entity, process or interaction.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §4.6 · **Status:** Preferred generic term

**Usage note:** Use qualified forms such as shared state, operational state or memory state where the domain matters.

### State Transition

**Definition:** A state transition is an attributable change from one recognised state to another.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.9 · **Status:** Preferred term

### Strategic Renewal

**Definition:** Strategic renewal is a material change to the organisation’s: direction, business model, capability base, or relationship with its environment.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.77 · **Status:** Preferred term

### Success Learning

**Definition:** Inquiry into why, under which conditions and through which mechanism a desired outcome occurred.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.69 · **Status:** Preferred term

### Success Trap

**Definition:** A success trap occurs where successful exploitation of existing knowledge reduces exploration, challenge and sensitivity to environmental change.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.72 · **Status:** Preferred term

### Summative Evaluation

**Definition:** Summative evaluation assesses overall merit, effectiveness or result at a defined stage or end point.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.69 · **Status:** Preferred term

### Supersession

**Definition:** The explicit replacement of one claim, rule, interpretation, decision or guidance item by another while preserving historical trace.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.31 · **Status:** Preferred term

### Superstitious Learning

**Definition:** Superstitious learning occurs where the organisation forms a causal belief from coincidental or weakly connected action and outcome.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.71 · **Status:** Preferred term

### Synchronisation

**Definition:** Synchronisation is the alignment of timing, state or readiness among interdependent activities.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.22 · **Status:** Preferred term

## T

### Tacit Knowledge

**Definition:** Tacit knowledge is knowledge that is difficult to articulate completely and is often inseparable from experience, perception, practice or relationship. Tacit does not simply mean undocumented.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.10 · **Status:** Preferred term

### Target

**Definition:** A target is a desired or required value for a measure or indicator.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.58 · **Status:** Preferred term

### Task

**Definition:** A task is a bounded activity with: purpose, expected output, owner, constraints, and completion condition. Completing a task does not prove that the wider dependency has been satisfied.

**Owner:** OI-BOK-005 · **Source:** OI-BOK-005 §3.2 · **Status:** Preferred term

### Temporal Context

**Definition:** The dimension of context that distinguishes what was true, recorded, effective, superseded, under review or expected across relevant time horizons.

**Owner:** OI-BOK-002 · **Source:** OI-BOK-002 §3.2 · **Status:** Preferred context dimension

**Usage note:** Distinct from historical context, which focuses on prior events and decisions that affect the present.

### Theory-in-Use

**Definition:** A theory-in-use is the governing pattern inferred from actual behaviour.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.59 · **Status:** Preferred term

### Theory of Change

**Definition:** An explicit account of how, why, for whom and under which conditions an intervention is expected to produce outcomes.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.29 · **Status:** Preferred term

### Threshold

**Definition:** A threshold is a value or condition that triggers: attention, decision, escalation, or intervention.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.59 · **Status:** Preferred term

### Transactive Memory System

**Definition:** A transactive memory system is a shared system for dividing, encoding, locating and retrieving knowledge across members, often summarised as knowing who knows what. It includes more than an expertise directory. It depends on differentiated knowledge, credible attribution and coordination.

**Owner:** OI-BOK-003 · **Source:** OI-BOK-003 §3.15 · **Status:** Preferred term

### Transformation

**Definition:** Project OI uses transformation only for substantial and multi-dimensional organisational change. The term should not be used automatically for every programme or technology adoption.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.78 · **Status:** Use cautiously

**Usage note:** Reserve for substantial, multi-dimensional organisational change.

## U

### Unanticipated Consequence

**Definition:** An unanticipated consequence is an effect the organisation did not predict or recognise before action. Unanticipated and unintended should not be treated as synonyms.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.9 · **Status:** Preferred term

### Unintended Consequence

**Definition:** An unintended consequence is an effect that was not part of the actor’s purpose. An unintended consequence may still have been anticipated.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.8 · **Status:** Preferred term

### Unlearning

**Definition:** The deliberate questioning and discontinuation of assumptions, routines, interpretations or practices that no longer fit the organisation’s purpose or conditions.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.30 · **Status:** Project OI working term

## V

### Value

**Definition:** Value is the significance or worth assigned to an outcome relative to: stakeholder, purpose, values, cost, and alternative use.

**Owner:** OI-BOK-007 · **Source:** OI-BOK-007 §3.17 · **Status:** Preferred term

### Variation

**Definition:** Variation is the production or presence of alternative practices, ideas, configurations or behaviours.

**Owner:** OI-BOK-009 · **Source:** OI-BOK-009 §3.67 · **Status:** Preferred term

### Veto

**Definition:** A veto is a bounded authority to block a decision or action.

**Owner:** OI-BOK-004 · **Source:** OI-BOK-004 §3.13 · **Status:** Preferred term

### Vicarious Learning

**Definition:** Vicarious learning is learning from the experience of other: people, teams, organisations, or systems.

**Owner:** OI-BOK-008 · **Source:** OI-BOK-008 §3.49 · **Status:** Preferred term

### Violation

**Definition:** A violation is a deliberate departure from a rule, constraint or procedure. A violation may be: reckless, routine, situational, necessary to preserve safety, or evidence that the procedure is unusable.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.37 · **Status:** Preferred term

## W

### Weak Signal

**Definition:** An early, incomplete or ambiguous indication of a potentially significant development. A weak signal may have: low confidence, low frequency, incomplete evidence, uncertain meaning, or limited organisational sponsorship.

**Owner:** OI-BOK-001 · **Source:** OI-BOK-001 §3.5 · **Status:** Preferred term

### Workaround

**Definition:** A workaround is a local action that restores or preserves immediate performance without correcting the source condition. Workarounds can be intelligent operational repair.

**Owner:** OI-BOK-006 · **Source:** OI-BOK-006 §3.38 · **Status:** Preferred term

---

## Chapter 10 Additions

### Organisational System

**Definition:** A bounded and persistent arrangement of people, relationships, structures, practices, technologies and external ties with sufficient identity and coherence to form orientation, coordinate response, receive feedback and alter future response.

**Owner:** OI-BOK-010 · **Source:** OI-BOK-010 v0.3 §7.1 · **Status:** Core unit-of-analysis term — provisional

**Usage note:** Preferred construct-level term for the focal unit. The claim boundary must specify purpose, membership, authority, memory, feedback receiver, persistence and level.

### Sociotechnical System

**Definition:** An implementation perspective describing how organisational capability is instantiated through interacting human, technical, structural and relational elements.

**Owner:** OI-BOK-010 · **Source:** OI-BOK-010 v0.3 §7.2 · **Status:** Preferred implementation perspective

**Usage note:** Related to but not identical with Organisational System.

### Outcome–Feedback Bridge

**Definition:** The connective sequence through which execution outputs interact with the environment to produce consequences that are observed, evaluated and made available as feedback suitable for learning.

**Owner:** OI-BOK-010 · **Source:** OI-BOK-010 v0.3 §6.3 · **Status:** Core connective mechanism — provisional

**Usage note:** Not an additional OI operational capability.

## 9. Critical Distinction Matrix

| Term A | Term B | Required distinction |
|---|---|---|
| **Event** | **Data Point** | An event occurs whether or not it is recorded; a data point is a representation of an event or state. |
| **Cue** | **Signal** | A cue begins interpretation; a signal is a cue, event or pattern treated as potentially material. |
| **Signal** | **Noise** | A signal may improve orientation or response; noise consumes attention without doing so in the relevant context. |
| **Attention** | **Organisational Orientation** | Attention allocates processing capacity; orientation is the resulting sufficiently aligned organisational account. |
| **Organisational Context** | **Context Window** | Organisational context supplies governed meaning; a context window is a technical token container. |
| **State** | **Organisational Context** | State is the current condition; context also includes purpose, history, relationships, authority, evidence and uncertainty. |
| **Organisational Context** | **Knowledge** | Context determines meaning and appropriate use; knowledge supplies understanding, know-how and judgement. |
| **Information** | **Knowledge** | Information can reduce uncertainty; knowledge can inform interpretation or action through understanding and judgement. |
| **Experience** | **Expertise** | Experience is exposure to events or practice; expertise is a domain-specific capacity developed through structured knowledge and sufficiently rich practice. |
| **Expertise** | **Knowledge Authority** | Expertise is capability; knowledge authority is the credibility and legitimacy a source holds for a particular claim or domain. |
| **Knowledge Authority** | **Decision Authority** | Knowledge authority informs; decision authority commits the organisation. |
| **Recommendation** | **Decision** | A recommendation proposes a course; a decision is an attributable and authorised commitment. |
| **Decision** | **Approval** | A decision creates organisational commitment; approval is a bounded consent right that may permit, reject or condition. |
| **Formal Authority** | **Real Authority** | Formal authority is the official right to decide; real authority is effective control in practice. |
| **Decision Commitment** | **Shared Commitment** | A decision commitment is created under authority; shared commitment is the distributed recognition that the decision is effective and creates obligations. |
| **Communication** | **Coordination** | Communication exchanges information or intent; coordination manages dependencies among interdependent contributions. |
| **Collaboration** | **Coordination** | Collaboration is joint work; coordination can also occur through standards, roles, schedules and interfaces without intensive co-creation. |
| **Task Completion** | **Dependency Satisfaction** | A task may end while the wider dependency remains unsatisfied. |
| **Coordination** | **Execution** | Coordination arranges interdependent contributions; execution performs and controls authorised work under actual conditions. |
| **Execution** | **Completion** | Execution is the performance and control of work; completion is the governed determination of how execution terminated. |
| **Completion** | **Outcome** | Completion describes execution status; outcome describes consequential change experienced after action. |
| **Reliability** | **Availability** | Reliability concerns continuity of acceptable service; availability concerns readiness to provide it when required. |
| **Reliability** | **Safety** | A system can perform a harmful function reliably; safety concerns absence of unacceptable harm. |
| **Robustness** | **Resilience** | Robustness tolerates defined variation; resilience sustains, recovers or extends viable performance under disruption and surprise. |
| **Fault** | **Error** | A fault is an adjudged or hypothesised cause; an error is a system state capable of leading to failure. |
| **Error** | **Failure** | An error exists within the system; failure is deviation from acceptable service at the system boundary. |
| **Rollback** | **Compensation** | Rollback attempts to restore a prior state; compensation performs a new action to address a prior effect. |
| **Output** | **Outcome** | An output is an immediate product or state transition; an outcome is a consequential change following intervention. |
| **Outcome** | **Impact** | Outcome covers consequential change; impact is reserved for broader, material or longer-term effects. |
| **Feedback** | **Organisational Learning** | Feedback supplies evidence about consequence; learning changes organisationally available understanding or future response. |
| **Repository** | **Organisational Memory** | A repository stores representations; organisational memory is a distributed system of retention, reconstruction, contestation and use. |
| **Reflection** | **Organisational Learning** | Reflection examines experience; learning requires a retained change in understanding or future response. |
| **Lesson** | **Organisational Capability** | A lesson is a scoped interpretation of experience; capability is a repeatable and governable capacity enacted through an organisational configuration. |
| **Capacity** | **Organisational Capability** | Capacity concerns how much work can be accommodated; capability concerns what can be performed, how and with what reliability. |
| **Skill** | **Organisational Capability** | Skill is primarily an individual or role-level ability; organisational capability requires integrated and distributed arrangements. |
| **Operational Capability** | **Dynamic Capability** | Operational capability performs current work; dynamic capability modifies, combines, redeploys or retires operational capabilities. |
| **Exploration** | **Exploitation** | Exploration searches and creates alternatives; exploitation refines and uses existing knowledge and capability. |
| **Resilience** | **Adaptation** | Resilience preserves viable performance through disturbance; adaptation changes the capability system for future conditions. |
| **Change** | **Adaptation** | Change is any alteration; adaptation is evidence-linked capability reconfiguration that improves or preserves responsible future response. |
| **Model Performance** | **AI-Enabled Organisational Capability** | Model performance is one capability element; organisational capability also requires human roles, authority, workflow, evidence, continuity, evaluation and exit. |

---

## 10. Project OI Working-Term Register

The following terms remain explicitly provisional and require final retention, refinement, merger or rejection.

| Working term | Owner | Current purpose |
|---|---|---|
| **Action Fidelity** | OI-BOK-006 | The degree to which actual execution preserves the purpose, authority, constraints and material conditions of the authorised commitment. |
| **Adaptation Coherence** | OI-BOK-009 | Project OI uses adaptation coherence as a working term for the degree to which changes across capability, authority, resources, identity and purpose remain mutually compatible. |
| **Agent Execution Envelope** | OI-BOK-006 | The bounded conditions under which an AI agent may operate, including objective, acting principal, identity, tools, data, authority, budget, time, state, evidence, prohibited actions, approvals, stop conditions and re… |
| **Attentional Debt** | OI-BOK-001 | The accumulated organisational consequence of repeatedly deferring, fragmenting or suppressing signals that require interpretation or response. This is a Project OI working term, not an established construct. |
| **Borrowed Capability** | OI-BOK-009 | Performance enabled materially by an external provider, expert, platform, model, partner or temporary support arrangement that the organisation cannot reproduce, govern or sustain independently. |
| **Capability Debt** | OI-BOK-009 | Accumulated skill gaps, outdated routines, hidden dependencies, weak ownership, deferred maintenance and unsupported workarounds that reduce the organisation’s future ability to perform or adapt. |
| **Capability Maturity** | OI-BOK-009 | The degree to which a capability is established, repeatable, understood, governable and resilient under stated conditions. It does not imply one universal linear maturity scale. |
| **Capability Opacity** | OI-BOK-009 | The degree to which the organisation cannot explain or inspect how a capability performs, where it depends, why it fails or what would be required to reproduce it. |
| **Capability Portability** | OI-BOK-009 | The degree to which a capability can move across people, units, technologies, providers or locations without losing its essential function, authority and evidence. |
| **Capability Sovereignty** | OI-BOK-009 | The degree to which the organisation retains legitimate control over purpose, authority, essential knowledge, operational continuity, portability and exit for a capability. It does not imply that every capability elem… |
| **Completion Integrity** | OI-BOK-006 | The degree to which a completion state accurately represents work performed, required effects, unresolved ambiguity, evidence and receiving acceptance. |
| **Connection Quality** | OI-BOK-010 (reserved) | The reliability and integrity with which one Organisational Intelligence capability or state is converted into, accepted by and made usable within the next relevant capability or state. |
| **Context Decay** | OI-BOK-002 | The reduction in usefulness or validity of context as organisational conditions change. |
| **Context Drift** | OI-BOK-002 | Gradual change in surrounding conditions while the focal artefact or representation appears stable. |
| **Context Laundering** | OI-BOK-002 | The process by which uncertain, inferred or low-authority material becomes presented as established context after passing through summaries, systems or repeated reuse. |
| **Coordination Debt** | OI-BOK-005 | Project OI uses coordination debt as a working term for accumulated unresolved dependencies, unclear ownership, brittle workarounds and inconsistent interfaces that make future collective action harder and more expens… |
| **Coordination Load** | OI-BOK-005 | Project OI uses coordination load as a working term for the time, attention and interaction required to manage dependencies. Coordination load may be necessary. |
| **Evidence-Bearing Context** | OI-BOK-002 | Context that preserves enough source, validity, support, contradiction, confidence and interpretation status for material beliefs to be inspected and challenged. |
| **Expertise Dependency** | OI-BOK-003 | The degree to which an organisational capability relies on continued access to one or a small number of people. |
| **Expertise Routing** | OI-BOK-003 | The process of matching an organisational knowledge need with relevant, accessible and credible expertise, then bringing that expertise into interpretation, decision or work. |
| **Feedback Completeness** | OI-BOK-007 | Project OI uses feedback completeness as a working term for the degree to which material positive, negative, intended, unintended and distributional consequences are represented sufficiently for evaluation. Complete f… |
| **Handoff Integrity** | OI-BOK-005 | The degree to which a handoff preserves the information and conditions required for the receiving actor to continue responsibly. |
| **Learning Persistence** | OI-BOK-008 | The degree to which a learning-induced change remains available and influential across time, personnel and repeated work. |
| **Memory Contamination** | OI-BOK-008 | The introduction or propagation of incorrect, misleading, unauthorised or context-stripped material into organisational memory. |
| **Memory Decay** | OI-BOK-008 | Loss of detail, accessibility, confidence, currentness or practical usefulness over time. |
| **Memory Drift** | OI-BOK-008 | Project OI uses memory drift as a working term for gradual divergence between the retained representation and the organisation’s current understanding, practice or environment. |
| **Memory Item** | OI-BOK-008 | A bounded retained representation with identifiable source, time, scope, status and relationship to organisational experience. |
| **Minimum Sufficient Context** | OI-BOK-002 | The smallest context set that allows the intended actor or system to form a responsible orientation and perform authorised work while retaining access to deeper evidence where needed. |
| **Operational Debt** | OI-BOK-006 | Accumulated brittle workarounds, untested recovery, hidden dependencies, stale procedures, manual repair and deferred reliability work that increase future execution risk and cost. |
| **Shadow Authority** | OI-BOK-004 | Effective control over a decision that is not represented in the formal authority model. |
| **Unlearning** | OI-BOK-008 | The deliberate questioning and discontinuation of assumptions, routines, interpretations or practices that no longer fit the organisation’s purpose or conditions. |

---

## 11. Controlled and Discouraged Usage

| Term or phrase | Usage rule |
|---|---|
| **Result** | Avoid where output, implementation outcome, outcome, effect or impact can be named precisely. |
| **Context window** | Use only for the technical token container. Do not use as a synonym for organisational context. |
| **Human in the loop** | Avoid as a governance description. Name the human role, expertise, evidence, stage, authority and ability to alter the result. |
| **AI decision** | Use only where the organisation has delegated a bounded determination and remains accountable for the design. |
| **AI memory** | Use for technical retained state or retrieval mechanisms. Do not treat it as organisational memory by itself. |
| **Done** | Avoid as the only terminal state for material execution. Use specific completion and acceptance states. |
| **Success** | Specify the stakeholder, criterion, comparison and time horizon. |
| **Impact** | Reserve for material broader or longer-term effects. |
| **Transformation** | Reserve for substantial, multi-dimensional organisational change. |
| **Maturity score** | No universal Project OI maturity score is approved. Use descriptive capability evidence and conditions. |
| **Operational capability** | Use the generic Chapter 9 meaning for capability that performs current work. Use “OI Operational Capability Model” for Sense–Know–Choose–Mobilise–Learn–Adapt. |
| **Triple-loop learning** | Not a core Project OI term because meanings vary. Use learning about learning where that is the intended concept. |
| **Shared understanding** | Use carefully. Prefer organisational orientation for the organisation-level account and common understanding for the coordination condition. |
| **Organisational Intelligence layer** | Avoid. OI is an emergent organisation-level capability, not a separate platform or architecture layer. |
| **Business brain / second brain** | Avoid as a formal BOK construct. They imply a centralised container and obscure distributed sociotechnical capability. |
| **Automation** | Do not treat automation volume or technical capability as organisational capability, authority or reliable outcome. |

---

## 12. Terminology Dispositions and Remaining Research Questions

OI-BOK-010 and OI-BOK-REVIEW-001 have now established working dispositions. The terms below remain empirically or conceptually open where stated, but they no longer block the first BOK release once the listed scope controls are applied.

### 12.1 Connection Quality

Retained as a provisional integrative research hypothesis and diagnostic lens. It is not a seventh capability, a constitutive requirement or a universal score.

### 12.2 Debt Term Family

Retain the four debt terms as chapter-scoped diagnostic metaphors. Do not create one higher-order OI Debt construct at this stage.

### 12.3 Context Failure Terms

Context decay, drift and laundering overlap with memory decay, drift and contamination. The final glossary review should preserve domain boundaries and remove false synonymy.

### 12.4 Borrowed Capability

Retained only as a provisional diagnostic lens. Compare with outsourcing, ecosystem capability, resource dependence and externalised competence in post-BOK research.

### 12.5 Capability Sovereignty

Retained as a narrow governance lens concerning control of critical purpose, authority, continuity, evidence, portability and exit. It does not imply that every capability should be internal.

### 12.6 Capability Opacity

Retained as a provisional diagnostic risk term. Distinguish legitimate abstraction from harmful inability to inspect, explain, reproduce or exit the capability.

### 12.7 Capability Maturity

Retained only as a cautious descriptive term. No linear maturity model or score is implied.

### 12.8 Unlearning

Retained as a working term for deliberate release or replacement of governing assumptions or response patterns. It remains distinct from forgetting, supersession, deletion and capability retirement.

### 12.9 Learning About Learning

Retained as a learning-process qualifier. Do not introduce a separate capability or rely on the ambiguous term triple-loop learning.

### 12.10 Collective Response and Collective Action

Collective response is the higher-order deliberate organisational response; collective action is the connected contribution through which response may be enacted.

### 12.11 Organisational System and Sociotechnical System

Use Organisational System for the focal construct-level unit and Sociotechnical System for the implementation perspective.

### 12.12 Responsible OI and Instrumental OI

Retain one descriptive OI construct. Use instrumentally capable, responsibly exercised or irresponsibly governed as descriptors rather than separate scores.

---

## 13. Application Rules for Final Release Work

### 13.1 Release-Candidate Chapters Are Source-Controlled

The v0.3 release-candidate chapters are the current semantic sources. Any final terminology change must begin in the owning chapter and then be propagated through this glossary and the derived registers.

### 13.2 OI-BOK-010 and the Release Record Use This Glossary as Their Baseline

The final release proof may:

- refine;
- merge;
- or reject

terms.

It should not introduce uncontrolled synonyms.

### 13.3 Proposition and Diagnostic Registers Use Preferred Terms

The next registers should map propositions, failure modes, quality dimensions and indicators to the preferred terms and owners in this glossary.

### 13.4 Product Terminology Remains Separate

A BOK term does not become:

- a product object;
- database entity;
- component;
- API;
- user-facing label;
- or architecture owner

without the deferred product-architecture reconciliation.

### 13.5 Source Terms May Remain in Citations

Original terminology should be preserved when discussing a source’s theory or findings.

Project OI interpretation should use the preferred glossary term.

---

## 14. Change Control

A glossary change should record:

```text
Term
Current definition
Proposed definition
Reason
Affected chapters
Affected propositions
Affected failure modes
Source evidence
Owner
Review decision
```

A new term should be added only where:

1. an existing term cannot represent the construct without material loss;
2. the term has a clear semantic owner;
3. it does not duplicate a mechanism, condition or failure already represented;
4. its status is explicit;
5. and downstream impacts are identified.

---

## 15. Next Active Artefact

The next active BOK completion artefact is:

> **OI-BOK-RELEASE-001 — Body of Knowledge Completion Record**

It should:

- extract every proposition from OI-BOK-001 through OI-BOK-009;
- assign a stable proposition ID;
- map each proposition to preferred glossary terms;
- preserve source chapter and theoretical basis;
- distinguish source-supported synthesis from Project OI hypothesis;
- identify duplicates and conflicts;
- assess current confidence;
- and prepare the proposition set for OI-BOK-010 and adversarial review.

The blog, product-implication, implementation-pattern and architecture-reconciliation workstreams remain paused.

---

## 16. Editorial Guardrail

> **Use the glossary to reduce ambiguity, not to imply false certainty. Project OI terms remain working research constructs until the final synthesis and adversarial review establish a coherent first BOK release.**
