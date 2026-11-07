# Jithesh's personal website

A small static page for GitHub Pages. No build tools, tracking, or external fonts. A small script highlights the current section; navigation and expandable project details also work without JavaScript.

## Edit

- `index.html`: biography, experience, and links.
- `style.css`: typography, spacing, and colors.
- `navigation.js`: highlights the current section in the sticky navigation.

## Preview

From this directory, run `python -m http.server 4173 --bind 127.0.0.1`, then visit http://127.0.0.1:4173.

## GitHub Pages

Put the contents of this directory at the root of the `JitheshPavan.github.io` repository. In the repository's Settings → Pages, select **Deploy from a branch**, then **main** and **/(root)**. The published URL will be https://jitheshpavan.github.io/.

Only this `site` directory needs to be uploaded; the parent workspace is not part of the website.
