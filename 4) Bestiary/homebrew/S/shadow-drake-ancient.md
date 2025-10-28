---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Shadow Drake (Ancient)"
tags: 
  - pf2e/creature/type/dragon
  - pf2e/creature/level/12
statblock: inline
name: "Shadow Drake (Ancient)"
level: 12
---

```statblock
columns: 12
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "HB"
name: "Shadow Drake (Ancient)"
level: "Creature 12"
alignment: "CE"
size: "Medium"
trait_03: "Dragon"
trait_04: "Shadow"
modifier: 21
perception:
  - name: "Perception"
    desc: "Perception +21; __darkvision__, __imprecise scent 30__;"
languages: "Draconic; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +25 (1d20+25); __Stealth__: +25 (1d20+25); __Thievery__: +25 (1d20+25); "
abilityMods: [3, 7, 3, 1, 2, 4]

abilities_top:
  - name: "Light Blindness"
    desc: "When first exposed to bright light, the monster is Blinded until the end of its next turn. After this exposure, light doesn't blind the monster again until after it spends 1 hour in darkness."
  - name: "Shadow Blend"
    desc: "  The shadow drake's form shifts and blends reflexively with surrounding shadows. A shadow drake gains an additional reaction each round, but it can use this reaction only for Shadow Evade."
  - name: "Shadow Evade"
    desc: "⬲ __Trigger__ A creature attacks the shadow drake while it is in an area of dim light __Effect__  The shadow drake further obscures its position. The attacker must succeed at a DC 23 flat check in order to affect the shadow drake, as if the drake were [[rules/conditions.md#Hidden|Hidden]] for the triggering attack."
abilities_bot:
  - name: "Draconic Frenzy"
    desc: "⬺  The shadow drake makes one bite [[Strike]] and two tail [[Strike|Strikes]] in any order."
  - name: "Shadow Breath"
    desc: "⬺ ([[arcane]], [[cold]], [[evocation]], [[shadow]]);  A shadow drake spits a ball of black liquid that explodes into a cloud of frigid black shadow. This attack has a range of 40 feet and explodes in a 5-foot-radius burst. Creatures within the burst take 12d6+2 (12d6+2) cold damage (DC 32 basic Reflex save). The explosion of shadow also snuffs out mundane light sources the size of a torch, lantern, or smaller, and attempts to counteract magical light with a +10 counteract modifier. The shadow drake can't use Shadow Breath again for 1d6 (1d6) rounds."
  - name: "Speed Surge"
    desc: "⬻ __Frequency__ three times per day  __Effect__  The shadow drake [[Stride|Strides]] or [[Fly|Flies]] twice."

speed: 15 feet, fly 60 feet

ac: 32
armorclass:
  - name: AC
    desc: "32; __Fort__: +22 (1d20+22); __Ref__: +25 (1d20+25); __Will__: +21 (1d20+21);"
hp: 211
health:
  - name: HP
    desc: "211;  __Immunities__ paralyzed, sleep;"


attacks:
  - name: Melee
    desc: "⬻ jaws +25 ([[finesse]]); __Damage__ 2d10+13 (2d10+13) piercing"
  - name: Melee
    desc: "⬻ tail +25 ([[agile]], [[finesse]]); __Damage__ 2d8+13 (2d8+13) bludgeoning"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Shadow Drake (Ancient)
creatures:
  - 1: Shadow Drake (Ancient)
```
