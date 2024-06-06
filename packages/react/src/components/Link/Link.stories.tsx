import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import MuiTypography from '@mui/material/Typography';

import { Link, LinkProps } from '.';

import { IconBookmark } from '../../icons';

const getLink = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Link' : 'Ссылка';
};

const getLinkInherit = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Link with inherited color' : 'Ссылка с унаследованным цветом';
};

const getLinkColor = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Link with custom color' : 'Ссылка с произвольным цветом';
};

const getLinkIcon = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Link with the icon' : 'Ссылка с иконкой';
};

type Args = ComponentProps<typeof Link> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Link,
  parameters: {
    references: ['Link'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    underline: {
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <MuiTypography style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }} variant="body100">
        <Link {...args} component="a" href="https://google.com" target="_blank">
          {getLink(context)}
        </Link>
        <Link {...args} color="inherit" component="a" href="https://google.com" target="_blank">
          {getLinkInherit(context)}
        </Link>
        <Link {...args} color="secondary.300" component="a" href="https://google.com" target="_blank">
          {getLinkColor(context)}
        </Link>
        <Link
          {...args}
          component="a"
          endIcon={<IconBookmark container containerSize="20px" />}
          href="https://google.com"
          target="_blank"
        >
          {getLinkIcon(context)}
        </Link>
      </MuiTypography>
    );
  },
};

/* Links are aligned within the text. */
export const Alignment: Story = {
  render: () => {
    return (
      <MuiTypography component="div" variant="body100">
        Lorem ipsum dolor sit amet,{' '}
        <Link component="a" endIcon={<IconBookmark container containerSize="20px" />} href="#" target="_blank">
          consectetur
        </Link>{' '}
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
        <Link component="a" href="#" target="_blank">
          reprehenderit
        </Link>{' '}
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat{' '}
        <Link disabled component="button" startIcon={<IconBookmark container containerSize="20px" />} variant="body100">
          non proident
        </Link>
        , sunt in culpa qui officia deserunt mollit anim id est laborum.
      </MuiTypography>
    );
  },
};

/* Links have different underline thickness and offset depending on the font variant. */
export const Typography: Story = {
  render: (args, context) => {
    const text = getLink(context);

    const variants = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body400',
      'body300',
      'body200',
      'body100',
      'mini100',
      'mini200',
      'micro',
      'button',
      'caption',
      'overline',
    ];

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'baseline' }}>
        {variants.map((variant) => (
          <Link
            key={variant}
            component="a"
            href="#"
            target="_blank"
            variant={variant as LinkProps['variant']}
            {...args}
          >
            {text} {variant}
          </Link>
        ))}
      </div>
    );
  },
};
