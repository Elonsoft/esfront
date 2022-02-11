import { fireEvent, render, screen } from '../../testing';

import { Dropzone } from '.';

import { IconUpload } from '../../icons';

const TEXT_HEADING = 'HEADING';
const TEXT_SUBHEADING = 'SUBHEADING';
const TEXT_DRAGHEADING = 'DRAGHEADING';
const TEXT_DRAGSUBHEADING = 'DRAGSUBHEADING';
const TEXT_HELPER = 'HELPER';

const FILE_FIXTURE_1 = {
  name: 'filename1.png',
  type: 'image/png'
};
const FILE_FIXTURE_2 = {
  name: 'filename2.pdf',
  type: 'application/pdf'
};
const FILE_1 = new File([''], FILE_FIXTURE_1.name, { type: FILE_FIXTURE_1.type });
const FILE_2 = new File(['12345678910'], FILE_FIXTURE_1.name, { type: FILE_FIXTURE_1.type });
const FILE_3 = new File([''], FILE_FIXTURE_2.name, { type: FILE_FIXTURE_2.type });

describe('Dropzone', () => {
  it('Should render heading, subheading and helperText', () => {
    render(
      <Dropzone
        heading={TEXT_HEADING}
        subheading={TEXT_SUBHEADING}
        helperText={TEXT_HELPER}
        onChange={() => null}
        onReject={() => null}
      />
    );
    expect(screen.queryByText(TEXT_HEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_SUBHEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_HELPER)).toBeInTheDocument();
  });

  it('Should render icon', () => {
    render(<Dropzone icon={<IconUpload />} heading={TEXT_HEADING} onChange={() => null} onReject={() => null} />);
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
  });

  it('Should render dragHeading and dragSubheading on document drag events', () => {
    render(
      <Dropzone
        icon={<IconUpload />}
        heading={TEXT_HEADING}
        subheading={TEXT_SUBHEADING}
        dragHeading={TEXT_DRAGHEADING}
        dragSubheading={TEXT_DRAGSUBHEADING}
        onChange={() => null}
        onReject={() => null}
      />
    );
    expect(screen.queryByText(TEXT_HEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_SUBHEADING)).toBeInTheDocument();
    fireEvent.dragEnter(document);
    expect(screen.queryByText(TEXT_DRAGHEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_DRAGSUBHEADING)).toBeInTheDocument();
    fireEvent.dragLeave(document);
    expect(screen.queryByText(TEXT_HEADING)).toBeInTheDocument();
    expect(screen.queryByText(TEXT_SUBHEADING)).toBeInTheDocument();
  });

  it('Should fire onChange or onReject on drop event', () => {
    const handleChange = jest.fn();
    const handleReject = jest.fn();

    render(
      <Dropzone
        heading={TEXT_HEADING}
        maxSize={5}
        multiple={false}
        accept="image/png"
        onChange={handleChange}
        onReject={handleReject}
      />
    );
    fireEvent.drop(screen.getByTestId('dropzone'), {
      dataTransfer: {
        files: {
          0: FILE_1,
          length: 1
        }
      }
    });
    // Test against multiple files
    fireEvent.drop(screen.getByTestId('dropzone'), {
      dataTransfer: {
        files: {
          0: FILE_1,
          1: FILE_1,
          length: 2
        }
      }
    });
    // Test against max file size
    fireEvent.drop(screen.getByTestId('dropzone'), {
      dataTransfer: {
        files: {
          0: FILE_2,
          length: 1
        }
      }
    });
    // Test against file type
    fireEvent.drop(screen.getByTestId('dropzone'), {
      dataTransfer: {
        files: {
          0: FILE_3,
          length: 1
        }
      }
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleReject).toHaveBeenCalledTimes(3);
  });

  it('Should fire onChange or onReject on input change', () => {
    const handleChange = jest.fn();
    const handleReject = jest.fn();

    render(
      <Dropzone
        heading={TEXT_HEADING}
        maxSize={5}
        multiple={false}
        accept="image/png"
        onChange={handleChange}
        onReject={handleReject}
      />
    );
    fireEvent.change(screen.getByTestId('input'), {
      target: {
        files: {
          0: FILE_1,
          length: 1
        }
      }
    });
    // Test against multiple files
    fireEvent.change(screen.getByTestId('input'), {
      target: {
        files: {
          0: FILE_1,
          1: FILE_1,
          length: 2
        }
      }
    });
    // Test against max file size
    fireEvent.change(screen.getByTestId('input'), {
      target: {
        files: {
          0: FILE_2,
          length: 1
        }
      }
    });
    // Test against file type
    fireEvent.change(screen.getByTestId('input'), {
      target: {
        files: {
          0: FILE_3,
          length: 1
        }
      }
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleReject).toHaveBeenCalledTimes(3);
  });
});
