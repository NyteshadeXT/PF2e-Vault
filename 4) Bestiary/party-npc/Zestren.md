---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Zestren"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Zestren"
level: 7
---

[[Zestren.webp|Show to Players]]

**Description**
Zestren is a graceful elven warrior dressed in traveler’s clothing and chainmail covered by a long, blue-gray cloak. He carries a longsword in a scabbard hanging from his leather belt. He says little and appears to disdain humans.

Zestren is new to the keep, having been around only for a few days. He keeps to himself and says little to anyone. He perks up when anyone mentions Magrak Ironjaw, however.. Some say he’s the only survivor of an adventuring group that met their match in a dungeon near Winterspring.

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
player: true
token: [[Zestran.webp]]
source: "HB"
name: "Zestren"
level: "Creature 7"
alignment: "NE"
size: "Medium"
trait_03: "Human"
trait_04: "Humanoid"
trait_05: "Elf"
modifier: 12
perception:
  - name: "Perception"
    desc: "Perception +12;"
languages: "Common, Elven; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +10 (1d20+10); __Arcana__: +15 (1d20+15); __Deception__: +10 (1d20+10); __Intimidation__: +10 (1d20+10); __Lore: Warfare__: +13 (1d20+13); __Nature__: +8 (1d20+8); __Society__: +15 (1d20+15); __Survival__: +8 (1d20+8); __Thievery__: +10 (1d20+10);"
abilityMods: [3, 1, 1, 4, -1, 1]

abilities_bot:
  - name: "Sudeen Charge"
    desc: "'pf2:2` ([[Flourish]], [[Open]]); With a quick sprint, you dash up to your foes and swing. Stride twice.  If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. "
  - name: "Lunge"
    desc: "`pf2:1` __Requirements__ You are wielding a melee weapon. Extending your body to it's limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that strike. "
abilities_top:
  - name: Items
    desc: "+1 Chainmail, +2 Longsword, short sword x2;"
abilities_mid:
  - name: "Attack of Opportunity"
    desc: "`pf2:r` __trigger__ A creature within your range uses either a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using. You lash out at a foe that leaves an opening. Make a melee strike agains the triggering creature. If your attack was a critical hit and the trigger was a manipulate action, you disrupt that action. The strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this strike."

speed: 30 feet

ac: 21
armorclass:
  - name: AC 
    desc: "24; __Fort__: +12 (1d20+12); __Ref__: +12 (1d20+12); __Will__: +10 (1d20+10); Bravery"
hp: 83
health:
  - name: HP
    desc: "83; "


attacks:
  - name: Melee
    desc: "⬻ +1 longsword +17 ([[Versatile P]]); __Damage__ 1d8+6 (1d8+6) slashing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Zestren
creatures:
  - 1: Zestren
```
