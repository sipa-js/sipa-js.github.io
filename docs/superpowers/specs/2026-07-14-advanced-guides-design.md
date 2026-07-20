# Spec: Phase 2 — New Advanced Guides

**Date:** 2026-07-14
**Repo:** sipa-js.github.io
**Goal:** Document five missing feature topics as topic-centric Advanced guides, source-code based, with a review gate per guide.

## Principles

- Topic-centric guides (a topic, not a single class).
- All under Advanced (`docs/guides/guides-extras/`).
- Source-code based; examples derived from `../sipa-js/sipa/src/sipa/` and verified where possible.
- Mobile/OnsenUI only briefly mentioned ("analogous for mobile"), no dedicated mobile examples, since mobile may be removed long-term.
- Consistent with existing guide style (frontmatter, `:::info/:::tip`, code blocks with `title=`).
- No long dashes in prose.

## Structure (Advanced, final)

| Prefix | File | Title | sidebar_position |
|--------|------|-------|------------------|
| 010 | 010_using-translations.mdx | Using translations | 1 (existing) |
| 020 | 020_cli-hooks.md | CLI hooks | 2 (existing) |
| 030 | 030_templating-with-ejs.md | Templating with EJS | 3 (existing) |
| 040 | 040_project-configuration.md | Project configuration | 4 (existing) |
| 050 | 050_state-management.md | State management | 5 (new) |
| 060 | 060_navigation-and-url-handling.md | Navigation & URL handling | 6 (new) |
| 070 | 070_lifecycle-hooks.md | Lifecycle hooks | 7 (new) |
| 080 | 080_event-management.md | Event management | 8 (new) |
| 090 | 090_testing-your-app.md | Testing your app | 9 (new) |
| 100 | 100_SipaComponent/ | SipaComponent | moved from 050 |

**Renumbering:** `git mv 050_SipaComponent 100_SipaComponent`. The internal `sidebar_position: 1` in `sipa-component.md` stays unchanged (folder-internal order).

## Guide contents

### 050 State management
- Concept: three persistence levels — Variable (until reload), Session (until browser close), Storage (until cache clear).
- Core API: `SipaState.set/get/remove` plus level-specific variants (`setVariable/setSession/setStorage`), `getLevel`, `hasKey`.
- End-to-end example: persist user settings (language + theme) across reloads and sessions.
- Note: values are serialized (SipaSerializer), so objects/arrays work.
- Link to API reference.

### 060 Navigation & URL handling
- Navigation: `SipaPage.load(page_id, options)` with the important options: `layout_id`, `params`, `keep_params`, `anchor`, `keep_anchor`, `force_load`, `fade_effect`, `stack_page`, callbacks (`success`/`error`/`always`).
- Page history/stack: brief note on `stack_page` and back navigation.
- URL parameters via `SipaUrl` (`getParams`, `setParam`, `removeParam`, `hasParam`).
- Anchor: `setAnchor`, `getAnchor`, `removeAnchor`.
- Example: navigation with query parameters (e.g. `?lang=de`) and reading them on the target page.
- The `...OfUrl` variants (arbitrary URLs) only mentioned, link to API.
- Mobile note: `SipaOnsenPage` analogous.

### 070 Lifecycle hooks
- Prominent distinction runtime hooks vs. CLI hooks (runtime vs. build/CLI).
- The five hooks: `beforeInitPage`, `beforeShowPage`, `beforeDestroyPage`, `beforeInitLayout`, `beforeDestroyLayout` — when each fires.
- Usage: `on`/`off`/`trigger` types, registration in `app/config/hooks.js`.
- Example: global init (`SipaComponent.init()` in `beforeInitPage`), matching the existing SipaComponent guide.
- Mobile note: `SipaOnsenHooks` analogous.
- Link to API reference.

### 080 Event management
- Concept: reusable event system for your own classes.
- Integration pattern: an `events()` method returning a `SipaEvents` instance with valid event names.
- Core API: `subscribe`, `unsubscribe`, `unsubscribeAll`, `trigger` (with arbitrary params), `createEvents` (runtime), `getValidEventNames`.
- Example: a custom class with `click`/`update` events and a subscriber reacting to them.
- Cross-reference: SipaComponent uses this internally (`before_update`, `after_destroy`, etc.).
- Link to API reference.

### 090 Testing your app
- Setup: `sipa new` ships Karma + Jasmine; structure `spec/tests/browser/`, `karma.conf.js`.
- Writing a spec: `describe`/`it`, `SipaTest.enableTestingMode()` in `beforeAll` (why: disables render throttling for instant renderings).
- Running tests: the generated npm scripts (`npm test`, `test:watch`, `test:karma`).
- Example: test a SipaComponent (instantiate, `update()`, check DOM).
- Link to the SipaTest API.

## Implementation order (one review gate each)

1. 050 State management
2. 060 Navigation & URL handling
3. 070 Lifecycle hooks
4. 080 Event management
5. 090 Testing your app
6. Renumber SipaComponent (050 to 100) and verify sidebar order

## Verification

- Per guide: source-code based examples, your content approval.
- After all guides: Docusaurus build (`yarn build` in the docs repo) must pass; verify sidebar order; no broken internal links.
