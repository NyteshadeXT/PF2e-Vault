---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Linn"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Linn"
level: 9
---


```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Linn"
level: "Creature 9"
rare_02: "Uncommon"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Shapechanger"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18; __Darkvision__; +2 circumstance bonus to detect lies."
languages: "Common, any two other languages"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +18 (1d20+18); __Diplomacy__: +20 (1d20+20); __Thievery__: +19 (1d20+19);"
abilityMods: [4, 5, 3, 2, 3, 4]

abilities_top:
  - name: "Quick Draw"
    desc: "Linn can draw a weapon as part of the action used to Strike with it."
  - name: "Change Shape"
    desc: "([[polymorph]], [[arcane]]); Linn alters her physical form to appear as a Medium humanoid and changes the appearance of her clothing and gear until she uses change shape again or is reduced to 0 Hit Points. To assume a specific individual’s form, Linn must have seen that individual. A creature can detect the disguise with a successful DC 29 [[Perception]] check."
abilities_mid:
  - name: "Cloud Mind"
    desc: "⬺ ([[charm]], [[arcane]]); __Frequency__ 1/day. __Effect__ Linn targets one creature within 30 feet. The target must succeed at a DC 27 Will save or become unable to perceive Linn for 1 minute or until Linn attacks the target. This effect ends early if the target takes damage from Linn or another source."
  - name: "Shapeshifter Feint"
    desc: "⬻ ([[arcane]], [[mental]]); Linn targets one creature within 5 feet. The target must succeed at a DC 25 Reflex save or become [[Flat-Footed]] against Linn's attacks until the end of Linn's next turn."
abilities_bot:
  - name: "Combat Advantage"
    desc: "Linn deals an additional `dice: 2d6` precision damage to creatures that are [[Flat-Footed]]."


speed: 30 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__: +16 (1d20+16); __Ref__: +20 (1d20+20); __Will__: +18 (1d20+18);"
hp: 120
health:
  - name: HP
    desc: "120"

attacks:
  - name: Melee
    desc: "⬻ Dagger +19 ([[agile]], [[finesse]], [[versatile P]]); __Damage__ `dice: 2d6+6` piercing plus `dice: 2d6` precision on [[Flat-Footed]] targets."
  - name: Ranged
    desc: "⬻ Thrown Dagger +19 ([[agile]], [[thrown]], [[finesse]]); __Damage__ `dice: 2d6+6` piercing."

equipment: +2 Striking Dagger, disguise kit, dark clothing
sourcebook: "Custom Encounter"
```

```encounter-table
name: Linn
creatures:
  - 1: Linn
```
