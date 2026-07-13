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
<nav aria-label="Breadcrumb" class="alaska pt-4 flex items-center gap-2 text-base italic text-muted-ink">
  <a href="/about" class="link-underline decoration-muted-ink/40 hover:decoration-muted-ink focus-visible:decoration-muted-ink">About</a>
  <span aria-hidden="true">→</span>
  <span>Music</span>
</nav>
```

- The parent section links (`About`); the current page is a plain `<span>`.
- Uses the `→` glyph directly, styled by the surrounding `italic`/`text-base`. Only
  swap to an SVG arrow (sized ~0.7em, `currentColor`) if the glyph renders
  heavier than the surrounding italic at a given size.
- Colored with the `muted-ink` token (see below), not `opacity` on the section's
  text color -- opacity blends with whatever's behind it, so the same "muted"
  intent would render as a different actual color on every section background.
- Size: `text-base` (bumped up from an initial `text-sm`).

## `muted-ink` color token

`tailwind.config.js` → `theme.extend.colors['muted-ink']` (`#5A554D`). A solid,
opaque color reserved for quiet/secondary text (the eyebrow, mentor-line
descriptors) that needs to read the same regardless of which section
background it sits on. Don't use `text-white/70`, `text-black/50`, etc. for
this purpose -- add to this token (or a variant of it) instead.

This value was darkened from an initial `#8A8478`, which failed WCAG AA on
both backgrounds it's used against:
  - vs Music yellow (`#F5D37D`): 2.56:1 (fail)
  - vs About blush (`#F6D9CE`): 2.78:1 (fail)

`#5A554D` keeps the same warm-gray hue/ratio, scaled down for luminance, and
clears AA on both with real margin:
  - vs Music yellow (`#F5D37D`): 5.10:1
  - vs About blush (`#F6D9CE`): 5.54:1

If muted-ink ever needs to sit against a new section background, re-check
both ratios before shipping -- darken the token, not the type size, if it
fails.

## `.movement-heading`

A heading tier between a page's hero h1/h2 and its regular body content, for
pages long enough to need an internal section break (e.g. Music's "Personal
Music"). Class: `.movement-heading` (`neogeo text-5xl/[1] mb-8`). Reach for
this on any future long page that needs the same kind of internal break,
rather than re-typing the three utilities.

## Link grammar (site-wide)

- **Thin underline** = a text link at rest. Structural class `.link-underline`
  (`underline decoration-1 underline-offset-2 hover:decoration-2
  focus-visible:decoration-2 transition-colors`) plus a per-usage decoration
  color at ~40% opacity that strengthens to full opacity on hover AND
  keyboard focus (e.g. `decoration-muted-ink/40 hover:decoration-muted-ink
  focus-visible:decoration-muted-ink`, or `decoration-[#9A2C2C]/40
  hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]`). This is the
  default signature for inline text links: wayfinding (the eyebrow) and name
  lists alike.
  - Add an **external icon** only for a solitary outbound link (e.g. the
    Bandcamp icon+link on Music) -- lists of links don't get per-item icons.
  - **Every `hover:` gets a `focus-visible:` twin**, applied at the shared
    class/component level where the property is structural (e.g.
    `.link-underline`'s `decoration-2`), and per-usage where it's instance-
    specific (the decoration color). Never ship a hover-only effect in this
    system -- keyboard users need the same affordance.
- **Mentor-line convention** (name + descriptor, no punctuation separator):
  only the name sits inside the anchor (`.link-underline` red treatment); the
  descriptor is a plain `<span class="text-muted-ink">` outside the anchor,
  divided from the name by a single space in the markup and by color/weight
  alone -- no hyphen, en dash, or other separator character. E.g.:
  ```html
  <a href="..." class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Trey Gunn</a> <span class="text-muted-ink">virtuoso and music coach</span>
  ```
  The underline stops cleanly at the name since the descriptor is outside the `<a>`.
- **Highlighter** (`.highlight-link`, background wash) = an internal
  content-to-content link (e.g. "More about my music background"). Already
  had its `focus-visible` deepen twin from an earlier pass.
- **Red** (`text-[#9A2C2C]`) = link, always. No red text may be
  non-interactive on a content page -- if it's red, it must be a real `<a>`
  with the `.link-underline` treatment.
- **Main nav is the one exception** to `.link-underline`, not to focus
  parity: no resting underline, and it uses its own mechanism
  (`border-b-2`) rather than `.link-underline`. The active page/section gets
  a persistent `border-b-2` + bold; any other nav link shows the same
  `border-b-2` (without the bold) on **both** hover and keyboard focus
  (`hover:border-b-2 focus-visible:border-b-2` in `MainMenuBar.vue`) --
  weight is what distinguishes "current page" from "hovered/focused."
- **Outbound links** (anything leaving the site) always use
  `target="_blank" rel="noopener noreferrer"` -- verified consistent across
  every red link and the Bandcamp links already.

## Punctuation voice (site-wide, all rendered copy)

- **Curly quotes and apostrophes only** -- no straight `"` or `'` in any
  paragraph, heading, list item, or caption. (`’` `“` `”`, not `'` `"`.)
- **Single ellipsis character** (`…`), never three periods (`...`).
- **No em or en dashes in body copy.** Plain punctuation -- commas, periods,
  colons -- is the site's voice. (Router `meta.title` browser-tab strings are
  metadata, not body copy, and are exempt from this specific rule.)
- These rules apply to rendered text content only, not code (JS spread
  syntax, code comments, class/attribute strings, data files) -- don't
  "fix" punctuation inside actual code just because the pattern matches.
