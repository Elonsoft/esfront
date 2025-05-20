import { forwardRef } from 'react';

import { ExtendButtonBase } from '../ButtonBase/ButtonBase.types';
import { ButtonOwnProps, ButtonTypeMap } from './Button.types';

import clsx from 'clsx';
import { buttonClasses, getButtonUtilityClass } from './Button.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { ButtonBase, buttonBaseClasses } from '../ButtonBase';
import { svgIconClasses } from '../SvgIcon';

type ButtonOwnerState = {
  classes: ButtonOwnProps['classes'];
  fullWidth: ButtonOwnProps['fullWidth'];

  color: NonNullable<ButtonOwnProps['color']>;
  size: NonNullable<ButtonOwnProps['size']>;
  variant: NonNullable<ButtonOwnProps['variant']>;
  rounded: NonNullable<ButtonOwnProps['rounded']>;
};

const useUtilityClasses = (ownerState: ButtonOwnerState) => {
  const { classes, fullWidth, color, size, variant, rounded } = ownerState;

  const slots = {
    variables: ['variables', `variablesSize${capitalize(size)}`],
    root: [
      'root',
      fullWidth && 'fullWidth',
      rounded && 'rounded',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`,
    ],
    startIcon: ['icon', 'startIcon'],
    endIcon: ['icon', 'endIcon'],
  };

  return composeClasses(slots, getButtonUtilityClass, classes);
};

const ButtonVariables = styled('div', {
  name: 'ESButton',
  slot: 'Variables',
  overridesResolver: (props, styles) => styles.variables,
})({
  display: 'contents',

  [`&.${buttonClasses.variablesSize100} `]: {
    '--size': '100',
  },
  [`&.${buttonClasses.variablesSize200} `]: {
    '--size': '200',
  },
  [`&.${buttonClasses.variablesSize300} `]: {
    '--size': '300',
  },
  [`&.${buttonClasses.variablesSize400} `]: {
    '--size': '400',
  },
  [`&.${buttonClasses.variablesSize500} `]: {
    '--size': '500',
  },
  [`&.${buttonClasses.variablesSize600} `]: {
    '--size': '600',
  },
  [`&.${buttonClasses.variablesSize700} `]: {
    '--size': '700',
  },
  [`&.${buttonClasses.variablesSize800} `]: {
    '--size': '800',
  },
  [`&.${buttonClasses.variablesSize900} `]: {
    '--size': '900',
  },
  [`&.${buttonClasses.variablesSize1000} `]: {
    '--size': '1000',
  },
});

const ButtonRoot = styled(ButtonBase, {
  name: 'ESButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { fullWidth, color, size, variant, rounded },
    } = props;

    return [
      styles.root,
      fullWidth && styles.fullWidth,
      rounded && styles.rounded,
      styles[`color${capitalize(color)}`],
      styles[`size${capitalize(size)}`],
      styles[`variant${capitalize(variant)}`],
    ];
  },
})<{ ownerState: ButtonOwnerState }>(({ theme }) => ({
  ...theme.typography.button,
  borderRadius: '4px',
  textTransform: 'uppercase',
  '--icon': 'var(--text)',

  [`&.${buttonClasses.fullWidth}`]: {
    width: '100%',
    '--text': theme.vars.palette.monoA.A400,
  },

  [`&.${buttonBaseClasses.disabled}`]: {
    cursor: 'not-allowed',
  },

  [`& .${svgIconClasses.root}`]: {
    color: 'var(--icon)',
  },

  [`&.${buttonClasses.variantContained}`]: {
    '--hovered': theme.vars.palette.monoB.A150,
    '--pressed': theme.vars.palette.monoB.A300,

    [`&.${buttonClasses.colorTertiary}`]: {
      '--background': theme.vars.palette.monoA.A100,
      '--text': theme.vars.palette.monoA.A800,
      '--hovered': theme.vars.palette.monoA.A100,
      '--pressed': theme.vars.palette.monoA.A200,
    },
    [`&.${buttonClasses.colorPrimary}`]: {
      '--background': theme.vars.palette.primary[300],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--background': theme.vars.palette.secondary[300],
      '--text': theme.vars.palette.black[500],
      '--hovered': theme.vars.palette.black.A100,
      '--pressed': theme.vars.palette.black.A200,
    },
    [`&.${buttonClasses.colorInfo}`]: {
      '--background': theme.vars.palette.info[300],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorWarning}`]: {
      '--background': theme.vars.palette.warning[300],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorError}`]: {
      '--background': theme.vars.palette.error[300],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--background': theme.vars.palette.success[300],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--background': theme.vars.palette.monoA[500],
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A150,
      '--pressed': theme.vars.palette.monoB.A300,
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--background': theme.vars.palette.monoB[500],
      '--text': theme.vars.palette.monoA[500],
      '--hovered': theme.vars.palette.monoA.A100,
      '--pressed': theme.vars.palette.monoA.A200,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.vars.palette.monoB.A75,
        '--text': theme.vars.palette.monoA.A400,
        '--icon': theme.vars.palette.monoA.A400,
      },
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--background': theme.vars.palette.white[500],
      '--text': theme.vars.palette.black[500],
      '--hovered': theme.vars.palette.black.A100,
      '--pressed': theme.vars.palette.black.A200,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.vars.palette.white.A75,
        '--text': theme.vars.palette.black.A400,
        '--icon': theme.vars.palette.black.A400,
      },
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--background': theme.vars.palette.black[500],
      '--text': theme.vars.palette.white[500],
      '--hovered': theme.vars.palette.white.A150,
      '--pressed': theme.vars.palette.white.A300,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.vars.palette.black.A75,
        '--text': theme.vars.palette.black.A400,
        '--icon': theme.vars.palette.black.A400,
      },
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--background': theme.vars.palette.monoA.A75,
      '--text': theme.vars.palette.monoA.A400,
      '--icon': theme.vars.palette.monoA.A400,
    },
  },

  [`&.${buttonClasses.variantOutlined}`]: {
    '--background': 'transparent',
    boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A200}`,

    [`&.${buttonClasses.colorPrimary}`]: {
      '--text': theme.vars.palette.primary[300],
      '--hovered': theme.vars.palette.primary.A50,
      '--pressed': theme.vars.palette.primary.A150,
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--text': theme.vars.palette.secondary[400],
      '--hovered': theme.vars.palette.secondary.A50,
      '--pressed': theme.vars.palette.secondary.A150,
    },
    [`&.${buttonClasses.colorTertiary}`]: {
      '--text': theme.vars.palette.monoA.A700,
      '--hovered': theme.vars.palette.monoA.A50,
      '--pressed': theme.vars.palette.monoA.A150,
    },
    [`&.${buttonClasses.colorInfo}`]: {
      '--text': theme.vars.palette.info[300],
      '--hovered': theme.vars.palette.info.A50,
      '--pressed': theme.vars.palette.info.A150,
    },
    [`&.${buttonClasses.colorWarning}`]: {
      '--text': theme.vars.palette.warning[300],
      '--hovered': theme.vars.palette.warning.A50,
      '--pressed': theme.vars.palette.warning.A150,
    },
    [`&.${buttonClasses.colorError}`]: {
      '--text': theme.vars.palette.error[300],
      '--hovered': theme.vars.palette.error.A50,
      '--pressed': theme.vars.palette.error.A150,
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--text': theme.vars.palette.success[300],
      '--hovered': theme.vars.palette.success.A50,
      '--pressed': theme.vars.palette.success.A150,
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--text': theme.vars.palette.monoA[500],
      '--hovered': theme.vars.palette.monoA.A50,
      '--pressed': theme.vars.palette.monoA.A150,
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A50,
      '--pressed': theme.vars.palette.monoB.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.monoB.A400,
        '--icon': theme.vars.palette.monoB.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A150}`,
      },
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--text': theme.vars.palette.white[500],
      '--hovered': theme.vars.palette.white.A50,
      '--pressed': theme.vars.palette.white.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.white.A400,
        '--icon': theme.vars.palette.white.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A150}`,
      },
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--background': 'transparent',
      '--text': theme.vars.palette.black[500],
      '--hovered': theme.vars.palette.black.A50,
      '--pressed': theme.vars.palette.black.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.black.A400,
        '--icon': theme.vars.palette.black.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A150}`,
      },
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--text': theme.vars.palette.monoA.A400,
      '--icon': theme.vars.palette.monoA.A400,
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A150}`,
    },
  },

  [`&.${buttonClasses.variantText}`]: {
    '--background': 'transparent',

    [`&.${buttonClasses.colorPrimary}`]: {
      '--text': theme.vars.palette.primary[300],
      '--hovered': theme.vars.palette.primary.A50,
      '--pressed': theme.vars.palette.primary.A150,
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--text': theme.vars.palette.secondary[400],
      '--hovered': theme.vars.palette.secondary.A50,
      '--pressed': theme.vars.palette.secondary.A150,
    },
    [`&.${buttonClasses.colorError}`]: {
      '--text': theme.vars.palette.error[300],
      '--hovered': theme.vars.palette.error.A50,
      '--pressed': theme.vars.palette.error.A150,
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--text': theme.vars.palette.success[300],
      '--hovered': theme.vars.palette.success.A50,
      '--pressed': theme.vars.palette.success.A150,
    },
    [`&.${buttonClasses.colorTertiary}`]: {
      '--text': theme.vars.palette.monoA.A700,
      '--hovered': theme.vars.palette.monoA.A50,
      '--pressed': theme.vars.palette.monoA.A150,
    },
    [`&.${buttonClasses.colorInfo}`]: {
      '--text': theme.vars.palette.info[300],
      '--hovered': theme.vars.palette.info.A50,
      '--pressed': theme.vars.palette.info.A150,
    },
    [`&.${buttonClasses.colorWarning}`]: {
      '--text': theme.vars.palette.warning[300],
      '--hovered': theme.vars.palette.warning.A50,
      '--pressed': theme.vars.palette.warning.A150,
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--text': theme.vars.palette.monoA[500],
      '--hovered': theme.vars.palette.monoA.A50,
      '--pressed': theme.vars.palette.monoA.A150,
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--text': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A50,
      '--pressed': theme.vars.palette.monoB.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.monoB.A400,
        '--icon': theme.vars.palette.monoB.A400,
      },
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--text': theme.vars.palette.white[500],
      '--hovered': theme.vars.palette.white.A50,
      '--pressed': theme.vars.palette.white.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.white.A400,
        '--icon': theme.vars.palette.white.A400,
      },
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--text': theme.vars.palette.black[500],
      '--hovered': theme.vars.palette.black.A50,
      '--pressed': theme.vars.palette.black.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.vars.palette.black.A400,
        '--icon': theme.vars.palette.black.A400,
      },
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--text': theme.vars.palette.monoA.A400,
      '--icon': theme.vars.palette.monoA.A400,
    },
  },
  [`&.${buttonClasses.rounded} `]: {
    [`@container style(--size: 100)`]: {
      borderRadius: '16px',
    },
    [`@container style(--size: 200)`]: {
      borderRadius: '20px',
    },
    [`@container style(--size: 300)`]: {
      borderRadius: '24px',
    },
    [`@container style(--size: 400)`]: {
      borderRadius: '32px',
    },
    [`@container style(--size: 500)`]: {
      borderRadius: '40px',
    },
    [`@container style(--size: 600)`]: {
      borderRadius: '48px',
    },
    [`@container style(--size: 700)`]: {
      borderRadius: '56px',
    },
    [`@container style(--size: 800)`]: {
      borderRadius: '64px',
    },
    [`@container style(--size: 900)`]: {
      borderRadius: '72px',
    },
    [`@container style(--size: 1000)`]: {
      borderRadius: '80px',
    },
  },

  [`@container style(--size: 100)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.mini100,
      fontWeight: 400,
      height: 16,
      padding: '0 6px',
      textTransform: 'none',

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -2,
        marginRight: 2,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 2,
        marginRight: -2,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`@container style(--size: 200)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.caption,
      fontWeight: 400,
      height: 20,
      padding: '0 8px',
      textTransform: 'none',

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -2,
        marginRight: 2,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 2,
        marginRight: -2,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -6px',
      },
    },

    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 6px',

      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`@container style(--size: 300)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.body100,
      fontWeight: 400,
      height: 24,
      padding: '0 8px',
      textTransform: 'none',

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -2,
        marginRight: 2,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 2,
        marginRight: -2,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -6px',
      },
    },

    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 6px',

      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`@container style(--size: 400)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.body100,
      height: 32,
      padding: '0 12px',
      textTransform: 'none',

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 4,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 4,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -8px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& > .${svgIconClasses.root}`]: {
        margin: -4,
      },
    },
  },
  [`@container style(--size: 500)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 40,
      padding: '0 16px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -8px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& > .${svgIconClasses.root}`]: {
        margin: 0,
      },
    },
  },
  [`@container style(--size: 600)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 48,
      padding: '0 16px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 4px',
      },
    },
  },
  [`@container style(--size: 700)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 56,
      padding: '0 20px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 4px',
      },
    },
  },
  [`@container style(--size: 800)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 64,
      padding: '0 30px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -10px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 8px',
      },
    },
  },
  [`@container style(--size: 900)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 72,
      padding: '0 34px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -10px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 12px',
      },
    },
  },
  [`@container style(--size: 1000)`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 80,
      padding: '0 36px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8,
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4,
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -8px',
      },
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 16px',
      },
    },
  },
}));

const ButtonStartIcon = styled('span', {
  name: 'ESButton',
  slot: 'StartIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.startIcon],
})(() => ({
  display: 'inherit',
  color: 'var(--icon)',
}));

const ButtonEndIcon = styled('span', {
  name: 'ESButton',
  slot: 'EndIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.endIcon],
})(() => ({
  display: 'inherit',
  color: 'var(--icon)',
}));

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef(function Button(inProps, ref) {
  const {
    children,
    classes: inClasses,
    className,
    sx,
    fullWidth,
    color = 'tertiary',
    size = '500',
    variant = 'text',
    rounded = false,
    startIcon,
    endIcon,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESButton',
  });

  const ownerState = { classes: inClasses, fullWidth, color, size, variant, rounded };
  const classes = useUtilityClasses(ownerState);

  return (
    <ButtonVariables className={classes.variables}>
      <ButtonRoot ref={ref as any} className={clsx(className, classes.root)} ownerState={ownerState} sx={sx} {...props}>
        {startIcon && <ButtonStartIcon className={classes.startIcon}>{startIcon}</ButtonStartIcon>}
        {children}
        {endIcon && <ButtonEndIcon className={classes.endIcon}>{endIcon}</ButtonEndIcon>}
      </ButtonRoot>
    </ButtonVariables>
  );
}) as ExtendButtonBase<ButtonTypeMap>;
