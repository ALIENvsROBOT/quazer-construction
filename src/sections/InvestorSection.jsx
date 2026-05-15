import { ArrowRight, Building2, Handshake, TrendingUp } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

const investmentImages = [
  '/portfolio/filler_images/Investment/WhatsApp%20Image%202026-05-15%20at%207.32.34%20PM.jpeg',
  '/portfolio/filler_images/Investment/WhatsApp%20Image%202026-05-15%20at%207.33.31%20PM.jpeg',
  '/portfolio/filler_images/Investment/WhatsApp%20Image%202026-05-15%20at%207.33.58%20PM.jpeg',
];

const investorPoints = [
  {
    icon: Building2,
    title: 'Premium residential growth',
    body: 'Focused development thinking for villas, apartments and high-quality living spaces.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial infrastructure',
    body: 'Practical construction capability for spaces designed around utility, durability and demand.',
  },
  {
    icon: Handshake,
    title: 'Partnership-first execution',
    body: 'Clear communication, measured planning and disciplined project delivery for serious collaborators.',
  },
];

export function InvestorSection({ setPage }) {
  return (
    <section className="section investor-section">
      <div className="investor-copy" data-reveal>
        <span className="eyebrow">For Investors</span>
        <h2>Future-ready construction opportunities built on measured growth.</h2>
        <p>
          Quazer Construction welcomes strategic partnerships and investors who share a long-term view of residential development, commercial infrastructure and modern construction solutions.
        </p>
        <p>
          Our approach is calm, practical and execution-focused: identify strong opportunities, plan with discipline, use resources intelligently and build assets with lasting value.
        </p>
        <div className="investor-actions">
          <button type="button" onClick={() => navigateTo('contact', setPage)}>
            Discuss Partnership <ArrowRight size={18} />
          </button>
          <span>Focused on premium residential and commercial expansion across Tamil Nadu, India.</span>
        </div>
      </div>

      <div className="investor-media" data-reveal>
        <img className="investor-hero-image" src={investmentImages[0]} alt="Large residential development viewed from above" loading="lazy" />
        <div className="investor-image-pair">
          <img src={investmentImages[1]} alt="Construction partnership discussion" loading="lazy" />
          <img src={investmentImages[2]} alt="Engineer reviewing construction progress" loading="lazy" />
        </div>
      </div>

      <div className="investor-points">
        {investorPoints.map(({ icon, title, body }, index) => {
          const PointIcon = icon;

          return (
          <article className="investor-point" key={title} data-reveal style={{ '--delay': `${index * 45}ms` }}>
            <PointIcon size={22} />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
          );
        })}
      </div>
    </section>
  );
}
