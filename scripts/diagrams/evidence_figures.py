"""Evidence, retained learning and resource illustrations for OIBOK.

These figures translate Guide 0.2 sections 6, 7 and Appendix A2.
They add no research results, validated thresholds or maturity levels.
The Wattle Supply resource figures are fictional planning assumptions.
"""


def draw_evaluation(c):
    """Separate evaluation of a complete package from AI's extra contribution."""
    arrangements = [
        (44, 'A   Current practice',
         'Record the existing sources, roles and workflow. Preserve the baseline and its limits.', c.WHITE),
        (424, 'B   Improved work',
         'Define a credible change without AI: knowledge, authority, handoffs and support.', c.TINT),
        (804, 'C   Same work with AI',
         'Add a specified AI contribution. Keep the other changes comparable and record differences.', c.BLUE_LIGHT),
    ]
    for x, title, body, fill in arrangements:
        c.box(x, 175, 352, 154, title, body, fill=fill, body_size=17)
        c.arrow([(x + 176, 329), (x + 176, 357)], color=c.MUTED)

    c.box(
        44, 357, 1112, 90,
        'Use shared definitions, eligible cases and follow-up',
        'Outcomes for affected people, quality, total human effort, safeguards and whether the intended change was used.',
        fill=c.PAPER, title_size=20, body_size=17,
    )

    c.box(
        44, 473, 542, 108,
        'A versus C: the whole package',
        "Can inform the combined change. AI's separate contribution remains unresolved in this comparison.",
        fill=c.WHITE, title_size=20, body_size=17,
    )
    c.box(
        614, 473, 542, 108,
        'B versus C: additional AI contribution',
        'Compare the same improved arrangement with and without AI. Record any other material differences.',
        fill=c.BLUE_LIGHT, title_size=20, body_size=17,
    )

    c.box(
        44, 607, 1112, 87,
        'Keep competing explanations visible',
        'Check case mix, workload, experience, extra support, concurrent changes and changes in measurement.',
        fill=c.TINT, title_size=20, body_size=17,
    )
    c.text(
        44, 715,
        'Comparisons alone do not establish causality. The design, implementation and evidence determine the strength of the conclusion.',
        size=15, width=1112, color=c.MUTED,
    )


def draw_learning(c):
    """Show retained learning in changed work and later evidence of continuity."""
    c.box(
        44, 175, 1112, 73,
        'Maintain usable organisational memory throughout',
        'Keep sources, scope, ownership, versions and supersession available at each step.',
        fill=c.TINT, title_size=19, body_size=16, padding=13,
    )

    nodes = [
        (70, 276, 'Evaluate experience',
         'Preserve observations, uncertainty and competing explanations.', c.WHITE),
        (450, 276, 'Form a conditional lesson',
         'State where it applies, its limits and what would reopen it.', c.WHITE),
        (830, 276, 'Change the work',
         'Assign owners for changes to guidance, authority, handoffs, skills or systems.', c.BLUE_LIGHT),
        (830, 448, 'Use it in later work',
         'Observe a later case and its consequences under the stated conditions.', c.BLUE_LIGHT),
        (450, 448, 'Review continuity',
         'Check what remains usable, what changed and what is still untested.', c.WHITE),
        (70, 448, 'Retain, revise or retire',
         'Record the evidence, authorised decision, scope and next review.', c.WHITE),
    ]
    for x, y, title, body, fill in nodes:
        c.box(x, y, 300, 124, title, body, fill=fill, body_size=16)

    c.arrow([(370, 338), (450, 338)])
    c.arrow([(750, 338), (830, 338)])
    c.arrow([(980, 400), (980, 448)])
    c.arrow([(830, 510), (750, 510)])
    c.arrow([(450, 510), (370, 510)])
    c.arrow([(70, 510), (52, 510), (52, 338), (70, 338)])

    c.text(44, 589, 'Three checks of later use', size=18, weight='bold')
    c.text(1156, 591, 'Completed actions and planned checks need distinct records.',
           size=15, color=c.MUTED, align='right')
    checks = [
        (44, 'Reuse',
         'Can a later case use current guidance and recognise exceptions?'),
        (424, 'Succession',
         'Can another prepared person act within authority without hidden help?'),
        (804, 'Changed conditions',
         'Can the arrangement adapt or fall back within its agreed bounds?'),
    ]
    for x, title, body in checks:
        c.box(x, 621, 352, 110, title, body, fill=c.PAPER, body_size=16)


def draw_resources(c):
    """Exact stacked effort bars for the fictional Wattle Supply scenarios."""
    scenarios = [
        ('Current practice', (36, 8, 4, 2), 0, 0),
        ('Non-AI improvement', (24, 8, 4, 3), 10, 0),
        ('AI: 3-minute review', (8, 12, 4, 5), 30, 120),
        ('AI: 6-minute review', (8, 24, 4, 5), 30, 120),
    ]
    assert [sum(parts) for _, parts, _, _ in scenarios] == [50, 39, 29, 41]
    colours = [c.INK, c.BLUE, '#c4cfba', c.ACCENT]
    label_colours = [c.WHITE, c.WHITE, c.INK, c.WHITE]
    c.box(
        44, 175, 1112, 70,
        'Fictional planning assumptions; no observed results',
        '240 eligible entries per month. Preparation, review and correction are averaged across all entries.',
        fill=c.TINT, title_size=19, body_size=16, padding=12,
    )

    for x, label, fill in zip(
        (270, 440, 574, 744),
        ('Preparation', 'Review', 'Correction', 'Maintenance'),
        colours,
    ):
        c.rect(x, 262, 16, 16, fill=fill, stroke=None)
        c.text(x + 23, 259, label, size=16, color=c.MUTED)

    c.text(270, 300, 'Monthly staff effort (hours)', size=18, weight='bold')
    c.text(960, 291, 'Setup hours', size=16, weight='bold', align='center')
    c.text(960, 312, 'one-off', size=15, color=c.MUTED, align='center')
    c.text(1090, 291, 'Cash / month', size=16, weight='bold', align='center')
    c.text(1090, 312, 'AUD', size=15, color=c.MUTED, align='center')

    chart_x, scale = 270, 11.2
    for tick in range(0, 51, 10):
        x = chart_x + tick * scale
        c.line([(x, 337), (x, 560)], color=c.LINE, width=1, dashed=True)
        c.text(x, 569, str(tick), size=15, color=c.MUTED, align='center')

    for index, (label, parts, setup, cash) in enumerate(scenarios):
        y = 345 + index * 57
        c.text(44, y + 6, label, size=18, weight='bold')
        x = chart_x
        for amount, fill, text_colour in zip(parts, colours, label_colours):
            width = amount * scale
            c.rect(x, y, width, 35, fill=fill, stroke=c.PAPER, width=1)
            c.text(x + width / 2, y + 8, str(amount), size=15,
                   color=text_colour, weight='bold', align='center')
            x += width
        c.text(x + 10, y + 5, str(sum(parts)), size=19, weight='bold')
        c.text(960, y + 5, str(setup), size=19, align='center')
        c.text(1090, y + 5, str(cash), size=19, align='center')

    c.text(44, 610, 'Review effort can reverse the resource preference.',
           size=23, font='serif', width=1112)
    c.text(
        44, 649,
        'Three-minute AI review: 29 staff hours/month. Six-minute review: 41, compared with 39 for the non-AI improvement.',
        size=17, width=1112, color=c.INK, leading=22,
    )
    c.text(
        44, 695,
        'Released time is potential capacity. AI adds AUD 120 in monthly cash charges. Quality and outcomes remain to be tested.',
        size=16, width=1112, color=c.MUTED, leading=21,
    )
