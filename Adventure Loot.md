```dataview
TABLE
	treasures.name as "Treasure Name"
	,treasures.level as "Item Level"
	,treasures.amount as "GP Value"
	,treasures.completed as "Distributed"
FROM "9) Completed Adventures" OR "8) Adventures"
WHERE adventure_status = "Done" OR adventure_status = "In Progress"
SORT file.name DESC, treasures.level ASC
```