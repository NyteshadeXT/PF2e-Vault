
```metabind
{
    "type": "input",
    "name": "creatureTrait",
    "label": "Creature Trait:",
    "options": ["Aberration", "Animal", "Astral", "Beast", "Celestial", "Construct", "Ethereal", "Fey", "Fiend", "Fungus", "Humanoid", "Monitor", "Ooze", "Plant", "Spirit", "Undead"]
}
```


```dataviewjs
dv.paragraph("Rarity Modifier:");
let rarityOptions = {
    "Common": 14,
    "Uncommon": 16,
    "Rare": 19
};
// Replace 'Common' with the actual rarity value you want to use.
let rarity = "Common";
// Replace 0 with the actual creature CR value you want to use.
let creatureCR = 0;

// Define creature traits and their associated skills.
let creatureTraits = {
    "Aberration": "Occultism",
    "Animal": "Nature",
    "Astral": "Occultism",
    "Beast": "Arcana, Nature",
    "Celestial": "Religion",
    "Construct": "Arcana, Crafting",
    "Ethereal": "Occultism",
    "Fey": "Nature",
    "Fiend": "Religion",
    "Fungus": "Nature",
    "Humanoid": "Society",
    "Monitor": "Religion",
    "Ooze": "Occultism",
    "Plant": "Nature",
    "Spirit": "Occultism",
    "Undead": "Religion"
};
// Replace 'Aberration' with the actual creature trait you want to use.
let creatureTrait = "Aberration";

function calculateDC(creatureCR, rarity) {
    let baseDC;
    if (creatureCR <= 1) {
        baseDC = 14 + creatureCR;
    } else {
        baseDC = 15 + creatureCR + Math.floor((creatureCR - 1) / 2);
    }
    return Math.round(baseDC + rarityOptions[rarity]);
}

dv.paragraph("Recall Knowledge DC: " + calculateDC(creatureCR, rarity));
dv.paragraph("Associated Skill: " + creatureTraits[creatureTrait]);

```
