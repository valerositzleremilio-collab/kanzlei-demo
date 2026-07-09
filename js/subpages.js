/* WALDNER & PART — Unterseiten-Interaktionen (Aufgabe 3)
   Kontaktformular-Submit-Zyklus. Reveal-Stagger für [data-reveal-group] ist
   sitewide in js/main.js (auch Home braucht das jetzt für die Zitate). */

(function () {
  /* ---------- Kontaktformular: Submit-Zyklus (BTN-123-Muster, reine Demo-Simulation) ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var submitBtn = form.querySelector('.submit-btn');

    function setFieldError(field, message) {
      var errorEl = field.querySelector('.field__error');
      field.classList.add('has-error');
      if (errorEl) errorEl.textContent = message;
      var input = field.querySelector('input, textarea');
      if (input) input.setAttribute('aria-invalid', 'true');
    }

    function clearFieldError(field) {
      field.classList.remove('has-error');
      var input = field.querySelector('input, textarea');
      if (input) input.removeAttribute('aria-invalid');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Demo-Simulation: kein echter Versand (siehe Datenschutzerklärung)

      var valid = true;
      form.querySelectorAll('.field').forEach(function (field) {
        var input = field.querySelector('input[required], textarea[required]');
        if (!input) return;
        clearFieldError(field);
        if (!input.value.trim()) {
          setFieldError(field, 'Bitte füllen Sie dieses Feld aus.');
          valid = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          setFieldError(field, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
          valid = false;
        }
      });

      if (!valid) {
        var firstError = form.querySelector('.field.has-error input, .field.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      if (!submitBtn || submitBtn.dataset.state === 'loading') return;

      submitBtn.dataset.state = 'loading';
      submitBtn.setAttribute('aria-busy', 'true');
      setTimeout(function () {
        submitBtn.dataset.state = 'success';
        submitBtn.removeAttribute('aria-busy');
        setTimeout(function () {
          submitBtn.dataset.state = 'idle';
          form.reset();
        }, 2200);
      }, 900);
    });
  }
})();
