import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, whyQuazerPoints } from '../data/site';
import { SectionIntro } from '../components/SectionIntro';
import { navigateTo } from '../utils/navigation';
import { FeaturedWork } from '../sections/FeaturedWork';
import { HeroCarousel } from '../sections/HeroCarousel';
import { InvestorSection } from '../sections/InvestorSection';
import { Process } from '../sections/Process';

export function Home({ setPage }) {
  return (
    <>
      <HeroCarousel setPage={setPage} />
      <section className="section why-section">
        <div className="why-heading" data-reveal>
          <span className="eyebrow">Why Quazer Construction?</span>
          <h2>Measured execution for spaces that need to perform for years.</h2>
        </div>
        <div className="stats-grid">
          {whyQuazerPoints.map((item, index) => (
            <article className="stat-card" key={item.label} data-reveal>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <i>{String(index + 1).padStart(2, '0')}</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section split trust-section">
        <div className="trust-heading" data-reveal>
          <span className="eyebrow">Built on trust</span>
          <h2>Construction that respects time, budget and long-term value.</h2>
        </div>
        <div className="rich-copy" data-reveal>
          <ul className="trust-list">
            <li>
              <strong>8+ years of practical construction experience</strong>
              <span>Residential and commercial projects planned with clarity from first conversation to final handover.</span>
            </li>
            <li>
              <strong>Built for villas, apartments and commercial spaces</strong>
              <span>Execution support for homes, hospitals, shopping complexes and other high-value spaces.</span>
            </li>
            <li>
              <strong>Transparent process from site to finish</strong>
              <span>Dependable materials, structured supervision and communication that keeps clients informed.</span>
            </li>
          </ul>
          <button type="button" className="text-link" onClick={() => navigateTo('about', setPage)}>
            Read about Quazer <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <InvestorSection setPage={setPage} />

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
