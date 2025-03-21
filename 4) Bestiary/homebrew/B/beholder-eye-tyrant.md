---
noteType: pf2eMonster
aliases: "Beholder Eye Tyrant"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/creature/level/13
statblock: inline
name: "Beholder Eye Tyrant"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Beholder Eye Tyrant"
token: [[Beholder-eye-tyrant.webp]]
level: "Creature 13"
alignment: "LE"
size: "Large"
trait_03: "Aberration"
modifier: 29
perception:
  - name: "Perception"
    desc: "Perception +29; __All-around vision__, __darkvision__;"
languages: "Akly, Undercommon; "
abilityMods: [4, 5, 8, 9, 7, 7]

abilities_top:
  - name: "Perfected Flight"
    desc: "  A beholder eye tyrant can hover in place without spending an action."
abilities_bot:
  - name: "Eye Rays"
    desc: " ([[concentrate]], [[magical]]);  Each of the eye tyrant's eye stalks is capable of producing its own unique magical ray. An eye tyrant targets a single creature it can see within 120 feet with one of the following spells effects. **Charm Ray** The stalk produces the effect of [[charm]]. **Death Ray** The stalk produces the effect of [[finger-of-death]] **Disintegrate Ray** The stalk produces the effect of [[disintegrate]]. **Fear Ray** The stalk produces the effect of [[2) compendium/spells/fear|fear]]. **Petrify Ray** The stalk produces the effect of [[flesh-to-stone]]. **Sleep Ray** The stalk produces the effect of [[2) compendium/spells/sleep|sleep]].  **Slow Ray** The stalk produces the effect of [[slow]]. **Telekinetic Ray** The stalk produces the effect of [[telekinetic-maneuver]]. Each of these effects has a DC 37 saving throw and a +29 to hit. An eye tyrant can't use the same eye ray more than once per round."
  - name: "Central Eye"
    desc: " ([[aura]], [[abjuration]], [[magical]]);  The central eye of an eye tyrant produces an area of antimagic with a range of 30 feet. This area has the effect of [[antimagic-field]] and even effects the eye tyrant's own eye rays. An eye tyrant can activate or suppress this ability as an action, which has the concentrate trait."

speed: fly 25 feet; perfected flight;

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__: +20 (1d20+20); __Ref__: +23 (1d20+23); __Will__: +26 (1d20+26);"
hp: 290
health:
  - name: HP
    desc: "290; __Immunities__: blindness, prone __weakness__ cold iron 10"


attacks:
  - name: Melee
    desc: "⬻ bite +21 __Damage__ 3d10+16 (3d10+16) piercing"
  - name: Melee.
    desc: "⬻ eye stalk +25 [[agile]] __Damage__ 3d6+11 (3d6+11) bludgeoning"

sourcebook: "_Homebrew_."
```

```encounter-table
name: Beholder Eye Tyrant
creatures:
  - 1: Beholder Eye Tyrant
```
