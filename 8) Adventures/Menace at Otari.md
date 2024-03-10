![[Menace at Otari-20240304152521157.webp|locr]]

# Getting Started
The map should be in the middle of the table, and each player should place the pawn for their hero just off the map, near Area 1 on the first level of the dungeon. Start by reading the text in green below to set the scene.

> [!note]+ Read Aloud
> The small seaside town of Otari is known for its fresh fish and skilled sailors, but above all, it’s a big logging town, providing valuable wood to the nearby metropolis of Absalom. But for you, Otari is home. You grew up playing on the docks, getting lost in the nearby woods, and hearing the fantastical stories of travelers from faraway lands, tales of terrifying dragons and virtuous knights. Such adventure always seemed so distant—until today!
> 
> Word has begun to spread around Otari that there’s a problem down at the Otari Fishery. Some are saying that some sort of beast is lurking in the basement, feeding on the stores of salted fish. Folks are worried that whatever is eating the fish might get hungry enough to eat the fishers next! 
> 
> You’ve received a letter from Tamily Tanderveil, the owner of the Fishery. Inside is a desperate plea for help. With the town guard busy protecting the loggers, she needs a few brave souls to venture down into the basement of her warehouse and put an end to the beast that’s feasting on her fish! Do you have the courage to face the menace under Otari?

After you finish reading, have the players introduce their heroes to one another, including their name, ancestry, background, and class. Players might also want to describe what their hero looks like, what kind of gear they carry, and maybe a bit about their personality. You can also show them the picture of [[Tamily Tanderveil]] on this page so they can see who’s asking them to take on this task.

After the introductions, have the players place their pawns on the stairs leading down into the basement in Area 1. The order is up to them to decide, but it’s smart to put characters with more Hit Points or a higher Armor Class in front. Make sure that one character is at the bottom of the stairs.

```leaflet
id: Menace at Otari One
image: 
 - [[Menace at Otari - Floor One.webp]]
height: 1200px
width: 60%
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

# Encounter 1 - Hungry Rats

**Encounter Difficulty:** difficulty (80 xp)

At the start of the encounter, place the following foes on the map: 
 - 4: [[giant-rat|Giant Rat]] W

```encounter
name: Hungry Rats
party: Virtual
creatures:
- 4: [[Giant Rat]] 
```

The first encounter happens in the basement of the Otari Fishery. Read the following to the players.

> [!note]+ Read Aloud
> The stairs leading into the basement of the Otari Fishery creak with age as you make your way downstairs to find the beast that has been eating all the fish. In the center of the room, between stone pillars holding up the fishery overhead, are barrels filled with salted fish. Two of these barrels have been smashed open, spilling their contents on the floor. In the east wall is a large hole, opening into darkness. 
> 
> Just a few hours ago, you gathered with a few other adventurers in the office of Tamily Tanderveil’s office, where she offered you ten gold pieces each if you could put an end to this menace. She was thrilled when you agreed to help her with this simple task, but as you make your way downstairs, you can’t help but wonder if this might be a lot more adventure than you bargained for.

The shelves along the walls on the north and south sides of the room are piled high with general supplies that belong to the fishery. Heroes who investigate the hole in the wall on the east side of the room find piles of loose rock and dirt on the inside of the room. It looks like something has broken open the wall from the other side!

After each player has had a chance to do one thing, an ominous skittering noise comes from the hole in the wall — giant rats emerge to attack! Read the following to the players.

> [!note]+ Read Aloud
> A strange chittering comes from the hole in the wall. Suddenly, a massive rat the size of a dog emerges from the darkness—and it isn’t alone! The giant rats rush toward you, their huge teeth snapping.

The rats all take their turns at the same time, but each one acts independently. On its turn, each rat moves toward a different hero and attacks. If a hero falls unconscious, the rat moves to the next nearest and attacks.

Once one side is defeated or flees, go around the table and ask the players what the heroes would like to do next. If the heroes return to talk to [[Tamily Tanderveil]], she’s relieved to learn that the rats are dead, but she is certain that rats couldn’t have caused all of the destruction below. The heroes will have to explore further if they want to earn their reward. When the players decide to explore beyond this room, turn to Area 2 on page 6.

# Encounter 2 - Drop into Darkness
![[Menace at Otari-20240304225325760.webp]]

**Encounter Difficulty:** difficulty (10 xp)

After dealing with the rats, the heroes are free to explore the hole in the east wall of the storeroom. It is big enough for a human to crawl through with ease. Once the first hero enters the area beyond, read the following aloud.

> [!note]+ Read Aloud
> Squeezing through the hole, you find yourself in a cavern that seems to stretch endlessly beneath the streets of Otari. Who knows what menace could be lurking down here? Up ahead, the passageway ends in a cliff that plunges sharply into the darkness.

The monsters that broke into the storeroom used this passageway to break through the wall, but they came from much deeper parts of the vast series of caverns beneath Otari.

To continue on their adventure, the players must find a way to climb down a short, slippery cliff. Instead of using combat abilities, the heroes each need to attempt a skill check to see if they succeed or fail. This check requires the [[skills#Athletics|Athletics]] skill, which is used for climbing up and down walls, ropes, and trees. 

The cliff is only 10 feet tall, but the surface is slick with moisture. The DC of the [[skills#Athletics|Athletics]] check to climb safely is 15. The players might decide to use rope to help them scale the cliff. They can easily tie a rope to one of numerous sturdy stalagmites nearby. Once this is done, the Athletics check to climb up or down is only DC 10; a character critically fails only by rolling a 1 on the die, and they score a critical success if the total is 20 or higher. The heroes might also try and help each other get up and down. A character helping someone else climb must attempt their own [[skills#Athletics|Athletics]] check to assist. If they succeed, the character climbing gets a +1 circumstance bonus to their check (+2 if the assisting character critically succeeds). A hero providing assistance must still roll their own [[skills#Athletics|Athletics]] check to climb up or down themself.

- Critical Success (The die roll was a 20 or the total was 25 or more.) The character climbs up or down the cliff, reaching their destination safely.
- Success (The result of the check was 15 or more.) The character climbs 5 feet up or down the wall. They must roll another check to complete the journey.
- Failure (The result of the check is less than 15.) The character makes no progress at all. They stay where they are at on the wall.
- Critical Failure (The die roll was a 1 or the total was 5 or less.) The character falls to the ground. If they were at the top, they take 5 damage from the fall. If they were halfway up, they take only 2 damage from the fall. If the character was trying to climb up and this was their first check, they simply fall prone and take no damage.

Once the heroes climb down the cliff, they can continue onward to the next area. There is little of interest in this tunnel, but anyone who looks can find a trail in the dust and grime, making it clear that creatures have come this way in the recent past. Moisture and time have obscured any details such as footprints, however. The mushrooms in the lower part of the chamber are particularly bitter, but edible.

From this point onward, the characters are free to explore the dungeon at their own pace. They can continue to press forward, or they can retreat back to the town above to rest and get new supplies.

> [!warning]
> **Light:** From this area onward, the chambers are completely dark unless their descriptions state otherwise. Characters who have darkvision from their ancestry or heritage can see normally. Others need to provide their own source of light so that they can see. As long as one character is holding a torch, most of the rooms are small enough that the torch illuminates the entire area.

# Encounter 3 - The Spider's Web
![[Menace at Otari-20240304230459023.webp]]

**Encounter Difficulty:** difficulty (40 xp)

At the start of the encounter, place the following foes on the map: 
 - 1: [[giant-spider|Giant Spider]]

```encounter
name: Spider's Web
party: Virtual
creatures:
- 1: [[Giant Spider]] 
```

This room contains thick webs and an enormous spider. When the heroes enter this area, read the following aloud.

> [!note]+ Read Aloud
> The tunnel continues deeper underground, eventually opening into a large chamber. Patches of glowing blue fungus cling to the ceiling and provide dim light. You can just barely make out vast strands of webbing across the floor and walls of this cavern, stretching between stalactites like shimmering curtains.

This chamber is home to a very big spider, waiting to ambush anything that wanders through its web. The webs aren’t sticky enough to make anyone who touches them unable to move, but they do slow characters down. Each square that has webbing in it is difficult terrain—terrain that’s particularly hard to move through. Moving into a square of difficult terrain costs an extra 5 feet of movement, and a creature can’t Step into a square of difficult terrain. The spider isn’t affected by its webs and can move normally throughout the chamber. 

When the players enter the chamber, the spider is in its lair in the northeast corner of the room. It does not emerge to attack until someone touches one of its webs. Anyone trying to cross through the room without touching the webs must attempt an Acrobatics skill check to carefully balance on rocks and narrow ledges. The Difficulty Class of this check is 15. If anyone fails the check, the spider senses them in the room and emerges to attack.

The fight with the spider plays out very much like the combat with the rats. As soon as someone touches one of the webs or fails an [[skills#Acrobatics|Acrobatics]] check to balance while crossing the room, call for everyone to roll for initiative—usually using Perception, or Stealth for anyone who was hiding at the time.

The heroes might avoid this fight by carefully moving around the webs. They might also flee from the spider. The spider refuses to leave this area, retreating to its webbed den in the northeast if all the heroes flee.

## Searching the Spider's Lair
Once the heroes defeat the spider, the players might think to check the spider’s lair to see if there is anything of value hidden in the webs. Ask anyone who explores the area to attempt a DC 15 [[skills#Perception|Perception]] check. If they succeed, they spot a wrapped up bundle of bones and dried skin that looks like it was some sort of small, reptilian creature (in fact, it’s a kobold, one of the creatures responsible for breaking into the basement of the fishery). The bundle also contains a few items of value. The first is a shortsword that has a small emerald in the pommel. While the sword isn’t magical, the fine craftsmanship and precious gem make it worth 5 gp if sold. There is also a healing potion that restores 1d8 Hit Points instantly when consumed.

## Avoiding the Threat
If the heroes are very careful moving around this room, they might avoid the fight with the spider entirely. They might also flee from the spider, moving past the encounter in this area without defeating it. In either case, the spider remains a threat every time the heroes pass through this chamber.

# Encounter 4 - The Barricade
![[Menace at Otari-20240304231020715.webp]]

**Encounter Difficulty:** difficulty (If the heroes quietly take apart the barricade, award them each 10 xp)

This intersection presents the heroes with a choice of which direction to go, and it includes a skill challenge that can affect their encounters further within the dungeon.

> [!note]+ Read Aloud
> After the web-infested cave, the passageway leading deeper underneath the streets of Otari appears to be mostly natural, but someone, or something, has worked to open the cavern and level out the floor, making the passage easily traveled. A crude barricade made from old wooden planks and part of a barrel blocks the entrance to a side tunnel, while the main passage continues off into the gloom.

If any hero examines the barricade, ask them to attempt a [[skills#Perception|Perception]] check. If the total is 15 or greater, they hear a faint clattering noise coming from somewhere beyond the barricade. The area is totally unlit, but characters with a torch or darkvision can tell that the tunnel opens up into a larger room ahead, with a large rectangular object in the middle.

There two ways the heroes can take apart the barricade. They can easily destroy the barrier with their weapons, but this makes a great deal of noise and alerts the monsters in Area 5 of the heroes’ approach.

They can also try to take the barricade apart quietly by rolling a DC 15 [[skills#crafting|Crafting]] or [[skills#Thievery|Thievery]] skill check. Their effort removes the barricade whether they succeed or fail, but if they fail, they make enough noise to alert the enemies in Area 5. If they succeed, they avoid alerting the monsters.

# Encounter 5 - Forgotten Crypt
![[Otari Forgotten Crypt.webp|locl]]
![[Menace at Otari-20240304231633445.webp]]

**Encounter Difficulty:** difficulty (100 xp)

At the start of the encounter, place the following foes on the map: 
 - 4: [[skeleton-guard|Skeleton Guard]] 
 - 1: [[zombie-shambler|Zombie Shambler]]

```encounter
name: Forgotten Crypt
party: Virtual
creatures:
- 4: [[Skeleton Guard]] 
- 1: [[Zombie Shambler]]
```

When the heroes enter this area, read the following aloud.

> [!note]+ Read Aloud
> Beyond the barricade, an old cavern corridor winds down into the earth, ending in an ancient burial vault lit by a strange torch with a blue flame. Alcoves line the walls, each one containing a rotten wooden coffin, while the center of the room has a raised platform holding a stone sarcophagus.

This crypt holds foul undead creatures that rise to attack any living thing foolish enough to disturb their slumber. If the players made a lot of noise breaking through the barricade in Area 4, the skeletons and zombie have already broken free from their coffins and are standing, ready for a fight. But if the heroes were quiet when they took apart the barricade, the undead are still in their coffins, and combat begins when they push aside their lids as soon as the heroes enter. In this case, each undead must use their first action on their first turn just to Stand.

> [!tip]+ Treasure
> After the fight, the heroes have time to look around the room for treasure. The torch is a special magic item called an [[everburning-torch|Everburning Torch]]that emits light constantly. Although it looks like fire, it emits no heat and can’t be extinguished!  In addition, one of the skeletons was buried with a polished shield carved to look like a roaring lion. It can be used as a shield, or the heroes can sell it for 5 gp due to its fine artistry.

# Encounter 6 - Forgotten Shrine
![[Menace at Otari-20240305133323165.webp]]

The door to this small shrine is hard to see from the passage, as the ledge is about 10 feet off the ground. A hero must succeed at a DC 10 Athletics check to climb up to the ledge. When the heroes enter the room, read the following aloud.

> [!note]+ Read Aloud
> The ancient wooden door creaks open on rusty hinges, revealing a ruined chamber. Mold and rot stain every surface. On the far side of the room is stone statue of a giant squid, its tentacles reaching toward an altar in the center of the chamber. The scum covers almost everything, but it hasn’t touched the silver bowl sitting atop the stone altar. The water in the bowl is perfectly clear.

If the players ask about the shrine, ask them to roll a DC 15 Religion skill check. If they succeed, they identify the shrine as one dedicated to Gozreh, the god of nature and the fury of the ocean. If anyone casts detect magic in this chamber, they sense the presence of magic.

The water in the silver bowl is pure and clean, but it carries a touch of Gozreh’s magic. Anyone who drinks from the bowl regains 1d8 Hit Points, but they must roll a DC 20 Fortitude save. If they fail, they feel the ocean’s waves crash through their stomach, which makes them feel sick for the next hour. They take a –1 status penalty to all d20 rolls, their Armor Class, and spell DCs until the hour has passed. If they succeed at the Fortitude save, they feel the power of the ocean surge through them. In the next hour, they can call upon the ocean’s might to fortify themself against harm. This power is a reaction that the hero can use when hit by a critical hit on an attack. This ability turns the critical success into an ordinary success (so the attack deals normal damage instead of double damage).

Each hero can get the bowl’s benefits once per day; drinking a second time in a day has no effect. The bowl loses all of its magic if removed from this shrine, but can be sold for 5 gp.

# Encounter 7 - Abandoned Storeroom 
![[Menace at Otari-20240305133640582.webp|locr|710]]
![[Menace at Otari-20240305133633980.webp]]

**Encounter Difficulty:** difficulty (80 xp)

At the start of the encounter, place the following foes on the map: 
 - 4: [[kobold-warrior|Kobold Warrior]] 

```encounter
name: Abandoned Storeroom
party: Virtual
creatures:
- 4: [[Kobold Warrior]] 
```

This room has a small group of kobolds, small reptilian humanoids. Read the following aloud.

> [!note]+ Read Aloud
> This large room looks like it was once a storeroom for a building above. At the far side, you can make out what might have been a cage or cell at some point, but it is now full of crates and barrels. Four lizardlike creatures the size of human children are clustered around the door to the cell, trying to pry it open.

These kobolds are so busy trying to pry open the cell that they don’t notice the heroes enter, but the moment someone moves within 10 feet of any of the kobolds, they turn around, snarl, and attack—have everyone roll for initiative!  The kobolds here are cunning foes, using tactics and special abilities to gain an edge. When moving, the kobolds try to flank the heroes, standing on opposite sides of a single hero. A hero who is flanked has the flat-footed condition (giving it a –2 circumstance penalty to AC) to all attacks made by the flanking kobolds.

The kobolds have a special ability called sneak attack that lets them deal an extra 1d4 damage each time they hit a hero with the flat-footed condition. A hero can stop being flanked on their turn by moving away from the kobolds, or if one of the kobolds is reduced to 0 Hit Points.

After the fight, the heroes can examine their foes. Some of the kobolds are carrying dried fish stolen from the fishery—clearly they were involved in the thefts, but more fish are missing than can be explained by four kobolds.

> [!tip]+ Treasure
> The treasure in this room is in the locked steel cell. The heroes can open this cell in either of two ways. They can use a set of thieves’ tools to roll a DC 15 [[skills#Thievery|Thievery]] skill check to pick the lock—it opens on a success! Alternatively, they can force open the door, which requires a successful DC 25 [[skills#Athletics|Athletics]] skill check. Inside the cell is a pile of old crates and a few barrels. While most of these contain long-spoiled food and stained cloth, one of them contains a small pile of treasure: 200 sp, a gold ring worth 5 gp, and a beautiful [[weapon-potency| +1 shortsword]].

# Encounter 8 - Trapped Hallway
![[Menace at Otari-20240305135100018.webp]]

**Encounter Difficulty:** difficulty (8 xp)

This short hallway contains a simple trap. When the heroes enter this hallway, read the following aloud.

> [!note]+ Read Aloud
> This short hallway has smooth walls of worked stone with a door at either end, though the door at the far end is closed. The floor is tiled with large, square stone tiles. 

When the heroes first enter this hallway, ask each player to roll a [[skills#Perception|Perception]] check. If anyone gets a 20 or higher, they notice something strange about the square closest to the northern door, as though the floor tile were a little loose, and suspect that it might be trapped. If they know the trap is there, a hero can roll a DC 18 [[skills#Thievery|Thievery]] skill check to Disable a Device, either by jamming the floor tile or by bracing the ceiling. If they succeed, they disarm the trap and the heroes can move through the hallway normally. If they fail, they can keep trying until they manage to disable the trap—but if they critically fail, the trap goes off and the ceiling falls on them!  Afterwards, the trap poses no further harm, and the heroes can continue their exploration.

> [!danger]+ Trap
> [[falling-ceiling-bb|Falling Ceiling]]

# Encounter 9 - Gold Puzzle
![[Menace at Otari-20240305135053438.webp]]

**Encounter Difficulty:** difficulty (80 xp)
 
This chamber contains a puzzle. If the heroes solve the puzzle, they can gain extra treasure and make their explorations safer! Read the following aloud when the heroes enter this room.

> [!note]+ Read Aloud
> The door to this chamber silently glides open to reveal a long room. Two stone statues of priests stand in the corners along one side of the room, facing a towering statue of a man holding out both of his hands, palms up. In front of this statue is a stone altar holding nine golden coins. A voice booms out from the statue. “In my hands I judge the value of all wealth, raising up whichever is greater. One of these coins is a deception. Find it using only two judgments and receive my blessing.”

Players curious about the statue can attempt a DC 10 [[skill#religion|Religion]] skill check. On a success, they know the statue depicts Abadar, the god of wealth and civilization.

## Coin Puzzle
The statue and the coins represent a puzzle. The challenge here is to identify which of the coins is fake. All of them look identical and they all weigh exactly the same, but the fake coin is worth less than the others. Explain to the players that when the heroes place coins in the statue’s hands, it will raise the hand that has a higher value. So if the heroes put four coins in each hand and the right hand contains the fake, the statue will raise the left hand. After two attempts, the statue asks the heroes to identify the fake.

If they fail to identify the fake coin, all the coins vanish and reappear in a random order atop the altar. If the coins are taken from the altar and not placed in the hands, they also vanish and the puzzle resets. Any real coins added to the puzzle vanish immediately, added to the vault in Area 10. The heroes can try again as many times as they’d like. Failing to solve this puzzle doesn’t prevent the heroes from completing the adventure, but it does make the next combat a bit more challenging because of the trap in Area 11.

If they succeed, the real coins fall to the floor and the heroes can take them as treasure (each is worth 1 gp), while the fake coin turns to lead. In addition, the door to Area 10 slowly swings open, which gives the heroes access to Abadar’s treasure and allows them to adjust the traps in Area 11 to work in their favor.

When running this puzzle for the players, tell the players they must decide how they want to weigh coins numbered 1 through 9, and secretly pick which number represents the fake coin. If they fail to identify the fake coin and decide to try again, pick a new number (since the puzzle resets). The players might accidentally pick the fake coin without solving the puzzle, and that’s okay—adventurers get lucky sometimes! To make this puzzle simpler, you might want to provide props, like pieces of paper with a coin drawn on each one, numbered 1 through 9.

**The Solution:** The trick to solving the puzzle is to split the coins into three groups of three coins each. By placing one group of three in each hand and leaving the third group on the altar, the players can determine which group contains the fake coin. If one hand rises, the other hand contains the fake. If neither rises, then the fake is in the three coins that were left on the altar. The heroes then need to repeat this process with the group containing the fake, by placing one coin in each hand and leaving the third on the altar. If one hand rises, the coin in the other hand is the fake. If neither rises, the coin on the altar is the fake.

# Encounter 10 - Abadar's Vault 
![[Menace at Otari-20240305225835891.webp]]

**Encounter Difficulty:** difficulty (If the heroes find the lever and set it to activate the trap, give them each 30 xp for their accomplishment.)

The door leading into this chamber is made from stone, making it impossible to break or force open. The only way to open this door is to solve the puzzle in Area 9. If the players accomplished this feat, the door is open. In that case, read the following aloud.

> [!note]+ Read Aloud
> This small chamber contains an old wooden chest emblazoned with the symbol of a key. Behind the chest is a massive contraption of gears and pulleys that looks like the inner workings of some unseen device.

This chamber holds the blessings of Abadar and the control mechanism for the traps in Area 11.

Although the room is dark when the heroes first enter, they can see tiny shafts of light coming from the wall on the north side. Tiny holes in the wall allow them to peek into Area 11. On the far side of this area is a kobold, standing watch. If the heroes listen, they can hear fragments of a quiet conversation between a few other kobolds, out of sight, talking about “the boss’s new pet” and plans for “the town above.”

> [!tip]+ Treasure
> The unlocked chest contains the blessing of Abadar. Inside is a pile of coins, a rolled-up piece of parchment, and a small glass box containing a single emerald. The coins consist of 214 cp, 22 sp, and 3 gp, plus any coins that the heroes lost to the puzzle in Area 9.  The piece of parchment is a scroll of magic missile. The heroes can sell the emerald for 20 gp.

## Control Mechanism
If a hero examines the chest, they notice a lever protruding from the back of it. Have them roll a DC 15 [[skills#crafting|Crafting]] check. If the hero succeeds, they realize that this mechanism controls a trap hidden in Area 11, though from here they can’t tell precisely how the trap is triggered or what it does.

The lever is currently set to the “disarmed” position. If the heroes set it to the “active” position, the trap in Area 11 activates.

# Encounter 11 - Kobolds and Traps 
![[Menace at Otari-20240305231503465.webp]]

**Encounter Difficulty:** difficulty (136 xp)

At the start of the encounter, place the following foes on the map: 
 - 3: [[kobold-warrior|Kobold Warrior]] 
 - 1: [[kobold-trapmaster|Kobold Trapmaster]]

```encounter
name: Kobolds and Traps
party: Virtual
creatures:
- 3: [[Kobold Warrior]] 
- 1: [[Kobold Trapmaster]]
```

This chamber holds more of the scaly lizard-people called kobolds, plus a pair of deadly traps. You need pawns for two kobold warriors and the kobold trapmaster. When the heroes enter this room, read the following aloud.

> [!note]+ Read Aloud
> The door opens with a creak, revealing a massive chamber that looks like an audience hall. On the far side, a broad set of stairs leads up to where a throne might once have been. Pillars support the high ceiling, and the ruined tatters of once decorative banners still hang from them. A decorative tile pattern centered in the middle of the room shows through the grim coating the floor.

## Deadly Traps
This encounter includes two different kinds of traps that might attack the characters—or the kobolds! The first time a hero moves next to a trapped area, have them roll a [[skills#Perception|Perception]] check. If their total is higher than the DC in the Notice entry for that trap, the hero notices the trap and can avoid that area.

If they know the trap’s location, a hero next to a trapped area can spend 2 actions to roll a [[skills#Thievery|Thievery]] check to disable that hazard. The DC of this check is listed in the trap’s Disable entry. Remember, if they critically fail, the trap goes off!

### Central Spears
The first trap in this chamber is the central spears trap. This trap is active only if the heroes set the lever in Area 10 to “active.” Otherwise, it has no effect.

This trap affects part of the floor in this chamber. If the trap is active, the first creature to step on a floor tile in the white-outlined area triggers the trap—and it’s most likely the kobolds, who don’t realize the heroes have activated the trap! The trap shoots spears from the western wall, making a ranged Strike against the first creature in each row. Unlike the earlier trap, this trap has a Reset entry—if it’s not disabled, it resets after 1 minute and fires again the next time a creature moves in the outlined area.

> [!danger]+ Trap
> [[central-spears-bb|Central Spears]]

> [!danger]+ Trap
> **Trapmaster’s Snares:** The kobold trapmaster also has traps of her own—snares she can set up as mobile traps. She sets them on the three squares located at the top of the stairs just to the east of the outlined area. Once set up, these snares can be disarmed, but they can’t be reused—once they go off, they’re no longer a threat. For more details on how these traps work, see the Spike Trap entry in the [[kobold-trapmaster|Kobold Trapmaster's]] stat block.

Two kobold warriors are stationed here, along with a kobold trapmaster. All three kobolds have orders to make sure that no one reaches the kobold lair below.

The kobolds hear the door creak as it opens, so as soon as the heroes enter the room, the kobolds are ready to fight. Roll initiative for the kobold warriors and the trapmaster separately.

The two warriors start the combat at either side of the spiral staircase leading down, but they move to block the stairs at the start of their first turn. If the heroes activated the central spears trap using the control mechanism in Area 10, the kobolds set off that trap the moment they move into the outlined area to block the stairs. See Central Spears above for more information.

The kobold trapmaster stays where she is, spending all of her actions to lay down small spike traps. If she puts down all three of her spike traps, she then uses her spears to attack the heroes from afar until they approach.

After defeating the kobolds, the players can examine their fallen foes. The kobolds’ gear is listed in their stat blocks.

The kobold trapmaster is wearing a special necklace: a simple copper chain and a cracked piece of a large eggshell. The shell is ivory in color, but it has strange green veins running through it. This piece is only about 3 inches across, but the egg it came from must have been at least 2 feet wide. Even if the heroes take this piece back to town, no one can identify what sort of creature would lay such a massive egg, although [[Tamily Tanderveil]] speculates that it might have come from a giant turtle or another reptile. The heroes have the chance to learn more about this strange egg later in the dungeon.

# GOING DOWN?
After defeating the kobolds, the heroes can take their belongings. The heroes won’t find other treasure in the room, but there’s another exit: the spiral staircase in the back of the room descends even deeper into the earth.

This is a great time for the heroes to rest and regain their spells and Hit Points before pressing onward. You should remind them of this option and encourage them to head back up to Otari to report what they discovered. They can also use this time to sell any treasure they’ve found and purchase additional gear.

If the heroes report to [[Tamily Tanderveil]] about the scaly creatures creeping around the caverns, she’s shaken by the story of what they found underneath her fishery, and she implores the heroes to press on to put an end to this menace. She can identify the creatures as kobolds, small reptilian humanoids related to dragons who live in small tribes and have a fondness for traps. She also notes the amount of fish that has gone missing is far greater than what could have been eaten by a handful of kobolds. Tamily is worried that there’s something far hungrier beneath the city, and she shares her concern with the heroes.

If the players have had a particularly hard time with the adventure thus far, you can also use this opportunity to give them a bit of help. Tamily has a pair of [[healing-potion|Healing Potion (Minor)]] stored away in case of emergency. Tamily gladly gives both potions to the heroes if they agree to continue their exploration.

# Second Level
```leaflet
id: Menace at Otari One
image: 
 - [[Menace at Otari - Floor Two.webp]]
height: 1200px
width: 60%
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

# Encounter 12 - Kobolds and Traps 
![[Menace at Otari-20240305232804296.webp]]

**Encounter Difficulty:** difficulty (80 xp)

At the start of the encounter, place the following foes on the map: 
 - 2: [[kobold-scout|Kobold Scout]] 

```encounter
name: Kobolds and Traps 2
party: Virtual
creatures:
- 2: [[Kobold Scout]] 
```

The kobolds prepared this room to defend against any intruders and stationed two of their more capable guards to defend this place. When the heroes descend the spiral staircase, read the following aloud.

> [!note]+ Read Aloud
> The stairs spiral down deep into the earth before ending in a chamber that looks like it’s been prepared specifically to defend against intruders. On one side of the room, a table has been turned on its side to provide cover, while on the other, crates and barrels have been piled up to create a second barrier.

The kobold scouts begin this encounter hidden. Ask each player to tell you their [[skills#perception|Perception]] DC: their Perception + 10. Then roll a d20 and add the kobolds’ [[skills#Stealth|Stealth]]. If the total is equal to or higher than the highest Perception DC from the heroes, the heroes don’t notice the kobolds before they attack—the room looks like it’s empty! Don’t put the pawns on the map until the kobolds attack or they move out from behind their barricades, or until a hero moves around the barricades enough to see a hiding kobold. But if any hero’s Perception DC is higher than the total of the kobold’s Stealth check, the kobolds are spotted!

Either way, ask the players to roll initiative. If any heroes have their turn before the kobolds but the kobolds successfully hid themselves, the heroes know there are foes nearby, but they don’t know where—they’ll have to Seek to find their enemies.

If a kobold’s turn starts while they’re hidden, they fire their crossbow at a hero. That character has the flat-footed condition against the attack, which gives them a –2 status penalty to AC and allows the kobold to deal extra damage from their sneak attack ability. After this ranged Strike, the kobold is no longer hidden, and the fight proceeds normally.

## Smelly Barricade
There is a makeshift barricade in the back of this room. If the heroes examine this barricade, ask for a [[skills#Perception|Perception]] check. If the total is 10 or higher, they notice a foul stench coming from the passage behind the barricade—like rotten fish and sweat. If the total is 20 or higher, they also hear a faint sound of dripping water coming from somewhere in the distance.

If the heroes take this barricade apart, ask them if they tear it down or carefully disassemble it—just like in Area 4. The creatures in the other rooms are too far away to hear any noise the heroes make, but the heroes have no way of knowing that!

# Encounter 13 - Soggy Crossroads
![[Menace at Otari-20240306121408960.webp]]

This intersection offers the heroes a choice of which way they’d like to go first.

> [!note]+ Read Aloud
> Beyond the barricade, the passageway meanders briefly. The floor descends slightly and soon becomes flooded by a shallow pool of water. The water appears to be flowing out of a passageway to the right, and a shimmering blue light in that direction reflects off of the water there. The main passageway continues to the left, over the slight depression in the floor where the water has pooled. An overpowering stench drifts from around a bend.

The light coming from Area 14 shimmers and fades, as if it were a reflection off the water. If the players stop to study it for a while, they notice faint glimmers of firelight in the reflections, but these seem further away. Heroes who stop to listen here also note a faint growling noise coming from further up the main passageway (Area 15).

# Encounter 14 - Elements of Chaos
![[Menace at Otari-20240306121528622.webp]]

**Encounter Difficulty:** difficulty (80 xp)

At the start of the encounter, place the following foes on the map: 
 - 1: [[cinder-rat|Cinder Rat]] 

```encounter
name: Elements of Chaos
party: Virtual
creatures:
- 1: [[Cinder Rat]] 
```

This chamber holds a cinder rat, a creature of pure elemental fire. When the heroes enter the room, read the following aloud.

> [!note]+ Read Aloud
> On the far side of the puddle of water is a strange chamber, crackling with magical energy. Pulsing orbs float in three of the four corners of this room. The orb in the southwest is made of brown earth and stone, whereas the one in the northeast looks to be made of glass, and is filled with a swirling cloud. The orb in the far corner holds a roaring flame; opposite that orb are shattered remains and the water that flows down the passageway to the northwest.

While the heroes might want to learn more about this room, they must first deal with the creature trapped here: an elemental made of pure fire that emerges from the fire orb as soon as the heroes enter.

**Cinder Rat:** The magic in this room summoned a small elemental creature that looks just like a rat, made up entirely of burning coal and smoldering flame. It can’t go into the water, so it’s trapped here and spends most of its time hiding within the fire orb. As soon as the first character passes through the water into this room, the fiery orb shatters and the cinder rat attacks. Have the players roll for initiative.

**Smoke and Concealed Creatures:** The cinder rat emits a cloud of smoke around itself. This gives it the concealed condition, making it hard to hit with attacks. Whenever a hero attempts a spell attack roll or Strikes the rat, first ask the player to roll a flat check—a d20 roll with nothing added. If the die comes up with a 5 or higher, the hero can attack normally. If the roll is a 4 or less, the attack misses.  The smoke also chokes nearby creatures. Anyone next to the rat must roll a Fortitude save against a DC of 22. If they fail, they choke and take a –1 status penalty to all d20 rolls, AC, and DCs for 1 round.

## Elemental Aid
After the fight with the rat, the heroes can investigate the other two orbs. Both are intact and appear to be relatively stable. If anyone casts detect magic in this chamber, they sense the presence of magic.

The air orb is filled with a swirling cloud. If anyone touches it, a rush of wind fills the room, carrying a voice like a whisper. It says, “Call upon the wind to gain my blessing and soar through the sky.” This gives the heroes a special ability they can each use once within the next 24 hours. By spending 1 action to call upon the wind, that hero can fly for their next action, moving up to 40 feet. They have to end the movement on solid ground—if they don’t, they fall and take bludgeoning damage equal to half the distance they fell. 

If the heroes touch the earth orb, they hear grinding and grumbling, like boulders falling down a hill. In this cacophony, they hear another voice that says, “Call upon the earth to gain its strength.” The heroes gain a second ability they can each use once within the next 24 hours. If a hero spends an action to call upon the earth, all their melee Strikes deal 2 extra damage from a sudden surge of strength. This bonus lasts until the start of the hero’s next turn.

The orb’s magical effects happen only once. If the players come back here again, the orbs are silent and don’t offer any benefits.

# Encounter 15 - Xulgath Cave
![[Menace at Otari-20240306122247805.webp]]

**Encounter Difficulty:** difficulty (120 xp)

At the start of the encounter, place the following foes on the map: 
 - 3: [[xulgath-warrior|Xulgath Warrior]] 

```encounter
name: Xulgath Cave
party: Virtual
creatures:
- 3: [[Xulgath Warrior]] 
```

This chamber is the den of a trio of xulgaths, which are smelly reptilian humanoids. Read the following aloud.

> [!note]+ Read Aloud
> There is an overpowering stench in this chamber, like rotten fish mixed with oily sweat. The warm, humid air only adds to the foul atmosphere. Unlike the previous chambers, this one appears to be a natural cavern, dotted with limestone stalactites and stalagmites, making it hard to see where the room ends.

The horrid stench in this room comes from the xulgaths and can make other creatures sick. Have each player roll a Fortitude save as soon as they enter the room. Anyone who gets a 19 or better can ignore the smell. A hero who fails this saving throw gets sick and takes a –1 status penalty to all their d20 rolls and DCs (including their Armor Class) until they spend an action to retch.

**Surprised Xulgaths** The reptilian creatures in the center of the room are xulgaths, reptilian humanoids who dwell underground in large family groups called clutches, fighting others for territory and resources. They’re known for their aggressive nature and their horrid stench—which they’re immune to.

These three xulgaths are bickering with each other over a piece of meat and haven’t noticed the heroes. Ask the players to roll for initiative while you roll [[skills#perception|Perception]] for the xulgaths’ initiative.

The xulgaths start off combat seated without their weapons drawn. Until they spend an action to Stand, they’re flat-footed (taking a –2 circumstance penalty to their Armor Class). They also have to spend an action to draw their clubs before they can attack. Once they’ve stood and drawn their clubs, the xulgaths move forward to attack with whatever actions they have left. The xulgaths fight until slain.

> [!tip]+ Treasure
> After the fight, the heroes can check whether the xulgaths have any treasure. If they do, they find a small bag tied to the waist of one of the foul creatures. Inside the leather pouch is a handful of strange coins, minted in some faraway kingdom deep underground—the coins show a tower inside a cave on one side and a sinister-looking elf’s head on the other. These coins amount to 38 sp and 4 gp.

## Passage into Darkness
Two passages lead out of this room, other than the way the heroes came in. One leads off the map, heading steadily down, deep into the earth. This tunnel leads into the Darklands, a vast subterranean realm deep underground filled with all sorts of deadly creatures and sinister monsters. This is where the xulgaths came from, but it’s beyond the scope of this adventure.

If the heroes travel down this way, tell them that after an hour of travel, they see no sign of the creatures that broke into the fishery and should probably turn back before getting hopelessly lost. The Darklands are for more experienced adventurers, and the players should explore the surface more before delving into these lightless realms.

The other passageway exiting this room looks like it was dug recently. This tunnel curves up and around before ending in a thin wall of loose stones and dirt. A tiny hole in the wall allows creatures to look into the room beyond (Area 17). If a hero peeks through the wall, they can see the kobolds in that area going about their daily routines. If they spend time listening to the kobolds’ chatter, the heroes overhear a few phrases, including “when we stole the egg” and “more fish for the pet.” A hero who wants to break open this wall can attempt a DC 20 [[skills#athletics|Athletics]] check. On a success, they break down the wall! On a failure, the wall remains intact, and the kobolds in Area 17 notice the sound and prepare for a fight.

# Encounter 16 - Mermaid Fountain
![[Menace at Otari-20240306122812013.webp]]

This chamber contains a devious trap. When the heroes enter this area, read the following aloud.

> [!note]+ Read Aloud
> While much of this rectangular chamber is in ruins, the center contains a fountain of pristine water with something glittering at the bottom. In the middle of the fountain is a marble statue of a mermaid, her lips pursed as if she were about to blow a kiss, or maybe whistle. Each corner of the pool has some sort of mechanism embedded in the stones, but the one in the southwest corner appears to be smashed.

## Fountain Trap
The mermaid statue in the center of the room is the center of a devious trap. When the heroes enter the room, ask each player to roll a [[skills#perception|Perception]] check—roll a d20 and add their Perception. Write down these results, because you’ll also use them to determine the heroes’ initiative. If anyone’s total is 20 or higher, they notice the trap before setting it off. If not, the heroes don’t notice anything unusual. They can act normally—but if anyone steps on any of the tiles adjacent to the pool, the trap goes off!

This trap is complex, which means it works like a monster. If the heroes trigger the trap, use the Perception results you wrote down before to determine their initiative. The fountain rolls Stealth for its initiative.

On its turn, the statue in the middle of the fountain spins around, shooting a stream of high-pressure water from its mouth. The exact effects are different each round and target random parts of the room. The trap’s Routine entry describes how this works.

**Overcoming the Trap** The heroes can overcome this trap in a variety of ways. If someone notices it before it goes off and everyone avoids the squares adjacent to the fountain, they can safely bypass the trap.

Once the trap goes off, the heroes can try to disable the control mechanisms located at each corner of the pool. If any of these stones are still active, the trap continues to act on its turn, but fortunately for the heroes, the mechanism in the southwest corner has already been destroyed (leaving only those in the other three corners to deactivate). To deactivate a mechanism, a hero must stand in an adjacent square and spend 2 actions to attempt a DC 20 [[skills#thievery|Thievery]] skill check. On a success, that mechanism is disabled.

The heroes can also physically destroy the three remaining mechanisms by attacking them individually (using the AC and Hit Points in the trap’s stat block). The fountain, being made of stone, has Hardness. Each time a hero hits a mechanism, subtract this number from the damage roll before reducing the mechanism’s Hit Points.

Once there are no functioning mechanisms left, whether the heroes have disabled or destroyed them, the trap stops working, and the heroes can continue their exploration.

> [!danger]+ Trap
> [[mermaid-fountain-bb|Mermaid Fountain]]

**Looting the Fountain** Once the trap is deactivated, a hero can easily climb into the fountain and get the coins. The water is only 1 foot deep, and while it’s very cold, it’s not dangerous. 

> [!tip]+ Treasure
> Inside the fountain are 28 cp, 8 sp, and 2 gp.

# Encounter 17 - Kobold Warren
![[Menace at Otari-20240306161538224.webp]]

**Encounter Difficulty:** difficulty (120 xp, If the heroes get the surrendered kobold to tell them about the boss, award each hero an additional 10 XP. If they get him to tell them about the dragon, increase this bonus
to 30 XP instead.)

At the start of the encounter, place the following foes on the map: 
 - 6: [[kobold-warrior|Kobold Warrior]] 

```encounter
name: Kobold Warren
party: Virtual
creatures:
- 6: [[Kobold Warrior]] 
```

This chamber houses the majority of the kobold band dwelling here. When the heroes enter the room, read the following aloud.

> [!note]+ Read Aloud
> As the door opens, the smell of rotten fish and mold wafts out. On the west side of this vast room is a large table with benches on either side. Old food scraps, dirty knives, and broken plates cover the table. Off to the east side, burrows have been dug into the wall to make small sleeping chambers filled with straw mats. This must be the kobolds’ warren!

The kobolds beneath Otari have claimed this chamber as their home. Six of them are here, but their exact location depends on the heroes’ actions in other areas. If the heroes made lots of noise breaking through the wall between this area and the xulgath den (Area 15) or by destroying the mechanisms for the mermaid fountain trap (Area 16), place all six of the kobolds in the center of the room, ready to attack, as shown on the map by the kobolds with gray outlines. If the heroes were quiet, the kobolds are relaxing when the heroes enter. Place three of them at the table, and put the other three in the sleeping alcoves, as shown on the map by the kobolds with orange outlines.

The kobolds don’t focus on any one character. Pairs of kobolds might try to flank one hero to use their sneak attack, while others use the unconventional tactics described below.

While fighting the heroes, the kobolds boast of their mighty lineage and combined power, assuring the “soft‑skin” heroes that they’ll surely come to regret trespassing into the kobolds’ domain. However, they remain just as cowardly as the kobolds the heroes have already defeated in these caverns.

Unlike all the foes the heroes have faced so far, the last remaining kobold tries to surrender.

**Unconventional Tactics** These kobolds use tactics in their fight, such as attempting to flank the heroes whenever possible. Since this is their home, they have a few other tricks they can use against the heroes. Use these throughout the fight to add variety and keep the players on their toes!

*Bed Cover:* A kobold in one of the sleeping chambers can spend 1 action to pull a sleeping mat off the floor and hide behind it. Doing so grants the kobold a +1 circumstance bonus to its AC until they move or the start of their next turn.

*Food Fight:* A kobold adjacent to the table can spend 1 action to pick up a scrap of rotting meat and throw it at a hero within 20 feet. This is a ranged Strike with a +5 to hit. If the Strike hits, it doesn’t deal damage. Instead, the hero takes a –1 status penalty to d20 rolls and DCs until they spend an action to clean the gross food off.

*Oil Attack:* The chest between two of the sleeping alcoves contains, among other things, three jars of slippery oil. A kobold must spend an action to open the chest before they can use the oil stored inside. Once the chest is open, a kobold next to it can spend 1 action to pick up and throw one of these jars of oil. This is a ranged Strike with a +5 to hit. If it hits a hero, that hero and the square they’re in are coated in slippery oil. On a miss, the oil covers the ground but not the hero. The kobold can also throw the oil at an empty square to make just the square slippery

For the rest of the fight, a hero covered in oil has trouble moving. Each time they Stride, they must attempt a DC 10 Acrobatics skill check. If they fail, they fall over and gain the prone condition instead of moving. The hero can Step, moving only 5 feet, without this check.

Anyone who moves through a square covered in oil must attempt a DC 10 [[skills#acrobatics|Acrobatics]] skill check. If they fail, they stop moving and fall.

## Kobold Surrender
When only one kobold remains, he immediately drops his weapons and surrenders to the heroes, begging and groveling for his life with a raspy, high-pitched voice. If the heroes spare the kobold, the creature promises to leave and never return, but he also quietly adds that he’s willing to share secrets in exchange for gold.

The heroes have two options if they want to learn what the kobold knows. The first is to offer the kobold the gold he requests. If they give the kobold 10 gp, he shares what he knows about the boss, and if they give him 20 gp (total, not in addition), he also shares what he knows about the dragon.

But parting with their hard-earned wealth isn’t the only solution. A hero can try to persuade the kobold to share what he knows by rolling a [[skills#Diplomacy|Diplomacy]] skill check, or they can bully the kobold with an Intimidation skill check. If a hero’s total is 10 or more, they learn about the boss, and if their total is 20 or more, they learn about the dragon, too.

**About the Boss:** The kobold says the following about their warren’s boss. “Boss Zolgran is the big leader of the mighty kobolds, and she has powerful magics to roast you alive! She’s very angry all the time and demands much from her servants. Especially now that we have a powerful new friend!”

**About the Dragon:** The kobold says the following about the dragon. “The friend is a dragon and a blessing from the gods, a sign that kobolds are destined to return to the surface and conquer the pathetic human town. As soon as the hatchling is all grown, we’ll rise up to take what is ours!”

Once the fight ends, the heroes can examine the rest of the warren. Each kobold here is wearing a copper-and-eggshell necklace like those found in Area 12.

In addition to the kobolds’ gear, there’s a chest filled with trinkets and collected valuables. It holds a bolt of fine silk cloth worth 5 gp, a painting of an adventurer on a horse worth 2 gp, a sack filled with 20 sp, a crystal decanter filled with old, sour wine (the decanter is worth 1 gp), 3 jars of oil (minus any the kobolds threw during the fight), a ladder feather token, and a healing potion.

# Encounter 18 - Dragonkeeper
![[Menace at Otari-20240306164028697.webp]]

**Encounter Difficulty:** difficulty (100 xp)

At the start of the encounter, place the following foes on the map: 
 - 2: [[kobold-scout|Kobold Scout]]
 - 1: [[Kobold Boss - Zolgran]]

```encounter
name: Dragonkeeper
party: Virtual
creatures:
- 2: [[Kobold Scout]] 
- 1: [[Kobold Boss - Zolgran]]
```

The kobolds’ boss lives in this chamber, accompanied by two kobold scouts. Place the boss on the throne, and put the two scouts at the bottom of the stairs. When the heroes enter the room, read the following aloud.

> [!note]+ Read Aloud
> A gaping pit opens in the floor in the center of this large, natural chamber. On the far side, a ledge overlooks the entry. Atop this ledge is an ornate stone throne that looks entirely out of place for this room. A regal kobold wearing an oversized crown made of fish bones sits atop the throne. “Kill the intruders!” she snarls at the two kobold guards at the foot of the stairs.

Things have been rough for the band over the past few years, but their fortune changed when they got the chance to steal a dragon’s egg! With the precious treasure spirited away to the kobold hideout, the boss, Zolgran, has devised grand plans for her band now that it has a dragon patron. After raising the dragon, she hopes to use the beast to subjugate the entire region and finally reclaim the town of Otari for her people. Fortunately for the citizens of Otari, the baby dragon isn’t fully grown yet—but the new hatchling is always hungry. That’s why the band moved into these caverns, and why they’ve been raiding the Otari Fishery. Without a steady supply of food, the young dragon might turn to having kobolds for a snack!

**The Pit:** This pit in the center of this chamber is 20 feet deep. Heroes attempting to leap across the pit must spend 2 actions and attempt a DC 15 [[skills#athletics|Athletics]] skill check. If they fail, they fall down into the pit, taking 10 damage. A hero in the pit has to climb out, which requires them to succeed at two DC 10 [[skills#athletics|Athletics]] skill checks in a row.

The dragon isn’t yet tame enough to do the boss’s bidding, so the kobolds have kept the creature in a nearby mushroom cave, safely tucked away from rest of the band. Unfortunately for the heroes, the boss and her guards are more than dangerous enough on their own.

The two kobold scouts move to either side of the pit to block the heroes from getting to their boss, but they chase any hero who manages to get past them. Meanwhile, Zolgran assaults the groups using spells! On her first turn, she spends all 3 actions to cast magic missile. This spell fires three missiles, which she aims at the closest three heroes to deal 1d4+1 force damage each. If anyone gets past her guards, she casts fear on that hero, hoping to make them run away. If she runs out of 1st-level spells to cast, she casts ray of frost. Zolgran attacks with her staff only if she runs out of other options.

The ledge the throne sits on also serves as Zolgran’s personal resting area. A straw pallet rests here, like those in Area 17. Heroes who examine the out-of-place throne can match its design to the decor of Area 11 on the floor above, which is where the kobolds took it from. Most importantly, there’s an old, rusty iron chest. Atop this chest is a large, broken eggshell that’s almost 2 feet tall. Ivory in color, the shell has green veins running through it, and it’s clear that the pieces of eggshell worn by the boss and many of the kobolds here came from this egg. Although it’s still not entirely clear what was inside, there are large claw marks, bigger than any kobold could make, down one side of the shell.

> [!tip]+ Treasure
> The chest is locked, but Zolgran has the key tied at her waist. If the heroes don’t find the key, a character with a set of thieves’ tools can attempt a DC 25 [[skills#Thievery|Thievery]] skill check, and the lock opens on a success! Inside the chest are some of the more interesting treasure that the kobolds found during their exploration of these tunnels. The treasure includes a silver bracelet with a fish pattern worth 5 gp, a very old map that depicts some strange-looking dungeon, a smoking sword with a dwarven face carved into the hilt, a wand of heal, 2 healing potions, and a hat of disguise.

## Are We Done?
If the PCs defeat the kobolds and their boss, they might return to the Otari Fishery. If they decide not to explore any further, the adventure can easily end here. [[Tamily Tanderveil]] happily pays the heroes for completing the job, even if she does wonder what was in that mighty egg. She’s also curious as to what happened to all the fish, as the kobolds couldn’t possibly have eaten it all, but such mysteries will have to wait for another day.

In this case—or if the heroes don’t end up fleeing from the next encounter—the young dragon in the kobolds’ care survives! Eventually the dragon leaves the cave and starts hunting in the countryside, becoming a menace for years to come. Fortunately, dragons grow in power very slowly. The heroes might find themselves chasing down this beast in the future! If they’ve gained a few more levels, they’ll have an edge in the fight.  More likely, though, the players might push on to explore the next cavern—Area 19. That encounter is the most dangerous fight of the entire adventure, so feel free to encourage the heroes to rest if they’re out of limited resources, such as spells.

# Encounter 19 - Mushroom Grotto
![[Menace at Otari-20240306165033051.webp]]

**Encounter Difficulty:** difficulty (100 xp)

At the start of the encounter, place the following foes on the map: 
 - 1: [[green-dragon-wyrmling|Green Dragon Wyrmling]]

```encounter
name: Mushroom Grotto
party: Virtual
creatures:
- 1: [[Green Dragon Wyrmling]] 
```

This cavern is the home of the wyrmling green dragon hatched by the kobold band. When the heroes enter the room, read the following aloud.

> [!note]+ Read Aloud
> Towering yellow mushrooms cover the floor of this vast cave, some reaching over ten feet in height. They seem to emit a pale light, giving the entire chamber an eerie glow. Shattered remnants of barrels—torn open with their contents nowhere to be seen—lay scattered around the base of the mushrooms. Somewhere off on the far side of the chamber, something stirs, and a faint snarl comes from the shadows.

The towering mushrooms block the view of the far side of the room, but the heroes might try to climb the mushrooms to get a better look. Due to their slippery caps, climbing a mushroom is a tricky task, requiring a successful DC 20 [[skills#athletics|Athletics]] skill check.

Give the heroes a chance to prepare themselves, but when one of them climbs atop a mushroom or reaches the center of the room, the dragon leaves their lair in the far corner to attack. Place the dragon pawn on the map and read the
following aloud.

> [!note]+ Read Aloud
> A bright-green dragon leaps into view, and although the beast isn’t much larger than you, large leathery wings and snapping jaws make the hatchling look like an ancient wyrm. The creature gazes at you with cunning eyes and snorts a cloud of yellow vapor. With a fierce roar, the dragon charges forward to attack!

Dragons are one of the fiercest and most challenging types of opponents in the game, and while only a wyrmling, this one is still a deadly threat. The dragon uses many abilities in the fight against the heroes and is fiercely territorial of the cave. However, the kobolds have trained the hatchling to stay in this area, so the heroes can retreat if they need to recover.

The dragon's breath weapon could spell doom for the party, but the wyrmling doesn’t have much experience using their breath weapon effectively. The dragon doesn’t try to catch all the heroes with this attack, but focuses on just the nearest opponent. Once the dragon uses the breath weapon ability, they can’t use it again for 1d4 rounds or until they get a critical hit on a Strike.  The dragon’s favorite tactic (and most reliable attack) is to Stride forward and then use Draconic Frenzy, an ability that allows the beast to spend 2 actions to make two claw Strikes and a tail Strike in any order.  The dragon also has a special Twisting Tail reaction. When someone within 10 feet tries to move, the dragon can spend their reaction for that round to make a tail Strike (but with only +10 on the roll instead of the usual +12) against that foe. If the dragon hits, the target stops moving and loses the rest of that action (though the target can use another action to move again if they want).

## Dragon's Lair
The ledge in the northeast corner of the room holds the treasure the kobolds offered to the dragon. The heroes can catch a glimpse of this treasure even from the floor, but anyone who wants to climb up to the ledge must succeed at a DC 15 [[skills#Athletics|Athletics]] skill check. 

> [!tip]+ Treasure
> Atop the ledge sits a small chest and a huge pile of coins. There are 429 cp, 63 sp, and 18 gp in this vast pile. There’s also a single giant emerald atop the heap that vaguely looks like the dragon’s eye, which can be sold for 20 gp.

## Tunnel to the Surface
The back of the mushroom grotto has a tunnel leading to a long, winding passageway. If the heroes explore this way, they find that it gently slopes upward, and they can feel a fresh breeze coming from this direction. After following this path for over an hour, they emerge from a small cave in a ravine outside the town of Otari. Remnants of a camp around the cave’s entrance indicate that the kobolds had stayed here for some time before heading under the town to work their mischief.

# Wrapping Up
With a lot of courage and a bit of luck, the adventurers hopefully survived their encounter with the kobolds and their “pet,” returning to the town as triumphant heroes! [[Tamily Tanderveil]] feels truly relieved to learn that the threat is gone, especially after learning just how dangerous it was.