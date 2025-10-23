---
sidebar_position: 3
---

# CLI hooks

The Sipa CLI provides a bunch of hooks to integrate your custom jobs.

## Setup

This hooks can be configured in the `sipa.json` of your project.

They work like the `scripts : {}` section in a typical `package.json` of a node project.

You can just put your system command into it. If you want to run some javascript file, you can execute it by node, `node path/to/my-script.js`.

The hooks are named after the Sipa CLI commands they belong to.

```yaml
# sipa.json
{
  ...
  "hooks": {
    "before_all": "",       # this hook is executed before any CLI command
    "after_all": "echo Have a nice day!", # this hook is executed after any CLI command
    "before_build": "npm version patch", # this hook is executed before the build CLI command
    "after_build": "",      # this hook is executed after the build CLI command
    "before_generate": "",  # this hook is executed before the generate CLI command
    "after_generate": "",   # this hook is executed after the generate CLI command
    "before_indexer": "",   # this hook is executed before the indexer CLI command
    "after_indexer": "",    # this hook is executed after the indexer CLI command
    "before_server": "",    # this hook is executed before the server CLI command
    "after_server": ""      # this hook is executed after the server CLI command (when the server quites)
  }
}
```