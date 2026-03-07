/**
 * Toggles the scroll behavior of the document body based on the provided condition.
 *
 * @param condition - A boolean value indicating whether to enable or disable scrolling.
 */
export const setNoScroll = (condition: boolean) => {
  if (typeof document === 'undefined') {
    return;
  }
  if (condition) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
};
