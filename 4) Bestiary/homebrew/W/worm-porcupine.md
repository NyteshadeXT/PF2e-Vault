---
noteType: pf2eMonster
aliases: "Worm Porcupine"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/type/beast
  - pf2e/creature/level/13
statblock: inline
name: "worm-porcupine"
level: 13
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Worm Porcupine"
level: "Creature 13"
rare_01: "Rare"
alignment: "CE"
size: "Medium"
trait_01: "Aberration"
trait_02: "Beast"
modifier: 25
perception:
  - name: "Perception"
    desc: "+25; low-light vision"
languages: "—"
skills:
  - name: "Skills"
    desc: "__Athletics__ +27, __Intimidation__ +22, __Stealth__ +23"
abilityMods: [6, 2, 5, -2, -1, 0]

abilities_mid:
  - name: "Quill Defense"
    desc: "⬲ When a creature within 10 feet hits the worm porcupine with a melee attack, that creature takes `dice: 3d6` 3d6 piercing damage (DC 33 basic Reflex save for half)."
  - name: "Aberrant Fortitude"
    desc: "The worm porcupine gains a +2 status bonus to saving throws against forced movement and attempts to slow it."

abilities_bot:
  - name: "Quill Strike"
    desc: "⬻ ([[attack]], [[aberration]]); +27 ([[reach|reach 10 feet]] or ranged 30 feet). __Damage__ `dice: 3d10+12` 3d10+12 piercing plus `dice: 2d6` 2d6 persistent bleed. On a hit, the target must succeed at a DC 33 Fortitude save or be [[slowed|slowed 1]] for 1 round."
  - name: "Wriggling Quills"
    desc: "⬺ ([[aberration]], [[mental]]); The worm porcupine forces its lodged quills to wriggle and drag prey. Each creature within 30 feet suffering persistent bleed damage from its Quill Strike must succeed at a DC 31 Reflex save or be pulled 10 feet closer."
  - name: "Impaling Rush"
    desc: "⬺ The worm porcupine Strides up to its Speed in a straight line. During this movement, it makes a Quill Strike against each creature whose space it enters."
  - name: "Thrash"
    desc: "⬻ The worm porcupine makes one Strike with its quills and one Strike with its tusks against the same target. If both hit, the target is knocked [[prone]]."

speed: 25 feet

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__ +27, __Ref__ +23, __Will__ +20"

hp: 220
health:
  - name: HP
    desc: "220; __Immunities__ slowed; __Resistances__ piercing 10, slashing 10"

attacks:
  - name: "Melee Tusks"
    desc: "⬻ +27; __Damage__ `dice: 3d12+12` 3d12+12 piercing"
  - name: "Melee Quills"
    desc: "⬻ +27 ([[reach|reach 10 feet]]); __Damage__ `dice: 3d10+12` 3d10+12 piercing plus slowed (DC 33 Fortitude)"
  - name: "Ranged Quills"
    desc: "⬻ +25 ([[range increment|range increment 30 feet]]); __Damage__ `dice: 3d10+12` 3d10+12 piercing plus slowed (DC 33 Fortitude)"

sourcebook: "Custom"

```