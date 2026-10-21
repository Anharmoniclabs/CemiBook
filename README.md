# Heralds of the Cemí / Heraldos del Cemí

**One cinematic, bilingual book website** for Luis M. Minier's contemporary fantasy novel.

Live site: https://anharmoniclabs.github.io/HeraldsOfTheCemi/

## Single-page structure

All public-facing content is on **index.html**. Navigation scrolls to sections of that page rather than opening separate author or edition pages:

1. Parallax hero with the approved English and Spanish book covers.
2. English and Spanish synopses (story, JC, the signal, the coin, Aperture, Bronx/Santo Domingo).
3. Both full original covers together with confirmed English retail links.
4. Story themes and the author's approved portrait and biography.

The original English and Spanish covers are displayed without AI remixes or placeholder images. The site includes a responsive layout and reduced-motion support.

## Files

- `index.html` — semantic content and bilingual SEO metadata.
- `assets/site.css` — responsive design and layered scroll effects.
- `assets/site.js` — lightweight scroll parallax, progress and reveal behavior.

The current original cover and portrait images are served from hosted image URLs supplied by the author and stored in the page source. For long-term asset independence, keep archival copies of each original PNG.

## Buy links

- English Kindle: https://www.amazon.com/dp/B0HNF1DJRP
- English hardcover: https://www.amazon.com/dp/B0HNDVPHY2

A Spanish retail link has **not** been verified and is intentionally not invented.

## Deploy

GitHub Pages publishes this repository from its configured Pages deployment source. After updates to `main`, check the repository's Settings → Pages and Actions to verify publication.
