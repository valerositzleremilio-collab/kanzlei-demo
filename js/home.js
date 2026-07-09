/* WALDNER & PART — Home-Interaktionen (Aufgabe 2)
   Motion-Budget: Hero-Wortmaske · Karten-Mask-Wipe (CSS-Hover) · Signature
   Theme-Shift+Count-up · Parallax-Tiefe (About) · Trust-Chips-Draw.
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

  /* ---------- 2. Signature: Theme-Shift (einmalig, abgeschwächt) + Zahlen-Count-up ---------- */
  var signature = document.querySelector('.signature');
  if (signature) {
    var statEls = signature.querySelectorAll('.stat__num');

    function formatStat(el, value) {
      var decimals = parseInt(el.dataset.decimals || '0', 10);
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      var formatted = value.toFixed(decimals).replace('.', ',');
      el.textContent = prefix + formatted + suffix;
    }

    function runCountUps() {
      statEls.forEach(function (el) {
        var target = parseFloat(el.dataset.count || '0');
        // Markup zeigt den Endwert per Default (No-JS/Crawler/Reader-Mode-sicher).
        // Erst hier, unmittelbar bevor die Animation wirklich läuft, kurz auf 0 setzen.
        if (prefersReduced || !hasGSAP) { formatStat(el, target); return; }
        formatStat(el, 0);
        var proxy = { v: 0 };
        gsap.to(proxy, {
          v: target,
          duration: 1.2,
          ease: 'power3.out',
          onUpdate: function () { formatStat(el, proxy.v); }
        });
      });
    }

    function activateSignature() {
      signature.classList.add('is-dark');
      runCountUps();
    }

    if (hasGSAP && hasScrollTrigger) {
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

  /* ---------- 4. Social Proof: rotierendes Zitat (Crossfade, once loaded) ---------- */
  var proofText = document.getElementById('proofText');
  var proofWho = document.getElementById('proofWho');
  if (proofText && proofWho && !prefersReduced) {
    var quotes = [
      ['„Endlich eine Kanzlei, die uns erklärt, warum eine Zahl so ist, wie sie ist.“', 'M. Herrmann · Geschäftsführerin'],
      ['„Ruhig, verbindlich, termintreu. Genau das, was man sich von seiner Steuerberatung wünscht.“', 'T. Berger · Handwerksbetrieb'],
      ['„Die Steuererklärung war zum ersten Mal kein Rätsel mehr.“', 'S. Kienzle · Privatmandantin']
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % quotes.length;
      proofText.style.opacity = '0';
      proofText.style.transform = 'translateY(-6px)';
      proofWho.style.opacity = '0';
      setTimeout(function () {
        proofText.textContent = quotes[i][0];
        proofWho.textContent = quotes[i][1];
        proofText.style.transform = 'translateY(6px)';
        requestAnimationFrame(function () {
          proofText.style.opacity = '1';
          proofText.style.transform = 'none';
          proofWho.style.opacity = '1';
        });
      }, 420);
    }, 4500);
  }

  /* ---------- 5. Trust-Chips: Draw-Border (gestaffelt, once) ---------- */
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
