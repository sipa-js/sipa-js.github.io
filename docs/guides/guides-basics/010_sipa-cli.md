---
sidebar_position: 1
---

# Sipa CLI

Sipa provides a powerful command line interface (CLI) to support the developer on his daily work.

:::info
Usually you just use the `sipa` command. For backward compatibility you can still use the long name `simpartic`.
:::

With the Sipa-CLI you can do the following, for example
* Create new projects
* Start and run a live webserver with on the fly SCSS processing
* Generate new pages, js libraries or layouts
* Automatically include or exclude new files or libraries
* Create minified distribution builds
* Update your project to the latest Sipa version
* Upgrade the Sipa CLI to the latest Sipa version
* ... so much more!

To list all available commands, just run `sipa` on the command line.

All commands have shortcuts that you can use, so for example all of the following commands are the same:
```yaml
sipa         # without command, it defaults to 'help'
sipa help    # long command name
sipa h       # short cut suggested to use
sipa -h      # alias
sipa --help  # alias
```

## Non-interactive usage (parameters)

Every interactive command can also be driven completely through long CLI parameters (`--parameter=value`), without any interaction. This makes it easy to integrate Sipa into pipelines, scripts and CI, and lets AI agents interact with it reliably.

### Basic rules

* Parameters use long options only (`--name=value`). There are no short forms for parameters.
* Command shortcuts (`g`, `n`, `s`, ...) still work.
* Any missing mandatory value falls back to the interactive prompt, so you can also provide only some parameters.
* Task specific help is available via `sipa <command> --help`.

### Create a new project

```bash
sipa new --name=my-app --type=desktop --version=1.0.0 --author="Jane Doe" --email=jane@example.com
sipa n --name=my-app --type=mobile
```

### Generate assets

```bash
sipa generate --type=page --name=settings/user
sipa g --type=component --name=dropdown
sipa g --type=style --name=modes/dark-mode
```

### Indexer

```bash
sipa indexer --list                 # list missing and invalid entries
sipa indexer --auto                 # add all missing and remove all invalid entries
sipa indexer --add=1,4,5 --ignore=2,3   # add and ignore specific entries by index
sipa indexer --dry-run              # preview changes without applying
```

### Build

```bash
sipa build --no-minify-js --no-minify-css
sipa build --dist-path=dist/custom
sipa build --dry-run
```

### Server

```bash
sipa server --port=8080 --host=127.0.0.1
sipa server --no-open
```

### Machine readable info

```bash
sipa version --json
sipa about --json
sipa license --json
```

### Task specific help

```bash
sipa generate --help
sipa help generate
```

:::tip
Since no interaction is required, this is the recommended way to use Sipa inside pipelines, scripts and CI, or to let AI agents work with your project.
:::