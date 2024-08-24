---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Elite Harpy"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Elite Harpy"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B1"
name: "Elite Harpy"
level: "Creature 6"
alignment: "CE"
size: "Medium"
trait_03: "Humanoid"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +14; __darkvision__;"
languages: "Common; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +15 (1d20+15); __Deception__: +15 (1d20+15); __Intimidation__: +13 (1d20+13); __Performance__: +16 (1d20+16), (Performance: +18 (1d20+18) singing); "
abilityMods: [1, 4, 0, -1, 1, 4]

abilities_bot:
  - name: "Captivating Song"
    desc: "⬻ ([[auditory]], [[concentrate]], [[enchantment]], [[incapacitation]], [[mental]], [[primal]]);  The harpy cries out an eerie, compelling melody. Each non-harpy creature within a 300-foot aura must attempt a DC 23 Will save to avoid becoming captivated by the harpy's song. The effect lasts for 1 round, but if the harpy uses this ability again on subsequent rounds, it extends the duration by 1 round for all affected creatures. Once a creature succeeds at any save against Captivating Song, that creature is temporarily immune to Captivating Songs for 24 hours.\n__Success__ The creature is unaffected.\n__Failure__ The creature is [[rules/conditions.md#Fascinated|fascinated]], and it must spend each of its actions to move closer to the harpy as expediently as possible, while avoiding obvious dangers. If a captivated creature is adjacent to the harpy, it stays still and doesn't act. If attacked by the harpy, the creature is freed from captivation at the end of the harpy's turn.\n__Critical Failure__ As failure, but if attacked by the harpy, the creature can attempt a new save at the start of its next turn, rather than being freed at the end of the harpy's turn."
abilities_top:
  - name: Items
    desc: "club;"

speed: 20 feet, fly 60 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +11 (1d20+11); __Ref__: +15 (1d20+15); __Will__: +12 (1d20+12);"
hp: 88
health:
  - name: HP
    desc: "88; "


attacks:
  - name: Melee
    desc: "⬻ club +14 __Damage__ 1d6 + 6 bludgeoning"
  - name: Melee
    desc: "⬻ talon +17 ([[agile]], [[finesse]]); __Damage__ 2d6 + 6 slashing"
  - name: Ranged
    desc: "⬻ club +17 ([[thrown|thrown 10 feet]]); __Damage__ 1d6 + 6 bludgeoning"

sourcebook: "_Bestiary_, page 204."
```


```encounter-table
name: Elite Harpy
creatures:
  - 1: Elite Harpy
```
