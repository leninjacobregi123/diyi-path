# DIYI-PATH website

A one-page website for **DIYI-PATH (formerly Kerala Electricals)**, 6th Mile, Kumily, Idukki.

| File | What it is |
|---|---|
| `index.html` | The whole page: text (English + Malayalam), styles and a small script for the "Open now / Closed" badge |
| `assets/` | Logo, emblem, icons and the link-preview image, made from the approved brand pack |
| `sitemap.xml`, `robots.txt` | Help Google find the page |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are |

## Contact details used on the page

| Detail | Value | Where it appears in `index.html` |
|---|---|---|
| Phone (Call buttons) | `+919495426446`, shown as `+91 94954 26446` | `tel:` links, the "Phone:" line, JSON-LD `telephone` |
| WhatsApp | `919495426446` | every `https://wa.me/…` link (11) |
| Google Maps | `https://maps.app.goo.gl/uQAgdNReKTRCJRX48` (place "Kerala electricals", 9.647295, 77.164851) | Directions buttons, JSON-LD `hasMap` / `geo` |
| PIN code | `685509` | Address, JSON-LD `postalCode` |

To change a number, replace every copy of the old value in `index.html`.

## Hosting

- GitHub Pages, repository `leninjacobregi123/diyi-path`, address `https://leninjacobregi123.github.io/diyi-path/`.
- If a domain (e.g. diyipath.in) is bought later, update the address in `index.html` (canonical, `og:url`, `og:image`, JSON-LD), `sitemap.xml` and `robots.txt`.
- **This folder is published publicly.** Never put business records, ledgers or financial files in it.
