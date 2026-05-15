import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { WorkPage } from './pages/WorkPage';
import { getInitialPage } from './utils/navigation';
import { useReveal } from './hooks/useReveal';

const pageTitles = {
  home: 'Home',
  about: 'About',
  team: 'Our Team',
  design: 'Our Design',
  finished: 'Finished Project',
  contact: 'Contact Us',
};

const pageComponents = {
  home: Home,
  about: About,
  team: Team,
  design: () => <WorkPage type="design" />,
  finished: () => <WorkPage type="finished" />,
  contact: Contact,
};

const validPages = Object.keys(pageComponents);

export default function App() {
  const [page, setPage] = useState(() => getInitialPage(validPages));
  const ActivePage = pageComponents[page] ?? Home;

  useReveal(page);

  useEffect(() => {
    const syncHash = () => setPage(getInitialPage(validPages));
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />
      <ActivePage setPage={setPage} />
      <Footer setPage={setPage} />
      <span className="route-label" aria-hidden="true">{pageTitles[page]}</span>
    </div>
  );
}
