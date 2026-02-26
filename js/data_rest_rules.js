data_rest_rules = [
    {
        title: "Short Rest",
        optional: "Homebrew rule",
        icon: "stopwatch",
        subtitle: "10 minute period of downtime",
        description: "A Short Rest is a 10 minute period of downtime, during which a creature does nothing more strenuous than reading, talking, eating, or standing watch. To start a Short Rest, you must have at least 1 Hit Point.",
        reference: "Homebrew Rule",
        bullets: [
            {
                title: "Benefits of the Rest",
                collapsible: true,
                content: [
                    "<b>Spend Hit Point Dice.</b> You can spend one or more of your Hit Point Dice to regain Hit Points. For each Hit Point Die you spend in this way, roll the die and add your Constitution modifier to it. You regain Hit Points equal to the total (minimum of 1 Hit Point). You can decide to spend an additional Hit Point Die after each roll.",
                    "<b>Special Feature.</b> Some features are recharged by a Short Rest. If you have such a feature, it recharges in the way specified in its description."
                ]
            },
            {
                title: "Interrupting the Rest",
                collapsible: true,
                content: [
                    "A Short Rest is stopped by the following interruptions:",
                    "• Rolling Initiative",
                    "• Casting a spell other than a cantrip",
                    "• Taking any damage",
                    "An interrupted Short Rest confers no benefits."
                ]
            },
            "Limit 2 Short Rests per 24h period."
        ]
    },
    {
        title: "Mid Rest",
        optional: "Homebrew rule",
        icon: "camp-cooking-pot",
        subtitle: "At least 8 hours long",
        description: "A mid rest is a period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity; reading, talking, eating, or standing watch for no more than 2 hours. If the rest is interrupted by a period of strenuous activity - at least 1 hour of walking, fighting, casting spells, or similar adventuring activity - the characters must begin the rest again to gain any benefit from it.",
        reference: "Homebrew Rule",
        bullets: [
            "At the end of a mid rest, a character gains the benefits of a short rest.",
            {
                title: "Meal Benefits",
                collapsible: true,
                content: [
                    "If the character ate a meal during this rest, they also choose one of the following benefits:",
                    "• Regain spent Hit Dice, up to a number of dice equal to half of your total number of them (minimum of one die).",
                    "• Spend a number of Hit Dice equal to or less than half your level (rounded up) to regain spell slots. You regain spell slots of your choice with a combined level equal to the number of spent Hit Dice. None of the slots can be 6th level or higher.",
                    "• Spend one Hit Die to reduce your exhaustion by one level.",
                    "• Spend one Hit Die to regain a single use of an ability that recharges on a long rest. This cannot be used to regain spell slots."
                ]
            },
            "A character can’t benefit from more than one mid rest in a 24-hour period."
        ]
    },
    {
        title: "Long Rest",
        optional: "Homebrew rule",
        icon: "moon",
        subtitle: "Mid rest in modest+ conditions",
        description: "A long rest occurs when taking a mid rest in the conditions of a modest or better lifestyle.",
        reference: "Homebrew Rule",
        bullets: [
            "At the end of a long rest, a character regains all lost hit points and all spent Hit Dice. Their exhaustion is reduced to 0.",
            "A character can’t benefit from more than one long rest in a 24-hour period.",
            {
                title: "Lifestyle Benefits",
                collapsible: true,
                content: [
                    "Characters that choose to take long rests at higher lifestyle expenses gain additional benefits. This is in addition to any other benefits the lifestyle already grants.",
                    "• <b>Comfortable:</b> You gain Inspiration.",
                    "• <b>Wealthy:</b> You gain Inspiration. Roll your largest Hit Die and gain temporary hit points equal to the roll + your Constitution modifier. The Hit Die is not expended.",
                    "• <b>Aristocratic:</b> You gain inspiration and temporary hit points equal to your largest Hit Die’s maximum roll + your Constitution modifier."
                ]
            }
        ]
    }
];
