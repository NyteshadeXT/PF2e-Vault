# Background
Around six months ago, a band of goblins and hobgoblins discovered an abandoned dungeon beneath a small hill in the chaos scar. They explored the ruin and began converting it to their needs, intent on using it as their own center of power.

For several months, the monsters toiled in and around their fortress, led by a hulking hobgoblin named Drekesh. They transformed the dungeon’s rooms into a home, complete with living quarters, a mess hall, and a prison for their enemies. One particularly skilled and intelligent goblin arcanist named Slaark took the lead in converting the abandoned complex to its new function. He designed and crafted traps and locks to protect the finished chambers.

The other goblins and hobgoblins saw that Slaark had the best ideas and that Drekesh was content to simply order them around. Slaark sensed this fact and, with choice words, he persuaded the others to rise up and kill Drekesh, leaving Slaark in charge.

Slaark continued his work, ordering the construction of a wooden palisade atop the small hill that marked the entrance to the subterranean fortress. The monsters cut the tops off several large trees and built the palisade between them, creating a roughly circular wall that had appearance of a wooden crown. His troops named the fortress “Slaark’s Crown” and proclaimed Slaark their king.

When the defenses were complete, Slaark ordered his troops to raid the lands around Slaark’s Crown. They attacked farms and travelers, amassing food, supplies, and wealth. Anyone who resisted was killed or captured and forced to work in the dungeon.

Ten days ago, Slaark sent troops to deliver messages to several nearby settlements, describing the tribute they should pay Slaark if they wished to avoid further attacks. In the time since, Slaark has ordered his troops to conduct raids on travelers and spy on the settlements in his domain.

# Running the Adventure
Use one of the following hooks to draw the characters into the adventure, or come up with one of your own.

**The Ultimatum**
One day the players are summoned by [[Kendon Longstrider]].  He explains that a goblin messenger arrived today and delivered a demand.  That the denizens of Restwell Keep must pay a tribute or face the wrath of Slaark the goblin king. He then asks the players to "handle" the situation offering them a bounty of 5 gold for each goblin ear they bring back.  Kendon will also hand the players a crudely drawn map delivered by the gobline outlining for the location of Slaark's Crown.  

On the surface, “Slaark’s Crown” is a straightforward dungeon crawl. The adventurers travel through Slaark’s fortress and deal with the monsters found there. If the characters just want to kick down doors, kill monsters, and plow forward, let them do so. They also have other options. 

**Roleplaying**
Given that Slaark is expecting tribute, the characters might pretend to bring tribute to the goblin king. If they’re successful, they can keep up the charade as long as they like. When an encounter includes an option for talking, a subsection describes what is required to deal with the creatures in the area.

If the characters bypass combat through good roleplaying and/or skill use, they earn the same XP they would have for defeating the monsters. Keep in mind, however, that any enemies left behind are there to confront the characters after they’ve dealt with Slaark. Don’t grant XP for fooling such enemies and later defeating them in combat.

**Extended Rests**
The characters can fight within Slaark’s Crown and then retreat to rest. When they return, they find the remaining enemies on guard. Roleplaying past a group of enemies is then impossible. In addition, the enemies in the fortress might have rearranged themselves and set up new traps or ambushes.

# Slaark’s Crown
The above-ground portion of Slaark’s fortress is composed of a wooden palisade and gate. A handful of ancillary buildings and a small hillock (the entry to the dungeon below) lie within.

```leaflet
### id must be unique
id: Slaark's Crown Outdoor Level
image: 
 - [[Slaark's Crown.png]]
height: 1000px
width: 60%
### This sets where the map starts by default.  Set to the middle (half) of your bounds.
lat: 50
long: 50
### Zero is no zoom.  Negative zoom steps away from the map.  Positive zoom steps toward the map.
minZoom: 0
### maxZoom is 18.
maxZoom: 17
### Hover mouse over reset zoom icon to see your current zoom.
defaultZoom: 15.5
### How far it zooms in or out.  Can be a decimal.
zoomDelta: 0.5
### This is string so it can be any value.  Change to match your maps measurement scale
unit: feet
scale: 1
darkMode: false
```

# Wandering Guard
**Encounter Difficulty:** None (5 xp)
Creatures:
 - 1: [[goblin-commando|Goblin Commando]]

```encounter
name: Wandering Guard
party: Chaos Scar
creatures:
- 1: [[Goblin Commando]] 
```

The characters come upon a lone guard wandering Slaark’s Crown—either one [[goblin-commando|Goblin Commando]]. You can start this encounter in any way you want. The guard might suddenly come around a corner, or characters might hear the guard approaching before it is aware of them.

The guard is easily fooled if characters pretend to be bringing tribute. If questioned about Slaark and the fort’s history, the guard relates whatever you want the characters to know. If the characters press for too much tactical or strategic information, the guard grows wary and retreats to find allies.

The best locations to encounter this guard include the following:
	✦ Upper stair (area 5)
	✦ Mess hall (area 7, combat alerts monsters in area 8 and 10)
	✦ Privies (area 11)
	✦ Escape tunnel (area 12)
	✦ Lower stair (area 13)
	✦ Corridor (area 14, combat alerts monsters in area 18)

# Area 1 - Palisade
**Encounter Difficulty:** None (5 xp)

A tall wall surrounds Slaark’s Crown.

When characters approach the site, read:
> [!note]+ Read Aloud
> A recently deforested clearing opens on a small rise, with sawed-off tree stumps dotting the area. A palisade of 10-foot-tall tree trunks wraps around the top of the rise, and a single wooden gate faces you. A handful of taller tree trunks are placed in the wall, their upper branches removed. From the distance, the structure resembles a large wooden crown resting atop a grassy head. A thin stream of smoke rises from within the palisade. 

If the characters peer through the gaps in the timbers, a lone goblin mounted on a wolf can be seen making a slow circle of the central hill. Any character who makes a successful DC 15 [[skills#Perception|Perception]] check hears the huffing and movement of the dire wolf in the largest of the stables (area 3).

## Development
The creatures in area 2 don’t expect guests. They are resting and engaged in idle banter. If the monsters hear the characters coming, Beshk rides her dire wolf to the gate to meet the party. Other creatures maintain their positions unless Beshk calls them.

## Features of the Area
**Walls and Gate:** Climbing the wall or gate requires successful DC 15 [[skills#Athletics|Athletics]] checks. The double-door gate is 10 feet wide, 10 feet tall, and barred on the inside ([[skills#Athletics|Athletics]]  DC 30 to break). It has the following properties: Hardness 10, 40 hit points and a break threshold of 20.

# Area 2 - Yard
**Encounter Difficulty:** Moderate (115 xp)

Wolf riders patrol this area.

When characters can see the yard, read:
> [!note]+ Read Aloud
> A pair of stone doors is set into the hillside nearest the palisade entrance. A series of ditches, forming what seems to be an incomplete moat, surround the hill. Several outbuildings stand near the inside edge of the wall, which is lined with thorny brush.

The creatures are in various locations. Beshk is with her dire wolf in area 3, along with another goblin and wolf. One beast rider slowly circles the yard on a wolf. Twig blights hide among the brush ([[skills#Perception|Perception]] DC 18 to spot them). Each pit contains one human prisoner pitching dirt out of the pit with a shovel, which can be used as a club if the human must fight.

## Features of the Area
**Pits:** Slaark ordered the creation of a moat for his fortress entrance. Each of the three pits is 10 feet deep. Climbing a pit requires successful DC 12 [[skills#athletics|Athletics]] checks.

**Escape Tunnel:** The exit of the escape tunnel (area 12) lies along the palisade’s east wall. It can be found with a successful DC 15 [[skills#Perception|Perception]] check.

### Beshk
Beshk is especially wary, given that she is the first line of defense at Slaark’s Crown. She is more likely to let the characters pass if they have a convincing ruse. If they’ve hidden their weapons from view, act in a subservient manner, and/or produce a tribute, she becomes easier to fool.

If the players use skill checks, they need to make three consecutive successful [[skills#Diplomacy|Diplomacy]] and/or [[skills#Deception|Deception]] checks opposed by Beshk’s [[skills#perception|Perception]] check (with a +2 bonus because of her suspicion) to persuade her. If they fail a skill check, Beshk grows wary (increasing her [[skills#perception|Perception]] bonus to +4) and the characters must, again, succeed on three checks to move on. If they fail again, or ever fail a check by 5 or more, Beshk orders her troops to attack.

Creatures:
 - 1: [[hobgoblin-general|Hobgoblin General]]
 - 1: [[dire-wolf|Dire Wolf]]
 - 2: [[wolf|Wolf]]
 - 2: [[goblin-commando|Goblin Commando]]
 - 4: [[twig-blight|Twig Blight]]

```encounter
name: Palisade Attack
party: Chaos Scar
creatures:
 - 1: [[Hobgoblin General, Beshk]]
 - 1: [[Dire Wolf]]
 - 2: [[Wolf]]
 - 2: [[Goblin Commando]]
 - 4: [[Twig Blight]]
```

If the characters talk their way into the fortress, Beshk uses her key to unlock the doors to area 5. She calls forth a goblin cutthroat (see the “Wandering Guard” section) to escort the party.

Beshk also has the key to her chest in area 15.

### Prisoners
The thee human prisoners found here want only to flee from the fort if the monsters here are slain. They do, however, know a few useful facts about the fortress. They were always blindfolded when led between the yard and the prison, but they know that they traverse a flight of stairs between the two. They can describe the prison (area 8) in detail, including the presence of the gauth.

# Area 3 - Stables
These small lean-tos house the goblins’ wolf mounts.

When characters examine the stables, read:
> [!note]+ Read Aloud
> Numerous wolf prints run through and around these ramshackle wooden lean-tos, with one set of prints noticeably larger than the others. A half-eaten deer lies on bloodstained soil nearby.

The number of stables indicates that Slaark commands more goblins than those present in [[2H - Slaark's Crown (D220) C#Area 2 - Yard]].

# Area 4 - Storage Hut
This simple outbuilding is used for storage.

Light: None.

When characters explore the hut, read:
> [!note]+ Read Aloud
> Within this simple hut are many tools, empty barrels and crates, rope, and other bits of gear. A large pile of firewood fills half the hut.

Slaark’s troops stow items here for which they have no immediate need. The firewood is to be used in the boiling oil room ([[2H - Slaark's Crown (D220) C#Area 6]]).

# Area 5 - Upper Stair
The stair leads to the first underground level of Slaark’s Crown.

When the party approaches the doors, read:
> [!note]+ Read Aloud
> A pair of stone doors is set into the hillside nearest the palisade entrance. A metal lock plate decorates one door.

The doors to the upper stair are locked (DC 15) [[skills#Thievery|Thievery]] check to pick the lock).

When the characters enter, read:
> [!note]+ Read Aloud
> The floor and walls of this chamber are comprised of stone. Upright timbers support a plank ceiling 10 feet above the floor. In the center of the room, a spiral stair of stone descends into darkness.

If the characters examine the doors from the inside, they discover that the lock plate has a lever mechanism built into it. Manipulating the lever locks and unlocks the doors from the inside.

## Features of the Area
**Ceiling:** 10 feet high in the stair chamber.

# Area 6 - Boiling Oil Room
**Encounter Difficulty:** Moderate (110 xp)

The door to this room is hidden from view outside the hill. Smoke streams from a vent in the hill above it. Discovering the door requires a successful DC 15 Perception check.

Creatures:
 - 1: [[goblin-commando|Goblin Commando]]

```encounter
name: Boiling Oil Room
party: Chaos Scar
creatures:
- 1: [[Goblin Commando]] 
```

When characters open the door, read:
> [!note]+ Read Aloud
> A small fire blazes in a long, narrow pit in this room. Metal bowls hang above the fire pit. The bowls are attached to a long, horizontal pole set into the walls. Several small casks are piled nearby.

The goblin here is tending a fire that is part of the trap in area 7. Accustomed to hearing training drills in the yard outside, the goblin doesn’t suspect he’s in danger until someone opens the secret door.

## Features of the Area
**Light:** Bright firelight.

**Trap:** The trap apparatus consists of two horizontal rods set into the walls, each containing several bowls of oil heated to boiling by the fire and ready to pour into area 7. The trap can be locked from here with a lever. If characters examine the trap, they discover a narrow slit in the floor below the oil bowls. A limited view of area 7 is visible through the slit.

**Casks:** Four casks near the trap contain a gallon of oil each. Several more empty casks are in the same stack.

# The Dungeon
```leaflet
### id must be unique
id: Slaark's Crown Dungeon
image: 
 - [[Pasted image 20230825000103.png]]
height: 1000px
width: 100%
### This sets where the map starts by default.  Set to the middle (half) of your bounds.
lat: 50
long: 50
### Zero is no zoom.  Negative zoom steps away from the map.  Positive zoom steps toward the map.
minZoom: 0
### maxZoom is 18.
maxZoom: 17
### Hover mouse over reset zoom icon to see your current zoom.
defaultZoom: 15.5
### How far it zooms in or out.  Can be a decimal.
zoomDelta: 0.5
### This is string so it can be any value.  Change to match your maps measurement scale
unit: feet
scale: 1
darkMode: false
```

# Level 1: Area  7 - Mess Hall
The goblinoids take their meals in this foul hall.

When characters see into the mess hall, read:
> [!note]+ Read Aloud
> Piles of bones and dark stains are the main features of this chamber. The walls and ceiling are faced with stone. Torches hung from the walls provide flickering light. The heavy odor of copper and rot hangs in the air.

## Features of the Area
**Light:** Dim light from flickering torches.

**Trap: Boiling Oil Chute:** The trap can be delayed for 2 rounds by pressing a pressure plate set into the wall near the oil chute. Two such plates exist, one within the stair area and one in the mess hall nearby. Finding a wall plate requires a successful DC 20 [[skills#Perception|Perception]] check.

> [!danger]+ Trap
> [[boiling-oil-chute-hb|Boiling Oil Chute]]

**Bone Piles:** The bone piles are difficult terrain. If characters poke through the jumbled piles of bones, they can identify four human skulls, a dwarf skull, a halfling skull, and animal skulls.

# Level 1: Area 8 - Prison
**Encounter Difficulty:** Moderate (110 xp)
The door to this room is locked, and it requires a successful DC 15 Thievery check to open.

When characters enter the prison, read:
> [!note]+ Read Aloud
> In the center of the room is a large pit. Above the pit, an open-bottomed circular cage, 10 feet across, hangs 5 feet above the pit. A crudely crafted cell, its door closed and chained, takes up the southern portion of the room.

The creatures are in various locations. Each hobgoblin is near the cell. The beholder gauth begins hidden at the top of the fissure (area 9). Four prisoners are in the cell to the south.

Creatures:
 - 1: [[hobgoblin-general|Hobgoblin General]]
 - 3: [[hobgoblin-soldier|Hobgoblin Soldier]]
 - 2: [[hobgoblin-archer|Hobgoblin Archer]]
 - 1: [[beholder-gauth|Beholder Gauth]]

```encounter
name: Prison
party: Chaos Scar
creatures:
 - 1: [[Hobgoblin General, Thrak]]
 - 3: [[Hobgoblin Soldier]]
 - 2: [[Hobgoblin Archer]]
 - 1: [[Beholder Gauth, Krilgathis]]
```

## Features of the Area
**Light:** Dim light from flickering torches.

**Pit:** The pit is 10 feet deep. Climbing into or out of the pit requires a DC 15 [[skills#Athletics|Athletics]] check.

**Cage:** The cage is circular and 10 feet tall. It has no bottom. It is affixed to a heavy chain and pulley system set into the stone ceiling. The chains run to a complex gear and lever system on the wall near the fissure as indicated on the map.

**Cell:** The cell is built from iron bars and wooden planks. A roughly rectangular door, 3 feet high and 5 feet long, has a chain and heavy padlock holding it in place (DC 15 [[skills#Thievery|Thievery]] check to pick the lock).

### Thrak
Thrak is the prison overseer, and he’s suspicious of intruders. If the characters claim they’re bringing tribute, Thrak says they have no business here and should leave. Any misstep causes Thrak to order an attack. Thrak has the keys to area 5, area 8 (here), to the cell door here, and to his chest in area 15.

### Krilgathis
A beholder gauth named Krilgathis ventured into Slaark’s Crown through the fissure (area 9) a few months ago, when it heard activity in the dungeon. The gauth allied with Slaark. It helps keep guard in exchange for torturing and eating prisoners. Krilgathis might join negotiations here, but its sadistic predilections mean that if it participates, it probably has only negative effects on the conversation. The gauth has little loyalty to the goblins. It flees through area 9 if the fight looks lost.

# Level 1: Area 9 - Fissure
**Encounter Difficulty:** Low (60 xp)

A long, narrow fissure in the rock connects this area of the dungeon to the level below and with the Underdark far beneath it.

When characters can see into the fissure, read:
> [!note]+ Read Aloud
> A long, narrow pit descends into the depths. It smells of dusty stone and copper.

**Perception DC 19:** The character spots a mass of bore worms wriggling around the length of the fissure.

Creatures:
 - 1: [[bore-worm-swarm|Bore Worm Swarm]]

```encounter
name: Fissure
party: Chaos Scar
creatures:
- 1: [[Bore Worm Swarm]] 
```

## Features of the Area
**Light:** None.

**The Fissure:** This fissure opens into area 8. It descends and slices between area 14 and area 17. From there, it continues on into the Underdark, deep beneath Slaark’s Crown. The fissure walls are uneven stone, providing plenty of handholds and footholds (DC 10 [[skills#Athletics]] to climb).

# Level 1: Area 10 - Barracks
**Encounter Difficulty:** Moderate (80 xp)

The guards’ barracks are simple but functional.

When the characters enter the barracks, read:
> [!note]+ Read Aloud
> This large, stone-walled chamber is dotted with ratty mattresses, piles of straw, and other detritus. The walls are smeared with stains and etched with strange lettering. 

If monsters are present, two of the hobgoblin battle guards are standing against the far wall and two others are out of sight in the side chambers (DC 17 Perception check to hear them shuffling about). Vrilke begins on the side of the fire pit opposite the characters.

Creatures:
 - 1: [[hobgoblin-general|Hobgoblin General]]
 - 2: [[hobgoblin-warrior|Hobgoblin Warrior]]
 - 2: [[hobgoblin-archer|Hobgoblin Archer]]

```encounter
name: Barracks
party: Chaos Scar
creatures:
- 1: [[Hobgoblin General, Vrilke]]
- 2: [[Hobgoblin Warrior]]
- 2: [[Hobgoblin Archer]]
```

## Features of the Area
**Light:** Bright light from the fire pit.

**Fire Pit:** This magical fire pit (which produces no smoke) was once part of the kitchen. It now warms this level of the dungeon. Any creature that enters the fire or starts it turn there takes 5 ongoing fire damage (save ends).

### Vrilke
Any convincing story is likely to appease Vrilke, who then allows the characters to continue on. The troops know Vrilke isn’t smart, but they fear him. They might warn him that the characters are trying to deceive him. If they do, Vrilke flies into a rage and orders an attack.

Vrilke has the key to area 5 and the one to his chest in area 15.

# Level 1: Area 11 - Privy
This room is filled with waste.

When characters discover the privy, read:
> [!note]+ Read Aloud
> A foul stench spreads from this chamber, which is filled calfdeep with waste and excrement. The walls are lined with sheets of cloth and leather, all smeared with filth.

A narrow opening behind one of the filthy cloth sheets leads to a tunnel.

## Features of the Area
**Light:** None.

# Level 1: Area 12 - Escape Tunnel
This tunnel connects the privy (area 11) to the yard above (area 2).

When characters enter the tunnel, read:
> [!note]+ Read Aloud
> This narrow tunnel is difficult to traverse. Its walls and ceiling are cut unevenly into the rock, forcing anyone larger than a halfling to push and squeeze through.

Medium creatures must squeeze to move through this tunnel. Large creatures cannot fit.

## Features of the Area
**Light:** None.

# Level 1: Area 13 - Lower Stair
The stair connects the first and second dungeon levels.

When characters descend the stair, read:
> [!note]+ Read Aloud
> A stone stair fills this small chamber, descending farther into the ground. A few torches pinned to the stone wall fill the stairwell with light.

## Features of the Area
**Light:** Dim light from flickering torches.

# Level 2: Area 14 - Corridor
A central passage connects to most of the chambers on this level.

When the characters enter the corridor, read:
> [!note]+ Read Aloud
> This long, wide corridor has two doors to the north and a set of double doors to the south. Fine tiles separated by narrow seams line the floor. The walls are cut smooth from the bedrock but are scored to appear like masonry. Dim light comes from two small braziers, one at each end of the corridor.

Two identical pendulum scythe traps are in this corridor. They cover the areas indicated on the map. The trap blades swing up from gaps between the floor tiles rather than from the ceiling.
> [!danger]+ Trap
> [[scythe-blades|Scythe Blades]]

The traps can be delayed for 3 rounds by pressing a secret wall plate. One plate is at each end of the corridor, along with one just inside area 18. Finding a plate requires a successful DC 22 Perception check.

## Features of the Area
**Light:** Dim light from braziers.

# Level 2: Area 15 - Captains’ Barracks
This chamber houses Slaark’s captains.

When characters enter the room, read:
> [!note]+ Read Aloud
> This chamber contains four simple wooden beds with straw mattresses along the walls. Clothing, weapons, and pieces of armor hang from iron spikes hammered into the stone walls, which are neatly painted with phrases in the Goblin language. A metal tile is affixed to the wall near each bed.

## Features of the Area
**Light:** None.

**Painted Sayings:** The Goblin phrases are sayings Slaark has told his captains in an attempt to train them to be more than brutish thugs. “Victory comes from thinking.” “The sword can kill only what the brain can understand.” “A dead fool pays no tribute.”

**Metal Tiles:** A metal placard is affixed to the wall near each bed, each etched with that captain’s full title in Goblin: “Wolf Captain,” “War Captain,” “Captain of the Prison,” and “Captain of the King’s Guard.”

### Hidden Chests
A small chest is hidden under each bed. Each of these chests is locked ([[skills#Thievery|Thievery]] DC 15 to open). Their contents are as follows:

**Wolf Captain’s Chest (Beshk):** Several commendations from Slaark (each is a piece of parchment with a crude compliment written on it in Goblin); trinkets stolen from prisoners; a rough drawing of the perceived extent of Slaark’s kingdom.

**War Captain’s Chest (Vrilke):** One commendation; several rotted chunks of animal meat; several humanoid ears; a rusty dagger.

**Captain of the Prison’s Chest (Thrak):** Several commendations; a crude drawing of a hobgoblin sitting on a throne (Thrak drew this picture of himself ).

**Captain of the King’s Guard’s Chest (Brakik):** Several commendations; a hobgoblin skull (Drekesh’s); a journal written in stilted Common. The journal recounts most of what has happened since the goblinoids’ arrival at the dungeon. If characters read it, provide whatever information you want from the adventure background. Be sure to include the part about Slaark overthrowing the previous leader, Drekesh. The account isn’t extensive, but gleaning anything useful from the jumbled, barely literate scratching's takes 10 minutes of careful scrutiny.

# Level 2: Area 16 - Tribute Room
This chamber holds most of Slaark’s amassed treasure.

The door to this room is set with two lock plates. Slaark carries the keys; opening the door without the keys requires two successful DC 20 [[skills#Thievery|Thievery]] checks. If either check fails by more than 5, a mechanism in the door engages so that subsequent lockpicking attempts require successful DC 25 [[skills#Thievery|Thievery]] checks.

When characters enter the tribute room, read:
> [!note]+ Read Aloud
> Assorted furniture, kitchen implements, tools, personal trinkets, and other gear fill this room. Among the mundane items, you spy the glitter of gold and gemstones. 

## Features of the Area
**Light:** None.

> [!tip]+ Treasure
> Found throughout the room are the following items: [[pathfinders-pouch-locg|Pathfinder's Pouch]], [[cold-iron-shield|Cold Iron Buckler (Standard Grade)]], [[warding-tattoo-som|Warding Tattoo (Fiend)]], [[lions-shield|Lion's Shield]], [[elixir-of-life|Elixir of Life]], [[euphoric-loop-tv|Euphoric Loop]], [[potion-of-retaliation-apg|Potion Of Retaliation (Moderate)]], [[malyass-root-paste|Malyass Root Paste]] and coin in the amount of 81 gp, 50, sp and 800 cp.

# Level 2: Area 17 - Rubble
This room was damaged by the earthquake that opened the fissure adjacent to it.

When characters explore west of the traps, read:
> [!note]+ Read Aloud
> The end of the corridor was once a room, but at some time in the past, the floor and ceiling split apart, causing the front wall of the room to collapse. The area is filled with stone debris of all sizes that tumbled from the ceiling and walls. Fissures in the floor and ceiling lead up to the level above and down into darkness.

See [[2H - Slaark's Crown (D220) C#Level 1 Area 9 - Fissure]] for more on the fissure.

## Features of the Area
**Light:** None.

# Level 2: Area 18 - Guard Hall
**Encounter Difficulty:** Moderate (80 xp)

The door to this chamber is locked. Slaark and Brakik carry keys for the lock, or it can be picked open with a successful DC 15 [[skills#Thievery]] check.

Monsters: 1 hobgoblin warmonger (Brakik), 3 hobgoblin spear soldiers.
Trap: Sliding wall.

When characters enter, read:
> [!note]+ Read Aloud
> The walls and floor here are made of fine stonework, the ceiling etched with a depiction of the sky. At the far end of the hall is a double door guarded by four hobgoblins.

If the hobgoblins are here, one of them is holding the wall plate (see the “Trap” section below). Any character who succeeds on a DC 15 [[skills#Perception]] check realizes the guard is up to something. A character who succeeds on a DC 22 (15 if the previous Perception check was successful) [[skills#Perception]] check sees what the hobgoblin is doing.

Creatures:
 - 1: [[hobgoblin-general|Hobgoblin General]]
 - 2: [[hobgoblin-warrior|Hobgoblin Warrior]]
 - 2: [[hobgoblin-archer|Hobgoblin Archer]]

```encounter
name: Guard Hall
party: Chaos Scar
creatures:
- 1: [[Hobgoblin General, Brakik]]
- 2: [[Hobgoblin Warrior]]
- 2: [[Hobgoblin Archer]]
```

## Trap
The hobgoblins wait at the far end of the hall, hoping to draw a few intruders toward them so the sliding wall trap can separate them from their allies. If the characters don’t approach, Brakik peppers them with arrows and the spear soldiers throw javelins.

One of the hobgoblins is pressing a wall plate that delays the sliding wall trap from activating. When at least one character has moved past the trap’s area, the hobgoblin releases the plate. The trap then activates when the next character enters the trapped area.

The trap mechanism is set into the wall and is well camouflaged with stone that matches the rest of the wall, though most of the sliding wall is made of wood. The trapped area is denoted on the map.

## Features of the Area
**Light:** Bright light from braziers.

#### Brakik
Brakik is a hulking male hobgoblin who serves as Slaark’s captain of the king’s guard, a position he relishes. He is completely loyal to Slaark, despite his king being a lowly goblin. Brakik is under strict orders to guard the throne room and cannot be tricked into stepping aside.

Brakik has keys to area 5, this area, and his chest in area 15.

# Level 2: Area 19 - Throne Room
**Encounter Difficulty:** Severe (135 xp)

King Slaark holds audience in this large hall.

Monsters: King Slaark, 5 hobgoblin battle guards, 1 imp (Gethilarr), 1 doppelganger sneak (Zin).

When characters enter the room, read:
> [!note]+ Read Aloud
> The walls of this large throne room bear murals of faraway places. Fine alabaster tiles set with perfect joints cover the floor. A vaulted ceiling sports two massive chandeliers, each burning with dozens of candles.
> 
> A diminutive goblin wearing a wooden crown sits on a massive mahogany throne, with a pair of hobgoblins standing at his side. Behind the throne, in an alcove shrouded by thin, translucent cloth, a dozen more hobgoblins stand at the ready in perfect formation.
> 
> A ragged young woman wearing tattered clothes and a dirty jester’s cap dances in front of the goblin king. After a moment, she spies you and cries out, “Finally, someone has come for me!”

The “woman” runs to the characters and tries to shelter behind them. She is a doppelganger named Zin. See the “Zin” section below for more information.

The two barbazu start next to Slaark. The three hobgoblins are positioned in the alcove behind the throne, in the front row.

![[Pasted image 20230825225533.png]]

Creatures:
 - 1: King Slaark
 - 2: [[hobgoblin-warrior|Hobgoblin Warrior]]
 - 1: [[hobgoblin-archer|Hobgoblin Archer]]
 - 1: [[doppelganger|Doppelganger]] 
 - 2: [[barbazu|Barbazu]]

```encounter
name: Throne Room
party: Chaos Scar
creatures:
- 1: [[King Slaark, 70, 18, 12]]
- 2: [[Hobgoblin Warrior]]
- 1: [[Hobgoblin Archer]]
- 1: [[Doppelganger]]
- 2: [[Barbazu]]
```

### Slaark
Slaark is a male goblin, the king and mastermind of Slaark’s Crown. He is unusually intelligent and charismatic for a goblin, and he uses his gifts to best advantage in all he does. He is capable, wily, and confident to the point of arrogance.

Slaark is willing to talk to the characters for a while. He wants to determine who leads the group and whether any of the characters is a mage or a healer. He takes the first opportunity to point out his troops waiting behind the curtain and then demands that the characters surrender their weapons and kneel before him as their king.

If the characters play along with Slaark’s hubris, they can advance as much as halfway across the throne room. If they approach closer than that, or after Slaark has learned all he can from them, he orders his troops to attack.

While Slaark is formidable and arrogant, he is no fool. If he’s bloodied and three or more of his hobgoblin battle guards are dead, the goblin bargains for his life. He starts with low offers, like any negotiator, but he’s willing to offer everything he has, including his beloved fortress, in exchange for his life.

### Zin
Zin is a doppelganger who masquerades as a young human female while serving as Slaark’s “court jester.” Slaark treats Zin well, and the doppelganger, in turn, has invested his loyalty in the goblin king... for now. If Slaark surrenders and Zin is still alive, the doppelganger immediately flees.

## Features of the Area
**Light:** Bright light from chandeliers.

**Ceiling:** 20 feet high.

**Troop Alcove:** A sheer curtain across the front of this alcove barely conceals what appear to be twelve hobgoblin guards, all dressed and armed identically. All but three of them are mannequins outfitted to look like soldiers. A successful DC 22 [[skills#Perception]] check reveals the ruse.

**Chandeliers:** Two massive chandeliers hang from the ceiling as noted on the map. Both are 10 feet in diameter, covered with lit candles, and very heavy. Each chandelier is suspended by a heavy rope affixed to the side wall.

> [!example]+ Magic Item
> Slaark wields a +1 [[energizing-lotgb|Energizing]] Shortsword.

# Level 2: Area 20 - King’s Chamber
This is Slaark’s private chamber.

When characters enter, read:
> [!note]+ Read Aloud
> This small chamber has a cherry wood bed with a fluffy mattress and pillows, a wooden wardrobe, and a large metal chest. The walls and floor are composed of fine masonry, the joints gilded with silver filigree.

This is Slaark’s personal chamber and the nicest room in Slaark’s Crown.

## Features of the Area
**Light:** None.

**Chest:** The chest is locked, requiring a successful DC 20 [[skills#Thievery|Thievery]] check to open.  Inside are a few articles of fine clothing and a journal. Within the journal, penned in meticulous Common, is a complete description of Slaark’s plan. He describes everything covered in the adventure background, generously laced with the disdain he holds for his slovenly, stupid followers.  Additionally, the journal contains sketches of each of the traps and locks in Slaark’s Crown.

**Wardrobe:** The wardrobe holds a variety of goblin-sized clothing (mostly halfling clothing that has been slightly modified), several fine hats, and three pairs of shoes.