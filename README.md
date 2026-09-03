# Pingr AI Mintlify Documentation

Official documentation for Pingr AI powered by [Mintlify](https://mintlify.com).

## Getting Started Locally

### 1. Install Mintlify CLI (if not already installed)
```bash
npm install -g mintlify
```

### 2. Start the Local Docs Server
From the root directory or inside `mintlify/`:
```bash
# From mintlify/
npx mintlify dev --port 3333

# Or from frontend/
npm run docs:dev
```

The Mintlify documentation will be live at `http://localhost:3333`.

### 3. Integrated Next.js Access
Your main Next.js app (`http://localhost:3000`) automatically proxies:
- `http://localhost:3000/docs` &rarr; `http://localhost:3333`

## Deploying to Production

1. Push your changes to GitHub.
2. Link your repository in the [Mintlify Dashboard](https://dashboard.mintlify.com).
3. To host at `pingr.ai/docs`, enable the **Host at** subpath setting in Mintlify dashboard and set `MINTLIFY_URL=https://your-subdomain.mintlify.site/docs` in your production environment variables.
