---
noteType: pf2eMonster
aliases: "Morrn Bladeclaw"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/15
statblock: inline
name: "Morrn Bladeclaw"
level: 15
---

```statblock
columns: 1
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Morrn Bladeclaw"
level: "Creature 15"
alignment: "CE"
size: "Large"
trait_01: "Undead"
trait_02: "Giant"
trait_03: "Incorporeal"
trait_04: "Spirit"
modifier: 26
perception:
  - name: "Perception"
    desc: "Perception +26; __darkvision__"
languages: "Common, Jotun"
skills:
  - name: "Skills"
    desc: "__Athletics__ +30, __Intimidation__ +28, __Stealth__ +24"
abilityMods: [+7, +4, +6, +2, +3, +5]

abilities_mid:
  - name: "Double Actions"
    desc: "Morrn rolls initiative twice and takes a full turn on each result. He can take two reactions per round, but only one between each of his turns."
  - name: "Insubstantial"
    desc: "Morrn takes half damage from all sources except force and positive damage. If he takes radiant damage, this trait is suppressed until the start of his next turn."

abilities_bot:
  - name: "Gladiator’s Instinct"
    desc: "__Trigger__: An enemy enters a square flanking Morrn. __Effect__: Morrn makes a melee Strike against the flanking creature. On a hit, the target is pushed 15 feet."
  - name: "Rejuvenation"
    desc: "If destroyed, Morrn reforms in 1d10 days unless his remains are sanctified with a __6th-level__ or higher __consecrate__ spell."

speed: fly 40 feet (hover)

ac: 38
armorclass:
  - name: AC
    desc: "38; __Fort__: +32, __Ref__: +26, __Will__: +28"

hp: 250
health:
  - name: HP
    desc: "250; __Negative Healing__; __Immunities__ disease, poison, precision, death effects, paralyzed, unconscious; __Resistances__ all damage 10 (except force, ghost touch, or positive)"

attacks:
  - name: Spectral Sword ◈
    desc: "__Melee__ +32; __Damage__ 2d12+10 negative damage, and the target is pushed 5 feet. The target takes 10 persistent negative damage (__DC 30__ to end). Morrn marks the target until the end of his next turn."

sourcebook: "_Homebrew_"
