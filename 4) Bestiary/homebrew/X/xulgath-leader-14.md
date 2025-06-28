---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/xulgath
  - pf2e/creature/level/14
statblock: inline
name: Xulgath Leader Elite
level: 14
---

```statblock
layout: Pathfinder 2e Creature Layout
name: Xulgath Leader Elite
level: Creature 14
source: Pathfinder Monster Core

alignment: ""
size: "[[medium]]"
traits:
  - "[[humanoid]]"
  - "[[xulgath]]"

modifier: 25
senses: darkvision
languages: draconic, sakvroth
skills:
  - Athletics: +29
  - Intimidation: +22
  - Stealth: +22
attributes:
  - str: 8
  - dex: 4
  - con: 4
  - int: 2
  - wis: 4
  - cha: 4
speed: 25 feet

ac: 35
saves:
  - fort: +25
  - ref: +22
  - will: +25
hp: 254

abilities_mid:
  - name: Stench
    desc: "(aura, olfactory) 30 feet, DC 33 – A creature that enters the aura or starts its turn there must succeed at a Fortitude save or become sickened."

abilities_bot:
  - name: Weakening Strike
    desc: "A creature hit by a xulgath leader's jaws or claw Strike is [[Enfeebled 1]] (or [[Enfeebled 2]] on a critical hit) for 1 round."

attacks:
  - name: ___Melee___ ⬻ greataxe
    desc: ([sweep](rules/traits/sweep.md))
    bonus: +25
    damage: "3d10+18 slashing"
  - name: ___Melee___ ⬻ jaws
    desc: ([unarmed](rules/traits/unarmed.md))
    bonus: +25
    damage: "3d8+15 piercing plus weakening strike"
  - name: ___Melee___ ⬻ claw
    desc: ([agile](rules/traits/agile.md), [unarmed](rules/traits/unarmed.md))
    bonus: +25
    damage: "3d6+14 slashing plus weakening strike"
  - name: ___Ranged___ ⬻ javelin
    desc: ([thrown 30 feet](rules/traits/thrown-30.md))
    bonus: +22
    damage: "3d6+12 piercing"
