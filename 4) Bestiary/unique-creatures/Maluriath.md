---
noteType: pf2eMonster
aliases: "Maluriath"
tags: 
  - pf2e/trait/unique
  - pf2e/creature/type/dragon
  - pf2e/creature/trait/chaotic
  - pf2e/creature/type/elemental
  - pf2e/creature/level/14
statblock: inline
name: "Maluriath"
level: 14
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Maluriath"
level: "Creature 14"
alignment: "CE"
size: "Large"
trait_04: "Unique"
trait_05: "Dragon"
trait_06: "Chaotic"
trait_07: "Elemental"
modifier: 26
perception:
  - name: "Perception"
    desc: "Perception +26"
languages: "Common, Draconic, Jotun"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +23 (1d20+23);, __Arcana__ +24 (1d20+24), __Athletics__ +28 (1d20+28), __Intimidation__ +26 (1d20+26), __Nature__ +22 (1d20+22)"
abilityMods: [7, 3, 6, 1, 3, 5]

abilities_top:
  - name: "Roiling Chaos"
    desc: "⬻ ([[elemental]], [[chaotic]]); At the start of each of Maluriath’s turns, roll `dice: 1d6`: <br>- 1–2: fire <br>- 3: acid <br>- 4–5: cold <br>- 6: electricity <br>Until the start of her next turn, this is her **chaotic damage type**. Her Resistance 15 matches that type, and all her abilities that deal “chaotic” damage use that type."
  - name: "Pained Frenzy"
    desc: "`pf2:r` **Trigger** A melee attack damages Maluriath **Effect** She releases a shockwave of unstable chaos. All creatures in a 10-foot emanation take (4d6) chaotic damage and are pushed 10 feet (DC 33 Reflex negates push)."
abilities_mid:
  - name: "Dragon Recovery"
    desc: " ([[arcane]]);  Maluriath automatically ends dazed, stunned, or dominated conditions at the end of her turn."
abilities_bot:
  - name: "Breath Weapon"
    desc: "`pf2:2` ([[arcane]], [[evocation]], [[chaotic]]);  Maluriath breathes a blast of raw elemental chaos that deals 15d6 (15d6) chaotic damage in a 60-foot cone (DC 36 basic Reflex save). It can't use Breath Weapon again for 1d4 (1d4) rounds."
  - name: "Bloodied Burst"
    desc: "`pf2:r`  ([[arcane]], [[evocation]], [[aura]], [[chaotic]]) **Trigger** Maluriath is reduced to half HP for the first time. **Effect** Chaos erupts around her in a 20-foot aura. All creatures in the area take (6d6) chaotic damage (DC 34 Fort save; half on success), are pushed 10 feet, and must succeed at a DC 34 Reflex save or fall prone."
  - name: "Draconic Frenzy"
    desc: "⬺  The dragon makes two claw [[Strike|Strikes]] and one tail [[Strike]] in any order."

    
speed: 40 ft., fly 120 ft.

ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__: +28 (1d20+28); __Ref__: +25 (1d20+25); __Will__: +26 (1d20+26);"
hp: 320
health:
  - name: HP
    desc: "320 | **Immunities** paralyzed, sleep | **Resistances** energy type (see *Roiling Chaos*) 15   | **Weaknesses** cold 15"

attacks:
  - name: Melee
    desc: "⬻ bite +29 ([[magical]], [[reach 10ft.]]); __Damage__ `dice: 3d12+15` piercing damage plus `dice: 2d6` chaotic damage and Grab (DC 33). While grabbed, target takes `dice: 2d6` persistent chaotic damage (`dice: 3d6` if Maluriath is below half HP). "
  - name: Melee.
    desc: "⬻ claw +29 ([[agile]], [[magical]], [[reach 10ft.]]); __Damage__ `dice: 3d10+15` slashing damage plus target is knocked [[prone]]"
  - name: Melee..
    desc: "⬻ tail +27 ([[magical]], [[reach 15ft.]]); __Damage__ `dice: 3d12+35` bludgeoning damage"

sourcebook: "Homebrew"
```

```encounter-table
name: Maluriath
creatures:
  - 1: Maluriath
```


## **Pained Frenzy** ✸ (reaction)  
**Trigger**: A melee attack damages Maluriath  
**Effect**: She releases a shockwave of unstable chaos. All creatures in a **10-foot emanation** take **4d6 *chaotic* damage** and are **pushed 10 feet** (DC 33 Reflex negates push).


