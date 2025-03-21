---
noteType: pf2eMonster
aliases: "Gnome Arcane Sneak"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/8
statblock: inline
name: "Gnome Arcane Sneak"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "PlayerCore"
name: "Gnome Arcane Sneak"
level: "Creature 8"
alignment: "CN"
size: "Small"
trait_03: "Humanoid"
trait_04: "Gnome"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __low-light vision__;"
languages: ""
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +16 (1d20+16); __Deception__: +16 (1d20+16); __Occultism__: +16 (1d20+16); __Stealth__: +18 (1d20+18); __Thievery__: +18 (1d20+18); "
abilityMods: [3, 6, 6, 4, 4, 6]

abilities_top:
  - name: "Hide in Plain Sight"
    desc: "  The gnome sneak can take a full round and make a [[Stealth]] check to become [[Hidden|Hidden]] adn gain the bonus for cover as per the [[Stealth]] skill, but without the need for actual cover to hide behind."
  - name: "Deny Advnatage"
    desc: "  As someone who takes advantage of others' defenses, you are careful not to leave such openings yourself. You aren't [[flat-footed|flat-footed]] to [[hidden|hidden]], [[undetected|undetected]], or flanking creatures of your level or lower, or creatures of your level or lower using surprise attack. However, they can still help their allies flank."
  - name: Items
    desc: "+1 striking frost short sword, +1 leather armor;"
abilities_bot:
  - name: "Frost"
    desc: "  This weapon is empowered with freezing ice. It deals an additional 1d6 (1d6) cold damage on a successful [[Strike]]. On a critical hit, the target is also [[slowed|slowed 1]] until the end of your next turn unless it succeeds at a DC 24 Fortitude save."

speed: ; 25;

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +13 (1d20+13); __Ref__: +19 (1d20+19); __Will__: +16 (1d20+16);"
hp: 105
health:
  - name: HP
    desc: "105; "


attacks:
  - name: Melee
    desc: "⬻ short sword +20 ([[agile]], [[finesse]], [[versatile (s]]); __Damage__ 2d6 (2d6) piercing{+2d6} piercing precision{+1d6} cold"

spellcasting:
  - name: " Spells"
    desc: "DC 23, attack +15; __1st__ [[command]], [[illusory disguise]], [[true strike]], [[cantrips]]; __2nd__ [[befitting attire]], [[comprehend language]], [[invisibility]]; __3rd__ [[daze]], [[detect magic]], [[hhost sound]], [[illuminate]];"
sourcebook: "_Playercore_, page 314."
```

```encounter-table
name: Gnome Arcane Sneak
creatures:
  - 1: Gnome Arcane Sneak
```
