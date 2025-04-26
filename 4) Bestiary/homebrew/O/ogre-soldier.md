---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Ogre Soldier"
tags: 
  - pf2e/creature/type/giant
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Ogre Warrior"
level: 10
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Ogre Soldier"
level: "Creature 10"
alignment: "CE"
size: "Large"
trait_03: "Giant"
trait_04: "Humanoid"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__;"
languages: "Jotun; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +24 (1d20+24); __Intimidation__: +19 (1d20+19);"
abilityMods: [8, 1, 7, -2, 2, -2]

abilities_top:
  - name: Items
    desc: "breastplate, +1 [[striking]] ogre hook, javelin x5;"

speed: 25 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__: +21 (1d20+21); __Ref__: +16 (1d20+16); __Will__: +15 (1d20+15);"
hp: 182
health:
  - name: HP
    desc: "182; "


attacks:
  - name: Melee
    desc: "⬻ ogre hook +21 ([[deadly|deadly 1d10]], [[reach|reach 10 feet]], [[trip]]); __Damage__ 2d12+14 (2d12+14) piercing"
  - name: Ranged
    desc: "⬻ javelin +15 ([[thrown|thrown 30 feet]]); __Damage__ 2d10+12 (2d10+12) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Ogre Soldier
creatures:
  - 1: Ogre Soldier
```
