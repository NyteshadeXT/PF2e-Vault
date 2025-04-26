---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Savage Fiendblood Minotaur"
tags: 
  - pf2e/creature/type/large
  - pf2e/creature/type/fiend
  - pf2e/creature/level/13
statblock: inline
name: "Savage Fiendblood Minotaur"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Savage Fiendblood Minotaur"
level: "Creature 13"
token: "[[Demonic Savage Minotaur.webp]]"
size: "Large"
trait_03: "Fiend"
modifier: 24
perception:
  - name: "Perception"
    desc: "Perception +24; __darkvision__;"
languages: "Abyssal, Jotun, Common (can't speek only growls); "
skills:
  - name: "Skills"
    desc: "__Athletics__: +28 (1d20+28); __Intimidation__ +25 (1d20+25); __Survival__ +27 (1d20+27); __Stealth__: +23 (1d20+23);"
abilityMods: [8, 3, 6, -1, 5, 2]

abilities_top:
  - name: "Perfect Orienteering"
    desc: "([[divine]], [[exploration]])* The fiendblood minotaur automatically critically succeeds at Survival checks to [[Sense Direction]] or [[Track]]."
  - name: "Spitful Grasp"
    desc: "`pf2:r` **Trigger** A creature within reach critically fails a Strike against the minotaur. **Effect** The minotaur lashes out with a claw, making a claw Strike with a +2 bonus. If it hits, it gains *10 temporary HP* as it feeds on the pain."
abilities_bot:
  - name: "Maze Charge"
    desc: "`pf2:2` (divine, teleportation, conjuration) The minotaur vanishes in a spiral of black smoke, then reappears up to 60 feet away in an unoccupied space. If it reappears within 10 feet of a creature, it immediately makes a horn Strike. If it moved at least 20 feet this way, the Strike deals an additional 2d9 (2d8) evil damage."
  - name: "Rending Whirlwind"
    desc: "`pf2:2` The minotaur lashes out with both claws in a brutal flurry. Make two claw Strikes against different adjacent creatures. The minotaur ignores MAP between the two attacks. If both attacks hit, each target takes an additional (2d6) 2d6 slashing damage from being torn between the two blows."
  - name: "Terror of the Maze"
    desc: "`pf2:1` (auditory, emotion, fear, mental) The minotaur unleashes a thunderous roar that echoes with unnatural directionlessness. It attempts to [[Demoralize]] all creatures within 60 feet that can hear it (but not see it). The minotaur rolls once and applies the result to each target. Targets in an enclosed, maze-like, or confusing terrain grant the minotaur a +4 circumstance bonus.  Creatures that become [[frightened]] also take a –2 circumstance penalty to Survival checks for 1 minute. Each target is immune for 1 minute."

speed: 35 feet

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__: +27 (1d20+27); __Ref__: +21 (1d20+21); __Will__: +23 (1d20+23);"
hp: 235
health:
  - name: HP
    desc: "235; **Resistances** fire 10, cold 10; **Weaknesses** good 10"


attacks:
  - name: Melee
    desc: "`pf2:1` claw +27 ([[agile|Agile]], [[finesse|Finesse]] [[thrown|Thrown 10ft.]], [[versatile|Versatile P]]); __Damage__ 2d10+12 (2d10+12) slashing plus 1d6 (1d6) persistent bleed"
  - name: Melee.
    desc: "`pf2:1` horns +27 ([[reach|Reach 10ft.]]); __Damage__ 2d8+12 (2d8+12) piercing plus knockdown on crit"
sourcebook: "_Homebrew_"
```

```encounter-table
name: Foulspwan Mangler
creatures:
  - 1: Foulspwan Mangler
```
