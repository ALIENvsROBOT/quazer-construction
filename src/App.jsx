import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { WorkPage } from './pages/WorkPage';
import { getInitialPage, pagePaths } from './utils/navigation';
import { useReveal } from './hooks/useReveal';

const siteUrl = 'https://quazerconstruction.com';

const pageMeta = {
  home: {
    label: 'Home',
    title: 'Quazer Construction | Residential & Commercial Builders in Tamil Nadu',
    description: 'Quazer Construction delivers villas, apartments, commercial buildings, hospitals and shopping complexes with reliable planning, quality execution and 8+ years of construction experience.',
  },
  about: {
    label: 'About',
    title: 'About Quazer Construction | Quality Construction Across Tamil Nadu',
    description: 'Learn about Quazer Construction, a Coimbatore-based construction company focused on residential, commercial and institutional projects across Tamil Nadu.',
  },
  team: {
    label: 'Our Team',
    title: 'Our Team | Quazer Construction Engineers and Project Specialists',
    description: 'Meet the Quazer Construction team leading engineering, planning, design, surveying, HR coordination and site execution for quality-focused projects.',
  },
  design: {
    label: 'Our Design',
    title: 'Our Design Renders | Quazer Construction Project Concepts',
    description: 'Explore Quazer Construction design renders for residential and commercial spaces, including villas, apartments and modern construction concepts.',
  },
  finished: {
    label: 'Finished Project',
    title: 'Finished Projects | Quazer Construction Portfolio',
    description: 'View completed Quazer Construction projects showing reliable execution, durable construction quality and practical detail control.',
  },
  plan: {
    label: '2D Plan',
    title: '2D Plans | Quazer Construction Planning References',
    description: 'Review 2D planning references from Quazer Construction for practical project understanding and construction coordination.',
  },
  innovation: {
    label: 'Innovation',
    title: 'Construction Innovation | Quazer Construction Techniques',
    description: 'See Quazer Construction innovation references, including monolithic construction methods and efficient material-focused execution practices.',
  },
  contact: {
    label: 'Contact Us',
    title: 'Contact Quazer Construction | Construction Projects in Tamil Nadu',
    description: 'Contact Quazer Construction in Coimbatore for villas, apartments, commercial buildings, hospitals, shopping complexes and turnkey project discussions across Tamil Nadu.',
  },
};

const pageComponents = {
  home: Home,
  about: About,
  team: Team,
  design: () => <WorkPage type="design" />,
  finished: () => <WorkPage type="finished" />,
  plan: () => <WorkPage type="plan" />,
  innovation: () => <WorkPage type="innovation" />,
  contact: Contact,
};

const validPages = Object.keys(pageComponents);

export default function App() {
  const [page, setPage] = useState(() => getInitialPage(validPages));
  const ActivePage = pageComponents[page] ?? Home;
  const meta = pageMeta[page] ?? pageMeta.home;

  useReveal(page);

  useEffect(() => {
    const syncRoute = () => setPage(getInitialPage(validPages));
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  useEffect(() => {
    const canonical = `${siteUrl}${pagePaths[page] ?? '/'}`;
    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setCanonical(canonical);
  }, [meta, page]);

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />
      <ActivePage setPage={setPage} />
      <Footer setPage={setPage} />
      <span className="route-label" aria-hidden="true">{meta.label}</span>
    </div>
  );
}

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}
