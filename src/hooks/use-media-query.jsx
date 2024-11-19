// src/hooks/use-media-query.jsx
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const onChange = (event) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener('change', onChange);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Cleanup on unmount
    return () => mediaQueryList.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
