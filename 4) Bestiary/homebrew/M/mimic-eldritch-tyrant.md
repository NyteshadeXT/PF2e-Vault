---
noteType: pf2eMonster
aliases: "Eldritch Tyrant Mimic"
tags: 
  - pf2e/creature/type/fungus
  - pf2e/creature/type/shapeshifter
  - pf2e/creature/type/ooze
  - pf2e/creature/level/15
statblock: inline
name: "Mimic"
level: 15
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Eldritch Tyrant Mimic"
level: "Creature 15"
rare_01: "Rare"
size: "Large"
trait_01: "Aberration"
trait_02: "Shapeshifter"
trait_03: "Ooze"
modifier: 28

perception:
  - name: "Perception"
    desc: "Perception +29; darkvision, imprecise tremorsense 30 feet"

languages: "Common (can't speak), Deep Speech, telepathy 60 feet"

skills:
  - name: "Skills"
    desc: "__Athletics__ +31, __Stealth__ +27, __Deception__ +30, __Thievery__ +25"

abilityMods: [8, 4, 7, 0, 5, 4]

abilities_top:
  - name: "Mimic Colossal Object"
    desc: "The mimic can take the form of any Large unattended object (statues, altars, sarcophagi, arcane machines). Detecting its true nature requires a DC 38 Perception check."

  - name: "Super-Adhesive"
    desc: "A creature touching the mimic is automatically [[grabbed]] (escape DC 38). Weapons stuck to the mimic require a DC 38 Athletics check to pull free. Escape attempts using Acrobatics automatically fail."

abilities_mid:
  - name: "Ambush Devour"
    desc: "⬺ __Requirements__ The mimic is disguised as an object. __Effect__ The mimic sheds its disguise, makes a pseudopod Strike, and pulls the creature adjacent to it. On a hit, the target is also grabbed. On a critical hit, the target becomes [[restrained]]."

  - name: "Digestive Metamorphosis"
    desc: "Creatures [[grabbed]] by the mimic take 3d6 acid damage and 3d6 mental damage at the start of the mimic’s turn (DC 38 basic Fortitude). On a critical failure, the target also takes a –1 status penalty to AC for 1 round as their body partially dissolves."

  - name: "Shifting Anatomy"
    desc: "The mimic gains resistance 15 to all physical damage except force or adamantine. It ignores difficult terrain and can Squeeze without penalties."

abilities_bot:
  - name: "Devouring Maw"
    desc: "⬺ (__attack__) The mimic opens a fractal, shifting mouth in its surface and attempts to swallow a Large or smaller creature it has grabbed (DC 38 Fortitude). **Success** The creature is not swallowed. **Failure** The creature becomes swallowed, taking 4d6 acid + 4d6 mental damage each round. **Critical Failure** The creature takes double initial damage and is restrained inside the mimic."

  - name: "Morphic Disarm"
    desc: "⬽ __Trigger__ A creature the mimic has grabbed attempts to cast a spell or use a manipulated action. __Effect__ The mimic reshapes around the creature, disrupting the action unless it succeeds at a DC 38 Reflex save."

speed: 25 feet, climb 20 feet

ac: 38
armorclass:
  - name: "AC"
    desc: "38; __Fort__ +31, __Ref__ +25, __Will__ +29"

hp: 310
health:
  - name: "HP"
    desc: "310; fast healing 15; __Immunities__ acid, precision, critical hits; __Resistances__ all physical 15 (except force or adamantine)"

attacks:
  - name: "Melee • Pseudopod"
    desc: "⬻ +30 ([[reach|reach 15 feet]]); __Damage__ 3d12+14 bludgeoning plus Grab"

  - name: "Melee • Engulfing Blow"
    desc: "⬺ +28; __Damage__ 4d8+14 bludgeoning plus 2d8 acid; the target must succeed at a DC 38 Reflex save or become [[restrained]]."

sourcebook: "Homebrew"

```