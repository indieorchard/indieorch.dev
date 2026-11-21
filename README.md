# indieorch.dev

Official website for **IndieOrch** — an independent software studio building thoughtful, privacy-first tools.

**Brand Tagline**: *Independent software. Privacy by design.*

---

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Domain**: `indieorch.dev`

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build static output
npm run build

# 4. Preview build locally
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment Settings

When connecting this GitHub repository (`indieorchard/indieorch.dev`) to Cloudflare Pages:

| Setting | Value |
| --- | --- |
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `20` or higher (Cloudflare environment variable: `NODE_VERSION=20`) |

### Custom Domain Setup:
1. In the Cloudflare Pages dashboard, go to **Custom domains**.
2. Add `indieorch.dev` (and `www.indieorch.dev`).
3. Cloudflare will automatically provision SSL certificates and DNS routing.
