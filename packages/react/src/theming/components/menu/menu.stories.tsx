import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';

import { MenuItem } from '../../../components/MenuItem';
import { IconDotsVerticalW400, IconUpload } from '../../../icons';

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

// eslint-disable-next-line @typescript-eslint/ban-types
type Args = {};

const meta: Meta<Args> = {
  title: 'Overrides/Menu',

  parameters: {
    viewMode: 'canvas'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(_args, context) {
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
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem color="error">
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem color="error">
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

export const DemoList: Story = {
  render: (_args, context) => {
    return (
      <Box
        sx={(theme) => ({
          maxWidth: '360px',
          boxShadow: theme.palette.shadow.down[500],
          backgroundColor: theme.palette.surface[400],
          borderRadius: '4px'
        })}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>{getActionText(context)}</ListItemText>
            <IconButton color="tertiary" size="32">
              <IconDotsVerticalW400 />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </List>
      </Box>
    );
  }
};

export const DemoListButton: Story = {
  render: (_args, context) => {
    return (
      <Box
        sx={(theme) => ({
          maxWidth: '360px',
          boxShadow: theme.palette.shadow.down[500],
          backgroundColor: theme.palette.surface[400],
          borderRadius: '4px'
        })}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    );
  }
};
