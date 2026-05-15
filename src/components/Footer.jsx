import { Logo } from './Logo';
import { navigateTo } from '../utils/navigation';

export function Footer({ setPage }) {
  const goTo = (page) => navigateTo(page, setPage);

  return (
    <footer className="footer">
      <div>
        <Logo onClick={() => goTo('home')} />
        <p>Residential & Commercial Projects | 8+ Years Building Reliable, High-Quality Spaces.</p>
      </div>
      <div>
        <button type="button" onClick={() => goTo('about')}>About</button>
        <button type="button" onClick={() => goTo('design')}>Our Design</button>
        <button type="button" onClick={() => goTo('finished')}>Finished Project</button>
        <button type="button" onClick={() => goTo('contact')}>Contact</button>
      </div>
    </footer>
  );
}
