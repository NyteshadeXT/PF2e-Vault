---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Lantern Fragment"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/14
statblock: inline
name: "lantern-fragment"
level: 14
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Lantern Fragment"
level: "Creature 14"
alignment: "CE"
size: "Medium"
trait_03: "Incorporeal"
trait_04: "Undead"
modifier: 10
perception:
  - name: "Perception"
    desc: "Perception +24; __darkvision__;"
languages: "Necril; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +27 (1d20+27); __Stealth__: +31 (1d20+31); "
abilityMods: [-5, 7, 2, 2, 4, 5]

abilities_mid:
  - name: "Light Vulnerability"
    desc: "  An object shedding magical light (such as from the [[light]] spell) is treated as magical when used to attack the shadow."
  - name: "Void Healing"
    desc: "  A creature with void healing draws health from void energy rather than vitality energy. It is damaged by vitality damage and is not healed by vitality healing effects. It does not take void damage, and it is healed by void effects that heal undead."
abilities_bot:
  - name: "Shadow Spawn"
    desc: "  When a creature's shadow is pulled free by Steal Shadow, it becomes a shadow spawn under the command of the shadow that created it. This shadow spawn doesn't have Steal Shadow and is perpetually and incurably [[rules/conditions.md#Clumsy|clumsy 2]]. If the creature the shadow spawn was pulled from dies, the shadow spawn becomes a full-fledged, autonomous shadow. If the creature recovers from its enfeeblement, its shadow returns to it and the shadow spawn is extinguished."
  - name: "Slink in Shadows"
    desc: "  The shadow can [[Hide]] or end its [[Sneak]] in a creature's or object's shadow."
  - name: "Steal Shadow"
    desc: "⬻ ([[divine]], [[necromancy]]); __Requirements__ The shadow hit a living creature with a shadow hand [[Strike]] on its previous action  __Effect__  The shadow pulls at the target's shadow, making the creature [[rules/conditions.md#Enfeebled|enfeebled 2]]. This is cumulative with other [[rules/conditions.md#Enfeebled|enfeebled]] conditions from shadows, to a maximum of [[rules/conditions.md#Enfeebled|enfeebled 4]]. If this increases a creature's [[rules/conditions.md#Enfeebled|enfeebled]] value to 3 or more, the target's shadow is separated from its body (see shadow spawn). [[rules/conditions.md#Enfeebled|Enfeebled]] from Steal Shadow decreases by 1 every hour."

speed: fly 30 feet

ac: 35
armorclass:
  - name: AC
    desc: "35; __Fort__: +21 (1d20+21); __Ref__: +28 (1d20+28); __Will__: +25 (1d20+25);"
hp: 180
health:
  - name: HP
    desc: "180;  __Immunities__ bleed, death effects, disease, paralyzed, poison, precision, unconscious; __Weaknesses__ light vulnerability ; __Resistances__ all 17 (except force, ghost touch, vitality or spirit; double resistance against non-magical)"


attacks:
  - name: Melee
    desc: "⬻ fiery tendril +27 ([[finesse]], [[magical]]); __Damage__ 3d8+13 (3d8+13) fire"

sourcebook: "_Bestiary_, page 289."
```

```encounter-table
name: Lantern Fragment
creatures:
  - 1: Lantern Fragment
```
