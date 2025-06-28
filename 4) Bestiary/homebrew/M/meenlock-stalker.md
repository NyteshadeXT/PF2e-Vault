---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/level/10
statblock: inline
name: Meenlock Stalker
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[meenlock-stalker.webp|Show to Players]]"
source: 4e Conversion
name: "Meenlock Stalker"
level: "Creature 10"
rare_03: "Rare"
alignment: "[[chaotic evil]]"
size: "[[small]]"
traits:
  - "[[aberration]]"
  - "[[psychic]]"
  - "[[telepathic]]"
  - "[[fear]]"
  - "[[disease]]"
modifier: 20
perception: 
  - name: "Perception"
    desc: "+18; darkvision"
languages: Common, Deep Speech, telepathy 100 feet
skills:
  - Athletics: +17
  - Stealth: +21
  - Occultism: +18
  - Deception: +20
  - Intimidation: +19
attributes:
  - str: 2
  - dex: 6
  - con: 4
  - int: 2
  - wis: 3
  - cha: 5
speed: 25 feet

ac: 30
saves:
  - fort: +17
  - ref: +20
  - will: +18
hp: 165
immunities: "[[meenlock corruption]]"

attacks:
  - name: "Melee"
    desc: "⬻ claw +22 ([[magical]], [[agile]]); __Damage__ 2d6+9 slashing"

abilities_mid:
  - name: "Horrid Link"
    desc: "⬸ [[occult]], [[mental]] — The meenlock links its mind to one creature within 60 feet. The link lasts until the start of the meenlock’s next turn or until it uses this ability again. Whenever the meenlock takes damage, the linked target takes 2d10+6 psychic damage."
  - name: "Maddening Whispers"
    desc: "⬺ [[occult]], [[emotion]], [[mental]] — Targets a creature affected by *Horrid Link*. The target must attempt a DC 28 Will save. On a failure, it takes 5d6 psychic damage and is [[dazed]] for 1 round. On a critical failure, the dazed condition lasts until the end of its next turn."
  - name: "Twisting Whispers"
    desc: "⬺ [[occult]], [[emotion]], [[mental]], [[disease]] — Targets a creature affected by *Horrid Link*. The target must attempt a DC 28 Will save. On a failure, it takes 5d6 psychic damage and immediately uses its reaction to make a basic melee Strike chosen by the meenlock. The target then contracts [[Meenlock Corruption]]."
  - name: "Dimension Step"
    desc: "⬸ [[teleportation]] — The meenlock teleports up to 40 feet to a space it can see."

abilities_bot:
  - name: "Meenlock Corruption"
    desc: "[[disease]], [[curse]], [[mental]], [[occult]] — Will DC 28; **Stage 1 (1 day):** –2 status penalty to Will saves;<br>**Stage 2 (1 day):** as Stage 1 and [[flat-footed]] to all creatures;<br>**Stage 3 (1 day):** as Stage 2, and the creature is compelled to seek the meenlock lair as if under *dominate*;<br>**Stage 4 (permanent):** The creature transforms into a meenlock spawn and becomes an NPC under GM control. Saving Throw Frequency: 1/day during daily preparations."
```
