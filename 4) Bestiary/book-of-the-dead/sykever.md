---
noteType: pf2eMonster
aliases: "Sykever"
tags: 
  - pf2e/creature/type/darvakka
  - pf2e/creature/type/trait/shadow
  - pf2e/creature/type/undead
  - pf2e/creature/level/15
statblock: inline
name: "sykever"
level: 15
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "BotD"
name: "Sykever"
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
    desc: "__Arcana__ +27 (1d20+27), __Athletics__ +29 (1d20+29), __Intimidation__ +28 (1d20+28); __Negative Energy Plane Lore__ +27 (1d20+27); __Religion__ +27 (1d20+27); __Shadow Plane Lore__ +27 (1d20+27); __Stealth__ +27 (1d20+27); __Warfare Lore__ +27 (1d20+27); "
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
	    desc: "335; negative healing; __Immunities__ death effects, disease, paralyzed, poison, unconscious; __Resistance__ cold 10 __Weaknesses__ good 10, silver 10;"

attacks:
  - name: Melee
    desc: "⬻ scythe +12 ([[deadly d10]], [[trip]]), __Damage__ 1d10+8 (1d10+8) slashing"
  - name: Melee
    desc: "⬻ fist +12, __Damage__ 1d8+8 (1d8+8) bludgeoning"
  - name: Command Zombie
    desc: "⬻ ([[concentrate]], [[divine]], [[incapacitation]], [[necromancy]]); The zombie lord intones blasphemous words to gain control over a zombie they can see within 100 feet. A zombie that is mindless and not under someone else’s control falls under their control automatically; otherwise, the zombie or its controller can attempt a DC 22 Will save to avoid it being controlled (whichever has the higher modifier). The target zombie is temporarily immune for 24 hours if successful. The attempt fails if the zombie is the same level as the zombie lord or higher. The zombie remains controlled by the zombie lord until either is destroyed. A zombie lord can control up to 8 zombies at a time. If the zombie lord would control a number of zombies over this limit, they choose which to release."
  - name: Create Zombies
    desc: "([[concentrate]], [[divine]], [[evil]], [[necromancy]]); A zombie lord can create lesser zombies with a 1-hour ritual. During this time, the zombie lord chants and performs an unholy dance over the corpses they intend to animate. Unlike normal rituals, this doesn’t require a skill check or Cost. At the end of this hour, the zombie lord can create one 1st- or 2nd-level zombie, or two zombies of level 0 or lower. These are automatically under the zombie lord’s control and count toward the limit of Command Zombie. Any zombies created by the zombie lord still count toward the XP budget of an encounter normally."
  - name: Shamble Forth!
    desc: "⬻ ([[concentrate]], [[divine]], [[necromancy]]); **Frequency** once per round; **Effect** Each zombie controlled by the zombie lord Strides 5 feet (or Burrows, Climbs, Flies, or Swims 5 feet if it has the corresponding movement type)."

spellcasting:
  - name: "Divine Innate Spells"
    desc: "DC 21, attack +13; __2nd__ [[spells-dataview-backup/spells/level-2/death-knell|Death Knell]], [[sudden-blight|Sudden Blight]]; __1st__ [[spells-dataview-backup/spells/level-1/fear|Fear]], [[spells-dataview-backup/spells/level-1/harm|Harm]] (3), [[spells-dataview-backup/spells/level-1/ray-of-enfeeblement|Ray of Enfeeblement]]; __Cantrips (2nd)__ [[spells-dataview-backup/spells/cantrips/chill-touch|Chill Touch]], [[spells-dataview-backup/spells/cantrips/daze|Daze]], [[spells-dataview-backup/spells/cantrips/divine-lance|divine-lance|Divine Lance]];"
sourcebook: "_Book of the Dead_, page 172."
```

```encounter-table
name: Zombie Lord
creatures:
  - 1: Zombie Lord
```