import React from 'react';
import { render, screen } from '@testing-library/react';

import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('Should render text', async () => {
    render(<EmptyState heading="Heading" />);
    expect(await screen.findByText('Heading')).toBeInTheDocument();
  });
});
