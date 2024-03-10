---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Kobold Boss - Zolgran"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Kobold Boss - Zolgran"
level: 1
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "BB"
name: "Kobold Boss - Zolgran"
level: "Creature 1"
alignment: "LE"
size: "Small"
trait_03: "Humanoid"
trait_04: "Kobold"
modifier: 8
perception:
  - name: "Perception"
    desc: "Perception +5; __darkvision__;"
languages: "Common, Draconic; "
skills:
  - name: "Skills"
    desc: "__Arcana:__ +6 (1d20+6); __Deception:__ +8 (1d20+8): __Diplomacy:__ +8 (1d20+8): __Dragon Lore:__ +10 (1d20+10): __Intimidation:__ +8 (1d20+8): __Stealth:__ +7 (1d20+7);"
abilityMods: [-1, 3, 0, 2, 1, 4]

abilities_bot:
  - name: "Sneak Attack"
    desc: "  Zolgran deals an extra 1d6 precision damage to [[rules/conditions.md#Flat-Footed|flat-footed]] creatures that have the flat-footed condition."
abilities_top:
  - name: Items
    desc: "eggshell necklace, iron key, staff;"

speed: 25 feet

ac: 17
armorclass:
  - name: AC
    desc: "17; __Fort__: +4 (1d20+4); __Ref__: +7 (1d20+7); __Will__: +7 (1d20+7);"
hp: 25
health:
  - name: HP
    desc: "2; __Resistances__ poison 5"

attacks:
  - name: Melee
    desc: "⬻ claw +7 ([[agile]], [[finesse]]); __Damage__ 1d6-1 (1d6-1) slashing"
  - name: Melee
    desc: "⬻ staff +3; __Damage__ 1d8-1 (1d8-1) bludgeoning"

spellcasting:
  - name: "Arcane Innate Spells"
    desc: "DC 20; __1st Level__ [[fear]], [[magic missile]] (×3); __Cantrips__ [[detect-magic|detect magic]], [[ghost-sound|ghost sound]], [[mage-hand|mage hand]], [[ray-of-frost|ray of frost]];"


sourcebook: "_Beginner Box_, page 25."
```

```encounter-table
name: Kobold Boss - Zolgran
creatures:
  - 1: Kobold Boss - Zolgran
```
