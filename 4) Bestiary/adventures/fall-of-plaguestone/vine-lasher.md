---
noteType: pf2eMonster
aliases: "Vine Lasher"
tags: 
  - pf2e/creature/type/plant
  - pf2e/creature/level/0
statblock: inline
name: "Vine Lasher"
level: 0
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "FoP"
name: "Vine Lasher"
level: "Creature 0"
alignment: "N"
size: "Small"
trait_03: "Plant"
modifier: 4
perception:
  - name: "Perception"
    desc: "Perception +4; __tremorsense (imprecise) 30 feet__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +6 (1d20+6); __Stealth__: +5 (1d20+5); "
abilityMods: [2, 3, 2, -4, 0, 0]

abilities_bot:
  - name: Melee
    desc: "⬻ vine +7 ([[agile]], [[finesse]], [[reach 10 feet]]), __Damage__ 1d8+2 (1d8+2) bludgeoning plus [[Grab]]"
  - name: "Light Hold"
    desc: "A creature grabbed by a vine lasher is not immobilized, but the grabbed creature’s space and every adjacent square use the rules for difficult terrain. If the creature moves, the vine lasher moves with it, always keeping the grabbed creature within 10 feet of itself. If two or more vine lashers have a creature grabbed in this way, then the target’s space and adjacent square instead use the rules for greater difficult terrain."

speed: 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +6 (1d20+6); __Ref__: +7 (1d20+7); __Will__: +4 (1d20+4);"
hp: 15
health:
  - name: HP
    desc: "15; "


attacks:

sourcebook: "_The Fall of Plaguestone_."
```

```encounter-table
name: Vine Lasher
creatures:
  - 1: Vine Lasher
```
