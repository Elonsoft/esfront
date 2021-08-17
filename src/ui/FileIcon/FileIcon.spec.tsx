import { render, screen } from '../../testing';

import { FileIcon } from './FileIcon';
import { FileIconBadge } from './FileIconBadge';
import { FileIconText } from './FileIconText';

const CHILDREN_TEXT = 'DOCS';
const BG_COLOR = 'red';

describe('FileIcon', () => {
  it('Should display children text', async () => {
    render(
      <FileIcon>
        <FileIconText>{CHILDREN_TEXT}</FileIconText>
      </FileIcon>
    );
    expect(screen.queryByText(CHILDREN_TEXT)).toBeInTheDocument();
  });

  it('Should display badge component', async () => {
    render(
      <FileIcon>
        <FileIconBadge color="red">{CHILDREN_TEXT}</FileIconBadge>
      </FileIcon>
    );
    expect(screen.queryByText(CHILDREN_TEXT)).toBeInTheDocument();
    expect(screen.getByText(CHILDREN_TEXT)).toHaveStyle(`background-color: ${BG_COLOR}`);
  });
});
