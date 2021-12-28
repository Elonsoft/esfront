import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';

import { themeDark, themeLight } from '../themes';

import { useDarkMode } from 'storybook-dark-mode';

export const DocsContainer = ({ children, context }) => {
  const isDarkMode = useDarkMode();

  return (
    <div className={`docs-container ${isDarkMode ? 'docs-container__dark' : ''}`}>
      <BaseContainer
        context={{
          ...context,
          parameters: {
            ...context.parameters,
            docs: {
              theme: isDarkMode ? themeDark : themeLight
            }
          }
        }}
      >
        {children}
      </BaseContainer>
    </div>
  );
};
