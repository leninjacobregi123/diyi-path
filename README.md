# DIYI-PATH website

A one-page website for **DIYI-PATH (formerly Kerala Electricals)**, 6th Mile, Kumily, Idukki. It covers electrical, plumbing, sanitary and smart-home materials, with online ordering through WhatsApp and delivery across Kerala. The page is in English and Malayalam, with a language switch in the header.

| File | What it is |
|---|---|
| `index.html` | The whole page: content, styles, icons and the script (language switch, open/closed badge, product filters, order list, WhatsApp links, share, scroll effects) |
| `assets/emblem3d.js` | The live 3D emblem shown at the top of the page |
| `assets/vendor/three.module.min.js` | three.js r160, the 3D library (MIT licence, see `three.LICENSE.txt` next to it) |
| `assets/emblem-3d-480.webp`, `emblem-3d-900.webp` | Still images of the 3D emblem, shown until the 3D loads and on phones that can't run it |
| `assets/photos/` | Web versions of the product photos (WebP in 3 sizes + one JPEG fallback each) |
| `assets/diyi-path.vcf` | "Save our number" contact card |
| `assets/` (other) | Logo, favicons and the link-preview image (`og-image.png`, shown when the link is shared on WhatsApp) |
| `CREDITS.md` | Photo, software, icon and font credits and licences |
| `sitemap.xml`, `robots.txt` | Help Google find the page |
| `.nojekyll` | Tells GitHub Pages to publish the files exactly as they are |

## Design rules (from the owner)

- **Only the four brand colours**, plus the same colours with transparency for borders, tints and secondary text:

  | Colour | Hex | Used for |
  |---|---|---|
  | Sky blue | `#168BCB` | Main buttons, highlights, icons, link underlines, focus ring |
  | Graphite | `#111827` | Text, dark section, footer, phone contact bar, small buttons |
  | Green | `#168A24` | WhatsApp buttons, "open now", "order sent" |
  | White | `#FFFFFF` | Backgrounds, text on dark |

- **No gradients, glows or glass effects.** Flat colours, thin borders and white space only. (The official logo artwork keeps its own shading.)
- **Readable text:** white text on blue or green is only used on large bold button text (19px). Small text is always graphite on white or white on graphite.
- **Brand-led wording:** the headline is the tagline, "Powering the right path." / "ശരിയായ പാതയിൽ, ശരിയായ ഊർജ്ജം." Experience is described as "20+ years in the trade" (the shop itself opened in 2008).

## Language switch (English ⇄ മലയാളം)

- The English text is in the HTML. Every translatable element has `data-i18n="key"`. Attributes (image `alt`, `placeholder`, `aria-label`, `title`) use `data-i18n-attr="attribute:key"`.
- The Malayalam text is in the `ML = { … }` list in the script, one entry per key. Text that only the script uses (order rows, WhatsApp messages, the open/closed badge) is in the `UI`, `WA`, `MSG` and `STATUS` lists.
- **To change wording:** edit the English in the HTML and the matching `ML` entry.
- **To add text:** give the new element a new key and add that key to `ML`.
- The visitor's choice is remembered. `?lang=ml` opens the page in Malayalam, and phones set to Malayalam open in Malayalam automatically.
- The page is marked `translate="no"`, so Chrome does not machine-translate it on top of our own Malayalam.

## How online ordering works

1. **Build the list:** the visitor taps "Add to order" on product cards (tapping again raises the quantity) or types any item. The list is kept only in their own browser (`diyi-order` in localStorage).
2. **Pickup or delivery:** for delivery they give an address and a Kerala PIN code (must start with 67, 68 or 69). Name and a 10-digit mobile number are required.
3. **Send:** the page opens WhatsApp to +91 94954 26446 with the full order written out in the visitor's language, plus a reference like `DP-261108-4821`. Nothing is sent anywhere else and nothing is charged.
4. **The shop replies** with stock and the total, including the delivery charge (decided per order).
5. **The customer pays by UPI.** The order is confirmed only when the payment arrives. Then it is packed for pickup or sent for delivery.

Delivery is **within Kerala only**. The business is on the GST composition scheme, which does not allow sales to other states.

## The 3D emblem

- The blue and green shapes were traced from the approved emblem artwork and given depth with three.js. The colours are the solid brand blue and green; the shading comes only from the scene's lighting.
- It loads after the rest of the page. It is skipped, and the still image stays, on phones with Data Saver on, 2G connections, very low memory, or no WebGL.
- It turns slowly and tilts with the mouse. With "reduce motion" switched on in the phone or computer settings, it stays still. It pauses when scrolled out of view.

## Edge lines (decorative layer)

- A layer behind the content (`.screen-decor`) holds 17 SVG lines that run off the left and right screen edges beside each section. They are built by the "Edge lines" part of the script.
- Each line is one of the shop's trades: **power** (blue cable, lightning ending, one spark runs along it), **water** (graphite pipe, droplet ending), **smart** (green trace with square nodes, Wi-Fi ending) and **route** (milestones ending in a map pin: the order steps, the delivery road Kumily → Kochi, and the shop's years).
- Small labels (`230 V`, `Ø 25 mm`, `Wi-Fi 2.4 GHz`, place names) follow the language switch and are hidden on phones. Lines narrow themselves to fit the free side margin.
- Each line draws once when scrolled into view, with its own timing, and drifts slightly up or down (limited to 36 px). Nothing moves with "reduce motion" on.
- To change a line, edit the `LINES` list: anchor section, position, side, shape, trade, labels, parallax strength and direction.

## Features

- Four departments (Electrical, Plumbing, Sanitary, Smart home & IoT) that filter the 14 product cards.
- Each product card has "Add to order" and a WhatsApp "Ask" button with the product name already typed.
- Open/closed badge in India time; today's hours are highlighted.
- Call and WhatsApp buttons everywhere. On phones, a bottom bar (Call, WhatsApp, Order with item count) appears after scrolling past the top buttons. On large screens, a floating WhatsApp button does the same.
- "Save our number" (contact card download), "Share this page" (phone share sheet, or copies the link), embedded Google map.

## Photos

- Source: Unsplash, free under the Unsplash License. Photographers are listed in `CREDITS.md` and in the page footer.
- Full-quality originals (3200 px) are kept outside this public folder, in `../Website_Photos_HQ/`.
- To replace a photo, put the new original in `Website_Photos_HQ/` with the same name, then regenerate the web sizes: 480/800/1200 WebP + 800 JPEG for products (4:3), and 600/900/1400 WebP + 900 JPEG for the professionals photo.

## Contact details used on the page

| Detail | Value |
|---|---|
| Phone / WhatsApp | `+91 94954 26446` (`tel:+919495426446`, `wa.me/919495426446`; `NUMBER` in the script) |
| Google Maps | `https://maps.app.goo.gl/uQAgdNReKTRCJRX48` (place "Kerala electricals", 9.647295, 77.164851) |
| PIN code | `685509` |
| GSTIN (footer) | `32BLCPJ2525D1ZT`, registered as Kerala Electricals until the trade-name change is approved |

To change a number, replace every copy of it in `index.html` and in `assets/diyi-path.vcf`.

## Hosting

- GitHub Pages, repository `leninjacobregi123/diyi-path`, address `https://leninjacobregi.me/diyi-path/`. `leninjacobregi123.github.io/diyi-path/` redirects there.
- If a domain is bought later, update the address in `index.html` (canonical, `og:url`, `og:image`, JSON-LD, `SITE` in the script), `sitemap.xml`, `robots.txt` and the `.vcf` file.
- **This folder is published publicly.** Never put business records, ledgers or financial files in it.
