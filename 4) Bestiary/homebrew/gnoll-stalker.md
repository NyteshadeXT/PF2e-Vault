---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Gnoll Stalker"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Gnoll Stalker"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Gnoll Stalker"
level: "Creature 10"
alignment: "CE"
size: "Medium"
trait_03: "Gnoll"
trait_04: "Humanoid"
modifier: 7
perception:
  - name: "Perception"
    desc: "Perception +22; __darkvision__;"
languages: "Gnoll; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +21 (1d20+21); __Athletics__: +22 (1d20+22); __Intimidation__: +17 (1d20+17); __Stealth__: +21 (1d20+21); __Survival__: +19 (1d20+19); "
abilityMods: [7, 5, 3, -1, 3, 1]

abilities_bot:
  - name: "Pack Attack"
    desc: "  A gnoll hunter deals 2d4 (2d4) extra damage to any creature that's within reach of at least two of the gnoll hunter's allies."
  - name: "Rugged Travel"
    desc: "  A gnoll ignores the first square of [[rules/core-rulebook/chapter-9-playing-the-game.md#Terrain|difficult terrain]] it moves into each time it [[Step|Steps]] or [[Stride|Strides]]."
abilities_top:
  - name: Items
    desc: "+1 battle axe, +1 leather armor, +1 striking shortbow (20 arrows);"

speed: 25 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +22 (1d20+22); __Ref__: +19 (1d20+19); __Will__: +19 (1d20+19);"
hp: 172
health:
  - name: HP
    desc: "172; "


attacks:
  - name: Melee
    desc: "⬻ battle axe +21 ([[sweep]]); __Damage__ 2d8+7 (2d8+7) slashing"
  - name: Melee.
    desc: "⬻ jaws +21 ([[agile]]); __Damage__ 2d8+ (2d8+7) piercing"
  - name: Ranged
    desc: "⬻ shortbow +21 ([[deadly|deadly 1d10]], [[range-increment|range increment 60 feet]]); __Damage__ 3d6 (3d6) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Gnoll Stalker
creatures:
  - 1: Gnoll Stalker
```
