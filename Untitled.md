
- [[party-treasure-by-level|Party Treasure by Level]]
- [[automatic-bonus-progression-gmg|Automatic Bonus Progression]]

**Level** :: 4
```dataviewjs
let page = dv.current();
let totalGp = 0;
let totalExpectation = 0;

// Sum gp values from the current page
if (page.gp) {
    if (Array.isArray(page.gp)) {
        for (let val of page.gp) {
            totalGp += val ?? 0;
        }
    } else {
        totalGp = page.gp ?? 0;
    }
}

// Sum expectation values from the current page
if (page.expectation) {
    if (Array.isArray(page.expectation)) {
        for (let val of page.expectation) {
            totalExpectation += val ?? 0;
        }
    } else {
        totalExpectation = page.expectation ?? 0;
    }
}

let remainingGp = totalExpectation - totalGp;

dv.paragraph(`Wealth: ${totalGp}gp / ${totalExpectation}gp (${remainingGp}gp left)`);
```

```dataviewjs
let page = dv.current()

const items = await Promise.all(
  [...Array(page.level + 1).keys()]
  .map(async (i) => await dv.tryQuery(
      `TASK FROM "${dv.current().file.path}" WHERE ilv = ${i + 1}`))
)

function itemsWithCheckboxes(ilv, type) {
  let lvItems = items[ilv - 1].values
    .filter(i => i.header.subpath.includes(type))
    .map(i => i.text.slice(0, i.text.indexOf("[gp::")))
  let currentNum = type == "Consumable"
    ? lvItems.reduce((acc, s) => acc + (s[0] == 'x' ? parseInt(s[1]) : 1), 0)
    : lvItems.length
  let remaining = Math.min(
    Math.max(
      0,
      (page.level - ilv + (type == "Consumable" ? 2 : 1)) * 2),
    type == "Consumable" ? 6 : 4) - currentNum
  let label = `(${currentNum}/${remaining+currentNum})`
  if (remaining <= 0) {
    return dv.el("div", [...lvItems, label], { cls: "nolastbullet" })
  }
  return lvItems.concat(
    [...Array(remaining)].map(_ =>
	    dv.el("input", "", { attr: { type: "checkbox" }})))
}

dv.table(
  ["Level", "Permanent", "Consumable"],
  [...Array(page.level + 1).keys()]
    .map(i => [
      i + 1,
      itemsWithCheckboxes(i + 1, "Permanent"),
      itemsWithCheckboxes(i + 1, "Consumable"),
    ]))
```

### Level Received

#### Level 1
Expectation::175
##### Permanent
- [x] 🐀 [[weapon-potency|Weapon Potency Rune +1]] [gp::35] [ilv::2] from Wellum Smith **Weapon +1**
- [x] 🐘 [[handwraps-of-mighty-blows|Handwraps of Mighty Blows]] [gp::35] [ilv::2] from Vasha Hall
- [x] 🛡 [[fortress-shield-tv|Fortress Shield]] [gp::20] [ilv::1] from Wellum Smith
- [x] 🛡 [[waterproof-journal-lopsg|Waterproof Journal]] [gp::5] [ilv::1]
##### Consumable
- [x] x2 [[healing-potion#minor *Item 1*|Healing Potion (Minor)]] [gp::8] [ilv::1] from Vasha Hall
- [x] [[potion-of-expeditious-retreat-apg|Potion Of Expeditious Retreat]] [gp::3] [ilv::1] from Vasha Hall
- [x] x2 Lover's Knot [gp::12] [ilv::2] from Vasha Hall
##### Gold
- 15gp [gp::15]
- Value A [gp::25]
- Candlesticks [gp::20]
