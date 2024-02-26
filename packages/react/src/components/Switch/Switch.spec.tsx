import { render, screen } from '../../testing';

import { Switch } from './Switch';

describe('Switch', () => {
  it('Should be checked', async () => {
    render(<Switch defaultChecked value="test" />);
    expect(screen.getByDisplayValue('test')).toBeChecked();
  });

  // TODO: Use userEvent for form submit test in the future.
});
