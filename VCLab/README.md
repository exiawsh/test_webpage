# PolyU VCLab — Visual Computing Lab Website

Official GitHub Pages website for the **Visual Computing Lab (VCLab)** at
The Hong Kong Polytechnic University, directed by **Chair Professor Lei Zhang**.

> *"Y learning and beyond — for future visual enhancement and understanding."*

Live site (once deployed): `https://<your-org>.github.io/vclab/`

---

## Structure

```
VCLab/
├── index.html                 # Main landing page
├── collections/               # Six research-direction pages
│   ├── restoration.html
│   ├── multimodal.html
│   ├── synthesis.html
│   ├── 3d.html
│   ├── architecture.html
│   └── benchmarks.html
├── assets/
│   ├── css/
│   │   ├── style.css          # global layout & theme
│   │   └── collection.css     # collection-page styles
│   ├── js/
│   │   ├── pubs.js            # shared data (publications, team, collections)
│   │   ├── main.js            # homepage logic
│   │   └── collection.js      # collection-page logic
│   ├── icons/                 # SVG icons + logo + favicon
│   └── images/                # (place team photos etc. here)
└── README.md
```

## Design

- **Brand color**: PolyU brick red `#8F1329`, with gold `#D4A24C` accents.
- **Typography**: *Playfair Display* (serif headings) + *Inter* (sans body).
- **Layout**: fixed left sidebar navigation + scrollable main content,
  inspired by Tsinghua MARS Lab's site.
- **Six research collections**, each with a custom SVG icon.

## Update the content

All dynamic content lives in `assets/js/pubs.js`:

- `window.PUBLICATIONS` — publication list (assign each a `category` that
  matches a collection key).
- `window.TEAM` — team roster.
- `window.COLLECTIONS` — per-collection lead text, tags and topic cards.

To add a new paper, append an object like:

```js
{ venue:"CVPR", year:"2026", tag:"Oral",
  title:"...", authors:"...", tagline:"...",
  category:"restoration",
  paper:"https://arxiv.org/abs/...",
  code:"https://github.com/..." }
```

## Local preview

No build step required — it's a static site.

```bash
# from the VCLab folder
python -m http.server 8080
# then open http://localhost:8080
```

## Deploying to GitHub Pages

1. Create a new repo (e.g. `vclab`) under your GitHub organization.
2. Push the content of this folder to the `main` branch.
3. Settings → Pages → **Source: Deploy from a branch** → `main` / root.
4. Visit `https://<org>.github.io/vclab/`.

## Credits

- Site design & implementation: VCLab (2026).
- Inspired by the layout of [Tsinghua MARS Lab](https://group.iiis.tsinghua.edu.cn/~marslab/).
- Brand palette follows [PolyU brand guidelines](https://www.polyu.edu.hk/cpa/brand-assets/).
