---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Primal Owlbear"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/10
statblock: inline
name: "Primal Owlbear"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Primal Owlbear"
level: "Creature 10"
alignment: "N"
size: "Large"
trait_03: "Animal"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __low-light vision__, __imprecise scent 30__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +15 (1d20+15); __Athletics__: +22 (1d20+22); __Intimidation__: +19 (1d20+19); "
abilityMods: [7, 3, 6, -4, 5, 1]

abilities_bot:
  - name: "Bloodcurdling Screech"
    desc: "⬻ ([[auditory]], [[emotion]], [[fear]], [[mental]]);  The primal owlbear unleashes a loud screech that terrifies its prey. Each creature in an 80-foot emanation must attempt a DC 28 Will save. Regardless of the result, creatures are temporarily immune for 1 minute.\n__Critical Success__ The creature is unaffected.\n__Success__ The creature is [[rules/conditions.md#Frightened|frightened 1]].\n__Failure__ The creature is [[rules/conditions.md#Frightened|frightened 2]].\n__Critical Failure__ The creature is [[rules/conditions.md#Fleeing|fleeing]] for 1 round and [[rules/conditions.md#Frightened|frightened 3]]."
  - name: "Gnaw"
    desc: "⬻ __Requirements__ The primal owlbear has a creature [[rules/conditions.md#Grabbed|grabbed]] with its talons.  __Effect__  The owlbear attempts to disembowel the creature with a beak [[Strike]]. If the [[Strike]] hits, the target must attempt a DC 30 Will save.\n__Critical Success__ The target is unaffected.\n__Success__ The target is [[rules/conditions.md#Sickened|sickened 1]].\n__Failure__ The target is [[rules/conditions.md#Sickened|sickened 1]] and [[rules/conditions.md#Slowed|slowed 1]] as long as it remains [[rules/conditions.md#Sickened|sickened]]."
  - name: "Screeching Advance"
    desc: "⬺ ([[auditory]], [[emotion]], [[fear]], [[mental]]);  The primal owlbear makes a Bloodcurdling Screech and [[Stride|Strides]] twice. All creatures within 80 feet of the owlbear at any point during this movement are subjected to the effects of Bloodcurdling Screech."

speed: 25 feet

ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__: +22 (1d20+22); __Ref__: +16 (1d20+16); __Will__: +19 (1d20+19);"
hp: 172
health:
  - name: HP
    desc: "172; "


attacks:
  - name: Melee
    desc: "⬻ talon +23 ([[agile]]); __Damage__ 2d10+6 (2d10+6) piercing plus Grab"
  - name: Melee
    desc: "⬻ beak +23 __Damage__ 2d12+6 (2d12+6) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Primal Owlbear
creatures:
  - 1: Primal Owlbear
```
