---
noteType: pf2eMonster
aliases: "Chaos Spawn Murloc"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aquatic
  - pf2e/creature/level/6
statblock: inline
name: "Chaos Spawn Murloc"
level: 6
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Chaos Spawn Murloc"
token: [[Chaos Spawned Merloc.png]]
level: "Creature 6"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Aquatic"
modifier: 17
perception:
  - name: "Perception"
    desc: "Perception +17"
languages: "Common, Aquan"
skills:
  - name: "Skills"
    desc: "__Stealth__: +15 (1d20+15); __Survival__: +13 (1d20+13);"
abilityMods: [-1, 5, 2, 0, 0, -1]

abilities_top:
  - name: "Items"
    desc: "+1 spear"

speed: 25 feet, swim 30 feet

ac: 23
armorclass:
  - name: AC
    desc: "23; __Fort__: +11 (1d20+11); __Ref__: +17 (1d20+17); __Will__: +11 (1d20+11);"
hp: 91
health:
  - name: HP
    desc: "91; __Immunities__: poison"

attacks:
  - name: Melee
    desc: "⬻ spear +12 ([[thrown|thrown 20 feet]]); __Damage__ 1d6-1 piercing"
  - name: Melee
    desc: "⬻ bite +15 ([[agile]]); __Damage__ 1d8 piercing"
  - name: Ranged
    desc: "⬻ spear +17 ([[thrown|thrown 20 feet]]); __Damage__ 2d6 piercing"

abilities_bot:
  - name: "Chaotic Frenzy"
    desc: "⬻ __1 minute__ The Chaos Spawn Murloc enters a chaotic frenzy for 1 minute. During this time, it gains a +2 status bonus to attack rolls and damage rolls, but also takes a -2 penalty to AC. While in this frenzy, whenever it takes damage, it releases a burst of chaotic energy, dealing 1d6 damage to all creatures within 10 feet (DC 20 Reflex save for half)."

sourcebook: "Homebrew"
```

