import { render, screen } from '../../testing';

import { FormatDate } from './FormatDate';

const DATE = '2021-01-30T03:00:00.000Z';

describe('FormatDate', () => {
  it('Should format date by fullDateTime24h token', async () => {
    render(<FormatDate format="fullDateTime24h">{DATE}</FormatDate>);
    expect(screen.getByText('Jan 30, 2021 03:00')).toBeInTheDocument();
  });

  it('Should format date by keyboardDateTime24h token', async () => {
    render(<FormatDate format="keyboardDateTime24h">{DATE}</FormatDate>);
    expect(screen.queryByText('01/30/2021 03:00')).toBeInTheDocument();
  });

  it('Should format date by custom token', async () => {
    render(<FormatDate formatString="h a G">{DATE}</FormatDate>);
    expect(screen.queryByText('3 AM AD')).toBeInTheDocument();
  });

  it('Should render children when format is not specified', async () => {
    render(<FormatDate>{DATE}</FormatDate>);
    expect(screen.queryByText(DATE)).toBeInTheDocument();
  });

  it('Should prefer custom token', async () => {
    render(
      <FormatDate format="fullDateTime24h" formatString="h a G">
        {DATE}
      </FormatDate>
    );
    expect(screen.queryByText('3 AM AD')).toBeInTheDocument();
  });
});
