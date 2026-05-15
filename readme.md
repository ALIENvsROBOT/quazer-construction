# Quazer Construction Portfolio

Premium React portfolio website for Quazer Construction, built for local preview now and GitHub Pages deployment later.

## Stack

- React with Vite for fast development and optimized production builds.
- CSS-driven animations using transforms, opacity and IntersectionObserver for low runtime cost.
- Sharp asset pipeline that converts source JPG project images into optimized WebP files.
- Hash-based page routing so GitHub Pages and future custom domains can serve the app without server rewrite rules.

## Project Structure

```text
src/
  components/     Shared UI such as header, footer, logo, page hero and gallery.
  data/           Site content, phone number, navigation and image lists.
  hooks/          Lightweight animation/reveal behavior.
  pages/          Home, About, Team, Work and Contact page composition.
  sections/       Reusable homepage sections such as carousel, process and featured work.
  utils/          Navigation helpers for GitHub Pages-safe hash routing.
scripts/
  prepare-assets.mjs   Converts quazer_pics images to public/portfolio WebP assets.
```

## Adding Images

Preferred source folders live under `quazer_pics/`. The build script optimizes those files into `public/portfolio/`.

Generated public files are split by purpose:

```text
public/portfolio/render/      Generated Our Design images
public/portfolio/finished/    Generated Finished Project images
public/portfolio/carousel/    Generated homepage carousel images
public/portfolio/logo/        Generated logo asset
```

You can also drag ready-to-use images directly into these folders. The build only replaces generated files named like `render-01.webp`, `finished-01.webp`, and `carousel-01.webp`; your custom filenames are preserved and included.

For drag-and-drop images that should stay clearly separate from generated files, use `public/direct/`:

```text
public/direct/render/      Extra images for Our Design
public/direct/finished/    Extra images for Finished Project
public/direct/carousel/    Extra images for the homepage carousel
```

The scanner accepts common image extensions such as `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`, `.gif`, `.svg`, `.tif`, `.tiff`, `.bmp`, `.heic`, and `.heif`. For widest browser support, prefer `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`, `.gif`, or `.svg` in `public/direct/`.

Files are sorted by filename, so names like `01-living-room.webp`, `02-bedroom.webp`, and `03-elevation.webp` keep a predictable order.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

The build command runs `prepare:assets` first, so the latest images from `quazer_pics/` are optimized before production output is generated.

## Deployment Notes

The Vite `base` is set to `./` and the app uses hash routing. This works on GitHub Pages project URLs and also remains compatible when the site is later pointed to a custom domain.
