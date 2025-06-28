---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/xulgath
  - pf2e/creature/level/10
statblock: inline
name: Xulgath Warrior Elite
level: 10
---

```statblock
layout: Pathfinder 2e Creature Layout
name: Xulgath Warrior Elite
level: Creature 10
source: Pathfinder Beginner Box

alignment: ""
size: "[[medium]]"
traits:
  - "[[humanoid]]"
  - "[[xulgath]]"

modifier: 18
senses: darkvision
languages: —
skills:
  - Athletics: +22
  - Stealth: +18
attributes:
  - str: 7
  - dex: 4
  - con: 5
  - int: 1
  - wis: 3
  - cha: 2
speed: 25 feet

ac: 28
saves:
  - fort: +20
  - ref: +19
  - will: +16
hp: 179

abilities_mid:
  - name: Stench
    desc: "(aura, olfactory) 30 feet, DC 28 – A creature that enters the aura or starts its turn there must succeed at a Fortitude save or become [[Sickened 1]]. On a failure, the creature takes a –1 status penalty to all checks and DCs until it uses an action to retch. A creature that succeeds isn't affected by any xulgath's stench for 1 minute."

attacks:
  - name: ___Melee___ ⬻ club
    desc: ""
    bonus: +21
    damage: "2d12+20 bludgeoning"
  - name: ___Melee___ ⬻ jaws
    desc: ([unarmed](rules/traits/unarmed.md))
    bonus: +21
    damage: "2d12+20 piercing"
  - name: ___Melee___ ⬻ claw
    desc: ([agile](rules/traits/agile.md), [unarmed](rules/traits/unarmed.md))
    bonus: +21
    damage: "2d12+14 slashing"
  - name: ___Ranged___ ⬻ javelin
    desc: ([thrown 30 feet](rules/traits/thrown-30.md))
    bonus: +19
    damage: "2d12+20 piercing"
