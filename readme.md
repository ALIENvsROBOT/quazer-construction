# Quazer Construction Portfolio

Production React portfolio website for Quazer Construction, deployed to GitHub Pages at `https://quazerconstruction.com`.

## Stack

- React with Vite for optimized production builds.
- GitHub Actions CI/CD for lint, build, artifact upload and GitHub Pages deploy.
- Clean client-side routes with a GitHub Pages `404.html` fallback.
- SEO metadata, sitemap, robots file, canonical URLs, Open Graph tags and JSON-LD structured data.
- EmailJS contact form configured through Vite environment variables.
- Sharp asset pipeline for optimized portfolio image generation.

## Local Development

```bash
npm install
npm run dev
```

Create `.env` locally from `.env.example`:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after changing `.env`.

## Verification

```bash
npm run lint
npm run build
```

The build command runs the image asset generator, Vite production build and GitHub Pages SPA fallback creation.

## Deployment

Deployment is handled by `.github/workflows/deploy-pages.yml`.

On every push to `main`, GitHub Actions:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Runs `npm run lint`.
4. Runs `npm run build`.
5. Uploads `dist`.
6. Deploys to GitHub Pages.

GitHub Pages should be configured with:

```text
Source: GitHub Actions
Custom domain: quazerconstruction.com
Enforce HTTPS: enabled
```

The custom domain is preserved by `public/CNAME`.

## GitHub Actions Secrets

Add these repository secrets or variables in GitHub:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Path:

```text
Repository Settings -> Secrets and variables -> Actions
```

The workflow supports both repository secrets and repository variables with those names.

## SEO

The site includes:

- `public/sitemap.xml`
- `public/robots.txt`
- Route-specific titles and descriptions
- Canonical URLs for all primary routes
- Open Graph and Twitter metadata
- JSON-LD structured data for Quazer Construction as a `GeneralContractor`
- Crawlable internal links for header and footer navigation

After deployment, submit this sitemap in Google Search Console:

```text
https://quazerconstruction.com/sitemap.xml
```

## Adding Images

Preferred source folders live under `quazer_pics/`. The build script optimizes those files into `public/portfolio/`.

Generated public files are split by purpose:

```text
public/portfolio/render/      Generated Our Design images
public/portfolio/finished/    Generated Finished Project images
public/portfolio/carousel/    Generated homepage carousel images
public/portfolio/logo/        Generated logo asset
public/portfolio/2D plan/     Manual 2D plan images
public/portfolio/innovation/  Manual innovation images
```

Ready-to-use images can also be placed directly inside `public/portfolio/` folders. The build only replaces generated files named like `render-01.webp`, `finished-01.webp`, and `carousel-01.webp`; custom filenames are preserved.

The scanner accepts `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`, `.gif`, `.svg`, `.tif`, `.tiff`, `.bmp`, `.heic`, and `.heif`.
