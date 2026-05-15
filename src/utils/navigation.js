export function navigateTo(page, setPage) {
  setPage(page);
  window.location.hash = page === 'home' ? '' : page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getInitialPage(validPages) {
  const hash = window.location.hash.replace('#', '');
  return validPages.includes(hash) ? hash : 'home';
}
