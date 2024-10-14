---
title: The Kobold Hall
adventure_status: Done
total_xp: 240
completed_xp: 240
---

# Background 
The ruined manor now known as Kobold Hall was once a minor lord’s proud holding, a walled keep over looking the old King’s Road. That was years ago, and the lord’s name and the glories he earned are long forgotten. Today, the place is called Kobold Hall after the malicious humanoids that infest the place. The Cloak Wood has overrun the grounds, with trees growing in the midst of abandoned gardens and courtyards. 

Several kobold tribes dwell within the ruins, hiding in the multitude of tunnels, ruins, and cellars found here. The tribes squabble with each other, raid surrounding settlements, and attack caravans on the old King’s Road. Lately, the kobolds have become more aggressive. The Skull Kicker tribe has taken over or driven off the rival tribes. Emboldened, the Skull Kickers stole a wagon loaded with valuable cargo from a caravan on the King’s Road. As the adventure begins, the characters find themselves at Restwell Keep. 

Use one of the hooks below to set up the backstory for the adventurers, or create your own. You don’t need a lot of details; you just need enough to explain why the PCs are together and why they are heading out to investigate Kobold Hall. 

# Running the Adventure
**Total Adventure Value:** 
- [x] Total (240 XP)

## Adventure Hooks

**Dragon Hide**
The player characters are hired by Bergen the Smith. Among the cargo of a stolen merchants wagon was a cured green dragon hide destined for his shop. Bergen intends to turn the hide into a fine suit of scale armor. He hires the adventurers to enter the kobold lair and get back his dragon hide. If they succeed, he gives them 200 gp.

Alternative: The PCs hear about the loss of the wagon and the dragon hide and approach Bergen to see if there’s a reward for its return.

**Kobold Bounty**
The Kendon Longstrider has had enough of Fireclaw clan kobold raids along the old King’s Road. If the PCs approach him looking for work, he readily offers them a bounty for clearing out Kobold Hall. The Baliff promises a bounty of 10 gp for each dispatched kobold and an additional 100 gp if the PCs bring proof that the ruins have been cleared out, such as the bone mask worn by the kobold leader.

Alternative: The Bailiff specifically seeks out the PCs to ask them to undertake this mission.

```leaflet
### id must be unique
id: the-kobold-hall
image: 
 - [[Pasted image 20230407203953.png]]
height: 900px
width: 70%
### This sets where the map starts by default.  Set to the middle (half) of your bounds.
lat: 50
long: 50
### Zero is no zoom.  Negative zoom steps away from the map.  Positive zoom steps toward the map.
minZoom: 0
### maxZoom is 18.
maxZoom: 18
### Hover mouse over reset zoom icon to see your current zoom.
defaultZoom: 16
### How far it zooms in or out.  Can be a decimal.
zoomDelta: 0.5
### This is string so it can be any value.  Change to match your maps measurement scale
unit: meters
scale: 1
darkMode: false
```


## Players’ Introduction
When the PCs decide to explore Kobold Hall, read or paraphrase the following to the players:

> [!note]+ Read Aloud
> You travel into the wilderness to find the once-sprawling manor now known as the ruins of Kobold Hall. Inside the keep, you find a trapdoor at the base of an old guard tower. It must lead beneath the ruins.

# Encounter 1 - The Guard Room
![[Pasted image 20230407205737.png]]

This area serves as a guardroom for the kobolds. A pit filled with sludge provides an obstacle for intruders. When the PCs arrive, they see one kobold. The others stay hidden until the PCs move deeper into the area. This encounter includes the following creatures.

**Encounter Difficulty:** Trivial (30 xp)
Creatures:
 - 2: [[kobold-scout|Kobold Scout]] (S)
 - 3: [[kobold-warrior|Kobold Warrior]] (K)

```encounter
name: Guard Room
party: Chaos Scar
creatures:
- 2: [[Kobold Scout]]
- 3: [[Kobold Warrior]] 
```

As the adventurers enter this chamber, read:

> [!note]+ Read Aloud
> Dominating the room ahead is a long trench filled with a glowing green substance. Beyond the trench, a small,  reptilian humanoid stands in a shadowy chamber, gaping at you. It carries a sling, and quickly reaches into a pouch at its belt for a stone. It hisses and shouts, “Intrudersss! Intrudersss!”

## Tactics

One of the kobold warriors attempts to lure the PCs into the room, where the others hide. The scouts fires at the PCs, while the other two warriors split up to circle around the pit and attack. Meanwhile, the kobolds behind the portcullis wait until the PCs are in sight of their position. Once the PCs have moved up, they attack. The kobolds are alert to area attacks. They never cluster together unless tey can gain flanking attacks

## Features of the Area

**Pit:** The pit is 10 feet deep, filled up to 4 feet with a thick, green sludge. Any PC who falls into the pit is immobilized. A DC 13 Athletics check allows a PC to break free. The sludge is difficult terrain. Creatures can walk in it, but a creature that ends its move in the sludge is immobilized as described above. Climbing out of the pit requires a DC 13 [[skills#Athletics|Athletics]]  check. A creature that falls in takes `dice: 1d10-2` damage, since the sludge provides cushion against a fall.

**Portcullis:** The passage to the east has a portcullis designed to bar larger creatures. Small creatures ignore it, but it stops larger folk. Forcing the portcullis up requires a DC 12 [[skills#Athletics|Athletics]] check. The lever to open it is down the hall from the portcullis.

> [!tip]+ Treasure
> In addition to any weapons and armor the kobolds carry a total 5 gp.

# Encounter 2 - The Tomb
![[Pasted image 20230407212716.png]]

This chamber was once a tomb. The kobolds use the traps here to defend their lair. This encounter includes the following creatures and traps.

**Encounter Difficulty:** Trivial (10 xp)
Creatures:
 - 3: [[kobold-warrior|Kobold Warrior]] (K)
2 dart traps (1 and 2) see below

```encounter
name: The Tomb
party: Chaos Scar
creatures:
- 3: [[Kobold Warrior]] 
```

As the adventurers enter this chamber, read:

> [!note]+ Read Aloud
> The room ahead has four stone coffins, all of which show signs of vandalism and abuse. To the left is a series of six niches, set apart into two groups of three. Two more niches along the walls each hold a suit of armor. On the opposite end of the room is a raised section of floor with a makeshift altar set atop it. Three kobolds carrying spears stand in front of the alter.

## Tactics

The kobolds attempt to use the traps to their advantage. They try to lure characters into chasing them across the room, taking advantage of the fact that creatures of Small size are too light to trigger the trap.

## Features of the Area

**Coffins:** The stone coffins are difficult terrain that provide cover.

**Armor:** These two suits of plate armor stand at attention. When the dart traps activate, their helmet visors swing open to reveal a dart-firing mechanism.

**Trigger Points:** Several squares on the map are marked with the number 1 or 2. The 1s correspond to squares that trigger dart trap 1. The same applies to trap 2. The two suits of armor are likewise marked 1 and 2 to indicate the location of each trap’s firing mechanism.

**Altar:** The kobolds have lovingly crafted this crude altar to Tiamat. A small bag on the altar holds 6 gp, an offering.

### Dart Trap
**Complexity** Simple  
**Stealth** DC 20 (trained) The character notices the firing mechanisms in the armor visors.
**Description** Darts fire from the suit of armor, filling the chamber with danger.

---
**Disable**  [[skills#Thievery|Thievery]] DC 18 (trained) on the floor tile or wall socket  
**AC** 18, **Fort** +11, **Ref** +3  
**Hardness** 8, **HP** 32 (BT 16); **Immunities** critical hits, object immunities, precision damage  
**Dart**  (attack); **Trigger** Pressure is applied to the floor tile. 
**Effect** The trap shoots a dart, making an attack against the creature or object on the floor tile.  
**Ranged** dart +14, **Damage** `dice: 1d6+3` piercing
___

> [!tip]+ Treasure
> In addition to any weapons and armor one of the kobolds is carrying a Retrieval Prism.

# Encounter 3 - Skull-Skull
![[Pasted image 20230408120352.png]]

This chamber has been turned into an arena for games of skull-skull, the sport of Kobold Hall. The player characters enter the chamber while a game is in progress and find that the game is an exercise in mindless violence, as befits kobolds. This encounter includes the following creatures.

**Encounter Difficulty:** Moderate (70 xp)
Creatures:
 - 2: [[kobold-scout|Kobold Scout]] (S) 
 - 4: [[kobold-warrior|Kobold Warrior]] (M) 
 - 2: [[shadow-drake|Shadow Drake]] (D)

```encounter
name: Skull-Skull
party: Chaos Scar
creatures:
- 2: [[Kobold Scout]] 
- 4: [[Kobold Warrior]]
- 2: [[Shadow Drake]]
```

As the adventurers enter this chamber, read:

> [!note]+ Read Aloud
> This chamber looks like it was once a tomb, but the kobolds have transformed it into what you might almost call a playground. Four stone coffins lie here, with a sludge-filled pit between them. On the opposite end of the room is a wooden double door. Flanking the double door are two raised platforms, both 10 feet above the floor. A kobold stand on each platform. Arrayed on the coffins are several animal skulls, all of them arranged in small piles. One kobold holds a sludge-drenched stone tied to a long rope that is secured in the ceiling.

### Skull-Skull Stone Level 1
**Complexity** Simple  
**Description** This sludge-covered stone is tied to a long rope that hangs from a hook in the ceiling.

---
**Disable**  A character in the marked area can ready an action to attack the rope (AC 14, 10 hp, and resist 5 to all damage).  Alternately, a character can make ranged attacks against the rope. 
**AC** 18, **Fort** +11, **Ref** +3  
**HP** 10 (BT 5); **Immunities** critical hits, object immunities, precision damage  
**Dart**  (attack); **Trigger** A kobold uses a standard action to attack with the skull-skull stone. It can be used by two different kobolds in each round.
**Effect** The trap shoots a dart, making an attack against the creature or object on the floor tile.  
**Ranged** rock +14, **Damage** `dice: 1d8+2` bludgeoning
___

## Tactics

The kobolds try to batter the PCs into submission while avoiding melee.

The kobold warriors split up, one on each platform. They take turns activating the skull-skull trap, one throwing a javelin on a turn when it isn’t activating the trap. 

The kobold scouts fire at the PCs, hoping to use their shots to harass characters and make them easier targets for the rock.

The kobolds’ pet shadow drake remains on the other side of the door. It russhes up the stairs to attack a PC who climbs up to the platforms. Otherwise, it attacks anyone who breaches the door.

## Features of the Area

**Pit:** The pit is 10 feet deep, filled up to a depth of 4 feet with a thick green sludge. The sludge has two important traits. First, it is sticky. Any character who falls into the pit is immobilized. A DC 13 [[skills#Athletics]]  check allows a PC to break free. The sludge is difficult terrain. Creatures can walk in it, but a creature that ends its move in the sludge is immobilized as described above. Climbing out of the pit requires a DC 10 [[skills#Acrobatics]] check. A creature that falls in takes `dice: 1d10-2` damage, since the sludge provides cushion against a fall.

**Door:** The door has 20 hit points. Bashing it down requires a DC 16 [[skills#Athletics]] check.

**Skull-Skull Stone:** This weird device counts as a trap. The kobolds normally swing it down to hit a skull on the coffins below. The object of the game is to get a skull to stick to the rock, and then grab the skull as it comes back to the thrower. When the PCs arrive on the scene, the kobolds are happy to use the rock against them.

**Platforms:** There are no railings for the raised platforms. Climbing the wall up to the platform from the floor requires a DC 13 [[skills#Athletics]] check. Scattered on the floor in a small pile in the northern platform are 10 gp in coins, an agate and two obsidian worth 5 sp each.

> [!tip]+ Treasure
> In addition to any weapons and armor the kobolds carry a total 7 gp a formula (3) and Choker-Arm Mutagen (Moderate).

# Encounter 4 - Chieftain's Chamber
![[Pasted image 20230408123909.png]]

The kobold chieftain rules from this chamber. Paranoid at the thought of intruders, the chieftain and his minions erected an elaborate, crushing boulder trap in this room. When the PCs enter, the chieftain activates the boulder and hides in his lair. Meanwhile, kobolds pour forth to attack the PCs. This encounter includes the following creatures and trap.

**Encounter Difficulty:** Low (50 xp)
Creatures:
 - 2: [[kobold-scout|Kobold Scout]] (S) 
 - 1: [[kobold-dragon-mage|Kobold Dragon Mage]] (W) 
 - 2: [[kobold-warrior|Kobold Warrior]] (K)
1 rolling boulder (T)

```encounter
name: Chieftain's Chamber
party: Chaos Scar
creatures:
- 1: [[Kobold Dragon Mage]] 
- 2: [[Kobold Scout]]
- 2: [[Kobold Warrior]]
```

As the adventurers enter this chamber, read:

> [!note]+ Read Aloud
> You arrive at a chamber with a 20-foot-tall ceiling. Before you is a 10-foot tall wall that leaves passages open to  both the right and left. Suddenly, the sound of cracking timbers echoes through the hall. The floor shakes, dust cascades down from the ceiling, and something big and heavy hurtles toward you!

### Rolling Boulder
**Complexity** Simple  
**Stealth** DC 18 (trained)  
**Description** A giant boulder rolls through the chamber crushing everyting in it's path.

---
**Disable** [[skills#Perception]] DC 10 to notice the approaching boulder.  A character can attempt a DC 18  [[skills#Athletics]] check to leap over the rolling boulder.
**Release Boulder**  **Trigger** As soon as the encounter begins, the trap rolls initiative. The rolling boulder has a +7 attack, +5 initiative and a Speed of 8.  The rolling boulder inflicts  `dice: 2d6` bludgeoning damage on all creatures in it's path.  

---
## Tactics

The kobolds prefer to let their boulder crush the PCs. They keep to the sides of the chamber, firing at the characters. The ranged kobolds climb ladders in the interior chamber to stand atop the interior walls and fire. The chieftain (the wyrmpriest) and the two dragonshields remain on the platform. If a PC comes close to the platform, the dragonshields rush forward to attack. The chieftain uses his +1 staff of the war mage to increase the area of his dragon breath attack.

## Features of the Area

**Central Room:** The wall here is 10 feet tall, and the ceiling in this chamber is 20 feet above the floor. PCs and kobolds can climb over the wall to reach the central chamber. Climbing requires a DC 13 [[skill#Athletics]] check. The wall is wide enough to allow a creature to stand on top of it.

**Door:** The door to the central room has 20 hit points. Bashing it down requires a DC 14 [[skill#Athletics]] check.

**Boulder:** Full stats for the trap are given above. It starts at the point marked on the map and follows the path.

**Platform:** There are no railings on the raised platforms. Climbing up the side of the platform requires a DC 13  [[skill#Athletics]] check. The platform is 10 feet up.

## Ending the Encounter
When the characters defeat the kobolds, they find a small silver key in the chief ’s belt pouch, along with a piece of parchment that describes the location of a secret door in the alcove to the north. The key opens the door, revealing a secret set of stairs leading down to the final encounter area.

> [!tip]+ Treasure
> The kobold chieftain carries 10 gp and 8 sp as well as a Ghost Charge.

# Encounter 5 - The True Threat
![[Pasted image 20230408130551.png]]

This chamber is the lair of the young white dragon Szartharrax. Although he is still small by the standards of his kind, Szartharrax is far and away the most dangerous monster in Kobold Hall. He is the reason the Fireclaw's managed to assert themselves over the other kobold gangs in the area; Szartharrax decided to back them and ate the rival chieftains, which persuaded the rest of the scaly little monsters to swear allegiance to the Fireclaw's. Szartharrax has an appetite for gold, and the white dragon has been demanding tribute from his loyal servants. Fear of the dragon’s anger is driving the kobolds to attack caravans and launch raids against the nearby settlements.

Szartharrax is a tough opponent; the adventurers will have to fight well to survive. This encounter includes the following creature.

**Encounter Difficulty:** Moderate (80 xp)
Creatures:
 - 1: [[young-white-dragon|Young White Dragon]]

```encounter
name: The True Threat
party: Chaos Scar
creatures:
- 1: [[Young White Dragon]] 
```

As the adventurers enter this chamber, read:

> [!note]+ Read Aloud
> You follow a long, winding passage from the kobold chieftain’s throne room down and down into the earth. Eventually, the finely worked stone tunnels give way to natural passages. Finally, you come upon a large cavern. The air is unnaturally cold in here. In the center of the room is a large pool of frozen dark water. The cavern is quiet.

## Tactics

The dragon begins the encounter hiding in the area marked on the map. Make a [[skills#Stealth]] check for the dragon opposed by the player characters’ passive [[skills#Perception]] checks. Player characters whose Perception checks are lower than the dragon’s Stealth check are surprised. Roll initiative and begin the combat. The dragon starts by flying to a spot just in front of the party and using his icy breath against as many player characters as he can catch in the area at one time. In subsequent rounds, the dragon tears the adventurers apart with his multiattack.

Szartharrax avoids heavily armored characters, preferring instead to pick off lightly armored foes. If the dragon becomes bloodied, he goes into a rage. He attacks the nearest PC, ignoring any intelligent tactics in favor of brute force.

## Features of the Area

**Pool:** The pool of water is 2 feet deep and frozen solid. The ice is difficult terrain, but the dragon ignores it if it walks through it (thanks to its ice walk ability).

> [!tip]+ Treasure
> If the PCs manage to slay the dragon, they find a small cave up ahead that has a locked treasure chest (DC 20 [[skills#Thievery|Thievery]] check to open). The chest contains the piece of dragon hide that Bergen wanted recovered, 24 gp in a small felt bag, two potions of lesser healing, a Rime Crystal and a Sturdy Shield (Minor).