---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Mudborn"
tags: 
  - pf2e/creature/type/elemental
  - pf2e/creature/level/8
statblock: inline
name: "Mudborn"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Mudborn"
level: "Creature 8"
rare_02: "Uncommon"
alignment: "CE"
size: "Medium"
trait_04: "Elemental"
trait_05: "Aquatic"
modifier: 25
perception:
  - name: "Perception"
    desc: "Perception +14; __low-light vision__;"
languages: "Primordial;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +17 (1d20+17); __Nature__: +14 (1d20+14); __Stealth__: +14 (1d20+14);"
abilityMods: [5, 5, 4, 1, 3, 2]

abilities_top:
  - name: "Aquatic"
    desc: "The mudborn can breathe underwater. In aquatic combat, it gains a +2 status bonus to attack rolls against non-aquatic creatures."
abilities_mid:
  - name: "Mud Form"
    desc: "  The mudborn can squeeze through small openings as though it were a Small creature."
  - name: "Slippery Mud"
    desc: " ([[aura]], [[transmutation]]);  10 feet. The ground in the aura becomes difficult terrain for non-aquatic creatures."
abilities_bot:
  - name: "Torrent of Mud"
    desc: "⬺ ([[evocation]], [[earth]], [[water]]);  __Effect__ The mudborn hurls a torrent of mud in a 15-foot cone. Each creature in the area must attempt a DC 23 Reflex save. **Critical Success**: The creature is unaffected. **Success**: The creature takes 3d8 bludgeoning damage. **Failure**: The creature takes 3d8 bludgeoning damage and falls prone. **Critical Failure**: As failure, and the creature is also immobilized for 1 round."

speed: 20 feet, swim 40 feet

ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__: +17 (1d20+17); __Ref__: +15 (1d20+15); __Will__: +14 (1d20+14);"
hp: 105
health:
  - name: HP
    desc: "105;  __Immunities__ disease, poison;"

attacks:
  - name: Melee
    desc: "⬻ slam +17 ([[magical]]); __Damage__ 2d10+7 (2d10+7) bludgeoning, and the target is pushed 5 feet (DC 23 Fortitude to resist)."
  - name: Ranged
    desc: "⬻ mud ball +15 ([[magical]], [[range increment|range increment 40 feet]]); __Damage__ 2d6+7 (2d6+7) bludgeoning, and the target is __slowed 1__ until the end of its next turn."

sourcebook: "Custom"

```
