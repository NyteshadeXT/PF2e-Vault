---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Dark Talon Kobold"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/2
statblock: inline
name: "Dark Talon Kobold"
level: 2
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "CotKK"
name: "Dark Talon Kobold"
level: "Creature 2"
alignment: "LE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Kobold"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__;"
languages: "Common, Draconic; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +8 (1d20+8); __Athletics__: +7 (1d20+7); __Crafting__: +6 (1d20+6) / __Traps__ +8 (1d20+8); __Stealth__: +8 (1d20+8); __Survival__: +8 (1d20+8); "
abilityMods: [1, 4, 3, 0, 2, 0]

abilities_bot:
  - name: "No Retreat"
    desc: "⬻ __Frequency__ Once per day; __Requirements__ The Dark Talon Kobold is is adjacent to at least one enemy, and has fewer then 12 Hit Points.  __Effect__ The Dark Talon Kobold shrieks in fury and regains 2d6 (2d6) Hit Points"
  - name: "Sneak Attack"
    desc: "  The kobold warrior deals an extra 1d6 (1d6) precision damage to [[rules/conditions.md#Flat-Footed|flat-footed]] creatures."
abilities_top:
  - name: Items
    desc: "studded armor, flying talon;"

speed: 25 feet

ac: 19
armorclass:
  - name: AC
    desc: "19; __Fort__: +9 (1d20+9); __Ref__: +10 (1d20+10); __Will__: +6 (1d20+6);"
hp: 26
health:
  - name: HP
    desc: "26; "


attacks:
  - name: Melee
    desc: "⬻ flying talon +10 ([[finesse]], [[trip]]); __Damage__ 1d4+3 (1d4+3) piercing"
  - name: Ranged
    desc: "⬻ flying talon +10 ([[ranged trip]], [[tethered]], [[thrown 10 feet]]); __Damage__ 1d4+3 (1d4+3) piercing"

sourcebook: "Crown of the Kobold King_"
```

```encounter-table
name: Dark Talon Kobold
creatures:
  - 1: Dark Talon Kobold
```
