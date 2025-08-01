import { ComponentProps, useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import List from '@mui/material/List';
import Menu from '@mui/material/Menu';

import { IconUpload } from '../../icons';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { ListItem, ListItemIcon, ListItemText } from '../ListItem';
import { MenuItem } from '../MenuItem';

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open menu' : 'Открыть меню';
};

const getCutText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cut' : 'Вырезать';
};

const getCopyText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Copy' : 'Копировать';
};

const getPasteText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Paste' : 'Вставить';
};

const getActionText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Action' : 'Действие';
};

const getErrorActionText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Dangerous action' : 'Опасное действие';
};

type Args = ComponentProps<typeof ListItem>;

const meta: Meta<Args> = {
  title: 'Menu',
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['100', '200', '300', '400'],
    },
  },
  args: {
    size: '200',
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, context) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button variant="contained" onClick={onClick}>
          {getButtonText(context)}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          slotProps={{
            paper: {
              style: {
                margin: '4px 0',
                minWidth: 192,
              },
            },
          }}
          onClose={onClose}
        >
          <MenuItem selected size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </MenuItem>
          <MenuItem disabled size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </MenuItem>
          <MenuItem size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </MenuItem>
          <Divider sx={{ my: '8px' }} />
          <MenuItem size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem error size={args.size}>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem error size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const DemoList: Story = {
  render: (args, context) => {
    return (
      <div
        sx={(theme) => ({
          maxWidth: '360px',
          boxShadow: theme.vars.palette.shadow.down[500],
          backgroundColor: theme.vars.palette.surface[400],
          borderRadius: '4px',
        })}
      >
        <List>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider sx={{ my: '8px' }} />
          <ListItem size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </List>
      </div>
    );
  },
};

export const DemoListButton: Story = {
  render: (args, context) => {
    return (
      <div
        sx={(theme) => ({
          maxWidth: '360px',
          boxShadow: theme.vars.palette.shadow.down[500],
          backgroundColor: theme.vars.palette.surface[400],
          borderRadius: '4px',
        })}
      >
        <List>
          <ListItem button selected size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem button disabled size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem button size={args.size}>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider sx={{ my: '8px' }} />
          <ListItem button size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItem>
          <ListItem button size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </List>
      </div>
    );
  },
};
