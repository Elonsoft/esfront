import { fireEvent, render, screen } from '../../testing';

import { FileInfo, FileInfoContent, FileInfoMeta, FileInfoName } from '.';

import { en } from '../locale';

const DELETE_LABEL = en.components.ESFileInfoName.defaultProps.deleteLabel;

describe('FileInfo', () => {
  it('Should render children', () => {
    render(
      <FileInfo>
        <FileInfoContent>
          <FileInfoName>File_name.rar</FileInfoName>
          <FileInfoMeta>1024</FileInfoMeta>
        </FileInfoContent>
      </FileInfo>
    );
    expect(screen.queryByText('File_name.rar')).toBeInTheDocument();
    expect(screen.queryByText('1024')).toBeInTheDocument();
  });

  it('Should render a close button if onDelete is defined', () => {
    const onDelete = jest.fn();
    render(<FileInfoName onDelete={onDelete} />);
    expect(screen.queryByLabelText(`${DELETE_LABEL}`)).toBeInTheDocument();
  });

  it('Should not render a close button if onDelete is undefined', () => {
    render(<FileInfoName />);
    expect(screen.queryByLabelText(`${DELETE_LABEL}`)).not.toBeInTheDocument();
  });

  it('Should call a callback function on close button click', () => {
    const onDelete = jest.fn();
    render(<FileInfoName onDelete={onDelete} />);
    fireEvent.click(screen.getByLabelText(`${DELETE_LABEL}`));
    expect(onDelete).toHaveBeenCalled();
  });
});
