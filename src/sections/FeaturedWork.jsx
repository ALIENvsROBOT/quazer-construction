import { ArrowRight } from 'lucide-react';
import { finishedImages, renderImages } from '../data/site';
import { SectionIntro } from '../components/SectionIntro';
import { navigateTo } from '../utils/navigation';

export function FeaturedWork({ setPage }) {
  const images = [...renderImages.slice(1, 4), ...finishedImages.slice(0, 3)];

  return (
    <section className="section">
      <SectionIntro eyebrow="Selected work" title="Renders and finished spaces with a consistent premium standard">
        Explore design concepts and completed projects that show our attention to proportion, material presence and build quality.
      </SectionIntro>
      <div className="work-strip">
        {images.map((image, index) => (
          <article className="image-card" key={image.src} data-reveal style={{ '--delay': `${index * 45}ms` }}>
            <img src={image.src} alt={`${image.project} ${image.type}`} loading="lazy" />
          </article>
        ))}
      </div>
      <div className="center-action">
        <button type="button" onClick={() => navigateTo('design', setPage)}>
          View Our Work <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
