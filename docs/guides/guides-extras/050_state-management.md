---
sidebar_position: 5
---

# State management

Sipa provides `SipaState` to store global state in your app. It is a simple key/value store with three persistence levels, so you can decide how long a value should survive.

The API documentation for [SipaState](/docs/api/SipaState) can be found [here](/docs/api/SipaState).

## Persistence levels

`SipaState` stores values at one of three levels:

| Level | Constant | Lives until | Notes |
|-------|----------|-------------|-------|
| Variable | `SipaState.LEVEL.VARIABLE` | page reload | in-memory only, can even hold references and functions |
| Session | `SipaState.LEVEL.SESSION` | browser is closed | backed by `sessionStorage` |
| Storage | `SipaState.LEVEL.STORAGE` | browser cache is cleared | backed by `localStorage` |

The default level is `session`.

:::info Serialization
Session and storage values are serialized with [`SipaSerializer`](/docs/api/SipaSerializer) before they are written to the browser storage. That means you can store not only strings and numbers, but also objects, arrays and even isolated functions. Only the variable level keeps live references.
:::

## Setting values

Use `set` with an explicit level, or one of the level specific shortcuts.

```javascript
// lost after reload
SipaState.setVariable("current_filter", { search: "cats", page: 2 });

// lost when the browser is closed (default level)
SipaState.setSession("cart", [{ id: 1, qty: 2 }]);
SipaState.set("cart", [{ id: 1, qty: 2 }]); // same as setSession

// lost only when the browser cache is cleared
SipaState.setStorage("user_settings", { language: "en", theme: "dark" });
```

By default a key can only exist at one level. If you try to set a key that already exists at another level, an error is thrown. Pass `{ force: true }` to move it to another level.

```javascript
SipaState.setSession("token", "abc");
// would throw, because "token" already exists at session level:
// SipaState.setStorage("token", "abc");

// works, moves the key to storage level:
SipaState.setStorage("token", "abc", { force: true });
```

## Reading values

`get` returns the value regardless of its level. If a key is set at multiple levels, the priority is storage before session before variable.

```javascript
SipaState.get("user_settings");
// => { language: "en", theme: "dark" }

SipaState.get("not_existing");
// => undefined

SipaState.hasKey("cart");     // => true
SipaState.getLevel("cart");   // => "session"
SipaState.getKeys();          // => ["current_filter", "cart", "user_settings"]
```

## Removing values

```javascript
SipaState.remove("cart");                 // remove a single key
SipaState.remove(["current_filter", "cart"]); // remove several keys
SipaState.removeAll();                    // remove everything (alias: reset())
```

## Example: persisting user settings

A common use case is to persist user settings like language and theme across reloads and sessions, while keeping a short lived UI state only in memory.

```javascript title="app/assets/js/services/settings-service.js"
class SettingsService {
    // read the persisted settings, fall back to defaults
    static current() {
        return SipaState.get("user_settings") ?? { language: "en", theme: "light" };
    }

    // persist a changed setting at storage level, so it survives even after
    // closing the browser
    static update(changes) {
        const next = { ...SettingsService.current(), ...changes };
        SipaState.setStorage("user_settings", next, { force: true });
        return next;
    }
}
```

```javascript title="usage"
// on the settings page, when the user switches the theme
SettingsService.update({ theme: "dark" });

// somewhere else in the app, read the current theme
const theme = SettingsService.current().theme; // => "dark"

// a short lived value that is fine to lose on reload
SipaState.setVariable("last_scroll_position", 1200);
```

After a reload the `user_settings` are still available, because they are stored at storage level, while `last_scroll_position` is gone, because it was only a variable.
