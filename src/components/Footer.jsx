import { Instagram, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { navigateTo, pagePaths } from '../utils/navigation';
import { instagramUrl, phoneNumber, whatsappUrl } from '../data/site';
import { WhatsAppIcon } from './WhatsAppIcon';

const footerLinks = [
  ['About', 'about'],
  ['Our Design', 'design'],
  ['Finished Project', 'finished'],
  ['2D Plan', 'plan'],
  ['Innovation', 'innovation'],
  ['Contact', 'contact'],
];

export function Footer({ setPage }) {
  const goTo = (page) => navigateTo(page, setPage);
  const followLink = (event, page) => {
    event.preventDefault();
    goTo(page);
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo onClick={() => goTo('home')} />
          <p>Reliable residential and commercial construction with disciplined execution, transparent communication and quality-led delivery.</p>
          <span>Serving projects across Tamil Nadu, India.</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <strong>Explore Work</strong>
          <div>
            {footerLinks.map(([label, page]) => (
              <a key={page} href={pagePaths[page]} onClick={(event) => followLink(event, page)}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="footer-contact">
          <strong>Start a Conversation</strong>
          <a href={`tel:${phoneNumber}`}><Phone size={18} /> {phoneNumber}</a>
          <a href={whatsappUrl}><WhatsAppIcon size={18} /> WhatsApp</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a>
          <span><MapPin size={18} /> Coimbatore, Tamil Nadu, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Quazer Construction</span>
        <span>Building reliable, high-quality spaces across Tamil Nadu.</span>
      </div>
    </footer>
  );
}
