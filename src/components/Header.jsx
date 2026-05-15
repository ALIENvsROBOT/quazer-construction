import { useState } from 'react';
import { ChevronDown, Instagram, Menu, Phone, X } from 'lucide-react';
import { instagramUrl, navigation, phoneNumber, whatsappUrl } from '../data/site';
import { navigateTo, pagePaths } from '../utils/navigation';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const goTo = (nextPage) => {
    navigateTo(nextPage, setPage);
    setOpen(false);
    setOpenDropdown('');
    document.activeElement?.blur();
  };

  const followLink = (event, nextPage) => {
    event.preventDefault();
    goTo(nextPage);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => current === label ? '' : label);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo onClick={() => goTo('home')} />

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navigation.map((item) => (
            <div
              className={`nav-item ${openDropdown === item.label ? 'submenu-open' : ''}`}
              key={item.label}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown('')}
            >
              <a
                href={pagePaths[item.page] ?? '/'}
                className={page === item.page || item.children?.some((child) => child.page === page) ? 'active' : ''}
                onClick={(event) => item.children ? (event.preventDefault(), toggleDropdown(item.label)) : followLink(event, item.page)}
                aria-expanded={item.children ? openDropdown === item.label : undefined}
              >
                {item.label}
                {item.children ? <ChevronDown size={15} /> : null}
              </a>
              {item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <a key={child.page} href={pagePaths[child.page]} onClick={(event) => followLink(event, child.page)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <a className="icon-button whatsapp" href={whatsappUrl} aria-label="Open WhatsApp">
            <WhatsAppIcon size={21} />
          </a>
          <a className="icon-button" href={`tel:${phoneNumber}`} aria-label="Call Quazer Construction">
            <Phone size={18} />
          </a>
          <a className="icon-button instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Quazer Construction on Instagram">
            <Instagram size={18} />
          </a>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
