---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Gnoll Warleader"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/11
statblock: inline
name: "Gnoll Warleader"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Gnoll Warleader"
level: "Creature 11"
alignment: "CE"
size: "Medium"
trait_03: "Gnoll"
trait_04: "Humanoid"
modifier: 10
perception:
  - name: "Perception"
    desc: "Perception +21; __darkvision__;"
languages: "Common, Gnoll; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +23 (1d20+23); __Intimidation__: +19 (1d20+19); __Stealth__: +21 (1d20+21); __Survival__: +20 (1d20+20); "
abilityMods: [7, 4, 4, 1, 3, 1]

abilities_mid:
  - name: "Attack of Opportunity"
    desc: "⬲ "
abilities_top:
  - name: Items
    desc: "+1 hide armor, +1 striking hopeful flail;"
abilities_bot:
  - name: "Bark Orders"
    desc: "⬻ ([[auditory]], [[linguistic]]);  The gnoll sergeant commands its allies to reposition. Any allies who hear and understand this order can use a reaction to [[Step]]."
  - name: "Pack Attack"
    desc: "  A gnoll hunter deals 2d4 (2d4) extra damage to any creature that's within reach of at least two of the gnoll hunter's allies."
  - name: "Rugged Travel"
    desc: "  A gnoll ignores the first square of [[rules/core-rulebook/chapter-9-playing-the-game.md#Terrain|difficult terrain]] it moves into each time it [[Step|Steps]] or [[Stride|Strides]]."

speed: 25 feet

ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__: +24 (1d20+24); __Ref__: +21 (1d20+21); __Will__: +18 (1d20+18);"
hp: 195
health:
  - name: HP
    desc: "195; "


attacks:
  - name: Melee
    desc: "⬻ +1 striking hopeful flail +22 ([[disarm]], [[sweep]], [[trip]]); __Damage__ 3d6+7 (3d6+7) slashing plus on crit +1 to hit for all allies on their next turn"
  - name: Melee.
    desc: "⬻ jaws +22 ([[agile]]); __Damage__ 3d6+7 (1d6+7) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Gnoll Warleader
creatures:
  - 1: Gnoll Warleader
```
