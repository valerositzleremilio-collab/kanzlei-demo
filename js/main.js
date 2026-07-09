/* WALDNER & PART — Gerüst-JS (Aufgabe 1)
   Lenis + GSAP Grundsetup, Nav-Verhalten, Mobile-Overlay, Footer-Reveal.
   Alles reduced-motion-safe; ohne dieses Script bleibt die Seite über
   html.js-Gate voll bedienbar (siehe nav.css / footer.css). */

(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';
  var hasLenis = typeof window.Lenis !== 'undefined';

  if (hasGSAP && hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- Lenis + GSAP Ticker-Kopplung (Vault-Rezept) ---------- */
  if (hasLenis && hasGSAP && !prefersReduced) {
    var lenis = new Lenis({
      duration: 1.1,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true
    });
    lenis.on('scroll', hasScrollTrigger ? ScrollTrigger.update : function () {});
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- Nav: Shrink+Blur (N2) + Hide-on-down/Reveal-on-up (N3/NV2) ---------- */
  var header = document.getElementById('siteHeader');
  if (header) {
    var lastY = window.scrollY;
    var ticking = false;

    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);

      if (!document.body.classList.contains('nav-open')) {
        var delta = y - lastY;
        if (y < 80) {
          header.classList.remove('is-hidden');
        } else if (delta > 6) {
          header.classList.add('is-hidden');
        } else if (delta < -6) {
          header.classList.remove('is-hidden');
        }
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  /* ---------- Mobile Overlay-Menü ---------- */
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navOverlay');

  if (navToggle && navList) {
    var closeMenu = function (returnFocus) {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      if (returnFocus) navToggle.focus();
    };

    var openMenu = function () {
      navToggle.setAttribute('aria-expanded', 'true');
      navList.classList.add('is-open');
      document.body.classList.add('nav-open');
      var firstLink = navList.querySelector('a');
      if (firstLink) firstLink.focus();
    };

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu(false); else openMenu();
    });

    navList.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });
  }

  /* ---------- Footer: Spalten-Stagger-Reveal (F3), once ---------- */
  var footerCols = document.querySelectorAll('.site-footer__col');
  if (footerCols.length) {
    if (hasGSAP && hasScrollTrigger && !prefersReduced) {
      gsap.to(footerCols, {
        opacity: 1,
        y: 0,
        duration: .6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top 90%',
          once: true
        }
      });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: .2 });
      footerCols.forEach(function (col) { io.observe(col); });
    } else {
      footerCols.forEach(function (col) { col.classList.add('is-visible'); });
    }
  }

  /* ---------- Reveal-Stagger für Listen/Grids (sitewide: Home-Zitate, Unterseiten-Listen) ---------- */
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    var items = group.querySelectorAll('.reveal-item');
    if (!items.length) return;

    function reveal() {
      items.forEach(function (item, idx) {
        setTimeout(function () { item.classList.add('is-visible'); }, idx * 80);
      });
    }

    if (prefersReduced) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
    } else if (hasGSAP && hasScrollTrigger) {
      ScrollTrigger.create({ trigger: group, start: 'top 85%', once: true, onEnter: reveal });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { reveal(); io.unobserve(entry.target); }
        });
      }, { threshold: .2 });
      io.observe(group);
    } else {
      reveal();
    }
  });
})();
