---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Foulspwan Mockery"
tags: 
  - pf2e/creature/type/giant
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Foulspwan Mockery"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Foulspwan Mockery"
level: "Creature 10"
alignment: "CE"
size: "Medium"
trait_03: "Aberration"
trait_04: "Humanoid"
trait_05: "Foulspawn"
modifier: 19
perception:
  - name: "Perception"
    desc: "Perception +19; __low-light vision__;"
languages: "Undercommon, telepathy 10ft. ; "
skills:
  - name: "Skills"
    desc: "__Arcana__: +19 (1d20+19); __Diplomacy__: +17 (1d20+17); __Occultism__: +19 (1d20+19);"
abilityMods: [7, 5, 7, 5, 3, 7]

abilities_bot:
  - name: "Mind Harrier"
    desc: "`pf2:2` ([[Enchantment]], [[Mental]], [[Psychic]], [[Incapacitation]]); **Requirements**: Targets one creature within 60 feet and visible to the Foulspawn Mockery. The Mockery distorts reality for a moment, implanting a psychic seed in the mind of its foe. Those separated from allies find the seed blooms into agonizing pain. The target must attempt a Will save. <br>- **Critical Success**: The target is unaffected. <br>- **Success**: The target takes 2d6+6 mental damage. <br>- **Failure**: The target takes 2d6+6 mental damage and is cursed. Until the end of its next turn, if it ends its turn not adjacent to any ally, it takes 10 mental damage and becomes clumsy 1 for 1 round. <br>- **Critical Failure**: As failure, and the target also gains persistent mental damage (1d10). The persistent damage ends automatically when the target ends its turn adjacent to an ally or succeeds at a DC 25 Will save at the end of its turn."
  - name: "Maddening Burst"
    desc: "`pf2:3` ([[Enchantment]], [[Mental]], [[Psychic]], [[Emotion]]); **Frequency**: Recharge 5–6 on 1d6 With a sudden pulse of mind-warping thought, the Mockery floods the minds of nearby foes with hallucinations and chaotic voices that disrupt clarity and decision-making. All enemies within 10 feet of the target location must attempt a Will save. <br>- **Critical Success**: The creature is unaffected.<br>- **Success**: The creature takes half damage.<br>- **Failure**: The creature takes 2d6+6 mental damage and is stupefied 2 for 1 round.<br>- **Critical Failure**: The creature takes full damage, is stupefied 2 for 1 minute, and must succeed at a DC 5 flat check to cast spells or activate abilities with a verbal component while affected."

speed: 25 ft., 15ft. teleportation

ac: 27
armorclass:
  - name: AC
    desc: "27; __Fort__: +16 (1d20+16); __Ref__: +22 (1d20+22); __Will__: +19 (1d20+19);"
hp: 171
health:
  - name: HP
    desc: "171;"


attacks:
  - name: Melee
    desc: "⬻ bite +17 __Damage__ 2d6+10 (2d6+10) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Foulspwan Mockery
creatures:
  - 1: Foulspwan Mockery
```
