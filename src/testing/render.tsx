import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { Theme } from './Theme';

const Providers: FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

export { customRender as render };
