---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Skin Beetle"
tags: 
  - pf2e/creature/type/animal
  - pf2e/creature/level/3
statblock: inline
name: "Skin Beetle"
level: 3
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "AP"
name: "Skin Beetle"
level: "Creature 3"
alignment: "N"
size: "Tiny"
trait_03: "Animal"
modifier: 9
perception:
  - name: "Perception"
    desc: "Perception +9; __low-light vision__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +10 (1d20+10); __Medicine__: +9 (1d20+9); __Stealth__: +10 (1d20+10);"
abilityMods: [1, 4, 2, -5, 2, -2]

abilities_top:
  - name: "Surgical Mandibles"
    desc: "A skin beetle can use it's mandibles as healer's tools."

abilities_mid:
  - name: "Anesthetic Saliva"
    desc: " ([[poison]]);  A creature exposed to a skin beete's alivea must succeed on a DC 19 Fortitude save or become [[rules/conditions.md#Clumsy|clumsy 1]] for 1 round."

abilities_bot:
  - name: "Harvest Flesh"
    desc: "⬺  The skin beetle makes a mandibles [[Strike]] against an animal or humanoid.  If the [[Strike]] deals damage, the beetle tears off a large portion of flesh, dealing an additional 1d6 (1d6) persistent bleed damage."

speed: 20 feet, burrow 15 feet, fly 15 feet

ac: 18
armorclass:
  - name: AC
    desc: "18; __Fort__: +9 (1d20+9); __Ref__: +13 (1d20+13); __Will__: +7 (1d20+7);"
hp: 55
health:
  - name: HP
    desc: "55; "

attacks:
  - name: Melee
    desc: "⬻ mandibles +13 ([[agile]], [[finesse]]); __Damage__ 1d8+4 (1d8+4) piercing"
  - name: Ranged
    desc: "⬻ spit +13 ([[range 30 feet]]); __Damage__ 1d6+4 (1d6+4) acid pluse anesthetic saliva"

sourcebook: "_Pathfinder #188: They Watched the Stars_, page 89."
```

```encounter-table
name: Skin Beetle
creatures:
  - 1: Skin Beetle
```
