---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Hunter Wight"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/7
statblock: inline
name: "Hunter Wight"
level: 7
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "BotD"
name: "Hunter Wight"
level: "Creature 7"
rare_02: "Uncommon"
alignment: "LE"
size: "Medium"
trait_04: "Undead"
trait_05: "Wight"
modifier: 16
perception:
  - name: "Perception"
    desc: "Perception +16; __darkvision__;"
languages: "Common, Necril; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +14 (1d20+14); __Crafting__: +14 (1d20+14): __Intimidation__: +12 (1d20+12); __Stealth__: +17 (1d20+17); "
abilityMods: [3, 4, 2, 1, 3, 2]

abilities_mid:
  - name: "Final Snare"
    desc: "⬲ __Trigger__ The hunter wight is reduced to 0 Hit Points __Effect__  The hunter wight has rigged their own body with a snare, which they trigger before being destroyed. Slivers of bone launch at an adjacent creature, dealing 4d8 (4d8) piercing damage (DC 25 [basic] Reflex save)."
abilities_top:
  - name: Items
    desc: "+1 composite longbow, leather armor, snare kit;"
abilities_bot:
  - name: "Spawn Hunter Wight"
    desc: " ([[divine]], [[necromancy]]);  A living humanoid killed by a hunter wight's weapon or claw [[Strike]] rises as a hunter wight spawn after 1d4 (1d4) rounds. This spawn is under the command of the hunter wight that killed them. They don't have drain life or spawn hunter wight and are [[rules/conditions.md#Clumsy|clumsy 2]] for as long as they're a hunter wight spawn. If the creator of the hunter wight spawn dies, the hunter wight spawn becomes a fully autonomous hunter wight; they regain their free will, gain drain life and spawn hunter wight, and are no longer [[rules/conditions.md#Clumsy|clumsy]]."
  - name: "Drain Life"
    desc: " ([[divine]], [[necromancy]]);  When the hunter wight damages a living creature using an unarmed attack or their bound weapon, they gain 7 temporary Hit Points, and the creature must succeed at a DC 22 Fortitude save or become [[rules/conditions.md#Drained|drained 1]]. Further damage dealt by the hunter wight's unarmed and bound weapon attacks increases the value of the [[rules/conditions.md#Drained|drained]] condition by 1 on a failed save, to a maximum of [[rules/conditions.md#Drained|drained 4]]."

speed: 25 feet

ac: 24
armorclass:
  - name: AC
    desc: "24; __Fort__: +13 (1d20+13); __Ref__: +17 (1d20+17); __Will__: +14 (1d20+14);"
hp: 112
health:
  - name: HP
    desc: "112;  (negative healing); __Immunities__ poison, death effects, disease, paralyze, unconscious;"


attacks:
  - name: Melee
    desc: "⬻ claw +16 ([[agile]]); __Damage__ 1d8+9 (1d8+9) slashing plus drain life"
  - name: Ranged
    desc: "⬻ composite longbow +18 ([[deadly d10]], [[propulsive]], [[range 100 feet]], [[volley 30 feet]]); __Damage__ 1d8+7 (1d8+7) slashing plus drain life"

sourcebook: "_Book of the Dead_, page 168."
```

```encounter-table
name: Hunter Wight
creatures:
  - 1: Hunter Wight
```
