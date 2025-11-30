---
noteType: pf2eMonster
aliases: "Corrupt Soldier of Bane"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/12
statblock: inline
name: "Corrupt Soldier of Bane"
level: 12
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Corrupt Soldier of Bane"
level: "Creature 12"
rare_01: "rare"
size: "medium"
trait_01: "humanoid"
trait_02: "human"
modifier: 22
perception:
  - name: "Perception"
    desc: "Perception +22"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Athletics__ +27; __Intimidation__ +22; __Warfare Lore__ +6"
abilityMods: [7, 3, 5, 3, 4, 4]

abilities_mid:
  - name: "Reactive Strike"
    desc: "`pf2:r` **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using. **Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."
  - name: "Shield Block"
    desc: "`pf2:r` **Trigger** The monster has its shield raised and takes damage from a physical attack. **Effect** The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield's Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield."
  - name: "Guardian Shield"
    desc: "`pf2:1` The infantry soldier Raises their Shield, but grants the benefit to an adjacent ally and can Shield Block for that ally. Guardian Shield ends early if at any point the ally is no longer adjacent."

speed: 25 feet

ac: 33
armorclass:
  - name: "AC"
    desc: "33; __Fort__ +23, __Ref__ +20, __Will__ +20"

hp: 211
health:
  - name: "HP"
    desc: "211"

attacks:
  - name: "Ranged +2 Greater Striking Crossbow"
    desc: "⬻ +20 ([[range 120]], [[reload 1]]); __Damage__ `dice: 3d6+9` piercing"
  - name: "Melee +2 Greater Striking Shortsword"
    desc: "⬻ +24 ([[agile]], [[versatile|versatile S]]); __Damage__ `dice: 3d10+16` piercing"

sourcebook: "Homebrew"
```