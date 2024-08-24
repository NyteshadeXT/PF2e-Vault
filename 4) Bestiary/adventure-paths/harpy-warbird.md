---
noteType: pf2eMonster
aliases: "Harpy Warbird"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/11
statblock: inline
name: "Harpy Warbird"
level: 11
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "AP"
name: "Harpy Warbird"
level: "Creature 11"
alignment: "CE"
size: "Medium"
trait_04: "Humanoid"
modifier: 20
perception:
  - name: "Perception"
    desc: "Perception +20; __darkvision__"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +21 (1d20+21); __Athletics__: +20 (1d20+20); __Intimidation__: +22 (1d20+22); __Performance__: +24 (1d20+24);"
abilityMods: [5, 5, 3, 0, 3, 5]

abilities_top:
  - name: "Attack of Opportunity"
    desc: "⬲  The harpy can make an attack of opportunity."
  - name: "Items"
    desc: "+1 composite shortbow (20 arrows), +1 striking halberd"

speed: 20 feet, fly 60 feet

ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__: +18 (1d20+18); __Ref__: +22 (1d20+22); __Will__: +20 (1d20+20);"
hp: 200
health:
  - name: HP
    desc: "200; __Resistances__ 22"

attacks:
  - name: Melee
    desc: "⬻ halberd +23 ([[magical]], [[reach|reach 10 feet]], [[versatile|versatile S]]); __Damage__ 2d10+11 (2d10+11) piercing"
  - name: Melee
    desc: "⬻ talon +22 ([[agile]], [[finesse]]); __Damage__ 2d4+11 (2d4+11) slashing"
  - name: Ranged
    desc: "⬻ shortbow +23 ([[deadly d10]], [[magical]], [[propulsive]], [[range increment|range increment 60 feet]], [[reload|reload 0]]); __Damage__ 1d6+11 (1d6+11) piercing"

abilities_bot:
  - name: "Captivating Song"
    desc: " ([[auditory]], [[concentrate]], [[enchantment]], [[incapacitation]], [[mental]], [[primal]]); The harpy cries out an eerie, compelling melody. Each non-harpy creature within a 300-foot aura must attempt a DC 29 Will save to avoid becoming captivated by the harpy's song. The effect lasts for 1 round, but if the harpy uses this ability again on subsequent rounds, it extends the duration by 1 round for all affected creatures. Once a creature succeeds at any save against Captivating Song, that creature is temporarily immune to Captivating Songs for 24 hours. \n__Success__ The creature is unaffected.\n__Failure__ The creature is fascinated, and it must spend each of its actions to move closer to the harpy as expediently as possible, while avoiding obvious dangers. If a captivated creature is adjacent to the harpy, it stays still and doesn't act. If attacked by the harpy, the creature is freed from captivation at the end of the harpy's turn.\__Critical Failure__ As failure, but if attacked by the harpy, the creature can attempt a new save at the start of its next turn, rather than being freed at the end of the harpy's turn."
  - name: "War Formation"
    desc: "  A harpy warbird deals an extra 2d6 damage with its melee [[Strike|Strikes]] to any creature that's within reach of at least one of the harpy's allies."

Sourcebook: "_Pathfinder #190: The Choosing pg. 53_"
```


