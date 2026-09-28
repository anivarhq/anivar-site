# Anivar — website

The website for [Anivar](https://github.com/anivarhq/anivar), a local-first AI
security camera recorder — what it does, and where to download it.

**Live at <https://anivarhq.github.io/anivar-site/>**

Static HTML and CSS. No framework, no build step, no dependencies — GitHub
Pages serves the files exactly as they are committed.

## Preview locally

    python -m http.server 8000

Then open <http://localhost:8000>.

## Layout

    index.html          the page — every illustration is an inline SVG scene
    404.html            reuses the same stylesheet
    assets/styles.css   tokens (paper, ink, the app's one red) and the scene animations
    assets/fonts/       Instrument Serif, self-hosted (OFL-1.1, see OFL.txt)
    assets/logo.png     the app mark
    assets/og.png       social card, 1200x630

The only request the page makes to anyone else is to the GitHub releases API.
Fonts are self-hosted so a visitor's browser never calls a font CDN.

## Illustrations, not screenshots

The scenes are drawn, and the page says so. Each one is authored in its
finished state; the animation only runs while the scene is on screen (a
`.play` class added by an IntersectionObserver), and never with
`prefers-reduced-motion`. A still frame, a no-JS visitor and a crawler all
see the complete picture. Every claim a scene makes is something the app
does — check the app before drawing a new one.

## Download links

Every download link points at a stable file name under
`releases/latest/download/` (`Anivar-windows-x64-setup.exe` and so on), which
is correct for every release without editing. On load the page reads the
GitHub releases API and fills in the current version and each file's size,
and points the hero button at the visitor's own platform. If that
request fails — offline, or past the API's anonymous rate limit — the links
that shipped in the HTML are still correct, so there is no error state.

## Deploying

Every push to `main` publishes. `.nojekyll` keeps Pages from processing the
files. To serve it from a custom domain, add a `CNAME` file and change the
`<base>` in `404.html` to `/`.

## Licence

Apache-2.0, matching the application.
