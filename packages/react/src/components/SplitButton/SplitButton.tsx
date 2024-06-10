import { cloneElement, forwardRef } from 'react';

import { SplitButtonProps } from './SplitButton.types';

import clsx from 'clsx';
import { getSplitButtonUtilityClass, splitButtonClasses } from './SplitButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material';
import { capitalize } from '@mui/material/utils';
import getValidReactChildren from '@mui/utils/getValidReactChildren';

import { buttonBaseClasses } from '../ButtonBase';
import { Divider, dividerClasses } from '../Divider';

type SplitButtonOwnerState = {
  classes?: SplitButtonProps['classes'];
  color: NonNullable<SplitButtonProps['color']>;
  disabled: SplitButtonProps['disabled'];
  fullWidth: SplitButtonProps['fullWidth'];
  variant: NonNullable<SplitButtonProps['variant']>;
  size: SplitButtonProps['size'];
};

const useUtilityClasses = (ownerState: SplitButtonOwnerState) => {
  const { classes, color, disabled, fullWidth, variant, size } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      fullWidth && 'fullWidth',
      `color${capitalize(color)}`,
      size && `size${capitalize(size)}`,
      disabled && 'disabled',
    ],
    split: [
      'split',
      `split${capitalize(variant)}`,
      `split${capitalize(variant)}${capitalize(color)}`,
      disabled && 'disabled',
    ],
    firstButton: ['firstButton'],
    lastButton: ['lastButton'],
    middleButton: ['middleButton'],
    splitButtonDivider: ['splitButtonDivider'],
  };

  return composeClasses(slots, getSplitButtonUtilityClass, classes);
};

const SplitButtonRoot = styled('div', {
  name: 'ESSplitButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${splitButtonClasses.split}`]: styles.split },
      { [`& .${splitButtonClasses.split}`]: styles[`split${capitalize(ownerState.variant)}`] },
      {
        [`& .${splitButtonClasses.split}`]:
          styles[`split${capitalize(ownerState.variant)}${capitalize(ownerState.color)}`],
      },
      {
        [`& .${splitButtonClasses.firstButton}`]: styles.firstButton,
      },
      {
        [`& .${splitButtonClasses.lastButton}`]: styles.lastButton,
      },
      {
        [`& .${splitButtonClasses.middleButton}`]: styles.middleButton,
      },
      styles.root,
      styles[ownerState.variant],
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
})(({ theme }) => ({
  display: 'inline-flex',
  width: 'fit-content',
  borderRadius: 4,

  [`&.${splitButtonClasses.fullWidth}`]: {
    width: '100%',
  },

  [`& .${splitButtonClasses.firstButton},& .${splitButtonClasses.middleButton}`]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  [`& .${splitButtonClasses.lastButton},& .${splitButtonClasses.middleButton}`]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  [`&.${splitButtonClasses.outlined}`]: {
    boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A200}`,

    [`& .${splitButtonClasses.firstButton},& .${splitButtonClasses.middleButton},& .${splitButtonClasses.lastButton}`]:
      {
        boxShadow: 'none',

        [`&.${buttonBaseClasses.disabled}`]: {
          boxShadow: 'none',
        },
      },

    [`& .${splitButtonClasses.splitButtonDivider}`]: {
      color: theme.vars.palette.monoA.A200,
    },

    [`&.${splitButtonClasses.colorWhite}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`,

      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.white.A200,
      },
    },
    [`&.${splitButtonClasses.colorBlack}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A200}`,

      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.black.A200,
      },
    },
    [`&.${splitButtonClasses.colorMonoB}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,

      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.monoB.A200,
      },
    },
  },

  [`&.${splitButtonClasses.contained}`]: {
    [`&.${splitButtonClasses.colorPrimary}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.primary[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorSecondary}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.secondary[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorError}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.error[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorSuccess}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.success[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorTertiary}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.monoA.A100,
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorWhite}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.white[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.white.A75,
        },
      },
    },

    [`&.${splitButtonClasses.colorBlack}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.black[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.black.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
        },
      },
    },

    [`&.${splitButtonClasses.colorMonoB}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.monoB[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoB.A75,
        },
      },
    },

    [`&.${splitButtonClasses.colorMonoA}`]: {
      [`& .${splitButtonClasses.splitButtonDivider}`]: {
        color: theme.vars.palette.monoA[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${splitButtonClasses.disabled}`]: {
        [`& .${splitButtonClasses.splitButtonDivider}`]: {
          color: theme.vars.palette.monoB.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },
  },
}));

const SplitButtonDivider = styled(Divider, {
  name: 'ESSplitButtonDivider',
  slot: 'SplitButtonDivider',
  overridesResolver: (_props, styles) => styles.splitButtonDivider,
})<{ ownerState: SplitButtonOwnerState }>(() => ({
  variants: [
    {
      props: {
        variant: 'outlined',
      },
      style: {
        [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
          margin: '1px 0 1px 0',
        },
      },
    },
  ],
}));

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(function SplitButton(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESSplitButton' });
  const {
    children,
    className,
    color = 'primary',
    disabled = false,
    disableTouchRipple = false,
    fullWidth = false,
    size = '500',
    variant = 'outlined',
    ...other
  } = props;

  const ownerState = {
    ...props,
    color,
    disabled,
    disableTouchRipple,
    fullWidth,
    size,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;

  const getButtonPositionClassName = (index: number) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;

    if (isFirstButton && isLastButton) {
      return '';
    }

    if (isFirstButton) {
      return classes.firstButton;
    }

    if (isLastButton) {
      return classes.lastButton;
    }

    return classes.middleButton;
  };

  const shouldRenderDivider = (index: number) => {
    return childrenCount > 1 && index < childrenCount - 1 && (childrenCount !== 3 || index < 2);
  };

  return (
    <SplitButtonRoot ref={ref} className={clsx(classes.root, className)} role="split" {...other}>
      {validChildren.map((child, index) => (
        <>
          {cloneElement(child, {
            className: clsx(classes.split, getButtonPositionClassName(index), child.props.className),
            color,
            disabled,
            disableTouchRipple,
            fullWidth,
            size,
            variant,
          })}
          {shouldRenderDivider(index) && (
            <SplitButtonDivider
              flexItem
              className={classes.splitButtonDivider}
              orientation="vertical"
              ownerState={ownerState}
            />
          )}
        </>
      ))}
    </SplitButtonRoot>
  );
});
