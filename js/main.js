// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // Année dynamique dans le pied de page
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Bouton "Prendre RDV" flottant, présent sur toutes les pages
  var DOCTOLIB = "https://www.doctolib.fr/centre-dentaire/charenton-le-pont/centre-d-orthodontie-gravelle";
  if (!document.querySelector('.book-fab')) {
    var fab = document.createElement('a');
    fab.href = DOCTOLIB;
    fab.target = "_blank";
    fab.rel = "noopener";
    fab.className = "book-fab";
    fab.setAttribute("aria-label", "Prendre rendez-vous en ligne");
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>Prendre RDV</span>';
    document.body.appendChild(fab);
  }

  // Message de confirmation du formulaire (démo côté client)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
      }
    });
  }
});
