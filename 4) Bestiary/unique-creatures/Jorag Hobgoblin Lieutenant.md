---
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/14
statblock: inline
name: Jorag
level: 14
---

```statblock
layout: Basic Pathfinder 2e Layout
name: Jorag
level: Creature 14
alignment: LE
size: Medium
trait_01: Humanoid
trait_02: Goblin
trait_03: Hobgoblin
languages: Common, Goblin
perception:
  - name: Perception
    desc: "+25; __darkvision__"
skills:
  - name: Skills
    desc: "__Athletics__ +27, __Intimidation__ +28, __Warfare Lore__ +25"
abilityMods: [4, 2, 5, 1, 2, 4]
ac: 34
armorclass:
  - name: AC
    desc: "34; __Fort__ +27, __Ref__ +24, __Will__ +29"
hp: 230
health:
  - name: HP
    desc: "230"
speed: 25 feet
abilities_top:
  - name: Equipment
    desc: "[[Greater Striking]] +1 [[Whip]], +2 [[Javelin]]s (3), +2 [[Resilient Scale Mail]]"
abilities_mid:
  - name: Phalanx Movement
    desc: "⬽ __Frequency__ once per round. __Effect__ Jorag and each adjacent ally can Step as a free action, but must end adjacent to Jorag. This does not trigger reactions."
  - name: Swift Whip
    desc: "⬲ __Trigger__ A creature within 10 feet uses a hostile action or makes an attack that doesn't include Jorag. __Effect__ Jorag makes a Whip Strike against the triggering creature. On a hit, the target takes normal damage and the creature takes a –2 circumstance penalty to the triggering attack. This is a [[mental]] and [[emotion]] effect."
attacks:
  - name: Melee
    desc: "⬻ Whip +29 (agile, finesse, nonlethal, reach 10 feet); __Damage__ (2d4+11) 2d4+11 slashing"
  - name: Ranged
    desc: "⬻ Javelin +29 (thrown 30 feet); __Damage__ (2d6+10) 2d6+10 piercing"
```
