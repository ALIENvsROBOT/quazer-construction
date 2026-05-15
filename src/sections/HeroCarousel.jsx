import { ArrowRight } from 'lucide-react';
import { carouselImages, heroLines, renderImages } from '../data/site';
import { navigateTo } from '../utils/navigation';

export function HeroCarousel({ setPage }) {
  return (
    <section className="hero" aria-label="Project render carousel">
      <div className="carousel-track">
        {carouselSlides.map((slide, index) => (
          <figure className="hero-slide" key={slide.src} style={{ '--slide': index }}>
            <img src={slide.src} alt={`${slide.project} ${slide.type}`} loading={index === 0 ? 'eager' : 'lazy'} />
          </figure>
        ))}
      </div>
      <div className="hero-content">
        <h1>{carouselSlides[0]?.line ?? heroLines[0]}</h1>
        <p>Quazer Construction delivers high-quality villas, apartments and commercial spaces with disciplined planning and site execution.</p>
        <button type="button" onClick={() => navigateTo('contact', setPage)}>
          Start a Project <ArrowRight size={18} />
        </button>
      </div>
      <div className="hero-progress" aria-hidden="true" />
    </section>
  );
}

function buildSlides(images) {
  return images.map((image, index) => ({
      ...image,
      line: heroLines[index % heroLines.length],
    }));
}

function selectRandomRenders() {
  const sourceImages = carouselImages.length ? carouselImages : renderImages;
  const weights = new Uint32Array(sourceImages.length);
  globalThis.crypto?.getRandomValues(weights);
  return sourceImages
    .map((image, index) => ({ image, weight: weights[index] }))
    .sort((a, b) => a.weight - b.weight)
    .slice(0, 6)
    .map((item) => item.image);
}

const carouselSlides = buildSlides(selectRandomRenders());
