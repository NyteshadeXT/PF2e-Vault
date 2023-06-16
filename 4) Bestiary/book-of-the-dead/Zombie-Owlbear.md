---
noteType: pf2eMonster
aliases: "Zombie Owlbear"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/3
statblock: inline
name: "Zombie Owlbear"
level: 3
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "BotD"
name: "Zombie Owlbear"
level: "Creature 3"
alignment: "NE"
size: "Large"
trait_03: "Mindless"
trait_04: "Undead"
trait_05: "Zombie"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +8; __darkvision__;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +5 (1d20+5), __Athletics__: +12 (1d20+12); "
abilityMods: [4, 0, 3, -5, +1, -3]

abilities_top:
  - name: "Slow"
    desc: "  A zombie owlbear is permanently [[slowed|slowed 1]] and can't use reactions."

abilities_mid:

abilities_bot:

speed: 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +8 (1d20+8); __Ref__: +5 (1d20+5); __Will__: +6 (1d20+6);"
hp: 85
health:
  - name: HP
    desc: "85; negative healing; __Immunities__ mental, poison, death effects, disease, paralyzed, unconscious; __Weaknesses__ positive 10, slashing 10;"


attacks:
  - name: Melee
    desc: "⬻ talon +12, __Damage__ 1d10+7 (1d10+7) piercing plus [[grab]]"
  - name: Melee
    desc: "⬻ beak +12, __Damage__ 1d12+7 (1d12+7) piercing"
  - name: Ground Slam
    desc: "⬺ claw +25 ([[attack]]); __Requirements__ The zombie owlbear has a creature [[grab|grabbed]] or [restrained]; __Effect__ The zombie owlbear repeatedly slams the creature into the ground. This deals 1d10+7 (1d10+7) bludgeoning damage (DC 20 Fortitude save). On a critical failure, the creature is [[conditions#Stunned|Stunned 1]], and on a critical success the creature is no longer grabbed or restrained."
  - name: Horrifying Screech
    desc: "⬻ ([[auditory]], [[emotion]], [[fear]], [[mental]]); The zombie owlbear unleashes a broken, snarling screech that unnerves those who hear it. Each creature in a 60-foot emanation must attempt a DC 19 Will save. Regardless of the result, creatures are temporarily immune for 1 minute. \n__Critical Success__ The creature is unaffectd.\n__Success__ The creature is [[conditions#Frightened|frightened 1]].\n__Failure__ The creature is [[conditions#Frightened|frightened 2]]. \n__Critical Failure__ The creature is [[conditions#Fleeing|fleeing]] for 1 round and [[conditions#Frightened|frightened 3]]."

sourcebook: "_Book of the Dead_, page 171."
```

```encounter-table
name: Zombie Owlbear
creatures:
  - 1: Zombie Owlbear
```