// Google Analytics 4 (G-D70RXLYGEZ) — inclus par toutes les pages HTML.
(function () {
  var GA_ID = "G-D70RXLYGEZ";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);

  function pagePath() {
    return window.location.pathname || "/";
  }

  function isDoctolib(href) {
    return href.toLowerCase().indexOf("doctolib") !== -1;
  }

  function isCabinetPhone(href) {
    var value = href.replace(/\s+/g, "");
    if (value.toLowerCase().indexOf("tel:") !== 0) return false;
    var digits = value.replace(/\D/g, "");
    return digits === "33143962600" || digits === "0143962600";
  }

  document.addEventListener("click", function (event) {
    var node = event.target;
    var link = node && node.closest ? node.closest("a") : null;
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (!href) return;

    var params = { page_path: pagePath(), transport_type: "beacon" };
    if (isDoctolib(href)) {
      window.gtag("event", "rdv_doctolib_click", params);
    } else if (isCabinetPhone(href)) {
      window.gtag("event", "rdv_phone_click", params);
    }
  });
})();
