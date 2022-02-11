import { render, screen } from '../../testing';

import { EmptyState, EmptyStateIconBox } from '.';

const TEXT_HEADING = 'HEADING';
const TEXT_SUBHEADING = 'SUBHEADING';

describe('EmptyState', () => {
  it('Should display heading and subheading', async () => {
    render(<EmptyState heading={TEXT_HEADING} subheading={TEXT_SUBHEADING} />);
    expect(screen.queryByText(TEXT_HEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_SUBHEADING)).toBeInTheDocument();
  });

  it('Should display icon', async () => {
    render(<EmptyState icon={<EmptyStateIconBox />} heading={TEXT_HEADING} subheading={TEXT_SUBHEADING} />);
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
  });
});
