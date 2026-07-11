/* WALDNER & PART — Home-Interaktionen (Aufgabe 2–4)
   Motion-Budget (4-6): Hero-Wortmaske+Parallax · Signature-Pin-Choreografie
   (Theme-Flip+Fold+Count-up+Hairline) · Parallax-Tiefe (About) · Reveal-Stagger
   (Steps/Proof, sitewide in main.js) · Trust-Chips-Draw. Karten-Mask-Wipe ist
   reiner CSS-Hover, zählt nicht zum Scroll-Motion-Budget.
   Alles reduced-motion-safe; ohne JS bleibt jeder Inhalt sichtbar (html.js-Gate). */

(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';

  /* ---------- 1. Hero: Wortmaske + Kicker (Load-Entry) ---------- */
  var heroKicker = document.querySelector('.hero__kicker');
  var heroWords = document.querySelectorAll('.hero .mask-word > span');

  if (hasGSAP && !prefersReduced) {
    var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (heroKicker) heroTl.to(heroKicker, { opacity: 1, y: 0, duration: .6 }, 0.1);
    if (heroWords.length) heroTl.to(heroWords, { y: 0, duration: .8, stagger: .05 }, 0.15);
  } else {
    if (heroKicker) { heroKicker.style.opacity = 1; heroKicker.style.transform = 'none'; }
    heroWords.forEach(function (w) { w.style.transform = 'none'; });
  }

  /* ---------- 1b. Hero: Layered Parallax-Tiefe (REFERENZEN H5, scrub-Faktor .15/.3/.6) ---------- */
  var heroLayers = document.querySelectorAll('.hero [data-parallax]');
  if (heroLayers.length && hasGSAP && hasScrollTrigger && !prefersReduced) {
    heroLayers.forEach(function (layer) {
      var factor = parseFloat(layer.dataset.parallax) || 0.2;
      gsap.to(layer, {
        yPercent: factor * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4
        }
      });
    });
  }

  /* ---------- 2. Signature — das Award-Herz: gepinnt, scrub-Theme-Flip (SEC-001-Lerp),
     gestaffelter Fold-Reveal + Rolling-Numbers + Hairline-Draw (KAIVOSS-Choreografie:
     Auslöser führt, Folgen ~0.3 versetzt, EIN Easing, kein Overshoot). ---------- */
  var signature = document.querySelector('.signature');
  if (signature) {
    var statEls = signature.querySelectorAll('.stat__num');
    var statBlocks = signature.querySelectorAll('.stat');
    var hairline = signature.querySelector('.signature__hairline');

    function formatStat(el, value) {
      var decimals = parseInt(el.dataset.decimals || '0', 10);
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      var formatted = value.toFixed(decimals).replace('.', ',');
      el.textContent = prefix + formatted + suffix;
    }

    function runCountUps(stagger) {
      statEls.forEach(function (el, idx) {
        var target = parseFloat(el.dataset.count || '0');
        // Markup zeigt den Endwert per Default (No-JS/Crawler/Reader-Mode-sicher).
        // Erst hier, unmittelbar bevor die Animation wirklich läuft, kurz auf 0 setzen.
        if (prefersReduced || !hasGSAP) { formatStat(el, target); return; }
        formatStat(el, 0);
        var proxy = { v: 0 };
        gsap.to(proxy, {
          v: target,
          duration: 1,
          delay: stagger ? idx * 0.06 : 0,
          ease: 'power3.out',
          onUpdate: function () { formatStat(el, proxy.v); }
        });
      });
    }

    function activateSignature() {
      signature.classList.add('is-dark');
      runCountUps(false);
    }

    if (hasGSAP && hasScrollTrigger && !prefersReduced) {
      signature.classList.add('js-scrub');

      var bgFrom = [230, 222, 207]; // --bg-alt
      var bgTo = [22, 19, 13];      // --bg-deep
      var flipped = false;
      var counted = false;

      gsap.set(statBlocks, { clipPath: 'inset(0% 0 100% 0)' });
      if (hairline) gsap.set(hairline, { scaleX: 0 });

      var bgProxy = { t: 0 };
      var sigTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: signature,
          start: 'top top',
          end: '+=120%',
          scrub: 0.5,
          pin: true
        }
      });

      // Stufe 1 (0 → 1): kontinuierliches BG-Lerp, Auslöser der Choreografie.
      sigTl.to(bgProxy, {
        t: 1,
        duration: 1,
        ease: 'none',
        onUpdate: function () {
          var r = Math.round(bgFrom[0] + (bgTo[0] - bgFrom[0]) * bgProxy.t);
          var g = Math.round(bgFrom[1] + (bgTo[1] - bgFrom[1]) * bgProxy.t);
          var b = Math.round(bgFrom[2] + (bgTo[2] - bgFrom[2]) * bgProxy.t);
          signature.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
          if (!flipped && bgProxy.t > 0.5) { flipped = true; signature.classList.add('is-dark'); }
          else if (flipped && bgProxy.t <= 0.5) { flipped = false; signature.classList.remove('is-dark'); }
        }
      }, 0);

      // Stufe 2 (Start 0.35, ~0.3 nach dem BG-Auslöser): Stat-Blöcke falten gestaffelt auf.
      sigTl.to(statBlocks, {
        clipPath: 'inset(0% 0 0% 0)',
        duration: 0.6,
        stagger: 0.08
      }, 0.35);

      // Stufe 3 (0.55): Rolling-Numbers, einmalig (kein Rückwärts-Zählen bei Scroll-Up).
      sigTl.call(function () {
        if (counted) return;
        counted = true;
        runCountUps(true);
      }, null, 0.55);

      // Stufe 4 (0.8): Messing-Hairline zeichnet sich, Abschluss der Choreografie.
      sigTl.to(hairline, { scaleX: 1, duration: 0.4 }, 0.8);
    } else if (hasGSAP && hasScrollTrigger) {
      ScrollTrigger.create({
        trigger: signature,
        start: 'top 70%',
        once: true,
        onEnter: activateSignature
      });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { activateSignature(); io.unobserve(entry.target); }
        });
      }, { threshold: .3 });
      io.observe(signature);
    } else {
      activateSignature();
    }
  }

  /* ---------- 3. About-Teaser: Parallax-Tiefe (BG langsamer als Vordergrund) ---------- */
  var artBg = document.querySelector('.about-teaser__art .art-bg');
  if (artBg && hasGSAP && hasScrollTrigger && !prefersReduced) {
    gsap.to(artBg, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-teaser',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });
  }

  /* ---------- 4. Trust-Chips: Draw-Border (gestaffelt, once) ---------- */
  var chipRects = document.querySelectorAll('.chip__border rect');
  if (chipRects.length) {
    if (hasGSAP && hasScrollTrigger && !prefersReduced) {
      ScrollTrigger.create({
        trigger: '.trust__chips',
        start: 'top 85%',
        once: true,
        onEnter: function () {
          chipRects.forEach(function (rect, idx) {
            setTimeout(function () { rect.classList.add('is-drawing'); }, idx * 150);
          });
        }
      });
    } else {
      chipRects.forEach(function (rect) { rect.style.strokeDashoffset = 0; });
    }
  }
})();
