export const menuAnimations = (prefersReducedMotion?: boolean) => ({
  closed: {
    y: '20%',
    opacity: 0,
    transition: {
      delay: prefersReducedMotion ? 0 : 0.15,
      length: prefersReducedMotion ? 0 : 1,
    },
  },
  open: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'spring',
      duration: prefersReducedMotion ? 0 : 0.4,
    },
  },
});

export const iconFlip = {
  closed: { rotate: 0, transition: { type: 'spring', duration: 0.25 } },
  open: {
    rotate: 180,
    transition: {
      type: 'spring',
      duration: 0.25,
    },
  },
};
export const backToTop = (prefersReducedMotion?: boolean) => ({
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  },
  hovered: {
    scale: prefersReducedMotion ? 1 : 1.2,
    transition: { duration: prefersReducedMotion ? 0 : 0.2 },
  },
  tapped: {
    scale: 1,
  },
});
