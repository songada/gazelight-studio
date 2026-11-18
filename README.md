# GazeLight Studio — redesigned homepage

Files: `index.html` + `style.css` + `script.js` (no build step, no dependencies).
Open `index.html` in a browser to preview locally — it loads `style.css` and `script.js` from the same folder.

## What changed vs. the current site (walked 2026-11-08)

Current site, https://www.gazelight.studio/ (SmugMug):
- Nav: Home / Family / Pets / Sports / Graduation only. No About, Pricing, Contact or booking page.
- One price everywhere: $200 / 40 min, "10+ retouched photos", 20% off new clients. Graduation page says the same $200 but "More than 8 polished photos" — inconsistent.
- Booking is email-only: every button is a mailto to song@gazelight.studio. No calendar, payment, or account step.
- No print store: the "Store" gallery (n-hKJPnZ) holds only the GL logo. No Buy/cart anywhere. Galleries offer free Download only.
- Example work lives at https://www.gazelight.studio/Category/GazeLightStudio — 6 galleries: Family n-Fs3GNc, Demo n-shGx9x (20 photos), Store n-hKJPnZ, Graduation n-9MfWc2, Sports n-Gjfk42, Pets n-s27CMB.

This redesign keeps what works (email booking, SmugMug galleries) and fixes what was missing: a real Pricing section, Portfolio with filters, Graduation/Kids/Outdoor pages in one page, a How-it-works flow, FAQ, and a booking form that composes the email for the client.

## Packages (Bay Area market, checked Nov 2026)

South Bay mid-range peers: Pacifica Studio (Santa Clara), Rasskazova (San Jose), Lacey Michelle (San Jose), Slava Blazer (SF). Full research notes are in the build; headline ranges: 10-min mini $100–$295, 40-min $300–$650, 2-hr $497–$1,250, outdoor 1-hr $300–$850, graduation $200–$450, kids $295–$700.

| Package | Price | Includes |
|---|---|---|
| Mini — 10 min studio | $150 | 5 retouched, 1 outfit/backdrop, up to 2 people |
| Classic — 40 min studio | $200 intro | 10 retouched (cap), 2 outfits/backdrops, up to 6 people |
| Signature — 120 min studio | $995 | 35 retouched + all colour-corrected proofs + 11×14 framed print, 3–4 outfits, up to 10 people |
| Outdoor Classic — 60 min | $395 | 20 retouched, 1 location, Silicon Valley travel incl. |
| Outdoor Signature — 90 min | $495 | 30 retouched, 1–2 locations, up to 10 people |
| Graduation Studio — 60 min | $295 | 10 retouched, family included |
| Graduation Campus — 90 min | $395 | 25+ retouched, 3–4 campus spots |
| Kids Mini — 30 min | $250 | 10+ retouched, 1–2 outfits |
| Kids + Family — 40 min | $200 intro | 10 retouched (Classic) |

Add-ons: extra retouched photo $30 · rush 48h $100 · extra person $50 · extra hour $250 · prints 5×7 from $10, 8×10 from $25 · reschedule free once. First-time clients 20% off Mini, Signature, Outdoor, Graduation and Kids.

**Pricing basis (aligned 2026-11-08 with Song's Oct files):** `studio-pricing.md` (2026-10-20: Mini $395/30 min, Standard $695/1 hr, Premium $1,150/2 hr) and the $200 intro draft (2026-10-21: $200/40 min, 10 photos is a cap not "10+", first 5 orders, then $295 → $395). The site uses the intro ladder, reduced from the earlier Bay Area draft: Classic is the $200 intro (not $395), Signature is $995 (down from the $1,150 Premium, keeping the proofs + 11×14 print), Mini is a new $150 teaser, and the rest are cut ~10–15%. When the first 5 Classic sessions are done, change the Classic price to $295, then $395 — the step-up is written on the page.

## The 1-year gallery promise

Every package states it, and there is a dedicated section: **every session ends with a private online gallery, kept for one year, for review and download** — full-resolution downloads, shareable link, prints orderable from the gallery.

## Photos

All 35 portfolio photos are Song's real work from the Category page (Demo n-shGx9x — all 20 photos, Graduation n-9MfWc2, Sports n-Gjfk42, Family n-Fs3GNc — all 17, Pets n-s27CMB — all 3), each tile linking to its full SmugMug gallery. Photos that appear in two galleries are shown once.
- Family: beige family of 4; family + black-white dog; playful leaning family; family + golden retriever; family of 5 on purple; family of 3; sisters + dog; two women + golden retriever
- Kids: the young boy in the beige family photo, the young girl in the purple family photo, and the two sisters — filterable under "Kids"
- Portraits: woman black suit headshot; young man brown backdrop; smiling woman olive vest; couple on dark backdrop; Minion-hat woman at night with bokeh
- Graduation: graduate + family on couch; graduate solo red backdrop; graduate + mom; graduate in maroon gown with a stack of books
- Sports: badminton red-shirt serve; white-shirt jump; 4-player sequence; green-dress sequence; studio multi-exposure sequence
- Pets: black-and-white dog portrait; small dog in black & white — plus the dogs inside the family photos

**Image sizes (updated 2026-11-08):** all 35 portfolio photos now use large sizes — 19 at L, 13 at XL, 3 at M — no S (225 px) thumbnails remain. Each larger URL came from that photo's own SmugMug photo page (og:image XL, or the page's size map for L); every size has its own URL token, so guessing a larger size from the S URL returns 403. All 35 URLs were verified HTTP 200 on 2026-11-08 (note: rapid bulk checks can briefly return 403 from SmugMug rate-limiting — re-checking individually returns 200). In SmugMug, the same photos can be re-inserted at L/XL from the gallery lightbox. Local reference copies are in `img/` (d01–d20, g01–g03, s01–s04, f01–f03, p01).

**Fixed 2026-11-08 — "Badminton — studio sequence" tile:** it had pointed at i-W92jrzk, which is actually the graduate-and-mom photo (the same image as the "Graduate & mom" tile, local `img/d15.jpg` / `img/g03.jpg`). The real studio multi-exposure is Demo photo i-6R96mnk (local `img/d16.jpg`); the tile now uses its large URL from SmugMug's oEmbed service, 643×800, verified loading on 2026-11-08. The public preview already showed the correct photo (from the local copy); the source file now matches it. If the preview is rebuilt, drop its review-notes exception for this tile.

**Family + Pets galleries — fully used (2026-11-08):** Family n-Fs3GNc (17 photos) and Pets n-s27CMB (3 photos) are all in the portfolio now, one tile per pose at L size (400–800 px, all URLs verified 200). Added: mushroom-nest baby, baby tummy-time, new family of three (standing / dad seated / mom seated), hands-and-rings macro, black dress on blue-heart backdrop, tan-coat portrait, and the two remaining dog portraits (front-facing, profile). The near-duplicate alternate frames (second baby-blanket pose, second standing/seated family poses, second tan-coat pose) are NOT separate tiles — they are visible in the linked Family gallery. The Kids special card now uses the mushroom-nest baby as its image. Portfolio total: 35 tiles.

## Put it into SmugMug

1. SmugMug > Customize > Content: replace the homepage with the `<body>` sections of `index.html`, in order.
2. Customize > Theme > Advanced CSS: paste `style.css`.
3. Customize > Advanced > Custom JavaScript (or a JS content block at the bottom): paste `script.js`.
4. Keep the booking email song@gazelight.studio. The booking form only composes a mailto — nothing is sent or stored by the page, so no backend is needed.
5. Image URLs are already large sizes (L/XL/M, verified 2026-11-08) — no S-size swap needed.
6. The old $200 / "10+" / "8+" wording is removed everywhere; the new counts are exact numbers (5 / 15 / 35 …), so the site no longer contradicts itself.
