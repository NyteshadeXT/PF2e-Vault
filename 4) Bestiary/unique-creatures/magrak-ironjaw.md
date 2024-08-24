---
noteType: pf2eMonster
aliases: "Magrak Ironjaw"
tags: 
  - pf2e/creature/type/beast
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Magrak Ironjaw"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Magrak Ironjaw"
level: "Creature 10"
alignment: "CN"
size: "Medium"
trait_04: "Beast"
trait_05: "Human"
trait_06: "Humanoid"
trait_07: "Werecreature"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __low-light vision__, __scent__ (imprecise) 30 feet"
languages: "Common; boar empathy"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +19 (1d20+19); __Athletics__: +22 (1d20+22); __Intimidation__: +17 (1d20+17); __Survival__: +19 (1d20+19);"
abilityMods: [5, 0, 3, 0, 1, 0]

abilities_top:
  - name: "Boar Empathy"
    desc: "([[divination]], [[primal]]); The wereboar can communicate with boars and pigs."
  - name: "Items"
    desc: "dagger"

speed: 25 feet

ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__: +22 (1d20+22); __Ref__: +19 (1d20+19); __Will__: +18 (1d20+18);"
hp: 179
health:
  - name: HP
    desc: "179; __Weaknesses__: silver 5"

attacks:
  - name: Melee
    desc: "⬻ tusk +21; __Damage__ 2d8+12 piercing plus [[Curse of the Wereboar]]"
  - name: Melee
    desc: "⬻ claw +21 ([[agile]]); __Damage__ 2d4+12 piercing"
  - name: Melee
    desc: "⬻ dagger +21 ([[agile]], [[versatile|versatile S]]); __Damage__ 1d4+5 piercing"
  - name: Ranged
    desc: "⬻ dagger +17 ([[agile]], [[thrown|thrown 10 feet]], [[versatile|versatile S]]); __Damage__ 1d4+5 piercing"

abilities_bot:
  - name: "Ferocity"
    desc: "  ⬲ When Magrak Ironjaw would be reduced to 0 HP, he can avoid being knocked unconscious and remains at 1 HP."
  - name: "Boar Charge"
    desc: "⬺ The wereboar Strides twice and then makes a melee Strike. As long as they moved at least 20 feet, they gain a +2 circumstance bonus to their attack roll."
  - name: "Change Shape"
    desc: "⬻ ([[concentrate]], [[polymorph]], [[primal]], [[transmutation]]); The werecreature changes into their humanoid, hybrid, or animal shape. Each shape has a specific, persistent appearance. A true werecreature's natural form is their hybrid shape. In humanoid shape, the werecreature uses their original humanoid size, loses their jaws and claw Strikes, and gains a melee fist Strike that deals bludgeoning damage equal to the slashing damage dealt by their claw. In animal shape, their Speed and size change to that of the animal, they gain any special Strike effects of the animal that they didn't already have (such as Grab), and they lose their weapon Strikes."
  - name: "Moon Frenzy"
    desc: "([[polymorph]], [[primal]], [[transmutation]]); When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases their reach by 5 feet, and increases the damage of their jaws Strike by 2. When the moon sets or the sun rises, the werecreature returns to humanoid form and is fatigued for 2d4 hours."
  - name: "Curse of the Wereboar"
    desc: "([[curse]], [[necromancy]], [[primal]]); This curse affects only humanoids; Saving Throw DC 23 Fortitude. On each full moon, the cursed creature must succeed at another Fortitude save or turn into a wereboar until dawn. The creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn."
sourcebook: "Homebrew"
```

```encounter-table
name: Magrak Ironjaw
creatures:
  - 1: Magrak Ironjaw
```