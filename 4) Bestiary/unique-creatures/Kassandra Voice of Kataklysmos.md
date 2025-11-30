---
noteType: pf2eMonster
aliases: "Kassandra Voice of Kataklysmos"
tags: 
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/aberration
  - pf2e/creature/type/dragon
  - pf2e/creature/type/mage
  - pf2e/creature/level/16
  - pf2e/creature/rarity/unique
  - aetheria-fracta/chaos-scar
statblock: inline
name: "Kassandra Voice of Kataklysmos"
level: 16
---

```statblock
columns: 2
forcecolumns: false
layout: Basic
source: "Homebrew"
name: "Kassandra Voice of Kataklysmos"
level: "Creature 16"
token: "kassandra.png"
rare_01: "Unique"
size: "Medium"
trait_01: "Aberration"
trait_02: "Humanoid"
trait_03: "Dragon"
trait_04: "Mage"
trait_05: "Chaos"
modifier: 29

perception:
  - name: "Perception +29"
    desc: "_darkvision_"

languages: "Common, Draconic, Aklo; _telepathy 60 feet_."

skills:
  - name: "Acrobatics +32, Arcana +35, Occultism +31, Athletics +28, Deception +31, Diplomacy +29, Intimidation +32"

abilityMods: [8, 6, 6, 5, 5, 7]

abilities_mid:
  - name: "Meteoric Aura (aura, mental, emotion, occult)"
    desc: "30 feet. Creatures entering or starting their turn take `dice: 2d6` mental damage and must succeed at a DC 34 _Will_ save or become _frightened 1_; critical failure is _frightened 2_. PCs who resisted Kataklysmos in Encounter 8 gain +1 to this save; those who accepted suffer –1."
  - name: "Reactive Chaos `pf2:r` (reaction, chaos, occult)"
    desc: "**Trigger** A creature critically hits Kassandra. Roll `dice: 1d4`: (1) Gravity Slip—20-foot area must succeed at DC 34 _Reflex_ or fall prone; (2) Psychic Lash—random creature takes `dice: 4d6` mental damage; (3) Warp Step—Kassandra teleports up to 30 feet; (4) Meteor Spark—10-foot burst for `dice: 3d6` fire, DC 34 _Reflex_ basic."

abilities_bot:
  - name: "Starlight Rupture `pf2:2` (fire, mental, occult, visual)"
    desc: "30-foot cone; `dice: 10d6` fire + `dice: 10d6` mental damage, DC 36 _Will_ basic. PCs who accepted Kataklysmos roll twice and take the worse; PCs who resisted gain +1 on the save."
  - name: "Meteor-Heart Channel `pf2:3` (concentrate, metamagic, unique)"
    desc: "Once per encounter. Her next spell gains the _chaos_ trait and deals +`dice: 5d6` damage. She gains Resistance 10 to all damage until the start of her next turn. All creatures within 40 feet must succeed at DC 34 _Fortitude_ or become _slowed 1_ for 1 round."

speed: "40 feet, fly 40 feet (magical)"

ac: 38
armorclass:
  - name: "AC"
    desc: "38; _Fort +31_, _Ref +33_, _Will +34_"

hp: 400
health:
  - name: "HP"
    desc: "400; Fast Healing 20; At 200 HP, Kassandra’s body cracks with molten chaotic energy. She becomes Large and transitions to her **Phase 2** statblock."

attacks:
  - name: "Draconic Strike `pf2:1`"
    desc: "+31 to hit (10-foot reach), `dice: 3d10+14` slashing + `dice: 2d6` fire."
  - name: "Chaos-Talon `pf2:1`"
    desc: "+33 to hit (agile), `dice: 3d8+14` magical + `dice: 1d6` mental."
  - name: "Starlight Barrage (occult spell attack; see below) `pf2:2`"
    desc: "+29 to hit, `dice: 6d10` force damage; empowered by meteor energy."
  - name: "Chaotic Lunge `pf2:2`"
    desc: "Kassandra Strides and makes two Chaos-Talon Strikes against different targets."

spellcasting:
  - name: "Occult Spontaneous Spells (DC 36, attack +29)"
    desc: "_8th (4 slots)_—Starlight Rupture, *phantasmal calamity*, *warp mind*, reduced *meteor storm* (20-ft burst, 8d6 fire + 8d6 bludgeoning). _7th (4 slots)_—*chain lightning*, *disintegrate*, *divine wrath (chaos)*, *plane shift (outbound only)*. _6th (4 slots)_—*fireball (heightened)*, *dominate*, *slow*, *freezing rain*. _1st–5th_—*shield*, *mirror image*, *magic missile*, *dimension door*, *fear*. _Cantrips_—*daze*, *telekinetic projectile*, *detect magic*, *shield*."

sourcebook: "Homebrew"

```