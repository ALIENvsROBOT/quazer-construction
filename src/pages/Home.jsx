import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { proofPoints, services } from '../data/site';
import { SectionIntro } from '../components/SectionIntro';
import { navigateTo } from '../utils/navigation';
import { FeaturedWork } from '../sections/FeaturedWork';
import { HeroCarousel } from '../sections/HeroCarousel';
import { Process } from '../sections/Process';

export function Home({ setPage }) {
  return (
    <>
      <HeroCarousel setPage={setPage} />
      <section className="section">
        <div className="stats-grid">
          {proofPoints.map((item) => (
            <article className="stat-card" key={item.label} data-reveal>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div data-reveal>
          <span className="eyebrow">Built on trust</span>
          <h2>Construction that respects time, money and long-term value.</h2>
        </div>
        <div className="rich-copy" data-reveal>
          <p>
            With over 8 years of experience in the construction industry, Quazer Construction specializes in reliable residential and commercial projects for clients who expect clarity from the first conversation to final handover.
          </p>
          <p>
            Our expertise covers villas, apartments, commercial buildings, hospitals and shopping complexes. Every project is approached with practical planning, dependable material choices, structured supervision and transparent communication.
          </p>
          <button type="button" className="text-link" onClick={() => navigateTo('about', setPage)}>
            Read about Quazer <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section">
        <SectionIntro eyebrow="Capabilities" title="One team for serious construction outcomes">
          From concept coordination to execution, we shape spaces that are functional, durable and aligned with client expectations.
        </SectionIntro>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-tile" key={service} data-reveal style={{ '--delay': `${index * 35}ms` }}>
              <CheckCircle2 size={22} />
              <span>{service}</span>
            </article>
          ))}
        </div>
      </section>

      <FeaturedWork setPage={setPage} />
      <Process />
    </>
  );
}
