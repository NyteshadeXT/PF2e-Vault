---
noteType: pf2eMonster
aliases: "Corrupt Priest of Bane"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/13
statblock: inline
name: "Corrupt Priest of Bane"
level: 13
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Corrupt Priest of Bane"
level: "Creature 13"
rare_01: "Rare"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Human"
modifier: 25
perception:
  - name: "Perception"
    desc: "Perception +25"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Diplomacy__ +22; __Intimidation__ +25; __Religion__ +27; __Deception__ +24; __Nature__ +24; __Survival__ +24"
abilityMods: [4, 3, 4, 4, 8, 5]

abilities_top:
  - name: "Disquieting Presence"
    desc: "([[aura]], [[emotion]], [[fear]], [[mental]]) 20 feet. Enemies in the aura take a –2 status penalty to Will saving throws. If a creature begins its turn in the aura and fails a DC 33 Will save, it becomes [[frightened|frightened 1]] (or [[frightened|frightened 2]] on a critical failure). A creature that succeeds its save is temporarily immune for 1 minute."

  - name: "Roiling Mind"
    desc: "(__abjuration__, [[mental]]) __Trigger__ The Corrupt Priest of Bane is targeted by an effect with the [[mental]] trait or that requires a Will save. __Effect__ The source of the triggering effect takes `dice: 14d6` mental damage (DC 33 Basic Will save)."

  - name: "Equipment"
    desc: "+2 Striking Mace; +2 Chainmail"
    
abilities_mid:
  - name: "Force Tremor"
    desc: "`pf2:2` (__evocation__, [[force]], [[fear]]) __Frequency__ once per `dice: 1d4` rounds. The priest releases a shockwave of dark power in a 15-foot emanation. Each enemy in the area must attempt a DC 33 Fortitude save.\n**Critical Success** The creature is unaffected.\n**Success** The creature takes half damage.\n**Failure** The creature takes `dice: 6d10+10` force damage, is [[pushed|pushed 15 feet]], and knocked [[prone]].\n**Critical Failure** As failure, but the creature is also [[stunned|stunned 1]]."

  - name: "Grasping Terror"
    desc: "`pf2:2` (__divine__, [[fear]], [[mental]], [[attack]]) __Range__ 120 feet; __Targets__ 1 creature. The priest lashes out with a vision of grasping shadows. The target must attempt a DC 33 Will save.\n**Critical Success** The creature is unaffected.\n**Success** The creature takes half of `dice: 6d8+10` mental damage and is [[slowed|slowed 1]] until the end of its next turn.\n**Failure** The creature takes full damage and is [[slowed|slowed 1]] for 1 minute.\n**Critical Failure** As failure, but the creature is instead [[immobilized]] for 1 round, then [[slowed|slowed 1]] for 1 minute."

abilities_bot:
  - name: "Mace of Subjugation"
    desc: "`pf2:2` __Melee__ +26 ([[magical]], [[fear]], [[versatile|versatile P]]); __Damage__ `dice: 2d8+12` bludgeoning plus the target must succeed at a DC 33 Will save or be [[slowed|slowed 1]] until the end of its next turn."

  - name: "Channel Terror"
    desc: "⬽ (__divine__, [[concentrate]], [[fear]]) __Trigger__ The priest damages one or more creatures with *Grasping Terror* or *Force Tremor*. __Effect__ Each damaged creature becomes [[frightened|frightened 1]]."

speed: 25 feet

ac: 33
armorclass:
  - name: "AC"
    desc: "33; __Fort__ +22, __Ref__ +21, __Will__ +28"

hp: 235
health:
  - name: "HP"
    desc: "235; __Immunities__ fear (self-generated); __Weakness__ good 10"

attacks:
  - name: "Melee Mace"
    desc: "⬻ +26 ([[magical]], [[versatile|versatile P]]); __Damage__ `dice: 2d8+12` bludgeoning plus the target must succeed at a DC 33 Will save or be [[slowed|slowed 1]] until the end of its next turn."
    
sourcebook: "Homebrew"
```