---
noteType: pf2eMonster
aliases: "Keljack"
tags: 
  - pf2e/creature/type/human
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/13
statblock: inline
name: "Keljack"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Keljack"
level: "Creature 13"
alignment: "N"
size: "Medium"
trait_04: "Human"
trait_05: "Humanoid"
modifier: 21
perception:
  - name: "Perception"
    desc: "Perception +21;"
languages: "Common;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +24 (1d20+24); __Athletics__: +22 (1d20+22); __Deception__: +22 (1d20+22); __Diplomacy__: +22 (1d20+22);"
abilityMods: [4, 6, 3, 1, 0, 4]

abilities_top:
abilities_top:
  - name: "Left-Handed Parry"
    desc: "⬲ **Trigger** Keljack is hit by a melee or ranged attack **Effect** Roll 1d20 (1d20). On a 10 or higher, the attack is parryed and misses instead."
  - name: "Items"
    desc: "+2 Striking Longsword, _2 Resilient Leather Armor, Healing Potion (Greater)"

speed: 25 feet

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__: +24 (1d20+24); __Ref__: +28 (1d20+28); __Will__: +25 (1d20+25);"
hp: 180
health:
  - name: HP
    desc: "180;"

attacks:
  - name: Melee
    desc: "⬻ longsword +21 __Damage__ 2d8+12 slashing"

abilities_bot:
  - name: "Half-Remembered Swordplay"
    desc: "  ⬲ **Trigger** Keljack hits a flat-footed enemy **Effect** Roll (1d4) 1d4: 1. The enemy is dazed 2. The enemy is immobilized until the end of Keljack's next turn 3. The enemy is slowed 1 4. The enemy takes (1d8) 1d8 persistent bleed damage"
  - name: "Fumbled Footwork"
    desc: "⬺ Keljack Srides up to his movement speed, ignoring reactions from enemies.  At any point during the movement, he can Strike with his longsword at his current MAP."
sourcebook: "Homebrew"
```

```encounter-table
name: Keljack
creatures:
  - 1: Keljack
```