---
noteType: pf2eMonster
aliases: "Serpentfolk Venom Caller"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Serpentfolk Venom Caller"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "AP"
name: "Serpentfolk Venom Caller"
level: "Creature 7"
rare_02: "Uncommon"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Serpentfolk"
modifier: 15
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent__;"
languages: "Aklo, Common, Draconic, Undercommon;  telepathy 100 feet;"
skills:
  - name: "Skills"
    desc: "__Arcana__: +17 (1d20+17); __Deception__: +15 (1d20+15); __Nature__: +15 (1d20+15); __Occultism__: +17 (1d20+17); __Society__: +15 (1d20+15); __Survival__: +15 (1d20+15); "
abilityMods: [0, 4, 2, 6, 4, 2]

abilities_mid:
  - name: "HP"
    desc: "  105"
abilities_top:
  - name: Items
    desc: "shortbow (20 arrows), sickle;"
abilities_bot:
  - name: "Serpentfolk Venom"
    desc: " ([[poison]]);  __Saving Throw__ DC 23 Fortitude. __Maximum Duration__ 6 rounds __Stage 1__ 1d4 (1d4) poison damage and [[enfeebled|enfeebled 1]] (1 round) __Stage 2__ 2d4 (2d4) poison damage and [[enfeebled|enfeebled 1]] (1 round)"
  - name: "Venom Pool"
    desc: " ([[arcane]], [[conjuration]], [[poison]]); __Frequency__  times per day  __Effect__  The venom caller conjures a 10-foot burst of liquid poison within 60 feet. Each creature that begins its turn in the area takes 4d6 (4d6) poison damage (DC 25 basic Fortitude save). On a critical failure, creatures also take 1d6 (1d6) [[persistent damage|persistent poison damage]]. Once per turn, starting the turn after the venom caller uses Venom Pool, the venom caller can use a single action, which has the [[concentrate]] trait, to increase the radius of the burst by 5 feet. The pool of venom lasts for 1 minute, at which time it evaporates without a trace."

speed: 25 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +13 (1d20+13); __Ref__: +15 (1d20+15); __Will__: +17 (1d20+17);"
hp: 
 __Resistances__ 10 poison "


attacks:
  - name: Melee
    desc: "⬻ fangs +16 ([[finesse]]); __Damage__ 2d8+4 (2d8+4) piercing plus serpentfolk venom"
  - name: Melee
    desc: "⬻ sickle +16 ([[agile]], [[finesse]], [[trip]]); __Damage__ 1d4+4 (1d4+4) piercing plus serpentfolk venom"
  - name: Ranged
    desc: "⬻ shortbow +16 ([[deadly 1d10]], [[range increment 60 feet]]); __Damage__ 1d6+4 (1d6+4) piercing plus serpentfolk venom"

spellcasting:
  - name: "Occult Innate Spells"
    desc: "DC 25 ; __1st__ [[ventriloquism]] (at will); __2nd__ [[mirror image]] (at will); __3rd__ [[illusory disguise]] (at will); __4th__ [[suggestion]];"
  - name: "Arcane Spontaneous Spells"
    desc: "DC 25, attack +17; __1st__ [[feather fall]], [[item facade]], [[magic missile]], [[cantrips]] (3 slots); __2nd__ [[acid arrow]], [[false live]], [[invisibility]] (3 slots); __3rd__ [[mind reading]], [[slow]], [[stinking cloud]] (3 slots); __4th__ [[acid arrow]], [[noxious vapors]] (2 slots); __Cantrips (4th)__ [[acid splash]], [[detect magic]], [[mage hand]], [[read aura]], [[shield]];"
sourcebook: "_Pathfinder #170: Spoken on the Song Wind pg. 87."
```

```encounter-table
name: Serpentfolk Venom Caller
creatures:
  - 1: Serpentfolk Venom Caller
```
