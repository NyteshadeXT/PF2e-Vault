---
noteType: pf2eMonster
aliases: "Dronvi Thald"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Dronvi Thald"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Dronvi Thald"
level: "Creature 9"
alignment: "LE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Half-Orc"
trait_06: "Human"
trait_07: "Orc"
modifier: 21
perception:
  - name: "Perception"
    desc: "Perception +21"
languages: "Common, Giant"
skills:
  - name: "Skills"
    desc: "__Athletics__: +18 (1d20+18); __Nature__: +16 (1d20+16);"
abilityMods: [3, 3, 2, 0, 1, -1]

abilities_top:
  - name: "First Blood"
    desc: "  Dronvi Thald's attacks deal 1d10 extra damage against any target that has not yet taken damage during the encounter."
  - name: "Items"
    desc: "+1 leather armor, battleaxe, corrosive +1 striking longbow, 20 arrows"

speed: 25 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +18 (1d20+18); __Ref__: +18 (1d20+18); __Will__: +15 (1d20+15);"
hp: 151
health:
  - name: HP
    desc: "151"

attacks:
  - name: Melee
    desc: "⬻ battle axe +16 ([[Sweep]]); __Damage__ 1d8+3 (1d8+3) slashing"
  - name: Ranged
    desc: "⬻ longbow +19 ([[Deadly d10]], [[Volley|Volley 30 feet]]); __Damage__ 3d8+3 (3d8+3) piercing plus 1d6 (1d6) acid"

sourcebook: "Homebrew"
```

```encounter-table
name: Dronvi Thald
creatures:
  - 1: Dronvi Thald
```
