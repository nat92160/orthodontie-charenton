// Menu mobile, CTA flottant, carrousels
document.addEventListener('DOMContentLoaded', function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');

  function setMenuOpen(open) {
    if (!menu || !burger) return;
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      setMenuOpen(!menu.classList.contains('open'));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenuOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenuOpen(false);
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var DOCTOLIB = "https://www.doctolib.fr/centre-dentaire/charenton-le-pont/centre-d-orthodontie-gravelle";
  var fab = document.querySelector('.book-fab');
  if (!fab) {
    fab = document.createElement('a');
    fab.href = DOCTOLIB;
    fab.target = "_blank";
    fab.rel = "noopener";
    fab.className = "book-fab";
    fab.setAttribute("aria-label", "Prendre rendez-vous en ligne");
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>Prendre RDV</span>';
    document.body.appendChild(fab);
  }

  var hero = document.querySelector('.hero, .page-head');
  var inlineCtas = document.querySelectorAll('.cta, .contact-book, footer .btn-primary');

  function rectVisible(el, pad) {
    var r = el.getBoundingClientRect();
    return r.bottom > pad && r.top < (window.innerHeight - pad);
  }

  function updateFab() {
    if (!fab) return;
    var menuOpen = menu && menu.classList.contains('open');
    var pastIntro = true;
    if (hero) {
      pastIntro = hero.getBoundingClientRect().bottom < 72;
    } else {
      pastIntro = (window.scrollY || 0) > 280;
    }
    var inlineVisible = false;
    inlineCtas.forEach(function (el) {
      if (rectVisible(el, 48)) inlineVisible = true;
    });
    fab.classList.toggle('is-visible', pastIntro && !inlineVisible && !menuOpen);
  }

  updateFab();
  window.addEventListener('scroll', updateFab, { passive: true });
  window.addEventListener('resize', updateFab);

  var carousel = document.getElementById('cabinet-carousel');
  if (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.slide'));
    var dotsWrap = carousel.querySelector('.carousel-dots');
    var index = 0, timer = null;

    slides.forEach(function (_, idx) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Aller à la photo ' + (idx + 1));
      if (idx === 0) b.className = 'active';
      b.addEventListener('click', function () { goTo(idx); });
      dotsWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === index); });
    }
    function goTo(n) { index = (n + slides.length) % slides.length; render(); restart(); }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
    function start() {
      if (reduceMotion || slides.length < 2) return;
      timer = setInterval(next, 5000);
    }
    function stop() { clearInterval(timer); }
    function restart() { stop(); start(); }

    var nextBtn = carousel.querySelector('.carousel-btn.next');
    var prevBtn = carousel.querySelector('.carousel-btn.prev');
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    start();
  }

  document.querySelectorAll('.photo-slot').forEach(function (slot) {
    var slides = slot.querySelectorAll('.slide');
    if (slides.length < 2 || reduceMotion) return;
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 6000);
  });
});
