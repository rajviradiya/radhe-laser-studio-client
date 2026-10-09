import { useEffect } from 'react';

export const SEOHead = ({ title, description, canonical }) => {
  useEffect(() => {
    if (title) {
      if (title.toLowerCase().startsWith('radhe laser studio')) {
        document.title = title;
      } else {
        document.title = `Radhe Laser Studio - ${title}`;
      }
    } else {
      document.title = 'Radhe Laser Studio';
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      }
    }
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, canonical]);

  return null;
};
