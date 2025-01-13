---
title: The Shattered Mind
adventure_status: Done
adventure_level: 9
total_xp: 460
completed_xp: 460
---
# Setup
[[4) Bestiary/party-npc/Chendra]] informs the players that Zeta's mind is fractured between her true self and the lingering Chaos corruption. To cure her, they must venture into her dreamscape and help her regain control over her mind. The dreamscape represents Zeta's mental state: a surreal and shifting landscape where memories, emotions, and chaos collide.

The players will be able to enter Zeta’s mind during her next sleep cycle, but [[4) Bestiary/party-npc/Chendra]] warns them—if they fail, the corruption might solidify its hold, making her more unstable or even losing her entirely to Chaos.

## The Forest of Forgotten Memories
**Encounter Difficulty:** 
- [x] Moderate (80 XP)

![[Forest of Forgotten Memories.webp|500]]
[[Forest of Forgotten Memories.webp|Show to Players]]

Creatures:
 - 2: [[Memory Wraith]] W

```encounter
name: Forest of Forgotten Memories
party: Chaos Scar
creatures:
 - 2: [[Memory Wraith]]
```

The forest is dark and oppressive, with towering trees made of shifting, ethereal light. Each tree holds fragments of Zeta’s memories, some clear and peaceful, others twisted and dark. The wind carries the distant sound of laughter, weeping, and indistinct whispers. Several of the trees are blackened and warped, their branches twitching unnaturally. The players must navigate through this forest, discerning which memories are key to helping Zeta recover. They encounter strange creatures, figments of her corrupted memories, who try to confuse and attack them. Players may also attempt to "restore" corrupted trees (via skill checks like Arcana, Religion, or Deception) to reveal hidden truths about Zeta’s past.

> [!note]+ Read Aloud  
> As you step deeper into the forest, the trees seem to whisper in familiar voices—voices you’ve heard from Zeta before. The air feels heavy, the ground soft beneath your feet like you’re walking on memories themselves. Suddenly, the wind picks up, and figures form in the mist between the trees. Shadowy humanoid shapes emerge, shifting and distorting like smoke, moving toward you with purpose. 

## Tactics
The [[Memory Wraith|Memory Wraiths]] are creatures formed from Zeta’s darkest, most suppressed memories. They move through the trees, using their incorporeal nature to slip in and out of sight. These wraiths are not bound by traditional tactics but seem to react to the party’s emotions—targeting those who show the most fear or confusion first. They use **Telepathic Assault** to disorient their targets.

## Features of the Area
The forest is filled with obstacles and hazards tied to Zeta’s memories, creating a confusing and treacherous terrain.

**Flickering Memories (hazard):** Some trees project illusory scenes from Zeta’s past. If a player interacts with these trees, they must make a [[skills#Perception|Perception]] check (DC 26) to discern reality from illusion. Failure may result in the player becoming **Flat-Footed** for 1 round due to disorientation.  

**Twisted Branches:** The corrupted trees reach out unnaturally, grabbing at the players. Any player moving more than 10 feet in a round must make a Reflex save (DC 24) or be [[entangle|Entangled]] for 1 round.  

**Dim Lighting:** The forest is cloaked in dim light, and visibility is poor. Without low-light or darkvision creatures beyond 10 feet have concealment

**Corrupted Memory Nodes:** Occasionally, players will come across glowing spheres of chaotic energy. These represent key moments in Zeta’s corrupted memories. If destroyed (AC 18, 10 HP), they weaken the wraiths, lowering their defenses for a round following the node's destruction (reduce AC by 2).

## The Hearth Room
**Encounter Difficulty:**
- [x] Moderate (100 XP)

Creatures:
 - 2: [[greater-shadow|Greater Shadow]]
 -  1: Corrupted Zeta’s Shadow

```encounter
name: The Hearth Room
party: Chaos Scar
creatures:
 - 2: [[Greater Shadow, Twisted Reflection]]
 - Corrupted Zeta, 175, 26, 19
```

As the players exit the Forest of Forgotten Memories, they find themselves in front of a cozy-looking tavern, the **Stumbling Giant**. Inside, the air smells faintly of wood smoke, and the familiar warmth of a hearth greets them. However, something is wrong. The room feels *off*, as though it's detached from reality. Shadows seem to dance unnaturally, and seated in the corner by the fireplace is Zeta’s shadowy form, rocking back and forth in a chair, muttering to herself. Zeta’s fears manifest here as shadowy figures that must be confronted. The players must either fight them or find a way to calm them (Diplomacy or Intimidation). Once defeated or calmed, the hearth reveals a door leading to the next area.

> [!note]+ Read Aloud  
> The tavern looks inviting, but as you step inside, you feel a distinct unease. The hearth’s flames flicker an unsettling purple, casting distorted shadows on the walls. In the corner, a figure sits in a rocking chair—Zeta’s shadowy outline, barely visible against the dim glow. She speaks in broken whispers, though the words seem wrong, as if spoken in reverse or in a language that hurts to hear. Suddenly, from the flames, two twisted reflections of yourselves emerge, their forms fluid and warped, and they turn their hollow eyes toward you.

![[Stumbling Giant - Zetas Mind.webp|500]]
[[Stumbling Giant - Zetas Mind.webp|Show to Players]]

There are several options to defeat this encounter:
1. **Appealing to Zeta’s True Self:**
   - **[[skills#Diplomacy|Diplomacy]] or [[skills#Intimidation|Intimidation]] (DC 26):** Players can attempt to calm Zeta’s Shadow by speaking directly to the real Zeta, buried deep inside. Successful checks will reduce Zeta’s chaotic influence, making the Twisted Reflections lose their power (reducing their damage and AC by 2). If the players succeed in 3 such checks, Zeta’s Shadow will dissipate without needing to defeat her in combat.
2. **Dispel Chaos from the Hearth:**
   - **[[skills#Arcana|Arcana]] or [[skills#Occultism|Occultism]] (DC 28, 3 successes):** Players can use magic or knowledge of chaotic energies to dispel the corruption from the hearth. Doing so neutralizes Zeta’s influence and causes the Twisted Reflections to vanish, ending the encounter. 
   - Failure on the dispel attempts causes the fire to flare up unpredictably, dealing `dice: 3d6` chaotic energy damage to the party (Reflex save DC 28 for half damage).
3. **Restore the Room’s Memories:**
   - The tavern and the hearth are tied to Zeta’s memories of comfort, warmth and friendship. Players can interact with objects around the room to restore those memories. Successful [[skills#Perception|Perception]] or [[skills#Society|Society]] checks (DC 26) reveal clues and reminders about Zeta’s past, such as a favorite book, her teddy bear, the amor or weapon given to her by the players or some other trinket. Placing these items near Zeta’s Shadow will weaken the chaotic influence, allowing the players to pacify her without combat.
   - After finding 3 objects, Zeta’s Shadow calms, and the encounter ends peacefully.

Should they resort to combat the creatures behave according to the tactics section below.

## Tactics
The **Corrupted Zeta’s Shadow** remains seated by the hearth for most of the encounter, acting as the anchor of the room’s chaotic energy. She mutters spells or unleashes minor chaotic effects while the **Twisted Reflections** actively engage the party.

- **Zeta’s Shadow** acts as a passive combatant, using subtle effects from her chair to alter the battlefield:
   - **Chaotic Whisper (1 action, 1/round):** She speaks in broken whispers, forcing all players to make a Will save (DC 28). On a failure, the player becomes **Confused** for 1 round.  
   - **Flame Warp (2 actions):** The purple flames of the hearth flares up, burning one player with chaotic flames `dice: 3d12` cold damage (DC 29 basic Reflex save).
   - **Dream’s Influence:** At the start of the second round, Zeta’s Shadow summons an **illusory figure** from the players' past, manifesting as a temporary hazard. This figure distracts the player (Will save DC 28 or be [[conditions#Frightened|Frightened 2]]).

**Combat Victory Condition:** To fully defeat the encounter, players must destroy the **Twisted Reflections** and sever Zeta's connection to the hearth. This is done either by dispelling the fire or defeating Zeta’s Shadow. Once she is defeated or pacified, the room returns to normal.

## Features of the Area
**Purple Flame Hearth:** The hearth is the focal point of the room. Its chaotic fire influences the entire encounter, causing unpredictable environmental effects. The flame can be dispelled (see above) or manipulated with magic, though doing so carelessly can cause it to lash out at the players.

**Dim Lighting and Shadows:** The lighting is dim, with shadows warping and shifting. Any ranged attacks made beyond 20 feet have a 20% miss chance due to the swirling shadows.
  
> [!tip]+ Treasure  
> Upon successfully pacifying or defeating Zeta’s Shadow, the hearth flame dies down, leaving behind a flickering purple crystal shard which is twisted on itself. This shard is a Twisted Shard.

## The Labyrinth of Chaos
**Encounter Difficulty:** 
- [x] Moderate (80 XP)

The players step through the door in the hearth and into a twisting, reality-warping labyrinth. The walls ripple with chaotic energy, constantly shifting color, texture, and even material. Pathways open and close without warning, and gravity seems to twist, making every step uncertain. The labyrinth is not just a test of physical prowess, but of wit, memory, and insight. The players must find their way through the maze. At key points, they will encounter riddles and symbols representing choices Zeta once made or was forced into. 

> [!note]+ Read Aloud  
> You step through the door and into a twisting corridor that seems to stretch on forever. The walls, floor, and ceiling constantly change, sometimes feeling like stone, then warping to wood or glass. Your senses are disoriented as gravity feels like it shifts, pulling you to the side or up toward the ceiling. The air is thick with chaotic energy, and it hums with a low, maddening frequency. Ahead, the corridor splits into several paths, each more confusing than the last. You get the distinct sense that this place is alive, testing you, and waiting for you to make a mistake.

## Puzzles and Challenges
The **Labyrinth of Chaos** contains a series of mind-bending puzzles, each tied to Zeta’s fragmented memories and chaotic nature. Failure to solve these puzzles can summon creatures, activate traps, or further warp the labyrinth.

### Puzzle 1: The Shifting Hall of Mirrors
As the players move deeper into the labyrinth, they find themselves in a hall lined with mirrors, all reflecting distorted and surreal images of themselves. Some mirrors show their reflections, while others reflect moments from Zeta’s past, flickering like broken memories.

> [!note]+ Read Aloud  
> The hall before you is lined with mirrors on every side, reflecting distorted images of yourselves. Some mirrors show you as you are, while others reflect memories of Zeta—a child lost in a chaotic storm, moments from her life that flicker and twist like dreams. As you step forward, the reflections move, blocking your path or leading you astray.

**Puzzle:** The players must navigate the hall by matching the reflections of Zeta’s life in the mirrors with what they know of her story. This requires a [[skills#Society|Society]] or [[skills#Perception|Perception]] check (DC 30) to discern the real memories from the false ones and follow the correct path.  Three correct selections allows the players to continue through the maze and move out of the Shifting Hall of Mirrors.
**Failure:** If the players choose the wrong path or make an incorrect choice, they activate a **Mirror Trap** (Reflex save DC 24 to avoid `dice: 3d6` slashing damage from shards of glass). Additionally, two **Swarms of Mirror Beatles** emerge from the shattered mirrors to attack.

![[Mirror Beatle Attack.webp|500]]
[[Mirror Beatle Attack.webp|Show to Players]]

```encounter
name: Mirror Swarm
party: Chaos Scar
creatures:
 - 2: [[Hellwasp Swarm, Mirror Beatle Swarm]]
```

### Puzzle 2: The Gravity Well
A wide chamber opens up, with the walls, ceiling, and floor constantly shifting. In the center of the room, an orb of swirling chaotic energy hovers, distorting the gravity around it. Players feel themselves pulled in different directions with each step.

> [!note]+ Read Aloud  
> The room before you is dizzying, as the very gravity here seems to shift with each step. In the center hovers an orb of pure chaotic energy, pulling and pushing at the world around it. It’s clear that you’ll need to find a way to stabilize the room to proceed, but how?

**Puzzle:** The players must use [[skills#arcana|Arcana]] or [[skills#Athletics|Athletics]] (DC 27) to either stabilize the orb’s energy or navigate through the room while the gravity shifts, pulling them toward the orb or throwing them against the walls.  Three successful attempts are required to defeat the gravity well.
**Failure:** If the players fail to stabilize the orb, they are sucked toward it and must make a **Reflex save** (DC 24) or take `dice: 6d6` bludgeoning damage from being slammed into the walls.

### Puzzle 3: The Living Maze
The players enter a section of the labyrinth that seems alive, with walls that shift and close in around them, constantly changing the layout of the maze. Pathways that were once open are now blocked, and new corridors seem to appear at random.

> [!note]+ Read Aloud  
> The labyrinth shifts around you, its walls moving and twisting, cutting off pathways and creating new ones before your eyes. It feels as though the maze itself is alive, trying to trap you or lead you astray. The air is thick with tension, and every wrong move seems to bring the walls closer.

**Puzzle:** The players must navigate the living maze by studying its patterns and anticipating its movements. This requires an [[skills#Perception|Perception]] or [[skills#survival|Survival]] check (DC 26) to predict the shifting walls and find the correct path.  Three correct answers are required to defeat the living maze.
**Failure:** If the players fail to find the correct path, the walls close in, trapping them. They must make a **Reflex save** (DC 28) to avoid being pinned by the walls and taking `dice: 5d4` bludgeoning damage. Additionally, they lose time, causing the final puzzle’s DC to increase by 2 for each failure.

### Puzzle 4: The Chaos Lock
At the center of the labyrinth lies a door sealed by a complex lock, made of swirling chaotic patterns and constantly shifting colors. The lock pulses with chaotic energy, reacting unpredictably to every touch.

> [!note]+ Read Aloud  
> Before you is a massive door, sealed with a lock made of pure chaotic energy. The patterns and colors on the lock shift constantly, never staying the same for more than a moment. It’s clear this is the final barrier between you and the heart of the labyrinth, but how do you unlock it when the key keeps changing?

**Puzzle:** The players must solve the Chaos Lock by either studying its chaotic nature (requiring an [[skills#Arcana|Arcana]] or [[skills#Occultism|Occultism]] check, DC 25) using that knowledge to guide a [[skills#Thievery|Thievery]] attempt (DC 25) or by brute-forcing it with magic (a Dispel Magic spell).  Failures in the living maze add to the DC of the Arcana/Occultism check.  Note Thievery can not be attempted without a successful check to guide the lockpicks skills.
**Failure:** Failing the Chaos Lock causes it to backfire, sending a shockwave of chaotic energy through the room (Reflex save DC 26, `Dice: 2d12` force damage). 

## Features of the Area
**Shifting Walls:** The walls constantly move, closing off or opening new paths. Players can use this to their advantage for cover, but it can also hinder their movements.
  
**Chaotic Lighting:** The entire labyrinth is dimly lit by the ever-changing chaotic energy. Players will have to deal with concealment in most areas (20% miss chance for ranged attacks).

**Gravity Flux:** At random intervals, gravity may shift, causing all players to make a Reflex save (DC 18) or be thrown 10 feet in a random direction.

**Healing:**  While trapped in the Labyrinth of Chaos healing of any kind will simply not work.

## The Mirror of Truth
**Encounter Difficulty:** 
- [x] Moderate (80 XP)

![[Mirror of Truth.webp|500]]
[[Mirror of Truth.webp|Show to Players]]

The players enter an empty black space, illuminated only by the eerie glow of a massive, free-floating mirror. This mirror reflects more than their physical forms; it shows pieces of their emotional and mental states. As they approach, Zeta's deepest fear—large spiders—emerges, along with a guardian spirit of the mirror itself, a creature born of doubt and chaos. 

> [!note]+ Read Aloud  
> The air feels thick, heavy with expectation as you enter a vast black space. Before you is a large mirror, seemingly suspended in the void a reflection of Zeta captured with in it.  Zeta's subconscious speaks directly to you, asking for your help but warning that not completely freeing her could have dangerous consequences. 

When the players approach the mirror read:
> [!note]+ Read Aloud  
> As you draw nearer, the mirror ripples like water, distorting your reflections into vague, undefined shapes. Then, from its surface, something begins to crawl—long, spindly legs reaching out, accompanied by the clattering of chitin against glass. Zeta gasps as her deepest fear manifests: a giant spider. Behind it, a spectral figure hovers—its form ever-changing, shifting from clarity to shadow. It seems to feed on the fear in the room.

## Tactics
### Non-Combat Option: Resolving Zeta’s Fear
The **Mirror of Truth** is testing Zeta and her bond with the players. It conjures her greatest fear—represented by the giant spider—alongside a **Mirror Guardian**, a reflection of doubt and chaos that seeks to cloud Zeta's mind and reinforce her fear. To bypass the combat, the players must calm Zeta and help her face her fear head-on.

**Puzzle:** The players must work together to reassure Zeta and bolster her courage. This requires them to engage with her emotionally, using [[skills#Diplomacy|Diplomacy]] or [[skills#nature|Nature]] checks (DC 25), as she has been training to become a ranger. They must remind her of her strength, her bond with nature, and the skills she’s been learning.

Over three rounds, the players must accumulate 4 successful checks before 3 failures. If successful, Zeta will calm herself, and the manifestation of the spider will dissolve back into the mirror.

**Success:** Zeta conquers her fear, and the Mirror Guardian will dissolve, giving the players a sense of hope and clarity. The players will gain a temporary boon in her dreamscape, such as **increased Will saves** or **immunity to fear** for the remainder of the adventure.

**Failure:** If the players fail to soothe Zeta, the spider becomes real, and the Mirror Guardian uses its influence to destabilize the space, triggering combat.

```encounter
name: Mirror of Truth
party: Chaos Scar
creatures:
 - 1: [[Goliath Spider, Zeta's Fear]]
 - 1: Manifestation of Doubt 95, 28, 16
```

- **Mirror Guardian (Manifestation of Doubt)**
   - **Size:** Medium  
   - **Special Abilities:**
     - **Glimmer of Doubt:** The Mirror Guardian can cause players to second-guess their actions. Any player who rolls a natural 1 will be affected by a [[confusion]] spell (DC 26).
     - **Distorting Aura:** Within 20 feet of the guardian, all Perception and attack rolls take a -2 penalty due to the visual and mental distortions it causes.
   - **Tactics:** The Mirror Guardian doesn’t engage directly but instead supports the spider by inflicting penalties on the players and messing with their perception of reality.

## Features of the Area
- **The Mirror:** The giant mirror is the centerpiece of the area and can be interacted with. The players may notice that as they begin to confront Zeta’s fear or fight the manifestations, the mirror shows a clearer reflection of her. The mirror itself is indestructible and radiates powerful chaotic magic.
  
- **The Void:** The surrounding area is a vast, dark void. While the ground is stable underfoot, the space seems endless, causing disorientation.

## The Choice
- [x] Severe (120 XP)

After defeating Zeta's fear and breaking the mirror's hold on her, the players must confront the **Chains of Chaos** that still bind her to the lingering essence of Kataklysmos. This decision will affect not only Zeta’s fate but also the party’s ongoing struggle against Chaos.

> [!note]+ Read Aloud  
> As the spider dissipates into small motes of crystal that vanish into the air, the mirror trapping Zeta shatters. Shards whirl and twist, temporarily obscuring her from view. When the fragments finally settle, Zeta stands before you—her eyes clear, her body more solid, her form more lucid. However, she remains bound by purple, glowing Chains of Chaos, anchoring her to the void. The chains pulse with a deep, unsettling energy, and you sense a hidden power within them. As Zeta watches, her expression shifts—no longer fearful but focused. Her eyes gleam with newfound determination as she draws energy from the chains, controlling the flickering light. In that moment, a realization washes over you: the chains could be broken, freeing Zeta completely from Chaos... or they could remain, allowing her to channel and direct this power against Kataklysmos, but at what cost...

The party must make a final, pivotal decision. 

## Option 1: Break the Chains, Free Zeta from Chaos
If the players choose to break the Chains of Chaos and free Zeta completely, they must perform an act of sheer will, risking the wrath of the chaotic forces still tethered to her.

**Skill Challenge:** The party must collectively perform a series of skill checks to break the chains. This will require [[skills#Arcana|Arcana]], [[skills#Religion|Religion]], or **Will saves** (DC 27) to disrupt the chaotic magic binding Zeta.
  - **Success:** If the players accumulate 5 successes before 3 failures, the chains shatter. Zeta will be freed from Chaos entirely, becoming fully lucid in her dream state. This grants her **immunity to Chaos-based influence** for the remainder of the campaign, and she will gain a boon in her journey as a ranger, perhaps unlocking special abilities like increased resilience to fear effects or enhanced tracking skills related to chaotic creatures.
  - **Failure:** If they fail, the players are forced to battle a **Manifestation of Kataklysmos’s Will** (a CR 10 chaotic entity) as a final effort by Chaos to reclaim Zeta. Even if they win, Zeta will still be affected by traces of Chaos, though the worst of its influence will be gone.

If the players are successful, read:
> [!note]+ Read Aloud  
> As you focus your collective will, the purple chains begin to splinter and crack, their glow fading with each pulse. With a final, resounding snap, they shatter completely, vanishing into the void. Zeta stumbles forward, her gaze meeting yours, clear for the first time in a long while. She smiles weakly, but it’s a smile of relief. “Thank you,” she whispers, her voice steady. You have freed her—completely.

If the players fail, read:
> [!note]+ Read Aloud  
> As you prepare to sever Zeta’s bond to Chaos, the void around you shudders, and a deep, rumbling voice begins to echo, its words incomprehensible at first. A mass of dark, twisting energy manifests before you, its shape ever-changing, morphing from monstrous forms to abstract waves of light and shadow. Eyes blink open across its surface, mouths form and vanish, and tendrils of chaotic power lash out. This is not an ordinary foe—it is a living fragment of Chaos itself, sent to reclaim Zeta. The air crackles with instability, as though the laws of reality themselves bend and twist at the whim of this entity. It speaks, each voice overlaid with another: **"She will not be free. Chaos is eternal, and you cannot sever what is already bound!"**

![[Manifestation of Kataklysmos.webp|500]]
[[Manifestation of Kataklysmos.webp|Show to Players]]

```encounter
name: Manifestation of Kataklysmos's Will
party: Chaos Scar
creatures:
 - 1: Manifestation of Kataklysmos's Will,  215, 31, 22
```

### **Tactics:**
The **Manifestation of Kataklysmos’s Will** will use its abilities to disrupt the battlefield, cause unpredictable effects, and challenge the players’ ability to control the fight.

- **Unstable Reality (Aura 30 feet):** Reality warps around the Manifestation, making the battlefield unpredictable. At the start of each round, roll `dice: 1d4` for each creature within the aura:
  - **1:** Gravity shifts, knocking the creature **prone** unless they succeed a Reflex save (DC 26).
  - **2:** The creature is teleported 10 feet in a random direction.
  - **3:** Illusory duplicates of the creature appear in the attackers vision, imposing a **50% miss chance** on attacks targeting them for 1 round.
  - **4:** The creature is [[conditions#Slowed|Slowed 1]] (Will save DC 26 negates).

- **Tactics:**
  - **Phase Shift (2 actions):** The Manifestation can teleport up to 60 feet, ignoring walls or obstacles.
  - **Reality Warp (2 actions):** The Manifestation forces a 20-foot area within 60 feet to warp and change. Creatures in the area must make a Will save (DC 26) or be [[conditions#Confused|Confused]] for 1 round.
  - **Tendril Strike (1 action, Reach 15 feet):** +25 to hit, `dice: 2d12+8` bludgeoning damage, plus `dice: 1d6` chaos damage. On a critical hit, the target becomes [[conditions#Clumsy|Clumsy 1]].

- **Random Chaos Bolt (2 actions):** The Manifestation launches a chaotic bolt of energy at a target. Roll `dice: 1d6` to determine its effect:
  - **1-2:**  `dice: 4d8` acid damage (Reflex save DC 27 for half).
  - **3-4:** `dice: 4d8` fire damage (Reflex save DC 27 for half).
  - **5-6:** `dice: 4d8` cold damage (Reflex save DC 27 for half).

### **Combat Phases:**
1. **Phase One – Disruption and Control:** 
   - The Manifestation starts by using its **Unstable Reality** aura to disorient the party, constantly shifting their positions and slowing their reactions. It teleports around the battlefield, using **Reality Warp** to confuse and separate the players, making coordinated efforts difficult.  It only occasionally lashes out with **Tendril Strikes**.
2. **Phase Two – Chaotic Assault:** 
   - As the players begin to adapt, the Manifestation becomes more aggressive, attacking with **Tendril Strikes** and **Random Chaos Bolts**. It will often try to focus its chaotic powers on weaker or isolated targets, using **Phase Shift** to chase down fleeing or vulnerable characters.
3. **Phase Three – Desperation and Unpredictable Reality:**
   - When the Manifestation is reduced to below 50% health, its **Unstable Reality** aura intensifies doubling in size to 60 feet and doubling any negative effects.

### **Features of the Area:**
**Chaotic Void:** The battlefield itself is unstable. At the start of each round, random changes may occur within the space. Roll `dice: 1d4` to determine the terrain in a 30-foot radius around the Manifestation:
- **1:** The area becomes difficult terrain as the ground ripples and warps.
- **2:** Illusory walls and obstacles appear, imposing a **50% chance** to fail targeting anything beyond them.
- **3:** The ground becomes frictionless, forcing creatures moving through it to make an [[skills#Acrobatics|Acrobatics]] check (DC 24) or fall prone.
- **4:** Chaotic surges of energy arc through the area, dealing `dice: 2d6` chaotic damage to creatures at the start of their turn.

## Option 2: Keep the Chains, Harness the Power
If the players choose to leave the chains intact, Zeta will remain partially bound to Chaos, and the party will gain the ability to tap into its powers. However, this decision comes with great risks.

- **Benefit:** By maintaining Zeta’s bond to Chaos, the party gains access to powerful chaotic abilities. Zeta gains new chaotic abilities, perhaps allowing her to cast spells or temporarily control chaotic forces in combat.
  
- **Drawback:** However, the longer Zeta remains bound to Chaos, the more unstable she becomes. At any moment, Chaos could resurface within her, risking a relapse or a loss of control. This instability could manifest during critical moments, affecting the party’s future battles, particularly when facing Kataklysmos. Each time Zeta uses her Chaos powers, the GM may secretly roll a **d20** (on a roll of 1-5, Chaos takes hold briefly, causing unintended effects, such as a spell going awry or a chaotic surge affecting the party).

> [!note]+ Read Aloud (If the players choose to leave the chains)  
> You hesitate as you watch the chains pulse with power, realizing that Chaos, for all its danger, offers a potent source of strength. Zeta’s eyes meet yours, filled with uncertainty but also a quiet resolve. She says nothing, yet you sense her growing awareness of the power within her grasp. As you turn away, the chains remain intact, their purple glow pulsing rhythmically, tethering her to something far greater than herself. Though Zeta now has the ability to control this chaotic energy, within that light lies something dark and unpredictable. The chains are a link to Chaos itself, and while Zeta stands quietly, more lucid than before, you all wonder what this decision may bring as Chaos’s presence lingers.
