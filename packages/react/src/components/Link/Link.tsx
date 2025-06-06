import { LinkProps, LinkTypeMap } from './Link.types';

import clsx from 'clsx';
import { getLinkUtilityClass, linkClasses } from './Link.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';
import { styled, useTheme } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type LinkOwnerState = {
  classes?: LinkProps['classes'];
  variant?: LinkProps['variant'];
  underline?: LinkProps['underline'];
  showVisited?: LinkProps['showVisited'];
  startIcon?: boolean;
  endIcon?: boolean;
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
      !!endIcon && 'endIcon',
    ],
    icon: ['icon'],
    children: ['children'],
  };

  return composeClasses(slots, getLinkUtilityClass, classes);
};

const LinkRoot = styled(Typography, {
  name: 'ESLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant, underline, showVisited, startIcon, endIcon },
    } = props;
    return [
      styles.root,
      styles[`underline${capitalize(underline || '')}`],
      variant === 'inherit' && styles.inherit,
      !!showVisited && styles.showVisited,
      !!startIcon && styles.startIcon,
      !!endIcon && styles.endIcon,
    ];
  },
})<{ ownerState: LinkOwnerState }>(({ theme }) => ({
  position: 'relative',
  display: 'inline',
  alignItems: 'baseline',
  textDecorationLine: 'none',
  color: 'var(--ESLink-color)',

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
    borderStyle: 'none',
  },

  '&:hover': {
    [`& .${linkClasses.children}`]: {
      textDecorationStyle: 'solid',
      textDecorationColor: 'inherit',
    },
  },

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible': {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-1px',
      bottom: '-1px',
      left: '-4px',
      right: '-4px',
      border: `2px solid ${theme.vars.palette.monoA[500]}`,
      borderRadius: '4px',
      zIndex: 1,
    },

    [`& .${linkClasses.children}`]: {
      textDecorationLine: 'none',
    },
  },

  '&:active': {
    [`& .${linkClasses.children}`]: {
      textDecorationLine: 'none',
    },
  },

  '&:disabled': {
    color: theme.vars.palette.monoA.A400,
    cursor: 'not-allowed',

    [`& .${linkClasses.children}`]: {
      textDecorationLine: 'none',
    },
  },

  variants: [
    {
      props: {
        endIcon: true,
      },
      style: {
        display: 'inline-flex',
      },
    },
    {
      props: {
        startIcon: true,
      },
      style: {
        display: 'inline-flex',
      },
    },
    {
      props: {
        variant: 'inherit',
      },
      style: {
        textDecorationThickness: 'inherit',
      },
    },
    {
      props: {
        showVisited: true,
      },
      style: {
        '&:visited': {
          color: theme.vars.palette.common.linkVisited,
        },
      },
    },
    {
      props: {
        underline: 'always',
      },
      style: {
        [`& .${linkClasses.children}`]: {
          textDecorationLine: 'underline',
        },
      },
    },
    {
      props: {
        underline: 'hover',
      },
      style: {
        '&:hover': {
          [`& .${linkClasses.children}`]: {
            textDecorationLine: 'underline',
          },
        },
      },
    },
    {
      props: {
        startIcon: true,
      },
      style: {
        '&:focus-visible': {
          '&::after': {
            left: '-1px',
          },
        },
      },
    },
    {
      props: {
        endIcon: true,
      },
      style: {
        '&:focus-visible': {
          '&::after': {
            right: '-1px',
          },
        },
      },
    },
  ],
}));

const LinkIcon = styled('span', {
  name: 'ESLink',
  slot: 'Icon',
  overridesResolver: (_props, styles) => styles.icon,
})({
  display: 'inline-flex',
  alignSelf: 'center',
});

const LinkChildren = styled('span', {
  name: 'ESLink',
  slot: 'Children',
  overridesResolver: (_props, styles) => styles.children,
})({
  textDecorationColor: 'color-mix(in srgb, currentColor 40%, transparent)',
  textDecorationStyle: 'solid',
  textDecorationThickness: 'inherit',
});

/**
 * The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
 */
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
  } = useDefaultProps({
    props: inProps,
    name: 'ESLink',
  });

  const theme = useTheme();

  const ownerState = { startIcon: !!startIcon, endIcon: !!endIcon, variant, underline, showVisited, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <LinkRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      style={
        {
          '--ESLink-color': getPath<string>(theme, `palette.${color}`) || (color as string),
        } as React.CSSProperties
      }
      sx={sx}
      variant={variant}
      {...props}
    >
      {!!startIcon && <LinkIcon className={classes.icon}>{startIcon}</LinkIcon>}
      <LinkChildren className={classes.children}>{children}</LinkChildren>
      {!!endIcon && <LinkIcon className={classes.icon}>{endIcon}</LinkIcon>}
    </LinkRoot>
  );
};
