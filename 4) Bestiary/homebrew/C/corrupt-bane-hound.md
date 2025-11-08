---
noteType: pf2eMonster
aliases: "Corrupt Bane Hound"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/type/time
  - pf2e/creature/level/14
statblock: inline
name: "Corrupt Bane Hound"
level: 14
---

```statblock
columns: 2
forcecolumns: true
layout: Layout
source: "Homebrew"
name: "Corrupt Bane Hound"
level: "Creature 14"
rare_01: "Rare"
size: "Medium"
trait_01: "Aberration"
trait_02: "Time"
modifier: 27
perception:
  - name: "Perception"
    desc: "Perception +25; greater darkvision"
languages: "Aklo"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +28; __Athletics__ +25; __Occultism__ +28; __Stealth__ +28; __Survival__ +23 (+17 to Track)"
abilityMods: [5, 8, 4, 8, 5, 4]

abilities_top:
  - name: "Greater Darkvision"
    desc: "A creature with greater darkvision can see perfectly well in areas of darkness and dim light, though such vision is in black and white only. A creature with greater darkvision can see through even forms of magical darkness."

abilities_mid:
  - name: "Otherworldly Mind"
    desc: "([[mental]]) Whenever a creature targets the hound with a mental effect, that creature takes `dice: 4d12` mental damage (DC 34 Basic Will save). On a critical failure, it also becomes Confused for `dice: 1d4` rounds."
  - name: "Ripping Gaze"
    desc: "([[3) Rules/traits/aura|aura]], [[occult]], [[visual]]) 30 feet. The bane hound's eyes glow balefully, causing painful but bloodless wounds to rip open in the body of a creature that meets its awful gaze. When a creature ends its turn in the aura's emanation, it takes `dice: 4d12` slashing damage (DC 34 Basic Fortitude save). A creature that critically succeeds at its save is temporarily immune for 24 hours."

speed: 30 feet

ac: 36
armorclass:
  - name: "AC"
    desc: "36; __Fort__ +23, __Ref__ +27, __Will__ +25"
hp: 195
health:
  - name: "HP"
    desc: "195; __Immunities__ controlled, emotion; __Resistances__ mental 17, physical 17, poison 17;"


attacks:
  - name: Melee Claw
    desc: "`pf2:1` +26 ([[agile]], [[unarmed]]); __Damage__ `dice: 3d8+14` slashing"
  - name: Melee Jaws
    desc: "`pf2:1` +26 ([[unarmed]]); __Damage__ `dice: 3d8+14` piercing"

spellcasting:
  - name: "Occult Innate Spells"
    desc: "(DC 30, +20 to hit)\n__2nd Rank__ *[[invisibility]]*\n__3rd Rank__ *[[haste]]*, *[[slow]]*"
sourcebook: "Homebrew"
```