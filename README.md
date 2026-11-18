# mahmoodsultan.com

Personal portfolio of Mahmood Sultan, a third-year Technology, Coding & Society + CCIT student at the University of Toronto Mississauga. It has an about/experience section, selected work, and a case study on the UTM Makerspace research project.

Live at [www.mahmoodsultan.com](https://www.mahmoodsultan.com).

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS and a few shadcn/ui primitives
- React Router for client-side routes
- Framer Motion for small entrance animations
- Deployed on Vercel from `main`; `vercel.json` sends every route to `index.html` so deep links work on refresh

## Run locally

Requires Node 18+.

```sh
git clone https://github.com/5781mahmood/portfolio-v2.git
cd portfolio-v2
npm install
cp .env.example .env   # optional; no page currently reads these values
npm run dev            # http://localhost:8080
```

Other scripts:

```sh
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run lint
npm test
```

## Structure

- `src/pages/` — home page, the Makerspace case study, blog guides, 404
- `src/components/` — home page sections (hero, work, about, contact, footer)
- `public/` — favicon, Open Graph image, `robots.txt`, `sitemap.xml`, `llms.txt`

## Open Graph image

`public/og-image.png` (1200×630) is rendered from `scripts/og-image.html`:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=5000 \
  --window-size=1200,630 --screenshot="$PWD/public/og-image.png" \
  "file://$PWD/scripts/og-image.html"
```
