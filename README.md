# MarifahOps Website

Professional consulting website for MarifahOps Consulting. Built with Next.js and optimized for static export to AWS S3 + CloudFront.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Rendering**: Static Site Generation (SSG) only
- **Styling**: Tailwind CSS
- **Content**: Markdown for case studies
- **Export**: Static export compatible with S3 hosting

## Project Structure

```
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── content/             # Markdown content
│   └── case-studies/    # Case study markdown files
├── lib/                 # Utility functions
│   └── case-studies.ts  # Case study parsing logic
├── pages/               # Next.js pages
│   ├── index.tsx        # Home page
│   ├── services.tsx
│   ├── approach.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── case-studies/    # Case studies pages
├── styles/              # Global styles
│   └── globals.css
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Build the static site:
```bash
npm run build
```

2. The static files will be in the `out/` directory, ready for deployment to S3.

## Adding Case Studies

Case studies are written in Markdown and stored in `content/case-studies/`. Each file should:

1. Have a `.md` extension
2. Include frontmatter with:
   - `title`: Case study title
   - `description`: Brief description (used in meta tags and listings)
   - `date`: Publication date (YYYY-MM-DD format)

Example:

```markdown
---
title: AWS Migration for FinTech Startup
description: Migrated infrastructure to AWS, reducing costs by 40%.
date: 2024-01-15
---

## Challenge
...
```

The slug for the case study URL is derived from the filename (e.g., `aws-migration.md` → `/case-studies/aws-migration/`).

## Deployment

This site is configured for static export and can be deployed to:

- **AWS S3 + CloudFront**: Upload the `out/` directory to an S3 bucket configured for static website hosting, then set up CloudFront distribution.
- **Any static hosting**: The `out/` directory contains all static files needed.

### Important Notes

- This project uses **static export only** (`output: 'export'` in `next.config.js`)
- No server-side features (API routes, middleware, etc.) are used
- All data fetching happens at build time
- Images are unoptimized (required for static export)

## Development Guidelines

- Keep code simple and readable
- All pages must be statically generated
- Case studies are parsed at build time
- Use TypeScript for type safety
- Follow the existing component structure

## License

Private - MarifahOps Consulting
