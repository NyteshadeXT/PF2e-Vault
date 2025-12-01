---
noteType: pf2eMonster
aliases: "Slug Rabbit"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/type/beast
  - pf2e/creature/level/13
statblock: inline
name: "slug-rabbit"
level: 13
---

```statblock
columns: 2
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Slug Rabbit"
level: "Creature 13"
rare_01: "Rare"
alignment: "CE"
size: "Large"
trait_01: "Aberration"
trait_02: "Beast"
modifier: 23
perception:
  - name: "Perception"
    desc: "+23; __blindsight 30 ft__"
languages: "—"
skills:
  - name: "Skills"
    desc: "__Athletics__ +26, __Acrobatics__ +21, __Stealth__ +23"
abilityMods: [7, 4, 8, -2, 0, -2]

abilities_mid:
  - name: "Squeeze"
    desc: "The slug rabbit can share spaces with other creatures. Enemies can enter its space (treat as [[difficult terrain]]). The slug rabbit can’t be forcibly moved by melee or ranged attacks. While squeezing, it moves at full Speed, doesn’t take penalties, and doesn’t grant flanking."
  - name: "Mass of Teeth"
    desc: " ([[aura]], [[aberration]]); 10 feet. A creature that starts its turn prone in the slug rabbit’s space takes `dice: 2d6` 2d6 piercing damage."
  - name: "Chaos Scar Predator"
    desc: "Slug rabbits’ aberrant physiology makes them resistant to control. They gain a +2 status bonus to saving throws against forced movement and mental effects."

abilities_bot:
  - name: "Overwhelm"
    desc: "⬻ ([[attack]]); The slug rabbit makes a slam [[Strike]]. On a hit, the target must succeed at a DC 32 Reflex save or fall [[prone]]."
  - name: "Hopping Wave"
    desc: "⬺ ([[move]], [[attack]], [[aberration]]); The slug rabbit Leaps up to its Speed, moving through enemy spaces. It makes an __Overwhelm__ [[Strike]] against each creature whose space it passes through. Recharge `dice: 1d4` 1d4 rounds."
  - name: "Terrifying Form"
    desc: " ([[aura]], [[fear]], [[mental]]); 20 feet. Creatures that start their turn in the aura must succeed at a DC 30 Will save or become [[frightened|frightened 1]]."

speed: 40 feet, climb 20 feet

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__ +27, __Ref__ +21, __Will__ +20"

hp: 225
health:
  - name: HP
    desc: "225; __Resistances__ physical 10 (except force, ghost touch), mental 5"

attacks:
  - name: "Melee `pf2:2`"
    desc: "Slam +26; __Damage__ `dice: 3d10+13` 3d10+13 bludgeoning plus prone (DC 32 Reflex)"
  - name: "Melee. `pf2:2`"
    desc: "Bite +24; __Damage__ `dice: 2d12+11` 2d12+11 piercing"

sourcebook: "Custom"

```