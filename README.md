# DIYI-PATH website

A one-page website for **DIYI-PATH (formerly Kerala Electricals)**, 6th Mile, Kumily, Idukki. It is in English and Malayalam, with a language switch in the header.

| File | What it is |
|---|---|
| `index.html` | The whole page: content, styles, icons and a small script (language switch, open/closed badge, WhatsApp links, enquiry form, share, scroll effects) |
| `assets/photos/` | Web versions of the product photos (WebP in 3–4 sizes + one JPEG fallback each) |
| `assets/diyi-path.vcf` | "Save our number" contact card |
| `assets/` (other) | Logo, emblem, favicons and the link-preview image, made from the approved brand pack |
| `CREDITS.md` | Photo and icon credits and licences |
| `sitemap.xml`, `robots.txt` | Help Google find the page |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are |

## Colour system (strict)

Only the four brand colours are used anywhere on the site:

| Colour | Hex | Used for |
|---|---|---|
| Sky blue | `#168BCB` | Call buttons, highlights, icons, links underline, focus ring |
| Graphite | `#111827` | Text, dark sections (hero, electricians, call-to-action, footer), small buttons |
| Green | `#168A24` | WhatsApp buttons, "open now", check marks |
| White | `#FFFFFF` | Backgrounds, text on dark |

Lighter shades (borders, tints, secondary text) are the same four colours with transparency. The blue→green gradient is only used as an accent: heading highlight, thin lines, the "energy path".

To keep text readable, white text on blue or green is only used on large bold button text (19px). Small text is always graphite on white or white on graphite.

## Language switch (English ⇄ മലയാളം)

- The English text sits in the HTML. Every translatable element has `data-i18n="key"`. Attributes (image `alt`, `placeholder`, `aria-label`, `title`) use `data-i18n-attr="attribute:key"`.
- The Malayalam text is in the `ML = { … }` list near the bottom of `index.html`, one entry per key.
- **To change wording:** edit the English in the HTML and the matching `ML` entry.
- **To add text:** give the new element a new key and add that key to `ML`.
- The visitor's choice is remembered. `?lang=ml` opens the page in Malayalam, and phones set to Malayalam open in Malayalam automatically.

## Features

- Open/closed badge in India time; today's hours are highlighted.
- Call, WhatsApp and Directions buttons everywhere. On phones, a contact bar appears at the bottom after scrolling; on large screens, a floating WhatsApp button does the same.
- Product cards with real photos. Tapping a card opens WhatsApp with that product already typed.
- **Quick enquiry form:** builds a WhatsApp message (name, customer type, what they need) in the visitor's language. Nothing is stored or sent anywhere else.
- "Save our number" (contact card download), "Share this page" (phone share sheet, or copies the link), embedded Google map.

## Photos

- Source: Unsplash, free under the Unsplash License. Photographers are listed in `CREDITS.md` and in the page footer.
- Full-quality originals (3200 px) are kept outside this public folder, in `../Website_Photos_HQ/`.
- To replace a photo, put the new original in `Website_Photos_HQ/` with the same name, then regenerate the web sizes (480/800/1200 for products, 600/900/1400 for the electrician photo, 700/1000/1600/2400 for the hero).

## Contact details used on the page

| Detail | Value |
|---|---|
| Phone / WhatsApp | `+91 94954 26446` (`tel:+919495426446`, `wa.me/919495426446`; `NUMBER` in the script) |
| Google Maps | `https://maps.app.goo.gl/uQAgdNReKTRCJRX48` (place "Kerala electricals", 9.647295, 77.164851) |
| PIN code | `685509` |

To change a number, replace every copy of it in `index.html` and in `assets/diyi-path.vcf`.

## Hosting

- GitHub Pages, repository `leninjacobregi123/diyi-path`, address `https://leninjacobregi.me/diyi-path/`. `leninjacobregi123.github.io/diyi-path/` redirects there.
- If a domain is bought later, update the address in `index.html` (canonical, `og:url`, `og:image`, JSON-LD, `SITE` in the script), `sitemap.xml`, `robots.txt` and the `.vcf` file.
- **This folder is published publicly.** Never put business records, ledgers or financial files in it.
