import { render, screen } from '../../testing';

import { kbdClasses } from './Kbd.classes';

import { Kbd } from './Kbd';

const CHILDREN_TEXT = 'Enter';

describe('Kbd', () => {
  it('Should render a raised variant', () => {
    render(<Kbd>{CHILDREN_TEXT}</Kbd>);
    expect(screen.getByText(CHILDREN_TEXT)).toHaveClass(kbdClasses.raised);
  });

  it('Should render a contained variant', () => {
    render(<Kbd variant="contained">{CHILDREN_TEXT}</Kbd>);
    expect(screen.getByText(CHILDREN_TEXT)).toHaveClass(kbdClasses.contained);
  });

  it('Should render a outlined variant', () => {
    render(<Kbd variant="outlined">{CHILDREN_TEXT}</Kbd>);
    expect(screen.getByText(CHILDREN_TEXT)).toHaveClass(kbdClasses.outlined);
  });
});
