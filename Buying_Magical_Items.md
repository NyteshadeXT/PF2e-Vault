---
title: Buying Magical Items
aliases: 
category: Rules
type: Variant
value: 710
pop: 93600
days2find: 6.079264673489409
probPerDay: 0.10775833665917489
searchdays: 2
mod: 4
pc: "[[7) Players/ediza.md|Ediza]]"
---
#  Buying Magical Items

*See also:* [[Downtime#Buying a Magic Item]].

The ease with which a character can find a specific magical item depends on the value of the magical item, the size of the settlement, as well as their investigation score.

When a character is trying to find an item within a certain time frame, use the calculator below to figure out if they manage to find it.

| Find Item Calculator | Within a timeframe                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Cost                 | `INPUT[number(class(nb-mb-75)):value]` gp                                                                      |
| Population           | `INPUT[number(class(nb-mb-65)):pop]` people                                                                    |
| Days spent looking | `INPUT[number(class(nb-mb-55)):searchdays]` |
| DC to find           | `VIEW[round(30*(1-{probPerDay})^{searchdays}, 0)]` |

> [!note | clean no-t]- Hidden data
> expected days: `VIEW[(0.0915*{value}^(0.644204)*10^(log({pop})/log(100)-2.5))][math(hidden):days2find]`
> probability per day `VIEW[1-0.5^(1/{days2find})][math(hidden):probPerDay]`

If the character want to search for a magic ***until*** they find it, they would use their passive score to see how long it takes until they find it.

| Find Item Calculator                            | Through eventuality                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Cost                                            | `VIEW[{value}]`  gp                                                                                                  |
| Population                                      | `VIEW[{pop}]` people                                                                                                 |
| Player: `INPUT[suggester(optionQuery(#PC)):pc]` | `$=dv.page(dv.current().pc).passive.investigation` Passive Investigation                                             |
| Time to find                                    | `$=Math.round(4*Math.log(dv.page(dv.current().pc).passive.investigation/30)/Math.log(Math.exp(-0.693147/dv.current().days2find)))/4` days |