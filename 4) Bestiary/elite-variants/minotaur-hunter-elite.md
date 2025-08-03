---
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/12
statblock: inline
name: minotaur-hunter-elite
alias: Minotaur Hunter Elite
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
name: Minotaur Hunter Elite
level: Creature 12
alignment: CE
size: Medium
trait_01: Humanoid
trait_02: Minotaur
languages: Common, Minotaur
perception:
  - name: Perception
    desc: "+24; __scent (imprecise) 30 feet__"
skills:
  - name: Skills
    desc: "__Athletics__ +27, __Intimidation__ +24, __Survival__ +22"
abilityMods: [5, 2, 4, 1, 2, 2]

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +27, __Ref__ +23, __Will__ +22"
hp: 180
health:
  - name: HP
    desc: "180"
speed: 30 feet

abilities_top:
  - name: Equipment
    desc: "+2 [[Striking Greataxe]], [[studded leather armor]]"
abilities_mid:
  - name: Blood Tracker
    desc: "The minotaur can smell the presence of wounded creatures. It gains a +2 circumstance bonus to Survival checks to Track creatures that are below their maximum Hit Points."
  - name: Labyrinth Sense
    desc: "The minotaur always knows the shortest, most direct route to the center of any maze or labyrinthine terrain."
  - name: Powerful Charge
    desc: "⬺ __Requirements__ The minotaur Strides at least 10 feet in a straight line immediately before the Strike. __Effect__ The minotaur makes a horn Strike. On a hit, it deals an additional 1d8 damage and the target must succeed at a DC 32 Fortitude save or be knocked [[prone]]."
  
attacks:
  - name: Greataxe
    desc: "⬻ Melee +27 (magical, sweep, two-hand d12); __Damage__ (2d12+11) 2d12+11 slashing"
  - name: Horns
    desc: "⬻ Melee +25; __Damage__ (2d8+9) 2d8+9 piercing"
