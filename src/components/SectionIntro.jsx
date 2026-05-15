export function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
