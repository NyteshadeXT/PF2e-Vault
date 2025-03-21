---
noteType: pf2eMonster
aliases: "Myconid Rotpriest"
tags: 
  - pf2e/creature/type/fungus
  - pf2e/creature/level/7
statblock: inline
name: "Myconid Rotpriest"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Myconid Rotpriest"
level: "Creature 7"
token: [[myconid-guard-20240430153751394.webp]]
alignment: "N"
size: "Medium"
trait_03: "Fungus"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12; __darkvision__, __imprecise scent__;"
languages: "Undercommon;  telepathy 100 feet (myceloids and those afflicted by purple pox only);"
skills:
  - name: "Skills"
    desc: "__Medicine__: +17 (1d20+17); __Occultism__: +15 (1d20+15); "
abilityMods: [2, 3, 6, 1, 6, 5]

abilities_top:
  - name: "Sacrifice for the Colony Requirement"
    desc: "  The rotpriest is adjacent to an ally. Effect The rotpriest takes the damage dealt to the ally, and the ally takes none."
  - name: Items
    desc: "quarterstaff;"
abilities_bot:
  - name: "Decomposing Spray"
    desc: "  Targets in a 15 foot cone must attempts a DC 26 Fortutide save or suffer 1d10+3 (1d10+3) poison damage."
  - name: "Life Burst"
    desc: "  When the rotpriest suffers lethal damage it explodes in a cloud of vitality giving spores. Allies within 5 feet regain 50 hit points."

speed: ; 20;

ac: 22
armorclass:
  - name: AC
    desc: "22; __Fort__: +15 (1d20+15); __Ref__: +12 (1d20+12); __Will__: +15 (1d20+15);"
hp: 119
health:
  - name: HP
    desc: "119;  __Weaknesses__ poison 5;"


attacks:
  - name: Melee
    desc: "⬻ staff +13 ([[two-handed 1d8]]); __Damage__ 2d4+4 (2d4+4) bludgeoning"

sourcebook: "Homebrew"
```

```encounter-table
name: Myconid Rotpriest
creatures:
  - 1: Myconid Rotpriest
```

 The myconid rotpriest is the colony's healer and scapegoat, taking the damage of others so that the colony as a whole can survive.