import React from 'react';
import { render, screen } from '@testing-library/react';

import { EmptyState } from './EmptyState';
import { Theme } from '../../helpers';

describe('EmptyState', () => {
  it('Should render text', async () => {
    render(
      <Theme>
        <EmptyState heading="Heading" />
      </Theme>
    );
    expect(await screen.findByText('Heading')).toBeInTheDocument();
  });
});
