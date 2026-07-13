# Site-wide typography/layout conventions

Shared classes live in `src/assets/styles/main.css` under `@layer components`;
shared color tokens live in `tailwind.config.js`. Prefer these over re-deriving
the same utility combination as a one-off on a page.

## Breadcrumb eyebrow

A small "About → Music"-style line above a page's headline, used on
long/sub-pages under a section (Music, and eventually Design, Philosophy,
Resume).

Structure:

```html
<nav aria-label="Breadcrumb" class="alaska pt-4 flex items-center gap-2 text-sm italic text-muted-ink">
  <a href="/about" class="hover:opacity-80 transition-opacity">About</a>
  <span aria-hidden="true">→</span>
  <span>Music</span>
</nav>
```

- The parent section links (`About`); the current page is a plain `<span>`.
- Uses the `→` glyph directly, styled by the surrounding `italic`/`text-sm`. Only
  swap to an SVG arrow (sized ~0.7em, `currentColor`) if the glyph renders
  heavier than the surrounding italic at a given size.
- Colored with the `muted-ink` token (see below), not `opacity` on the section's
  text color -- opacity blends with whatever's behind it, so the same "muted"
  intent would render as a different actual color on every section background.

## `muted-ink` color token

`tailwind.config.js` → `theme.extend.colors['muted-ink']` (`#8A8478`). A solid,
opaque color reserved for quiet/secondary text (like the eyebrow) that needs to
read the same regardless of which section background it sits on. Don't use
`text-white/70`, `text-black/50`, etc. for this purpose -- add to this token
(or a variant of it) instead.

## `.movement-heading`

A heading tier between a page's hero h1/h2 and its regular body content, for
pages long enough to need an internal section break (e.g. Music's "Personal
Music"). Class: `.movement-heading` (`neogeo text-5xl/[1] mb-8`). Reach for
this on any future long page that needs the same kind of internal break,
rather than re-typing the three utilities.
