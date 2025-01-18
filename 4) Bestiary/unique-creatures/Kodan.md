---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Kodan, Hobgoblin Conqueror"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Kodan, Hobgoblin Conqueror"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Kodan, Hobgoblin Conqueror"
level: "Creature 10"
alignment: "LE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Goblin"
modifier: 20
perception:
  - name: "Perception"
    desc: "Perception +18; __low-light vision__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +22 (1d20+22); __Diplomacy__: +18 (1d20+18); __Intimidation__: +20 (1d20+20); __Lore: Warfare__: +20 (1d20+20); __Society__: +18 (1d20+18);"
abilityMods: [6, 2, 3, 4, 4, 5]

abilities_top:
  - name: "Lead from the Front"
    desc: "  When Kodan hits an enemy with a melee attack, all allies within 30 feet gain a +2 circumstance bonus to attack rolls and damage rolls against that enemy until the end of Kodan’s next turn."
  - name: Items
    desc: " +1 striking spear, +1 resilient scale mail, sturdy shield (hardness 10, HP 40);"

abilities_mid:
  - name: "Tactical Deployment"
    desc: "⬺ __Frequency__ once per round; __Effect__ Kodan directs allies within 30 feet to reposition. Each ally in range can Step or Stride up to 15 feet as a free action."
  - name: "Redeploy"
    desc: "⬲ __Trigger__ An enemy adjacent to Kodan and marked by him takes a Step or Stride. __Effect__ Kodan can immediately Stride up to his Speed and make a melee [[Strike]] against another enemy within reach."

speed: 25 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__: +20 (1d20+20); __Ref__: +17 (1d20+17); __Will__: +18 (1d20+18);"
hp: 185
health:
  - name: HP
    desc: "185; __Immunities__ fear effects; __Resistances__ physical 5 (from his shield);"

attacks:
  - name: Melee
    desc: "⬻ spear +22 ([[reach]] 10 feet); __Damage__ `dice: 2d8+8` piercing and the target is [[rules/conditions.md#Flat-Footed|flat-footed]] until the end of Kodan's next turn."
  - name: Melee.
    desc: "`pf2:2` spear spin +22 ([[reach]] 10 feet); __Damage__ Kodan makes two spear [[Strike]]s. If both hit the same target, the target is slowed 1 ([[rules/conditions.md#Slowed|Slowed]]) for 1 round."
  - name: Melee..
    desc: "⬻ Roar of the Crowd (1/Day); __Effect__ Kodan makes a melee [[Strike]] against one target. __Hit__ `dice: 3d10+8` damage, plus 2 damage for each ally within 30 feet of Kodan."

sourcebook: "Custom."

```


```encounter-table
name: Kodan
creatures:
  - 1: Kodan
```