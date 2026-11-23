"""Practical OIBOK illustrations based on Guide 0.2.

These drawings explain draft practice guidance. Linden Studio and Harbour
Services are fictional teaching cases and do not supply empirical evidence.
"""


def draw_application(c):
    """A recurring inquiry with optional AI design, evidence and retained learning."""
    c.text(64, 174, 'Use the depth and connected records that the decision needs.', size=16, color=c.MUTED)
    xs = (64, 444, 824)
    ys = (205, 390, 575)
    w, h = 312, 137
    cy = lambda y: y + h / 2

    # Read across the first row, back across the second and across the third.
    c.arrow([(376, cy(205)), (444, cy(205))])
    c.arrow([(756, cy(205)), (824, cy(205))])
    c.arrow([(980, 342), (980, 390)])
    c.text(1000, 352, 'AI option', size=15, color=c.ACCENT)
    c.arrow([(980, 342), (980, 366), (790, 366), (790, cy(390)), (756, cy(390))])
    c.text(792, 346, 'Change without AI', size=15, color=c.ACCENT)
    c.arrow([(824, cy(390)), (756, cy(390))])
    c.arrow([(444, cy(390)), (376, cy(390))])
    c.arrow([(220, 527), (220, 575)])
    c.arrow([(376, cy(575)), (444, cy(575))])
    c.arrow([(756, cy(575)), (824, cy(575))])

    # Revision routes are visible so the map cannot be mistaken for fixed gates.
    c.arrow([(64, cy(575)), (44, cy(575)), (44, cy(205)), (64, cy(205))], dashed=True, color=c.BLUE)
    c.text(64, 348, 'Evidence may reopen the question.', size=15, color=c.BLUE)
    c.arrow([(980, 575), (980, 549), (600, 549), (600, 527)], dashed=True, color=c.BLUE)
    c.text(691, 529, 'Revisit design or evaluation', size=15, color=c.BLUE)

    style = dict(title_size=19, body_size=17, padding=16)
    c.box(xs[0], ys[0], w, h, 'Define one inquiry',
          'Practice Review.\nOutcome, boundary and owner.\nContrasting cases and sources.', **style)
    c.box(xs[1], ys[0], w, h, 'Investigate actual work',
          'Cases, meanings and evidence.\nContext and Knowledge Map.\nDecision and Coordination Canvas.', **style)
    c.box(xs[2], ys[0], w, h, 'Compare credible options',
          'Current practice.\nImprovement without AI.\nAI with a contribution to test.', **style)
    c.box(xs[2], ys[1], w, h, 'Design the AI contribution',
          'Task, permissions and fallback.\nAI Opportunity and Work\nDesign Canvas.', fill=c.BLUE_LIGHT, **style)
    c.box(xs[1], ys[1], w, h, 'Plan change and evaluation',
          'Work, authority and measures.\nBaseline and comparison.\nOutcome and Learning Record.', fill=c.TINT, **style)
    c.box(xs[0], ys[1], w, h, 'Try the bounded change',
          'Confirm authority and conditions.\nTry the change within scope.\nCollect the agreed evidence.', **style)
    c.box(xs[0], ys[2], w, h, 'Review consequences',
          'Continue, adapt, stop or defer.\nRecord what else could explain\nthe result.', fill=c.TINT, **style)
    c.box(xs[1], ys[2], w, h, 'Retain useful changes',
          'Update guidance, authority,\nhandoffs or resources.\nName an owner for retention.', **style)
    c.box(xs[2], ys[2], w, h, 'Check later use',
          'Reuse by a prepared colleague.\nCheck changed conditions.\nKeep limits and gaps visible.', **style)
    c.text(64, 733, 'Further inquiry or retaining current practice can be the right next decision. These activities can recur and overlap.',
           size=14, color=c.MUTED, width=1072)


def draw_handoff(c):
    """Linden's proposed commitment rules, with explicit waiting and return owners."""
    c.text(64, 175, 'Linden Studio: a proposed arrangement for an agreed brief and an accepted delivery plan.',
           size=16, color=c.MUTED, width=1072)
    style = dict(title_size=20, body_size=18, padding=16)

    # Main commitment and execution route.
    c.arrow([(376, 281), (444, 281)])
    c.text(388, 254, 'Submit', size=15, color=c.ACCENT)
    c.arrow([(756, 281), (824, 281)])
    c.text(769, 254, 'Accept', size=15, color=c.ACCENT)
    c.arrow([(980, 355), (980, 435)])
    c.text(998, 381, 'Within authority', size=15, color=c.ACCENT)

    # A returned handoff goes back to a named owner. Exceptions remain visible.
    c.arrow([(561, 355), (561, 392), (220, 392), (220, 435)], color=c.BLUE)
    c.text(268, 366, 'Missing or incomplete input', size=15, color=c.BLUE)
    c.arrow([(680, 355), (680, 435)], color=c.BLUE)
    c.text(692, 382, 'Exception', size=15, color=c.BLUE)
    c.arrow([(64, 506), (44, 506), (44, 281), (64, 281)], color=c.BLUE, dashed=True)

    c.box(64, 207, 312, 148, 'Prepare the handoff',
          'Client lead records scope,\ndependencies and proposed date.\nKeep provisional status explicit.', **style)
    c.box(444, 207, 312, 148, 'Review for acceptance',
          'Delivery lead checks scope,\ndependencies, capacity and\napplicable decision authority.', **style)
    c.box(824, 207, 312, 148, 'Accept and confirm',
          'Delivery lead accepts the work.\nConfirm the date within authority.\nRecord the commitment.', fill=c.TINT, **style)

    c.box(64, 435, 312, 148, 'Clarify and resubmit',
          'Client lead owns returned work.\nRecord the reason, next action\nand what is still missing.', fill=c.BLUE_LIGHT, **style)
    c.box(444, 435, 312, 148, 'Resolve the exception',
          'Owner resolves missing approval\nor disputed commitment.\nReturn the resolution to the record.', fill=c.BLUE_LIGHT, **style)
    c.box(824, 435, 312, 148, 'Act and verify the effect',
          'Identify the person performing\nthe work and the evidence needed\nto verify what happened.', **style)

    c.line([(64, 622), (1136, 622)], color=c.LINE)
    c.text(64, 641, 'WHILE WAITING', size=13, weight='bold', color=c.ACCENT)
    c.text(64, 666, 'In this example, the sender retains responsibility until the receiving owner accepts.',
           size=17, width=312, color=c.MUTED)
    c.text(444, 641, 'STATE STAYS VISIBLE', size=13, weight='bold', color=c.ACCENT)
    c.text(444, 666, 'Requested, performed and verified are distinct. An unresolved exception keeps an owner.',
           size=17, width=312, color=c.MUTED)
    c.text(824, 641, 'UNCERTAIN RESULT', size=13, weight='bold', color=c.ACCENT)
    c.text(824, 666, 'Check the actual state before retrying. Agree recovery authority and record the correction.',
           size=17, width=312, color=c.MUTED)


def draw_people_ai(c):
    """Harbour Services separates source stewardship, AI help and human authority."""
    # Lanes group responsibility. The flow shows one configured fictional case.
    for y in (309, 447, 585):
        c.line([(44, y), (1156, y)], color=c.LINE, width=1)
    labels = [
        (194, 'SOURCE\nOWNERSHIP'),
        (332, 'AI\nASSISTANCE'),
        (470, 'REVIEW AND\nAUTHORITY'),
        (608, 'ACTION AND\nEVIDENCE'),
    ]
    for y, label in labels:
        c.text(44, y, label, size=15, width=160, weight='bold', color=c.ACCENT, leading=21)

    # The central route follows sources, draft, review, authority and action.
    c.arrow([(370, 295), (370, 321)])
    c.arrow([(370, 433), (370, 459)])
    c.arrow([(510, 515), (550, 515)])
    c.arrow([(690, 571), (690, 597)])
    c.arrow([(830, 653), (870, 653)])

    # Missing knowledge and system failure have explicit destinations.
    c.arrow([(510, 361), (870, 361)], color=c.BLUE)
    c.text(558, 331, 'Missing or conflicting policy', size=16, color=c.BLUE)
    c.text(583, 382, 'Abstain from the proposed response', size=15, color=c.BLUE)
    c.arrow([(490, 433), (490, 444), (850, 444), (850, 515), (870, 515)], color=c.BLUE, dashed=True)
    c.text(584, 418, 'Unavailable or unreliable', size=15, color=c.BLUE)

    style = dict(title_size=19, body_size=18, padding=13)
    c.box(230, 183, 280, 112, 'Approved sources',
          'Current policy and version.\nOwner and scope recorded.', **style)
    c.box(550, 183, 606, 112, 'Meaningful review',
          'Evidence, expertise, time and authority to reject or stop.\nRead access and permission to act are separate.', fill=c.TINT, **style)
    c.box(230, 321, 280, 112, 'Retrieve and draft',
          'Source-linked draft.\nNo external action.', fill=c.BLUE_LIGHT, **style)
    c.box(870, 321, 286, 112, 'Abstain and escalate',
          'Supervisor resolves the issue.\nRoute excluded cases onward.', fill=c.BLUE_LIGHT, **style)
    c.box(230, 459, 280, 112, 'Review the response',
          'Check sources and claims.\nCorrect, reject or escalate.', **style)
    c.box(550, 459, 280, 112, 'Decide within authority',
          'Named person decides within\nrecorded authority.', **style)
    c.box(870, 459, 286, 112, 'Manual fallback',
          'Prepared staff resume from\nrecorded state with capacity.', fill=c.BLUE_LIGHT, **style)
    c.box(230, 597, 280, 112, 'AI limits in this case',
          'No sending, refunds, policy\nchanges or external actions.', fill=c.TINT, **style)
    c.box(550, 597, 280, 112, 'Adviser sends reply',
          'Adviser approves the reply.\nPreserve rationale and state.', **style)
    c.box(870, 597, 286, 112, 'Observe consequences',
          'Resolution, quality and effort.\nLater repeat contact.', **style)
    c.text(230, 733, 'Record the configuration and permissions tested. Review and fallback arrangements require evidence before live use.',
           size=14, width=926, color=c.MUTED)
