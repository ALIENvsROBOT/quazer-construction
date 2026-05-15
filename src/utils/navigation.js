export const pagePaths = {
  home: '/',
  about: '/about',
  team: '/our-team',
  design: '/our-design',
  finished: '/finished-project',
  plan: '/2d-plan',
  innovation: '/innovation',
  contact: '/contact',
};

const pathPages = Object.fromEntries(Object.entries(pagePaths).map(([page, path]) => [path, page]));

export function navigateTo(page, setPage) {
  setPage(page);
  window.history.pushState({}, '', pagePaths[page] ?? '/');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getInitialPage(validPages) {
  const hashPage = window.location.hash.replace('#', '');

  if (validPages.includes(hashPage)) {
    window.history.replaceState({}, '', pagePaths[hashPage] ?? '/');
    return hashPage;
  }

  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';
  const page = pathPages[normalizedPath];
  return validPages.includes(page) ? page : 'home';
}
