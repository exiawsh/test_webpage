/* =========================================================
   PolyU VCLab — main.js
   Requires pubs.js (window.PUBLICATIONS, window.TEAM).
   ========================================================= */

/* ---------- Render Publications ---------- */
const pubList = document.getElementById("pub-list");

function renderPubs(filter = "all") {
  pubList.innerHTML = "";
  const items = filter === "all"
    ? window.PUBLICATIONS
    : window.PUBLICATIONS.filter(p => p.category === filter);

  items.forEach(p => {
    const goldVenues = ["Preprint", "IJCV"];
    const venueCls = goldVenues.includes(p.venue) ? "pub-venue pub-venue--gold" : "pub-venue";
    const links = [];
    if (p.tag)   links.push(`<span class="pub-chip pub-chip--highlight">★ ${p.tag}</span>`);
    if (p.paper) links.push(`<a class="pub-chip" href="${p.paper}" target="_blank" rel="noopener">Paper</a>`);
    if (p.code)  links.push(`<a class="pub-chip" href="${p.code}"  target="_blank" rel="noopener">Code</a>`);

    const el = document.createElement("div");
    el.className = "pub-item";
    el.setAttribute("data-reveal", "");
    el.innerHTML = `
      <div class="${venueCls}">${p.venue}<small>${p.year}</small></div>
      <div>
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${p.authors}</div>
        ${p.tagline ? `<div class="pub-tagline">${p.tagline}</div>` : ""}
        <div class="pub-links">${links.join("")}</div>
      </div>`;
    pubList.appendChild(el);
  });
  runReveal();
}
renderPubs();

/* ---------- Tabs ---------- */
document.getElementById("pub-tabs").addEventListener("click", e => {
  if (!e.target.classList.contains("pub-tab")) return;
  document.querySelectorAll(".pub-tab").forEach(t => t.classList.remove("active"));
  e.target.classList.add("active");
  renderPubs(e.target.dataset.filter);
});

/* ---------- Render Team ---------- */
const sg = document.getElementById("students-grid");
window.TEAM.forEach(m => {
  const el = document.createElement("div");
  el.className = "team-card";
  el.setAttribute("data-reveal", "");
  el.innerHTML = `
    <div class="team-avatar">${m.initials}</div>
    <div class="team-name">${m.name}</div>
    <div class="team-role">${m.role}</div>`;
  sg.appendChild(el);
});

/* ---------- Scroll reveal ---------- */
function runReveal() {
  const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}
runReveal();

/* ---------- Scroll spy ---------- */
const navLinks = document.querySelectorAll(".sidebar__nav a");
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

function onScroll() {
  const y = window.scrollY + 120;
  let activeIdx = 0;
  sections.forEach((sec, i) => { if (sec.offsetTop <= y) activeIdx = i; });
  navLinks.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
}
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Close mobile menu on nav click ---------- */
navLinks.forEach(l => l.addEventListener("click", () => document.querySelector(".sidebar").classList.remove("is-open")));

/* ---------- Hero spotlight rotator ---------- */
(function initHeroRotator() {
  const root = document.getElementById("hl-rotator");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll(".hl__slide"));
  const dots   = Array.from(root.querySelectorAll(".hl__dots button"));
  if (slides.length < 2) return;

  let idx = 0;
  let timer = null;
  const INTERVAL = 4200;

  const show = (next) => {
    slides[idx].classList.remove("is-active");
    dots[idx]?.classList.remove("is-active");
    idx = (next + slides.length) % slides.length;
    slides[idx].classList.add("is-active");
    dots[idx]?.classList.add("is-active");
  };

  const start = () => { stop(); timer = setInterval(() => show(idx + 1), INTERVAL); };
  const stop  = () => { if (timer) { clearInterval(timer); timer = null; } };

  dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);

  // Pause when tab hidden to save battery
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop(); else start();
  });

  start();
})();
