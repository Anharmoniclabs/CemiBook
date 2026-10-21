(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var root = document.documentElement;
  var progress = document.querySelector(".scroll-progress");
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pending = false;
  function updateScroll() {
    var top = Math.max(0, window.scrollY || window.pageYOffset || 0);
    var total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = (100 * Math.min(1, top / total)).toFixed(2) + "%";
    if (!reducedMotion) {
      // Small, clamped motion only: background and book layers move at different speeds.
      root.style.setProperty("--scroll", Math.min(1.6, top / Math.max(1, window.innerHeight)).toFixed(3));
    }
    pending = false;
  }
  function onScroll() {
    if (!pending) {
      pending = true;
      window.requestAnimationFrame(updateScroll);
    }
  }
  updateScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  var entries = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    entries.forEach(function (el) { el.classList.add("visible"); });
  } else {
    var observer = new IntersectionObserver(function (items) {
      items.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });
    entries.forEach(function (el) { observer.observe(el); });
  }
}());
