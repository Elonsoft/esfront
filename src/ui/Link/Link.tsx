import { LinkProps, LinkTypeMap } from './Link.types';

import clsx from 'clsx';
import { getLinkUtilityClass } from './Link.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { alpha, styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

type LinkOwnerState = {
  classes?: LinkProps['classes'];
  variant?: LinkProps['variant'];
  color?: LinkProps['color'];
  underline?: LinkProps['underline'];
  showVisited?: LinkProps['showVisited'];
  startIcon?: LinkProps['startIcon'];
  endIcon?: LinkProps['endIcon'];
};

export function getPath<P>(obj: any, path: string): P | null {
  return path.split('.').reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

const useUtilityClasses = (ownerState: LinkOwnerState) => {
  const { classes, variant, underline, showVisited, startIcon, endIcon } = ownerState;

  const slots = {
    root: [
      'root',
      `underline${capitalize(underline || '')}`,
      variant === 'inherit' && 'inherit',
      !!showVisited && 'showVisited',
      !!startIcon && 'startIcon',
      !!endIcon && 'endIcon'
    ],
    icon: ['icon'],
    children: ['children']
  };

  return composeClasses(slots, getLinkUtilityClass, classes);
};

const LinkRoot = styled(Typography, {
  name: 'ESLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant, underline, showVisited, startIcon, endIcon }
    } = props;
    return [
      styles.root,
      styles[`underline${capitalize(underline || '')}`],
      variant === 'inherit' && styles.inherit,
      !!showVisited && styles.showVisited,
      !!startIcon && styles.startIcon,
      !!endIcon && styles.endIcon
    ];
  }
})<{ ownerState: LinkOwnerState }>(({ theme, ownerState }) => {
  const color = getPath<string>(theme, `palette.${ownerState.color}`) || (ownerState.color as string);

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'baseline',
    textDecorationLine: 'none',
    color,

    fontFamily: 'inherit',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    '&::-moz-focus-inner': {
      borderStyle: 'none'
    },

    ...(ownerState.variant === 'inherit' && {
      textDecorationThickness: 'inherit'
    }),

    ...(!!ownerState.showVisited && {
      '&:visited': {
        color: theme.palette.common.linkVisited,

        '& .ESLink-children': {
          textDecorationColor: alpha(theme.palette.common.linkVisited, 0.4)
        }
      }
    }),

    '& .ESLink-children': {
      textDecorationStyle: 'solid',
      textDecorationColor: color !== 'inherit' ? alpha(color, 0.4) : undefined,

      ...(ownerState.underline === 'always' && {
        textDecorationLine: 'underline'
      })
    },

    '&:hover': {
      '& .ESLink-children': {
        ...(ownerState.underline === 'hover' && {
          textDecorationLine: 'underline'
        }),
        textDecorationStyle: 'solid',
        textDecorationColor: 'inherit'
      }
    },

    '&:focus': {
      outline: 'none'
    },

    '&:focus-visible': {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-1px',
        bottom: '-1px',
        left: ownerState.startIcon ? '-1px' : '-4px',
        right: ownerState.endIcon ? '-1px' : '-4px',
        border: `2px solid ${theme.palette.monoA.A700}`,
        zIndex: 1
      },

      '& .ESLink-children': {
        textDecorationLine: 'none'
      }
    },

    '&:active': {
      '& .ESLink-children': {
        textDecorationLine: 'none'
      }
    },

    '&:disabled': {
      color: theme.palette.monoA.A400,
      cursor: 'not-allowed',
      '& .ESLink-children': {
        textDecorationLine: 'none'
      }
    }
  };
});

const LinkIcon = styled('span', {
  name: 'ESLink',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(() => ({
  display: 'inline-flex',
  alignSelf: 'center'
}));

const LinkChildren = styled('span', {
  name: 'ESLink',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.children
})(() => ({
  textDecorationThickness: 'inherit'
}));

export const Link: OverridableComponent<LinkTypeMap> = (inProps: LinkProps) => {
  const {
    children,
    className,
    sx,
    startIcon,
    endIcon,
    variant = 'inherit',
    color = 'common.link',
    underline = 'always',
    showVisited,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESLink'
  });

  const ownerState = { startIcon, endIcon, variant, color, underline, showVisited, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <LinkRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} variant={variant} {...props}>
      {!!startIcon && <LinkIcon className={classes.icon}>{startIcon}</LinkIcon>}
      <LinkChildren className={classes.children}>{children}</LinkChildren>
      {!!endIcon && <LinkIcon className={classes.icon}>{endIcon}</LinkIcon>}
    </LinkRoot>
  );
};
