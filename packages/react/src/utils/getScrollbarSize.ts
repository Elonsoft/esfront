'use client';

/**
 * Returns the width of the vertical scrollbar of a window.
 *
 * Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
 */
export const getScrollbarSize = (win: Window = window): number => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
};
