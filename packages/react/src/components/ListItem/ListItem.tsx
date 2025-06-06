import { forwardRef, useRef } from 'react';

import { ListItemProps, ListItemTypeMap } from './ListItem.types';

import clsx from 'clsx';
import { getListItemUtilityClass, listItemClasses } from './ListItem.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { styled } from '@mui/material-pigment-css';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import composeClasses from '@mui/utils/composeClasses';

import { listItemIconClasses } from './ListItemIcon';
import { listItemTextClasses } from './ListItemText';

import { useForkRef } from '../../hooks';
import { ButtonBase, buttonBaseClasses } from '../ButtonBase';

type ListItemOwnerState = {
  classes?: ListItemProps['classes'];
  alignItems: NonNullable<ListItemProps['alignItems']>;
  button?: ListItemProps['button'];
  size: NonNullable<ListItemProps['size']>;
  disabled?: ListItemProps['disabled'];
  selected?: ListItemProps['selected'];
  error?: ListItemProps['error'];
};

const useUtilityClasses = (ownerState: ListItemOwnerState) => {
  const { classes, alignItems, button, size, disabled, selected, error } = ownerState;

  const slots = {
    root: [
      'root',
      `size${size}`,
      button && 'button',
      alignItems === 'flex-start' ? 'alignItemsFlexStart' : 'alignItemsCenter',
      selected && 'selected',
      disabled && 'disabled',
      error && 'error',
    ],
  };

  return composeClasses(slots, getListItemUtilityClass, classes);
};

export const ListItemRoot = styled('li', {
  name: 'ESListItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[`size${ownerState.size}`],
      ownerState.button && styles.button,
      ownerState.alignItems === 'flex-start' ? styles.alignItemsFlexStart : styles.alignItemsCenter,
      ownerState.selected && styles.selected,
      ownerState.disabled && styles.disabled,
      ownerState.error && styles.error,
    ];
  },
})(({ theme }) => ({
  ...theme.typography.subtitle1,

  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingLeft: '16px',
  paddingRight: '16px',

  '--background': 'transparent',
  '--text': theme.vars.palette.monoA.A900,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`&:not(.${buttonBaseClasses.disabled}):focus-visible`]: {
    outline: 'none',
    boxShadow: `inset 0 0 0 2px ${theme.vars.palette.monoA[500]}`,
  },

  [`&, & > .${buttonBaseClasses.wrapper}`]: {
    justifyContent: 'flex-start',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  [`&:has(.${listItemIconClasses.root}:first-child)`]: {
    paddingLeft: 0,
  },

  [`&.${listItemClasses.size100}`]: {
    ...theme.typography.body100,
    height: '32px',

    [`& .${listItemIconClasses.root}`]: {
      padding: '0 8px 0 12px',
    },

    [`& .${listItemTextClasses.root}`]: {
      [`&.${listItemTextClasses.inset}`]: {
        paddingLeft: '28px',
      },
    },
  },

  [`&.${listItemClasses.size200}`]: {
    height: '40px',

    [`& .${listItemIconClasses.root}`]: {
      padding: '0 12px 0 16px',
    },

    [`& .${listItemTextClasses.root}`]: {
      [`&.${listItemTextClasses.inset}`]: {
        paddingLeft: '36px',
      },
    },
  },

  [`&.${listItemClasses.size300}`]: {
    height: '48px',

    [`& .${listItemIconClasses.root}`]: {
      padding: '0 12px 0 16px',
    },

    [`& .${listItemTextClasses.root}`]: {
      [`&.${listItemTextClasses.inset}`]: {
        paddingLeft: '36px',
      },
    },
  },

  [`&.${listItemClasses.size400}`]: {
    height: '56px',

    [`& .${listItemIconClasses.root}`]: {
      padding: '0 12px 0 16px',
    },

    [`& .${listItemTextClasses.root}`]: {
      [`&.${listItemTextClasses.inset}`]: {
        paddingLeft: '36px',
      },
    },
  },

  [`&.${listItemClasses.disabled}`]: {
    '--text': theme.vars.palette.monoA.A500,
    cursor: 'not-allowed',

    [`& .${listItemTextClasses.primary}, & .${listItemTextClasses.secondary}`]: {
      color: theme.vars.palette.monoA.A500,
    },

    [`& .${listItemIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A400,
    },
  },

  [`&.${listItemClasses.selected}`]: {
    '--background': theme.vars.palette.monoA.A50,
  },

  [`&.${listItemClasses.error}`]: {
    '--text': theme.vars.palette.error[300],
    '--hovered': theme.vars.palette.error.A50,
    '--pressed': theme.vars.palette.error.A150,

    [`& .${listItemIconClasses.root}, & .${listItemTextClasses.primary}, & .${listItemTextClasses.secondary}`]: {
      color: theme.vars.palette.error[300],
    },
  },

  [`&.${listItemClasses.alignItemsCenter}`]: {
    [`& > .${buttonBaseClasses.wrapper}`]: {
      alignItems: 'center',
    },
  },

  [`&.${listItemClasses.alignItemsFlexStart}`]: {
    [`& > .${buttonBaseClasses.wrapper}`]: {
      alignItems: 'flex-start',
    },
  },
}));

export const ListItem = forwardRef(function ListItem(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESListItem' });
  const {
    className,
    classes: inClasses,
    sx,
    alignItems = 'center',
    autoFocus = false,
    children,
    size = '200',
    disabled = false,
    selected = false,
    error = false,
    button = false,
    ...other
  } = props;

  const listItemRef = useRef<HTMLLIElement | null>(null);
  const handleRef = useForkRef(listItemRef, ref);

  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (process.env.NODE_ENV !== 'production') {
        console.error('MUI: Unable to set focus to a ListItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);

  const ownerState = {
    classes: inClasses,
    alignItems,
    autoFocus,
    button,
    size,
    disabled,
    selected,
    error,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <ListItemRoot
      {...(button
        ? {
            as: ButtonBase,
            role: 'button',
            tabIndex: disabled ? -1 : 0,
            disabled,
            component: 'li',
            type: false,
            'aria-disabled': disabled,
          }
        : { as: 'li' })}
      {...other}
      ref={handleRef}
      className={clsx(className, classes.root)}
      sx={sx}
    >
      {children}
    </ListItemRoot>
  );
}) as OverridableComponent<ListItemTypeMap>;
