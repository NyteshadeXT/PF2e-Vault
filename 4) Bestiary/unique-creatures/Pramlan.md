---
noteType: pf2eMonster
aliases: "Pramlan"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Pramlan"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Pramlan"
level: "Creature 9"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Arcana__: +18 (1d20+18);"
abilityMods: [0, 2, 1, 4, 3, 1]

abilities_top:
  - name: "Magic Missile"
    desc: "⬻ ([[evocation]], [[force]]); You send a dart of force streaking toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of missiles you shoot by one, to a maximum of three missiles for 3 actions. You choose the target for each missile individually. If you shoot more than one missile at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth."
  - name: "Brilliant Chains"
    desc: "⬺ ([[evocation]], [[lightning]]); Make a ranged attack versus one creature. That creature makes a DC 27 Reflex save or suffers 2d8+11 lightning damage and make a secondary attack. The secondary attack is versus two additional creatures within 25 feet of the original target. These creatures make a DC 25 Reflex save or suffer 1d8+5 lightning damage and are now linked to the original target. If any target creature moves more than 25 feet away from the others, all targets become [[slowed]]. While slowed, the targets all take 10 lightning damage each round. Only the original target can break the chains. Each round at the end of their turn they can make a DC 27 Reflex save. The chains are broken on a success."
  - name: "Cacophonous Burst"
    desc: "⬺ ([[evocation]], [[sonic]]); Creatures within 10 feet of the caster must succeed at a DC 25 Fortitude save or suffer 2d6+8 sonic damage and be shoved 10 feet directly away from the caster."
  - name: "Items"
    desc: "+1 robes, staff"
    
speed: 5 feet

ac: 25
armorclass:
  - name: AC
    desc: "25; __Fort__: +15 (1d20+15); __Ref__: +18 (1d20+18); __Will__: +21 (1d20+21);"
hp: 112
health:
  - name: HP
    desc: "112"

attacks:
  - name: Melee
    desc: "⬻ staff +0 ([[two-handed|two-handed 1d8]]); __Damage__ 1d4 bludgeoning"

sourcebook: "Homebrew"
```

```encounter-table
name: Pramlan
creatures:
  - 1: Pramlan
```