---
sidebar_position: 5
---

# Project configuration

The project configuration is stored in the `sipa.json` file at the root directory of your Sipa project.

Here you can configure different options for your project, like the project name, version, author, description, the source and output directories and more.

When creating a new project, you may have these defaults:

```json title="sipa.json"
{
  "type": "desktop",
  "development_server": {
    "host": "0.0.0.0",
    "port": "7000",
    "mount": "/",
    "open": true,
    "sass_watch_paths": [
      "assets/style",
      "assets/components",
      "views"
    ]
  },
  "build": {
    "auto_fix_font_paths_in_css": true,
    "minify": {
      "css": {
        "remove_comments": true,
        "compress": true
      },
      "js": {
        "remove_comments": true,
        "compress": true
      }
    },
    "static_files_to_copy": {
      "favicon.svg": "favicon.svg",
      "files": "files",
      "assets/img": "assets/img"
    }
  },
  "indexer": {
    "ignored_files": [
    ]
  },
  "hooks": {
    "before_all": "",
    "after_all": "",
    "before_build": "npm version patch",
    "after_build": "",
    "before_generate": "",
    "after_generate": "",
    "before_indexer": "",
    "after_indexer": "",
    "before_server": "",
    "after_server": ""
  }
}
```


