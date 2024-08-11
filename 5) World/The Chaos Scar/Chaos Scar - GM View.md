

```leaflet
id: Chaos-Scar-GM-View
image: 
 - [[Chaos Scar - GM View.webp]]
bounds: [[0, 0], [1060, 1600]]
height: 1000px
width: 95%
lat: 530
long: 800
minZoom: -1.5
maxZoom: 18
defaultZoom: 0
zoomdelta: 0.8
unit: miles
scale: 0.035
darkMode: false
```

# Wilderness Travel
First have the party determine what route they are taking. They may take the direct route, they may choose to follow the road for a while first.

![[Travel Table.png]]

As the party travels along their path (or assumed path) use the following costs against their miles per day:
- Road - No adjustment
- Open ground - No adjustment but can become lost
- Forest, small - Cost 2 miles to travel through; any forest square with open ground adjacent
- Forest, large - Costs 3 miles to travel through; any forest square surrounded by other forest
- Exploration Mode - Costs an additional mile to the normal travel rate; party is taking the time to thoroughly explore their surroundings
- Stealth Mode - Costs an additional mile to the normal travel rate; party is taking the time to try and not be noticed

## Getting Lost
It is assumed that the party has a map similar to the player's map handout so getting lost is really only an issue when they can't see their surroundings - in deep forest or at night. In these cases require a moderate [[skills#Survival|Survival]] check each square traveled. A failure results in them going off course `dice: 1d6` to the 1-3: left or 4-6: right. Once they are in a place where they can see clearly again, they can easily get back on course, though.

## Encounters and Events
At 5, 10, 15 and 20 miles roll `dice: 1d6`. If the party is in Stealth mode, subtract 1 from the roll. If the party is in Exploration mode, add 1 to the roll but they gain surprise. Something exciting occurs on 5 or 6. The next part will detail wilderness events in the Scar.

## Finding Things
If the party is in Exploration mode they automatically find any encounter location if they are in the square adjacent to it. Otherwise they need to enter that location's square in order to find it.

## Camping
It is assumed the party are experienced enough adventurers to competently set up a camp with a watch in the wilderness. There are two event checks over the night. However a hard [[skills#Survival|Survival]] check may allow their camp to be considered as being in Stealth mode for the check and a hard Fortitude check allows a double watch that counts them in Exploration mode.

## Travel at Night
If the party decides to travel at night they can get up to an additional 15 miles of movement. However for each 5 miles they use they must make an easy then moderate then hard Fortitude check or become [[conditions#Fatigued|Fatigued 1]] for each failure. They also lose the benefits of a long rest and can become lost. There is an event check each 5 miles.

# Events and Encounters 
Roll a `dice: 1d6`; on a 1-3 it is an event, on a 4-6 it is an encounter. However pacing should be more of a factor for deciding things. If the party has already had several major events or encounters, just throw one of the "non-events" at them to keep them on their toes. Similarly, while a numbered list is provided for the encounters you should really just choose one that is based off a location they are close to or is of an appropriate challenge.

## Events `dice: 1d10`
1.  Evil presence. Have a random member of the party make a Will saving throw. No matter the result, tell them they sense an evil presence watching them.
2.  Whispers of the Shard. Choose a random member of the party. Everyone else in the party hears a faint whisper to kill that party member in order to receive a great reward. There is no reward.
3.  Twisted wildlife. An animal with some twisted feature crosses their path, like a rabbit with no fur and transparent skin. It is harmless otherwise.
4.  Blight. The party walks through an area where all the plant life is dead and no animals can be seen or heard.
5.  Strange fruit. A nearby plant bears fruit that is moving. The fruit resembles something organic - embryos hanging from tress, eyeballs in a berry bush, etc. The fruit IS organic and bleeds if cut. It dies the moment it is picked. It has not benefits and is sickening (and just sick) if eaten.
6.  Non-euclidean river. The party encounters a river that is heading their direction. If they follow it, they end up back where they first encountered the river 1 mile later even though it had been going straight the entire time. They need to lose sight of the river in a perpendicular direction to escape the loop.
7.  Storm. The skies darken over 1 mile of movement and then a massive storm breaks out for the next `dice: 1d4` miles. Do the following skill challenge:
	-  For each mile of stormy weather make a check. Each failure costs 1 extra mile of movement.
	-  The road is muddy and slippery. Everyone makes a moderate [[skills#Athletics|Athletics]] check. If anyone fails someone else can make a hard [[skills#Athletics|Athletics]] check to pull them along. Any unresolved failures counts as a failure for this phase.
	-  The skies darken and it becomes black as night save for lightning strikes. Moderate [[skills#Nature|Nature]]  or hard [[skills#Perception|Perception]] 
	-  It is cold and wet. Everyone makes a moderate [[skills#Survival|Survival]] check. If anyone fails someone else can make a hard [[skills#Medicine|Medicine]] check to help them. Any unresolved failures counts as a failure for this phase.
	-  Lightning strikes at a party member causing them to suffer `dice: 3d6` damage. A hit counts as a failure.
8.  Wide river crossing. Each party member makes an moderate [[skills#Athletics|Athletics]] or [[skills#Nature|Nature]] check to cross or one party member can make a Hard check in a creative way to get them across (like building a raft or finding an easy ford.) Any failures result in the loss of 1 mile.
9.  Steep ridge. One of the ridges of the Scar jut up suddenly and stands in the party's way. Treat like a river for purposes of getting by it.
10.  Rain. It rains on the party for the next `dice: 1d20` miles. At the end of the day either one person can make a hard [[skills#Nature|Nature]] or [[skills#Medicine|Medicine]] check to cover for everyone, or everyone makes a moderate [[skills#Survival|Survival]] check. Failure results in one level of [[conditions#Fatigued|fatigue]] the next morning.

## Encounters
First, when there is going to be an encounter, determine if the party is within two miles of any active adventure locations. If they are then you can usually use the first encounter from that adventure as a wandering monster group. If the adventure doesn't really lend itself to its residents wandering around then just choose another type of encounter.

If you'd like to roll for encounters, use this chart. It mostly references material in the various adventures for statistics. Other items use encounters from other adventures which I'll reference.

1. A band of Fireclaw (4 [[Kobold-Warrior|Kobold Warrior]]) are looking for someplace else to go. Their chieftain is weak and they don't think the clan will survive. They'll offer their services for food, shelter and four gold a week. ([[1F - Some Assembly Required (D208) C]])
2. Six [[Lizardfolk-Scout|Lizardfolk Scout]] are attacking a group of four [[Lizardfolk-Defender|Lizardfolk Defender]]. The Defenders are cultists of Tiamat who the Scouts are trying to chase off. (Battle of the Witchlight Hermitage. Dungeon 191.)
5.  Two [[Duergar-Taskmaster|Duergar Taskmaster]]and two [[Duergar-Sharpshooter|Duergar Sharpshooter]] in search of victims. ([[2D - The Hammer Falls (D179) C]])
6.  A [[Goblin-War-Chanter|Goblin War Chanter]], four [[Goblin-Warrior|Goblin Warrior]] and four [[Goblin-Commando|Goblin Commando]] on their way to a raid outside the Wall. They don't necessarily notice or care about the party. ([[2E - Down the Goblin Hole (D280) C]])
7.  Four [[Zombie-Shambler|Zombie Shambler]] and a [[Zombie-Brute|Zombie Brute]]. Not necessarily from the adventure site - you never need a reason for zombies. ([[2C - Dead by Dawn (D176) C]])
8.  A [[Hobgoblin-General|Hobgoblin General]] and four [[hobgoblin-warrior|Hobgoblin Warrior]] are on their way back to Slaark's Crown. They aren't looking for a fight and if the party seems shifty enough might try to recruit them. ([[2H - Slaark's Crown (D220) C]])
9.  A bound half-orc scavenger known as [[Fulgrim]] is being escorted by three [[hobgoblin-warrior|Hobgoblin Warrior]] from their lair to the Crossroads. He'll cry for help if he sees the party and promise a reward. He has nothing left. ([[2G - The Crossroads (D176)]])
10.  Bugs! Four [[Centipede-Swarm|Centipede Swarm]] are crawling forth from the old temple of Moradin to do gods know what. ([[2G - The Crossroads (D176)]])
11.  A trader and his two sons are bound and being dragged along by four [[Kobold-Scout|Kobold Scout]] and four [[Kobold-Warrior|Kobold Warrior]]. ([[3C - The Wayward Wyrmling (D182) C]])
12.  Death from above! Two [[Goblin-Commando|Goblin Commando]] riding [[Giant-Bat|Giant Bat]] swoop down on the party. ([[4A - Glowstone Caverns (D177)]])
13.  A Kenku Inciter, 5 Kenku Tribals and a Kenku Wing Mage are looking for someone to rob. The party may or may not seem like good pickings. They won't kill if they don't have to. ([[4D - Stormcrow Tor (D169)]])
14.  Four [[gnoll-hunter|Gnoll Hunter]], a [[gnoll-warfang|Gnoll Warfang]] and 2 [[gnoll-deathpledged|Gnoll Deathpledged]] are leading two [[rust-monster|Rust Monster]] to Vanguard Tower for sale. They don't want trouble. ([[4C - Vanguard Tower (D182)]])
15.  The encounter group from #8 in this list is fighting with the encounter group from #10. Slaark and Urgog do NOT get along.
16.  "The Penis is evil! The Penis shoots Seeds, and makes new Life to poison the Earth with a plague of men, as once it was. But the Gun shoots Death and purifies the Earth of the filth of Brutals. Go forth, and kill! Zardoz has spoken." ([[7C - Head in the Clouds (D184)]])
17.  2 Slug Rabbits and 3 Tongue Wolves wander from their grove. ([[8C - The Star-Touched Grove (D219)]])
18.  The Banites are collecting sacrifices. 1 Tainted Warpriest, 2 Tainted Scouts and 2 Warhounds are attacking a band of 4 [[goblin-quickblade|Goblin Quickblade]]. ([[9A - Heart of the Scar (D197)]] & [[2E - Down the Goblin Hole (D280) C]])