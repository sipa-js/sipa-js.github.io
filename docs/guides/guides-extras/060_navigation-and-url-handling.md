---
sidebar_position: 6
---

# Navigation & URL handling

Sipa is a single page application framework, so navigating between pages does not reload the browser. Instead, pages are swapped in place. This guide shows how to navigate between pages and how to read and manipulate the URL, its query parameters and its anchor.

The API documentation for [SipaPage](/docs/api/SipaPage) and [SipaUrl](/docs/api/SipaUrl) can be found in the API section.

:::info Mobile
For mobile projects based on OnsenUI, use `SipaOnsenPage` instead of `SipaPage`. It works analogously.
:::

## Navigating between pages

To load another page, use `SipaPage.load`. The first argument is the page id, the second an optional options object.

```javascript
// simplest form
SipaPage.load('home');

// with options
SipaPage.load('settings/user', {
    layout_id: 'with-sidebar',
    params: { tab: 'security' },
});
```

### Load options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `layout_id` | string | default layout | load the page into a specific layout |
| `params` | object | none | query parameters to set on the new page |
| `keep_params` | boolean | `true` | keep the current query parameters when loading |
| `remove_params` | array | none | query parameters to remove on the new page |
| `anchor` | string | none | anchor to set on the new page (without `#`) |
| `keep_anchor` | boolean | `false` | keep the current anchor when loading |
| `force_load` | boolean | `false` | load again even if the page is already loaded |
| `fade_effect` | boolean | `true` | use a fade effect on the page container |
| `stack_page` | boolean | `true` | put the page onto the history stack |
| `success` | function | none | called after the page loaded successfully |
| `error` | function | none | called if loading the page failed |
| `always` | function | none | called after loading, on success and on error |

```javascript
SipaPage.load('products', {
    params: { category: 'books' },
    success: (data, text, response) => {
        console.log('products page loaded');
    },
    always: () => {
        console.log('done loading');
    },
});
```

### Project-wide default behavior

`keep_params` and `keep_anchor` do not have to be passed on every `load` call. You can set them once as a project-wide default in `SipaPage.setConfig`, which is called in the `app/config/config.js` file that comes with every new Sipa project and runs when your app starts.

```javascript title="app/config/config.js"
SipaPage.setConfig({
    default_layout: 'default',
    keep_params: true,   // project-wide default
    keep_anchor: false,  // project-wide default
});
```

A value passed to a single `SipaPage.load` call always overrides the project-wide default for that call. See [App (config.js)](./project-configuration/app) for the full application configuration.

### Current page and history

You can ask for the currently loaded page id, and browser back and forward navigation works out of the box.

```javascript
SipaPage.currentPageId();
// => 'products'
```

`SipaPage` takes care of the browser history itself. When you set the configuration with `SipaPage.setConfig`, it registers a history listener, and every navigation with `stack_page: true` (the default) adds an entry to the browser history. That is why the browser back and forward buttons keep working without any extra work on your side.

If you do not want a specific page to be added to the history stack, pass `stack_page: false`.

## Working with query parameters

Query parameters are managed with `SipaUrl`. Parameters are always read as strings.

```javascript
// URL: https://my-app.com/?category=books&page=2

SipaUrl.getParams();
// => { category: "books", page: "2" }

SipaUrl.hasParam('page');   // => true
```

### Setting and removing parameters

```javascript
// set or overwrite a single parameter
SipaUrl.setParam('page', '3');
// URL: https://my-app.com/?category=books&page=3

// set or overwrite several parameters at once
SipaUrl.setParams({ sort: 'title', page: '1' });

// remove a single parameter
SipaUrl.removeParam('sort');

// remove several parameters
SipaUrl.removeParams(['category', 'page']);

// remove all parameters (an anchor is preserved)
SipaUrl.resetParams();
```

Setting parameters this way updates the URL without reloading the page. When you navigate with `SipaPage.load` and pass `params`, the same mechanism is used.

:::info No extra history entry
`SipaUrl` does not create a new browser history entry when you change parameters or the anchor. It modifies the currently loaded history entry in place, so parameters and the anchor are added, removed or edited instantly. This is a deliberate difference to `SipaPage.load`, which stacks a new history entry.
:::

## Working with the anchor

The anchor is the part of the URL after `#`. `SipaUrl` reads and writes it without the leading `#`.

```javascript
// URL: https://my-app.com/?category=books#reviews

SipaUrl.getAnchor();       // => 'reviews'

SipaUrl.setAnchor('specs');
// URL: https://my-app.com/?category=books#specs

SipaUrl.removeAnchor();
// URL: https://my-app.com/?category=books
```

## Editing arbitrary URLs

Besides the methods that read and change the current URL, `SipaUrl` also provides `...OfUrl` variants that work on any URL you pass in as a string. They are independent of the currently loaded URL and never touch the browser history. They are pure string transformations: you pass a URL in and get a changed URL back.

This makes `SipaUrl` a powerful tool for URL manipulation in general, not only for the current page.

```javascript
const url = "https://my-business.com/?one=1&stat=true";

// set or overwrite parameters of the given url
SipaUrl.setParamsOfUrl(url, { stat: "false", more: "better" });
// => "https://my-business.com/?one=1&stat=false&more=better"

// read parameters of the given url
SipaUrl.getParamsOfUrl(url);
// => { one: "1", stat: "true" }

// remove a parameter of the given url
SipaUrl.removeParamOfUrl(url, "stat");
// => "https://my-business.com/?one=1"

// set an anchor of the given url
SipaUrl.setAnchorOfUrl("https://my-business.com/?x=1", "section");
// => "https://my-business.com/?x=1#section"
```

There are matching methods for parameters, the anchor, the host name and the protocol:

* Parameters: `getParamsOfUrl`, `setParamsOfUrl`, `removeParamOfUrl`, `removeParamsOfUrl`
* Anchor: `getAnchorOfUrl`, `setAnchorOfUrl`, `removeAnchorOfUrl`
* Host and protocol: `getHostNameOfUrl`, `setHostNameOfUrl`, `setProtocolOfUrl`
* Helper: `getUrlWithoutParamsAndAnchor`

None of these methods change the current browser URL. They only return a new string, which you are free to use as you like. See the [SipaUrl API](/docs/api/SipaUrl) for the full list.

## Example: navigate with a parameter and read it

A typical flow is to navigate to a page with a query parameter, for example a language, and read it on the target page.

```javascript title="navigate with a parameter"
SipaPage.load('imprint', { params: { lang: 'de' } });
// URL: https://my-app.com/?lang=de
```

```javascript title="imprint.js reads the parameter on the target page"
class ImprintPage extends SipaBasicView {
    static onInit() {
        const lang = SipaUrl.getParams().lang ?? 'en';
        console.log(`showing imprint in language: ${lang}`);
    }
}
```

By default `keep_params` is `true`, so parameters set earlier stay in the URL when you navigate to another page. Pass `keep_params: false` if a page should start with a clean set of parameters.
