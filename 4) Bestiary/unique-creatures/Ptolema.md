---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Ptolema"
tags:
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/13
statblock: inline
name: "Ptolema"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Ptolema"
level: "Creature 13"
rare_02: "Unique"
size: "Medium"
trait_04: "Humanoid"
trait_05: "Arcane"
trait_06: "Visual"
modifier: 26
perception:
  - name: "Perception"
    desc: "Perception +26; __darkvision__;"
languages: "Common, Aklo"
skills:
  - name: "Skills"
    desc: "__Deception__: +26 (1d20+26); __Diplomacy__: +24 (1d20+24); __Stealth__: +26 (1d20+26); __Arcana__: +22 (1d20+22); __Occultism__: +22 (1d20+22); __Society__: +22 (1d20+22)"
abilityMods: [4, 6, 5, 3, 3, 6]

abilities_top:
  - name: "Petrifying Gaze"
    desc: ⬻ ([[arcane]], [[aura]], [[visual]]) **30 feet**. At the end of each enemy’s turn within the aura, they must attempt a DC 34 Fortitude save. On a failure, the creature is [[conditions#slowed|Slowed 1]] for 1 minute. On a critical failure, the creature is petrified permanently. The medusa can activate or deactivate this aura using a single action with the concentrate trait.
  - name: Biting Snakes
    desc: "`pf2:r` **Trigger** A creature ends its turn adjacent to the medusa.  **Effect** The medusa makes a snake fangs Strike."

abilities_bot:
  - name: Focus Gaze
    desc: ⬻ ([[arcane]], [[concentrate]], [[incapacitation]], [[visual]] The medusa focuses their gaze on a creature within 30 feet. That creature must immediately attempt a DC 34 Fortitude save against the medusa’s petrifying gaze. If already slowed, a failure causes the creature to be permanently petrified. After attempting the save, the creature is temporarily immune until the start of the medusa’s next turn.
  - name: Rune of Poison
    desc: [[8B - The Runecutter's Ruin (D186)#The Forbidden Runes|Rune of Poison]]
  - name: Serpent Venom
    desc: ([[Poison]]), **Saving Throw** DC 34 Fortitude; **Maximum Duration** 6 rounds  **Stage 1** (3d6) 3d6 poison damage and [[conditions#enfeebled|Enfeebled 1]] (1 round)  **Stage 2** (6d6) 6d6 poison damage and [[conditions#enfeebled|Enfeebled 2]] (1 round)

speed: 30 feet

ac: 35
armorclass:
  - name: AC
    desc: "35; __Fort__: +26 (1d20+26); __Ref__: +28 (1d20+28); __Will__: +24 (1d20+24);"
hp: 230
health:
  - name: HP
    desc: "230;  __Resistances__ poison 10"

attacks:
  - name: Melee
    desc: "Shortsword +26 ([[agile]], [[finesse]], [[versatile S]]) __Damage__: (2d6+10) 2d6+10 piercing plus Serpent Venom"
  - name: Melee.
    desc: "Snake Fangs +24 ([[agile]], [[finesse]]) __Damage__: (2d4+10) 2d4+10 piercing plus Serpent Venom"
  - name: Ranged
    desc: "Composite Shortbow +27 ([[deadly d10]], [[magical]], [[propulsive]], [[range 100 ft]]) __Damage__: (2d6+9) 2d6+9 piercing plus Serpent Venom"
