---
sidebar_position: 3
---

# Create a new page

Sipa projects are structured into logical pieces called "pages".

A page consists of 
* a HTML template file
* a JS page file
* a SCSS style sheet file

## Page live cycle

Before a page is loaded, a layout will be loaded first, and then the page will be put into the layout and rendered.

```md title="page live cycle"
Trigger Page Load -> Layout is loaded -> Page is loaded
```

## Load another Page
Another pages can be loaded with `SipaPage` class.

```js
SipaPage.load('imprint', options);
```

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['guides-basics/create-a-new-page'],
    },
  ],
};
```