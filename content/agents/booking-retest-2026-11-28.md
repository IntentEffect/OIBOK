# Retesting the booking handoff prompt

**Editorial prompt check · 28 November 2026**

The [25 November booking trial](/for-agents/booking-trial/) exposed an ambiguity: a proposed review could take place before the final booking had enough time to reach its outcome. We added an instruction to distinguish the intake cut-off, the final outcome window and the treatment of pending cases.

Three fresh assistant runs have now used that revised instruction on the same fictional booking question. All three specified an intake end of 4 December, observation through 8 December and a decision review on 9 December. All three kept pending cases visible and left approval with the service manager. This is evidence of the observed responses on one case, not a controlled estimate of the revision's effect or a claim of general reliability.

## What was tested

Each run began without the parent conversation, received the same task and was directed to read only four local documents from [repository revision 5b224e76](https://github.com/IntentEffect/OIBOK/tree/5b224e76ad5450241bec6708c9a462092f825fa4). The source files were frozen before the runs: agent guide 0.1, two-case worksheet 0.1, proposition evidence notes 0.4 and the research completion record 1.0. The current website may contain later editions; the snapshot identifies what these runs actually saw.

The fictional evidence was unchanged: two-day bookings rose from 12 of 20 to 15 of 20 while the scheduler worked two extra shifts. One delay followed immediate acceptance but unavailable specialist capacity; another had no receiving owner recorded. Staffing comparisons, checking effort, second-branch evidence and the mentioned roster were not supplied. Only the service manager could approve a rollout.

The assistant runs used the same configured environment. They were not independent subject reviewers and did not test live-web retrieval, a different provider or a real organisation. The source notes had also changed since the first trial, so a difference between these results and the earlier replies cannot be attributed solely to the revised sentence.

[Exact task](/downloads/agents/booking-retest-2026-11-28/prompt.md) · [Checks fixed before the runs](/downloads/agents/booking-retest-2026-11-28/checks.md) · [Source hashes and revision](/downloads/agents/booking-retest-2026-11-28/source-manifest.json)

## Results

| Check | Run A | Run B | Run C |
| --- | --- | --- | --- |
| Relevant source sections support the advice | Yes; some titles abbreviated | Yes; some titles abbreviated | Yes |
| Extra staffing treated as an alternative explanation | Yes | Yes | Yes |
| Rollout approval remains with the service manager | Yes | Yes | Yes |
| Counts and supplied case facts retained; no invented inspection or result | Yes | Yes | Yes |
| Intake cut-off, final outcome window and pending cases distinguished | All three elements | All three elements | All three elements |
| Monday–Friday calendar assumption stated | Explicit | Explicit | Implicit in dates |
| Within the 250-word limit | 230 words | 232 words | 240 words |

Word counts include visible citation labels and exclude the destination URLs hidden by Markdown links. Replies are retained as returned: [Run A](/downloads/agents/booking-retest-2026-11-28/response-a.md), [Run B](/downloads/agents/booking-retest-2026-11-28/response-b.md) and [Run C](/downloads/agents/booking-retest-2026-11-28/response-c.md).

### Source use

The evidence-note references support examining capacity and coordination separately. The two-case worksheet supports reconstructing cases and preserving the original explanation. The agent guide supports measurable next steps and authority limits. The release record supports the stated limits on validation. The booking counts and manager's authority come from the fictional task, not those publications.

All three replies explicitly limited what they had inspected. None claimed to have opened the missing roster, reviewed the original studies or obtained second-branch results. The dates and comparison plans are proposals, not reported events. Abbreviated document titles in A and B remain traceable through their links and sections; they should not be confused with unsupported attribution.

## Editorial decision

**Retain the revised observation-window instruction.** On this case the three responses made the required distinction, including a later outcome decision. No additional starter-prompt change is justified by these runs alone.

Before using a suggested date in actual work, agree the organisation's working calendar and holidays. Run C did not state that assumption explicitly. Broader checks across different cases, ambiguous working calendars and missing-data patterns remain possible future work. This small editorial retest does not establish the reliability of an assistant, the effectiveness of OIBOK or independent field validation.

The same distinction has been clarified in [Guide 0.7's booking example](/guide/evaluate/#worked-decision-a-booking-handoff): the comparison follows the tenth eligible booking's completed outcome window. It is still a fictional example.
