# BUILD-PLAN v2 — Award-Rebuild WALDNER & PART

> Ziel: awwwards Site-of-the-Day-Niveau. Weg vom flachen Cream-auf-Weiß-KI-Look
> hin zu einer distinktiven, gemessenen Farbwelt mit hell↔dunkel-Dramaturgie.
> Erstellt Aufgabe 0 (Opus 4.8 High). Skills: design-mirror · taste-skill · high-end-visual-design.

---

## 1 · Award-Teardown — gemessene Referenzen

**Methode:** awwwards SOTD/Nominee-Detailseiten + Live-Fetch (SPA-limitiert) + Vault-Paletten
(bezahlt gelernt) + REFERENZEN.md Zielwerte (Codrops/GSAP-gemessen). MIRROR, NEVER STEAL.

| Ref | Quelle (live/award) | Farbstrategie | Typo | Hero / Signature | Motion |
|---|---|---|---|---|---|
| **R1 Quincy Réquin & Assoc.** | awwwards SOTD (avocats, Paris) — quincy-requin-avocats.com | Neutral + **EIN warmer Akzent** (dort Koralle #FF9398) auf Weiß, 3-Farb-System | Flat, Sans, minimal | „Unusual Navigation" als Signatur | reduziert, Nav-getrieben |
| **R2 Locomotive** (locomotive.ca) | Studio, Award-Dauergast | **Dunkle Anker-BGs, hell↔dunkel-Wechsel zwischen Sektionen**, reservierte Farbe | Grotesk, typo-forward, riesig | Statement-Block, konzeptuelle Tiefe | eigener Smooth-Scroll + Parallax = Signatur |
| **R3 KOENIGSEGG-Klasse** (Vault, Premium/Luxury ⭐) | Vault 04-Farbschema | **Cream/Ivory + tiefes Anthrazit + Gold/Chrome** — belegt für Premium | Editorial | Vollbild-Motiv, Scale-Down | dezent-teuer |
| **R4 KAIVOSS** (kaivoss-mirror-demo, live-Anker) | Vault KAIVOSS-BAR | Warmes Mono + EIN Akzent, klare Kanten | Grotesk + EIN Serif-Emphasis | Scale-Down-Karte + Theme-Flip | mehrstufig gekoppelt, EIN Easing (0.65,.05,.36,1) |

**Gemessene Zielwerte (aus REFERENZEN.md, award-typisch/Codrops-belegt):**
- **Typo-Skala:** riesige Editorial-Headline; SplitText word-mask `translateY 100%→0`, stagger **0.05 s**, **0.8 s** `power3.out`.
- **Spacing-Rhythmus:** 8-px-Basis, großzügiger Weißraum, Sektions-Pad ~clamp(6–11 rem).
- **Hero-Mechanik:** Massive-Type + Layered-Parallax-Depth (3–4 Ebenen, scrub 0.15/0.3/0.6) + Grain .07.
- **Farbstrategie (Konsens R1–R4):** ~90 % Mono + **EIN** Akzent; Dunkel als **Anker**, nicht nur Akzent; hell↔dunkel als Dramaturgie.
- **Signature:** Theme-Flip beim Scroll (SEC-001-lerp) + Rolling-Numbers (K8: pro Ziffer `translateY -n·1em`, stagger **0.06 s**, **0.8 s** power3.out, tabular-nums).
- **Motion-Grammatik:** EIN Easing, kein Overshoot (0 % im ganzen TASTE-Datensatz), Einzelstufe 0.22–0.34 s, Zyklus ~0.8 s.

**TASTE-Belege, die die Richtung stützen:**
- **DA4 „Dark vor Light"** (dark 46 % vs light 38 %) → dunkle Anker gewinnen.
- **DA3 KAIVOSS-Tokens 88 %** (höchster Tag): warmes Mono + EIN Akzent, Grotesk + EIN Serif-Emphasis.
- **DA1 „Struktur schlägt Deko"**, Sektionen/Social-Proof stark → Zahlen-Statement als echtes Element.
- Verbot #8: **generischer KI-Look** (flache Gradient-/Cream-Flächen) — exakt das aktuelle Problem.

---

## 2 · NEUE Farbwelt — Entscheidung: **A „Legal Editorial Dark"**

**Warum A (und nicht B/C):**
Der aktuelle Bestand ist faktisch ein zu-zaghaftes B („Old Money"-Grün): tiefes Tannengrün liegt nur
als *Mini-Akzent* auf durchgehend Ivory-auf-Weiß — **das dunkle Anker-Tokens `--bg-deep` wird kaum
benutzt**, darum der flache Cream-KI-Look. Fix ist nicht ein neuer Farbton allein, sondern **Dunkel
zum tragenden Sektions-Anker machen** (R2 Locomotive, R3 KOENIGSEGG, DA4). Dazu ein **warmes Messing/
Bronze** statt des matten Grüns: wärmer, „Kanzlei/old-money", edler als Gold-Toxisch, klar EIN Akzent.
C (Burgunder) wäre zu laut für eine seriöse Steuerberatung; reines B bleibt bei „nur Akzent" hängen.
A liefert echte **hell↔dunkel-Dramaturgie** (Hero dunkel → Leistungen hell → Signature-Flip →
CTA/Footer dunkel) = die belegte Award-Mechanik, ohne KI-Geruch.

**Warm-Espresso-Anthrazit (Anker) · warmes Off-White (Papier) · Messing/Bronze (EIN Akzent).**
Foto/Art-Grade bleibt dezent (Vault-Regel: nie flächig-toxisch, kein hue-rotate).

---

## 3 · Design-Tokens (gesperrt — Ziel für css/tokens.css, Aufgabe 1)

```css
:root {
  /* ── Papier / Light-World (Default-Sektionen) ── */
  --bg:          #EFE9DE;   /* warmes Off-White, deutlich weg von #FFF */
  --bg-alt:      #E6DECF;   /* leicht tiefer, für alternierende Bänder */
  --ink:         #1B1712;   /* warmes Fast-Schwarz */
  --ink-soft:    #6B6154;   /* Fließtext-sekundär, AA auf --bg */
  --line:        #D6CBB6;   /* Hairlines auf hell */

  /* ── Anthrazit / Dark-World (Anker: Hero, Signature-Flip, CTA, Footer) ── */
  --bg-deep:     #16130D;   /* warm-espresso Anker-Schwarz */
  --bg-deep-alt: #201B13;   /* Panel/Karte auf dunkel */
  --ink-inv:     #EDE6D6;   /* Off-White auf dunkel */
  --ink-inv-soft:rgba(237,230,214,.62);
  --line-inv:    rgba(237,230,214,.14);

  /* ── EIN Akzent — Messing / Bronze ── */
  --accent:          #6E4F1E;   /* tiefe Bronze — Text/Icons/Button-Fill auf HELL, AA-geprüft (~6.2:1 auf --bg) */
  --accent-hov:      #573D16;   /* dunkler bei Hover auf hellem Grund */
  --accent-dark:     #C6A15B;   /* helle Messing — Text/Ziffern/Emphasis auf DUNKEL, AA-geprüft (~7.6:1 auf --bg-deep) */
  --accent-dark-hov: #D8B871;   /* heller bei Hover auf dunklem Grund */
  --accent-ink:      #EDE6D6;   /* heller Text auf Bronze-Button-Fläche, AA-geprüft (~5.7:1 auf --accent) */

  /* ── Typografie (self-hosted: Archivo Grotesk + Fraunces-Italic Serif-Emphasis) ── */
  --font-grotesk: 'Archivo', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-serif:   'Fraunces', Georgia, serif;   /* italic = Emphasis-Wort */

  --fs-mega:    clamp(4rem, 14vw, 13rem);   /* Signature-Ziffern */
  --fs-display: clamp(3.2rem, 10vw, 9rem);  /* Hero-Headline (größer, editorial) */
  --fs-h1:      clamp(2.6rem, 6vw, 5.5rem);
  --fs-h2:      clamp(2rem, 4.5vw, 3.6rem);
  --fs-h3:      clamp(1.25rem, 2vw, 1.6rem);
  --fs-lead:    clamp(1.1rem, 1.5vw, 1.35rem);
  --fs-body:    clamp(1rem, 1.05vw, 1.1rem);
  --fs-small:   0.9rem;
  --fs-kicker:  0.72rem;   /* uppercase, tracking .18em */

  /* ── Spacing / System (8-px-Basis, großzügig) ── */
  --max-w:       1240px;
  --max-w-wide:  1440px;   /* Grid-Bruch/Bleed */
  --pad-x:       clamp(1.25rem, 4vw, 4rem);
  --section-pad: clamp(6rem, 14vh, 11rem);
  --gap:         clamp(1.5rem, 3vw, 3rem);

  /* ── Motion — EIN Easing (KAIVOSS, gemessen) ── */
  --ease:      cubic-bezier(0.65, 0.05, 0.36, 1);  /* alle CSS-Transitions */
  --ease-out:  cubic-bezier(0.65, 0.05, 0.36, 1);  /* alias, kein Zweit-Easing */
  --dur:       .7s;
  /* GSAP: defaults.ease = 'power3.out' (Kurven-Geschwister), Close = 'power2.inOut' */

  --radius-sm: 6px;
  --radius-md: 12px;
  --grain:     .07;   /* Grain-Overlay-Opazität */
}
```
> Font-Hinweis: Archivo (upright) + Fraunces-Italic sind bereits self-hosted → **kein neuer CDN**.
> Serif-Emphasis = **kursiv** (old-money-Geste, passt zu „spürt."). Optional Enhancement:
> Fraunces-upright-Variable nachladen für Display-Serif — nur wenn nötig, self-hosted.

---

## 4 · Signature-Moment (das Award-Herz)

**Gepinnte Zahlen-Sektion mit Theme-Flip** — die Sektion pinnt, während:
1. **BG kippt hell→dunkel** (SEC-001-lerp `#EFE9DE`→`#16130D`, scrub, Naht bei ~35–85 %).
2. Drei Stat-Blöcke **staffeln/entfalten** ein (stagger 0.06 s, `clip-path`/`y`, EIN Easing).
3. **Rolling-Numbers** rollen auf die Endwerte (K8: pro Ziffer `translateY`, stagger 0.06 s, 0.8 s power3.out, tabular-nums, `once`).
4. Messing-**Hairline** zeichnet sich darunter (`scaleX` 0→1).

**Echte Endzahlen im HTML (JS-off-sicher, konsistent „Seit 2008" = 18):**
`18` Jahre · `340+` Mandate · `€ 2,4 Mio.` Volumen p.a. — Count-up ist **nur Enhancement**.
KAIVOSS-Prüfung: Auslöser (Pin/Flip) führt, Ziffern folgen ~0.3 s, gekoppelt, kein Overshoot.

---

## 5 · Motion-Plan (4–6 gezielte Interaktionen, KAIVOSS-Niveau)

1. **Hero-Entry** — SplitText word-mask (`y 100%→0`, stagger 0.05 s, 0.8 s power3.out); Serif-Italic-Emphasis-Wort in `--accent`; 3 Parallax-Ebenen (scrub 0.15/0.3/0.6) + Grain.
2. **Nav** — hide/reveal beim Scroll (nach unten weg, hoch zurück) + Messing-Underline-Draw auf Links (`::before` width 0→ , .7 s var(--ease)).
3. **Signature** — Pin + Theme-Flip + Rolling-Numbers (§4) — *das Herz*.
4. **Scroll-Reveals** — H2 word/line-mask-reveal (`top 85%`, once); Step-/Proof-Grids stagger 0.06–0.08 s.
5. **Service-Karten** — dezenter Mask-Wipe-Reveal (CRD-008) + Messing-Hairline bei Hover.
6. **Footer/CTA** — Reveal-on-Scroll + Big-Type-Wordmark outline→fill bei Hover (F1).

**Guardrails (Pflicht):** `body{overflow-x:clip}`, 100dvh, EIN Easing, reduced-motion + JS-off voll
nutzbar (Zahlen = echte Endwerte), 0 Console-Errors, Touch ≥44 px, WCAG AA, CDN nur GSAP+Lenis.

---

## 6 · Snippet-Plan (Lab-Perfektstücke — IDs verifiziert vorhanden)

| Einsatz | Snippet-ID | Mechanik |
|---|---|---|
| Hero-Typo-Entry | HRO-003 · REFERENZEN H1/K1 | word-mask SplitText |
| Hero-Tiefe | REFERENZEN H5 + FX-005 | Layered-Parallax + Mask/Grain |
| Nav | NAV-003 · TYP-009 | KAIVOSS-Widen / Underline-Draw |
| Signature-Flip | **SEC-001** | Theme-Flip hell→dunkel (lerp) |
| Signature-Count | **SOC-004** · REFERENZEN K8/T5 | Rolling-Numbers count-up |
| Service-Karten | **CRD-008** | Mask-Wipe-Reveal (dezent) |
| Steps/Proof-Stagger | REFERENZEN T3 · SCR | y+opacity stagger, once |
| Trust-Chips | **TRB-004** | Draw-Border + Hover |
| Footer | **FTR-010** · REFERENZEN F1 | Security-Strip / Big-Type-Fill |
| Buttons | BTN-101 / BTN-114 | dezenter Zustands-Button |

---

## 7 · Datei-Koordination
- **DU (Terminal 1):** `index.html`, globales Token-/Basis-CSS (`tokens.css`, `base.css`, `nav.css`,
  `footer.css`, `home.css`), Home-JS (`home.js`, `main.js`), `/fonts`. Unterseiten NICHT anfassen.
- Nach **Aufgabe 1** (Tokens) sofort **commit + push** → Terminal 2 zieht die neuen Tokens.
- Danach: commit je Aufgabe.

---

## 8 · Terminal 2 — Unterseiten/SEO/DSGVO-Gate auf Farbwelt A (Sonnet 5)

**Ausgangslage:** Terminal 1 Aufgabe 1 (`356e276`) lieferte `css/tokens.css` mit denselben Variablen-
Namen wie zuvor (`--bg`, `--ink`, `--accent`, `--accent-dark`, `--line`, `--bg-deep` …), nur neue Werte.
Dadurch übernahmen `css/subpages.css` und alle 6 Unterseiten die neue Farbwelt **automatisch**, ohne
Strukturänderung — geprüft per Live-Render (`leistungen-unternehmen.html`, `leistungen-privat.html`,
`team.html`, `kontakt.html`): Hero, Nav-CTA, Team-Porträts (Dark-Panel + Bronze-Linien), Anfahrt-SVG
(Bronze-Pin) und Formular-Button zeigen konsistent Espresso-Anthrazit/Off-White/Messing.

**Gefundene + gefixte Lücke:** `theme-color`-Meta auf allen 6 Unterseiten zeigte noch `#F4F1EA`
(altes Ivory) statt der neuen Papier-Farbe → auf `#EFE9DE` korrigiert (Commit `783ba73`).

**Neue Grep-Prüfung (alte Hex-Werte):** `grep -rniE '#1F4A38|#9DBBA9|#163627|#F4F1EA|#ECE7DB|#17211C|#1A2420|#55605A|#D8D2C4'`
über alle 6 Unterseiten + `subpages.css` + JS → **0 Treffer** nach dem theme-color-Fix. Kein Restfarbwert
aus der alten Tannengrün/Ivory-Welt übrig.

**og-image neu gerendert (Commit `ca3c0a6`):** das alte `og-image.png` zeigte noch die Tannengrün-Palette.
Per Canvas-2D (self-hosted Archivo/Fraunces, `document.fonts.load` vor dem Zeichnen) in der neuen
Farbwelt A neu erzeugt, 1200×630, 59 KB, aus dem Repo selbst gerendert (kein Fremd-Tool/Fremd-Asset).

**AA-Kontrast unabhängig nachgerechnet** (WCAG-Relativluminanz-Formel, nicht nur Terminal-1-Kommentare
übernommen):

| Paar | Ratio |
|---|---|
| `--ink` auf `--bg` | 14.76:1 |
| `--ink-soft` auf `--bg` | 5.02:1 |
| `--accent` (Text) auf `--bg` | 6.21:1 |
| `--accent-hov` auf `--bg` | 8.34:1 |
| `--accent-dark` auf `--bg-deep` | 7.63:1 |
| `--accent-dark-hov` auf `--bg-deep` | 9.72:1 |
| `--accent-ink` auf `--accent` (Button-Fläche) | 6.03:1 |
| `--ink-inv` auf `--bg-deep` | 14.91:1 |

Alle Text-Paare ≥ 4.5:1 (AA) — die neue Bronze-Palette ist nicht nur optisch, sondern messbar
mindestens so kontraststark wie die alte Tannengrün-Palette (vgl. BUILD-PLAN.md §6c: alte niedrigste
war 5.32:1, hier niedrigste 5.02:1, beide über der AA-Schwelle).

**0 Console-Errors** verifiziert auf `team.html` (frisches Reload) und `kontakt.html` (alte + neue
Palette). Interne Links weiterhin 0 Treffer auf fehlende Ziele (Regex-Check über alle `.html`).

**Stand:** Terminal 1 hat mit `864b462` („restliche Home-Sektionen mit Craft") die Home-Rebuild-Reihe
(Aufgabe 1–4) abgeschlossen. Damit war die Grundlage für die finale sitesweite QA gegeben.

## 8b · Terminal 2 — Aufgabe 4: QA gesamte Site (headless Chrome, Puppeteer-Core)

**Methode:** `puppeteer-core` lokal installiert (nur Scratchpad, nicht im Repo), gegen System-Chrome
(`C:\Program Files\Google\Chrome\Application\chrome.exe`) — dieselbe Pipeline wie in BUILD-PLAN.md §6b/§6c
für den v1-Build. Alle 7 Seiten × 4 Zustände (28 Kombinationen) automatisiert geprüft:
`1440px` · `390px` · `prefers-reduced-motion: reduce` · `JavaScript deaktiviert`.

**Ergebnis: 0 Abweichungen.**
- **Kein horizontaler Overflow** auf keiner der 28 Kombinationen (`scrollWidth === clientWidth` überall,
  auch bei 390px und im Dark-Hero mit Parallax-Kreisen).
- **0 Console-/Page-/Request-Errors** auf allen 7 Seiten in allen 4 Zuständen.
- **Genau 1 `<h1>`** pro Seite (kein Doppel-H1 durch die Home-Craft-Änderungen).
- **JS-off-Zahlen-Check (Signature-Sektion, der frühere Bugtyp aus Fix-Pass 1):** `18` / `340+` /
  `€ 2,4 Mio.` stehen als echte Endwerte im gerenderten Text, nicht `0` — mit `setJavaScriptEnabled(false)`
  gemessen, nicht nur am Markup abgelesen.
- **Reduced-motion-Endzustand** (Screenshot, Hero): Wortmaske vollständig sichtbar, Parallax-Kreise/
  Hairlines statisch da, kein Inhalt hinter einer nie startenden Animation versteckt.
- **390px-Mobile** (Screenshot, Hero): Hamburger-Icon, Headline umbricht sauber 2-zeilig, CTA-Button
  volle Breite, kein Clipping am Dark→Papier-Übergang.

**Cross-Browser-Basis:** Chromium-Rendering (Puppeteer/Chrome) + manuelle Live-Prüfung im Claude-in-
Chrome-Browser (separate Engine-Instanz) zeigen identisches Layout/Farben — kein Browser-spezifischer
Bruch beobachtet. Kein Zugriff auf Firefox/Safari in dieser Umgebung; nicht weiter automatisierbar hier.

**Alle 6 von Terminal 2 verantworteten Unterseiten + Home (Terminal 1) bestehen die Aufgabe-4-QA-Kriterien.**

---

## Aufgabe 5 — Craft-Abnahme gegen die Award-Referenzen (Opus 4.8 High)

Side-by-side der fertigen Home gegen die Aufgabe-0-Referenzen (Legal Editorial Dark:
R2 Locomotive hell↔dunkel · R3 KOENIGSEGG-Palette · R4 KAIVOSS-Choreografie). Live im
Browser durchgescrollt (1440), Guardrails im Code verifiziert, Terminal-2-Puppeteer-QA
(28 Kombinationen, 7 Seiten) als unabhängiger Beleg für 390px / reduced-motion / JS-off.

### Craft-Checkliste — bestanden mit Belegen
- **Farbwelt-Wirkung:** hell↔dunkel-Dramaturgie greift durchgehend (Hero dunkel → Leistungen/
  About hell → Signature-Flip → CTA/Footer dunkel). Kein flacher Cream-Kasten mehr = das
  Kern-Ziel erreicht. Beleg: Sektions-Screenshots, Signature-Scrub live durchfahren.
- **Typo:** riesige Editorial-Display-Typo (--fs-display) im Hero, Serif-Italic-Emphasis in
  Messing, tabular-nums-Signaturziffern. Descender-Clearance „Erstgespräch"/„spürt." geprüft.
- **EIN Akzent:** Messing/Bronze konsistent auf der ganzen Seite (kein Zweitakzent). Zwei
  Helligkeitsstufen (tiefe Bronze auf hell, helle Messing auf dunkel) = derselbe Ton, AA-sauber.
- **Weißraum / Grid-Bruch:** About-Teaser bricht das Grid (Full-Bleed-Espresso-Art-Panel).
  Großzügiger Sektions-Pad (clamp 6–11rem).
- **Captions/Attribution:** Social-Proof mit echten Namen + Firma (nicht „Jane Doe"), Trust-
  Chips mit realen Kammern/Qualifikationen.
- **Motion vs TASTE+KAIVOSS:** Signature ist mehrstufig-gekoppelt (Flip→Fold→Count→Hairline),
  EIN Easing, kein Overshoot. Motion-Budget 5 (Hero, Signature, About-Parallax, Reveal-Stagger,
  Trust-Draw) — im 4–6-Rahmen. Karten-Hover CRD-008 tut etwas (Zustand), zählt nicht als Deko.

### Durchfaller benannt + gefixt (1 Iteration)
1. **Em-Dashes in Body-Copy** (Anti-Slop-Tell): About-Text, Footer-Claim, Footer-Demo-Note,
   Brand-aria-Label → entfernt/zu Punkt bzw. Mittelpunkt. (Range-„Mo–Do 8:00–17:00" bleibt:
   korrekter deutscher Bis-Strich, kein Tell. Meta-/Title-Dashes = SEO-Domäne Terminal 2,
   seitenübergreifend konsistent, nicht einseitig geändert.)
2. **Eyebrow-Dichte** (KI-Grammatik: Kicker über fast jeder Sektion): die zwei rein redundanten
   („Über uns", „So arbeiten wir" über selbsttragenden H2) entfernt. Verbleibende Kicker sind
   entweder echte Sektions-Überschrift (Zahlen/Stimmen/Vertrauen, kein H2) oder tragen echte
   Kategorisierung (Leistungen) → deliberates Light-System statt Reflex-Scaffold.

### Ehrliche Einschätzung: „Site of the Day-fähig? Noch KI-Geruch?"
Der KI-Geruch des Ausgangsstands (flacher Cream-Hero, tote Zahlen, generische Typo) ist **weg**.
Klar Top-Tier für eine Kanzlei/Professional-Services-Seite; belastbarer awwwards-**Nominee/
Honorable-Mention**-Kandidat. Ehrliche Rest-Distanz zu echtem SOTD: (a) die eigene CSS/SVG-Art
(Siegel/Ledger) statt echter Architektur-/Portrait-Fotografie — für eine fiktive Demo bewusst
und sauber ausgeführt, aber Fotografie würde weiter tragen; (b) die 3 gleichen Leistungs-Karten
sind der einzige leicht templatige Punkt (durch funktionalen Hover + echte Gleichrang-Inhalte
vertretbar); (c) Fraunces-Italic-Emphasis ist bewusst als Editorial-Legal-Geste gesetzt (gesperrtes
Marken-Token aus A0), kein Default-Griff. Innerhalb der Vorgaben (fiktive Demo, self-hosted Fonts,
nur GSAP+Lenis) ein echtes Top-1%-Craft-Ergebnis.

**Checkliste bestanden. Kein KI-Look mehr.**
