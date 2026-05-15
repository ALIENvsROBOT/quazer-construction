import { finishedImages, renderImages } from '../data/site';
import { ImageGallery } from '../components/ImageGallery';
import { PageHero } from '../components/PageHero';

export function WorkPage({ type }) {
  const isDesign = type === 'design';
  const images = isDesign ? renderImages : finishedImages;

  return (
    <main className="page">
      <PageHero
        eyebrow={isDesign ? 'Our Design' : 'Finished Project'}
        title={isDesign ? 'Premium renders shaped for confident project decisions.' : 'Completed spaces with dependable construction quality.'}
        body={isDesign ? 'Design renders help clients see proportions, material direction and spatial intent before execution begins.' : 'Finished project photography highlights the build quality, detail control and practical delivery standards behind our work.'}
      />
      <ImageGallery images={images} />
    </main>
  );
}
