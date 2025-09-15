---
noteType: pf2eMonster
aliases: "Tongue Wolf"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/type/beast
  - pf2e/creature/level/13
statblock: inline
name: "tongue-wolf"
level: 12
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Tongue Wolf"
level: "Creature 12"
rare_01: "Rare"
alignment: "CE"
size: "Medium"
trait_01: "Aberration"
trait_02: "Beast"
modifier: 21
perception:
  - name: "Perception"
    desc: "+21; low-light vision"
languages: "—"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +23, __Athletics__ +22, __Stealth__ +23"
abilityMods: [5, 6, 2, -2, 0, -1]

abilities_mid:
  - name: "Skirmisher’s Agility"
    desc: "The tongue wolf Strides up to half its Speed after making a successful melee Strike (once per round)."
  - name: "Aberrant Frenzy"
    desc: "When the tongue wolf is reduced to half its Hit Points or fewer, its barbed tongue extends unnaturally. Its reach increases to 20 feet, and its forced movement from tongue Strikes increases by 10 feet."
  - name: "Chaos Scar Predator"
    desc: "Tongue wolves gain a +2 status bonus to saving throws against forced movement and mental effects."

abilities_bot:
  - name: "Barbed Tongue"
    desc: "⬻ ([[attack]], [[aberration]]); +25 ([[reach|reach 15 feet]]). __Damage__ `dice: 3d8+11` 3d8+11 piercing. On a hit, the target must succeed at a DC 32 Reflex save or be pulled 10 feet toward the tongue wolf (20 feet if in aberrant frenzy)."
  - name: "Tongue Drag"
    desc: "⬺ ([[attack]], [[aberration]], [[move]]); The tongue wolf makes a Barbed Tongue Strike. On a hit, instead of pulling the target, the wolf can drag the target into its own space, knocking the target [[prone]]."
  - name: "Savage Jaws"
    desc: "⬻ +25; __Damage__ `dice: 3d10+11` 3d10+11 piercing."

speed: 50 feet

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__ +22, __Ref__ +24, __Will__ +20"

hp: 190
health:
  - name: HP
    desc: "190; __Resistances__ physical 10 (except force or ghost touch)"

attacks:
  - name: "Melee Barbed Tongue"
    desc: "⬻ +25 ([[reach|reach 15 feet]]); __Damage__ `dice: 3d8+11` 3d8+11 piercing plus pull (DC 32 Reflex)"
  - name: "Melee Jaws"
    desc: "⬻ +25; __Damage__ `dice: 3d10+11` 3d10+11 piercing"

sourcebook: "Custom"

```