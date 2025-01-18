---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Rust Monster"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/8
statblock: inline
name: "Enhanced Rust Monster"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Enhanced Rust Monster"
level: "Creature 8"
alignment: "N"
size: "Medium"
trait_03: "Aberration"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18; __darkvision__, __metal scent 60__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +20 (1d20+20), (Athletics: +26 (1d20+26) to Disarm a metal item); __Stealth__: +16 (1d20+16); __Survival__: +14 (1d20+14);"
abilityMods: [3, 6, 3, 0, 2, 1]

abilities_top:
  - name: "Metal Scent"
    desc: "  A rust monster can smell metal as a precise sense within 60 feet."
abilities_mid:
  - name: "Tail Trip"
    desc: "⬲ __Trigger__ A creature carrying a metal item attempts to move out of a square within reach of the rust monster's tail. __Effect__  The rust monster makes a tail [[Strike]] against the triggering creature. On a hit, the creature must succeed at a DC 25 Reflex save or fall [[rules/conditions.md#Prone|prone]]."
abilities_bot:
  - name: "Antenna Disarm"
    desc: "⬻  The rust monster attempts to [[Disarm]] a metal item a creature is holding using its antenna (with the same modifier as an antenna [[Strike]]). On a success, the item is subject to the rust monster's rust ability (see below), and on a critical success, the item is destroyed."
  - name: "Rust"
    desc: "  A rust monster's antenna causes metal to rapidly rust and corrode. If it succeeds at an antenna [[Strike]] or [[Disarm]] attempt with its antenna, the rust monster deals 4d6 (4d6) damage (doubled on a critical hit) to a metal item the target is wearing or holding, ignoring its [[Hardness]]. If the rust monster hits an unattended metal item, the item takes this damage automatically. If a creature uses the [[Shield-Block|Shield Block]] reaction with a metal shield against an antenna attack, the shield is automatically [[rules/conditions.md#Broken|broken]]."
  - name: "Improved Knockdown"
    desc: "  On a critical hit with its tail attack, the rust monster can [[rules/actions.md#Knockdown|Knockdown]] the target without needing to make a separate Athletics check."

speed: 35 feet, climb 20 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +19 (1d20+19); __Ref__: +17 (1d20+17); __Will__: +15 (1d20+15);"
hp: 125
health:
  - name: HP
    desc: "125; __Immunities__ metal damage effects; "


attacks:
  - name: Melee
    desc: "⬻ antenna +20 ([[finesse]]); __Damage__ rust"
  - name: Melee.
    desc: "⬻ mandibles +18 ([[finesse]]); __Damage__ 2d10+10 (2d10+10) piercing"
  - name: Melee..
    desc: "⬻ tail +18 ([[finesse]]); __Damage__ 2d6+8 (2d6+8) bludgeoning plus Improved Knockdown"

sourcebook: "Custom."

```

```encounter-table
name: Rust Monster
creatures:
  - 1: Rust Monster
```
