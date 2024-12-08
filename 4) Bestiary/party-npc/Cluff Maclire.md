---
obsidianUIMode: preview
noteType: pf2eMonster
aliases: "Cluff Maclire"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/level/7
statblock: inline
name: "Cluff Maclire"
level: 7
---

[[Cluff Maclire.webp|Show to Players]]

**Description**
Cluff Maclire is a middle-aged, lanky, pale human warrior with stringy brown hair going to gray. He wears a tartan kilt and a leather jack studded with metal spikes. He carries a bastard sword in a sheath hanging down the middle of his back. He is a plain-spoken man with little patience for nonsense and no tolerance for cowardice. He has vowed to kill Magrak Ironjaw and save his people even if it costs his own life.

Cluff is a loudmouth and braggart, he talks big but no one around here has ever heard of him before. The Maclire clansmen are fringe-dwellers, having little to do with civilized folks.

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
player: true
token: [[Cluff Maclire.webp]]
source: "HB"
name: "Cluff Maclire"
level: "Creature 7"
alignment: "N"
size: "Medium"
trait_03: "Human"
trait_04: "Humanoid"
modifier: 14
perception:
  - name: "Perception"
    desc: "Perception +14;"
languages: "Common, Dwarven; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +10 (1d20+10); __Athletics__: +13 (1d20+13); __Intimidation__: +17 (1d20+17); __Lore: Tanning__: +8 (1d20+8); __Survival__: +12 (1d20+12);"
abilityMods: [4, 1, 2, -1, 1, 4]

abilities_bot:
  - name: "Exacting Strike"
    desc: "'pf2:1` ([[Press]]); You make a controlled attack, fully accounting for your momentum. Make a strike.  The strike gains the following failure effect. __Failure__ This attack does not count toward your multiattack pentalty."
  - name: "Intimidating Strike"
    desc: "`pf2:2` ([[Emotion]], [[Fear]], [[Mental]]) Your blow not only wounds creatures but also shatters their confidence. Make a melee strike.  If you hit and deal damage the target is frightened 1 or frightened 2 on a critical hit."
abilities_top:
  - name: Items
    desc: "leather armor, +1 bastard sword, javelin x3;"
abilities_mid:
  - name: "Attack of Opportunity"
    desc: "`pf2:r` __trigger__ A creature within your range uses either a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using. You lash out at a foe that leaves an opening. Make a melee strike agains the triggering creature. If your attack was a critical hit and the trigger was a manipulate action, you disrupt that action. The strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this strike."

speed: 30 feet

ac: 21
armorclass:
  - name: AC 
    desc: "21; __Fort__: +13 (1d20+13); __Ref__: +12 (1d20+12); __Will__: +12 (1d20+12); Bravery"
hp: 92
health:
  - name: HP
    desc: "92; "


attacks:
  - name: Melee
    desc: "⬻ +1 bastard sword +17 ([[two-hand d12]]); __Damage__ 1d8+7 (1d8+7) slashing"
  - name: Ranged
    desc: "⬻ javelin +12 ([[thrown]]); __Damage__ 1d6+6 (1d6+6) piercing"

sourcebook: "_Homebrew_"
```

```encounter-table
name: Cluff Maclire
creatures:
  - 1: Cluff Maclire
```
