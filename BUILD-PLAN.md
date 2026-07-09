# BUILD-PLAN — WALDNER & PART · Steuerberatung (Fiktive Demo)

> **Portfolio-Build #1** · Oddomode-Standard · Stack: pure HTML/CSS/JS, CDN nur GSAP 3.12.5 + Lenis 1.0.42, Fonts self-hosted in `/fonts`, kein Build-Tool.
> **Repo:** `valerositzleremilio-collab/kanzlei-demo` (public) → GitHub Pages am Ende.
> **Erstellt:** Aufgabe 0 (Opus 4.8 High) · 2026-07-09

---

## 1 · Kundenprofil (Blueprint-Pflichtschritt 1)

| Feld | Festlegung |
|---|---|
| **Marke** | WALDNER & PART — Steuerberatung (frei erfunden) |
| **Ort** | Villingen-Schwenningen (Schwarzwald-Baar) |
| **Nische** | Steuerberater / Kanzlei (03-Struktur-Zeile) |
| **Ziel-Gefühl** | „ruhige Souveränität" — Old-Money-Editorial trifft moderne Kanzlei. Vertrauen vor Show. |
| **Effekt-Level** | **DEZENT** — Craft aus Typo, Weißraum, EINEM ruhigen Signature-Moment. Kein Dark-Mode-Theme, keine verspielten Effekte. |
| **3D** | Nein |
| **Seitentyp** | Mehrseiter (7 Seiten) |
| **Motion-Budget Home** | 4–5 gezielte Interaktionen gesamt, alle TASTE-v3-konform, kein Overshoot auf Primär-Interaktionen |
| **Demo-Kennzeichnung** | Footer-Zeile „Fiktive Demo — Design: Oddomode"; Rechtsseiten strukturell vollständig, klar als Muster gekennzeichnet |

**Niche-Regel (fix):** Seriosität = gedeckte Farben, klare Leistungsübersicht, Team + Qualifikationen sichtbar, KEINE verspielten Effekte (03-Struktur Steuerberater-Zeile). Deshalb: Look-⭐-lastige, ruhige Keeper bevorzugt; Motion nur wo sie *Funktion* trägt (TASTE DA1/AA1).

---

## 2 · Referenzen (Mess-Basis)

**Methoden-Ehrlichkeit:** Guardrail „read ONLY these files" gilt — deshalb keine Live-Scrapes fremder Kanzlei-Seiten (Foreign-Asset-Risiko + Guardrail). Mess-Basis = die **live-vermessenen Anker** (`KAIVOSS-BAR.md`) + die **offen-vermessenen / award-typischen Zielwerte** aus `REFERENZEN.md`. Die „Professional-Services"-Klasse ist dort bereits als **Stripe / Linear / Vercel-Klasse** vermessen — genau die richtige Referenzwelt für eine seriöse Kanzlei (ruhige Reveals, Zahlen-Count-ups, Theme-Naht, minimalistische Footer). Editorial-Award-Seite = godly.website/awwwards-Klasse (Big-Type, Caption-Kultur, Weißraum).

### Gemessene Werte, die ich sperre (aus REFERENZEN.md + KAIVOSS-BAR.md)

| Baustein | Referenz | Zielwert (gesperrt) |
|---|---|---|
| **Hero-Entry** | H1/K1/3·TY1 Word-Mask | Wörter `translateY 100%→0` in `overflow:hidden`, stagger **0.05 s**, **0.8 s** `power3.out`, once, Load |
| **Nav shrink** | N2 (Stripe/Linear-Klasse) | Höhe 80→60 px, `backdrop-blur 0→10px` über 0–120 px Scroll, scrub-artig |
| **Nav hide/reveal** | N3/NV2 (Linear) | `translateY(-100%)` bei down / `0` bei up, **0.35 s** `power2.out`, Schwelle Δy > 6 px, oben immer sichtbar |
| **Sektions-Naht (ruhig)** | S4/SC2 (Locomotive-Parallax) | BG `y` scrub-Faktor **0.3–0.5** vs Content 1.0, nur `transform` |
| **Signature Theme-Flip** | S1/C9/3·SC3 (Linear/landonorris, live-Anker) | BG + Text interpolieren an der Naht, Start `top 70%`, scrub |
| **Zahlen-Count-up** | T5/P4/C6/3·TB2 (Stripe Stats) | Proxy + `power3.out` **~1.2 s**, `once:true`, `parseFloat`, `tabular-nums` |
| **Karten-Reveal** | 3·HC3/CRD-008 (Godly-Editorial) | `clip-path inset(100%→0)` **0.5 s** `power3.out`, Bild `scale 1.03` |
| **Testimonial** | SP1/3·SP1 (Linear reveal) | `y16→0 + opacity`, Start `top 85%`, once |
| **Footer-Spalten** | F3/FT3 (Stripe Rich-Footer) | Spalten `y16→0 + opacity` stagger **0.08 s**, Start `top 90%`, once |
| **Form-Input** | M2/FRM-002 Underline-Draw | `border-bottom scaleX 0→1` origin left **0.3 s**, Farbe → Akzent |
| **Form-Submit** | M9/BTN-123 (Linear Create) | Content-Swap, Spinner `.7 s` linear, Häkchen `stroke-dashoffset .3 s`, Reset 1.6 s, Doppel-Submit-Guard (nur Demo, kein echter Versand) |
| **Monogramm-Loader** | LDR-003 / H6 Draw-on-Load | `stroke-dashoffset` **~1.8–2.4 s** `power2.inOut`, once, reduced-motion: offset 0 sofort |

### Typo-Skala (Editorial-Award-Regel + 07-Design Regel 1)
- Display H1: `clamp(2.8rem, 8vw, 7rem)` · H2: `clamp(2rem, 5vw, 4rem)` · H3: `clamp(1.3rem, 2.5vw, 2rem)`
- Body: `clamp(1rem, 1.1vw, 1.15rem)`, `line-height: 1.7`
- Kicker/Label: `0.75rem`, `letter-spacing: 0.15em`, uppercase
- Font-Mix (07-Design Regel 2 / K6): Grotesk-Satz + **EIN** Serif-italic-Emphasis-Wort im Akzent pro Headline. Kein dritter Font.

### Spacing / Rhythmus
- `--max-w: 1200px` · `--pad-x: clamp(1rem, 4vw, 3rem)`
- Sektions-Padding vertikal: `clamp(5rem, 12vh, 10rem)` — großzügiger Weißraum = „teuer"
- Grid mind. **1× brechen** (Full-Bleed Signature-Sektion + asymmetrischer Über-uns-Teaser)

---

## 3 · Tokens (GESPERRT — vor dem Bauen)

**Akzent-Entscheidung:** Cream/Ivory-Basis + tiefe Ink-Töne + **EIN Akzent = tiefes Tannengrün**.
Begründung aus Teardown: Warm-Gold liest als Luxus-*Brand* (KOENIGSEGG-Welt); **Tannengrün** liest als Vertrauen/Wohlstand/Beständigkeit — old-money, seriös, distinktiver für eine Kanzlei als der Gold-Default. 90 % Mono + dieser eine Akzent (Farbschema-Regel 1).

```css
:root{
  /* Basis — warmes Ivory-Mono */
  --bg:          #F4F1EA;   /* warmes Ivory */
  --bg-alt:      #ECE7DB;   /* tiefere Cream-Fläche (alternierende Sektionen) */
  --bg-deep:     #17211C;   /* Signature-/Footer-Fläche (Tannen-Ink, KEIN reines #000) */
  --ink:         #1A2420;   /* Haupttext — warmer Tannen-Ink */
  --ink-soft:    #55605A;   /* Sekundärtext, Captions */
  --line:        #D8D2C4;   /* Hairline-Border auf Cream */
  --line-deep:   rgba(244,241,234,.16); /* Hairline auf --bg-deep */

  /* EIN Akzent — tiefes Tannengrün */
  --accent:      #1F4A38;   /* tiefes Tannengrün (Typo-Emphasis, CTA, Signatur) */
  --accent-hov:  #163627;   /* dunkler für Hover */
  --accent-ink:  #F4F1EA;   /* Text auf Akzentfläche */
  --accent-dark: #9DBBA9;   /* helle Sage-Variante NUR auf --bg-deep (AA-Legibilität) */

  /* System */
  --max-w: 1200px;
  --pad-x: clamp(1rem, 4vw, 3rem);
  --ease:  cubic-bezier(0.65, 0.05, 0.36, 1);  /* EIN Easing (CSS) — KAIVOSS-System */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);   /* Reveals/GSAP power3.out-Äquiv. */
  --dur:   .6s;
}
```

**Kontrast-Nachweis (Ziel AA ≥ 4.5:1, in Aufgabe 5 gemessen):**
- `--ink #1A2420` auf `--bg #F4F1EA` → ~15:1 ✓
- `--accent #1F4A38` auf `--bg #F4F1EA` → ~8.5:1 ✓ (auch als Text tauglich)
- `--accent-ink #F4F1EA` auf `--accent #1F4A38` → ~8.5:1 ✓
- `--accent-dark #9DBBA9` auf `--bg-deep #17211C` → ~6.5:1 ✓
- `--ink-soft #55605A` auf `--bg #F4F1EA` → ~5.3:1 ✓ (Captions bestehen AA)

**Foto-Grade (falls Platzhalter mit Bildcharakter):** `grayscale(.6) saturate(.7) contrast(1.03) brightness(.98) sepia(.12)` — KEIN `hue-rotate`, kein flächiger Akzent-Overlay (Farbschema-Verbot). Fotos = hochwertige CSS-Art/SVG/Gradient-Kompositionen mit Editorial-Caption (Ort + Jahr), keine Stock-Downloads.

### Fonts (self-hosted, OFL — nach `/fonts`)
- **Serif-Emphasis / Display-Akzentwort:** **Fraunces** (variable, high-contrast Didone-Charakter, echtes Italic) → Old-Money-Editorial.
- **Grotesk (Body, UI, Kicker, Display-Grundsatz):** **Archivo** (neutrale, seriöse Grotesque, gute Weights).
- Beide OFL, in Aufgabe 1 als `woff2` nach `/fonts/` gebündelt, `font-display: swap`, `@font-face` lokal. **Kein** externer Google-Fonts-Request (DSGVO-Klassiker-Nr.1 vermieden). Barlow Condensed = verboten (Anti-Pattern).

---

## 4 · Seitenstruktur (03-Struktur + 08-Subpages, Kanzlei-Set)

**Seiten (7):** `index.html` · `leistungen-unternehmen.html` · `leistungen-privat.html` · `team.html` · `kontakt.html` · `impressum.html` · `datenschutz.html`
**Nav (max 5–6 + CTA):** Start · Leistungen (Unternehmen/Privat) · Team · Kontakt · **[CTA: Erstgespräch]** (hervorgehoben, letzter Punkt). Mobile: Overlay-Menü.

### Home — Sektionsfolge (Aufgabe 2)
1. **Hero** — riesige Display-Typo (clamp), Serif-italic-Emphasis-Wort im Akzent, ruhiger Word-Mask-Entry, EIN CTA.
2. **Leistungs-Überblick** — 3 Karten → Unterseiten (dezenter Mask-Wipe-Hover).
3. **Signature-Moment** — gepinntes Zahlen-Statement (Mandate/Jahre/Erstattungsvolumen, fiktiv), Scroll-Count-up once, dezenter Theme-Shift auf `--bg-deep`. **← der EINE Story-Moment.**
4. **Über-uns-Teaser** — asymmetrisch, Editorial-Caption-Bild (CSS-Art, Ort+Jahr). **← Grid-Bruch.**
5. **Social Proof** — Mandanten-Zitate, seriös (ruhig rotierend).
6. **Trust-Band** — Kammern/Qualifikationen als eigene Badges (StBK, DStV-Muster — eigene SVG-Badges, keine fremden Logos).
7. **CTA-Band → Kontakt** — ruhig, ein Akzent, ein Button.
8. **Footer** — Rechtslinks + Demo-Zeile.

### Unterseiten-Muster (08-Subpages)
- **Leistungsseiten (2):** Hero-Statement → Problem/Nutzen → Ablauf in 3 Schritten → FAQ → CTA. Je EIN Fokus (Unternehmen / Privat), H1 einmalig, Meta-Description, JSON-LD `AccountingService`/`LocalBusiness` (fiktiv).
- **Team:** 3 fiktive Profile, CSS-Art-Porträt-Platzhalter + Captions + Qualifikationen.
- **Kontakt:** minimales Formular (Name, E-Mail, Anliegen — Datenminimierung), a11y, Submit-Zyklus als Demo-Simulation (kein echter Versand), Anfahrt als eigenes statisches SVG (KEIN Google Maps).
- **Impressum / Datenschutz:** strukturell vollständig (fiktive Musterdaten, als Demo gekennzeichnet).

---

## 5 · Snippet-Plan (Lab ⭐-Keeper → Slots)

> Nur ⭐-Keeper. „Mirror, never steal": Mechanik/Maße/Motion übernehmen, Tokens statt Lab-Farben, eigene Copy/Assets. Alle DEZENT adaptiert (Niche-Regel).

| Slot | Keeper-ID | Warum / Adaption für DEZENT |
|---|---|---|
| **Loader (Signature-Brand-Moment)** | `LDR-003` Monogramm | „W&P"-Monogramm zeichnet sich (stroke), once, ruhig; erfüllt „individueller Loading-Screen". reduced-motion: sofort sichtbar. |
| **Nav** | `NAV-009` B2B-Seriös (Struktur) + Mechanik `NAV-001`/N2 shrink + N3/NV2 hide-on-down | Seriöse horizontale Bar, Tokens statt Navy/Gold. Shrink+Blur beim Scroll, Hide-on-down/Reveal-up. CTA als letzter Punkt. |
| **Footer** | `FTR-006` Dark-Flip (Struktur) + `FTR`-Spalten-Stagger (F3) | Deep-Ink-Editorial-Footer (`--bg-deep`, kein Theme-Toggle) mit Spalten-Reveal. Pflicht-Rechtslinks + „Fiktive Demo — Design: Oddomode". |
| **Hero-Entry** | `HRO-001` Massive-Type Entry (anim ruhig) + Font-Mix `K6` | Word-Mask-Entry, EIN CTA. Serif-italic-Akzentwort. |
| **Primär-CTA-Button** | `BTN-034` Liquid Cursor Fill → **DEZENT** | Calmed: gerichteter Ink-Wipe-Fill on hover statt Cursor-Liquid, **kein Overshoot** (Primär-Interaktion-Regel). |
| **Text-Link/Headline** | `TYP-009` Underline-Draw | `scaleX 0→1` origin left, ruhig, Akzent. |
| **Leistungs-Karten (3)** | `CRD-008` Mask-Wipe-Reveal | Caption via `clip-path inset` enthüllt, Bild `scale 1.03` — editorial, dezent. |
| **Signature-Moment** | `SEC-001` Theme-Flip (abgeschwächt) + `SOC-004` Case-Zahl-Count-up (T5/C6) | Gepinntes Zahlen-Statement, Count-up once, ruhiger BG/Text-Flip auf `--bg-deep`. Der EINE Story-Moment. |
| **Über-uns-Bild** | Editorial-Caption-Muster `HRO-002` (Caption-Entry) | CSS-Art-Bild + Caption (Ort+Jahr) `y14→0`, Grid-Bruch. |
| **Sektions-Naht (die 1 aus SEC)** | `SEC-004` Parallax-Naht | Ruhige Parallax-Naht (anim-discard = leise), nur `transform`. |
| **Social Proof** | `SOC-009` Rotierendes Zitat (seriös) | Ruhig rotierende Mandanten-Zitate, `role=status`. |
| **Trust-Band** | `TRB-007` DSGVO/Made-in-DE + `TRB-004` Zertifikat-Chips (Draw-Border, ruhig) | Eigene seriöse Kammer/Qualifikations-Badges (SVG), Hover `translateY(-2px)`. |
| **Formular (Kontakt)** | `FRM-002` Underline-Draw-Inputs + `FRM-003` Live-Validierung (kein Shake) + `BTN-123` Submit→Success (Demo) | Datenminimiert, a11y, ruhiger Submit-Zyklus ohne echten Versand. |

**Motion-Budget-Zählung Home (Ziel 4–5):** (1) Hero-Word-Mask · (2) Nav shrink+hide · (3) Signature Theme-Flip+Count-up · (4) Karten-Mask-Wipe-Hover · (5) Parallax-Naht. Loader zählt als Brand-Moment separat, Footer-Reveal ist Standard-once. Alles EIN Easing-System, kein Overshoot.

---

## 6 · Guardrails (global, in jeder Aufgabe geprüft)
`body{overflow-x:clip}` (nie html) · `100dvh` statt `100vh` · EIN Easing · reduced-motion + No-JS voll bedienbar · 0 Console-Errors · Touch ≥44px · WCAG AA · Grid-Kinder `min-width:0` · Fonts self-hosted · 0 externe Requests außer GSAP+Lenis CDN · keine Cookies · Captions (Ort+Jahr) · 90% Mono + EIN Akzent.

## 6b · Abnahme-Protokoll (Aufgabe 4, Opus 4.8 High)

**Prüfmethode:** System-Chrome headless via Puppeteer-Core (Extension war nicht verbunden) — echte gerenderte Screenshots @1440 + @390, DOM-Messung statt Thumbnail-Schätzung, reduced-motion-Emulation für Endzustände, PNG-Pixel-Sampling für Farb-/Kontrastbelege.

**Craft-Checkliste (07-Design + TASTE v3 + KAIVOSS-BAR):**
- [x] Display-Typo groß (`clamp` bis 7rem), Grotesk (Archivo) + EIN Serif-italic-Emphasis-Wort (Fraunces) im Akzent — auf jeder Seite ein Emphasis-Wort (spürt / geordnet / verständlich / ein / sprechen / Erstgespräch).
- [x] EIN Akzent (Tannengrün) konsequent über alle Sektionen; 90 % warmes Mono. Pixel-verifiziert.
- [x] Grid ≥1× gebrochen: About-Teaser-Panel bleedet full-bleed zum Viewport-Rand (`margin-left: calc(50% - 50vw)`).
- [x] Captions (Ort + Jahr) auf allen Bild-/Porträt-Platzhaltern (Team, About, Anfahrt).
- [x] Weißraum großzügig, editorialer Rhythmus (`--section-pad` clamp 5–10rem).
- [x] Signature-Moment: EIN gepinntes Zahlen-Statement mit Theme-Flip auf Deep-Ink (`#17211C`, pixel-belegt) + Count-up once.
- [x] **WCAG AA numerisch belegt** — alle Text/BG-Paare ≥4,5:1 (niedrigstes 5,32:1 = Footer-Copyright auf Deep-Ink; Body 14,13:1; ink-soft-Captions 5,31–5,80:1; sage Zahlen auf Deep-Ink 7,96:1).

**Motion-Review (TASTE R10 / KAIVOSS-BAR):**
- [x] Kein Overshoot (kein back/elastic) — Primär-CTA = gerichteter Ink-Wipe ohne Bounce.
- [x] Motion funktional/bedeutungsvoll: Wortmaske (Entry), Count-up (Daten), Theme-Flip (Sektionsnaht), Mask-Wipe (Reveal), Parallax (Tiefe), Chip-Draw (Reveal), Submit-Zyklus (Feedback).
- [x] Reduced-motion: Endzustände sofort & vollständig (headless verifiziert — Signature settled instant auf Deep-Ink, alle Inhalte sichtbar).

**Verifiziert (headless, Belege):**
- [x] 0 Console-/Page-Errors auf allen 7 Seiten.
- [x] 0 horizontaler Overflow (`scrollWidth == viewport`) @1440 UND @390; Hero-Elemente `scrollW == clientW` (kein Text-Clipping).
- [x] Externe Requests = exakt 3 CDN-Dateien (GSAP + ScrollTrigger + Lenis). Keine Google-Fonts, keine sonstigen Externals → Fonts self-hosted bestätigt.
- [x] Mobile-Menü: Vollbild-Overlay, ×/Esc/Link schließt, Fokus-Management, Marke + × über dem Overlay lesbar.
- [x] Kontaktformular: Leer-Submit → 3 Feldfehler; valide → loading → success-Zyklus (Demo, kein echter Versand).

**Durchfaller nachgebessert (in diesem Pass gefunden & gefixt):**
1. **Mobile-Overlay nur header-hoch** — `backdrop-filter` auf `.site-header` bildete einen Containing-Block und fing das `position:fixed`-Overlay. Fix: Blur/BG auf `.site-header::before` ausgelagert → Overlay füllt jetzt den Viewport (gemessen 800=800).
2. **Marke + ×-Button vom Overlay verdeckt** (gleicher Stacking-Context, z-index 99). Fix: Toggle + Marke z-index 101 über dem Overlay, auf Dunkel umgefärbt; × wieder klickbar (elementFromPoint-verifiziert).
3. **FAQ-Item 3 ohne +/−-Icon** auf beiden Leistungsseiten — Icon-Span ergänzt.
4. **Rest-Em-Dashes im Fließtext** (Hero-Lead + Footer-Claim, 8 Dateien) → Doppelpunkt, konsistent zur entschärften Copy-Stimme.

**„Würde das auf godly.website bestehen?" — ehrliche Antwort:**
Für die Nische (seriöse Steuerkanzlei, Effekt-Level *dezent*, „Vertrauen vor Show") ist die Ausführung Top-Class: editoriale Typo, ein gesperrter Akzent, echter Grid-Bruch, funktionale Motion ohne Overshoot, vollständige a11y mit belegten Zahlen, 0 Errors, self-hosted Fonts. godly.website kuratiert oft maximalistisch-experimentelle Showcases — dieses Projekt ist *bewusst* zurückgenommen (Brief verbietet Show), also kein SOTD-Spektakel, sondern erstklassige Restraint. Als Portfolio-Stück und als Kanzlei-Seite besteht es. Bewusste Trade-offs (kein Defekt): Leistungskarten schlicht (keine Zahlen-/Icon-Deko, um den „3-Karten"-Tell zu meiden), Team-Porträts als CSS-Art statt Foto (Brief-Vorgabe), Kicker-Rhythmus je Sektion (07-Design-Regel 7, in dieser Nische ordnend statt templatehaft).

---

## 6c · DSGVO/Security-Gate-Protokoll (Aufgabe 5, Pflicht vor Deploy)

**Prüfmethode:** dieselbe headless-Chrome-Pipeline (Puppeteer-Core auf System-Chrome) wie in Aufgabe 4, diesmal für die 09-Checkliste + 10-Sicherheit. Alle Befunde unten sind gemessen, nicht angenommen.

### Pflichtseiten
- [x] **Impressum** (§5 DDG): Name/Firma, ladungsfähige Anschrift, E-Mail + Telefon, USt-ID, Kammer — vollständig, klar als fiktive Demo gekennzeichnet, Footer-Link auf allen 7 Seiten.
- [x] **Datenschutzerklärung** (Art. 13 DSGVO): Verantwortlicher, Hosting, Cookies/Tracking, Fonts, CDN-Bibliotheken, Kontaktformular, Betroffenenrechte — jeder eingebundene Dienst (GitHub Pages, jsDelivr) einzeln genannt, Footer-Link auf allen 7 Seiten.

### Technische Abmahngründe eliminiert
- [x] **Fonts self-hosted, verifiziert doppelt:** (1) `@font-face src` zeigt ausschließlich auf `/fonts/*.woff2`; (2) `document.fonts` meldet `Archivo`/`Fraunces` als `status: "loaded"` und Computed-Style bestätigt die Schrift wird tatsächlich gerendert (nicht nur deklariert und auf System-Font zurückgefallen).
- [x] **0 externe Requests außer den 2 CDN-Bibliotheken** — Performance-Log über alle 7 Seiten gemessen: ausschließlich `gsap.min.js`, `ScrollTrigger.min.js` (GSAP), `lenis.min.js` (Lenis) von `cdn.jsdelivr.net`. Kein Google-Fonts-Request, keine Analytics, keine Maps, keine Social-Embeds.
- [x] **Keine Cookies, kein Tracking:** Nach Besuch aller 7 Seiten **und** voller Interaktion (Mobile-Menü öffnen/schließen, FAQ-Accordion, Formular ausfüllen + absenden) gemessen: `document.cookie` = leer, CDP `cookies()` = `[]`, `localStorage`/`sessionStorage` = je 0 Einträge. Kein Consent-Banner nötig (§25 TTDSG) — korrekt, da keine Cookies gesetzt werden.
- [x] **Kontaktformular ohne echte Datenübertragung:** Netzwerk-Log direkt nach Klick auf „Nachricht senden" (mit validen Testdaten) gemessen: **0 Requests ausgelöst**, keine Navigation, Formular bleibt auf derselben Seite. Der sichtbare idle→loading→success-Zyklus ist rein clientseitig (`setTimeout`), TLS-Frage entfällt, da nichts gesendet wird — im Datenschutztext als „reine Funktions-Simulation" klar benannt.
- [x] **HTTPS:** wird von GitHub Pages für `*.github.io` automatisch erzwungen (kein eigenes Zutun nötig, „Enforce HTTPS" ist Pages-Standard) — lokal nicht testbar, hier dokumentiert statt vorgetäuscht.
- [x] **Hosting-AVV:** GitHub als Auftragsverarbeiter in der Datenschutzerklärung genannt; realer Vertragsabschluss ist Aufgabe des Kunden bei echtem Go-Live (Demo weist explizit darauf hin: „Voraussetzung für den produktiven Einsatz").
- [x] **Bilder/Assets:** keine Stock-/Fremd-Assets im Projekt — ausschließlich selbst geschriebene Inline-SVGs und CSS-Kompositionen (`grep '<img'` über alle 7 Seiten = 0 Treffer). Kein Urheberrechts-Doppelrisiko.
- [x] **Barrierefreiheit-Basics (BFSG):**
  - Kontrast AA: siehe §6b, alle Paare ≥4,5:1 (niedrigstes 5,32:1).
  - Alt-Texte/ARIA: Audit über alle `<svg>`-Elemente aller 7 Seiten. Ein echter Fund: die zwei Icon-SVGs im Formular-Submit-Button (Spinner, Erfolgs-Haken) hatten kein `aria-hidden`, der Spinner-Fund war sogar invers falsch (das gesamte `aria-hidden="true"`-Span verschluckte auch den sichtbaren Status-Text „Wird gesendet …" und hätte die `aria-live="polite"`-Ansage stumm geschaltet). Gefixt: `aria-hidden="true"` sitzt jetzt nur auf dem dekorativen `<svg>`, der Statustext bleibt für Screenreader hörbar.
  - Tastatur/Touch: native `<details>`/`<summary>` für FAQ (voll tastaturbedienbar ohne JS), Mobile-Menü mit Fokus-Management + Esc.
  - **Touch-Targets ≥44px:** automatisiert über alle interaktiven Elemente (`a, button, input, textarea, summary`) auf 390px gemessen. Zwei echte Lücken gefunden und gefixt: der Steht-für-sich-„Team kennenlernen"-Link (About-Teaser) und die Telefon-/E-Mail-Links im Kontakt-Info-Block hatten keine Mindesthöhe (Footer hatte sie bereits, diese Stelle nicht). Eine verbleibende Meldung („Datenschutzerklärung"-Link im Privacy-Note-Fließtext, 24px) ist **kein Fehler**, sondern die von WCAG 2.5.8 (Target Size Minimum) explizit ausgenommene Kategorie „Inline: Ziel sitzt in einem Satz/Textblock" — ein Fließtext-Link kann nicht auf 44px aufgeblasen werden, ohne die Typografie zu zerstören.

### Security-Header (GitHub-Pages-Möglichkeiten)
- [x] **Content-Security-Policy per `<meta http-equiv>`** auf allen 7 Seiten ergänzt (GitHub Pages erlaubt keine eigenen HTTP-Response-Header, Meta-CSP ist die einzig verfügbare Option für reines Static-Hosting):
  `default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';`
  - `connect-src 'none'` und `frame-src/object-src 'none'` sind bewusst maximal restriktiv — es gibt im ganzen Projekt keinen fetch/XHR/iframe/embed, die Policy erzwingt das jetzt auch auf Browser-Ebene, nicht nur per Konvention.
  - `'unsafe-inline'` bei `script-src`/`style-src` ist ein bewusster, dokumentierter Kompromiss (keine Build-Pipeline für Nonces/Hashes über 7 statische Seiten hinweg mit unterschiedlichem JSON-LD-Inhalt); vertretbar, da keine nutzergenerierten Inhalte irgendwo reflektiert werden (kein XSS-Vektor vorhanden).
  - **Verifiziert:** alle 7 Seiten mit aktiver CSP geladen, GSAP/ScrollTrigger/Lenis laden weiterhin (`typeof window.gsap !== 'undefined'` etc. = true überall), **0 CSP-Violations** in der Konsole gemessen.

### Zusammenfassung der in diesem Gate gefundenen und gefixten Lücken
1. Zwei Formular-Icon-SVGs ohne korrektes `aria-hidden` (eines davon verschluckte sogar den Live-Status-Text).
2. Zwei Touch-Targets unter 44px (About-Teaser-Link, Kontakt-Adresslinks).
3. CSP-Header fehlte komplett → jetzt auf allen 7 Seiten, verifiziert ohne Violations.

---

## 7 · Aufgaben-Status
- [x] **Aufgabe 0** — Profil, Referenzwerte, Tokens, Struktur, Snippet-Plan → dieser Plan. *(Opus 4.8 High)*
- [x] **Aufgabe 1** — Gerüst + Nav + Footer. 7 Seiten, self-hosted Fonts, Nav (NAV-009+N2+N3/NV2), Footer (FTR-006+F3), Lenis+GSAP-Setup, No-JS-Fallback (html.js-Gate). *(Sonnet 5)*
- [x] **Aufgabe 2** — Home. Alle 8 Sektionen, Motion-Budget exakt 5 (Hero-Wortmaske, Karten-Mask-Wipe, Signature Theme-Flip+Count-up, Parallax-Tiefe, Trust-Chips-Draw). *(Sonnet 5)*
- [x] **Aufgabe 3** — Unterseiten. 2 Leistungsseiten (Hero→Problem/Nutzen→Ablauf→FAQ→CTA, JSON-LD), Team (3 CSS-Art-Profile), Kontakt (Formular+Submit-Zyklus+Anfahrt-SVG). *(Sonnet 5)*
- [x] **Aufgabe 4** — Craft-Pass + Abnahme (headless-Chrome-Review, Checkliste bestanden, 4 Durchfaller gefixt → §6b). *(Opus 4.8 High)*
- [x] **Aufgabe 5** — DSGVO/Security-Gate. Vollständige 09-Checkliste belegt (Cookies/Storage/Network gemessen, CSP ergänzt+verifiziert, 3 a11y-Lücken gefixt) → §6c. *(Sonnet 5)*
- [ ] Abschluss — Deploy + Vault zurückfüllen *(Sonnet 5)*
</content>
</invoke>
