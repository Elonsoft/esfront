import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // The plugins are headless, so the transforms run without a DOM.
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
