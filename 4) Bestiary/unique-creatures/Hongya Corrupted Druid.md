---
noteType: pf2eMonster
aliases: "Hongya"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/16
statblock: inline
name: "Hongya"
level: 16
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Hongya"
token: hongya.webp
level: "Creature 16"
rare_01: "Unique"
alignment: "CE"
size: "Large"
trait_01: "Aberration"
trait_02: "Humanoid"
trait_03: "Elf"
modifier: 29
perception:
  - name: "Perception"
    desc: "+29; low-light vision"
languages: "Common, Elven"
skills:
  - name: "Skills"
    desc: "__Athletics__ +30, __Nature__ +28, __Occultism__ +26, __Intimidation__ +27, __Stealth__ +25"
abilityMods: [7, 6, 5, 4, 6, 6]

abilities_mid:
  - name: "Resistances"
    desc: "Mental 10"
  - name: "Corrupted Presence"
    desc: "([[aura]], [[mental]], [[primal]]); 20 feet. Living creatures entering or starting their turn in the aura take `dice: 2d6` 2d6 mental damage (DC 36 Will basic save)."
  - name: "Double Attack"
    desc: "⬺ Hongya makes two tentacle Strikes."

abilities_bot:
  - name: "Tentacle"
    desc: "⬻ +31 ([[reach|reach 15 feet]]); __Damage__ `dice: 3d10+15` 3d10+15 bludgeoning plus Grab. A grabbed creature takes `dice: 2d6` 2d6 bleed at the start of its turn until the grab ends."
  - name: "Call Down the Stars"
    desc: "⬺ ([[primal]], [[occult]], [[light]], [[evocation]]); __Frequency__ once per `1d4` 1d4 rounds. Hongya calls down radiant motes of corrupted starlight in a 20-foot burst within 60 feet. Creatures in the area take `dice: 6d10` 6d10 radiant damage (DC 36 Will basic save). On a failed save, each creature chooses to be either [[blinded]] or [[stunned|stunned 1]]. On a critical failure, the creature suffers both."
  - name: "Feed to the Void"
    desc: "⬺ ([[occult]], [[mental]], [[void]]); __Requirements__ Hongya has a creature grabbed. Hongya attempts to consume the victim in psychic void energy. The grabbed creature must succeed at a DC 34 Fortitude save or be [[banished]] to a mental prison. While banished, it takes `dice: 4d6` 4d6 psychic damage. At the end of each of its turns, it can attempt a new Will save (DC 34). On a success, it returns to its previous space. Once a creature escapes, it is immune to this ability for 24 hours."
  - name: "Psychic Backlash"
    desc: "⬲ Trigger: A creature within 30 feet critically fails a Will save against one of Hongya’s abilities. Effect: The creature is also [[confused]] until the end of its next turn."

speed: 35 feet

ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__ +29, __Ref__ +28, __Will__ +30"

hp: 320
health:
  - name: HP
    desc: "320; __Resistances__ mental 10; __Immunities__ controlled"

attacks:
  - name: "Melee Tentacle"
    desc: "⬻ +31 ([[reach|reach 15 feet]]); __Damage__ `dice: 3d10+15` 3d10+15 bludgeoning plus Grab and `dice: 2d6` 2d6 persistent bleed"
  - name: "Melee Slam"
    desc: "⬻ +29; __Damage__ `dice: 3d12+13` 3d12+13 bludgeoning"

sourcebook: "Custom"

```