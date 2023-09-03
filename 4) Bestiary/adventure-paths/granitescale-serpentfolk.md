---
noteType: pf2eMonster
aliases: "Granitescale Serpentfolk"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Granitescale Serpentfolk"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "AP"
name: "Granitescale Serpentfolk"
level: "Creature 6"
token: [[Granitescale Serpentfolk.png]]
rare_02: "Uncommon"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Serpentfolk"
trait_06: "Mutant"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision__, __imprecise scent__;"
languages: "Aklo, Common, Undercommon;  telepathy 100 feet;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +13 (1d20+13); __Athletics__: +15 (1d20+15); __Intimidation__: +13 (1d20+13); "
abilityMods: [5, 4, 4, -2, 1, 1]

abilities_top:
  - name: "Attack of Opportunity"
    desc: " "
  - name: "Chipping Scales"
    desc: "⬲ __Frequency__ once per day __Trigger__ The granitescale takes piercing or slashing damage; __Effect__ The granitescale twists to take the blow on their hardest scales, which they shed to reduce the incoming force. The granitescale reduces the damage by 10, but their AC is reduced by 2 for 1 day, when the shed scales regrow."
  - name: Items
    desc: "javelin (5), longspear;"
abilities_bot:
  - name: "Rattling Spear"
    desc: " ([[auditory]], [[emotion]], [[mental]]); __Requirements__ The granitescale's last action was a successful spear [[Strike]]; __Effect__ The granitescale rattles the base of their spear, attempting an [[Intimidation]] check to [[Demoralize]] all enemies within 30 feet (compare the granitescale's [[Intimidation]] check result to the targets' Will DCs individually)."
  - name: "Serpentfolk Venom"
    desc: " ([[poison]]) __Saving Throw__ DC 22 Fortitude; __Maximum Duration__ 6 rounds; __Stage 1__ 1d4 poison damage and [[enfeebled]] 1 (1 round); __Stage 2__ 2d4 poison damage and [[enfeebled]] 1 (1 round)"


speed: 25 feet

ac: 24
armorclass:
  - name: AC
    desc: "24;  (22 with shed scales); __Fort__: +17 (1d20+17); __Ref__: +14 (1d20+14); __Will__: +12 (1d20+12);"
hp: 120
health:
  - name: HP
    desc: "120;  __Resistances__ 8 poison "


attacks:
  - name: Melee
    desc: "⬻ fangs +17 __Damage__ 2d8+6 (2d8+6) piercing plus serpentfolk venom"
  - name: Melee
    desc: "⬻ longspear +17 ([[reach]]); __Damage__ 2d8+6 (2d8+6) piercing"
  - name: Ranged
    desc: "⬻ javelin +16 ([[range increment 30 feet]]); __Damage__ 2d6+6 (2d6+6) piercing plus serpentfolk venom"

sourcebook: "_Pathfinder #170: Spoken on the Song Wind pg. 86_."
```

```encounter-table
name: Granitescale Serpentfolk
creatures:
  - 1: Granitescale Serpentfolk
```
