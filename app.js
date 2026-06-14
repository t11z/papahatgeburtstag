/* =========================================================
   Papas Geburtstagsseite – Interaktion
   ========================================================= */
(function () {
  "use strict";

  var intro   = document.getElementById("intro");
  var page    = document.getElementById("page");
  var audio   = document.getElementById("bg-audio");
  var audioBtn = document.getElementById("audio-toggle");

  /* ---------- Galerie aufbauen ---------- */
  var grid = document.getElementById("gallery-grid");
  var available = []; // nur vorhandene Fotos (für Lightbox-Navigation)

  (window.PHOTOS || []).forEach(function (p) {
    var card = document.createElement("figure");
    card.className = "photo" + (p.available ? " photo--avail" : " photo--soon");

    var frame = document.createElement("div");
    frame.className = "photo__frame";

    if (p.available) {
      var img = document.createElement("img");
      img.className = "photo__img";
      img.loading = "lazy";
      img.src = "assets/img/" + p.file;
      img.alt = p.caption;
      frame.appendChild(img);

      var index = available.length;
      available.push(p);
      frame.addEventListener("click", function () { openLightbox(index); });
    } else {
      var ph = document.createElement("div");
      ph.className = "photo__placeholder";
      ph.innerHTML = '<span class="cam">📷</span><small>Foto folgt</small>';
      frame.appendChild(ph);
    }

    var cap = document.createElement("figcaption");
    cap.className = "photo__cap";
    cap.textContent = p.caption;

    card.appendChild(frame);
    card.appendChild(cap);
    grid.appendChild(card);
  });

  /* ---------- Unterschriften aufbauen ---------- */
  var signsGrid = document.getElementById("signs-grid");
  (window.SIGNATURES || []).forEach(function (s) {
    var wrap = document.createElement("div");
    wrap.className = "sign";

    var mark = document.createElement("div");
    mark.className = "sign__mark";
    if (s.available) {
      var im = document.createElement("img");
      im.src = "assets/img/signatures/" + s.file;
      im.alt = "Unterschrift von " + s.name;
      mark.appendChild(im);
    } else {
      var ph = document.createElement("span");
      ph.className = "sign__placeholder";
      ph.textContent = s.name; // dezenter Platzhalter im Schreibschrift-Stil
      mark.appendChild(ph);
    }

    var name = document.createElement("span");
    name.className = "sign__name";
    name.textContent = s.name;

    wrap.appendChild(mark);
    wrap.appendChild(name);
    signsGrid.appendChild(wrap);
  });

  /* ---------- Intro: Tippen startet Musik + Seite ---------- */
  var started = false;
  function start() {
    if (started) return;
    started = true;

    audio.volume = 0.0;
    var playP = audio.play();
    if (playP && playP.then) {
      playP.then(fadeIn).catch(function () {
        // Autoplay verweigert -> Button zeigt "stumm", Nutzer kann antippen
        setMuted(true);
      });
    } else {
      fadeIn();
    }

    intro.classList.add("is-hidden");
    page.classList.add("is-visible");
    page.setAttribute("aria-hidden", "false");
    audioBtn.hidden = false;
    setTimeout(function () { intro.style.display = "none"; }, 950);
  }

  function fadeIn() {
    setMuted(false);
    var target = 0.45, step = 0.03;
    var iv = setInterval(function () {
      audio.volume = Math.min(target, audio.volume + step);
      if (audio.volume >= target) clearInterval(iv);
    }, 90);
  }

  intro.addEventListener("click", start);
  intro.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); }
  });

  /* ---------- Musik an/aus ---------- */
  function setMuted(muted) {
    if (muted) {
      audio.pause();
      audioBtn.classList.add("is-muted");
    } else {
      audio.play().catch(function () {});
      audioBtn.classList.remove("is-muted");
    }
  }
  audioBtn.addEventListener("click", function () {
    setMuted(!audio.paused ? true : false);
  });

  /* ---------- Lightbox ---------- */
  var lb     = document.getElementById("lightbox");
  var lbImg  = document.getElementById("lightbox-img");
  var lbCap  = document.getElementById("lightbox-cap");
  var lbClose = lb.querySelector(".lightbox__close");
  var lbPrev = lb.querySelector(".lightbox__nav--prev");
  var lbNext = lb.querySelector(".lightbox__nav--next");
  var current = 0;

  function showAt(i) {
    var n = available.length;
    current = (i + n) % n;
    var p = available[current];
    lbImg.src = "assets/img/" + p.file;
    lbImg.alt = p.caption;
    lbCap.textContent = p.caption;
  }
  function openLightbox(i) {
    showAt(i);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", function () { showAt(current - 1); });
  lbNext.addEventListener("click", function () { showAt(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showAt(current - 1);
    else if (e.key === "ArrowRight") showAt(current + 1);
  });

  /* Wischen (Swipe) in der Großansicht */
  var tx = 0, ty = 0;
  lb.addEventListener("touchstart", function (e) {
    tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY;
  }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - tx;
    var dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      showAt(current + (dx < 0 ? 1 : -1));
    } else if (dy > 80 && Math.abs(dy) > Math.abs(dx)) {
      closeLightbox(); // nach unten wischen schließt
    }
  }, { passive: true });
})();
