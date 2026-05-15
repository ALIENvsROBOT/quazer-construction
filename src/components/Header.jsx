import { useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { navigation, phoneNumber, whatsappUrl } from '../data/site';
import { navigateTo } from '../utils/navigation';
import { Logo } from './Logo';

export function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const goTo = (nextPage) => {
    navigateTo(nextPage, setPage);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="contact-strip">
        <div className="strip-inner">
          <span>Residential & Commercial Projects</span>
          <a href={`tel:${phoneNumber}`}><Phone size={14} /> {phoneNumber}</a>
        </div>
      </div>

      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo onClick={() => goTo('home')} />

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <button
                className={page === item.page || item.children?.some((child) => child.page === page) ? 'active' : ''}
                type="button"
                onClick={() => item.children ? goTo('design') : goTo(item.page)}
              >
                {item.label}
                {item.children ? <ChevronDown size={15} /> : null}
              </button>
              {item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <button key={child.page} type="button" onClick={() => goTo(child.page)}>
                      {child.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <a className="icon-button whatsapp" href={whatsappUrl} aria-label="Open WhatsApp">
            <span>WA</span>
          </a>
          <a className="icon-button" href={`tel:${phoneNumber}`} aria-label="Call Quazer Construction">
            <Phone size={18} />
          </a>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
