# Site-wide typography/layout conventions

Shared classes live in `src/assets/styles/main.css` under `@layer components`;
shared color tokens live in `tailwind.config.js`. Prefer these over re-deriving
the same utility combination as a one-off on a page.

## Workflow: commits

Never commit unless explicitly told to commit. Toggling, adjusting, or
trying a variant for review is never a commit trigger. When asked to
revert, state exactly which commit(s) will be affected and what the
resulting state will be, then wait for confirmation before running
anything.

## Standing rule: About is the reference implementation

About was the first page built with this site's design system and remains its
source of truth. When a new page needs a treatment About already has (body
text, italic subheads, captions, highlighter/thin-underline links, the
eyebrow, `muted-ink`, `.movement-heading`, photo/caption blocks, section
spacing), it must **adopt the existing shared class/component/token** --
never re-derive an equivalent utility stack that happens to render the same.

**Visual similarity achieved through duplicated ad-hoc styling is a defect,
not a pass.** Two elements that render identically but are styled
differently will drift apart the next time either one is edited -- that's
the failure mode this rule exists to prevent (it's exactly what happened to
Music's hero wrapper, body columns, and headline before the pass that fixed
them: all three matched About's rendered output at desktop while silently
reimplementing it with independent utilities).

When a new page needs a genuine variation of an About pattern (a different
section background, a new heading tier), extend the shared implementation
with a modifier, prop, or token -- never fork it into a page-local copy. If
adopting a shared class would change a page's current rendering, that's
worth flagging and deciding deliberately, not picking a side silently.

**Concrete now, refactor at second use:** a pattern that exists on exactly
one page (the breadcrumb eyebrow, the discography grid) should stay as
plain, concrete markup on that page -- built from existing shared
primitives where they apply, but not pre-emptively extracted into its own
component/props API. Componentize it only once a second page actually needs
the same shape; extracting the abstraction before that point means guessing
at an API against a sample size of one.

## Breadcrumb eyebrow: `EyebrowNav.vue`

A small "About → Music"-style line above a page's headline. Started as
concrete markup on Music (its only consumer); once Philosophy needed the
identical structure, it was pulled into `src/components/navigation/EyebrowNav.vue`
per the concrete-now/refactor-at-second-use rule above -- that's the rule
in action, not just a description of it. Used the same way on every
essay/document page: `<EyebrowNav parent-label="About" parent-href="/about"
current-label="Philosophy" />`.

Internals (for reference, don't re-derive this elsewhere):

```html
<nav aria-label="Breadcrumb" class="alaska pt-4 flex items-center gap-2 text-base italic text-muted-ink">
  <a :href="parentHref" class="link-underline decoration-muted-ink/40 hover:decoration-muted-ink focus-visible:decoration-muted-ink py-2.5 -my-2.5">{{ parentLabel }}</a>
  <span aria-hidden="true">→</span>
  <span>{{ currentLabel }}</span>
</nav>
```

- The parent section links; the current page is a plain `<span>`.
- Uses the `→` glyph directly, styled by the surrounding `italic`/`text-base`. Only
  swap to an SVG arrow (sized ~0.7em, `currentColor`) if the glyph renders
  heavier than the surrounding italic at a given size.
- Colored with the `muted-ink` token (see below), not `opacity` on the section's
  text color -- opacity blends with whatever's behind it, so the same "muted"
  intent would render as a different actual color on every section background.
- Size: `text-base`. The link carries `py-2.5 -my-2.5` (padding for a 44px tap
  target, compensating negative margin so it doesn't grow the eyebrow row).

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

## `.hero-headline`

The large page-title treatment inside a page's hero `.section-panel`:
`swissposters font-light text-balance text-6xl/[1] sm:text-7xl/[1]
md:text-[7rem]/[1] lg:text-[10rem]/[1] pb-8 w-full`. Originally typed
directly on About's `h1`; Music's `h1` had independently retyped just the
`lg:` value (`text-[10rem]/[1]`), which rendered identically at desktop
while missing the responsive steps and `text-balance` entirely -- exactly
the "renders the same, styled differently" defect this file warns about.
Both pages' `h1` now use this class. Any future page's hero headline should
too, rather than retyping the utility stack (even partially).

## Section-background "stock" tokens

Named `tailwind.config.js` color tokens for page-root background colors --
`stock-blush` (`#F6D9CE`, About), `stock-yellow` (`#F5D37D`, Music),
`stock-chartreuse` (`#D8F172`, Philosophy) -- applied as `bg-stock-*` on
the page root. A future page's background color is a new one-line token
(`'stock-<name>': '#hex'`) plus `bg-stock-<name>` on its root, not a fresh
`bg-[#hex]` arbitrary value. This is the "extend, don't fork" mechanism
for the one legitimate kind of per-page variation the design system needs
to support: each section's own color.

## Page genres: essay vs. document

Two shapes of page, not one template with optional pieces:

- **Essay pages** (About, Music, and future Design): hero image inside
  `.section-panel`, `.hero-headline`, illustrated with photos
  (`.section-panel` + `.photo-caption`), body prose in `.prose-col`/
  `.body-copy`, an optional `.movement-heading` break.
- **Document pages** (Philosophy, and future Resume): text-only, no hero
  image and no photos. Still opens with `EyebrowNav` + `.hero-headline`
  inside `.section-panel` (the headline needs the same page-datum edge
  alignment either way, image or no image) and a lede (see below), but the
  body is the `.ledger-row` pattern instead of flowing prose paragraphs.

Don't force a document page into the essay shape (no hero image to add
just to match the pattern) or vice versa -- pick the genre that fits the
content, and use that genre's own conventions throughout.

## `.ledger-row`: label | rule | text pattern

For document-genre pages: a label column, its own rule, then a text
column at the standard reading width. Three classes compose it:

```html
<div class="ledger-row">
  <div class="ledger-label">
    <h2 class="neogeo text-3xl lg:text-5xl/[1]">Mission</h2>
  </div>
  <div class="ledger-text">
    <div class="prose-col">
      <p class="body-copy">Entry copy goes here.</p>
    </div>
  </div>
</div>
```

- `.ledger-row` (`flex flex-col lg:flex-row mb-16 md:mb-24 lg:mb-32`): the
  row shell and spacing token -- the two-column layout is structure
  (breakpoint doctrine: holds at lg+ only, stacks below). Row-to-row
  spacing steps down with it (64/96/128px), the same mt-16/md:mt-24/
  lg:mt-32 convention as Music's movement seam. Don't override per-row; if
  a row needs more trailing space than its neighbors (e.g. before an exit
  link block), add that margin on the *following* element instead.
- `.ledger-label` (`w-full lg:w-1/4 text-left lg:text-right mb-4 lg:mb-0
  lg:border-r-2 border-almost-black lg:pr-8`): the label + its rule at
  lg+. Below lg it's full-width, left-aligned (a right-aligned label alone
  on its own line reads wrong once stacked), with no rule of its own --
  the rule relocates to `.ledger-text` instead (see below). Label
  font-size is set per-instance on each row's own `<h2>`
  (`text-3xl lg:text-5xl/[1]` -- tune the mobile step by eye), not baked
  into `.ledger-label`, since size is a heading-level concern.
- `.ledger-text` (`w-full lg:w-3/4 border-l-2 lg:border-l-0
  border-almost-black pl-8`): the text column's inset. At lg+, no rule
  (the label's `border-r-2` provides it). Below lg, this side picks up a
  `border-l-2` in the same weight/color as the desktop rule -- the rule
  *relocates* rather than disappearing, so a stacked entry still reads as
  label, then a rule-flanked text block. Pair with `.prose-col`
  (reading-width cap) and `.body-copy` on the actual paragraphs/list items
  -- don't reach for bespoke font sizing here.
- **Unlabeled reuse (lede, exit links):** a block that needs `.ledger-text`'s
  column alignment but isn't an actual entry (no label, no rule) must (a)
  wrap in `flex flex-col lg:flex-row` too, so the empty `w-1/4` spacer
  collapses out of the way below lg instead of still claiming a quarter of
  a row that's supposed to go full-width, and (b) add `border-l-0` to
  cancel the rule `.ledger-text` now applies at that width. See the lede
  convention below for the full pattern.
- Minted from Philosophy's Mission/Manifesto/My Why; Resume will reuse it.

## Lede convention

A document page's epigraph, between the headline and the first
`.ledger-row`: unlabeled, no rule, set in `.italic-subhead` (see below).
Reuse `.ledger-text` on an otherwise-empty `w-1/4` spacer row so the lede's
left edge lands exactly on the ledger's text column, without pulling in
`.ledger-label`'s visible border/right-alignment. The row wraps in
`flex flex-col lg:flex-row` and the `.ledger-text` div adds `border-l-0`
(canceling the rule `.ledger-text` applies below lg for actual ledger
entries -- the lede/exit-links pattern needs the column alignment but not
the rule):

```html
<div class="flex flex-col lg:flex-row mb-48">
  <div class="w-1/4"></div>
  <div class="ledger-text border-l-0">
    <div class="prose-col">
      <p class="italic-subhead">Lede copy goes here.</p>
    </div>
  </div>
</div>
```

Spacing: the gap between the lede and the first ledger row must read as
the page's biggest gap -- visibly larger than the `mb-32` between ledger
rows (Philosophy uses `mb-48`, 192px vs. 128px). Preamble, then entries.

## `.italic-subhead`

The italic spoken-voice register (`alaska text-3xl italic`): About's
"Sound is not a backdrop." and "It takes... So. Much. Time.", Music's "A
guiding practice...", Philosophy's lede. Previously bare utilities on each
page (plus a semantic `<em>` where the phrase is emphasis inside a larger
paragraph, which still applies when that's the actual usage); extracted
into a class once Philosophy's lede became a third, standalone use.

**Size variant -- `.italic-subhead-compact`:** the base class's `text-3xl`
is tuned for a one-line aside; a multi-sentence instance (Philosophy's
lede runs 4-5 lines) at that size competes with the headline above it.
Pair `.italic-subhead-compact` alongside the base class (`class=
"italic-subhead italic-subhead-compact"`) to step down to `text-2xl` --
don't fork a new class or hand-type the override. The rule: one-line
instances stay bare `.italic-subhead` (3xl); multi-sentence instances add
the `-compact` modifier (2xl). `.italic-subhead-compact` is defined
directly after the base class in `main.css` so the cascade tie resolves
predictably -- if either class ever needs reordering, keep them adjacent.

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
