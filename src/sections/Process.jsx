import { processSteps } from '../data/site';
import { SectionIntro } from '../components/SectionIntro';

export function Process() {
  return (
    <section className="section process-section">
      <SectionIntro eyebrow="Method" title="A clear process keeps ambitious projects under control">
        Great construction is not luck. It is disciplined sequencing, careful supervision and trust built through every decision.
      </SectionIntro>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title} data-reveal>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
