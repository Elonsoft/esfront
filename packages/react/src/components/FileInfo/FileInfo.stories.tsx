import { Meta, StoryObj } from '@storybook/react-vite';

import { FileInfo, FileInfoContent, FileInfoMeta, FileInfoMetaSeparator, FileInfoName } from '.';

import { FileIcon, FileIconBadge } from '../FileIcon';
import { FormatDate } from '../FormatDate';
import { FormatSize } from '../FormatSize';

const meta: Meta<typeof FileInfo> = {
  tags: ['autodocs'],
  component: FileInfo,
  parameters: {
    references: [
      'FileIcon',
      'FileIconBadge',
      'FileInfo',
      'FileInfoContent',
      'FileInfoMeta',
      'FileInfoMetaSeparator',
      'FileInfoName',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof FileInfo>;

export const Demo: Story = {
  render: () => {
    return (
      <FileInfo>
        <FileIcon>
          <FileIconBadge color="red">RAR</FileIconBadge>
        </FileIcon>
        <FileInfoContent>
          <FileInfoName onDelete={() => {}}>File_name.rar</FileInfoName>
          <FileInfoMeta>
            <FormatSize>{10 ** 10}</FormatSize>
            <FileInfoMetaSeparator />
            <FormatDate format="fullDateTime">2021-01-30T13:00:00.000Z</FormatDate>
          </FileInfoMeta>
        </FileInfoContent>
      </FileInfo>
    );
  },
};
