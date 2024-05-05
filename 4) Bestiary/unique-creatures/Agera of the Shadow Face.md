---
noteType: pf2eMonster
aliases: "Agera of the Shadow Face"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Agera of the Shadow Face"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "Homebrew"
name: "Agera of the Shadow Face"
level: "Creature 10"
rare_04: "Unique"
alignment: "CE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
trait_06: "Tiefling"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __darkvision__;"
languages: "Abyssal, Common; "
skills:
  - name: "Skills"
    desc: "__Arcana__: +19 (1d20+19); __Athletics__: +17 (1d20+17); __Deception__: +19 (1d20+19); __Intimidation__: +17 (1d20+17); __Occultism__: +19 (1d20+19); __Religion__: +15 (1d20+15); __Abyss lore__: +19 (1d20+19); "
abilityMods: [5, 3, 5, 7, 2, 6]

abilities_top:
  - name: "Grave Wrath"
    desc: " ([[magical]]); __Requirements__ Agera is hit by a creature adjacent to her Effect The target must make a DC 27 Fortitude save or be pushed 15 feet away from Agera and is [[slowed|slowed]] until the end if it's next turn.  __Effect__ "
abilities_bot:
  - name: "Wrathfire Curse"
    desc: " ([[magical]]);  Enemites within 10 feet of Agera must make a Fortitude save DC 23 or suffer 3d6+10 (3d6+10) mental damage, and their next attack will be made againsts an ally in range. On save, target suffers half damage."

speed: 40 feet

ac: 29
armorclass:
  - name: AC
    desc: "29; __Fort__: +16 (1d20+16); __Ref__: +22 (1d20+22); __Will__: +19 (1d20+19);"
hp: 223
health:
  - name: HP
    desc: "223;  __Immunities__ disease, poison; __Resistances__ fire 10"


attacks:
  - name: Melee
    desc: "⬻ staff +17 ([[two-handed 1d8]]); __Damage__ 2d6+10 (2d6+10) bludgeoning"
  - name: Ranged
    desc: "⬻ unhinging ray +21 ([[mental]], [[magical]], [[range 20]]); __Damage__ 2d10+11 (2d10+11) mental damage and the target is pushed 10 feet."

spellcasting:
  - name: " Spells"
    desc: "DC 36, attack +18; __Cantrips (1st)__ [[2) Compendium/spells/detect-magic|Detect Magic]],  [[mage-hand|Mage Hand]], [[tanglefoot|Tanglefoot]]; __1st__ [[burning-hands|Burning Hands]]; __3rd__ [[flaming-sphere|Flaming Sphere]]; __4th__ [[flame-wisp-som|Flame Wisp]]; __5th__ [[acid-storm-logm|Fire Storm]];"
sourcebook: "_Homebrew_"
```

```encounter-table
name: Agera of the Shadow Face
creatures:
  - 1: Agera of the Shadow Face
```
