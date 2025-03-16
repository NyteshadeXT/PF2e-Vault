---
noteType: pf2eMonster
aliases: "Fool"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/13
statblock: inline
name: "Fool"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Fool"
level: "Creature 13"
alignment: "N"
size: "Large"
trait_04: "Humanoid"
trait_05: "Giant"
modifier: 21
perception:
  - name: "Perception"
    desc: "Perception +21"
languages: "Common, Giant"
skills:
  - name: "Skills"
    desc: "__Athletics__: +26 (1d20+26), __Thievery__: +22 (1d20+22);"
abilityMods: [6, 2, 5, 4, 2, 1]

abilities_top:
  - name: "Master of Escape"
    desc: "⬲ ([[fortune]]); **Fool** starts or ends his turn while immobilized, restrained or slowed. **Effect** He can make an immediate saving throw agains the effect, even if it doesn't normally allow one."
  - name: "Last One Standing"
    desc: "**Trigger** Fool takes damage while below half hit points. **Effect** Fool gains 20 temporary health.  This can only occur once per encounter."
  - name: "Items"
    desc: "+2 Greater Striking Morningstar, +2 Resilient Breastplate, +1 Returning Hatchet, Healing Potion (Greater)"
    
speed: 25 feet

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__: +27 (1d20+27); __Ref__: +21 (1d20+21); __Will__: +21 (1d20+21);"
hp: 220
health:
  - name: HP
    desc: "220"

attacks:
  - name: Melee
    desc: "⬻ Morningstar +26 ([[Reach 10ft]], [[Forceful]], [[Versatile P]]); __Damage__ 3d6+12 bludgeoning"
  - name: Melee
    desc: "⬻ Hatchet +22 ([[Agile]], [[Sweep]], [[Thrown 20ft]]); __Damage__ 2d6+12 bludgeoning and the target must succeed at a DC 30 Reflex save or be knoced prone."

sourcebook: "Homebrew"
```

```encounter-table
name: Pramlan
creatures:
  - 1: Pramlan
```