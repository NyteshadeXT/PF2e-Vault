---
noteType: pf2eMonster
aliases: "Myconid Guard"
tags: 
  - pf2e/creature/type/fungus
  - pf2e/creature/level/7
statblock: inline
name: "Myconid Guard"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "HB"
name: "Myconid Guard"
token: [[myconid-guard-20240430153751394.webp]]
level: "Creature 7"
alignment: "N"
size: "Medium"
trait_03: "Fungus"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14; __darkvision__, __imprecise scent__;"
languages: "Undercommon;  telepathy 100 feet (myceloids and those afflicted by purple pox only);"
skills:
  - name: "Skills"
    desc: "__Stealth__: +16 (1d20+16); __Survival__: +15 (1d20+15); "
abilityMods: [5, 3, 5, -1, 2, 0]

abilities_top:
  - name: "Spore Pop"
    desc: "  If a myceloid is reduced to 0 HP by a critical hit, it pops, forcing it to immediately Emit Spores, even if it has already used the ability that day."
abilities_bot:
  - name: "Pacification Spores"
    desc: "  All creatures within 5 feet of the myconid guard must attempt a DC 27 Will save. Targets' who fail are unable to take an action until the end of the targets next turn."

speed: ; 20;

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +18 (1d20+18); __Ref__: +13 (1d20+13); __Will__: +14 (1d20+14);"
hp: 145
health:
  - name: HP
    desc: "145;  __Weaknesses__ slashing 8;"


attacks:
  - name: Melee
    desc: "⬻ spiny strike +14 __Damage__ 2d8+8 (2d8+8) piercing"

sourcebook: "Homebrew"
```

```encounter-table
name: Myconid Guard
creatures:
  - 1: Myconid Guard
```

Myconid guards are the colony's proctectors and shock troops.