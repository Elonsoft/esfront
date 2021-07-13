import { render, screen } from '../../testing';

import { EmptyState } from './EmptyState';
import { BoxIcon } from '../icons';

const TEXT_HEADING = 'HEADING';
const TEXT_SUBHEADING = 'SUBHEADING';

describe('EmptyState', () => {
  it('Should display heading and subheading', async () => {
    render(<EmptyState heading={TEXT_HEADING} subheading={TEXT_SUBHEADING} />);
    expect(screen.queryByText(TEXT_HEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_SUBHEADING)).toBeInTheDocument();
  });

  it('Should display icon', async () => {
    render(<EmptyState icon={<BoxIcon />} heading={TEXT_HEADING} subheading={TEXT_SUBHEADING} />);
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
  });
});
