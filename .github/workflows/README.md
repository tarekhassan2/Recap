# GitHub Actions Workflows

## deploy.yml

Automatically deploys the site to GitHub Pages when code is pushed to the `main` branch.

### How it works:

1. Builds the project with GitHub Pages base path (`/Recap/`)
2. Creates `.nojekyll` file to prevent Jekyll processing
3. Uploads the `dist` folder as a Pages artifact
4. Deploys to GitHub Pages

### Requirements:

- GitHub Pages must be enabled in repository settings
- Source must be set to "GitHub Actions" (not a branch)
