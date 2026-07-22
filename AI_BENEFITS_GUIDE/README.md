# AI Benefits Guide Dashboard

## Run the mockup

This folder is a static multi-page site. `index.html` is its landing page; add future pages as additional `.html` files in this folder and link to them with relative paths.

The browser sends benefit-guide questions to `/api/api-benefits-guide`. The serverless function in `api/api-benefits-guide.js` is the only code that calls Claude, so the API key never reaches the browser.

## Deploy

Deploy this folder as the project root. Add `ANTHROPIC_API_KEY` in the host's environment-variable settings for each environment you intend to use. For local Vercel development, copy `.env.example` to `.env.local` and add your key there; `.env.local` is ignored by Git.

Do not use a `NEXT_PUBLIC_` prefix for the API key.
