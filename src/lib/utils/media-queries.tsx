import { useEffect, useState } from 'react';

const getBreakpoint = (name: string): string => {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }
  return '';
};

export type MediaQueryMatches = boolean | null;

/**
 * Hook returning a boolean indicating whether the current viewport matches the specified media query.
 *
 * @param mediaQueryString - Media query string to match against the viewport.
 * @returns `true` if the browser window matches the media query, `false` otherwise. Returns `null` if no window detected.
 *  @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @example useMediaQuery('screen and (min-width: 600px)');
 */
export const useMediaQuery = (mediaQueryString: string): MediaQueryMatches => {
  const [matches, setMatches] = useState<MediaQueryMatches>(null);

  useEffect(() => {
    const mql = window.matchMedia(mediaQueryString);
    setMatches(mql.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);

    return () => {
      mql.removeEventListener('change', handler);
    };
  }, [mediaQueryString]);

  return matches;
};
export const laptopQuery = `screen and (min-width: ${getBreakpoint('--breakpoint-lg')})`;

export const tabletLgQuery = `screen and (min-width: ${getBreakpoint('--breakpoint-md')})`;
