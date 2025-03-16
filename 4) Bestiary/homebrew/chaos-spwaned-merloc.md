---
noteType: pf2eMonster
aliases: "Chaos Spawn Murloc"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aquatic
  - pf2e/creature/level/6
statblock: inline
name: "Chaos Spawn Murloc"
level: 8
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Chaos Spawn Murloc"
token: [[Chaos Spawned Merloc.png]]
level: "Creature 8"
alignment: "NE"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Aquatic"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19"
languages: "Common, Aquan"
skills:
  - name: "Skills"
    desc: "__Stealth__: +18 (1d20+18); __Survival__: +16 (1d20+16);"
abilityMods: [-1, 5, 2, 0, 0, -1]

abilities_top:
  - name: "Items"
    desc: "+1 spear"

speed: 25 feet, swim 30 feet

ac: 23
armorclass:
  - name: AC
    desc: "26; __Fort__: +13 (1d20+13); __Ref__: +19 (1d20+19); __Will__: +13 (1d20+13);"
hp: 134
health:
  - name: HP
    desc: "134; __Immunities__: poison"

attacks:
  - name: Melee
    desc: "⬻ spear +15 ([[thrown|thrown 20 feet]]); __Damage__ 2d6-1 piercing"
  - name: Melee
    desc: "⬻ bite +18 ([[agile]]); __Damage__ 1d8 piercing"
  - name: Ranged
    desc: "⬻ spear +18 ([[thrown|thrown 20 feet]]); __Damage__ 2d6-1 piercing"

abilities_bot:
  - name: "Chaotic Frenzy"
    desc: "⬻ __1 minute__ The Chaos Spawn Murloc enters a chaotic frenzy for 1 minute. During this time, it gains a +2 status bonus to attack rolls and damage rolls, but also takes a -2 penalty to AC. While in this frenzy, whenever it takes damage, it releases a burst of chaotic energy, dealing 3d6 damage to all creatures within 10 feet (DC 20 Reflex save for half)."

sourcebook: "Homebrew"
```

