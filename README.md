# Radhe Laser Studio — Frontend (Cloudflare Pages) 🌐

Modern, high-conversion static website for **Radhe Laser Studio** built with React 18, Vite 6, and Tailwind CSS v3. Optimized for Cloudflare Pages Free Tier.

---

## 🚀 Features

- **Blazing Fast**: Compiled bundle under 800 KB total.
- **SPA Routing Fallback**: Pre-configured `public/_redirects` (`/* /index.html 200`) ensuring page refreshes on `/services`, `/portfolio`, `/quote`, `/about`, `/contact`, and `/admin` never return 404 errors.
- **Edge Caching**: Pre-configured `public/_headers` applying immutable caching for assets and security headers.
- **Conversion Driven**: Lead generation via WhatsApp direct integration (`7984190368`) and instant quote request form.

---

## ☁️ Cloudflare Pages Deployment Setup

To deploy this repository on Cloudflare Pages for automatic free continuous deployments:

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)**.
2. In the left sidebar, click **Workers & Pages**.
3. Click **Create Application** → Select the **Pages** tab.
4. Click **Connect to Git** and select this repository (`radhe-laser-studio-client`).
5. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty if this repository is the root)
6. Click **Save and Deploy**.
7. Cloudflare will build the site and provide your free subdomain:  
   `https://radhe-laser-studio.pages.dev`

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Build production bundle
npm run build
```
