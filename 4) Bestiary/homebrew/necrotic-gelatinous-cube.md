---
noteType: pf2eMonster
aliases: "Necrotic Gelatinous Cube"
tags: 
  - pf2e/creature/type/ooze
  - pf2e/creature/level/7
statblock: inline
name: "Necrotic Gelatinous Cube"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Necrotic Gelatinous Cube"
level: "Creature 7"
alignment: "N"
size: "Large"
trait_03: "Ooze"
trait_04: "Mindless"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12; __motion sense  60 feet__, __no vision__;"
abilityMods: [4, -5, 5, -5, 0, -5]

abilities_top:
  - name: "Motion Sense"
    desc: "  A necrotic gelatinous cube can sense nearby motion through vibration and air movement."
  - name: "Transparent"
    desc: "  A gelatinous cube is so clear that it's difficult to spot. A successful DC 28 [[Perception]] check is required to notice a stationary cube, and a creature must be Searching to attempt this check. A creature that walks into the cube is automatically Engulfed (this usually causes the GM to call for initiative)."
  - name: "Engulf DC 23,"
    desc: "  3d8+8 (3d8+8) acid, [[Escape]] DC 23, Rupture 10. A creature Engulfed by the necrotic gelatinous cube must also attempt a saving throw against paralysis."
abilities_bot:
  - name: "Paralysis"
    desc: " ([[incapacitation]]);  A creature Engulfed by the cube or hit by its attack is [[paralyzed|paralyzed]] unless it succeeds at a DC 25 Fortitude save. A victim can attempt a new save to recover at the end of each of its turns."
  - name: "Weak Acid"
    desc: "  A necrotic gelatinous cube's acid damages only organic material-not metal, stone, or other inorganic substances."
  - name: "Necrosis"
    desc: "  Creatures who die while being Engulfed by the necrotic gelatinous cube becomes an undead creature appropriate to it's level as determined by the GM."

speed: 15 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +18 (1d20+18); __Ref__: +0 (1d20+0); __Will__: +8 (1d20+8);"
hp: 148
health:
  - name: HP
    desc: "148; "


attacks:
  - name: Melee
    desc: "⬻ cube face +11 __Damage__ 3d6+8 (3d6+8) acid plus paralysis"

sourcebook: "Homebrew"
```

```encounter-table
name: Necrotic Gelatinous Cube
creatures:
  - 1: Necrotic Gelatinous Cube
```
