---
noteType: pf2eMonster
aliases: "Pit Shadow"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/13
statblock: inline
name: "Pit Shadow"
level: 13
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Pit Shadow"
level: "Creature 13"
alignment: "CE"
size: "Medium"
trait_01: "Undead"
trait_02: "Shadow"
trait_03: "Incorporeal"
trait_04: "Spirit"
modifier: 22
perception:
  - name: "Perception"
    desc: "Perception +22; __darkvision__;"
languages: "Common;"
skills:
  - name: "Skills"
    desc: "__Stealth__: +28 (1d20+28); __Acrobatics__: +26 (1d20+26); "
abilityMods: [-5, +8, +6, -4, +2, +4]

abilities_mid:
  - name: "Shadow Stealth"
    desc: "The Pit Shadow can Hide in dim light or darkness even without cover or concealment."
  - name: "Phasing"
    desc: "The Pit Shadow can move through solid objects and creatures as though they were difficult terrain. It must end its turn in an unoccupied space."

abilities_bot:
  - name: Pit Wail
    desc: "([[sonic]]) (15-foot cone), once every `dice: 1d4` 1d4 rounds; +24 vs Fortitude, `dice: 3d6` 3d6 sonic damage and pushed 10 feet on hit (20 feet and knocked prone on crit). No effect on failure."

speed: fly 40 feet (hover)

ac: 34
armorclass:
  - name: AC
    desc: "34; __Fort__: +24 (1d20+24); __Ref__: +28 (1d20+28); __Will__: +22 (1d20+22);"

hp: 50
health:
  - name: HP
    desc: "50; negative healing, rejuvenation; __Immunities__ poison, precision, death effects, disease, paralyzed, unconscious; __Resistances__ Resistance 10 to all damage (except force, ghost touch, or positive)"

attacks:
  - name: Melee
    desc: "⬻ Pit Strike +26 ([[magical]]); __Damage__ 2d10+8 (2d10+8) negative"

sourcebook: "_Homebrew_"
