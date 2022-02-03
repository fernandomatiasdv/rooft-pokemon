import { useState, useEffect } from 'react';

export function useMediaQuery() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 600px)');
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change" , listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  return matches;
}