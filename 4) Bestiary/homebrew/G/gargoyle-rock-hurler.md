---
noteType: pf2eMonster
tags:
  - pf2e/creature/type/elemental
  - pf2e/creature/level/12
statblock: inline
alias: Gargoyle Rock Hurler
name: gargoyle-rock-hurler
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
name: Gargoyle Rock Hurler
level: Creature 12
alignment: NE
size: Medium
trait_01: Elemental
trait_02: Earth
trait_03: Humanoid
languages: Terran
perception:
  - name: Perception
    desc: "+24; __darkvision__"
skills:
  - name: Skills
    desc: "__Stealth__ +24"
abilityMods: [5, 4, 3, -2, 3, 2]

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +26, __Ref__ +22, __Will__ +22"
hp: 165
health:
  - name: HP
    desc: "165"
speed: 25 feet, fly 40 feet

abilities_top:
  - name: Stone Defense
    desc: "The gargoyle has resistance 10 to all damage from creatures more than 25 feet away (5 squares)."

attacks:
  - name: Melee
    desc: "⬻ Claw +25 (magical); __Damage__ (2d8+8) 2d8+8 slashing"
  - name: Ranged
    desc: "⬻ Hurled Stone +27 (range increment 60 feet); __Damage__ (3d6+9) 3d6+9 bludgeoning"
  - name: Hail of Hurled Stone
    desc: "⬺ __Effect__ The gargoyle hurls a barrage of stones. All creatures in a 10-foot radius make a DC 32 Reflex save or suffer (2d6+7) 2d6+7 bludgeoning damage. The target creature suffers (2d6+12) 2d6+12 bludgeoning damage."
