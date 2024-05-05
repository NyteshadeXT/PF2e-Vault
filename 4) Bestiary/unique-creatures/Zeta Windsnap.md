---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Zeta Windsnap"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/3
statblock: inline
name: "Zeta Windsnap"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Zeta Windsnap"
level: "Creature 3"
alignment: "CG"
size: "Medium"
trait_03: "Human"
trait_04: "Half-Elf"
trait_05: "Humanoid"
modifier: 11
perception:
  - name: "Perception"
    desc: "Perception +8; low-light vision;"
languages: "Common, Sylvan; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +4 (1d20+4); __Athletics__: +6 (1d20+6); __Diplomacy__: +6 (1d20+6); __Lore: Farming__: +5 (1d20+5); __Medicine__: +6 (1d20+6); __Nature__: +8 (1d20+8); __Stealth__: +9 (1d20+9); __Survival__: +6 (1d20+6); __Thievery__: +9 (1d20+9); "
abilityMods: [1, 4, 2, 0, 1, 1]

abilities_bot:
  - name: "Hunted Shot"
    desc: "⬻ ([[flourish]]); __Frequency__ Once per round __Requirements__ You are wielding a ranged weapon with reload 0. You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purposes of resistances and weaknesses. Apply your multiple attack penalty to each strike normally."
  - name: "Hunt Prey"
    desc: "⬻ You designate a single creature as your prey and focus your attacks against that creature. You must be able to see or hear the prey, or you must be tracking the prey during exploration. You gain a +2 circumstance bonus to Perception checks when you Seek your prey and a +2 circmustance bonus to Survival checks when you Track your prey. You also ignore the penalty for making ranged attacks within your second range increment againts the prey your hunting. You can have only one creature designated as your prey at a time. If you use Hunt Prey against a creature when you already have a creature designated, the prior creature loses the designation and the new prey gains the designation. Your designation lasts until your next daily preperations."
abilities_top:
  - name: Items
    desc: "composite shortbow (100 arrows), shortsword, leather armor;"

speed: 25 feet

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +9 (1d20+9); __Ref__: +11 (1d20+11); __Will__: +8 (1d20+8);"
hp: 44
health:
  - name: HP
    desc: "44; "


attacks:
  - name: Melee
    desc: "⬻ +1 shortsword +10 ([[agile]], [[finesse]], [[versatile|versatile p]]); __Damage__ 1d6+1 (1d6+1) slashing"
  - name: Ranged
    desc: "⬻ composite shortbow +9 ([[deadly|deadly 1d10]]); __Damage__ 1d6+1 (1d6+1) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Zeta Windsnap
creatures:
  - 1: Zeta Windsnap
```
