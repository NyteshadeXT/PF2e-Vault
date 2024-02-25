{{#each spell}}
---
obsidianUIMode: preview
cssclass: pf2e,pf2e-spell
tags:
  - compendium/src/{{source}}/{{name}}
  - spell/level/{{level}}
  {{#each traits}}
  - trait/{{this}}
  {{/each}}
aliases: ["{{name}}"]
---
# {{name}} *Spell {{level}}*

{{#each traits}}
[{{this}}](rules/traits/{{this}}.md "{{this}} Trait")  
{{/each}}

- **Traditions** {{#each traditions}}[{{this}}](rules/traits/{{this}}.md "{{this}} Tradition Trait"){{#unless @last}}, {{/unless}}{{/each}}
- **Cast**: {{cast.number}}-{{cast.unit}}
- **Range**: {{range.number}} {{range.unit}}
- **Targets**: {{targets}}
{{#if savingThrow}}
- **Saving Throw**: {{#each savingThrow.type}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}
{{#if duration}}
- **Duration**: {{duration.number}} {{duration.unit}}
{{/if}}

{{#each entries}}
{{#ifEqual ../siteVersion "0.8.9"}}
{{#if this.type}}
{{#ifEqual this.type "successDegree"}}
> [!success-degree] 
{{#each this.entries}}
- **{{@key}}** {{this}}
{{/each}}
{{/ifEqual}}
{{/if}}
{{/ifEqual}}
{{/each}}

{{#if heightened}}
**Heightened (+{{#keys heightened.plusX}}{{this}}{{/keys}})** {{#each heightened.plusX}}{{#each this}}{{this}}{{/each}}{{/each}}

*Source: {{source}} p. {{page}}*
{{/each}}

