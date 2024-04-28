---
noteType: pf2eMonster
aliases: "Tengu Wing Mage"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Tengu Wing Mage"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Tengu Wing Mage"
level: "Creature 7"
alignment: "CN"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Tengu"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __low-light vision__;"
languages: "Common, Tengu;  plus two others;"
skills:
  - name: "Skills"
    desc: "__Stealth__: +15 (1d20+15); "
abilityMods: [2, 4, 6, 7, 4, 6]

abilities_top:
  - name: "Mimicry"
    desc: "  A tengu wing mage can mimic sounds and voices. A successful Insight check opposed by the wing mage's [[Deception]] ([[Lie]]) check allows a listener to determine that the effect is faked."
  - name: Items
    desc: "robes, dagger;"
abilities_bot:
  - name: "Wings of the Flock"
    desc: " ([[arcane]]);  The tengu wing mage gains a movement of fly 30 ft. until the end of the encounter."
  - name: "Murder of Crows"
    desc: " ([[arcane]], [[range increment 20 ft.]]);  2d8+8 (2d8+8) force damage (DC 27 basic Reflex save) and the target grants [[flat-footed|flat-footed]] to the tengu wing mage until the beginning of it's next turn."
  - name: "Hurricane Blast"
    desc: " ([[arcane]], [[air]]);  The tengu wing mage releases a blast of hurricane like winds impacting all creatures within 10 feet of it (DC 27 basic Fortitude save). A target who fail the save suffer 2d6+6 (2d6+6) force damage, and are pushed 10 feet away fom the tengu wing mage."

speed: 25 feet

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +12 (1d20+12); __Ref__: +15 (1d20+15); __Will__: +18 (1d20+18);"
hp: 111
health:
  - name: HP
    desc: "111; "


attacks:
  - name: Melee
    desc: "⬻ dagger +10 ([[agile]], [[finesse]], [[thrown 10 ft.]], [[versatile S]]); __Damage__ 1d4+2 (1d4+2) piercing"
  - name: Melee
    desc: "⬻ beak +10 ([[finesse]]); __Damage__ 2d4+2 (2d4+2) piercing"

spellcasting:
  - name: "Arcane Innate Spells"
    desc: "DC 22, attack +14; __Cantrips (4th)__ [[Slashing Gust]]; __1st__ [[gust-of-wind|Gust Of Wind]]; __2nd__ [[Cleanse Air]]; __3rd__ [[wall-of-wind|Wall of Wind]];"
sourcebook: "Homebrew"
```

```encounter-table
name: Tengu Wing Mage
creatures:
  - 1: Tengu Wing Mage
```
