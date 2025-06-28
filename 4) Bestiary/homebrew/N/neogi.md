---
obsidianUIMode: preview
noteType: pf2eMonster
statblock: inline
tags:
  - pf2e/creature/type/aberration
  - pf2e/creature/level/13
name: Yalax
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Pathfinder 2e Creature Layout
token: "[[neogi.webp|Show to Players]]"
source: 4e Conversion
name: "Yalax"
level: "Creature 13"
rare_03: "Uncommon"
alignment: "[[evil]]"
size: "[[large]]"
traits:
  - "[[aberration]]"
  - "[[psychic]]"
  - "[[magical]]"
  - "[[mental]]"
modifier: 24
perception: 
  - name: "Perception"
    desc: "+24; darkvision"
languages: Common, Deep Speech; telepathy 60 feet
skills:
  - Arcana: +23
  - Bluff: +24
  - Insight: +22
  - Intimidation: +24
attributes:
  - str: 4
  - dex: 1
  - con: 5
  - int: 5
  - wis: 3
  - cha: 5
speed: 30 feet, climb 20 feet

ac: 32
saves:
  - fort: +25
  - ref: +21
  - will: +26
hp: 245
immunities: "[[dazed]]"

attacks:
  - name: "Melee"
    desc: "⬻ scything claw +26 ([[magical]]); __Damage__ 2d8+12 slashing, and Yalax may [[stride]] the target 5 feet"

abilities_mid:
  - name: "Enslave"
    desc: "⬺ [[psychic]], [[enchantment]], [[incapacitation]] — Ranged 60 feet; +24 vs. Will. On a hit, the target takes 3d6+14 psychic damage and takes a –2 status penalty to attack rolls against Yalax (DC 33 Will save ends). First failed save: target is [[dazed]] and takes the penalty. Second failed save: target is [[dominated]] (save ends)."
  - name: "Psychic Shackles"
    desc: "⬺ [[psychic]], [[enchantment]], [[area]] — 20-foot burst within 60 feet; DC 33 basic Will save. On a failure, the target takes 5d8+15 psychic damage and is [[immobilized]] (save ends). On a success: half damage and the target is [[slowed]] (save ends). Usable once per hour."
  - name: "Mind Twist"
    desc: "⬸ [[psychic]], [[enchantment]] — Once per round. Ranged 60 feet; Will DC 33. On a failure, the target must make a Strike against a target of Yalax's choice. It may choose to take 15 psychic damage instead of making the attack."

abilities_bot:
  - name: "Larva Burst"
    desc: "[[reaction]], [[psychic]], [[mental]] — Trigger: Yalax is first reduced to half HP. Effect: 10-foot emanation; DC 33 basic Reflex save. On a failure, the creature takes 4d10+18 damage and is [[slowed]] (save ends). The area becomes [[difficult terrain]] until the end of the encounter due to squirming grubs and larvae."
```
