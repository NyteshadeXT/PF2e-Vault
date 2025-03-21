---
noteType: pf2eMonster
aliases: "Tengu Tribal"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Tengu Tribal"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Tengu Tribal"
level: "Creature 6"
alignment: "CN"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Tengu"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __low-light vision__;"
languages: "Common, Tengu;  plus two others;"
skills:
  - name: "Skills"
    desc: "__Stealth__: +13 (1d20+13); "
abilityMods: [4, 7, 5, 2, 5, 4]

abilities_top:
  - name: "Mimicry"
    desc: "  A kenku tribal can mimic sounds and voices. A successful Insight check opposed by the tribal's [[Lie]] [[Deception]] check allows a listener to determine that the effect is faked."
  - name: Items
    desc: "leather armor, spear, 5 javelins;"
abilities_bot:
  - name: "Go for the Eyes"
    desc: " ([[incapacitation]]); __Trigger__ The tengu critically hits with a beak [[Strike]]. __Effect__  The tengu attempts to peck out its victim's eyes. The target must attempt a DC 17 Fortitude save."

speed: 25 feet

ac: 21
armorclass:
  - name: AC
    desc: "21; __Fort__: +11 (1d20+11); __Ref__: +14 (1d20+14); __Will__: +11 (1d20+11);"
hp: 67
health:
  - name: HP
    desc: "67; "


attacks:
  - name: Melee
    desc: "⬻ spear +12 ([[thrown]], [[range increment 20 feet]]); __Damage__ 1d6+4 (1d6+4) piercing"
  - name: Melee
    desc: "⬻ beak +12 ([[finesse]]); __Damage__ 2d4+7 (2d4+7) piercing"
  - name: Ranged
    desc: "⬻ javelin +15 ([[thrown]], [[range increment 30 feet]]); __Damage__ 1d6 (1d6) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Tengu Tribal
creatures:
  - 1: Tengu Tribal
```
