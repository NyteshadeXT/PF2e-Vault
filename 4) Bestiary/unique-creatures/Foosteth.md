---
noteType: pf2eMonster
aliases: "Foosteth"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Foosteth"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "Homebrew"
name: "Foosteth"
level: "Creature 10"
rare_04: "Unique"
alignment: "CE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Barghest"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __low-light vision__;"
languages: "Goblin, Common; "
skills:
  - name: "Skills"
    desc: "__Stealth__: +17 (1d20+17);"
abilityMods: [4, 2, 2, 1, 2, 1]

abilities_top:
  - name: "Aura of Madness"
    desc: " ([[magical]]); __Effect__ Foosteth Pushes any creature starting it's turn within 5 feet of him 1 square away"
  - name: "Change Shape"
    desc: " ([[magical]]); __Effect__ Once per round Foosteth can alter his physical form to appear as a Medium wolf or a bugbear until he uses change shape again or until he drops to 0 hit points. He retains his statistics in his new form. His clothing, armor, and other possessions do not change."
  - name: "Items"
    desc: " +1 Striking Battle Axe"
 
abilities_bot:
  - name: "Power Feed"
    desc: " ([[mental]]);  __Requirement__ Foosteth must be in wolf form __attack__ +17 vs Will __effect__ `dice: 3d8+5` 3d8+5 psychic damage, and Foosteth gains one use of an ability that it has seen the target use during this encounter.  It must be used while in bugbear from and before the end of the encounter. If an attack, it uses Foosteth's attack modifiers but the damage profile of the creature from whom the power was choosen"

speed: 25 feet

ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__: +22 (1d20+22); __Ref__: +16 (1d20+16); __Will__: +19 (1d20+19);"
hp: 171
health:
  - name: HP
    desc: "171;"


attacks:
  - name: Melee
    desc: "⬻ battle axe +17 ([[sweep]]); __Damage__ 3d8+4 (3d8+4) bludgeoning"
  - name: Melee
    desc: "⬻ bite +17 __Requirement__ Must be in wolf form __Damage__ 2d6+4 (2d6+4) mental damage and the target is pushed 10 feet."

    
sourcebook: "_Homebrew_"
```

```encounter-table
name: Agera of the Shadow Face
creatures:
  - 1: Agera of the Shadow Face
```
