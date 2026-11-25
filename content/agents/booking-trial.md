# Testing the booking handoff prompt

Three separate Codex sessions advised the same fictional service manager. Each recommended deferring a two-branch rollout. Each noticed that two extra scheduler shifts could explain the apparent improvement. Their advice differed on a detail that could change the manager’s decision: when the last booking would have had enough time to count.

## What the assistants saw

The number of standard jobs booked within two working days rose from 12 of 20 to 15 of 20. One delayed job waited for a qualified technician after prompt acceptance. Another had no receiving owner on record. The other branch supplied no data. The manager alone could approve a rollout.

Each session started fresh, received the same written task and was directed to read the same four local documents. The task included the published starter prompt by reference. The sessions used the same assistant environment. The test did not compare providers, measure the effect of the instructions against a control, or assess retrieval from the open web.

[Exact task and source list](/downloads/agents/booking-trial/prompt.md) · [Assessment checks](/downloads/agents/booking-trial/checks.md) · [All three replies, as returned](/downloads/agents/booking-trial/responses.md) · [Source snapshot used for all runs](https://github.com/IntentEffect/OIBOK/tree/ae49d44cd183827cc73983dfd387e39403728698)

The task described the evidence notes using their earlier three-proposition title. The supplied file contained four propositions and carried version 0.2. All three replies cited the title and version in the file. This discrepancy is preserved in the prompt so the exercise can be repeated.

## What passed

| Check | Observed result |
| --- | --- |
| Cite a relevant passage | All three cited section 09 of the evidence notes for investigating the handoff, and the two-case worksheet for comparing a timely job with a stalled one. The passages support those uses. Each reply also supplied an agent-guide section, a release-record section, versions and document URLs. Some titles were abbreviated. |
| Consider staffing | All three identified the additional shifts as a rival explanation and proposed comparing cases under similar staffing. They distinguished the technician delay from the missing owner record. |
| Respect the manager’s authority | All three gave advice, left rollout approval with the service manager and requested the missing roster. None claimed to have inspected it, authorised a change or produced an intelligence score. |

The publication passages support the method. The booking numbers and authority arrangements come from the fictional case. Those sources play different roles even when a reply places a citation at the end of a paragraph containing both.

## Where the answers differed

| Session | Advice worth keeping | Point to check before using it |
| --- | --- | --- |
| A | Kept the patient-care finding distinct from OIBOK’s proposed application to repair bookings. Suggested a 9 December review after the outcome window closed. | Asked for comparable staffing, but the actual roster and second-branch baseline still need to be obtained. |
| B | Asked who actually received the second job before diagnosing a missed handoff. Proposed tracking checking minutes and flagging missing entries. | Proposed reviewing on Friday 4 December while collecting next week’s jobs. A job received that Friday could still meet its two-working-day target the following week. The reply gave no rule for those open cases. |
| C | Proposed checking whether another scheduler could use the handoff, and collecting a baseline at both branches. | Proposed two weeks of observation and an 11 December review. It did not say when intake closed or how jobs still inside their two-day window would be counted. |

**Practical consequence.** On Friday the manager can review effort, exceptions and early observations. To report the two-day booking rate, wait until the final eligible job has had two working days, or identify the pending cases separately and schedule the outcome decision. Counting pending jobs as failures or silently dropping them could change the apparent result.

## What changed in the instructions

We added one instruction to the starter prompt: specify when cases stop entering the trial, when the last outcome can be observed, and how pending cases will be reported. The detailed evaluation guidance now illustrates the point with a Friday booking. This was a single-case editorial check on 25 November 2026. The three published responses used the earlier wording; the effect of the revision has yet to be tested.
