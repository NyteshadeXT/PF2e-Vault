---
noteType: pf2eMonster
aliases: "Shadow Harley"
tags: 
  - pf2e/creature/type/darvakka
  - pf2e/creature/type/trait/shadow
  - pf2e/creature/type/undead
  - pf2e/creature/level/15
statblock: inline
name: "Shadow Harley"
level: 15
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "BotD"
name: "Shadow Harley"
level: "Creature 15"
alignment: "CE"
size: "Huge"
trait_03: "Darvakka"
trait_04: "Undead"
trait_05: "Shadow"
modifier: 29
perception:
  - name: "Perception"
    desc: "Perception +29; __greater darkvision__; __lifesense 60 ft__"
languages: Abyssal, Common, Infernal, Necril; telepathy 100 feet
skills:
  - name: "Skills"
    desc: "__Arcana__ +27 (1d20+27), __Athletics__ +29 (1d20+29), __Intimidation__ +28 (1d20+28); __Negative Energy Plane Lore__ +27 (1d20+27); __Religion__ +27 (1d20+27); __Shadow Plane Lore__ +27 (1d20+27); __Stealth__ +27 (1d20+27), __Warfare Lore__ +27 (1d20+27); "
abilityMods: [8, 4, 6, 6, 6, 7]

abilities_top:

speed: 40 feet; air walk

ac: 37
armorclass:
  - name: AC
    desc: "37; __Fort__: +25 (1d20+25); __Ref__: +25 (1d20+25); __Will__: +31 (1d20+31);"
hp: 335
health:
  - name: HP
    desc: "335; negative healing; __Immunities__ death effects, disease, paralyzed, poison, unconscious; __Resistance__ cold 10; __Weaknesses__ good 10, silver 10;"

abilities_mid:
  - name: "Lantern's Fracture"
    desc: " ([[aura]], [[divine]], [[necromancy]], [[negative]]); 40 ft;  Harley's Shadow leak entropy and fire from its very being. A living creature entering or starting its turn in the aura takes `dice: 4d6` 4d6 fire damage with a DC 33 basic Fortitude save. If it fails, it's also [enfeebled|enfeebled 1] for 1 minute and pulled 10 feet toward the skyever."
  - name: "Light Vulnerability"
    desc: "A skyever caught in bright, pure light (sunlight, daylight) is [stunned|stunned 2] and [clumsy|clumsy 2]." 


attacks:
  - name: Melee
    desc: "⬻ crimson slam +31 ([[magical]], [[reach 10 ft]]), __Damage__ 3d8+12 (3d8+12) bludgeoning plus 1d10 (1d10) fire and 2d6 (2d6) persistent fire"
  - name: Melee.
    desc: "⬻ shattered talon +31 ([[agile]], [[magical]], [[reach 10 ft]]), __Damage__ 3d8+12 (3d8+12) piercing plus 1d10 (1d10) fire"
  - name: Change Posture
    desc: "`pf2:1` The sykever changes between their bipedal and quadrupedal stance. In their bipedal stance, the sykever can use all the abilities in their stat block except Horned Rush. In their quadrupedal stance, the sykever has a Speed of 80 feet but can't make arm spike Strikes, Disarm, cast spells, or use Crush Item."
  - name: Crush Item
    desc: "`pf2:r` **Trigger** The sykever gets a critical success to [Disarm](https://2e.aonprd.com/Actions.aspx?ID=41); **Requirements** The sykever is in their bipedal stance; **Effect** The sykever snatches the item and pierces it with their arm spikes. The item becomes [broken](https://2e.aonprd.com/Conditions.aspx?ID=2) and falls to the ground in the sykever's space. Items that are already broken aren't further damaged, and an item with 14 or higher Hardness is unaffected.."
  - name: Draining Gaze
    desc: "⬻ ([[concentrate]], [[divine]], [[necromancy]], [[visual]]); The sykever fixes their nightmarish gaze on one creature they can see, who must attempt a DC 36 Will save. Regardless of the result, the target is temporarily immune for 10 minutes. <br>- **Critical Success** The target is unaffected.  <br>- **Success** The target is [enfeebled|enfeebled 2] for 1 round if the sykever is in bipedal stance, or [clumsy|clumsy 2] for 1 round if the sykever is in quadrupedal stance.  <br- >**Failure** As success, but the effect lasts 1 minute.  <br>- **Critical Failure** As success, but enfeebled 3 or clumsy 3, and the effect lasts 10 minutes."
  - name: Horned Rush
    desc: "`pf2:1` **Requirements** The sykever is in their quadrupedal stance; **Effect** The sykever Strides and then makes a horn Strike."

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 36; __7th__ [[Fireball]] (x3), [[paralyze]]; __6th__ [[true-seeing|True Seeing]]; __4th__ [[2) Compendium/spells/darkness|Darkness]] (at will), [[invisibility]] (x3); __Cantrips (8th)__ [[2) Compendium/spells/detect-magic|Detect Magic]]; __Constant (8th)__ [[air-walk|Air Walk]];"
sourcebook: "_Book of the Dead_, page 83."
```

```encounter-table
name: Sykever
creatures:
  - 1: Sykever
```