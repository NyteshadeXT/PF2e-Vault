---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Nucol"
tags: 
  - pf2e/creature/type/fiend
  - pf2e/creature/level/4
statblock: inline
name: "Nucol"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B3"
name: "Nucol"
level: "Creature 4"
alignment: "NE"
size: "Medium"
trait_03: "Fiend"
trait_04: "Sahkil"
modifier: 11
perception:
  - name: "Perception"
    desc: "Perception +11; __darkvision__, __imprecise scent 100__;"
languages: "Abyssal, Celestial, Infernal, Requian;  [[telepathy]] 60 feet;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +12 (1d20+12); __Deception__: +10 (1d20+10); __Intimidation__: +12 (1d20+12); __Stealth__: +10 (1d20+10); "
abilityMods: [4, 2, 3, 0, 3, 2]

abilities_top:
  - name: "Easy to Call"
    desc: "  A sahkil's level is considered 2 lower for the purpose of being conjured by the planar binding ritual (and potentially other rituals, at the GM's discretion), but it is always free to attack or leave instead of negotiate unless the primary caster's check is a critical success."
abilities_bot:
  - name: "Nervous Consumption"
    desc: " ([[disease]], [[divine]], [[emotion]], [[enchantment]], [[mental]]);  __Saving Throw__ DC 21 Fortitude. __Stage 1__ [[rules/conditions.md#Sickened|sickened 1]] and [[rules/conditions.md#Stupefied|stupefied 1]] (1 day) __Stage 2__ [[rules/conditions.md#Clumsy|clumsy 1]] and [[rules/conditions.md#Stupefied|stupefied 2]] (1 day) __Stage 3__ [[rules/conditions.md#Clumsy|clumsy 2]] and [[rules/conditions.md#Stupefied|stupefied 3]] (1 day)"
  - name: "Skip Between"
    desc: "⬻ ([[conjuration]], [[divine]], [[teleportation]]);  The sahkil moves from the Material Plane to the Ethereal Plane or vice-versa, with the effects of [[ethereal-jaunt|ethereal jaunt]] except that the effect has an unlimited duration and can be Dismissed. A summoned sahkil can't use Skip Between."
  - name: "Spray Pus"
    desc: "⬻  The nucol flexes one of its infected wounds, releasing a spray of pus in a 15-foot cone or targeting an individual creature within 30 feet. A creature targeted or in the area is exposed to nervous consumption."

speed: 30 feet

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +13 (1d20+13); __Ref__: +10 (1d20+10); __Will__: +11 (1d20+11);"
hp: 75
health:
  - name: HP
    desc: "75;  __Immunities__ disease, fear; __Weaknesses__ good 5;"


attacks:
  - name: Melee
    desc: "⬻ tusk +12 ([[deadly|deadly d10]]); __Damage__ 2d8+6 (2d8+6) piercing plus 1d4 (1d4) evil and nervous consumption"

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 20; __Cantrips (2nd)__ [[detect-magic|detect magic]], [[mage-hand|mage hand]]; __1st__ [[grease]] (3); __3rd__ [[fear]] (at will), [[remove-disease|remove disease]];"
sourcebook: "_Bestiary 3_, page 220."
```

```encounter-table
name: Nucol
creatures:
  - 1: Nucol
```
