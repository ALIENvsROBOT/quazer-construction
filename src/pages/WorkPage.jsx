import { finishedImages, innovationImages, planImages, renderImages } from '../data/site';
import { ImageGallery } from '../components/ImageGallery';
import { PageHero } from '../components/PageHero';

const innovationSections = [
  {
    key: 'Monolithic',
    eyebrow: 'Monolithic Construction',
    title: 'Integrated structural strength with faster execution.',
    body: [
      'At Quazer Construction, we adopt modern monolithic construction techniques to deliver stronger, faster, and more durable residential structures.',
      'Monolithic construction is a method where major structural components such as walls, slabs, beams, and columns are cast together as a single integrated unit using advanced formwork systems. This creates a seamless and highly stable structure with improved load distribution and long-term structural performance.',
    ],
  },
  {
    key: 'Efficiency',
    eyebrow: 'Efficiency',
    title: 'Quality-led resource control without unnecessary excess.',
    body: [
      'At Quazer Construction, efficiency means using the right materials with the right engineering approach, emphasizing quality, precision, and durability over excess consumption.',
      'We focus on intelligent resource management by prioritizing premium-quality materials, precise execution, and efficient construction practices rather than unnecessary material usage. Our approach ensures structural strength, durability, cost efficiency, and long-term performance in every project.',
    ],
  },
];

export function WorkPage({ type }) {
  const isDesign = type === 'design';
  const isPlan = type === 'plan';
  const isInnovation = type === 'innovation';
  const images = isDesign ? renderImages : isPlan ? planImages : isInnovation ? innovationImages : finishedImages;

  return (
    <main className="page">
      <PageHero
        eyebrow={isDesign ? 'Our Design' : isPlan ? '2D Plan' : isInnovation ? 'Innovation' : 'Finished Project'}
        title={isDesign ? 'Premium renders shaped for confident project decisions.' : isPlan ? 'Clear plan drawings for practical project understanding.' : isInnovation ? 'Forward-looking ideas for better spaces and smarter execution.' : 'Completed spaces with dependable construction quality.'}
        body={isDesign ? 'Design renders help clients see proportions, material direction and spatial intent before execution begins.' : isPlan ? '2D plans can be added directly into the public folder and reviewed in a clean expandable grid.' : isInnovation ? 'Innovation images can be added directly into the public folder and displayed in the same expandable gallery format.' : 'Finished project photography highlights the build quality, detail control and practical delivery standards behind our work.'}
      />
      {isInnovation ? <InnovationGroups images={images} /> : <ImageGallery images={images} />}
    </main>
  );
}

function InnovationGroups({ images }) {
  const groupedImages = innovationSections.map((section) => ({
    ...section,
    images: images.filter((image) => image.group === section.key),
  }));
  const remainingImages = images.filter((image) => !innovationSections.some((section) => section.key === image.group));

  return (
    <section className="section innovation-work">
      {groupedImages.map((section) => (
        <article className="innovation-group" key={section.key} data-reveal>
          <div className="innovation-copy">
            <span className="eyebrow">{section.eyebrow}</span>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ImageGallery images={section.images} className="gallery-grid innovation-gallery" />
        </article>
      ))}
      {remainingImages.length ? (
        <article className="innovation-group" data-reveal>
          <div className="innovation-copy">
            <span className="eyebrow">Innovation</span>
            <h2>Additional innovation references.</h2>
          </div>
          <ImageGallery images={remainingImages} className="gallery-grid innovation-gallery" />
        </article>
      ) : null}
    </section>
  );
}
