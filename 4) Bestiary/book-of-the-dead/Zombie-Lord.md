---
noteType: pf2eMonster
aliases: "Zombie Lord"
tags: 
  - pf2e/creature/type/undead
  - pf2e/creature/level/4
statblock: inline
name: "Zombie Lord"
level: 4
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
statblock: true
source: "BotD"
name: "Zombie Lord"
level: "Creature 4"
alignment: "NE"
size: "Medium"
trait_03: "Uncommon"
trait_04: "Undead"
trait_05: "Zombie"
modifier: 13
perception:
  - name: "Perception"
    desc: "Perception +13; __darkvision__;"
skills:
  - name: "Skills"
    desc: "__Athletics__: +10 (1d20+10), __Religion__: +13 (1d20+13), __Stealth__: +10 (1d20+10); "
abilityMods: [4, 4, 3, 1, 5, 2]

abilities_top:

speed: 25 feet

ac: 20
armorclass:
  - name: AC
    desc: "20; __Fort__: +11 (1d20+11); __Ref__: +10 (1d20+10); __Will__: +13 (1d20+13);"
hp: 80
health:
  - name: HP
    desc: "80; negative healing; __Immunities__ poison, death effects, disease, paralyzed, unconscious; __Weaknesses__ positive 5, slashing 5;"

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