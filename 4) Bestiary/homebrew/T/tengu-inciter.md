---
noteType: pf2eMonster
aliases: "Tengu Inciter"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Tengu Inciter"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Tengu Inciter"
level: "Creature 7"
alignment: "CN"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Tengu"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __low-light vision__;"
languages: "Common, Tengu;  plus two others;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +13 (1d20+13); __Athletics__: +13 (1d20+13); __Deception__: +15 (1d20+15); __Intimidation__: +15 (1d20+15); "
abilityMods: [4, 7, 4, 2, 4, 6]

abilities_bot:
  - name: "Go for the Eyes"
    desc: " ([[incapacitation]]); __Trigger__ The tengu critically hits with a beak [[Strike]]. __Effect__  The tengu attempts to peck out its victim's eyes. The target must attempt a DC 17 Fortitude save."
  - name: "Chain Slide Reach"
    desc: "  2 with a successful spiked chain attack the target the target is moved 15 feet in a direction of the Tengu Inciter's choice."
  - name: "Flock Reaction All"
    desc: "  Tengu within 15 feet of the Tengu Inciter automatically move 5 feet in a direction of their choosing as a free action."
abilities_top:
  - name: Items
    desc: "leather armor, sling, spiked chain;"

speed: 25 feet

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +15 (1d20+15); __Ref__: +15 (1d20+15); __Will__: +12 (1d20+12);"
hp: 111
health:
  - name: HP
    desc: "111; "


attacks:
  - name: Melee
    desc: "⬻ spiked chain +16 ([[disarm]], [[finesse]], [[trip]]); __Damage__ 2d8+8 (2d8+8) slashing"
  - name: Melee
    desc: "⬻ beak +16 ([[finesse]]); __Damage__ 2d6+4 (2d6+4) piercing"
  - name: Ranged
    desc: "⬻ sling +18 ([[propulsive]], [[range increment 50 feet]], [[reload 1]]); __Damage__ 1d6 (1d6) bludgeoning"

sourcebook: "Homebrew"

```

```encounter-table
name: Tengu Inciter
creatures:
  - 1: Tengu Inciter
```
