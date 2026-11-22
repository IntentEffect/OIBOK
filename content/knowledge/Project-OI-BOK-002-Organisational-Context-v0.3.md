# Project OI Body of Knowledge

# Chapter 2 — Organisational Context

**Artefact ID:** OI-BOK-002  
**Version:** 0.3  
**Status:** Bibliographically normalised corrected working synthesis; pending final consistency proof and completion record
**Inquiry:** OI-INQ-001 — What is Organisational Intelligence?  
**Domain:** Orient
**Primary function:** Contextualisation between Sense and Know
**Related capabilities:** Sense, Know
**Previous chapter:** OI-BOK-001 — Signals and Attention  
**Canonical status:** Candidate, not yet canonical  
**Empirical status:** Literature-grounded; Project OI synthesis not independently validated  
**Date:** 15 August 2026

---

## 1. Purpose

This chapter examines **organisational context**: the conditions that allow information, experience, knowledge and events to acquire meaning inside an organisation.

Its central question is:

> **What must an organisation know about a signal, situation, decision or task before it can interpret and use it appropriately?**

The previous chapter established that organisations do not respond to every event or every item of information. They respond to what their attention structures make visible, relevant, discussable and actionable.

Attention alone is not enough.

A signal may reach the right person and still be misunderstood. A document may be retrieved and still be applied incorrectly. A decision may be accurately recorded and still be unsuitable for the current situation. An AI system may receive a large context window and still lack the organisational conditions that make the information meaningful.

Context is the layer through which a signal becomes part of organisational orientation.

```text
Signal or experience
        ↓
Attention
        ↓
Contextualisation
        ↓
Interpretation
        ↓
Organisational orientation
```

This chapter seeks to establish:

- what organisational context is;
- how it differs from information, metadata, knowledge and memory;
- which forms of context matter;
- how context is created, carried, lost, inherited and revised;
- why context cannot be captured completely;
- how context moves across organisational boundaries and handoffs;
- how context should be assembled for people, workflows and AI systems;
- and what stronger contextual capability may contribute to Organisational Intelligence.

---

## 2. Core Finding

The central finding is:

> **Information becomes organisationally useful only when it is situated within the conditions that determine its meaning, relevance, authority and appropriate use.**

Context is therefore not a decorative layer added after information has been retrieved.

It influences:

- what an event means;
- whether a source is relevant;
- which interpretation is plausible;
- whose expertise should be involved;
- which policy applies;
- who has authority;
- what constraints exist;
- what happened previously;
- what has changed since then;
- which outcome matters;
- and what response is proportionate.

Gary Johns defined context in organisational research as situational opportunities and constraints that affect both the occurrence and meaning of organisational behaviour and the relationships among organisational variables.[^1] This is important because it prevents context from being reduced to background description.

Context can change the meaning of the focal object itself.

The same customer complaint may indicate:

- an isolated misunderstanding;
- a recurring service failure;
- a contractual breach;
- a safety problem;
- an emerging product defect;
- or a coordinated campaign.

The words in the complaint may be identical.

The organisational meaning is not.

---

## 3. Working Definition

Project OI currently defines **organisational context** as:

> **The relational, temporal, situational, purposive and authoritative conditions that determine how organisational information, knowledge, events, decisions and actions should be interpreted and used.**

This definition contains five deliberate elements.

### 3.1 Relational

Meaning depends on relationships.

A document may relate to:

- a customer;
- a contract;
- a project;
- a policy;
- a prior decision;
- a person;
- a workflow;
- a risk;
- an outcome;
- or another source.

Without those relationships, the document may be technically available but organisationally ambiguous.

### 3.2 Temporal

Context changes over time.

The organisation must distinguish:

- what was true when a decision was made;
- what is true now;
- what has been superseded;
- what remains under review;
- what is expected to become true;
- and which time horizon matters.

### 3.3 Situational

The relevance of information depends on the immediate situation.

The same policy, customer history or metric may matter differently during:

- routine work;
- a customer escalation;
- an incident;
- a legal review;
- a strategic decision;
- or an AI-assisted workflow run.

### 3.4 Purposive

Context is assembled for something.

Relevant context depends on:

- the question;
- the objective;
- the decision;
- the audience;
- the required output;
- the risk;
- and the definition of done.

There is no universally complete context for an organisation.

There is context sufficient for a particular purpose.

### 3.5 Authoritative

Organisational meaning is shaped by authority and legitimacy.

A person or system may need to know:

- which source is authoritative;
- who owns the decision;
- which policy governs;
- which exception was approved;
- who may act;
- and what requires escalation.

Context without authority can produce a plausible but unauthorised response.

---

## 4. Context and Adjacent Concepts

Context is often used as a catch-all term. Project OI distinguishes it from several neighbouring concepts.

### 4.1 Data

Data is a recorded representation of an event, state or observation.

Examples:

- a price;
- a timestamp;
- an error code;
- a customer identifier;
- a metric value.

Data does not explain why the representation matters.

### 4.2 Information

Information is data organised or communicated in a form capable of reducing uncertainty for some recipient.

Information may still be insufficiently situated for organisational use.

### 4.3 Metadata

Metadata describes the properties of an information object.

Examples:

- author;
- creation date;
- document type;
- access classification;
- version;
- source system.

Metadata can supply part of the context, but context includes conditions beyond the information object itself.

### 4.4 Knowledge

Knowledge includes understanding, capability, judgement and justified or experienced belief that can inform action.

Knowledge may be explicit, tacit, embodied, distributed or embedded in practice.

### 4.5 Organisational Memory

Organisational memory concerns how experience is retained, located, reconstructed and used across time.

Memory supplies potential context.

It does not determine which part of that memory is relevant to the present purpose.

### 4.6 State

State describes the current condition of a system, entity, process or interaction.

Examples:

- an invoice is overdue;
- a workflow run is paused;
- a customer is under review;
- an approval is pending.

State is a critical part of context, but context also includes history, relationships, authority, purpose and uncertainty.

### 4.7 Situation

Anind Dey’s operational definition for context-aware computing describes context as information that can characterise the situation of an entity, where an entity may be a person, place or object relevant to an interaction.[^2]

Project OI uses **situation** to refer to the bounded combination of:

- relevant entities;
- current state;
- recent events;
- constraints;
- goals;
- relationships;
- and uncertainties

within which organisational interpretation or response occurs.

### 4.8 Orientation

Orientation is the sufficiently shared or aligned organisational view of:

- what is happening;
- why it matters;
- what remains uncertain;
- and what should shape the response.

Context is an input to orientation.

It is not orientation by itself.

### 4.9 Context Window

For a language model, a context window is the set of tokens available during inference.

That is not equivalent to organisational context.

A context window is a technical container.

Organisational context is the selected, structured and governed meaning required for organisational use.

---

## 5. Context Changes Meaning

Context matters because organisational meaning is not contained entirely inside the focal information object.

### Example 1 — The Same Number

A revenue figure of $200,000 may indicate:

- a record month;
- a material decline;
- a forecasting error;
- an incomplete period;
- one unusually large customer;
- or a currency-conversion problem.

The number remains the same.

The meaning depends on:

- comparison period;
- target;
- source;
- composition;
- timing;
- and business conditions.

### Example 2 — The Same Decision

“Refund the customer” may be appropriate where:

- the business made a clear error;
- the amount is within delegated authority;
- the customer has not abused the policy;
- no regulatory reporting is required;
- and the decision is reversible.

The same instruction may be inappropriate where those conditions differ.

### Example 3 — The Same Policy

A policy document may be:

- current;
- superseded;
- applicable only to one jurisdiction;
- overridden by contract;
- subject to an approved exception;
- or irrelevant to the present role.

Retrieving the policy text does not establish that it governs the situation.

### Example 4 — The Same AI Output

An AI recommendation may be useful as:

- a hypothesis;
- a draft;
- a triage suggestion;
- a decision input;
- or an authorised action,

depending on:

- model reliability;
- source evidence;
- risk;
- user role;
- workflow configuration;
- and approval requirements.

The content of the recommendation is only one part of its organisational meaning.

---

## 6. Theoretical Foundations

### 6.1 Context as Opportunity and Constraint

Johns argues that context shapes both the occurrence and meaning of organisational behaviour.[^1] It can also explain why apparently similar relationships produce different outcomes in different settings.

This creates two requirements for Project OI.

First, organisational knowledge should not be represented as though it has one context-free meaning.

Second, systems should preserve the conditions under which a claim, decision, rule or practice was valid.

### 6.2 Sensemaking

Weick, Sutcliffe and Obstfeld describe sensemaking as the process through which circumstances are turned into an explicitly comprehensible situation that can support action.[^3]

Context is central to this process because cues do not interpret themselves.

Organisational actors use:

- identity;
- language;
- prior experience;
- social interaction;
- current commitments;
- expectations;
- and action

to construct a plausible account.

Project OI therefore treats contextualisation as partly factual and partly interpretive.

It should preserve both:

- the conditions and evidence available;
- and the account formed from them.

### 6.3 The Knowing Organisation

Choo connects sensemaking, knowledge creation and decision-making as complementary organisational information processes.[^4]

Through this lens:

- context helps the organisation interpret change;
- interpretation helps create or revise knowledge;
- and understanding and knowledge are then focused on a course of action.

This closely supports the Project OI position that context is not an endpoint.

Its organisational value is realised when it contributes to orientation and response.

### 6.4 Situated Action

Lucy Suchman’s work challenges the assumption that action can be fully specified in advance through plans or rules. Plans operate as resources for situated action rather than complete scripts for what will occur.[^5]

This matters for organisational and AI systems.

A procedure cannot anticipate every:

- exception;
- local condition;
- interaction;
- material constraint;
- or change in circumstance.

The practical implication is not that organisations should abandon plans.

It is that systems must preserve enough situational awareness, authority and escalation capability for plans to be adapted responsibly.

### 6.5 Distributed Cognition

Edwin Hutchins shows how cognitive activity can be distributed across people, artefacts, representations and culturally organised activity systems.[^6]

Organisational context therefore does not reside only:

- in one person’s mind;
- in one database;
- or in one document.

It may be carried across:

- role expectations;
- shared representations;
- tools;
- routines;
- physical arrangements;
- language;
- and coordinated practice.

This supports a sociotechnical view of context.

### 6.6 Shared Context for Knowledge Creation

Nonaka and Konno’s concept of **ba** describes a shared physical, virtual or mental space in which relationships emerge and knowledge is created.[^7] Their work explicitly argues that knowledge cannot be separated cleanly from the context in which it is created and used.

This is an important boundary for organisational knowledge systems and similar tools.

Capturing the explicit output of a knowledge-creation process does not reproduce:

- the relationships;
- trust;
- shared experience;
- practical engagement;
- or tacit understanding

that helped create it.

### 6.7 Boundary Objects

Star and Griesemer describe boundary objects as objects that are adaptable enough to support different local viewpoints while remaining robust enough to maintain a common identity across them.[^8]

This provides a useful model for cross-functional organisational context.

A customer record, product map, risk register, workflow, case file or design specification may serve as a shared object while carrying different local meanings for:

- sales;
- operations;
- finance;
- legal;
- engineering;
- and customers.

The design challenge is not always to force one complete interpretation.

It may be to preserve enough shared identity for coordination while allowing legitimate local context.

---

## 7. The Dimensions of Organisational Context

Project OI proposes the following working taxonomy.

It is an explanatory instrument, not yet a validated ontology.

### 7.1 Purpose Context

Why is the information being used?

Includes:

- organisational objective;
- user intent;
- task goal;
- desired outcome;
- question being answered;
- and definition of done.

Purpose determines relevance.

### 7.2 Entity Context

What organisational objects are involved?

Examples:

- customer;
- employee;
- supplier;
- product;
- contract;
- project;
- system;
- policy;
- case;
- incident;
- decision;
- workflow;
- and outcome.

### 7.3 Relationship Context

How are those entities related?

Examples:

- customer belongs to segment;
- contract governs service;
- decision supersedes decision;
- workflow implements policy;
- employee holds authority;
- complaint concerns product;
- outcome resulted from response.

Relationships often provide more organisational meaning than the objects in isolation.

### 7.4 Temporal Context

When was the information true, created, observed, approved or used?

Includes:

- event time;
- recording time;
- effective dates;
- expiry;
- version;
- sequence;
- duration;
- recency;
- and expected future change.

### 7.5 Historical Context

What happened previously that affects current interpretation?

Includes:

- prior incidents;
- decisions;
- exceptions;
- commitments;
- failed attempts;
- customer history;
- and organisational learning.

### 7.6 Situational Context

What is happening now?

Includes:

- current state;
- active constraints;
- urgency;
- affected scope;
- dependencies;
- available resources;
- and operational conditions.

### 7.7 Actor and Role Context

Who is involved, and in what capacity?

Includes:

- identity;
- role;
- expertise;
- responsibility;
- authority;
- interests;
- proximity;
- and relationship to the issue.

### 7.8 Authority and Governance Context

What may legitimately happen?

Includes:

- permission;
- delegation;
- approval;
- applicable policy;
- legal constraint;
- risk classification;
- escalation;
- and audit requirement.

### 7.9 Source and Evidence Context

Why should the information be trusted?

Includes:

- source;
- provenance;
- method;
- confidence;
- corroboration;
- contradiction;
- known limitations;
- and distinction between fact, interpretation and inference.

### 7.10 workflow and Decision Context

Where is the information situated in organisational work?

Includes:

- current workflow stage;
- prior handoffs;
- decision under consideration;
- options;
- rationale;
- approvals;
- completion rule;
- and downstream effects.

### 7.11 Social and Cultural Context

What shared norms, language and assumptions affect interpretation?

Includes:

- vocabulary;
- identity;
- trust;
- incentives;
- informal practice;
- power;
- psychological safety;
- and accepted ways of working.

### 7.12 External Context

Which environmental conditions matter?

Examples:

- market;
- regulation;
- competitor behaviour;
- technology change;
- economic conditions;
- supplier conditions;
- customer expectations;
- and public events.

### 7.13 Technical Context

What technical conditions affect use?

Includes:

- source-system state;
- model and provider;
- software version;
- tool availability;
- schema;
- permissions;
- integration health;
- and known failure modes.

### 7.14 Risk and Consequence Context

What could happen if the information is wrong, incomplete, delayed or misapplied?

Includes:

- impact;
- likelihood;
- reversibility;
- detectability;
- affected stakeholders;
- and time sensitivity.

---

## 8. Context Is Layered

Organisational context operates at several nested levels.

```text
Environment
    ↓
Organisation
    ↓
Workspace or business domain
    ↓
Customer, project, product or case
    ↓
workflow or process
    ↓
Task, decision or workflow run
    ↓
Conversation or interaction
    ↓
Current moment
```

### 8.1 Environmental Context

Conditions outside the organisation.

### 8.2 Organisational Context

Purpose, policies, structure, culture, strategy and shared vocabulary.

### 8.3 Workspace or Domain Context

The bounded area in which a group works.

Examples:

- finance;
- customer service;
- software delivery;
- a client engagement;
- or a local organisational workspace.

### 8.4 Object Context

Context linked to a specific:

- customer;
- project;
- product;
- contract;
- case;
- or system.

### 8.5 workflow Context

The state, rules, resources and evidence relevant to a recurring process.

### 8.6 run Context

The specific conditions applying to one execution.

Examples:

- objective;
- participants;
- inputs;
- model pool;
- permissions;
- budget;
- approvals;
- and current state.

### 8.7 Interaction Context

The context of a conversation, message, request or interface state.

### 8.8 Momentary Context

The immediate circumstances at the point of interpretation or action.

Context may inherit downward from broader layers, but inheritance should not be assumed to be complete or conflict-free.

A global policy may be narrowed by:

- jurisdiction;
- contract;
- approved exception;
- workflow configuration;
- or incident state.

---

## 9. Context Is Relational, Not a Packet

Organisations often attempt to solve context problems by creating a larger document, prompt or “context pack”.

That can be useful.

It can also flatten the relationships that create meaning.

A context packet tends to imply:

- one boundary;
- one audience;
- one moment;
- one interpretation;
- and one complete set of relevant material.

In practice, context is better understood as a **purpose-bound view over a connected organisational system**.

The same underlying organisational knowledge may produce different context views for:

- an executive deciding whether to intervene;
- a frontline employee responding to a customer;
- a finance reviewer checking authority;
- a workflow AI agent preparing a recommendation;
- or an auditor reconstructing what happened.

The underlying sources may be shared.

The selection, detail, permissions and emphasis should differ.

This suggests the principle:

> **Store context as relationships, state and provenance; assemble it as a bounded view for a particular purpose.**

---

## 10. Context Is Temporal

A major organisational failure is presenting historically correct information as though it remains currently valid.

### 10.1 Context Decay

Project OI uses **context decay** as a working term for the reduction in usefulness or validity of context as organisational conditions change.

Context may decay because:

- a policy changes;
- an employee leaves;
- a customer renegotiates;
- a model is replaced;
- a workflow changes;
- a risk expires;
- a source is corrected;
- or the organisation learns something new.

### 10.2 Context Drift

**Context drift** occurs where the surrounding conditions change gradually while the focal artefact remains apparently stable.

Examples:

- an old process guide remains in use after several informal workarounds;
- a customer profile no longer reflects current behaviour;
- an AI agent retains instructions based on an earlier operating model;
- a metric retains its name while its calculation changes.

### 10.3 Temporal Confusion

Temporal confusion occurs when a system cannot distinguish:

- event time from recording time;
- current state from historical state;
- planned from actual;
- effective date from publication date;
- or original belief from later knowledge.

### 10.4 Decision-Time Context

A defensible decision record should preserve what was known and believed **at the time**, not only what became known later.

Without this distinction, organisations create hindsight narratives that distort learning and accountability.

### 10.5 Supersession

A context system should support explicit relationships such as:

- supersedes;
- valid from;
- valid until;
- replaced by;
- exception to;
- under review;
- and historically applicable.

Deletion alone destroys the organisation’s ability to reconstruct prior meaning.

---

## 11. Context Is Partly Tacit and Situated

Not all context can be made explicit.

Experienced people use:

- embodied skill;
- pattern recognition;
- social knowledge;
- practical judgement;
- timing;
- local language;
- and awareness of subtle constraints

that may be difficult to articulate fully.

Suchman’s situated-action perspective demonstrates why generic plans cannot exhaustively determine real action.[^5] Hutchins similarly shows that cognition is distributed through culturally and materially organised practice.[^6]

This creates a critical guardrail:

> **A context system should improve access to relevant organisational conditions without claiming to reproduce the whole situation.**

The organisation should distinguish:

- what has been explicitly represented;
- what remains tacit;
- who may hold missing expertise;
- what requires observation or interaction;
- and when the system should escalate rather than infer.

### Practical Implications

A useful context view may include:

- the relevant expert;
- a note that the case contains tacit judgement;
- examples;
- prior exceptions;
- and a path for clarification.

It should not pretend that a summary has captured the full expertise of the person who created it.

---

## 12. Context Across Organisational Boundaries

Context is frequently lost when work moves between:

- teams;
- functions;
- organisations;
- people and software;
- humans and AI;
- strategy and execution;
- or one workflow stage and another.

### 12.1 Handoff Loss

The sender knows more than the artefact communicates.

The receiver sees:

- the task;
- but not the rationale;
- the output;
- but not the assumptions;
- the decision;
- but not the alternatives;
- the exception;
- but not the conditions that made it legitimate.

### 12.2 Translation Loss

Different groups use different:

- vocabulary;
- categories;
- priorities;
- measures;
- and definitions of success.

A shared object may be interpreted differently across those groups.

Boundary-object research shows that coordination does not always require complete consensus.[^8] It may require an artefact that preserves enough common identity while allowing legitimate local meaning.

### 12.3 Summary Loss

Summaries improve accessibility by reducing detail.

They may also remove:

- dissent;
- uncertainty;
- source boundaries;
- temporal conditions;
- minority evidence;
- and exceptions.

### 12.4 Interface Loss

A software interface may display only the fields its designers anticipated.

Relevant local context may remain:

- in conversation;
- in an attachment;
- in physical practice;
- in another system;
- or in a person’s memory.

### 12.5 Automation Loss

Automation can move work rapidly while stripping away the contextual repair that humans previously performed during handoffs.

The process may appear more efficient while becoming less capable of handling exceptions.

---

## 13. Context in AI Systems

AI makes organisational context both more valuable and more difficult to manage.

### 13.1 Context Window Is Not Context Capability

A larger context window increases the amount of material a model can receive.

It does not establish that the system can:

- retrieve the right material;
- distinguish authority;
- understand organisational relationships;
- identify stale content;
- preserve permissions;
- recognise missing tacit knowledge;
- or use every item reliably.

Research on long-context language models has shown that performance can vary depending on where relevant information appears within the context, with models often using information near the beginning or end more reliably than information in the middle.[^9]

More context can therefore create the appearance of completeness while reducing focus.

### 13.2 Context Is Finite

Anthropic describes context engineering as the curation and maintenance of the information available to a model during inference, treating context as a finite resource with diminishing returns.[^10]

For Organisational Intelligence, the important shift is:

> **The objective is not maximum context. It is the minimum sufficient, high-integrity context required for a governed purpose.**

### 13.3 Just-in-Time Context

Long-lived AI agents and workflows should retrieve context as needed rather than preload every potentially relevant source.

Just-in-time context can improve:

- relevance;
- freshness;
- permission enforcement;
- token efficiency;
- and traceability.

It also requires strong retrieval and selection rules.

### 13.4 Structured Memory

Long-horizon work requires mechanisms for retaining:

- decisions;
- progress;
- unresolved questions;
- evidence;
- commitments;
- and state

across interactions and context resets.

Current agent-harness research increasingly uses structured handoff artefacts, compaction and memory to preserve continuity across long-running tasks.[^11]

### 13.5 AI Context Can Be Wrong

AI context may contain:

- stale memory;
- incorrect inference;
- poisoned content;
- duplicated facts;
- conflicting instructions;
- untrusted tool output;
- or context belonging to another user or purpose.

Context should therefore carry:

- provenance;
- trust classification;
- permissions;
- temporal status;
- and validation state.

### 13.6 AI Cannot Reliably Infer Missing Organisational Context

A capable model can generate a plausible explanation from incomplete context.

Plausibility is not evidence that the missing organisational conditions were reconstructed correctly.

The system should identify:

- context supplied;
- context inferred;
- context missing;
- and context requiring human confirmation.

### 13.7 Context Engineering Is Organisational Design

For enterprise and SMB use, context engineering is not only prompt construction.

It involves decisions about:

- what the organisation represents;
- which sources are authoritative;
- how memory is governed;
- which relationships are modelled;
- what can be retrieved;
- who may see it;
- how conflicts are handled;
- and what remains attributable.

Those are organisational architecture decisions.

---

## 14. Context Failure Modes

### 14.1 Context Absence

Relevant conditions were never captured or made available.

### 14.2 Context Fragmentation

Relevant pieces exist in separate people, documents or systems and are not connected.

### 14.3 Context Overload

Too much material is supplied without sufficient relevance, hierarchy or purpose.

### 14.4 Context Staleness

The information was once valid but no longer reflects current conditions.

### 14.5 Context Drift

The surrounding situation changes while the artefact appears unchanged.

### 14.6 Context Collapse

Distinct audiences, situations or interpretations are merged into one representation that loses important boundaries.

### 14.7 Context Stripping

A handoff, summary or automation removes rationale, constraints, uncertainty or history.

### 14.8 Context Substitution

A proxy is treated as the full context.

Examples:

- search results substitute for memory;
- a dashboard substitutes for situational awareness;
- a profile substitutes for customer understanding;
- a prompt substitutes for organisational knowledge.

### 14.9 Context Laundering

Project OI uses **context laundering** as a working term for the process by which uncertain, inferred or low-authority material becomes presented as established context after passing through summaries, systems or repeated reuse.

### 14.10 Context Poisoning

Incorrect or malicious information enters a context source and influences later interpretation or action.

### 14.11 Context Leakage

Information crosses an inappropriate:

- user;
- tenant;
- role;
- case;
- purpose;
- or confidentiality boundary.

### 14.12 Authority Blindness

The context includes content but not who may decide, approve or act.

### 14.13 Role Blindness

The same view is supplied to every participant without regard to:

- responsibility;
- expertise;
- authority;
- or need to know.

### 14.14 Temporal Blindness

The system does not identify whether information is current, historical, planned or superseded.

### 14.15 Purpose Drift

Context assembled for one task is reused for another without reevaluating relevance.

### 14.16 False Completeness

A polished context view creates unjustified confidence that all material conditions have been represented.

### 14.17 Tacit-Context Erasure

The system assumes that documented content has fully replaced embodied or relational knowledge.

### 14.18 Missing Negative Context

The system supplies what should be done but omits:

- prohibited actions;
- known failure conditions;
- exceptions;
- and stop criteria.

---

## 15. Context Quality

Project OI proposes that context quality should be evaluated across several dimensions.

### 15.1 Relevance

Does the context materially affect the purpose?

### 15.2 Sufficiency

Is enough context available to proceed responsibly?

Sufficiency is not completeness.

### 15.3 Authority

Are governing and authoritative sources distinguishable?

### 15.4 Provenance

Can the source and transformation history be inspected?

### 15.5 Freshness

Does the context reflect the relevant time?

### 15.6 Specificity

Is the context appropriately scoped to the entity, task, role and situation?

### 15.7 Consistency

Are contradictions visible and explainable?

Consistency does not require hiding disagreement.

### 15.8 Accessibility

Can the appropriate actor or system retrieve and understand it?

### 15.9 Security

Is the context supplied only within legitimate boundaries?

### 15.10 Actionability

Does the context help form orientation or response?

### 15.11 Contestability

Can an actor challenge, correct or qualify it?

### 15.12 Traceability

Can later reviewers determine which context influenced the decision or action?

---

## 16. The Context-Assembly Process

Project OI proposes the following working process.

```text
Define purpose
      ↓
Identify required context dimensions
      ↓
Retrieve candidate context
      ↓
Filter by relevance, authority, time and permission
      ↓
Preserve provenance, uncertainty and disagreement
      ↓
Assemble a bounded context view
      ↓
Use in orientation or response
      ↓
Observe gaps, outcomes and corrections
      ↓
Update sources and assembly rules
```

### 16.1 Define Purpose

State:

- the task;
- the question;
- the decision;
- the audience;
- the output;
- and the risk.

### 16.2 Identify Required Dimensions

Determine which types of context are necessary.

A low-risk summary may require less than an irreversible customer action.

### 16.3 Retrieve Candidate Context

Retrieve from:

- source records;
- knowledge;
- memory;
- current state;
- prior cases;
- policy;
- expertise;
- and external sources.

### 16.4 Filter

Evaluate:

- relevance;
- authority;
- freshness;
- permissions;
- confidence;
- and cost of inclusion.

### 16.5 Preserve Boundaries

Keep clear distinctions among:

- source;
- summary;
- inference;
- assumption;
- recommendation;
- and decision.

### 16.6 Assemble

Create a view that is:

- bounded;
- role-appropriate;
- time-aware;
- purpose-specific;
- and inspectable.

### 16.7 Use

Apply the context to:

- orientation;
- decision;
- workflow;
- recommendation;
- response;
- or communication.

### 16.8 Observe

Capture:

- missing context;
- irrelevant content;
- stale sources;
- contradictions;
- errors;
- and later outcomes.

### 16.9 Improve

Update:

- knowledge;
- relationships;
- retrieval rules;
- context templates;
- permissions;
- and source status.

---

## 17. Minimum Sufficient Context

Complete context is impossible.

Unlimited context is undesirable.

Project OI therefore proposes **minimum sufficient context** as a working principle:

> **Provide the smallest context set that allows the intended actor or system to form a responsible orientation and perform the authorised work, while preserving access to deeper evidence where needed.**

Minimum sufficient context depends on:

- purpose;
- risk;
- uncertainty;
- reversibility;
- role;
- time;
- and consequence.

### A Minimum Context View Should Usually Include

- objective;
- relevant entities;
- current state;
- material history;
- authoritative sources;
- applicable constraints;
- decision authority;
- uncertainty;
- exceptions;
- evidence links;
- and escalation path.

### It Should Avoid

- unrelated background;
- duplicate evidence;
- stale guidance;
- hidden inference;
- inaccessible sources;
- excessive examples;
- and unbounded conversation history.

---

## 18. Evidence-Bearing Context

Project OI proposes **evidence-bearing context** as a design principle.

A context view should not merely state what the system believes.

It should preserve enough information to inspect:

- where the belief came from;
- when it was valid;
- what supports it;
- what contradicts it;
- how confident the system is;
- and whether it is source material, interpretation or inference.

### Example

Instead of:

> The customer is high risk.

Use:

> The customer is currently classified as high risk under Policy v3.2 because three payments were more than 30 days late in the previous six months. The classification was generated on 2 August 2026 and is due for review on 2 September 2026. One disputed payment remains unresolved.

The second form carries context that can be:

- checked;
- challenged;
- time-bounded;
- and applied proportionately.

---

## 19. Context and Organisational Memory

Context and memory are interdependent.

Memory supplies:

- prior events;
- decisions;
- rationale;
- outcomes;
- exceptions;
- and learning.

Context determines which memory is relevant now.

This creates a recursive relationship:

```text
Memory informs current context
        ↓
Context shapes current response
        ↓
Response produces outcomes
        ↓
Outcomes revise memory
```

A memory system without contextual retrieval creates accumulation without usefulness.

A context system without durable memory repeatedly starts from zero.

---

## 20. Context and Authority

Context does not only explain what is happening.

It explains what may happen next.

An organisational context view should make visible:

- decision owner;
- delegated authority;
- approval requirement;
- tool scope;
- permission;
- budget;
- policy;
- risk level;
- and stop conditions.

This is especially important for AI agents.

Technical capability should never be treated as implied organisational authority.

---

## 21. Context and Shared Understanding

Organisations do not always need full consensus.

They may need sufficient alignment to coordinate.

Boundary objects illustrate how shared artefacts can support cooperation across different local viewpoints.[^8]

A useful organisational context view should therefore preserve:

- common object identity;
- shared facts;
- material disagreements;
- local implications;
- and role-specific detail.

It should avoid forcing every participant into one flattened narrative.

### Sufficient Alignment May Mean

- agreement on what decision is required;
- agreement on material constraints;
- visibility of unresolved disagreement;
- shared understanding of authority;
- and compatible response paths.

---

## 22. Context and Language

Organisational vocabulary is itself context.

Terms such as:

- customer;
- incident;
- priority;
- approved;
- completed;
- risk;
- knowledge;
- and outcome

may mean different things across teams.

A system should preserve:

- definitions;
- aliases;
- domain-specific meanings;
- deprecated terms;
- and relationships among concepts.

Language standardisation can support coordination.

Over-standardisation can erase legitimate domain differences.

The objective is not one vocabulary for every purpose.

It is semantic interoperability where coordination requires it.

---

## 23. SMB Context

SMBs often possess rich context and weak context infrastructure.

### Strengths

- close customer relationships;
- short communication paths;
- strong local knowledge;
- fast informal repair;
- and founder awareness of history and exceptions.

### Weaknesses

- founder dependency;
- context stored in conversation;
- inconsistent documentation;
- limited source governance;
- minimal versioning;
- tacit authority;
- and difficulty separating urgent work from durable knowledge.

The challenge is not to impose enterprise bureaucracy.

It is to preserve the speed of informal context while reducing fragility.

### Lightweight SMB Context Practices

- link important decisions to source evidence;
- record material exceptions and expiry conditions;
- make ownership and authority visible;
- preserve customer and supplier history;
- distinguish current from superseded guidance;
- maintain a clear path to expertise;
- and update workflows when learning changes practice.

---

## 24. Project OI Propositions

These are working propositions, not validated findings.

### P1 — Context Determines Organisational Meaning

> The organisational meaning of information depends on the relationships, time, purpose, authority and situation in which it is used.

### P2 — More Context Is Not Necessarily Better

> Context quality depends on relevance and integrity rather than volume.

### P3 — Context Must Be Purpose-Bound

> Context assembled without a defined purpose will tend towards overload, ambiguity or false completeness.

### P4 — Context Is a View, Not a Copy

> Organisational context should be assembled as a bounded view over connected sources rather than duplicated into static packets wherever possible.

### P5 — Context Must Preserve Time

> Organisational systems that cannot distinguish historical from current context will misapply knowledge and distort accountability.

### P6 — Context Must Preserve Provenance

> A context statement without source and transformation history is difficult to challenge, correct or trust.

### P7 — Context Is Partly Tacit

> No representation of organisational context should be assumed to reproduce the whole situated understanding of experienced participants.

### P8 — Handoffs Are Context-Risk Boundaries

> The probability of context loss increases when work crosses roles, teams, systems, organisations or human–AI boundaries.

### P9 — Authority Is Context

> Organisational response quality depends on knowing not only what should happen, but who may decide and act.

### P10 — Context Must Remain Contestable

> Context becomes dangerous when uncertain interpretation is presented as fixed organisational fact.

### P11 — AI Context Requires Organisational Governance

> AI context engineering is an organisational design problem where source authority, permissions, memory and accountability affect model behaviour.

### P12 — Context Should Learn From Use

> Outcomes and corrections should improve both the underlying sources and the rules used to assemble future context.

### P13 — Shared Context Does Not Require Full Consensus

> Organisations can coordinate through sufficiently aligned, evidence-bearing context while preserving legitimate disagreement.

### P14 — Context Capability Reduces Repeated Discovery

> Stronger contextual capability should reduce the cost of reconstructing knowledge the organisation already possesses.

---

## 25. Observable Indicators

Potential indicators for later research include:

### Context Availability

- relevant context can be located;
- important relationships are represented;
- and tacit expertise has a visible access path.

### Context Quality

- sources are attributable;
- temporal validity is visible;
- authoritative and non-authoritative material can be distinguished;
- and uncertainty is explicit.

### Context Fitness

- context is scoped to task, role and risk;
- irrelevant material is limited;
- and users can reach deeper evidence when required.

### Context Continuity

- rationale survives handoffs;
- prior decisions and exceptions are retrievable;
- and learning affects future context.

### Context Governance

- permissions apply;
- sensitive information remains bounded;
- AI-generated inference is identified;
- and context can be challenged or corrected.

### Context Use

- supplied context changes orientation or response;
- missing context is identifiable;
- and later reviewers can determine which context influenced an action.

---

## 26. Practical Principles

### 26.1 Start With the Purpose

Do not assemble context before knowing what it is for.

### 26.2 Assemble Rather Than Dump

Select and structure relevant context instead of attaching every available source.

### 26.3 Preserve Sources

Keep original evidence accessible.

### 26.4 Separate Evidence From Interpretation

Do not silently convert inference into fact.

### 26.5 Make Time Explicit

Show when context was true and when it should be reviewed.

### 26.6 Make Authority Explicit

Show who owns, decides, approves and may act.

### 26.7 Preserve Disagreement

Do not manufacture consensus through summarisation.

### 26.8 Include Negative Context

State:

- prohibitions;
- exceptions;
- failure conditions;
- and stop criteria.

### 26.9 Match Context to Risk

Higher-impact work requires stronger provenance, review and completeness.

### 26.10 Support Progressive Disclosure

Show the minimum sufficient view, with paths to deeper evidence.

### 26.11 Record Gaps

A system should say what it does not know.

### 26.12 Learn From Use

Corrections and outcomes should improve later context assembly.

### 26.13 Do Not Erase Tacit Knowledge

Represent the limits of codification and preserve access to people and practice.

### 26.14 Treat Permissions as Meaning

Information a participant is not authorised to access is not legitimate context for that participant.

---

## 27. Relationship to Organisational Intelligence

Context is necessary but not sufficient for Organisational Intelligence.

It contributes to **Orient** by enabling an organisation to form a usable account of what is happening.

The dependency can be represented as:

```text
Attended signal
× contextual integrity
× interpretive quality
= orientation potential
```

This is not a mathematical measurement model.

It expresses a dependency.

An organisation may possess relevant context and still fail to:

- integrate it;
- challenge assumptions;
- form sufficient alignment;
- coordinate response;
- or learn from outcomes.

The higher-level Project OI principle is:

> **An organisation becomes more capable when it can repeatedly assemble the right context for the right purpose, preserve the evidence and limits of that context, and allow outcomes to improve what future actors and systems can know.**

---


## 28. BOK Boundary and Downstream Use

This chapter defines organisational context for the Project OI Body of Knowledge.

It does not define:

- product objects;
- software architecture;
- user-interface terminology;
- schemas;
- APIs;
- or implementation contracts.

Product implications, implementation patterns and architecture reconciliation remain deferred until the formal BOK completion record. Any later application should preserve this chapter’s distinctions among context, state, knowledge, memory, evidence, authority and purpose rather than converting every term into a software object.

## 29. Research Limitations

This chapter presently:

- synthesises organisation theory, knowledge research, HCI and emerging AI practice;
- does not establish a validated Project OI context model;
- does not prove that the proposed taxonomy is complete or mutually exclusive;
- does not resolve how much tacit context can be represented safely;
- does not provide a validated context-quality score;
- and does not establish causal effects for the proposed indicators.

The terms:

- context decay;
- context drift;
- context laundering;
- evidence-bearing context;
- and minimum sufficient context

are used as Project OI working concepts. Some have precedents or close analogues in other fields, but their use here requires later comparison and challenge.

---


## 30. Forward Link

The next substantive chapter is:

> **OI-BOK-003 — Knowledge and Expertise**

It examines what organisations know, where knowledge resides, how expertise becomes available and how context and knowledge combine to support Organisational Orientation.

## 31. References

[^1]: Johns, G. (2006). The essential impact of context on organizational behavior. *Academy of Management Review, 31*(2), 386–408. https://doi.org/10.5465/AMR.2006.20208687.

[^2]: Dey, A. K. (2001). Understanding and using context. *Personal and Ubiquitous Computing, 5*(1), 4–7. https://doi.org/10.1007/s007790170019.

[^3]: Weick, K. E., Sutcliffe, K. M., & Obstfeld, D. (2005). Organizing and the process of sensemaking. *Organization Science, 16*(4), 409–421. https://doi.org/10.1287/orsc.1050.0133.

[^4]: Choo, C. W. (1996). The knowing organization: How organizations use information to construct meaning, create knowledge and make decisions. *International Journal of Information Management, 16*(5), 329–340. https://doi.org/10.1016/0268-4012(96)00020-5.

[^5]: Suchman, L. A. (1987). *Plans and Situated Actions: The Problem of Human–Machine Communication*. Cambridge University Press. Revised as *Human–Machine Reconfigurations* (2007).

[^6]: Hutchins, E. (1995). *Cognition in the Wild*. MIT Press.

[^7]: Nonaka, I., & Konno, N. (1998). The concept of “Ba”: Building a foundation for knowledge creation. *California Management Review, 40*(3), 40–54. https://doi.org/10.2307/41165942.

[^8]: Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, translations and boundary objects: Amateurs and professionals in Berkeley’s Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science, 19*(3), 387–420. https://doi.org/10.1177/030631289019003001.

[^9]: Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2023). Lost in the middle: How language models use long contexts. *Transactions of the Association for Computational Linguistics, 12*, 157–173. Preprint: arXiv:2307.03172.

[^10]: Rajasekaran, P., Dixon, E., Ryan, C., & Hadfield, J. (2025). Effective context engineering for AI agents. *Anthropic Engineering*, 29 September 2025. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents.

[^11]: Rajasekaran, P. (2026). Harness design for long-running application development. *Anthropic Engineering*, 24 March 2026. https://www.anthropic.com/engineering/harness-design-long-running-apps.

### Additional Foundational Reading

- Daft, R. L., & Weick, K. E. (1984). Toward a model of organizations as interpretation systems. *Academy of Management Review, 9*(2), 284–295.
- Nonaka, I., Toyama, R., & Konno, N. (2000). SECI, Ba and leadership: A unified model of dynamic knowledge creation. *Long Range Planning, 33*(1), 5–34.
- Walsh, J. P., & Ungson, G. R. (1991). Organizational memory. *Academy of Management Review, 16*(1), 57–91.
- Ocasio, W. (1997). Towards an attention-based view of the firm. *Strategic Management Journal, 18*(S1), 187–206.
- Weick, K. E., & Sutcliffe, K. M. (2006). Mindfulness and the quality of organizational attention. *Organization Science, 17*(4), 514–524.

---

## 32. Editorial Guardrail

> **Project OI must not confuse a large quantity of available information with adequate organisational context. Context is fit for purpose only where its relevance, authority, time, provenance, permissions and limits remain visible.**
