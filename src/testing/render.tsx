import { ReactElement, ReactNode } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { Theme } from './Theme';

const Providers = (props: { children: ReactNode }) => {
  return <Theme>{props.children}</Theme>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

export { customRender as render };
