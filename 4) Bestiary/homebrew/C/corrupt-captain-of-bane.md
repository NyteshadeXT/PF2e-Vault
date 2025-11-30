---
noteType: pf2eMonster
aliases: "Corrupt Captain of Bane"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/1
statblock: inline
name: "Corrupt Captain of Bane"
level: 1
---

```statblock
columns: 2
forcecolumns: true
layout: Layout
source: "Homebrew"
name: "Corrupt Captain of Bane"
level: "Creature 16"
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
    desc: "__Acrobatics__ +22; __Athletics__ +27;  __Warfare Lore__ +26"
abilityMods: [8, 4, 4, 4, 4, 4]

abilities_top:
  - name: "Equipment"
    desc: "Greater Corrosive Greater Thundering +2 Battleaxe; +2 Breastplate"

abilities_mid:
  - name: "Attack of Opportunity"
    desc: "`pf2:r` **Trigger** A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using. **Effect** The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike."
  - name: "Sudden Charge"
    desc: "`pf2:2` The guard captain Strides twice. If the guard captain ends their movement within a melee reach of at least one enemy, they can make a melee Strike against that enemy."

speed: 25

ac: 36
armorclass:
  - name: "AC"
    desc: "36; __Fort__ +23, __Ref__ +20, __Will__ +20"

hp: 290
health:
  - name: "HP"
    desc: "290"


attacks:
  - name: Greater Corrosive Greater Thundering +2 Battleaxe
    desc: "⬻ +25 ([[sweep]]); __Damage__ `dice: 2d12+21 + 1d6 + 1d6` 2d12+21 slashing + 1d6 acid + 1d6 sonic; on critical hit the target must succeed at a DC 34 Fortitude save or be Deafened permanently and the target's armor (if any) takes `dice: 6d6` 6d6 acid damage (before applying Hardness); if the target has a shield raised, the shield takes this damage instead."

sourcebook: "Homebrew"
```