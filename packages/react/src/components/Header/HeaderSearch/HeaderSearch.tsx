import { HeaderSearchProps } from './HeaderSearch.types';

import clsx from 'clsx';
import { getHeaderSearchUtilityClass } from './HeaderSearch.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import TextField, { textFieldClasses } from '@mui/material/TextField';

import { buttonClasses } from '../../Button';
import { svgIconClasses } from '../../SvgIcon';

type HeaderSearchOwnerState = {
  classes?: HeaderSearchProps['classes'];
  variantProp: NonNullable<HeaderSearchProps['variant']>;
};

const useUtilityClasses = (ownerState: HeaderSearchOwnerState) => {
  const { classes, variantProp } = ownerState;

  const slots = {
    root: ['root', variantProp],
  };

  return composeClasses(slots, getHeaderSearchUtilityClass, classes);
};

const HeaderSearchRoot = styled(TextField, {
  name: 'ESHeaderSearch',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: HeaderSearchOwnerState }>(({ theme }) => ({
  flexGrow: 1,

  variants: [
    {
      props: {
        variantProp: 'borderless',
      },
      style: {
        [`& .${outlinedInputClasses.root}`]: {
          [`&:has(.${inputAdornmentClasses.positionStart} > .${svgIconClasses.root})`]: {
            paddingLeft: '8px',
          },
          [`&:has(.${inputAdornmentClasses.positionEnd} .${buttonClasses.variantText}:last-child)`]: {
            paddingRight: '4px',
          },
        },

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          display: 'none',
        },

        [`& .${inputAdornmentClasses.positionStart}`]: {
          [`& > .${svgIconClasses.root}`]: {
            color: theme.vars.palette.monoA.A900,
          },
        },

        [`& .${inputAdornmentClasses.positionEnd}`]: {
          [`& .${buttonClasses.variantText}`]: {
            '--icon': theme.vars.palette.monoA.A500,
          },
        },
      },
    },
    {
      props: {
        variantProp: 'outlined',
      },
      style: {
        [`& .${outlinedInputClasses.root}`]: {
          [`&:has(.${inputAdornmentClasses.positionStart} > .${svgIconClasses.root})`]: {
            paddingLeft: '8px',
          },
          [`&:has(.${inputAdornmentClasses.positionStart} .${buttonClasses.variantContained})`]: {
            paddingLeft: '4px',
          },
          [`&:has(.${inputAdornmentClasses.positionEnd} .${buttonClasses.variantContained}:last-child)`]: {
            paddingRight: 0,
          },
          [`&:has(.${inputAdornmentClasses.positionEnd} .${buttonClasses.variantText}:last-child)`]: {
            paddingRight: '4px',
          },
        },

        [`& .${inputAdornmentClasses.positionStart}`]: {
          [`& > .${svgIconClasses.root}`]: {
            color: theme.vars.palette.monoA.A500,
          },
        },

        [`& .${inputAdornmentClasses.positionEnd}`]: {
          [`& .${buttonClasses.variantContained}`]: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            zIndex: 1,
          },

          [`& .${buttonClasses.variantText}`]: {
            '--icon': theme.vars.palette.monoA.A500,
          },

          [`& .${buttonClasses.variantText}.${buttonClasses.size100}`]: {
            '--icon': theme.vars.palette.monoA.A400,
            marginRight: '8px',
          },
        },
      },
    },
  ],
}));

export const HeaderSearch = (inProps: HeaderSearchProps) => {
  const {
    classes: inClasses,
    className,
    variant: variantProp = 'outlined',

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESHeaderSearch',
  });

  const ownerState = { classes: inClasses, variantProp };
  const classes = useUtilityClasses(ownerState);

  return (
    <HeaderSearchRoot
      className={clsx(classes.root, className)}
      classes={inClasses}
      ownerState={ownerState}
      size="40"
      type="search"
      variant="outlined"
      {...props}
    />
  );
};
