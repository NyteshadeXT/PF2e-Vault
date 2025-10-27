---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Parade Master of Glass"
tags: 
  - pf2e/creature/type/construct
  - pf2e/creature/level/13
statblock: inline
name: "Parade Master of Glass"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Parade Master of Glass"
level: "Creature 13"
size: "Medium"
rare_03: "Uncommon"
trait_03: "Construct"
trait_04: "Mirrorborn"
modifier: 24
perception:
  - name: "Perception"
    desc: "Perception +24; __darkvision__;"
languages: "understands Common but speaks only in distorted echoes; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +25 (1d20+25); __Intimidation__: +23 (1d20+23); __Stealth__: +25 (1d20+25); __Deception__: +22 (1d20+22);"
abilityMods: [5, 6, 4, 2, 4, 3]

abilities_mid:
  - name: "Reflective Body"
    desc: "([[aura]], [[illusion]], [[visiual]]); **30 feet.** Light bends unnaturally around the Mirror Man. Any creature that starts its turn in the aura or enters it must succeed at a DC 33 Will save or be **Frightened 1** as distorted reflections of themselves stare back in twisted forms. A creature that critically fails is also **Stupefied 1** for 1 round."
  - name: "Reactive Reflection"
    desc: "`pf2:r` **Trigger:** The Mirror Man is targeted by a ranged Strike or spell attack. **Effect:** The Mirror Man warps light to defend itself, gaining **concealment** against the triggering attack. On a failed attack roll, the reflected energy lashes out, dealing `dice: 3d6` 3d6 mental damage to the attacker."
  - name: "Shard Form"
    desc: "  When reduced to 0 HP or when critically hit, the Mirror Man shatters into razor-sharp fragments, dealing `dice: 3d6` 3d6 slashing damage to all creatures within 10 feet (DC 33 Reflex half). At the start of its next turn, it reforms at half its maximum HP. If struck by a **sonic** or **force** effect before that turn, the Mirror Man is destroyed instead of reforming."
  - name: "Light-Bound Nature"
    desc: "In total darkness, the Mirror Man is **slowed 1** and cannot use *Mirror Strike* or *Reflective Step*"
    
abilities_bot:
  - name: "Mirror Strike"
    desc: "`pf2:2` The Mirror Man releases a refracted pulse of prismatic light in a **30-foot line**. Creatures in the area take `dice: 10d6` 10d6 mental damage (DC 33 Will save for half). A creature that fails this save by 10 or more becomes **Confused** until the end of its next turn, seeing reflections as allies."
  - name: "Reflective Step"
    desc: "`pf2:1` The Mirror Man teleports up to **15 feet** to any unoccupied space adjacent to a mirrored surface or bright light source it can see. The space it leaves becomes shimmering and difficult terrain until the start of its next turn as reflections briefly linger."
  - name: "Shatter March"
    desc: "`pf2:2` ([[arcane]], [[auditory]], [[visiual]]); **Frequency:** once every `dice: 1d4` 1d4 rounds **Effect:** The Parade Master emits a resonant tone that causes every Mirror Man within 40 feet to explode and reform. Each Mirror Man within range bursts into shards (`dice: 3d6` 3d6 slashing, DC 33 Reflex half) and instantly reappears in a space of the Parade Master’s choice within 30 feet."
  - name: "Hall of Echoes"
    desc: "`pf2:1` ([[arcane]], [[illusion]], [[mental]], [[visiual]]); The Parade Master projects phantom reflections of those it faces. Each creature of its choice within 30 feet must attempt a DC 33 Will save or become **Frightened 1**. On a critical failure, the creature also becomes **Flat-Footed** until the end of its next turn as its vision distorts."

speed: 30 feet

ac: 36
armorclass:
  - name: AC
    desc: "36; __Fort__: +22 (1d20+22); __Ref__: +26 (1d20+26); __Will__: +24 (1d20+24);"
hp: 195
health:
  - name: HP
    desc: "195;  __Immunities__ bleed, death effects, disease, paralyzed, poison, precision, unconscious; __Weaknesses__ sonic 10 ; __Resistances__ physical 10 (except bludgeoning)" 


attacks:
  - name: Melee
    desc: "⬻ mirrored claws +28 ([[agile]]); __Damage__ 2d8+11 (2d8+11) slashing + `dice: 2d6` 2d6 mental"
  - name: Ranged
    desc: "⬻ shard ray +27 ([[ranged 60 ft]]); __Damage__ 3d6 (3d6) piercing + `dice: 3d6` 3d6 mental"
    
sourcebook: "_Homebrew_"
```

```encounter-table
name: Mirror Man
creatures:
  - 1: Mirror Man
```

