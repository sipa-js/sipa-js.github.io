---
sidebar_position: 8
---

# Event management

`SipaEvents` is a small, reusable event system. You can add it to any of your own classes to let them notify other parts of your app about changes, or to provide hooks for business logic.

The API documentation for [SipaEvents](/docs/api/SipaEvents) can be found [here](/docs/api/SipaEvents).

:::info Already used by components
`SipaComponent` uses `SipaEvents` internally and exposes it through `events()`, for example with the built-in events `before_update`, `after_update`, `before_destroy` and `after_destroy`. This guide shows how to use the same event system in your own classes.
:::

## The events() pattern

The suggested way to add events to a class is an `events()` method that lazily creates a single `SipaEvents` instance. You define the valid event names when creating it.

```javascript
class Player {
    events() {
        return this._events ??= new SipaEvents('score', 'game_over');
    }

    addScore(points) {
        this._score = (this._score ?? 0) + points;
        // notify all subscribers, passing the params as an array
        this.events().trigger('score', [this._score, points]);
        if (this._score >= 100) {
            this.events().trigger('game_over', [this._score]);
        }
    }
}
```

Defining valid event names up front means that subscribing to or triggering an unknown event throws an error, which helps you catch typos early.

The event names are passed as individual arguments. Passing a single array of names (`new SipaEvents(['score', 'game_over'])`) is also supported for legacy compatibility, but the variadic form shown above is preferred.

## Subscribing to events

Subscribers register a callback with `subscribe`. Their callbacks run whenever the object triggers the event, as `addScore` does in the `Player` class above. Each callback receives the params that were passed to `trigger`.

```javascript
const player = new Player();

player.events().subscribe('score', (total, added) => {
    console.log(`scored ${added}, total is now ${total}`);
});

player.events().subscribe('game_over', (total) => {
    console.log(`game over with ${total} points`);
});

player.addScore(40);
// => "scored 40, total is now 40"

player.addScore(70);
// => "scored 70, total is now 110"
// => "game over with 110 points"
```

An event can be triggered from inside the object, as `addScore` does, but also from outside it. The subscribers react the same way in both cases.

```javascript
// events can also be triggered from outside the object,
// for example from a game loop when the player is killed
if (killed) {
    player.events().trigger('game_over', [player._score ?? 0]);
}
// => "game over with <score> points"
```

The params passed to `trigger` are given as an array. Each subscriber receives them as individual arguments. There is no limit on the number of params.

## Unsubscribing

To stop listening, call `unsubscribe` with the same function reference you subscribed with.

```javascript
const onScore = (total) => console.log(total);

player.events().subscribe('score', onScore);
player.events().unsubscribe('score', onScore);
```

You can also remove all subscribers of one event with `unsubscribeAll('score')`, or reset the whole registry with `reset()`. Prefer `unsubscribe` for normal use.

## Adding event names at runtime

If you need more events later, add them with `createEvents`. You can inspect the valid event names with `getValidEventNames`.

```javascript
player.events().createEvents('level_up', 'paused');
player.events().getValidEventNames();
// => ['score', 'game_over', 'level_up', 'paused']
```

## Reacting to component events

Because `SipaComponent` exposes `events()` too, a parent component can subscribe to the built-in events of its children, for example to react on updates.

```javascript
this.children().childy.events().subscribe('after_update', (child, data, options) => {
    console.log('a child component was updated');
});
```

See the [SipaComponent guide](./SipaComponent/sipa-component) for more on component events.
