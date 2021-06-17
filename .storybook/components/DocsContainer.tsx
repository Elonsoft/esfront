import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';

import { themeLight, themeDark } from '../themes';

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
