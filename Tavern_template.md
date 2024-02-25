---
title: "{{title}}"
aliases:
  - {{title}} 
  - 
category: Location
type: Tavern
location: 
owner: 
tags:
  - Location
  - Tavern
status: ❌
---
# {{title}} <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span>

The proprietor of {{title}} is `VIEW[\[\[{owner}\]\]][text(renderMarkdown)]`, the `$=dv.page(dv.current().owner).age` `$=dv.page(dv.current().owner).gender_name` `$=dv.page(dv.current().owner).race`. The tavern is located at ==Location==.

## Description 
==Exterior description==

==Interior description==

## Accommodations
==Rooms and Services==

## Menu
==A Short list of some foods and drinks==

## Entertainment

==Eventual other activities at the tavern==

## Employees

![[{{title}} employees#^Table| clean no-t]]