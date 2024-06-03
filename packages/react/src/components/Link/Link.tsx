import { LinkProps, LinkTypeMap } from './Link.types';

import clsx from 'clsx';
import { getLinkUtilityClass, linkClasses } from './Link.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

import PropTypes from 'prop-types';

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

  const display = !!ownerState.startIcon || !!ownerState.endIcon ? 'inline-flex' : 'inline';

  return {
    position: 'relative',
    display,
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
        color: theme.vars.palette.common.linkVisited
      }
    }),

    [`& .${linkClasses.children}`]: {
      textDecorationStyle: 'solid',
      textDecorationColor: 'color-mix(in srgb, currentColor 40%, transparent)',

      ...(ownerState.underline === 'always' && {
        textDecorationLine: 'underline'
      })
    },

    '&:hover': {
      [`& .${linkClasses.children}`]: {
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
        border: `2px solid ${theme.vars.palette.monoA.A700}`,
        zIndex: 1
      },

      [`& .${linkClasses.children}`]: {
        textDecorationLine: 'none'
      }
    },

    '&:active': {
      [`& .${linkClasses.children}`]: {
        textDecorationLine: 'none'
      }
    },

    '&:disabled': {
      color: theme.vars.palette.monoA.A400,
      cursor: 'not-allowed',
      [`& .${linkClasses.children}`]: {
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

//@ts-expect-error: Property 'propTypes' does not exist on type OverridableComponent
Link.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object
  ]),

  /** Element placed before the children. */
  startIcon: PropTypes.node,
  /** Element placed after the children. */
  endIcon: PropTypes.node,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: PropTypes.oneOfType([PropTypes.oneOf(['none', 'hover', 'always']), PropTypes.string]),
  /** Whether the link should show visited state. */
  showVisited: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      'body1',
      'body2',
      'button',
      'caption',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'inherit',
      'overline',
      'subtitle1',
      'subtitle2'
    ]),
    PropTypes.string
  ])
};
