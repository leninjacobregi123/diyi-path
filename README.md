# DIYI-PATH website

A one-page website for **DIYI-PATH (formerly Kerala Electricals)**, 6th Mile, Kumily, Idukki. It is in English and Malayalam, with a language switch in the header.

| File | What it is |
|---|---|
| `index.html` | The whole page: content, styles, icons and a small script (language switch, "Open now / Closed" badge, WhatsApp links, scroll effects) |
| `assets/` | Logo, emblem, favicons and the link-preview image, made from the approved brand pack |
| `sitemap.xml`, `robots.txt` | Help Google find the page |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are |

## Language switch (English ⇄ മലയാളം)

- The English text sits in the HTML. Every translatable element has a `data-i18n="key"` attribute. Attributes use `data-i18n-attr="attribute:key"`.
- The Malayalam text is in the `ML = { … }` list near the bottom of `index.html`, with one entry per key.
- **To change wording:** edit the English in the HTML and the matching `ML` entry, keeping the key the same.
- **To add text:** give the new element a new `data-i18n` key and add that key to `ML`.
- The visitor's choice is remembered. `?lang=ml` opens the page in Malayalam (useful for sharing), and phones set to Malayalam open in Malayalam automatically.
- WhatsApp messages and the open/closed badge switch language too (the `WA` and `STATUS` lists in the script).

## Contact details used on the page

| Detail | Value | Where it appears in `index.html` |
|---|---|---|
| Phone | `+919495426446`, shown as `+91 94954 26446` | all `tel:` links, hero card, CTA, footer, JSON-LD `telephone` |
| WhatsApp | `919495426446` | `NUMBER` in the script, plus the fallback `https://wa.me/…` links in the HTML |
| Google Maps | `https://maps.app.goo.gl/uQAgdNReKTRCJRX48` (place "Kerala electricals", 9.647295, 77.164851) | Directions buttons, map embed, JSON-LD `hasMap` / `geo` |
| PIN code | `685509` | Address (English and Malayalam), JSON-LD `postalCode` |

To change a number, replace every copy of the old value in `index.html`.

## Design

- Brand colours: sky blue `#168BCB`, graphite `#111827`, green `#168A24` (plus darker shades for readable buttons).
- Fonts (Google Fonts): **Outfit** for headings, **Work Sans** for text, **Anek Malayalam** in Malayalam mode.
- Icons: [Lucide](https://lucide.dev) (ISC licence) and the WhatsApp glyph from Simple Icons (CC0), inlined as an SVG sprite.
- The logo is never stretched or recoloured, following the brand rules.

## Hosting

- GitHub Pages, repository `leninjacobregi123/diyi-path`, address `https://leninjacobregi.me/diyi-path/`. The account's own domain, leninjacobregi.me, is used for all its GitHub Pages sites, and `leninjacobregi123.github.io/diyi-path/` redirects there.
- If a domain (e.g. diyipath.in) is bought later, update the address in `index.html` (canonical, `og:url`, `og:image`, JSON-LD), `sitemap.xml` and `robots.txt`.
- **This folder is published publicly.** Never put business records, ledgers or financial files in it.
