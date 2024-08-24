

- [[party-treasure-by-level|Party Treasure by Level]]
- [[automatic-bonus-progression-gmg|Automatic Bonus Progression]]

```dataviewjs
async function handleCheckboxClick(event) {
    const target = event.target;
    const isChecked = target.checked;
    const file = app.workspace.getActiveFile();
    const fileContent = await app.vault.read(file);

    let updatedContent = fileContent.replace(/completed: (true|false)/, `completed: ${isChecked}`);
    await app.vault.modify(file, updatedContent);
}

let page = dv.current();
let totalGp = 0;
let totalExpectation = 0;

// Function to safely parse numbers
function parseNumber(value) {
    return isNaN(value) ? 0 : Number(value);
}

// Sum gp values from the current page if the checkbox is checked
if (page.file.tasks) {
    for (let task of page.file.tasks) {
        if (task.completed) {
            let gpMatch = task.text.match(/\[gp::(\d+)\]/);
            if (gpMatch) {
                totalGp += parseNumber(gpMatch[1]);
            }
        }
    }
}

// Sum expectation values from the current page
if (page.expectation) {
    if (Array.isArray(page.expectation)) {
        for (let val of page.expectation) {
            totalExpectation += parseNumber(val);
        }
    } else {
        totalExpectation = parseNumber(page.expectation);
    }
}

let remainingGp = totalExpectation - totalGp;

dv.paragraph(`**Wealth**: ${totalGp}gp / ${totalExpectation}gp (**${remainingGp}gp left**)`);

```
**Level** :: 9

```dataviewjs
async function handleCheckboxClick(event) {
    const target = event.target;
    const isChecked = target.checked;
    const fileContent = await app.vault.read(file);

    let updatedContent = fileContent.replace(/completed: (true|false)/, `completed: ${isChecked}`);
    await updateFileContent(file, updatedContent);
}

let page = dv.current();

const items = await Promise.all(
  [...Array(page.level + 1).keys()].map(async (i) => {
    let query = `TASK FROM "${page.file.path}" WHERE ilv = ${i + 1} AND completed = true`;
    return (await dv.tryQuery(query)) || { values: [] };
  })
);

function itemsWithCheckboxes(ilv, type) {
  let lvItems = items[ilv - 1].values
    .filter(i => i.header.subpath.includes(type))
    .map(i => {
      let gpIndex = i.text.indexOf("[gp::");
      if (gpIndex >= 0) {
        return i.text.slice(0, gpIndex);
      }
      return i.text;
    });

  let currentNum = type == "Consumable"
    ? lvItems.reduce((acc, s) => acc + (s[0] == 'x' ? parseInt(s[1]) : 1), 0)
    : lvItems.length;

  let maxAllowed = type == "Consumable" ? 6 : 4;
  let remaining = Math.min(
    Math.max(0, (page.level - ilv + (type == "Consumable" ? 2 : 1)) * 2),
    maxAllowed
  ) - currentNum;

  let label = `(${currentNum}/${remaining + currentNum})`;

  if (remaining <= 0) {
    return dv.el("div", [...lvItems, label], { cls: "nolastbullet" });
  }

  return lvItems.concat(
    [...Array(remaining)].map(_ => 
      dv.el("input", "", {
        attr: { type: "checkbox", onchange: handleCheckboxClick },
      })
    )
  );
}

dv.table(
  ["Level", "Permanent", "Consumable"],
  [...Array(page.level + 1).keys()]
    .reverse()
    .map(i => [
      i + 1,
      itemsWithCheckboxes(i + 1, "Permanent"),
      itemsWithCheckboxes(i + 1, "Consumable"),
    ])
);

```


### Level Received

#### Level 3
Expectation::500
##### Permanent
- [ ] [[menacing-tv|Menacing]] rune [gp::50] [ilv::3] from Poisoned Poseidon
##### Consumable
- [x] [[oil-of-mending|Oil of Mending]] [gp::9] [ilv::3]
##### Gold
- [x] 120gp [gp::120]
- [x] Jentha Alinamuch [gp::100]
- [x] Poisoned Poseidon [gp::100]

#### Level 4
Expectation::850
##### Permanent
- [x] [[cloak-of-repute-locg|Cloak Of Repute]] [gp::90] [ilv::4]
- [x] [[sense-dulling-hood-tv|Sense-Dulling Hood (Lesser)]] [gp::40] [ilv::6]
- [x] [[ghoul-hide|Ghoul Hide]] [gp::220] [ilv::6]
##### Consumable
- [x] [[chimera-thread-da|Chimera Thread]] [gp::40] [ilv::4]
- [x] [[potion-of-resistance|Potion of Resistance (Lesser)]] [gp::45] [ilv::6]
- [x] [[holy-water|Holy Water]] [gp::3] [ilv::1]
- [x] x2 [[healing-potion|Healing Potion (Lesser)]] [gp::24] [ilv::3]
##### Gold
- [ ] 10gp
- [ ] 9sp

#### Level 5
Expectation::1350
##### Permanent
- [ ] [[Pickled Demon Tongue]] [gp::50] [ilv::3]
##### Consumable
- [ ] Scroll of [[dimension-door|Dimension Door]] [gp::70] [ilv::5]
##### Gold
- [ ] 19.9gp
- [ ] 9sp

