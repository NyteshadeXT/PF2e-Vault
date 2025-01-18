---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Memory Wraith"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/9
statblock: inline
name: "Memory Wraith"
level: 9
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "B2"
name: "Memory Wraith"
level: "Creature 9"
alignment: "LE"
size: "Large"
trait_03: "Incorporeal"
trait_04: "Undead"
trait_05: "Wraith"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __darkvision__, __lifesense 60__;"
languages: "Common, Necril; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +19 (1d20+19); __Intimidation__: +21 (1d20+21); __Stealth__: +19 (1d20+19); "
abilityMods: [-5, 6, 3, 3, 4, 6]

abilities_mid:
  - name: "Draining Presence"
    desc: " ([[aura]], [[negative]]);  10 feet. A creature entering the aura must succeed at a DC 26 Fortitude save or become [[rules/conditions.md#Drained|drained 1]]. It recovers after it has been out of the aura for 1 minute. This [[rules/conditions.md#Drained|drained]] condition value is cumulative with the [[rules/conditions.md#Drained|drained]] value caused by drain life, but not with multiple draining presence auras. A creature that succeeds at its save is temporarily immune to draining presence for 24 hours."
  - name: "Sunlight Powerlessness"
    desc: "  A dread wraith caught in sunlight is [[rules/conditions.md#Stunned|stunned 2]] and [[rules/conditions.md#Clumsy|clumsy 2]]."
  - name: "Attack of Opportunity"
    desc: "⬲ "
abilities_bot:
  - name: "Telepathic Assault"
    desc: "⬺  A Memory Wraith can focus on a single target within 30 feet, forcing them to relive painful memories. The target must make a Will save (DC 28). On a failure, they are [[rules/conditions.md#Frightened|frightened 2]] and take 3d8 (3d8) mental damage. On a critical failure, they are also [[rules/conditions.md#Confused|confused]] for 1 round."
  - name: "Drain Life"
    desc: " ([[divine]], [[necromancy]]);  When the dread wraith damages a living creature with its spectral hand [[Strike]], the wraith gains 10 temporary Hit Points and the target must succeed at a DC 28 Fortitude save or become [[rules/conditions.md#Drained|drained 1]]. Further damage dealt by the wraith increases the [[rules/conditions.md#Drained|drained]] condition value by 1 on a failed save, to a maximum of [[rules/conditions.md#Drained|drained 4]]."
  - name: "Wraith Spawn"
    desc: " ([[divine]], [[necromancy]]);  A living humanoid slain by a wraith's spectral hand [[Strike]] rises as a wraith spawn after 1d4 (1d4) rounds. This wraith spawn is under the command of the dread wraith that killed it. It doesn't have drain life or wraith spawn. If the creator of the wraith spawn dies, the wraith spawn becomes a full-fledged, autonomous wraith; it regains its free will and gains drain life and wraith spawn."

speed: fly 60 feet

ac: 28
armorclass:
  - name: AC
    desc: "28; __Fort__: +16 (1d20+16); __Ref__: +19 (1d20+19); __Will__: +21 (1d20+21);"
hp: 130
health:
  - name: HP
    desc: "130; negative healing; __Immunities__ poison, precision, death effects, disease, paralyzed, unconscious; __Resistances__ all 10 (except force, ghost touch, or positive; double resistance vs. non-magical)"


attacks:
  - name: Melee
    desc: "⬻ spectral hand +21 ([[finesse]], [[reach|reach 10 feet]]); __Damage__ 2d10+7 (2d10+7) negative plus drain life"

sourcebook: "_Bestiary 2_, page 298."
```

```encounter-table
name: Dread Wraith
creatures:
  - 1: Dread Wraith
```
