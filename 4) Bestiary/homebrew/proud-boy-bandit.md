---
noteType: pf2eMonster
aliases: "Proud Boy Bandit"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/6
statblock: inline
name: "Proud Boy Bandit"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Proud Boy Bandit"
level: "Creature 6"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Human"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Athletics__: +13 (1d20+13); __Deception__: +12 (1d20+12); __Intimidation__: +13 (1d20+13); __Stealth__: +15 (1d20+15); __Survival__: +13 (1d20+13); __Thievery__: +15 (1d20+15); __Forest Lore__: +12 (1d20+12);"
abilityMods: [3, 3, 1, 0, 2, 1]

abilities_top:
  - name: "Bandit's Ambush"
    desc: "  When the bandit rolls initiative using [[Deception]] or [[Stealth]], they can attempt to [[Demoralize]] one creature as a free action."
  - name: "Dread Striker"
    desc: "  Frightened creatures are [[flat-footed]] to the bandit."
  - name: "Favored Terrain"
    desc: "  The bandit ignores the effects of non-magical difficult terrain in forests."

speed: 25 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +14 (1d20+14); __Ref__: +17 (1d20+17); __Will__: +11 (1d20+11);"
hp: 95
health:
  - name: HP
    desc: "95"

attacks:
  - name: Melee
    desc: "⬻ hatchet +15 ([[agile]], [[sweep]]); __Damage__ 3d6+5 (3d6+5) slashing"
  - name: Ranged
    desc: "⬻ sling +15 ([[propulsive]], [[range increment|range increment 50 feet]], [[reload|reload 1]]); __Damage__ 1d6+3 (1d6+3) bludgeoning"
  - name: Ranged
    desc: "⬻ hatchet +15 ([[agile]], [[sweep]], [[thrown|thrown 10 feet]]); __Damage__ 3d6+5 (3d6+5) slashing"

items:
  - name: "Items"
    desc: "+1 striking hatchet, leather, sling"

sourcebook: "Homebrew"
```

```encounter-table
name: Proud Boy Bandit
creatures:
  - 1: Proud Boy Bandit
```