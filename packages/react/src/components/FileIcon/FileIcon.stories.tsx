import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FileIcon, FileIconBadge, FileIconBadgeProps, FileIconIconVariant, FileIconText } from '.';

type Args = ComponentProps<typeof FileIcon> & {
  textChildren?: string;
  badgeChildren?: string;
  badgeColor: string;
  badgeSize: FileIconBadgeProps['size'];
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: FileIcon,
  parameters: {
    references: ['FileIcon', 'FileIconBadge', 'FileIconText'],
  },
  argTypes: {
    textChildren: {
      description: 'Text in text component.',
      name: 'FileIconText.children',
      control: { type: 'text' },
    },
    badgeChildren: {
      description: 'Text in badge component.',
      name: 'FileIconBadge.children',
      control: { type: 'text' },
    },
    badgeColor: {
      name: 'FileIconBadge.color',
      control: { type: 'color' },
      description: 'The badge component background color.',
    },
    badgeSize: {
      name: 'FileIconBadge.size',
      control: { type: 'select' },
      options: ['md', 'sm'],
      description: 'The badge component size.',
    },
  },
  args: {
    textChildren: 'DOCX',
    badgeChildren: 'RAR',
    badgeColor: '#ff0000',
    badgeSize: 'md',
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width} />
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>
          <FileIconText>{args.textChildren}</FileIconText>
        </FileIcon>
        <FileIcon height={args.height} width={args.width} />
        <FileIcon height={args.height} width={args.width}>
          <FileIconText>{args.textChildren}</FileIconText>
        </FileIcon>
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>
          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>
            {args.badgeChildren}
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={args.height} width={args.width}>
          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>
            {args.badgeChildren}
          </FileIconBadge>
        </FileIcon>
      </div>
    );
  },
};

/** Children element automatically positioned in visual center depending on component size. */
export const Sizes: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <FileIcon>
          <FileIconBadge color="red" size="md">
            ZIP
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={44} width={33}>
          <FileIconBadge color="purple" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={40} width={30}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={36} width={27}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon icon={FileIconIconVariant}>
          <FileIconBadge color="red" size="md">
            ZIP
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={44} icon={FileIconIconVariant} width={33}>
          <FileIconBadge color="purple" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={40} icon={FileIconIconVariant} width={30}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={36} icon={FileIconIconVariant} width={27}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
      </div>
    );
  },
};
