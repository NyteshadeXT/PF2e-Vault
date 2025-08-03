---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: ["Runic Statue"]
tags:
  - pf2e/creature/type/construct
  - pf2e/creature/level/10
statblock: inline
name: Runic Statue
level: 10
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: Runic Statue
level: Creature 10
rarity: Uncommon
alignment: N
size: Medium
trait_01: Construct
trait_02: Earth
trait_03: Magical
modifier: 22

perception:
  - name: Perception
    desc: "+20; darkvision"
languages: "—"
skills:
  - name: Skills
    desc: "Athletics +23"
abilityMods: [6, 2, 4, -4, 4, -2]

speed: "25 feet"

ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +22, __Ref__ +18, __Will__ +20"
hp: 170
health:
  - name: HP
    desc: "170; __Immunities__ disease, mental, necrotic, paralyzed, poison, unconscious; __Resistances__ poison 10"

attacks:
  - name: Melee
    desc: "⬻ Stone Fist +24 (magical); __Damage__ (3d12+10) 3d12+10 bludgeoning plus Knock Prone if adjacent to an ally"

abilities_top:
  - name: Runes of Strength
    desc: "At the start of combat, each statue has 1 rune of strength. For every additional rune of strength it has beyond the first, it deals an additional 1d12 damage on melee Strikes."

abilities_bot:
  - name: Runic Gift ⬲
    desc: "**Trigger** The statue is reduced to 0 HP. **Effect** It shatters, and each other Runic Statue within 30 feet gains one additional rune of strength until the end of the encounter."
```

```encounter-table
name: Runic Statues
creatures:
  - 1: Runic Statue
```
