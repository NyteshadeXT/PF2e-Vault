![[4A - Glowstone Caverns (D177)-20240103130536049.webp|right|400]]

# Background
The Gnawstubbles were a goblin tribe much like any other living in the cave-riddled hills along the Chaos Scar. They grubbed into the soft, cracked stone in search of shiny gems and tasty subterranean foodstuffs, and they raided the surrounding countryside for other supplies. Their depredations were annoying but rarely fatal, and periodically local residents, usually those who lived near Restwell Keep, would hire adventurers to reduce their numbers. 

Then the goblins tunneled their way into a strange cave deep inside the valley. Its walls were covered with weird nodules of an unknown metal, and oddly mutated forms of underground life inhabited the oily-looking pond at its center. The metal proved to have interesting properties when used in weapons and other tools. Its iridescent surface was endlessly fascinating to the goblins, who took to carrying the nodules with them, fondling and staring at the shiny objects whenever they could. The goblin chief claimed the new cavern as her own and moved her dwelling and family there. 

The Gnawstubbles did not realize that the Chaos Scar meteorite had tainted this unusual cavern. Its bizarre influence had stained the rock and all the life in the caves for many years before the goblins discovered it. Now that the goblins have taken up residence and are in constant contact with the strange “glowmetal,” as they call it, they too have begun to absorb the bizarre taint. With their otherworldly metal weapons and strange new abilities, they have become a much greater threat. Already they have displaced mundane goblins in the vicinity, domesticated strange new allies, and they grow ever more bold in their attacks against caravans and travelers outside the Scar. Adventurers who have survived encounters with the Gnawstubble clan have even reported being assailed by goblins riding strange, giant bats. 

The characters might have been hired by a local authority to deal with the threat, or they might simply be looking for adventure in the notorious Chaos Scar. They soon discover that this is no ordinary goblin stomping session

# Adventure Hooks
**A Strange Metal:** [[Balidor]], has been seeking new purpose in his life.  While drinking at the Stumbling Giant he heard a rumor of a strange metal found outside a cave in the Chars Scar.  Intrigued, he got as many details as he could about the supposed location of the rumor and set out to see what he could learn.  Unfortunately, he was unable to do much exploring as he quickly learned the cave was over run with hobgoblins and goblins.  He returned to Restwell hoping to find the PCs, particularly Veras, and ask them to clear the cave complex and discover what they can about this mysterious ore.

# Running the Adventure
**Total Adventure Value:** 455 xp

```leaflet
### id must be unique
id: Glowstone Cavern
image: 
 - [[Glowstone Cavern.png]]
height: 600px
width: 70%
### This sets where the map starts by default.  Set to the middle (half) of your bounds.
lat: 50
long: 50
### Zero is no zoom.  Negative zoom steps away from the map.  Positive zoom steps toward the map.
minZoom: 0
### maxZoom is 18.
maxZoom: 17
### Hover mouse over reset zoom icon to see your current zoom.
defaultZoom: 15.75
### How far it zooms in or out.  Can be a decimal.
zoomDelta: 0.25
### This is string so it can be any value.  Change to match your maps measurement scale
unit: feet
scale: 1
darkMode: false
```


# Encounter 1 - Vestibule
**Encounter Difficulty:** Moderate (95 xp)

![[Pasted image 20230830164356.png]]

Creatures:
 - 4: [[hobgoblin-archer|Hobgoblin Archer]] W
 - 2: [[hobgoblin-general|Hobgoblin General]] C
 - 1: [[giant-bat|Giant Bat]] M
 - 1: Glowmetal Hexer H

```encounter
name: Vestibule
party: Chaos Scar
creatures:
- 4: [[Goblin Enforcer]] 
- 2: [[Goblin Quickblade]]
- 1: [Vampire Bat Swarm]
- 1: Glowmetal Hexer, 72, 18, 12
```

![[Pasted image 20230830162729.png]]

Generals and their trained bats guard the entrance to the hobgoblin warren.

Place the characters in any squares of the entrance tunnel.

When the characters first enter the cavern, read:
> [!note]+ Read Aloud
> Glaive wielding hobgoblins guard the entrance, while others armed with bows are positioned on raised portions of the cavern floor. Toward the back of the cave are a pair of giant bats that partially obscure the figures behind it.

When the characters first see the glowmetal hexer, read:
> [!note]+ Read Aloud
> A deformed-looking hobgoblin raises a glowing metallic staff and utters arcane words.
> 
> Arcana Check
> **DC 10:** You feel uneasy, sensing that something is not quite right in this cavern.png 
> **DC 15:** This area is permeated by emanations from the Far Realm.

The hobgoblins are alert and watching for intruders. They make active Perception checks against characters trying to use Stealth.

If one or more characters have not been detected before they attack or enter the cave, the inhabitants are surprised.

## Tactics
The albino giant bats are somewhat domesticated by the hobgoblins and work with them in the fight. They swoops into enemies attacking at random. If reduced to 10 hit points or below and no hobgoblins remain in the fight, the bats scatter into the caverns. 

The glowmetal hexer begins by using maddening cloud around allies and enemies near the entrance, moving it as needed to protect itself and allies during the fight. It then targets an enemy defender with stinging hex and directs its eye-eater hex against foes making ranged attacks. It uses its madstone when it first becomes bloodied, then retreats from a dangerous situation, using lead from the rear to place allies in the way of ranged attacks while it makes a getaway.

The hobgoblin archers try to stay out of melee, letting the bats confound their enemies while the hobgoblins take pot shots. The generals attempt to gain combat advantage whenever possible.

If the fight is going poorly (more than half the defenders are down, or the glowmetal hexer is bloodied or worse), one or more hobgoblins attempt to escape and bring reinforcements from area 2.

## Features of the Area
**Illumination:** Guttering torches dimly light the area.

**Ceiling:** 20 feet high.

**Flowstone Ledges:** These are 5 feet high, with the exception of the larger ledge to the east, which has a 10-foot-high ridge on one side. Moving into a higher square costs 2 squares of movement. Creatures on a ledge gain a +1 bonus to melee and ranged attack rolls against lower enemies. A creature on top of the 10-foot-high ridge is not considered adjacent to a creature at ground level.

> [!tip]+ Treasure
> The hexer carries a staff sheathed in [[glowmetal-weapon-hb|Glowmetal Staff]]. This functions as a +1 magic staff but is tainted by the influence of the meteorite. The hexer also possesses a [[madstone-hb|Madstone]], a treated nodule of glowmetal.

# Encounter 2 - Bat Cave
**Encounter Difficulty:** Moderate (90 xp)

![[Pasted image 20230830164532.png|right]]

Creatures:
 - 2: [[goblin-bat-handler|Goblin Bat Handler]] G
 - 4: [[Mutant Bat|Mutant Bat]] S
 - 2: [[vampire-bat-swarm|Vampire Bat Swarm]] M

```encounter
name: Bat Cave
party: Chaos Scar
creatures:
- 2: [[Goblin Bat Handler]] 
- 4: [[Mutant Bat]]
- 2: [[Vampire Bat Swarm]]
```

Specially assigned bat handlers raise and train the mutated bats and vampire bat swarms that are native to the tainted cavern.
 
When the characters reach the opening (and have a light source or darkvision), read:
> [!note]+ Read Aloud
> This large cavern is entirely dark. A rent in its floor splits the cave nearly in two, and stalagmites jut from the ground. 

**Perception Check**
**DC 12:** The ceiling on the far side of the cave is encrusted with stalactites.
**DC 19:** (If the goblins have not been alerted to the characters) You make out creatures moving among the stalactites.

## Tactics
The bats are resting on the ceiling, among the stalactites. Unless the trainers have been alerted to the presence of intruders, they do not begin combat mounted. They direct the murk bats against the nearest foes, then mount up (a move plus a standard action) and take to the air at the start of their initiative on round 2.

If the goblins are alerted to intruders in other areas, they mount their bats and move to respond, along with the murk bat clouds.

## Features of the Area
**Illumination:** Dark.

**Ceiling:** 40 feet.

**Crevasse:** The floor is split by a crack about 20 feet deep. In addition to taking falling damage, any creature that falls in becomes wedged into the narrow bottom of the crevasse. It cannot begin to climb out until it extricates itself as a move action ([[skills#Athletics|Athletics]] DC 12).

**Stalagmites and Stalactites:** Stalagmites are 2 to 4 feet high. They are difficult terrain and provide cover. Stalactites provide cover for flying creatures within 10 feet of the ceiling.

# Encounter 3 - Trash Heap
**Encounter Difficulty:** Moderate (100 xp)

![[4A - Glowstone Caverns (D177)-20240102155630080.webp|right]]

Creatures:
 - 1: [[flesh-golem|Trash Hulk]] T
 - 2: [[hobgoblin-general|Hobgoblin Cutter]] G
 - 2: [[goblin-quickblade|Goblin Mess Cook]] C

```encounter
name: Trash Heap
party: Chaos Scar
creatures:
- 1: [[Flesh Golom, Trash Hulk]] 
- 2: [[Hobgoblin General, Hobgoblin Cutter]]
- 2: [[Goblin Quickblade, Goblin Mess Cook]]
```

![[4A - Glowstone Caverns (D177)-20240102114827440.webp]]

This garbage-strewn tunnel leads to the warren’s food preparation area, and what were once living quarters. The influence of the meteorite’s corruptive influence has bestowed pseudo-life on the midden heap piled in an alcove. The creature serves as a guardian and does not bother the goblins as long as they continue to provide it with sustenance in the form of more trash and waste.

When the characters see the trash heap, read:
> [!note]+ Read Aloud
> Two burly-looking goblins face a long work table, their backs to you, hacking at an indefinable object with huge cleavers. A pair of ragged-looking goblins assist them, carting about platters and tending to a cook fire. Off to the side is a mound of assorted garbage: offal, scraps of leather and metal, discarded containers, and even a mangled corpse or two.

When the characters move within 5 squares of the trash heap, read:
> [!note]+ Read Aloud
> The mound of refuse rears up and lashes out at you!

**Perception Check**
**DC 17:** Glistening slime coats the floor behind the garbage heap, almost like a trail.

## Tactics
These goblin mess cooks have developed outlandish appetites. Their jaws can open unnaturally wide, and their teeth have grown long and fanglike. They wait for the trash hulk to engage an enemy, then hack at that target with their cleavers and knives. The goblin cutters attempt to flank enemies, using the trash hulk for cover as much as possible

The trash hulk attacks aggressively. It does not treat goblins as allies or enemies, but it does not attack them unless they are caught in take out the trash.

## Features of the Area
**Illumination:** Bright.

**Fire Pit:** A fire blazes in a shallow depression in the cave floor. A narrow crack in the ceiling allows smoke to escape. Any creature that enters or starts its turn in the fire takes 1d6 fire damage.

**Fleshy Wall:** One of the tunnels that must have led to living areas has been sealed with a strangely pulsing, flesh-like greenish stone. This material is 1 foot thick and as hard as stone (AC/Reflex 4, Fortitude 12; hp 120), and it regenerates 5 hit points at the start of its turn if damaged. A nasty greenish fluid spurts from it when it takes damage. If the characters manage to break through this barrier, they find the living areas abandoned. (The wall absorbed the goblins.)

**Supplies:** Small heaps of bags, pots, jars, and loose foodstuffs are scattered on the floor. These squares are difficult terrain.

**Work Table:** This is a heavy table made of a slab of stone propped on wooden legs. If tipped over, the top slides off into an adjacent space; any creature in that space must make a DC 12 [[skills#Acrobatics|Acrobatics]] check. If the check fails, the creature takes 1d6 damage. The stone slab can be propped up to form a barrier, providing cover to creatures behind it (or superior cover to prone creatures).

A creature can jump onto the table (DC 7 [[skills#Athletics|Athletics]]). Creatures on the table gain a +1 bonus to melee attack rolls against creatures on the floor.

> [!tip]+ Treasure
> Rooting through the heaps of garbage and (including the remains of the trash hulk) uncovers a flask that turns out not to be empty. It contains a potion of healing. In addition, the goblin mess cooks are carrying a total of 15 gp and 9 sp. Nothing in the kitchen is fit to eat, but the cleavers can serve as handaxes and the carving knives as daggers.

# Encounter 4 - Tainted Cave
**Encounter Difficulty:** Severe (140 xp) + Skill Challenge (30 xp)

![[4A - Glowstone Caverns (D177)-20240102155659720.webp|right]]

Creatures:
 - 1: [[hobgoblin-general|Glork, Corrupt Hobgoblin Chieftain]] G
 - 2: [[hobgoblin-general|Corrupt Hobgoblin Cutter]] C
 - 2: [[goblin-quickblade|Corrupt Goblin Quickblade]] W
 - 1: [[Irnakurse|Goblin Mass]] M

```encounter
name: Tainted Cave
party: Chaos Scar
creatures:
- 1: [[Hobgoblin General, Glork]] 
- 2: [[Hobgoblin General, Corrupt Hobgoblin Cutter]]
- 2: [[Goblin Quickblade, Corrupt Goblin Quickblade]]
- 1: [[Irnakurse, Goblin Mass], hidden]
```

This is the heart of the corruption, and the creatures that inhabit this place are barely recognizable as the goblins they once were.

![[4A - Glowstone Caverns (D177)-20240102131956725.webp]]
![[4A - Glowstone Caverns (D177)-20240102132014446.webp]]

The goblin mass starts the encounter submerged in the pool. Do not place it on the map until it attacks or a character detects its presence.

When the characters reach the cave entrance, read:
> [!note]+ Read Aloud
> This large cave is dimly lit by the lurid glow from a large pool at its center and glistening metallic blobs on the walls. The oily-looking water shines an eerie purple. Several goblins stand about the pool, although they have an odd appearance and do not carry weapons.
> 
> At the back of the chamber, a putrid-looking creature that might once have been a goblin shouts a curse and orders the others forward. A dripping blade protrudes from the end of one arm, and on the other is a fleshy disk.

When Glork claimed this cavern, she moved her family into it along with a few trusted retainers. Long exposure to the emanations of meteorite’s bizarre energy has transformed the cave’s inhabitants horribly. They are now all considered aberrant creatures. Glork has become a bloated, deformed monstrosity, her armor and weapons absorbed into her flesh. The remaining goblins typically slept in a heap near the pool; during one sleep period, the entire group became melded into a shapeless mass. It still obeys Glork, however.

**Perception Check**
**DC 17:** The pool’s surface seems to swirl, as though something had been dropped in recently.
**DC 22:** Beneath the surface is a horrific mass of squirming flesh.

**Arcana Check**
**DC 12:** A sickly sensation seems to pulse through this area. It is far stronger here than in previous chambers.
**DC 17:** The source of the corruption seems to be the weird pool in the cave’s center.

![[4A - Glowstone Caverns (D177)-20240102155448520.webp]]

When the goblin mass attacks or emerges, read:
> [!note]+ Read Aloud
> From the pool lurches a horrific mass of flesh with purple crystals protruding from various places on it's body.  It's seemingly made of dozens of goblins melded together.

## Tactics
Nearly mindless, the goblin mass exists only to incorporate more flesh into itself. It lurks in the pool until a living creature gets close enough to attack, then grabs it and absorbs it into its pulsing mass. When threatened or in need of assistance, it spawns a corrupt goblin warrior. Doing so weakens it, so it resorts to this action only when sorely pressed, preferably after it has absorbed a creature.

Glork does not hesitate to pull corrupt minions from the mass whenever she can. She uses corrupting strike to weaken enemies and reduce their ability to resist absorption by the goblin mass. When surrounded or when three or more enemies are within range, she lets loose with unearthly shriek.

The corrupt goblin cutters and warriors gang up on a single enemy and take advantage of goblin tactics to achieve flanking positions, using the goblin mass to help flank when they can. They don’t have the survival instinct of normal goblins, though, and do not retreat even when the odds are heavily against them.

## Skill Challenge - Plugging the Leak

The characters try to temporarily seal the planar wound to limit the influence of the meteorite until a permanent solution can be found.

This skill challenge can take place during or after the combat encounter. If done during the fight Glork does her best to interfere with these efforts, directing her attacks against arcane characters in particular.  Even if it is performed after the fight, there is a time limit—too long exposure to the warping effects of the chaos “leak” will permanently corrupt the characters as well. The leak is focused on the pool in the middle of the cave.

If the characters succeed in suppressing the chaos leak, the cave’s inhabitants are easier to defeat. Otherwise, they cannot stop the meteorite’s influence.

**Level:** 4 (30 xp)
**Complexity:** 1 (requires 4 successes before 3 failures)
**Primary Skills:**  [[skills#Arcana|Arcana]], [[skills#nature|Nature]], Fortitude Saving Throw, Divine Spellcasting
**Secondary Skills:** [[skills#Medicine|Medicine]], [[skills#Thievery|Thievery]], Special (See below)

### Primary Skills
**Arcana (DC 17, standard action; 1 success, no maximum):** The character channels arcane power to strengthen the barriers between planes.

**Fortitude (DC 17, standard action; 1 success):** The character draws on his or her own life energy to patch the weak point. On a failure, the character one hit die of damage. A character can use a madstone to negate the health loss. Regardless, after success or failure the character becomes fatigued.  Each character can gain only 1 success in this way.

**Nature (DC 17; standard action, no maximum):** The character reinforces the surrounding reality to enclose and diminish the planar wound.

**Divine Spellcasting (no check; standard action):** The character channels divine power to enforce order on this riven part of the world. This requires the character to expend a divine spell and counts as a number of automatic successes equal to the level of the spell expended in this way. Can only be performed once.

### Secondary Skills
**Medicine (DC 12, standard action; no successes):** The character recalls information about the nature of aberrant creatures which provides further insight into sealing the wound, granting a +2 bonus to the next Arcana check made during the skill challenge. Success with this check also reveals that Glork and the goblin mass will be unable to spawn new corrupt goblins if the wound is healed.

**Thievery (DC 17, standard action, no successes):** The character draws on knowledge of magical traps to suggest ways of dealing with the threat. Success grants a +2 bonus to the next check using any of the primary skills.

**Special:** Using a sample of the glowmetal (whether taken from the cave walls or using a glowmetal item) as part of the skill challenge reduces the DCs of all primary skill checks by 2.

### Success
If the characters earn four successes, they are able to reduce the influence of the meteorite. Glork and the goblin mass are no longer able to spawn corrupt goblins, nor can the goblin mass reincorporate fallen goblins into itself.

### Failure 
If the characters accumulate 3 failures, they are no longer able to stabilize the chaos wound. Each character suffers damage equal to two of their hit die as the rift pulls at their life essence. Other solutions to the problem become necessary (see “Conclusion” below).

## Features of the Area
**Illumination:** The area is dimly lit by the eerily shining pool and by nodules of glowmetal in the walls.

**Bedding:** Glork sleeps in a rat’s nest of accumulated trash on top of a filthy bedroll. The square containing her bedding is difficult terrain.

**Pool:** This shallow body of water (no more than 5 feet at the deepest) also glows with a strange purple hue. It is a site of concentrated chaotic residue left over from the meteorite’s passage through the Scar. The pool is difficult terrain for creatures tall enough to wade through it.  Glork keeps her personal wealth in an oiled sack weighted down with stones in the center of the pool.

> [!tip]+ Treasure
> Glork’s longsword was absorbed into her mutated form but can be cut free. It is a +1 [[corrosive|Corrosive]] longsword. Her “shield” is actually a mass of bone and flesh that was once her hand and forearm. It cannot be wielded and is worth nothing other than its gruesome scholarly interest. Her personal treasury contains [[antiplague|Antiplague (Moderate)]], [[warding-tablets-som|Warding Tablets]] and 75 gp.
> 
> The [[glowmetal|Glowmetal]] might be the key to forming a permanent seal of the pool, which continues to radiate energy that could corrupt any future inhabitants of these caves. Arcane scholars are likewise interested in acquiring samples. Players can collect up to 10 nodules which can fetch 20 gp from someone who recognizes its potential. However, glowmetal is dangerous to stay in contact with over a long time. 

# Conclusion
If the characters manage to suppress the chaos leak, they temporarily prevent further corruption from affecting these caves. The weak point is not completely repaired, though; only a special ritual can permanently seal it. The characters might be sent on additional missions to acquire materials necessary for this ritual.

If they defeated the monsters but were unable to patch the wound, the problem will arise again as other natural creatures wander into the caves. The wound might develop into a full-blown planar rift, bringing aberrant horrors from the Far Realm into the world. Until a sealing ritual can be performed, it will be necessary to seal off the caverns and stand guard to prevent other beings from entering—or leaving.