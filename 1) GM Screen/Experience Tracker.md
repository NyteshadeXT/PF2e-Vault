```dataviewjs
let totalXP = 0;
let completedXP = 0;
let runningXP = 0;

// Sum XP from "9) Completed Adventures"
for (let page of dv.pages('"9) Completed Adventures"')) {
    if (page.total_xp) totalXP += page.total_xp;
    if (page.completed_xp) completedXP += page.completed_xp;
}

// Sum XP from "8) Adventures"
for (let page of dv.pages('"8) Adventures"')) {
    if (page.total_xp) totalXP += page.total_xp;
    if (page.completed_xp) completedXP += page.completed_xp;
}

let potentialLevel = (totalXP / 1000).toFixed(1);
let characterLevel = (completedXP / 1000).toFixed(1);

dv.paragraph(`**Total XP:** ${totalXP}     **Completed XP:** ${completedXP}`);
dv.paragraph(`**Potential Level:** ${potentialLevel}     **Character Level:** ${characterLevel}`);


```

```dataview
table adventure_level, total_xp as Total_XP, completed_xp as Completed_XP
from "9) Completed Adventures" or "8) Adventures"
where total_xp
sort adventure_level


```

