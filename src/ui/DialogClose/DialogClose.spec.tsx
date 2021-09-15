import { render, screen, fireEvent } from '../../testing';

import { DialogClose } from './DialogClose';
import { en } from '../locale';

const LABEL = en.components.ESDialogClose.defaultProps.label;

describe('DialogClose', () => {
  it('Should render a button with label', async () => {
    render(<DialogClose />);
    expect(screen.queryByLabelText(`${LABEL}`)).toBeInTheDocument();
  });

  it('Should call the callback function on a button click', async () => {
    const onClick = jest.fn();
    render(<DialogClose onClick={onClick} />);
    fireEvent.click(screen.getByLabelText(`${LABEL}`));
    expect(onClick).toBeCalled();
  });
});
