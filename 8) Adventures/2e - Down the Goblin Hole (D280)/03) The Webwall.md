![[Pasted image 20230705160337.png]]

**Encounter Difficulty:** Severe (155 xp)

The cave tiles represent the flat bottom of the ravine. Three sides of the ravine are so steep they cannot be climbed. The fourth side is represented by the webbed tile. This tile represents a wall that is perpendicular to the other tiles—the encounter begins with the player characters climbing down this near vertical cliff. 

At the start of the encounter, place the following foes on the map: 
 - 2: [[goblin-warrior|Goblin Warrior]] W
 - 2: [[goblin-war-chanter|Goblin War Chanter]] H

```encounter
name: Hangman
party: Chaos Scar
creatures:
- 2: [[Goblin Warrior]] 
- 2: [[Goblin War Chanter]]
```

There is also a hidden pit at the bottom of the cliff (marked by Xs). 

When any character comes within four squares of the bottom of the cliff, the following foes emerge from shadowy holes in the cliff wall. A character who ends his turn within four squares of the cliff bottom can spot the hidden enemies with a DC15 [[skills#Perception|Perception]] check. 
 - 2: [[deathjump-spider|Deathjump Spider]] D
 - 2: [[spider-swarm|Spider Swarm]] S

```encounter
name: Hangman
party: Chaos Scar
creatures:
- 2: [[Deathjump Spider]]
- 2: [[Spider Swarm]]
```

When any character reaches the bottom of the cliff, the following foes emerge: 
 - 4: [[goblin-warrior|Goblin Cutter]]

```encounter
name: Hangman
party: Chaos Scar
creatures:
- 4: [[Goblin Warrior, Goblin Cutter]] 
```

> [!danger]+ Trap
> # Hidden Pit *Hazard 5*  
> [mechanical](rules/traits/mechanical.md)  [trap](rules/traits/trap.md)  
> A covered pit is hidden near the center of the room. Timber covered with flagstones is rigged to fall when a creature walks on it, dropping the creature into a 10-foot-deep pit.
> 
> **Complexity** Simple
> **Stealth** DC 21
> **Disable** [[skills#Thievery|Thievery]] DC 20 to safely trigger the trap and cause the the false floor to fall to the bottom of the pit.
> **Trigger**: A creature walks onto the trapdoor.
> 
> **AC** 19 , **Fort** +9
> **Trapdoor Hardness** 12, **Trapdoor HP** 50 (BT 25)
> **Immunities** critical hits; object immunities; precision damage 
> 
> **Effect** The triggering creature falls in and takes `dice: 1d6` falling damage and is prone. That creature can use the [Grab an Edge](rules/actions/grab-an-edge.md) reaction to avoid falling.
> **Reset** Creatures can still fall into the trap, but the trapdoor must be reset manually for the trap to become [hidden](rules/conditions.md#Hidden) again.  

# Tactics
Keep one warrior or cutter adjacent to the war chanter at all times so he can use lead from the rear to deflect attacks. 

The warriors and cutters stay at the bottom of the cliff, moving enough to take advantage of their great position ability as they hurl javelins up at the characters. If they run out of javelins, they form a defensive line and await the characters. If possible, they stay within the hex hurler’s vexing cloud. The cutters join the fight as soon as a character reaches the bottom— and that includes falling into the pit. They try to swarm the characters and set up flanking attacks for any surviving warriors or spiders. 

The spiders can move freely on the webs thanks to their climb speed, so they can position themselves to best attack the characters. They do not use death from above attacks while on the cliff wall but may use those attacks on characters who have reached the bottom of the ravine. 

While characters cling to the wall, they fight at a severe disadvantage against the spiders. If they jump down to escape the spiders, the goblin cutters rush out, making this an out-of-the-frying-pan-and-into-the-fire encounter. As with the [[02) Goblin Ambushers|Goblin Ambushers]]  encounter, the characters could wind up badly outnumbered, but most of their foes are minions. 

> [!tip]+ Treasure
> There’s a leather pouch in the slime pit, dropped there by some luckless adventurer. It contains 10 gold coins and a *healing potion (lesser)*. A character who searches the pit finds the pouch with a DC 9 [[skills#Perception|Perception]] check. A character who falls into the pit finds the pouch through dumb luck if you roll a 6 on 1d6.

# Features of the Area 
**Illumination:** While the steep-sided ravine is in shadow, it’s still considered brightly illuminated. 

**Hole:** The hole leads to the cavern under the ravine. 

**Web-Covered Cliff:** Moving along the cliff requires an [[skills#Athletics|Athletics]] check (DC10) to move at half speed. Characters who are pulled or pushed off the cliff or who are knocked prone will fall unless they make a [[grab-an-edge|grab and edge]] action. The cliff is 35 feet tall; a character who falls takes 1d10 damage per 10 feet fallen (but see Pit Trap). 

**Pit Trap:** The pit at the base of the cliff is a false floor pit trap. Characters who land in the pit take reduced falling damage—1d6 per 10 feet fallen instead of 1d10—because the deep slime at the pit’s bottom cushions the landing somewhat (but also makes the walls more difficult to climb). This pit can’t be disarmed or disabled.