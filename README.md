# alexcrane-xyz

Alex Crane's personal site — Vue 3 (Composition API, `<script setup>`) + Vite + Tailwind CSS.

## Project structure

**Routes** (`src/router/index.js`):

| Path | Component |
|---|---|
| `/` | `src/views/LandingPage.vue` |
| `/equipment` | `src/views/EquipmentSection.vue` |
| `/about` | `src/views/about/AboutWrapper.vue` (layout) → `src/views/about/AboutLanding.vue` |
| `/about/philosophy` | `src/views/about/PhilosophySection.vue` |
| `/about/inspirations` | `src/views/about/InspirationsSection.vue` |
| `/about/background` | `src/views/about/BackgroundSection.vue` |
| `/projects` | `src/views/projects/ProjectsWrapper.vue` (layout) → `src/views/projects/ProjectsLanding.vue` |
| `/projects/feed` | `src/views/projects/ProjectsFeed.vue` |
| `/projects/music` | `src/views/projects/MusicSection.vue` |
| `/projects/design` | `src/views/projects/DesignSection.vue` |

**Global shell** (`src/App.vue`, rendered on every route): `MainMenuBar.vue` (nav) + `GlobalFooter.vue`. Navigation state/behavior lives in `src/composables/` (`useNavigation`, `useArrowNavigation`, `useSwipeNavigation`).

**Reused building blocks** (`src/components/formatting/`): `TextBlockLeft.vue`, `TextBlockRight.vue`, `VideoPlayer.vue` — shared layout pieces used across multiple content pages.

**Content data**: `src/content/videos.js` feeds `ProjectsFeed.vue` and `EquipmentSection.vue`.

## Setup

```sh
npm install
```

### Dev server

```sh
npm run dev
```

### Production build

```sh
npm run build
```

### Unit tests ([Vitest](https://vitest.dev/))

```sh
npm run test:unit
```

### End-to-end tests ([Cypress](https://www.cypress.io/))

```sh
npm run test:e2e:dev
```

### Lint

```sh
npm run lint
```

## Branch history

This repo went through a long period of iterating on page designs directly on feature branches (`music-page`, `page-background`, `dev`), which left behind a lot of abandoned components, views, and unreferenced assets.

- **`pre-refactor`** — a snapshot of `music-page` exactly as it stood before cleanup, preserving every experiment tried (including the items removed below) in case any of it is worth revisiting.
- **`launch-prep`** — this branch, where the dead code/assets/dependencies below were removed to give the site a clean base to build forward from.

### Removed in cleanup (still available on `pre-refactor`)

**Components/views** (unused — either superseded by later versions or never wired into the router):
- `src/components/PlaceHolder.vue`
- `src/components/design/DesignSummary.vue` / `src/components/music/MusicSummary.vue` (superseded — `DesignSection.vue`/`MusicSection.vue` build their content inline now)
- `src/components/formatting/StylizedListItem.vue`
- `src/components/formatting/TextBlockRightLowerRight.vue`
- `src/components/navigation/BreadCrumbs.vue`
- `src/components/navigation/MainMenuImageGrid.vue`
- `src/components/philosophy/PhilosophyBanner.vue`
- `src/views/feed/PostFeed.vue` / `src/views/feed/VideoPostDetail.vue` (never routed)
- `src/views/projects/ProjectsFeed-archive.vue` (early prototype of `ProjectsFeed.vue`)

**State**: `src/stores/navStore.js` and the Pinia dependency (only used by an old commented-out router config, never active).

**Dependencies**: `pinia`, `convertkit-vue`, `video.js` — none were imported anywhere in `src/`.

**Assets** (~98MB, confirmed unreferenced by any `.vue`/`.js`/`.css` file): 34 images under `src/assets/images/` (including several superseded duplicate/variant images, e.g. `garage-photo-3-31-24-v14.png`, `background-abstract-1.png`/`-2.png`, `tragedy-suicidal.png`/`-bw.png`) and one duplicate font format (`NeoGeo-Trial-VAR-VF.otf`, the `.woff2` version is what's actually loaded).

To recover anything on this list: `git checkout pre-refactor -- <path>`.
