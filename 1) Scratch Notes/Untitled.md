

```dataview
TABLE
  aliases as "Armor Name",
  source
from #item/category/armor/medium or #item/category/armor/light or #item/category/armor/heavy or #item/category/armor/unarmored 
where cssclass = "pf2e,pf2e-item" and source != "Guns and Gears"
sort aliases Ascending
```


```dataview
TABLE
  aliases as "Armor Name",
  source
from #item/category/shield
where cssclass = "pf2e,pf2e-item" and source != "Guns and Gears"
sort aliases Ascending
```