---
noteType: pf2eMonster
aliases: "Mutant Bat"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/5
statblock: inline
name: "Mutant Bat"
level: 5
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "Pathfinder #180: The Smoking Gun pg. 2"
name: "Mutant Bat"
level: "Creature 5"
rare_02: "Uncommon"
alignment: "N"
size: "Huge"
trait_04: "Animal"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __precise echolocation__, __low-light vision__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +13 (1d20+13); __Athletics__: +13 (1d20+13); __Stealth__: +13 (1d20+13); "
abilityMods: [5, 2, 4, -4, 4, -2]

abilities_top:
  - name: "Echolocation"
    desc: "  A bat can use its hearing as a precise sense at the listed range."
abilities_mid:
  - name: "Wing Slash"
    desc: "__Trigger__ An adjacent enemy damages the mutant bat __Effect__ The bat makes one or two wing Strikes—one against the triggering creature and one against another adjacent creature."

speed: 15 feet, fly 30 feet

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +13 (1d20+13); __Ref__: +12 (1d20+12); __Will__: +11 (1d20+11);"
hp: 75
health:
  - name: HP
    desc: "75; "


attacks:
  - name: Melee
    desc: "⬻ fangs +14 __Damage__ 2d10+7 (2d10+7) slashing"
  - name: Melee
    desc: "⬻ wing +14 ([[agile]]); __Damage__ 2d8+7 (2d8+7) piercing"

sourcebook: "_Pathfinder #180: The Smoking Gun pg. 2_."
```

```encounter-table
name: Mutant Bat
creatures:
  - 1: Mutant Bat
```
