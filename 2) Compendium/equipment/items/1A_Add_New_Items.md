---

database-plugin: basic

---

```yaml:dbfolder
name: Add New Item
description: Add and update items.
columns:
  column1:
    input: text
    key: column1
    accessorKey: column1
    label: Column 1
    position: 1
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 2
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  aliases:
    input: text
    accessorKey: aliases
    key: aliases
    id: aliases
    label: aliases
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 266
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Source:
    input: text
    accessorKey: Source
    key: Source
    id: Source
    label: source
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 285
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Traits:
    input: text
    accessorKey: Traits
    key: Traits
    id: Traits
    label: Traits
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Armor_Type:
    input: text
    accessorKey: Armor_Type
    key: Armor_Type
    id: Armor_Type
    label: Armor Type
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  AC:
    input: text
    accessorKey: AC
    key: AC
    id: AC
    label: AC
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Dex_Modifier:
    input: text
    accessorKey: Dex_Modifier
    key: Dex_Modifier
    id: Dex_Modifier
    label: Dex Modifier
    position: 9
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Check_Penalty:
    input: text
    accessorKey: Check_Penalty
    key: Check_Penalty
    id: Check_Penalty
    label: Check Penalty
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Speed_Penalty:
    input: text
    accessorKey: Speed_Penalty
    key: Speed_Penalty
    id: Speed_Penalty
    label: Speed Penalty
    position: 11
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Price:
    input: text
    accessorKey: Price
    key: Price
    id: Price
    label: Price
    position: 12
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Bulk:
    input: text
    accessorKey: Bulk
    key: Bulk
    id: Bulk
    label: Bulk
    position: 13
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tags:
    input: text
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 337
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 50
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: true
  conditions:
      - condition: OR
        disabled: true
        label: "Basic_Armors"
        color: "hsl(238,95%,70%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "item/category/armor/light"
          type: text
        - field: tags
          operator: CONTAINS
          value: "item/category/armor/medium"
          type: text
        - field: tags
          operator: CONTAINS
          value: "item/category/armor/heavy"
          type: text
        - field: tags
          operator: CONTAINS
          value: "item/category/armor/unarmored"
          type: text
      - condition: AND
        disabled: true
        label: "Basic_Shields"
        color: "hsl(296,100%,39%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "item/category/shield"
          type: text
        - field: tags
          operator: NOT_CONTAINS
          value: "trait/magical"
          type: text
```