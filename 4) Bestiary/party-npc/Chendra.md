---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Chendra"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/10
statblock: inline
name: "Chendra"
level: 10
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
player: true
source: "HB"
name: "Chendra"
level: "Creature 10"
alignment: "CG"
size: "Medium"
trait_03: "Human"
trait_04: "Half-Elf"
trait_05: "Humanoid"
modifier: 18
perception:
  - name: "Perception"
    desc: "Perception +18; low-light vision;"
languages: "Common, Sylvan; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +3 (1d20+3); __Diplomacy__: +15 (1d20+15); __Lore: Herbalism__: +13 (1d20+13); __Medicine__: +16 (1d20+16); __Nature__: +20 (1d20+20); __Performance__: +15 (1d20+15); __Religion__: +20 (1d20+20); "
abilityMods: [0, 3, 1, 1, 4, 3]

abilities_bot:
  - name: "Reach Spell"
    desc: "⬻ ([[concentrate]], [[metamagic]]); You can extend the range of your spells. If the next action you use is toCast a Spell that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, ifthe spell normally has a range of touch, you extend its range to 30 feet."
  - name: "Channel Smite"
    desc: "(Divine, Necromancy) __Cost__ Expend a harm or heal spell. __Prerequisites__ harmful font or healingfont You siphon the destructive energies of positive or negative energy through a melee attack and into your foe.Make a melee Strike and add the spell’s damage to the Strike’s damage. This is negative damage if you expended a harm spell or positive damage if you expended a heal spell. The spell is expended with no effect if your Strikefails or hits a creature that isn’t damaged by that energy type (such as if you hit a non-undead creature with a heal spell)."
abilities_top:
  - name: Items
    desc: "+1 Staff, +1 Elven Chainmail;"

speed: 25 feet

ac: 16
armorclass:
  - name: AC
    desc: "16; __Fort__: +15 (1d20+15); __Ref__: +15 (1d20+15); __Will__: +20 (1d20+20); Resolve"
hp: 98
health:
  - name: HP
    desc: "98; "


attacks:
  - name: Melee
    desc: "⬻ +1 staff +13 ([[two-hand-d8]], [[magical]]); __Damage__ 1d8 (1d8) bludgeoning"

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 27, attack +17; __2nd__ [[augury]]"
  - name: "Divine Prepared Spells"
    desc: "DC 28, attack +18; __5th__ [[heal]]x3, [[harm]], [[healing-well-som|Healing Well]], [[summon-anarch-som]], [[tongues]] __4th __ [[compel-true-name-som|Compel True Name]], [[Prophet's Luck]], [[soothing-spring-som|Soothing Spring]] __3rd__ [[searing-light]], [[behold-the-weave-da|Behold the Weave]], [[circle-of-protection|Circle Of Protection]] __2nd__ [[lucky-number-som|Lucky Number]], [[restoration|Restoration]], [[comprehend-language|Comprehend Language]] __1st__ [[detect-poison|Detect Poison]], [[Bless]], [[heal]] __Cantrips__ [[stabilize]], [[disrupt-undead|Disrupt Undead]], [[divine-lance|Divine Lance]], [[light]], [[invoke-true-name-som|Invoke True Name]]"
    
sourcebook: "_Homebrew_"
```

```encounter-table
name: Zeta Windsnap
creatures:
  - 1: Zeta Windsnap
```
