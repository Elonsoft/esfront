/* eslint-disable @typescript-eslint/no-unused-vars */

import { Components } from '@material-ui/core/styles/components';
import { ComponentsOverrides, ComponentNameToClassKey } from '@material-ui/core/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@material-ui/core/styles/props';

import { ESEmptyStateProps, ESEmptyStateClassKey } from './ui/EmptyState';

declare module '@material-ui/core/styles/props' {
  interface ComponentsPropsList {
    ESEmptyState: ESEmptyStateProps;
  }
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    ESEmptyState: ESEmptyStateClassKey;
  }
}

declare module '@material-ui/core/styles/components' {
  interface Components {
    ESEmptyState?: {
      defaultProps?: ComponentsProps['ESEmptyState'];
      styleOverrides?: ComponentsOverrides['ESEmptyState'];
    };
  }
}
