---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Chaos-Scarred Eye Tyrant"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/trait/unique
  - pf2e/trait/chaotic
  - pf2e/creature/level/15
statblock: inline
name: "Chaos-Scarred Eye Tyrant"
level: 15
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Custom"
name: "Chaos-Scarred Eye Tyrant"
level: "Creature 15"
rare_02: "Unique"
alignment: "CE"
size: "Large"
trait_04: "Aberration"
trait_05: "Chaotic"
modifier: 32
perception:
  - name: "Perception"
    desc: "Perception +32; __darkvision__; __all-around vision__; __true seeing__;"
languages: "Aklo, Undercommon, telepathy 120 ft.;"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +26 (1d20+26); __Arcana__: +30 (1d20+30); __Deception__: +28 (1d20+28); __Occultism__: +30 (1d20+30); __Stealth__: +25 (1d20+25); __Survival__: +26 (1d20+26);"
abilityMods: [4, 6, 9, 9, 8, 8]

abilities_top:
  - name: "Chaotic Mutation"
    desc: "`pf2:r` **Trigger** Hit by a melee attack or critically fail a saving throw. **Effect** The eye tyrant’s form writhes unpredictably. Roll (1d4) 1d4: <br>1. Gain resistance 10 to all damage until the start of its next turn. <br>2. Teleport 30 feet to a random space within line of sight. <br>3. Emit a burst of anarchic energy (15-ft burst, (6d6) 6d6 chaotic damage, DC 35 Reflex save). <br>4. Regrow a destroyed eye stalk and gain a 4th Eye Ray for 1 round."

abilities_mid:
  - name: "Buoyant"
    desc: "The Chaos-Scarred Eye Tyrant defies gravity as if swimming through air. It cannot fall and remains airborne unless completely incapacitated."

abilities_bot:
  - name: "Antimagic Cone"
    desc: "`pf2:1` (aura, abjuration, magical) 30 feet. The central eye of an eye tyrant produces an area of antimagic. This area has the effect of antimagic field and even effects the eye tyrant's own eye rays. An eye tyrant can activate or suppress this ability as an action, which has the concentrate trait."
  - name: "Chaotic Eye Rays"
    desc: "`pf2:1` (concentrate, magical); Each of the eye tyrant's eye stalks is capable of producing its own unique magical ray. An eye tyrant targets a single creature it can see within 120 feet with one of the following spells effects. It is unable to choose which effect it creates however.  Roll (1d8) 1d8 and consult the following list. <br>1. **Charm Ray** – [[Charm]] (heightened to 5th level) <br>2. **Disintegration Ray** – [[Disintegrate]] (heightened to 7th level) <br>3. **Fear Ray** – [[Vision of Death]] (heightened to 6th level) <br>4. **Petrify Ray** – [[Petrify]] (heightened to 6th level) <br>5. **Anarchic Ray** – [[divine-wrath|Divine Wrath]] (Chaotic) (6th level, DC 39 or take 12d6 chaotic damage and sickened 1 on fail) <br>6. **Fracture Ray** – Target takes (8d10) 8d10 force damage and must succeed a DC 39 Fort save or suffer **Warped Flesh** (see below) <br>7. **Teleport Ray** – [[dimension-door|Dimension Door]] forcibly teleports the target up to 100 feet in a random direction (Will save negates) <br>8. **Polymorph Ray** – [[baleful-polymorph|Baleful Polymorph]] (DC 39) <br>Each of these effects has a DC 39 saving throw and a +32 to hit."
  - name: "Warped Flesh"
    desc: "The target’s body shifts unpredictably. On a failure, they become clumsy 1 and take a –1 status penalty to saves vs. polymorph, teleportation, and chaotic effects for 1 minute."
  - name: "Mutated Gaze"
    desc: "`pf2:2` (divine, aura, chaotic, polymorph) **Frequency:** When reduced to half health (172) **Effect** The Eye Tyrant floods the battlefield with chaos energy. All creatures in a 60-ft emanation must attempt a DC 39 Will save <br>- **Critical Success:** Unaffected. <br>- **Success:** Dazzled for 1 round. <br>- **Failure:** Stunned 1 and affected by *Confusion* for 1 round. <br>- **Critical Failure:** Transformed by chaotic magic (GM discretion or roll mutation effect table)."

speed: fly 30 feet (buoyant)

ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__: +25 (1d20+25); __Ref__: +27 (1d20+27); __Will__: +30 (1d20+30); **Immunities** blindness, prone, confusion; **Weaknesses** cold iron 10, lawful 10; **Resistances** mental 10, chaotic energy 10"
hp: 345
health:
  - name: HP
    desc: "345 (regenerates 15 HP each round while not in an antimagic field);"
attacks:
  - name: Melee
    desc: "`pf2:1` bite +26 ([[reach 10ft]]); __Damage__ 3d10+16 (3d10+16) piercing"
  - name: Melee.
    desc: "`pf2:1` chaos tentacle +30 ([[agile]], [[finesse]], [[chaotic]]); __Damage__ 3d6+12 (3d6+12) bludgeoning and 2d6 (2d6) chaotic damage"

```