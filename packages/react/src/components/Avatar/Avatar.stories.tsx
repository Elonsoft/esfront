import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { Avatar } from '.';

import { IconAccountLc, IconAccountRoundedLc } from '../../icons';

const meta: Meta<typeof Avatar> = {
  tags: ['autodocs'],
  component: Avatar,
  parameters: {
    references: ['Avatar']
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'select'
      }
    },
    size: {
      control: {
        type: 'number'
      }
    },
    sx: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    size: 40,
    variant: 'square'
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  args: {
    children: 'НФ'
  },
  render: ({ children, src, ...args }) => {
    return (
      <Box display="flex" flexDirection="column" gap="10px">
        <Avatar src={src} {...args}>
          {children}
        </Avatar>
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/6b81/d1c1/fd4665f77eaeec9a607a06972297d5b0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lr0~eq9PCwrozxt3D92ZT4MkGjCWizD9QhR2kp5Trchwlizzyx9KUxplnOqksOFwhScmIorNjYYqAO7PfJULvCkQ3RsJ3mVU6bvZNTONa2be~LwTwnrbjtWvGFVnhqqoR5ZekCd2uhmVA61O63EFjHjYBstrk5VNzIgNLMsuq~IyYiisNohSCOEZ-LdLclHJC9KBjIe7gFO-sletwf1DwLVE6bm9uoUL82uFmUX8dQf-tzGXVJlndDiwBwhSuODFxKcARSdfTdu9G7cFhivga2Vvdu0GFRjoxuN2~yMFArn9AK55QaHXgGuhdSe2t7rTiQ-iT6KtjeACPlJ6pFweJA__"
          {...args}
        >
          {children}
        </Avatar>
        <Avatar {...args}>{args.variant === 'circle' ? <IconAccountRoundedLc /> : <IconAccountLc />}</Avatar>
      </Box>
    );
  }
};
