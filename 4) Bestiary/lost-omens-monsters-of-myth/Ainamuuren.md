---
noteType: pf2eMonster
aliases: "Ainamuuren"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/14
statblock: inline
name: "Ainamuuren"
level: 14
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout

source: "SOURCE"
name: "Ainamuuren"
level: "Creature 14"
rare_04: "Unique"
alignment: "CN"
size: "Large"
trait_04: "Cold"
trait_05: "Humanoid"
modifier: 25
perception:
  - name: "Perception"
    desc: "Perception +25; __darkvision__, __imprecise scent__;"
languages: "Erutaki, Jotun; "
skills:
  - name: "Skills"
    desc: "__Athletics__: +28 (1d20+28); __Medicine__: +24 (1d20+24); __Nature__: +26 (1d20+26); __Stealth__: +24 (1d20+24), (Stealth: +25 (1d20+25) in forests and snow); "
abilityMods: [8, 4, 5, 2, 5, 0]

abilities_top:
  - name: "Frostbite"
    desc: "  Runes Ainamuuren is marked by the runes of the saumen kar, a gift tied to their ancient curse. Ainamuuren gains a +1 status bonus to saving throws against evil and necromancy spells and effects (indicated below). He can sense the presence of evil undead as a pervasive taste of oily corruption in the air. This is a vague sense that allows him to know when such a creature is within 60 feet, though he can't precisely pinpoint their location with this sense. This sense also extends to living creatures who have the negative healing ability, like dhampir. Snowblind Ainamuuren can [[Hide]] and [[Sneak]] during even light snowfall, even if it wouldn't be thick enough to normally grant concealment."
  - name: Items
    desc: "+2 greater striking greataxe;"
abilities_mid:
  - name: "HP"
    desc: "  259"
  - name: "Blizzard Evasion"
    desc: "⬲ __Trigger__ Ainamuuren takes at least 40 points of physical damage from a single attack, and he isn't currently discorporated __Effect__  Ainamuuren discorporates into a whirling blizzard for 3 rounds. During this time, he gains resistance 10 to physical damage and weakness 10 to force damage. He gains a fly speed of 40 feet, but the only action he can take is to [[Fly]]. While discorporated, the first time each round that Ainamuuren enters another creature's space or a creature enters Ainamuuren's space, that creature takes 4d8 (4d8) cold damage and must succeed at a DC 34 Fortitude save or be [[stunned|stunned 1]]. At the start of his turn, Ainamuuren can end this effect as a free action."
abilities_bot:
  - name: "Curse of the Saumen Kar"
    desc: "⬺ ([[cold]], [[conjuration]], [[primal]]); __Frequency__  times per day  __Effect__  Ainamuuren activates the runes covering his body to create an icy prison around a Huge or smaller creature he can see within 60 feet. The prison is a sphere made of unmelting ice, just large enough to fit his target. The target, and any creatures sharing its space, must attempt a DC 34 Reflex save. A creature that fails becomes trapped inside the prison. If it succeeds, the creature is pushed outside the prison into a space of its choice. If the target shares its space with a gargantuan creature, the effect fails. The dome has AC 10, Hardness 20, and 40 Hit Points; and is immune to cold, critical hits, and precision damage. The prison lasts until destroyed, until Ainamuuren uses this ability to create a new prison, or until he dies."

speed: 35 feet

ac: 33
armorclass:
  - name: AC
    desc: "33; __Fort__: +25 (1d20+25); __Ref__: +22 (1d20+22); __Will__: +27 (1d20+27);"
hp: 
 __Immunities__ cold; __Resistances__ fire 20"


attacks:
  - name: Melee
    desc: "⬻ greataxe +29 ([[cold]], [[sweep]]); __Damage__ 3d12+11 (3d12+11) slashing plus 1d8 (1d8) cold"
  - name: Melee
    desc: "⬻ horns +28 ([[agile]], [[cold]]); __Damage__ 3d10+11 (3d10+11) bludgeoning plus 1d8 (1d8) cold and Knockdown"

spellcasting:
  - name: " Spells"
    desc: "DC 34; __5th__ [[wall of ice]] (3); __7th__ [[summon animal]] cave bear or woolly rhinoceros only;"
sourcebook: "_Source_."
```

```encounter-table
name: Ainamuuren
creatures:
  - 1: Ainamuuren
```
