# Noon Work Recap

A reference application showcasing all my work and achievements at Noon company.

## Features

- **Homepage**: Displays all years starting from 2025
- **Year Pages**: Click on any year to view detailed work and achievements for that year
- **Static Data**: All data is stored in `src/data/years.ts` - no backend required

## Tech Stack

- **React 19** - UI library
- **TanStack Router** - File-based routing
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Development

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## Project Structure

```
src/
  ├── routes/          # TanStack Router file-based routes
  │   ├── __root.tsx   # Root layout
  │   ├── index.tsx    # Homepage
  │   └── year.$year.tsx  # Year detail page
  ├── data/
  │   └── years.ts     # Static data for years and achievements
  ├── main.tsx         # App entry point
  └── index.css        # Global styles
```

## Adding New Work

To add new achievements or work, edit `src/data/years.ts`:

```typescript
export const years: Record<number, YearData> = {
  2025: {
    description: 'Your year description',
    achievements: [
      {
        title: 'Achievement Title',
        description: 'Detailed description',
        technologies: ['React', 'TypeScript'],
      },
    ],
  },
}
```

## Deployment

This project is configured for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. Push to `main` branch - deployment happens automatically
3. Your site will be available at `https://[your-username].github.io/Recap/`

## License

MIT
