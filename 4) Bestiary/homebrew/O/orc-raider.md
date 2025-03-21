---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Orc Raider"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Orc Raider"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Orc Raider"
level: "Creature 6"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Orc"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14; __darkvision__;"
languages: "Orc; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +13 (1d20+13); __Intimidation__: +9 (1d20+9); __Survival__: +9 (1d20+9); "
abilityMods: [4, 2, 3, -1, 1, 0]

abilities_mid:
  - name: "Attack of Opportunity"
    desc: "⬲ "
  - name: "Ferocity"
    desc: "⬲ "
abilities_top:
  - name: Items
    desc: "breastplate, javelin (4), orc necksplitter, shortsword (2);"

speed: 25 feet

ac: 18
armorclass:
  - name: AC
    desc: "23; __Fort__: +17 (1d20+17); __Ref__: +14 (1d20+14); __Will__: +11 (1d20+1);"
hp: 95
health:
  - name: HP
    desc: "95; "


attacks:
  - name: Melee
    desc: "⬻ orc necksplitter +15 ([[forceful]], [[sweep]]); __Damage__ 2d8+8 (2d8+8) slashing"
  - name: Melee
    desc: "⬻ shortsword +15 ([[agile]], [[versatile|versatile p]]); __Damage__ 2d6+4 (2d6+4) slashing"
  - name: Melee
    desc: "⬻ fist +15 ([[agile]], [[nonlethal]]); __Damage__ 2d4+4 (2d4+4) bludgeoning"
  - name: Ranged
    desc: "⬻ javelin +12 ([[thrown|thrown 30 feet]]); __Damage__ 6d6+4 (1d6+4) piercing"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Orc Raider
creatures:
  - 1: Orc Raider
```
