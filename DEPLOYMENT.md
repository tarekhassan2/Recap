# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages.

## Prerequisites

1. A GitHub repository named `Recap` (or update the base path in `vite.config.ts`)
2. GitHub Pages enabled in your repository settings

## Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys on every push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code:**
   - The workflow will automatically run on push to `main`
   - Check the "Actions" tab to see deployment status

3. **Your site will be available at:**
   - `https://[your-username].github.io/Recap/`

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build for GitHub Pages
yarn build:gh-pages

# The dist folder is ready to deploy
# You can use gh-pages package or manually push dist/ to gh-pages branch
```

## Updating Base Path

If your repository name is different from "Recap", update the base path in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/YourRepoName/' : '/',
```

## Important Notes

- The `.nojekyll` file prevents GitHub from processing the site with Jekyll
- All routes are configured to work with the base path
- Images and assets are automatically handled correctly
