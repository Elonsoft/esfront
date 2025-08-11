import { memo } from 'react';

import { SearchProps } from './Search.types';

import clsx from 'clsx';
import { getSearchUtilityClass } from './Search.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { inputBaseClasses, inputLabelClasses, outlinedInputClasses } from '@mui/material';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import composeClasses from '@mui/utils/composeClasses';

import { IconCloseW350, IconMagnify2W400 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';

type SearchOwnerState = {
  classes?: SearchProps['classes'];
};

const useUtilityClasses = (ownerState: SearchOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    clear: ['clear'],
  };

  return composeClasses(slots, getSearchUtilityClass, classes);
};

const SearchRoot = styled(TextField, {
  name: 'ESSearch',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.input,
})(({ theme }) => ({
  [`& .${outlinedInputClasses.root}`]: {
    backgroundColor: theme.vars.palette.monoA.A75,
  },

  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedStart}`]: {
    paddingLeft: '4px',
  },

  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedEnd}`]: {
    paddingRight: '0',
  },

  [`& .${inputLabelClasses.root}`]: {
    opacity: 0,
  },

  '&:hover': {
    [`& .${outlinedInputClasses.input}`]: {
      '&::placeholder': {
        color: theme.vars.palette.monoA.A550,
      },
    },
  },

  [`&:has(.${outlinedInputClasses.input}:focus)`]: {
    [`& .${outlinedInputClasses.input}`]: {
      '&::placeholder': {
        color: theme.vars.palette.monoA.A400,
      },
    },
  },

  [`& .${inputAdornmentClasses.positionStart}`]: {
    color: theme.vars.palette.monoA.A400,
    marginRight: '4px',
  },

  [`&:hover, &:has(.${outlinedInputClasses.input}:focus)`]: {
    [`.${inputAdornmentClasses.positionStart}`]: {
      color: theme.vars.palette.monoA.A500,
    },
  },

  [`&:has(.${outlinedInputClasses.input}:not(:placeholder-shown))`]: {
    [`.${inputAdornmentClasses.positionStart}`]: {
      color: theme.vars.palette.monoA.A500,
    },

    [`&:hover, &:has(.${outlinedInputClasses.input}:focus)`]: {
      [`.${inputAdornmentClasses.positionStart}`]: {
        color: theme.vars.palette.monoA.A550,
      },
    },
  },

  [`& .${inputAdornmentClasses.positionEnd}`]: {
    marginLeft: '4px',
  },

  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: 'none',
  },

  [`& .${outlinedInputClasses.input}`]: {
    ...theme.typography.body100,

    '&::placeholder': {
      color: theme.vars.palette.monoA.A500,
    },

    '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      {
        WebkitAppearance: 'none',
      },
  },
}));

const SearchClear = styled(Button, {
  name: 'ESSearch',
  slot: 'Clear',
  overridesResolver: (_, styles) => styles.clear,
})(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    height: '32px',
    flexShrink: 0,
    '--icon': theme.vars.palette.monoA.A400,

    [`& .${buttonBaseClasses.wrapper}`]: {
      padding: '0 6px',
    },

    [`&.${buttonClasses.variantText}`]: {
      '--hovered': 'inherit',
      '--pressed': 'inherit',
    },

    '&:hover': {
      '--icon': theme.vars.palette.monoA.A500,
    },

    '&:active': {
      '--icon': theme.vars.palette.monoA.A600,
    },
  },
}));

/** The text field that can be used to search, find, or filter. */
export const Search = memo(function Search(inProps: SearchProps) {
  const {
    classes: inClasses,
    className,

    value,
    onClear,
    placeholder = ' ',

    ariaLabel,
    labelClear,

    iconClear = <IconCloseW350 />,
    iconSearch = <IconMagnify2W400 />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSearch',
  });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <SearchRoot
      fullWidth
      aria-label={ariaLabel}
      placeholder={placeholder}
      size="32"
      type="search"
      value={value}
      {...props}
      InputProps={{
        startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
        endAdornment: onClear && !!value && (
          <InputAdornment position="end" onClick={onClear}>
            <SearchClear aria-label={labelClear} className={classes.clear} color="monoA" size="300">
              {iconClear}
            </SearchClear>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      className={clsx(classes.root, className)}
      classes={inClasses}
    />
  );
});
