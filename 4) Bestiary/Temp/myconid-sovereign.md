---
noteType: pf2eMonster
aliases: "Myconid Sovereign"
tags: 
  - pf2e/creature/type/fungus
  - pf2e/creature/level/8
statblock: inline
name: "Myconid Sovereign"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Myconid Sovereign"
level: "Creature 8"
token: [[myconid-guard-20240430153751394.webp]]
alignment: "N"
size: "Medium"
trait_03: "Fungus"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12;"
skills:
  - name: "Skills"
    desc: "__Diplomacy__: +18 (1d20+18); __Intimidation__: +16 (1d20+16); "
abilityMods: [0, 2, 6, 0, 1, 3]

abilities_bot:
  - name: "Spore Burst"
    desc: "  All targets within 15 feet of the sovereign suffer 2d6+8 (2d6+8) poison damage, and must attempt a DC 27 Fortitude save or become [[slowed|slowed]], loseing one action, until the end of the targets next turn."
  - name: "Commanding Spores"
    desc: "  All myconid allies withing in 25 feet of the sovereign immediately gain and use one free action as a [[Stride]] or [[Strike]]. The myconid sovereign commands the allegiance of its colony. This towering fungal leader holds silent court over its underlings."

speed: ; 30;

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +19 (1d20+19); __Ref__: +11 (1d20+11); __Will__: +15 (1d20+15);"
hp: 173
health:
  - name: HP
    desc: "173; "


attacks:
  - name: Melee
    desc: "⬻ slam +18 __Damage__ 2d8+9 (2d8+9) bludgeoning"

sourcebook: "Homebrew"
```

```encounter-table
name: Myconid Sovereign
creatures:
  - 1: Myconid Sovereign
```
