---
noteType: pf2eMonster
aliases: "Kan Sken"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Kan Sken"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Kan Sken"
level: "Creature 9"
alignment: "N"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Elf"
trait_06: "Half-Elf"
trait_07: "Human"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18"
languages: "Common, Elven"
skills:
  - name: "Skills"
    desc: "__Athletics__: +18 (1d20+18); __Diplomacy__: +18 (1d20+18); __Stealth__: +16 (1d20+16);"
abilityMods: [6, 7, 4, 3, 3, 6]

abilities_top:
  - name: "Slash and Dash"
    desc: "⬺ Kan Sken makes a [[Strike|longsword attack]], moves up to 10 feet, and then makes a [[Strike|dagger attack]]. The dagger attack does not suffer the multiple attack penalty. Any additional attacks follow MAP, and this attack counts as two attacks for the purposes of MAP."
  - name: "Items"
    desc: "+1 leather armor, +1 striking longsword, 6 daggers"

speed: 25 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +18 (1d20+18); __Ref__: +21 (1d20+21); __Will__: +18 (1d20+18);"
hp: 159
health:
  - name: HP
    desc: "159"

attacks:
  - name: Melee
    desc: "⬻ longsword +19 ([[versatile P]]); __Damage__ 3d8+6 (3d8+6) slashing"
  - name: Melee
    desc: "⬻ dagger +16 ([[agile]], [[finesse]], [[thrown|thrown 10 feet]], [[versatile]]); __Damage__ 1d4+6 (1d4+6) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Kan Sken
creatures:
  - 1: Kan Sken
```