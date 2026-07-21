// GitHub Pages is a static file server with no history-mode rewrite --
// serving a copy of index.html as 404.html lets Vue Router resolve any
// unmatched path client-side instead of hitting a dead end. See the
// "SPA routing on GitHub Pages" plan for why this is a plain copy rather
// than a redirect-script: the browser's address bar already holds the
// correct path, so the router just needs the same app shell to boot into.
import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'))
