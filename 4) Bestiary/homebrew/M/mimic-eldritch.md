---
noteType: pf2eMonster
aliases: "Eldritch Mimic"
tags: 
  - pf2e/creature/type/fungus
  - pf2e/creature/type/shapeshifter
  - pf2e/creature/type/ooze
  - pf2e/creature/level/13
statblock: inline
name: "Mimic"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Eldritch Mimic"
level: "Creature 13"
rare_01: "Rare"
size: "Medium"
trait_01: "Aberration"
trait_02: "Shapeshifter"
trait_03: "Ooze"
modifier: 24

perception:
  - name: "Perception"
    desc: "Perception +23; darkvision"

languages: "Common (can't speak), telepathy 60 feet"

skills:
  - name: "Skills"
    desc: "__Athletics__ +27, __Stealth__ +25, __Deception__ +25"

abilityMods: [7, 4, 6, -2, 4, 2]

abilities_top:
  - name: "Mimic Object"
    desc: "The mimic can take the shape of any Medium object. A creature must succeed at a DC 35 Perception check to determine the object is a mimic."

  - name: "Adhesive"
    desc: "A creature that hits the mimic with a melee weapon must succeed at a DC 34 Reflex save or the weapon becomes stuck. A creature that touches the mimic is automatically [[grabbed]]. Removing an item stuck to the mimic requires a DC 34 Athletics check."

abilities_mid:
  - name: "Engulfing Ambush"
    desc: "⬺ __Requirement__ The mimic is disguised as an object. __Effect__ The mimic sheds its disguise and makes a pseudopod Strike. On a hit, the target is also grabbed."

  - name: "Digestive Corrosion"
    desc: "A creature [[grabbed]] or [[restrained]] by the mimic takes 3d6 acid damage at the start of the mimic’s turn (DC 35 basic Fortitude)."

abilities_bot:
  - name: "Adaptive Adhesion"
    desc: "The mimic gains a +2 circumstance bonus to Athletics checks to [[Grapple]] any creature it already has grabbed."

  - name: "Shape Lock"
    desc: "A creature stuck to the mimic cannot Step, Stride, or Escape using Acrobatics."

speed: 25 feet, climb 20 feet

ac: 36
armorclass:
  - name: "AC"
    desc: "36; __Fort__ +28, __Ref__ +24, __Will__ +22"

hp: 255
health:
  - name: "HP"
    desc: "255; fast healing 10; __Immunities__ acid, critical hits, precision"

attacks:
  - name: "Melee • Pseudopod"
    desc: "⬻ +28 ([[reach|reach 10 feet]]); __Damage__ `dice: 3d12+13` bludgeoning plus Grab"

  - name: "Melee • Engulf Lash"
    desc: "⬺ +26; __Damage__ `dice: 3d8+13` bludgeoning plus `dice: 2d6` acid, and the target must succeed at a DC 35 Reflex save or become [[restrained]]."

sourcebook: "Homebrew"

```