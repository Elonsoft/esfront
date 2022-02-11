import { render, screen } from '../../testing';

import { Link } from './Link';

describe('Link', () => {
  it('Should display children', () => {
    render(<Link>Link</Link>);

    expect(screen.getByText('Link')).toBeInTheDocument();
  });

  it('Should change underlying component', () => {
    render(<Link component="button">Link</Link>);

    expect(screen.getByText('Link')?.parentElement?.tagName).toBe('BUTTON');
  });

  it('Should render icons', () => {
    render(
      <Link startIcon={<span>start</span>} endIcon={<span>end</span>}>
        Link
      </Link>
    );

    expect(screen.getByText('start')).toBeInTheDocument();
    expect(screen.getByText('end')).toBeInTheDocument();
  });
});
