data_called_shots = [
    {
        title: "Rules Overview",
        optional: "Homebrew rule",
        icon: "magnifying-glass",
        subtitle: "How to use called shots",
        description: "General rules for making and determining the outcome of called shots.",
        reference: "Homebrew Rule",
        bullets: [
            {
                title: "Declaration",
                collapsible: true,
                content: [
                    "A player can declare a called shot before making an attack roll. The DM determines the feasibility based on armor, creature anatomy, and size.",
                    "Some locations can't be targeted if the target of the attack is properly armored. A helmet, for example, would make it impossible to hit the ears or possibly the eyes.",
                    "An arm holding a shield would be well-protected by the shield. Monsters without armor might be invulnerable to some effects.",
                    "A creature with multiple eyes may not be affected by a single eye attack until after a portion of those eyes have been affected.",
                    "The DM could rule that a beholder's eyelid is thick enough to deflect arrows (thus making it immune to called shots against its eye, but an eyestalk might incur the arm penalty), or that skeletons are immune to called shots because of their lack of muscle or inability to feel pain.",
                    "Monsters that are large enough might be immune to called shots from smaller weapons.",
                    "For example, a Huge dragon could be immune to Called Shots from Medium creatures, simply because their weapons aren't large enough to deal debilitating damage to it.",
                    "Creatures that are immune to critical hits or that don't have a discernible anatomy are immune to called shots.",
                    "<b>You may only call for 1 called shot per turn regardless of outcome.</b> If you hit the creature with your called attack, it takes half damage from your attack."
                ]
            },
            {
                title: "Critical Called Shots",
                collapsible: true,
                content: [
                    "If a natural 20 is rolled on the attack roll, the called shot is considered critical.",
                    "Roll an additional damage die for the attack, and the consequences of the called shot are more severe (DM discretion)."
                ]
            },
            {
                title: "Ranged Called Shots",
                collapsible: true,
                content: [
                    "For ranged attacks, additional penalties may be applied based on the distance to the target:",
                    "<b>Short Range</b> (up to half the weapon's normal range): No penalty.",
                    "<b>Long Range</b> (beyond half the weapon's normal range): -2 penalty.",
                    "The <i>Sharpshooter</i> feat removes this penalty."
                ]
            },
            {
                title: "Flying Creatures",
                collapsible: true,
                content: [
                    "Some flying creature may be vulnerable to a shot in the wing.",
                    "A flying creature shot in the wing descends involuntarily 10ft or has its movement reduced by 10ft for one turn.",
                    "The outcome will be determined prior to the shot."
                ]
            },
            {
                title: "Healing",
                collapsible: true,
                content: [
                    "Magical healing can restore the effects of called shots."
                ]
            }
        ]
    },
    {
        title: "Hit Die Expansion",
        optional: "Homebrew rule",
        icon: "target-dummy",
        subtitle: "Using Hit Die to boost called shots",
        description: "During the declaration, a player may choose to expend Hit Die to change the outcome of the attack.",
        reference: "Homebrew Rule",
        bullets: [
            "<b>1 Hit Die:</b> Reduce the attack penalty by 2. The attack penalty cannot be reduced further by spending additional Hit Die.",
            "<b>2 Hit Die:</b> Deal full damage instead of half damage.",
            "<b>1 Hit Die:</b> Prolong the effects of the attack by 1d4 turns.",
            "<b>2 Hit Die:</b> Prolong the effects of the attack by 2d4 turns."
        ]
    },
    {
        title: "Head (-5)",
        optional: "Homebrew rule",
        icon: "headshot",
        subtitle: "Penalty: -5",
        description: "Targeting the head to disorient the foe.",
        reference: "Homebrew Rule",
        bullets: [
            "-2 penalty to AC and Dexterity Saving Throws.",
            "The target can't use Reactions until the end of its next turn."
        ]
    },
    {
        title: "Ear (-5)",
        optional: "Homebrew rule",
        icon: "human-ear",
        subtitle: "Penalty: -5",
        description: "Targeting the ear to deafen the foe.",
        reference: "Homebrew Rule",
        bullets: [
            "Disadvantage on Wisdom (Perception) Hearing checks.",
            "The target is <b>Deafened</b> until the end of its next turn."
        ]
    },
    {
        title: "Eye (-5)",
        optional: "Homebrew rule",
        icon: "bleeding-eye",
        subtitle: "Penalty: -5",
        description: "Targeting the eye to blind the foe.",
        reference: "Homebrew Rule",
        bullets: [
            "Disadvantage on Wisdom (Perception) Sight checks.",
            "The target is <b>Blinded</b> until the end of its next turn."
        ]
    },
    {
        title: "Neck (-5)",
        optional: "Homebrew rule",
        icon: "decapitation",
        subtitle: "Penalty: -5",
        description: "Targeting the throat to silence the foe.",
        reference: "Homebrew Rule",
        bullets: [
            "Can't speak above a hoarse whisper for 1d4 rounds.",
            "40% chance that spells with a verbal component or command word items fail."
        ]
    },
    {
        title: "Bleeding (-5)",
        optional: "Homebrew rule",
        icon: "dripping-blade",
        subtitle: "Penalty: -5",
        description: "Causing a deep wound.",
        reference: "Homebrew Rule",
        bullets: [
            "Applies the <b>Bleeding</b> Condition.",
            "Additional called shots apply the <b>Hemorrhaging</b> Condition."
        ]
    },
    {
        title: "Chest (-5)",
        optional: "Homebrew rule",
        icon: "ribcage",
        subtitle: "Penalty: -5",
        description: "Targeting the torso for a heavy blow.",
        reference: "Homebrew Rule",
        bullets: [
            "Disadvantage on the next Strength, Dexterity, or Constitution Saving Throw until next rest."
        ]
    },
    {
        title: "Vitals (-5)",
        optional: "Homebrew rule",
        icon: "heart-organ",
        subtitle: "Penalty: -5",
        description: "Targeting internal organs.",
        reference: "Homebrew Rule",
        bullets: [
            "Disadvantage on the first attack roll or ability check it makes until the end of its next turn."
        ]
    },
    {
        title: "Arm (-3)",
        optional: "Homebrew rule",
        icon: "mailed-fist",
        subtitle: "Penalty: -3",
        description: "Targeting an arm to weaken attacks.",
        reference: "Homebrew Rule",
        bullets: [
            "-2 penalty on attack rolls and ability checks using that arm until the end of its next turn."
        ]
    },
    {
        title: "Leg/Wing (-3)",
        optional: "Homebrew rule",
        icon: "boot-stomp",
        subtitle: "Penalty: -3",
        description: "Targeting a limb to hinder movement.",
        reference: "Homebrew Rule",
        bullets: [
            "If it has two or fewer legs, its speed is halved until the end of its next turn.",
            "If it has more than two legs, its speed is reduced by 10 feet until the end of its next turn."
        ]
    }
]
