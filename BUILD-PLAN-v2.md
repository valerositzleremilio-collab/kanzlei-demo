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
  --accent:      #C6A15B;   /* Messing — auf DUNKEL (Buttons, Emphasis, Ziffern) */
  --accent-hov:  #D8B871;   /* heller bei Hover */
  --accent-text: #8A6A2E;   /* Bronze — Text-Emphasis auf HELL (hält WCAG AA) */
  --accent-ink:  #16130D;   /* dunkler Text auf Messing-Fläche */

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
