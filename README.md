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

    index.html          the page; the hero's WebGL background is inline
    404.html            reuses the same stylesheet
    assets/styles.css   design tokens shared with the app
    assets/logo.png     the app mark, generated from the app repo's master
    assets/og.png       social card, 1200x630
    shots/              product screenshots

## Download links

The download cards link to `releases/latest`, which is correct for every
release without editing. On load the page reads the GitHub releases API and
fills in the current version, each platform's filename and its size. If that
request fails — offline, or past the API's anonymous rate limit — the links
that shipped in the HTML are still correct, so there is no error state.

## Deploying

Every push to `main` publishes. `.nojekyll` keeps Pages from processing the
files. To serve it from a custom domain, add a `CNAME` file and change the
`<base>` in `404.html` to `/`.

## Licence

Apache-2.0, matching the application.
