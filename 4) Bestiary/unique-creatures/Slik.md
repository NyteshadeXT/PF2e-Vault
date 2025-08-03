---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Slik"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Slik"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Slik"
level: "Creature 9"
rare_02: "Uncommon"
alignment: "CE"
size: "Small"

modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +18; __darkvision__;"
languages: "Draconic;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +19 (1d20+19); __Crafting__: +18 (1d20+18); __Stealth__: +21 (1d20+21); __Thievery__: +21 (1d20+21);"
abilityMods: [1, 7, 3, 4, 5, 3]

abilities_top:
  - name: "Trap Sense"
    desc: "Slik gains a +2 circumstance bonus to AC, Reflex saves, and Perception checks against traps."
  - name: "Equipment"
    desc: "+1 resilient leather armor, short sword, +2 striking sling (with specialized ammunition), Tanglefoot Bags (Greater) x3."

abilities_mid:
  - name: "Quick Setup"
    desc: "([[manipulate]]); Slik can spend an action to quickly arm or disable a simple trap or hazard within reach. He rolls Thievery to disable or Crafting to arm the trap as part of this action."
  - name: "Shifty"
    desc: "⬲  Slik strides 5 feet without triggering reactions."
  - name: "Triggered Traps"
    desc: "⬺ ([[manipulate]], [[fire]], [[mechanical]]); __Trigger__ A creature moves adjacent to or interacts with one of Slik's placed traps. __Effect__ Slik triggers the trap, forcing the triggering creature to make a Reflex save (DC 28)."

abilities_bot:
  - name: "Contraptions Unleashed"
    desc: "⬺ ([[mechanical]], [[area]]); __Frequency__ 1/day; __Effect__ Slik activates an area of mechanical traps within a 10-foot burst. Each creature in the area must make a DC 28 Reflex save. On a failure, they take 4d6 piercing damage and are moved 10 feet (GM's discretion for direction). On a critical failure, they are immobilized until they succeed at an Escape check."
  - name: "Trick Shot"
    desc: "⬻ ([[attack]], [[agile]], [[reload]]); Slik fires a specially prepared shot from his sling. __Effect__ Slik chooses one of the following effects for his attack: __Flame Shot__: The target takes `dice: 2d6` fire damage. __Glue Shot__: The target is [[immobilized]] until the end of its next turn. __Slick Shot__: The target is pushed 10 feet."
  - name: "Watch Your Step"
    desc: "⬲ ([[reaction]], [[fire]], [[melee]]); __Trigger__ A creature moves adjacent to Slik. __Effect__ Slik lashes out with his short sword, dealing `dice: 2d6+4` fire damage and pushing the target 5 feet."
speed: 25 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +18 (1d20+18); __Ref__: +21 (1d20+21); __Will__: +18 (1d20+18);"
hp: 135
health:
  - name: HP
    desc: "135;"
attacks:
  - name: Melee
    desc: "⬻ Short Sword +19 ([[agile]], [[magical]]); __Damage__ 2d6+7 (2d6+7) slashing, and Slik can push the target 5 feet."
  - name: Ranged
    desc: "⬻ Sling +21 ([[agile]], [[magical]]); __Damage__ 2d6+7 (2d6+7) bludgeoning."


```

