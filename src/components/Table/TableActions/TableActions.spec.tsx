import { TableActions } from './TableActions';

import { render, screen } from '../../../testing';
import { en } from '../../locale';

describe('TabelActions', () => {
  it('Should display the number of selected rows', async () => {
    const LABEL = en.components.ESTableActions.defaultProps.label;
    const COUNT = 10;
    render(<TableActions label={LABEL} count={COUNT} />);
    expect(screen.queryByText(`${LABEL} ${COUNT}`)).toBeInTheDocument();
  });

  it('Should render childred', async () => {
    render(
      <TableActions>
        <button>close</button>
      </TableActions>
    );
    expect(screen.queryByText('close')).toBeInTheDocument();
  });
});
