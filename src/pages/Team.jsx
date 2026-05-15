import { Hammer, ShieldCheck, Users } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const teamRoles = [
  ['Project Leadership', 'Planning decisions, client alignment, quality direction and delivery accountability.'],
  ['Site Execution', 'Daily coordination, material checks, contractor flow and workmanship supervision.'],
  ['Design Coordination', 'Render-to-site interpretation, detail refinement and practical build guidance.'],
];

export function Team() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Our Team"
        title="A focused construction team led by experience and accountability."
        body="The Quazer team combines site discipline, client communication and practical execution knowledge to keep each project moving with clarity."
      />
      <section className="section team-grid">
        {teamRoles.map(([title, body], index) => (
          <article className="team-card" key={title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
            {index === 0 ? <ShieldCheck /> : index === 1 ? <Hammer /> : <Users />}
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
