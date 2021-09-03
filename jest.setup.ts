// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// https://github.com/emotion-js/emotion/issues/1105#issuecomment-885009697
(() => {
  const log = console.error.bind(console);
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('The pseudo class') &&
      args[0].includes('is potentially unsafe when doing server-side rendering. Try changing it to')
    ) {
      return;
    }
    log(...args);
  };
})();
