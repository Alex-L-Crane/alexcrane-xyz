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
  <a href="/about" class="link-underline decoration-muted-ink/40 hover:decoration-muted-ink">About</a>
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

## Link grammar (site-wide)

- **Thin underline** = a text link at rest. Structural class `.link-underline`
  (`underline decoration-1 underline-offset-2 hover:decoration-2
  transition-colors`) plus a per-usage decoration color at ~40% opacity that
  strengthens to full opacity on hover (e.g. `decoration-muted-ink/40
  hover:decoration-muted-ink`, or `decoration-[#9A2C2C]/40
  hover:decoration-[#9A2C2C]`). This is the default signature for inline text
  links: wayfinding (the eyebrow) and name lists alike.
  - Add an **external icon** only for a solitary outbound link (e.g. the
    Bandcamp icon+link on Music) -- lists of links don't get per-item icons.
- **Highlighter** (`.highlight-link`, background wash) = an internal
  content-to-content link (e.g. "More about my music background").
- **Red** (`text-[#9A2C2C]`) = link, always. No red text may be
  non-interactive on a content page -- if it's red, it must be a real `<a>`
  with the `.link-underline` treatment.
- **Main nav is the one exception**: no resting underline there. It reserves
  a persistent underline (`border-b-2` + bold) for the active page/section,
  shown on hover only otherwise. Don't apply `.link-underline` inside
  `MainMenuBar.vue`.
- **Outbound links** (anything leaving the site) always use
  `target="_blank" rel="noopener noreferrer"` -- verified consistent across
  every red link and the Bandcamp links already.
