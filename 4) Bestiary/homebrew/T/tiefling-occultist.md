---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: ["Tiefling Occultist"]
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/12
statblock: inline
name: Tiefling Occultist
level: 12
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Custom
name: Tiefling Occultist
level: Creature 12
rarity: Uncommon
alignment: NE
size: Medium
trait_01: Humanoid
trait_02: Tiefling
trait_03: Fire
trait_04: Psychic
trait_05: Occult
modifier: 24

perception:
  - name: Perception
    desc: "+23; low-light vision"
languages: "Common, Infernal"
skills:
  - name: Skills
    desc: "Acrobatics +21, Arcana +22, Deception +26, Intimidation +24, Occultism +25, Stealth +22"
abilityMods: [0, 2, 4, 5, 2, 6]

speed: "30 feet"

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__: +21 (1d20+21); __Ref__: +22 (1d20+22); __Will__: +25 (1d20+25);"
hp: 180
health:
  - name: HP
    desc: "180;  __Resistances__ fire 10"

attacks:
  - name: Melee
    desc: "⬻ Striking Staff +25 (magical, fire); __Damage__ (2d6+10) 2d6+10 fire plus 5 persistent fire (DC 30 flat check)"
  - name: Ranged 
    desc: "⬻ Occult Blast +24 (occult, mental); __Range__ 60 feet; __Damage__ (2d8+8) 2d8+8 mental damage"

abilities_top:
  - name: Fiery Transposition ⬲
    desc: "**Trigger** An enemy hits the tiefling with a Strike. **Effect** Each creature in a 15-foot emanation takes 5 fire damage (DC 30 basic Reflex). Then, the tiefling and the triggering enemy teleport and swap positions (Will DC 30 negates the teleport)."
  - name: Baleful Teleport ⬺
    desc: "(arcane, teleportation) **Frequency** Recharge 5–6. The tiefling teleports up to 50 feet, then targets a creature within 60 feet. The target must attempt a DC 30 Will save. On a failure, it teleports to the space the tiefling just left."
  - name: Equipment
    desc: "*+1 Striking Staff, Cloak of the Bat, Wand of Fireball (6th Level), Talis"

abilities_mid:
  - name: Soul Fire ⬺
    desc: "(fire, fear, psychic, visual) The tiefling conjures a burst of flames and dread. **Area** 10-foot burst within 60 feet. **Attack** +25 vs. Reflex. __Hit__: Target takes 10 fire damage at the start of each turn for 1 minute (DC 30 flat to end), and if they willingly move closer to the tiefling, they take 10 psychic damage (once per turn). __Miss__: 5 persistent fire instead."
```

```encounter-table
name: Tiefling Occultist
creatures:
  - 1: Tiefling Occultist
```

