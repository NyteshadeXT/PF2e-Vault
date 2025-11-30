---
noteType: pf2eMonster
aliases: "Corrupt Scout of Bane"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/human
  - pf2e/creature/level/12
statblock: inline
name: "Corrupt Scout of Bane"
level: 12
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Homebrew"
name: "Corrupt Scout of Bane"
level: "Creature 12"
rare_01: "Rare"
alignment: "Chaotic Evil"
size: "Medium"
trait_01: "Humanoid"
trait_02: "Human"
modifier: 22
perception:
  - name: "Perception"
    desc: "Perception +22; imprecise tremorsense 10 feet"
languages: "Common"
skills:
  - name: "Skills"
    desc: "__Acrobatics__ +25; __Athletics__ +22; __Deception__ +22; __Intimidation__ +22; __Nature__ +21; __Stealth__ +25; __Survival__ +23"
abilityMods: [4, 6, 3, 2, 4, 4]

abilities_top:
  - name: "Equipment"
    desc: "+2 Shortsword; +1 Spear; +2 Leather Armor"

abilities_mid:
  - name: "Hidden Movement"
    desc: "If the scout begins its turn [[hidden]] or [[undetected]] by a creature, that creature is [[off-guard]] against the scout's attacks until the end of this turn."

abilities_bot:
  - name: "Sneak Attack"
    desc: "The scout deals an extra 3d6 precision damage to [[off-guard]] creatures."
  - name: "Brutal Stab"
    desc: "⬺ (__attack__, __flourish__) __Requirements__ The target is [[off-guard]] to the scout or is [[prone]]. __Recharge__ when first reduced to half its Hit Points in an encounter. __Effect__ The scout makes a melee Strike with its shortsword. If this Strike hits, it deals an additional 2d6 precision damage and 3d6 [[persistent bleed]] damage."
  - name: "Battle Resurgence"
    desc: "(__emotion__, __mental__) The first time the corrupt scout of Bane is reduced to half its Hit Points during an encounter, it immediately recharges its *Brutal Stab* ability."

speed: 25 feet

ac: 32
armorclass:
  - name: "AC"
    desc: "32; __Fort__ +20, __Ref__ +25, __Will__ +21"

hp: 220
health:
  - name: "HP"
    desc: "220; __Resistances__ bleed 10;"

attacks:
  - name: "Melee +2 Shortsword"
    desc: "⬻ +24 ([[agile]], [[finesse]], [[versatile|versatile S]]); __Damage__ 2d6+10 piercing"
  - name: Melee +1 Spear
    desc: "⬻ spear +24 ([[thrown|thrown 20 feet]]); __Damage__ 2d6+10 piercing"
  - name: Ranged +1 Spear
    desc: "⬻ spear +24 ([[thrown|thrown 20 feet]]); __Damage__ 2d6+8 piercing"
  - name: "Tactical Feint"
    desc: "⬺  The scout attempts to [[Feint]] against a creature within 30 feet using Deception +22; on a success, the target is [[off-guard]] against the scout’s next melee or ranged Strike before the end of the scout’s next turn."

sourcebook: "Homebrew"

```

