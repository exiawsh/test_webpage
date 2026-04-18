/* =========================================================
   PolyU VCLab — collection.js
   Requires pubs.js. Reads data-collection from <body>.
   ========================================================= */

(function() {
  const key = document.body.dataset.collection;
  const info = window.COLLECTIONS[key];
  if (!info) return;

  // fill in header
  document.getElementById("col-num").textContent = info.num;
  document.getElementById("col-title").textContent = info.title;
  document.getElementById("col-lead").textContent = info.lead;
  document.title = `${info.title} · PolyU VCLab`;

  // tags
  const tagsEl = document.getElementById("col-tags");
  info.tags.forEach(t => {
    const s = document.createElement("span"); s.className = "chip"; s.textContent = t; tagsEl.appendChild(s);
  });

  // topics
  const topicsEl = document.getElementById("topics");
  info.topics.forEach(t => {
    const d = document.createElement("div"); d.className = "topic";
    d.innerHTML = `<div class="topic__title">${t.title}</div><div class="topic__desc">${t.desc}</div>`;
    topicsEl.appendChild(d);
  });

  // publications
  const pubList = document.getElementById("pub-list");
  const items = window.PUBLICATIONS.filter(p => p.category === key);
  if (!items.length) {
    pubList.innerHTML = `<p style="color:var(--muted); padding:1rem 0;">Publications for this collection are coming soon — stay tuned!</p>`;
  } else {
    items.forEach(p => {
      const goldVenues = ["Preprint","IJCV"];
      const vc = goldVenues.includes(p.venue) ? "pub-venue pub-venue--gold" : "pub-venue";
      const links = [];
      if (p.tag)   links.push(`<span class="pub-chip pub-chip--highlight">★ ${p.tag}</span>`);
      if (p.paper) links.push(`<a class="pub-chip" href="${p.paper}" target="_blank" rel="noopener">Paper</a>`);
      if (p.code)  links.push(`<a class="pub-chip" href="${p.code}"  target="_blank" rel="noopener">Code</a>`);
      const el = document.createElement("div"); el.className = "pub-item"; el.setAttribute("data-reveal","");
      el.innerHTML = `
        <div class="${vc}">${p.venue}<small>${p.year}</small></div>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${p.authors}</div>
          ${p.tagline ? `<div class="pub-tagline">${p.tagline}</div>` : ""}
          <div class="pub-links">${links.join("")}</div>
        </div>`;
      pubList.appendChild(el);
    });
  }

  // reveal
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));

  // active sidebar link
  document.querySelectorAll(".sidebar__nav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "../index.html#research");
  });

  // mobile menu close
  document.querySelectorAll(".sidebar__nav a").forEach(l => l.addEventListener("click", () => document.querySelector(".sidebar").classList.remove("is-open")));
})();
