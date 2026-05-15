import { useEffect } from 'react';

// Adds lightweight reveal animations without shipping a large animation library.
export function useReveal(refreshKey) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [refreshKey]);
}
