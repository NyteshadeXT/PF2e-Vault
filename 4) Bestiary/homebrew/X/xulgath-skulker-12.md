---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/xulgath
  - pf2e/creature/level/12
statblock: inline
name: Xulgath Skulker Elite
level: 12
---

```statblock
layout: Pathfinder 2e Creature Layout
name: Xulgath Skulker Elite
level: Creature 12
source: Pathfinder Monster Core

alignment: ""
size: "[[medium]]"
traits:
  - "[[humanoid]]"
  - "[[xulgath]]"

modifier: 21
senses: darkvision
languages: draconic, sakvroth
skills:
  - Acrobatics: +25
  - Stealth: +25
  - Thievery: +25
attributes:
  - str: 5
  - dex: 7
  - con: 4
  - int: 2
  - wis: 4
  - cha: 3
speed: 25 feet

ac: 32
saves:
  - fort: +22
  - ref: +24
  - will: +19
hp: 211

abilities_mid:
  - name: Stench
    desc: "(aura, olfactory) 30 feet, DC 30 – A creature that enters the aura or starts its turn there must succeed at a Fortitude save or become [[Sickened 1]]."
  - name: Hidden Movement
    desc: "If a xulgath skulker starts its turn [[Undetected]] or [[Hidden]], that creature is [[Off-Guard]] against its attacks until the end of the skulker’s turn."
  - name: Mask Stench
    desc: "The skulker masks its stench with curated herbs, suppressing the stench aura. It can resume the aura as a free action."
  - name: Sneak Attack
    desc: "The skulker deals an additional 1d6 precision damage to [[Off-Guard]] creatures."

attacks:
  - name: ___Melee___ ⬻ dagger
    desc: ([agile](rules/traits/agile.md), [finesse](rules/traits/finesse.md), [versatile S](rules/traits/versatile-s.md))
    bonus: +24
    damage: "3d6+10 piercing"
  - name: ___Melee___ ⬻ jaws
    desc: ([unarmed](rules/traits/unarmed.md))
    bonus: +23
    damage: "3d6+10 piercing"
  - name: ___Melee___ ⬻ claw
    desc: ([agile](rules/traits/agile.md), [finesse](rules/traits/finesse.md), [unarmed](rules/traits/unarmed.md))
    bonus: +24
    damage: "3d6+10 slashing"
