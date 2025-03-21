---
noteType: pf2eMonster
aliases: "Dwarven Warpriest"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Dwarf Warpriest"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Dwarven Warpriest"
level: "Creature 8"
alignment: "LE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Dwarf"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __darkvision__;"
languages: "Common, Dwarven; "
skills:
  - name: "Skills"
    desc: "__Crafting__: +16 (1d20+16); __Religion__: +16 (1d20+16); "
abilityMods: [6, 3, 4, 4, 4, 3]

abilities_mid:
  - name: "Shield Block"
    desc: " "
abilities_top:
  - name: Items
    desc: "+1 resilient scale mail, wooden shield, +1 striking light hammer;"

speed: 20 feet, ignores 5 feet

ac: 27
armorclass:
  - name: AC
    desc: "27; shield; __Fort__: +16 (1d20+16); __Ref__: +13 (1d20+13); __Will__: +19 (1d20+19);"
hp: 139
health:
  - name: HP
    desc: "139; "


attacks:
  - name: Melee
    desc: "⬻ +1 striking light hammer +18 ([[shove]]); __Damage__ 2d6+7 (2d6+7) bludgeoning"

spellcasting:
  - name: " Spells"
    desc: "DC 26, attack +15; __1st__ [[fear]], [[harm]], [[proection]], [[cantrips]]; __2nd__ [[darkness]], [[silence]], [[bone spray]]; __3rd__ [[agonizing despair]], [[chilling darkness]], [[vampiric touch]]; __4th__ [[bullhorn]], [[chill touch]], [[divine lance]], [[haunting hymn]], [[light]];"
sourcebook: "_Homebrew_"
```

```encounter-table
name: Dwarf Warpriest
creatures:
  - 1: Dwarf Warpriest
```
