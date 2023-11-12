# Background
![[Pasted image 20230830083557.png|right|400]]
The Gnawstubbles were a goblin tribe much like any other living in the cave-riddled hills along the Chaos Scar. They grubbed into the soft, cracked stone in search of shiny gems and tasty subterranean foodstuffs, and they raided the surrounding countryside for other supplies. Their depredations were annoying but rarely fatal, and periodically local residents, usually those who lived near Restwell Keep, would hire adventurers to reduce their numbers. 

Then the goblins tunneled their way into a strange cave deep inside the valley. Its walls were covered with weird nodules of an unknown metal, and oddly mutated forms of underground life inhabited the oily-looking pond at its center. The metal proved to have interesting properties when used in weapons and other tools. Its iridescent surface was endlessly fascinating to the goblins, who took to carrying the nodules with them, fondling and staring at the shiny objects whenever they could. The goblin chief claimed the new cavern as her own and moved her dwelling and family there. 

The Gnawstubbles did not realize that the Chaos Scar meteorite had tainted this unusual cavern. Its bizarre influence had stained the rock and all the life in the caves for many years before the goblins discovered it. Now that the goblins have taken up residence and are in constant contact with the strange “glowmetal,” as they call it, they too have begun to absorb the bizarre taint. With their otherworldly metal weapons and strange new abilities, they have become a much greater threat. Already they have displaced mundane goblins in the vicinity, domesticated strange new allies, and they grow ever more bold in their attacks against caravans and travelers outside the Scar. Adventurers who have survived encounters with the Gnawstubble clan have even reported being assailed by goblins riding strange, giant bats. 

The characters might have been hired by a local authority to deal with the threat, or they might simply be looking for adventure in the notorious Chaos Scar. They soon discover that this is no ordinary goblin stomping session

# Running the Adventure
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

![[Pasted image 20230830164356.png|right]]

Creatures:
 - 4: [[hobgoblin-archer|Hobgoblin Archer]] W
 - 2: [[hobgoblin-general|Hobgoblin General]] C
 - 1: [[giant-bat|Giant Bat]] M
 - 1: Glowmetal Hexer H

```encounter
name: Hangman
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
 - 2: [[Goblin Bat Handler|Goblin Bat Handler]] G
 - 2: [[Mutant Bat|Mutant Bat]] S
 - 2: [[vampire-bat-swarm|Vampire Bat Swarm]] M

```encounter
name: Hangman
party: Chaos Scar
creatures:
- 2: [[Goblin Bat Handler]] 
- 2: [[Mutant Bat]]
- 2: [[Vampire Bat Swarm]]
```

Specially assigned bat handlers raise and train the mutated bats and vampire bat clouds that are native to the tainted cavern.
 
When the characters reach the opening (and
have a light source or darkvision), read:
This large cavern is entirely dark. A rent in its floor splits
the cave nearly in two, and stalagmites jut from the ground.
Two goblins in leather armor stand on the opposite side of
the rift.
Perception Check
DC 12: The ceiling on the far side of the cave is encrusted
with stalactites.
DC 19: (If the goblins have not been alerted to the
characters) You make out creatures moving among the
stalactites.

Tactics
The bats are resting on the ceiling, among the stalactites.
Unless the trainers have been alerted to
the presence of intruders, they do not begin combat
mounted. They direct the murk bats against the
nearest foes, then mount up (a move plus a standard
action) and take to the air at the start of their initiative
on round 2.
I f the goblins are alerted to intruders in other
areas, they mount their bats and move to respond,
along with the murk bat clouds.

# Encounter 3 - Trash Heap

# Encounter 4 - Tainted Cave