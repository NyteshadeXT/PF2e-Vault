---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Barulg"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/9
statblock: inline
name: "Barulg the Returned"
level: 9
---

```statblock
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Barulg the Returned"
level: "Creature 9"
alignment: "LE"
size: "Medium"
trait_03: "Humanoid"
trait_04: "Dwarf"
modifier: 20
perception:
  - name: "Perception"
    desc: "Perception +16; __darkvision__; immune to [[rules/conditions.md#Illusions|illusion]] effects."
skills:
  - name: "Skills"
    desc: "__Arcana__: +16 (1d20+16); __Crafting__: +18 (1d20+18); __Religion__: +16 (1d20+16);"
abilityMods: [4, 2, 0, 0, 6, 2]

abilities_top:
  - name: "Fire and Poison Resistance"
    desc: "Barulg has resistance 5 to fire and poison damage."
abilities_mid:
  - name: "The Hammer Falls"
    desc: "⬲ __Trigger__ Barulg is bloodied for the first time or hit while bloodied. __Effect__ Barulg strikes back. Melee [[Strike]] with warhammer +18 to hit; __Damage__ 2d10+8 bludgeoning damage, and the target is pushed 10 feet and knocked prone (DC 23 Reflex save to avoid being pushed). Barulg gains 25 temporary HP and deals +5 damage with his warhammer for the rest of the encounter."
  - name: "Choking Fumes"
    desc: "⬺ __Frequency__ once per round; __Effect__ Barulg releases toxic fumes in a 15-foot emanation. All creatures in the area must succeed at a DC 23 Fortitude save or take 2d6+4 poison damage and become blinded until the end of Barulg's next turn."
  - name: "Wave of Despair"
    desc: "⬻ __Frequency__ once per encounter; __Effect__ Barulg releases a psychic scream in a 30-foot cone. Targets must succeed at a DC 23 Will save or take 2d8+6 psychic damage and become [[Slowed|slowed 1]] and [[Dazed|dazed]] for 1 round. On a failure, these conditions persist (DC 23 save ends both)."
abilities_bot:
  - name: "Infernal Quills"
    desc: "⬺ __Frequency__ once per encounter; __Effect__ Barulg launches barbed quills infused with poison at a single target within 30 feet. [[Strike]] +18 to hit; __Damage__ `dice: 2d8+6` piercing and poison damage, and the target takes [[Persistent Damage|5 persistent poison damage]] and a –2 status penalty to attack rolls (DC 23 save ends both)."

speed: 20 feet

ac: 26
armorclass:
  - name: AC
    desc: "26; __Fort__: +21 (1d20+21); __Ref__: +18 (1d20+18); __Will__: +19 (1d20+19);"
hp: 140
health:
  - name: HP
    desc: "140; __Immunities__ illusion effects; __Resistances__ fire 5, poison 5."

attacks:
  - name: Melee
    desc: "⬻ Warhammer +18 ([[reach]] 5 feet); __Damage__ `dice: 2d10+11` bludgeoning damage."
equipment:
  - name: "Equipment"
    desc: " +1 striking warhammer, +1 resilient breastplate;"

sourcebook: "Custom."
```

```encounter-table
name: Barulg
creatures:
  - 1: Barulg
```