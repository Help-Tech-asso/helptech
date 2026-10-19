(function () {
  var en = document.documentElement.lang === "en",
    s = en ? "-en" : "",
    p = location.pathname.split("/").pop() || "index.html";
  var T = en
    ? {
        n: [
          ["#services", "🛠️ What we do"],
          ["#how", "👣 How it works"],
          ["#domain", "🌐 Domain names"],
          ["#contact", "✉️ Contact"],
        ],
        l: "🇫🇷 Français",
        cgu: "Terms of use & legal notice",
        cgv: "Terms of service",
        t: "Non-profit association – Free help with digital technology",
      }
    : {
        n: [
          ["#services", "🛠️ Nos actions"],
          ["#how", "👣 Comment ça marche"],
          ["#domain", "🌐 Noms de domaine"],
          ["#contact", "✉️ Contact"],
        ],
        l: "🇬🇧 English",
        cgu: "CGU & mentions légales",
        cgv: "CGV",
        t: "Association à but non lucratif – Aide gratuite au numérique",
      };
  var other = en
    ? p.replace("-en.html", ".html")
    : p.replace(".html", "-en.html");
  document.body.insertAdjacentHTML(
    "afterbegin",
    '<header><div class="w"><a class="logo" href="index' +
      s +
      '.html">💻 Help <span>Tech</span></a><nav aria-label="Menu">' +
      T.n
        .map(function (x) {
          return '<a href="index' + s + ".html" + x[0] + '">' + x[1] + "</a>";
        })
        .join("") +
      '</nav><a class="lang" href="' +
      other +
      '" hreflang="' +
      (en ? "fr" : "en") +
      '" lang="' +
      (en ? "fr" : "en") +
      '">' +
      T.l +
      "</a></div></header>",
  );
  document.body.insertAdjacentHTML(
    "beforeend",
    '<footer><div class="w"><p><strong>Help Tech</strong> – ' +
      T.t +
      '</p><p>Association Help Tech </p><p><a target="_blank" rel="noopener noreferrer" href="cgu' +
      s +
      '.html">' +
      T.cgu +
      '</a><a target="_blank" rel="noopener noreferrer" href="cgv' +
      s +
      '.html">' +
      T.cgv +
      "</a></p><p>© 2026 Help Tech</p></div></footer>",
  );
  var h = document.querySelector("header");
  h.style.transition = "transform .3s";
  var lastScrollY = window.scrollY;
  window.addEventListener("scroll", function () {
    var currentScrollY = window.scrollY;
    h.style.transform =
      currentScrollY <= 50 || currentScrollY < lastScrollY
        ? "none"
        : "translateY(-100%)";
    lastScrollY = currentScrollY;
  });
})();
