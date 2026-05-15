import { Hammer, ShieldCheck, Users } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const members = [
  {
    name: 'Sakthi Kamalesh M',
    role: 'Director and Chief Engineer',
    image: '/portfolio/filler_images/Teams/Sakthi_kamalesh.png',
    education: 'Coimbatore Institute of Technology',
    body: 'Sakthi leads Quazer Construction with over 8 years of hands-on experience in construction execution, project management and infrastructure development. His work spans residential, commercial and institutional projects across Tamil Nadu, with a strong focus on structural quality, efficient execution and modern construction standards.',
    focus: 'Site selection, project execution, leadership coordination, team management and end-to-end construction supervision.',
  },
  {
    name: 'Kabilan G',
    role: 'Planning Engineer',
    image: '/portfolio/filler_images/Teams/kabilan.png',
    education: 'Hindusthan College of Engineering and Technology',
    body: 'Kabilan oversees project planning, stage-wise execution and on-site coordination to keep delivery smooth and efficient. With a master’s specialization in soil engineering, he brings strong expertise in material analysis, soil assessment and construction parameter accuracy.',
    focus: 'Labour management, client coordination, interior work supervision and workflow efficiency across each project stage.',
  },
  {
    name: 'Abdul Raooffe',
    role: 'Design Engineer',
    image: '/portfolio/filler_images/Teams/Abdul.png',
    education: 'Coimbatore Institute of Technology',
    body: 'Abdul specializes in structural design, engineering analysis and construction inspection. He brings over 6 years of structural engineering experience, including residential, commercial and international project exposure.',
    focus: 'Structural planning, construction inspection, engineering quality, safety, precision and long-term durability.',
  },
  {
    name: 'Samyuktha Gowtham',
    role: 'Human Resources Executive and Surveyor',
    image: '/portfolio/filler_images/Teams/samyuktha.png',
    education: 'Sri Krishna College',
    body: 'Samyuktha contributes to organizational management and project coordination at Quazer Construction. She supports workforce management, internal coordination, administrative operations and survey-related responsibilities across active project workflows.',
    focus: 'Workforce coordination, day-to-day management, communication support, survey responsibilities and operational efficiency.',
  },
];

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
      <section className="section member-section">
        {members.map((member, index) => (
          <article className="member-card" key={member.name} data-reveal style={{ '--delay': `${index * 70}ms` }}>
            <div className="member-photo">
              <img src={member.image} alt={`${member.name}, ${member.role}`} loading="eager" />
            </div>
            <div className="member-copy">
              <span className="eyebrow">{member.role}</span>
              <h2>{member.name}</h2>
              <p>{member.body}</p>
              <div className="member-meta">
                <span>{member.education}</span>
                <strong>{member.focus}</strong>
              </div>
            </div>
          </article>
        ))}
      </section>
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
