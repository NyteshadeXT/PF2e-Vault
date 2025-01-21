---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Primpel"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Primpel"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom Conversion"
name: "Primpel"
level: "Creature 9"
rare_02: "Uncommon"
alignment: "CE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Aquatic"
trait_06: "Bullywug"
modifier: 23
perception:
  - name: "Perception"
    desc: "+17; __darkvision__, __swamp walk_;"
languages: "Aquan, Common, Primordial"
skills:
  - name: "Skills"
    desc: "__Arcana__: +13; __Nature__: +17; __Religion__: +13; __Athletics__: +15; __Stealth__: +14"
abilityMods: [2, 4, 3, 1, 4, 2]

abilities_top:
  - name: "Swamp Walk"
    desc: "Primpel ignores difficult terrain caused by swamps or wetlands."
  - name: "Rancid Air"
    desc: "([[aura]], [[poison]]); __2 aura__. Any enemy that uses a healing effect (such as Regeneration, healing potions, or spells like Heal) within the aura becomes [[enfeebled|enfeebled 1]] until the end of its next turn."
  - name: "Aquatic Adaptation"
    desc: "Primpel can breathe underwater and gains a +2 circumstance bonus to attack rolls against non-aquatic creatures while in water."
  - name: "Nature's Release"
    desc: "Whenever Primpel is critically hit, the attacker regains 5 Hit Points."
  - name: "Equipment"
    desc: "A +1 striking quarterstaff, Robes adorned with swamp-like motifs."

abilities_bot:
  - name: "Bolt of Caustic Mud"
    desc: "⬻ ([[acid]], [[magical]]); Ranged 30 feet. +19 `dice: 1d20+19` to hit. __Damage__: `dice: 4d6` acid damage, and the target is [[Immobilized]] until the end of Primpel's next turn. If the target is already [[Immobilized]], it takes `dice: 1d8` persistent acid damage."
  - name: "Earth-Sundering Croak"
    desc: "⬺ ([[poison]], [[sonic]]); __DC 27 Fortitude__ **Area** 15-foot cone; All creatures in the area take `dice: 3d6` poison damage and `dice: 3d6` sonic damage and must succeed at a Fortitude save or become [[Sickened|Sickened 1]]. On a critical failure, creatures are also [[Deafened]] for 1 minute."
  - name: "Caustic Mastery"
    desc: "Creatures affected by Primpel’s acid attacks take a –1 circumstance penalty to saves against effects with the [[Acid]] trait."

speed: 25 feet, swim 20 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +18; __Ref__: +16; __Will__: +20"
hp: 140
health:
  - name: HP
    desc: "140; __Resistances__: Acid 10, Poison 5."

attacks:
  - name: Melee
    desc: "⬻ quarterstaff +17 ([[magical]]); __Damage__: `dice: 2d8+6` bludgeoning damage plus `dice: 1d6` acid damage."
  - name: Ranged
    desc: "⬻ bolt of caustic mud +19 ([[acid]], [[magical]]); __Damage__: 4d6 acid damage and immobilization."

```

```
encounter-table
name: Primpel
creatures:
  - 1: Primpel
```
