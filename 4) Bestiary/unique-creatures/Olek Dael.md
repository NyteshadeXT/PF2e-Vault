---
obsidianUIMode: preview
noteType: pf2eMonster
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/15
statblock: inline
name: Olek Dael
---

```statblock
layout: Basic Pathfinder 2e Layout
source: Converted from D&D 4e
name: Olek Dael
level: Creature 15
size: Medium
trait_01: Humanoid
trait_02: Dwarf
modifier: 25
perception:
  - name: Perception
    desc: +25; [[low-light vision]]
languages: Common, Dwarven, Supernal
skills:
  - name: Skills
    desc: _Athletics_ +29, _Religion_ +23, _Intimidation_ +24, _Crafting_ +22
abilityMods: [7, 1, 4, 2, 6, 3]

abilities_top:
  - name: Equipment
    desc: "[[weapon-potency|+2]] [[striking|Greater Striking]] [[warhammer|Warhammer]]; [[armor-potency|+2]] [[resilient|Greater Resilient]] [[half-plate|Half Plate]]; [[elemental-wayfinder-lopsg|Elemental Wayfinder (Earth)]] ;"

abilities_mid:
  - name: Rune Effect
    desc: "Whenever Olek uses an attack power, he chooses one of its two rune effects (conquest or resistance). He gains that effect for that use of that power."
  - name: Stand the Ground
    desc: "Olek is moved 5 feet less by any forced movement effects."
  - name: Steady-Footed
    desc: "When Olek would be knocked [[prone]], he can attempt a DC 30 Reflex save to remain standing."
  - name: Runic Font
    desc: "If a Runic Font is active in the encounter, Olek gains one additional action per round."
  - name: Rune of Command's Curse
    desc: "After Olek uses **Rune of Command's Blessing**, if he rolls a natural 5 or lower on his first attack roll during a turn, he becomes [[controlled]] by an external entity until the end of his next turn."

abilities_bot:
  - name: Rune of Command’s Blessing `pf2:2` (arcane, auditory, emotion, mental)
    desc: "**Frequency**: Once per encounter, usable only while below 50% HP. Olek targets all enemies in a 10-foot emanation. DC 34 Will save.\n**Success**: Unaffected.\n**Failure**: Target is [[controlled]] until the end of Olek's next turn.\n\n**Conquest Rune**: Olek gains a +2 status bonus to attack rolls until the end of his next turn.\n**Resistance Rune**: Each enemy that succeeds their save becomes [[enfeebled 1]] until the end of Olek’s next turn."
  - name: Runic Duality `pf2:r` (reaction, arcane, divine)
    desc: "**Trigger**: A creature within Olek’s melee reach uses a manipulate, move, or attack action. **Effect**: Olek makes a Runic Warhammer Strike with one of his rune effects."

speed: 25 feet

ac: 36
armorclass:
  - name: AC
    desc: 36; _Fort_ +32, _Ref_ +27, _Will_ +30

hp: 270
health:
  - name: HP
    desc: 270; _Immunities_ [[controlled]] (from Rune of Command's Curse source only), _Resistances_ 10 radiant, 10 mental

attacks:
  - name: Melee
    desc: "Runic Warhammer +30 (magical, versatile B), Damage (3d8+13) 3d8+13 bludgeoning + **Conquest Rune**: Target must succeed a DC 34 Reflex save or fall [[prone]]. **Resistance Rune**: Olek or one ally adjacent to the target gains a +2 status bonus to AC and saves until the end of Olek’s next turn."
  - name: Ranged
    desc: "Runic Seal +30 (30 feet, radiant), Damage (1d10+13) 1d10+13 radiant + target is [[immobilized]] (DC 34 Fortitude negates, ends at end of target’s next turn). **Conquest Rune**: Each enemy adjacent to the target takes 2d6 radiant damage. **Resistance Rune**: One ally adjacent to the target gains 20 temporary Hit Points."

sourcebook: "Homebrew"
```

```encounter-table
name: Olek Dael
creatures:
  - 1: Olek Dael
