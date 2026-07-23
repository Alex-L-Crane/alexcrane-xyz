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

**Dark stock**: `#5A554D` on `stock-ink` (`#1c1c1c`) measures 2.3:1 -- fails
AA outright, the direction this token has never had to move before. Rather
than a one-off dark value, `muted-ink` (and `link-red`, see below) are
CSS-variable-backed and get their dark-stock values from `.bg-stock-ink`
automatically -- see "Dark-stock token overrides" below for the mechanism
and exact values.

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

**Forcing a line break:** `text-balance` handles automatic wrapping, but a
headline that needs a specific, deliberate two-line split (About's "All tech
and no music<br>makes Alex a dull boy", Philosophy's
"Methodical<br>non-utilitarianism") gets there with a literal `<br>` inside
the `h1`, not a width constraint or a text-wrap utility. Both pages already
do this the same way -- it's a content-level break, not something that
touches `.hero-headline` itself, so it can't drift the class out of sync the
way a bespoke CSS mechanism could.

## Section-background "stock" tokens

Named `tailwind.config.js` color tokens for page-root background colors --
`stock-blush` (`#F6D9CE`, About), `stock-yellow` (`#F5D37D`, Music),
`stock-chartreuse` (`#D8F172`, Philosophy), `stock-coral` (`#FA8072`, the
full-screen menu overlay), `stock-ink` (`#1c1c1c`, Design), `stock-paper`
(`#FFFFFF`, Drumming and Technology), `stock-utility` (`#D3D7D2`, the
colophon overlay and the 404 page) -- applied as `bg-stock-*` on the page
root. A future page's background color is a new one-line token
(`'stock-<name>': '#hex'`) plus `bg-stock-<name>` on its root, not a fresh
`bg-[#hex]` arbitrary value. This is the "extend, don't fork" mechanism for
the one legitimate kind of per-page variation the design system needs to
support: each section's own color.

`stock-utility` is deliberately outside the section-stock set above it --
it doesn't belong to a page the way blush/yellow/chartreuse/ink/paper each
mark one. **Non-section utility surfaces share one neutral ground**, not a
fresh stock per surface: the colophon overlay (credits, meta content about
the site itself) and the 404 page (an error state, not a destination) are
both "the site talking about itself" rather than a section of it, so both
sit on the same neutral cool gray, chosen to read as documentation/meta
rather than as another stop in the site's own color sequence. A future
non-section surface (another overlay, another system page) reuses
`stock-utility` rather than minting its own -- mint a new stock only when
something is a genuine page/section with its own place in that sequence.

**The 404 page also breaks from every page genre's layout** (`src/views/NotFoundPage.vue`), not just its stock: no `.section-panel`, no `EyebrowNav`, no left-aligned body column. It's a single notice block (headline, one-line lede, recovery links), centered both horizontally *and* vertically in the viewport, filling the space below the nav with `min-h-dvh flex items-center justify-center` rather than flowing top-down. **Horizontal centering is a deliberate exception** to the site's left-aligned convention everywhere else (every essay/document/feed page reads left-to-right from a fixed gutter) -- reserved for this one non-publication surface, the same way `stock-utility` is reserved for non-section surfaces. A future page with real content stays left-aligned regardless of how minimal it is; centering marks "this isn't a page, it's a notice." Headline stays at full `.hero-headline` scale (tried stepping it down to `.movement-heading` first -- read as underweight for a single centered line, reverted) inside a widened `max-w-4xl` container (hero-headline's own size needs more room than the block's earlier `max-w-xl` gave it) with its baked-in `pb-8` zeroed via `pb-0` in favor of an explicit `mb-4 lg:mb-6`. Internal spacing between headline/lede/links is intentionally tight (`mb-4 lg:mb-6`, `mb-6 lg:mb-8`) so the three read as one block, with the surrounding whitespace -- not internal margins -- doing the work of framing it.

About's blush was re-auditioned against cool candidates (July 2026) and
deliberately retained -- the front door reads friendly by design.

**Light stock vs. dark stock**: every stock above `stock-ink` is light
(dark ink text on a light/mid background); `stock-ink` is the site's first
dark stock (light text on a near-black background). Dark stock isn't just
"a darker hex" -- it inverts which tokens need overriding (see "Dark-stock
token overrides" below) and picks up its own structural convention:

**Body/footer separator**: a dark-stock page root and the global footer
(also near-black) collide with no visual seam between them unless the page
root supplies one. Design's root carries `border-b border-white/20` --
tuned down from full-opacity white, which measured as the highest-contrast
line on the site and read as harsh against near-black. Any future dark
stock needs the same border-b treatment on its root (start from `/20`, not
full white); light stocks don't need it (the footer's own near-black
already reads as a clear break against a light page).

## Dark-stock token overrides (CSS variables)

`muted-ink` and `link-red` are the two tokens whose *value* needs to flip
between light and dark stock (contrast requirements point in opposite
directions), so both are defined as CSS-variable lookups rather than a flat
hex, with the light-stock value as the `:root` default:

```js
// tailwind.config.js
'muted-ink': 'rgb(var(--muted-ink-rgb) / <alpha-value>)',
'link-red': 'rgb(var(--link-red-rgb) / <alpha-value>)',
```
```css
/* main.css -- :root default (light stock) */
--muted-ink-rgb: 90 85 77;      /* #5A554D */
--link-red-rgb: 154 44 44;      /* #9A2C2C */

/* main.css -- dark-stock override, scoped to the page root */
.bg-stock-ink {
  --muted-ink-rgb: 148 141 126; /* #948D7E, muted-ink-dark, 5.17:1 on stock-ink */
}
```
The RGB-channel format (not a hex string) matters -- it's what lets
Tailwind's opacity modifiers (`decoration-muted-ink/40`, etc.) keep working
on a variable-backed color. Every existing `text-muted-ink`,
`decoration-link-red/40`, etc. usage -- including inside shared components
like `EyebrowNav.vue` that have no dark/light prop -- automatically resolves
to the right value based on which stock it's nested inside, via the
cascade. No component threads a boolean; a future dark stock just adds its
own override rule scoped to its own `bg-stock-*` class. `link-red-dark`
joins `.bg-stock-ink` the same way once Design's link-vocabulary pass picks
a value.

## Overlay shell: `MainMenuOverlay.vue`

A single reusable full-screen overlay shell, not a component per overlay.
Handles everything that's genuinely shared across any full-screen overlay
on the site: fade transition (motion-safe gated, disabled entirely under
`prefers-reduced-motion: reduce`), ESC to close, tab-cycling focus trap,
click-outside-to-close (`@click.self`), `z-[1000]`, and `role="dialog"
aria-modal="true"`. Content and presentation are props/slot, not forked
markup:

- `background` (a `bg-stock-*` class), `text-class` (base typography/ink
  for the panel), `aria-label` (the dialog's accessible name), `content-
  align` (`'center'` | `'top'`), `show-close-button` (renders an internal
  44×44 close control when the consumer has no persistent external trigger
  to morph into one -- see below).
- Content is the default `<slot>`; the main menu's own `<MainMenuLinks />`
  is the slot's fallback, so the existing call site (`<MainMenuOverlay
  :visible="showMenu" @close="showMenu = false" />` in `MainMenuBar.vue`)
  needed zero changes when the shell went generic.

**Focus-return-to-trigger is NOT the shell's job.** It never was, even
before the colophon overlay existed -- `MainMenuOverlay.vue` only focuses
the first focusable element inside itself on open. Returning focus to
whatever *triggered* the overlay is the caller's responsibility, done via
the same small pattern in both consumers: a local `ref` on the trigger
element, a `watch` on the visibility flag that also owns scroll-lock
(`position: fixed` with the scroll offset preserved and restored), and
`nextTick(() => trigger.value?.focus())` in the close branch. `MainMenuBar.vue`
does this for the dots/X button; `GlobalFooter.vue` does the identical
thing for the "Colophon" link. A third consumer follows the same pattern,
not a new one.

**Close affordance differs by consumer, not by shell behavior.** The main
menu's close control is external to the overlay (the dots button morphs
into an X, positioned above the overlay's own `z-[1000]`) because that
trigger is always on-screen already. A consumer with no such persistent
trigger (the colophon, launched from a link buried in the footer) opts
into `show-close-button` for a visible in-overlay control instead.

## Exhibit pattern: `.exhibit-inline` / `.exhibit-full`

A `<figure>`/`<figcaption class="photo-caption">` pairing for showcasing a
single piece of work in the middle of body content -- distinct from
About/Music's hero-adjacent photo-panel blocks (2-up + wide photo, living
inside `.section-panel`). Two treatments, named for their shape, both
minted from Design's system pass:

- **`.exhibit-inline`** (`mb-8 text-center`): a width-capped, centered
  figure sitting inline with body copy -- pair the `<img>` with its own
  `mx-auto max-w-*` (tuned per image, not baked into the class). Design's
  Kinetic Beats screenshot.
- **`.exhibit-full`** (`max-w-6xl mx-auto mb-8`): a near-bleed, wide figure,
  caption at the left datum rather than centered. Design's iMaschine shot.

```html
<figure class="exhibit-inline">
  <img :src="..." alt="..." class="mx-auto max-w-sm"/>
  <figcaption class="photo-caption">...</figcaption>
</figure>
```

Reach for one of these two on a future page's mid-body exhibit rather than
retyping the wrapper div/span combination -- that's exactly the shape this
pattern replaced (Design had both treatments as bespoke, unnamed divs
before this pass).

## Page genres: essay, document, and feed

Three shapes of page, not one template with optional pieces:

- **Essay pages** (About, Music, Design): hero image inside `.section-panel`,
  `.hero-headline`, illustrated with photos (`.section-panel` +
  `.photo-caption`, or the mid-body `.exhibit-inline`/`.exhibit-full` pair),
  body prose in `.prose-col`/`.body-copy`, an optional `.movement-heading`
  break. **Design's hero image is a deliberate exception** -- its full-bleed-
  into-black look doesn't take `.section-panel`'s inset; the eyebrow +
  `.hero-headline` still get a minimal `.mobile-gutter` inset so the text
  isn't flush against the edge, but the image itself stays uninset at every
  width. Don't treat this as the new default -- About and Music's hero images
  keep the normal `.section-panel` inset; Design's bleed is a one-off for
  what that specific piece of art needs, not a genre-wide change.
- **Document pages** (Philosophy, and future Resume): text-only, no hero
  image and no photos. Still opens with `EyebrowNav` + `.hero-headline`
  inside `.section-panel` (the headline needs the same page-datum edge
  alignment either way, image or no image) and a lede (see below), but the
  body is the `.ledger-row` pattern instead of flowing prose paragraphs.
- **Feed pages** (Drumming, Technology): masthead slot (optional/variant),
  filter list, entry stream, pagination -- no hero image, no `EyebrowNav`
  (these are top-level nav destinations, not children of another page).
  Takes `stock-paper` rather than a colored stock -- see "Section-background
  'stock' tokens" above: the stock marks genre, not section.

  Feed mastheads are deliberately asymmetric -- Drumming carries the
  creed-form set ("Systems. Patterns. Perception.", moved here from
  Technology), Technology a muted descriptive line ("The work behind the
  work."), reflecting the site's front-door hierarchy. Do not "fix" the
  mismatch.

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

- `.ledger-row` (`flex flex-col lg:flex-row mb-16 md:mb-24 lg:mb-32 pl-8
  pr-2 sm:pr-4 md:pr-8 lg:px-0`): the row shell and spacing token -- the
  two-column layout is structure (breakpoint doctrine: holds at lg+ only,
  stacks below). Row-to-row spacing steps down with it (64/96/128px), the
  same mt-16/md:mt-24/lg:mt-32 convention as Music's movement seam. Don't
  override per-row; if a row needs more trailing space than its neighbors
  (e.g. before an exit link block), add that margin on the *following*
  element instead. Below lg the row also carries a single shared left/right
  inset, so label, stub rule, and text can't drift apart into different
  edges: left is a flat `pl-8` (matching the text column's own former
  stand-alone inset); right is the site's standard mobile body gutter
  (`px-2 sm:px-4 md:px-8`, the same token About/Music/Design use on their
  own body rows) -- reused as-is on the right, not re-derived, even though
  the left side's flat value means the two sides aren't symmetric. Resets
  to `lg:px-0` since desktop's own `w-1/4`/`w-3/4` + `lg:pr-8` column
  structure handles spacing there untouched.
- `.ledger-label` (`w-full lg:w-1/4 text-left lg:text-right mb-3 lg:mb-0
  lg:border-r-2 border-almost-black lg:pr-8`): the label + its rule at
  lg+. Below lg it's full-width, left-aligned (a right-aligned label alone
  on its own line reads wrong once stacked), with no border of its own --
  see the stub rule below for the below-lg rule treatment.
- **Below-lg rule: a stub, not a relocated border.** A left border on
  `.ledger-text` (the rule "relocating" from label to text block) was tried
  first and rejected -- it read as a stray edge line once rows stack. The
  adopted pattern instead is a short (3rem, fixed-width) rule stub, a
  `.ledger-label::after` pseudo-element living in `main.css` directly below
  `.ledger-label`, clearly delimited (`MOBILE RULE STUB` comment markers)
  so it stays easy to compare against a bare/no-rule alternative if a
  future page wants to try that instead. `display: none` above `lg` (the
  desktop `border-r-2` is the rule there).
- `.ledger-text` (`w-full lg:w-3/4 lg:pl-8`): the text column. Its own
  below-lg inset now comes from `.ledger-row`'s shared padding above (not a
  stand-alone `pl-8` on this class), so it can't fall out of sync with the
  label; `lg:pl-8` is kept here for the desktop gap after the label's
  `border-r-2` rule, which only this column needs. Pair with `.prose-col`
  (reading-width cap) and `.body-copy` on the actual paragraphs/list items
  -- don't reach for bespoke font sizing here.
- **Unlabeled reuse (lede, exit links):** a block that needs `.ledger-text`'s
  column alignment but isn't an actual entry (no label, no rule) must wrap
  in `flex flex-col lg:flex-row` too, so the empty `w-1/4` spacer collapses
  out of the way below lg instead of still claiming a quarter of a row
  that's supposed to go full-width, and repeat `.ledger-row`'s own
  `pl-8 pr-2 sm:pr-4 md:pr-8 lg:px-0` directly on the wrapper so it shares
  the same edges as labeled entries. See the lede convention below for the
  full pattern.
- Minted from Philosophy's Mission/Manifesto/My Why; Resume will reuse it.

## Lede convention

A document page's epigraph, between the headline and the first
`.ledger-row`: unlabeled, no rule, set in `.italic-subhead` (plus the
`.italic-subhead-compact` size variant for a multi-sentence lede -- see
below). Reuse `.ledger-text` on an otherwise-empty `w-1/4` spacer row so
the lede's left edge lands exactly on the ledger's text column, without
pulling in `.ledger-label`'s visible border/right-alignment. The row wraps
in `flex flex-col lg:flex-row` and repeats `.ledger-row`'s own
`pl-8 pr-2 sm:pr-4 md:pr-8 lg:px-0` directly on the wrapper, so the lede
shares the same left/right edges as labeled entries below lg (no
`border-l-0` needed here -- `.ledger-text` no longer carries a below-lg
border to cancel; see the `.ledger-row` entry above):

```html
<div class="flex flex-col lg:flex-row pl-8 pr-2 sm:pr-4 md:pr-8 lg:px-0 mb-16 md:mb-24 lg:mb-20 mt-5">
  <div class="w-1/4"></div>
  <div class="ledger-text">
    <div class="prose-col">
      <p class="italic-subhead italic-subhead-compact">Lede copy goes here.</p>
    </div>
  </div>
</div>
```

Spacing: below lg, the lede-to-first-entry gap matches the entry-to-entry
gap exactly (both step `64px` mobile / `96px` at md, from the same
`mb-16 md:mb-24` values) -- horizontally and rhythmically the lede reads as
part of the same sequence, not a separate preamble. At lg it's the
opposite of the original "biggest gap" intent: the lede's own `lg:mb-20`
(80px) is *smaller* than `.ledger-row`'s `lg:mb-32` (128px) between
entries, a value that was hand-tuned directly on the page at some point
after the lede was first built. If a future page wants the "epigraph gap
bigger than entry gap" feel this section originally described, that's a
deliberate value change to make, not a bug to silently correct back.

## `.italic-subhead`

The italic spoken-voice register (`alaska text-3xl italic`): About's
"Sound is not a backdrop." and "It takes... So. Much. Time.", Music's "A
guiding practice...", Philosophy's lede, Design's creed ("Design is a
process of evolution..."). Previously bare utilities on each page (plus a
semantic `<em>` where the phrase is emphasis inside a larger paragraph,
which still applies when that's the actual usage); extracted into a class
once Philosophy's lede became a third, standalone use.

**Size variant -- `.italic-subhead-compact`:** the base class's `text-3xl`
is tuned for a one-line aside; a multi-*sentence*, flowing-prose instance
(Philosophy's lede runs 4-5 lines of running text) at that size competes
with the headline above it. Pair `.italic-subhead-compact` alongside the
base class (`class="italic-subhead italic-subhead-compact"`) to step down
to `text-2xl` -- don't fork a new class or hand-type the override.

The real distinction isn't line count, it's *shape*: flowing prose
paragraphs set in the italic register take `-compact`; a creed/manifesto
stack (one short declarative statement per line -- Design's "Design is a
process of evolution. / Design is sensory and experiential. / Design is an
engineering process.") stays bare `.italic-subhead` (3xl) regardless of how
many lines it runs to. A stack of short lines doesn't compete with the
headline the way a paragraph-length lede does at the same size -- each line
reads as its own beat, not a wall of text. Don't apply `-compact` by line
count alone; check whether it's prose or a stack first.

`.italic-subhead-compact` is defined directly after the base class in
`main.css` so the cascade tie resolves predictably -- if either class ever
needs reordering, keep them adjacent.

## Link grammar (site-wide)

- **Thin underline** = a text link at rest. Structural class `.link-underline`
  (`underline decoration-1 underline-offset-2 hover:decoration-2
  focus-visible:decoration-2 transition-colors`) plus a per-usage decoration
  color at ~40% opacity that strengthens to full opacity on hover AND
  keyboard focus (e.g. `decoration-muted-ink/40 hover:decoration-muted-ink
  focus-visible:decoration-muted-ink`, or `decoration-link-red/40
  hover:decoration-link-red focus-visible:decoration-link-red`). This is the
  default signature for inline text links: wayfinding (the eyebrow) and name
  lists alike.
  - Add an **external icon** only for a solitary outbound link (e.g. the
    Bandcamp icon+link on Music) -- lists of links don't get per-item icons.
  - **Every `hover:` gets a `focus-visible:` twin**, applied at the shared
    class/component level where the property is structural (e.g.
    `.link-underline`'s `decoration-2`), and per-usage where it's instance-
    specific (the decoration color). Never ship a hover-only effect in this
    system -- keyboard users need the same affordance.
- **`.link-list`** (`alaska text-link-red link-underline decoration-link-red/40
  hover:decoration-link-red focus-visible:decoration-link-red inline-block
  py-2 lg:py-0`): the shared class for a red link that's one entry in a list
  of outbound links (Music's "engineered for"/"opened for"/mentors lists).
  Pairs with the **list-markup convention**: the intro sentence is a `<p>`
  *above* the `<ul>`, and every link gets its own `<li>` -- never multiple
  `<a>`s crammed into a single `<li>` and separated by `<br>`. That anti-
  pattern reads as one list item to assistive tech, and made a stale href
  (a Manring/Hieroglyphics swap on Music) easy to miss for a long time,
  since nothing about the markup treated the entries as discrete. E.g.:
  ```html
  <p class="pb-2">I’ve had some musical mentors:</p>
  <ul class="text-xl mb-8">
    <li><a href="..." class="link-list">Trey Gunn</a></li>
    <li><a href="..." class="link-list">Aloke Dutta</a></li>
  </ul>
  ```
- **Mentor-line convention** (name + descriptor, no punctuation separator):
  only the name sits inside the anchor (`.link-list`, or bare `.link-underline`
  red treatment outside a list context); the descriptor is a plain
  `<span class="text-muted-ink">` outside the anchor, divided from the name
  by a single space in the markup and by color/weight alone -- no hyphen, en
  dash, or other separator character. E.g.:
  ```html
  <li><a href="..." class="link-list">Trey Gunn</a> <span class="text-muted-ink">virtuoso and music coach</span></li>
  ```
  The underline stops cleanly at the name since the descriptor is outside the `<a>`.
- **Highlighter** (`.highlight-link`, background wash) = an internal
  content-to-content link (e.g. "More about my music background"). Already
  had its `focus-visible` deepen twin from an earlier pass. **Dark stock**:
  the light-stock wash (`bg-highlight/40`, hover/focus `/60`) reads muddy on
  near-black -- a light color at 40% over dark just looks dim. Overridden
  for `.bg-stock-ink` via a descendant selector (`.bg-stock-ink
  .highlight-link`, not the CSS-variable mechanism -- Tailwind's opacity
  modifiers are baked into the utility class at build time, not swappable
  via a custom property the way a color hue is) to `/60` rest, `/80`
  hover/focus -- same hue, same +20-point step as light, just shifted up so
  it reads as a chalk-on-dark wash instead of a marker-on-paper one.
- **Red** (`text-link-red`, a token -- `tailwind.config.js` → `#9A2C2C`
  light-stock / `#E0705F` dark-stock via the CSS-variable mechanism, see
  "Dark-stock token overrides" -- never a raw hex) = link, always. No red
  text may be non-interactive on a content page -- if it's red, it must be
  a real `<a>` with the `.link-underline` (or `.link-list`, inside a list)
  treatment. Design's own project list was the one drift from this
  (`hover:opacity-80` only, no underline); brought into compliance in the
  dark-stock link-vocabulary pass -- every red link on the page is now a
  real `.link-list` anchor.
- **`.list-entry`** (`alaska text-link-red inline-block py-2 lg:py-0`): a
  `.link-list` sibling for a list entry that reads as part of the same red,
  same-rhythm sequence but isn't itself a link (no href to point to --
  Design's "Dunable Guitars" mention in the musicians list). Same
  color/size/tap-target as `.link-list`, minus `.link-underline` -- no
  underline on something that isn't clickable. Reach for this rather than
  leaving a non-link entry unstyled (which reads as a missed link, not a
  deliberate mention) or fabricating a URL just to make it a real link.
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
- **Full-screen menu overlay: all-links context** -- ink-colored links,
  nav-style hover-underline, persistent underline marks the current page.
  Documented exemption from red-means-link, same basis as the main nav.
- **Colophon: ink-colored underline, not red.** `.colophon-link`
  (`text-black link-underline decoration-black/40 hover:decoration-black
  focus-visible:decoration-black`) -- same `.link-underline` mechanics as
  every other text link, just ink instead of red. A credits/reference page
  reads better understated, and the linked terms (Wikipedia entries, tool
  homepages) already carry their own recognition without needing the
  red-means-link signal to flag them. Third documented exception to
  red-means-link, same footing as the main nav and the menu overlay above --
  not a drift to flag later.

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

## Analytics: GA4

The tag lives in `index.html`'s `<head>`, injected only when
`import.meta.env.PROD` is true (dev/localhost makes zero network requests to
Google -- no stub, no script tag at all, not just suppressed calls on top of
one). The config call sets `send_page_view: false`, because pageviews are
fired manually from the single `router.afterEach` hook in
`src/router/index.js` (the same hook that already updates title/meta/OG on
every navigation) -- not from gtag.js's own automatic detection. Measurement
ID: `G-VBQZRHH51H`.

**Known gap, not fixable from this code:** `send_page_view: false` only
suppresses the automatic hit on the very first page load. GA4's Enhanced
Measurement independently listens for History API changes and fires its own
automatic `page_view`-shaped hit on every subsequent client-side navigation
regardless of that flag -- confirmed empirically (every nav after the first
sends two hits: GA4's automatic one, carrying the *previous* route's stale
title/location and no page path, immediately followed by the router hook's
correct one). Turning this off requires the GA4 Admin UI: Data Streams -> the
web stream -> Enhanced measurement -> gear icon -> "Page changes based on
browser history events" -- not a code-level setting.
