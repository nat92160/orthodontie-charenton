/* Bandeau cookies (CNIL) — choix stocké localement, sans cookie tiers. */
(function () {
  var KEY = "oc-consent-v1";
  var state = { analytics: null, maps: null };

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (!data || data.v !== 1) return;
      if (data.analytics === true || data.analytics === false) state.analytics = data.analytics;
      if (data.maps === true || data.maps === false) state.maps = data.maps;
    } catch (e) {}
  }

  function publish() {
    window.OCConsent.analytics = state.analytics === true;
    window.OCConsent.maps = state.maps === true;
    document.dispatchEvent(new CustomEvent("oc-consent"));
  }

  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        analytics: state.analytics,
        maps: state.maps,
        v: 1
      }));
    } catch (e) {}
    publish();
    applyMaps();
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = state.analytics !== null && state.maps !== null;
  }

  read();
  window.OCConsent = {
    analytics: state.analytics === true,
    maps: state.maps === true,
    open: function () {}
  };

  function syncChecks() {
    var a = document.getElementById("cookie-analytics");
    var m = document.getElementById("cookie-maps");
    if (a) a.checked = state.analytics === true;
    if (m) m.checked = state.maps === true;
  }

  function openBanner() {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    banner.hidden = false;
    var panel = banner.querySelector(".cookie-panel");
    if (panel) panel.hidden = false;
    syncChecks();
    var reject = banner.querySelector("[data-cookie='reject']");
    if (reject) reject.focus();
  }

  function bannerHtml() {
    return (
      '<div class="cookie-inner">' +
        '<p id="cookie-title" class="cookie-title">Cookies</p>' +
        '<p id="cookie-desc">Nous utilisons, seulement si vous l\'acceptez, Google Analytics pour mesurer la fréquentation du site et Google Maps pour afficher le plan. Aucun de ces services n\'est chargé avant votre choix. <a href="/mentions-legales.html#cookies">Politique de confidentialité</a></p>' +
        '<div class="cookie-actions">' +
          '<button type="button" class="cookie-btn" data-cookie="accept">Accepter</button>' +
          '<button type="button" class="cookie-btn" data-cookie="reject">Refuser</button>' +
          '<button type="button" class="cookie-btn" data-cookie="customize">Personnaliser</button>' +
        '</div>' +
        '<div class="cookie-panel" hidden>' +
          '<label class="cookie-choice"><input type="checkbox" id="cookie-analytics"> Mesure d\'audience (Google Analytics)</label>' +
          '<label class="cookie-choice"><input type="checkbox" id="cookie-maps"> Carte Google Maps</label>' +
          '<div class="cookie-actions">' +
            '<button type="button" class="cookie-btn" data-cookie="save">Enregistrer</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function ensureBanner() {
    if (document.getElementById("cookie-banner")) return;
    var el = document.createElement("div");
    el.id = "cookie-banner";
    el.className = "cookie-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "cookie-title");
    el.setAttribute("aria-describedby", "cookie-desc");
    el.hidden = state.analytics !== null && state.maps !== null;
    el.innerHTML = bannerHtml();
    document.body.appendChild(el);
    el.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-cookie]");
      if (!btn) return;
      var action = btn.getAttribute("data-cookie");
      if (action === "accept") {
        state.analytics = true;
        state.maps = true;
        persist();
      } else if (action === "reject") {
        state.analytics = false;
        state.maps = false;
        persist();
      } else if (action === "customize") {
        var panel = el.querySelector(".cookie-panel");
        if (panel) panel.hidden = false;
        syncChecks();
      } else if (action === "save") {
        var a = document.getElementById("cookie-analytics");
        var m = document.getElementById("cookie-maps");
        state.analytics = !!(a && a.checked);
        state.maps = !!(m && m.checked);
        persist();
      }
    });
  }

  function loadMap(box) {
    if (!box || box.querySelector("iframe") || box.dataset.loaded === "1") return;
    var src = box.getAttribute("data-map-embed");
    if (!src) return;
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "Localisation du Centre d'Orthodontie Gravelle";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.setAttribute("width", "600");
    iframe.setAttribute("height", "380");
    box.dataset.loaded = "1";
    box.classList.add("is-loaded");
    box.textContent = "";
    box.appendChild(iframe);
  }

  function applyMaps() {
    if (state.maps !== true) return;
    document.querySelectorAll("[data-map-embed]").forEach(loadMap);
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-cookie-settings]")) {
      event.preventDefault();
      openBanner();
      return;
    }
    var loadBtn = event.target.closest("[data-map-load]");
    if (!loadBtn) return;
    event.preventDefault();
    state.maps = true;
    persist();
  });

  window.OCConsent.open = openBanner;

  function init() {
    ensureBanner();
    applyMaps();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
