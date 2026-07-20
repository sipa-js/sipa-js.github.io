---
sidebar_position: 1
---

# Project & build (sipa.json)

The project and build configuration is stored in the `sipa.json` file at the root directory of your Sipa project.

This file configures the project itself and its build pipeline, for example the project type, the development server, the production build and the CLI hooks. It is read by the Sipa CLI, not by your running app.

:::info Two kinds of configuration
`sipa.json` configures the project and the build tooling. The application itself (layouts, navigation defaults, and more) is configured separately in [App (config.js)](./app).
:::

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

## Configuration groups

* `type`: the project type, either `desktop` or `mobile`.
* `development_server`: settings for the live development server started with `sipa server`: `host`, `port`, `mount` point, whether to `open` the browser automatically, and the `sass_watch_paths` that are watched for on the fly SCSS compilation.
* `build`: options for the production build created with `sipa build`: `auto_fix_font_paths_in_css`, the `minify` settings for CSS and JavaScript (`remove_comments`, `compress`), and `static_files_to_copy` to copy additional files into the build output.
* `indexer`: the `ignored_files` list, which the `sipa indexer` keeps out of your `index.html`.
* `hooks`: custom commands that run before and after CLI commands. See [CLI hooks](../cli-hooks) for details.

