---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Foulspwan Mangler"
tags: 
  - pf2e/creature/type/giant
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Foulspwan Mangler"
level: 8
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Foulspwan Mangler"
level: "Creature 8"
alignment: "CE"
size: "Medium"
trait_03: "Aberration"
trait_04: "Humanoid"
trait_05: "Foulspawn"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __low-light vision__;"
languages: "Undercommon, telepathy 10ft. ; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +16 (1d20+16); __Stealth__: +18 (1d20+18);"
abilityMods: [5, 7, 2, 4, 3, 4]

abilities_top:
  - name: Items
    desc: "+1 [[striking]] dagger x6;"
abilities_bot:
  - name: "Dagger Dance"
    desc: "`pf2:3` ([[move]]); The mangler uses dagger attacks three times and can Step up2 squares after each attack."

speed: 35 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +16 (1d20+16); __Ref__: +19 (1d20+19); __Will__: +16 (1d20+16);"
hp: 131
health:
  - name: HP
    desc: "131; "


attacks:
  - name: Melee
    desc: "⬻ dagger +18 ([[agile|Agile]], [[finesse|Finesse]], [[thrown|Thrown 10ft.]], [[versatile|Versatile S]]); __Damage__ 2d4+5 (2d4+5) piercing plus 1d6 (1d6) persistent bleed"
  - name: Ranged
    desc: "⬻ dagger +20 ([[agile|Agile]], [[finesse|Finesse]], [[thrown|Thrown 10ft.]], [[versatile|Versatile S]]); __Damage__ 2d4+5 (2d4+5) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Foulspwan Mangler
creatures:
  - 1: Foulspwan Mangler
```
