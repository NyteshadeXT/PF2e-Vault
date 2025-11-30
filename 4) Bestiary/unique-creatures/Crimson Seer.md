---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Crimson Seer"
tags: 
  - pf2e/creature/type/aberration
  - pf2e/trait/unique
  - pf2e/trait/humanoid
  - pf2e/trait/divine
  - pf2e/creature/level/15
statblock: inline
name: "Chaos-Scarred Eye Tyrant"
level: 15
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Crimson Seer"
level: "Creature 15"
token: "Crimson Seer.webp"
rare_01: "Unique"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Aberration"
trait_03: "Divine"
modifier: 28
perception:
  - name: "Perception"
    desc: "Perception +28; [[darkvision]]"
languages: "Common, Deep Speech"
skills:
  - name: "Skills"
    desc: "__Arcana__ +27; __Intimidation__ +29; __Occultism__ +28; __Religion__ +28; __Deception__ +27; __Society__ +24"
abilityMods: [4, 2, 5, 6, 5, 7]

abilities_top:
  - name: "Crimson Insight"
    desc: "The Crimson Seer automatically knows the location of any [[slowed]], [[stupefied]], or [[dazed]] creature within 60 feet as if it had [[tremorsense]]."
  - name: "Equipment"
    desc: "+2 [[Spellstoring]] Mace; [[Energy-Absorbing (Greater)]] [[Spellbreaking]] Armor Potency +2 Lamellar Breastplate; [[Armbands of the Gorgon]]"

abilities_mid:
  - name: "Grasping Tentacles"
    desc: "⬺ (__occult__, [[attack]]) __Frequency__ once per round. __Targets__ up to 2 creatures within 15 feet. __Effect__ Each must attempt a DC 37 Fortitude save. **Critical Success** Unaffected. **Success** [[pushed|pushed 5 feet]]. **Failure** [[pushed|pushed 15 feet]] and [[slowed|slowed 1]] until end of next turn. **Critical Failure** As failure, and if moved adjacent to the Seer, the Seer makes a Heavy Mace Strike."

  - name: "Mind-Bending Whispers"
    desc: "⬺ (__occult__, [[mental]], [[auditory]]) __Recharge__ 1d4 rounds. The Seer releases a psychic storm in a 10-foot emanation. Each enemy must attempt a DC 37 Will save. **Critical Success** Unaffected. **Success** Half of 8d10+10 mental. **Failure** Full damage and [[dazed]] 1 round. **Critical Failure** Full damage, 6d6 [[persistent mental]] damage, and dazed for 1 minute (DC 35 Will each round ends both)."

  - name: "Compelling Whispers"
    desc: "⬽ (__occult__, [[charm]], [[auditory]]) __Frequency__ once per round. __Targets__ Up to two [[dazed]] creatures within 30 feet. __Effect__ Each must succeed at a DC 37 Will save or be [[controlled]] for 1 round (as the *command* spell)."

abilities_bot:
  - name: "Psychic Feedback"
    desc: "`pf2:r` Whenever the Crimson Seer takes damage from a mental effect, the source takes 6d6 mental damage (DC 37 basic Will save)."

  - name: "Crimson Revelation"
    desc: "⬺ (__concentrate__, [[divine]], [[mental]]) __Frequency__ once per 10 minutes. __Effect__ For 3 rounds, creatures beginning their turn in the Mind Mire aura must attempt a DC 37 Will save or become [[stupefied|stupefied 2]] for 1 round. The Seer gains a +2 status bonus to attack rolls, saving throws, and spell DCs."

speed: 25 feet

ac: 36
armorclass:
  - name: "AC"
    desc: "36; __Fort__ +28, __Ref__ +23, __Will__ +31"

hp: 315
health:
  - name: "HP"
    desc: "315; [[negative healing]]; __Resistances__ mental 10, bludgeoning 5; __Weakness__ good 10"

attacks:
  - name: "Melee • Heavy Mace"
    desc: "⬻ +30 ([[magical]], [[versatile|versatile P]]); __Damage__ `dice: 2d10+14` bludgeoning plus `dice: 2d6` mental"

  - name: "Ranged • Occult Bolt"
    desc: "⬻ +29 ([[range increment|range increment 60 feet]], [[mental]], [[magical]]); __Damage__ `dice: 6d8+12` mental plus [[slowed|slowed 1]] (DC 37 Will negates)."

sourcebook: "Homebrew"

```

