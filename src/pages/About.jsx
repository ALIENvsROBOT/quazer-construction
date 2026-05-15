import { Building2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Process } from '../sections/Process';

export function About() {
  return (
    <main className="page">
      <PageHero
        eyebrow="About Quazer"
        title="Reliable construction for residential and commercial clients."
        body="Quazer Construction brings more than 8 years of industry experience to projects that demand quality, durability and professional execution."
      />
      <section className="section split">
        <div className="about-panel" data-reveal>
          <Building2 size={36} />
          <h2>Building more than structures.</h2>
          <p>We create lasting value through quality construction, trusted partnerships and a disciplined approach to delivery.</p>
        </div>
        <div className="rich-copy" data-reveal>
          <p>
            Quazer Construction is focused on residential and commercial projects across villas, apartments, commercial buildings, hospitals and shopping complexes. The company is built around a simple promise: deliver spaces that perform well, look refined and stand strong over time.
          </p>
          <p>
            We work with clients who value practical guidance, honest timelines and visible accountability. From early planning to the final site walk-through, every stage is handled with attention to quality, reliability and long-term usability.
          </p>
          <p>
            We are open to networking, collaborations and new project opportunities in the construction and real estate sector. The goal is always to build relationships with the same care we bring to structures: strong, transparent and made to last.
          </p>
        </div>
      </section>
      <Process />
    </main>
  );
}
