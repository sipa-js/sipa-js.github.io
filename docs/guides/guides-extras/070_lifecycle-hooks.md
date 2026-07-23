---
sidebar_position: 7
---

# Lifecycle hooks

Lifecycle hooks let you run your own code at defined points while pages and layouts are loaded, shown and destroyed. A typical use case is to run some setup or cleanup for every page, without repeating it in each page class.

The API documentation for [SipaHooks](/docs/api/SipaHooks) can be found [here](/docs/api/SipaHooks).

:::caution Not the same as CLI hooks
These runtime hooks are different from the [CLI hooks](./cli-hooks). CLI hooks are shell commands configured in `sipa.json` that run around Sipa CLI commands like `build` or `server`. The lifecycle hooks on this page are JavaScript functions that run inside your app while it is running.
:::

## Available hooks

`SipaHooks` provides five hooks. Each one runs right before the matching lifecycle method of the affected page or layout is called.

| Hook | Runs before |
|------|-------------|
| `beforeInitPage` | `onInit()` of any page |
| `beforeShowPage` | `onShow()` of any page |
| `beforeDestroyPage` | `onDestroy()` of any page |
| `beforeInitLayout` | `onInit()` of any layout |
| `beforeDestroyLayout` | `onDestroy()` of any layout |

## Registering hooks

Each hook is registered by calling its method with the type `'on'` and a function.

```javascript
SipaHooks.beforeInitPage('on', () => {
    console.log("runs before onInit() of any page");
});
```

To remove a previously registered function, pass the type `'off'` with the same function reference.

```javascript
const myHook = () => console.log("hello");

SipaHooks.beforeInitPage('on', myHook);   // register
SipaHooks.beforeInitPage('off', myHook);  // remove again
```

The third type, `'trigger'`, is used internally by Sipa to fire the hooks at the right moment. You normally do not call it yourself.

## Where to register hooks

Every new Sipa project comes with an `app/config/hooks.js` file, which is the central place to register your lifecycle hooks. It is loaded when your app starts.

The default file already wires up the component lifecycle, so registered components are initialized on every page and destroyed with their layout.

```javascript title="app/config/hooks.js"
SipaHooks.beforeInitPage('on', () => {
    // runs on every page before it is initialized
    SipaComponent.init();
});

SipaHooks.beforeShowPage('on', () => {
    // runs on every page before it is shown
});

SipaHooks.beforeDestroyPage('on', () => {
    // runs on every page before it is destroyed
});

SipaHooks.beforeInitLayout('on', () => {
    // runs on every layout before it is initialized
});

SipaHooks.beforeDestroyLayout('on', () => {
    // runs on every layout before it is destroyed
    SipaComponent.destroyAll();
});
```

`beforeShowPage` is empty by default. It is a good place to initialize components that were added dynamically after the page was initialized, for example components you inject during a page's `onInit()`.

## Example: global setup on every page

A common use case is to run some setup for every page, for example initializing a third party plugin after the page markup is in place.

```javascript title="app/config/hooks.js"
SipaHooks.beforeInitPage('on', () => {
    // initialize tooltips on every page before its onInit runs
    initTooltips();
});
```

Because the hook runs before each page's `onInit()`, the page can already rely on the setup being done when its own initialization logic runs.

:::info Mobile
For mobile projects based on OnsenUI, there is a separate `SipaOnsenHooks` class that provides hooks for the OnsenUI page lifecycle. It is used the same way as `SipaHooks`.
:::
