import { DividerProps } from './Divider.types';

import clsx from 'clsx';
import { getDividerUtilityClass } from './Divider.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize } from '@mui/material/utils';
import { styled, useTheme } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type DividerOwnerState = {
  classes?: DividerProps['classes'];
  orientation: NonNullable<DividerProps['orientation']>;
  textAlign: NonNullable<DividerProps['textAlign']>;
  flexItem: DividerProps['flexItem'];
  withChildren: boolean;
};

function getPath<P>(obj: any, path: string): P | null {
  return path.split('.').reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

const useUtilityClasses = (ownerState: DividerOwnerState) => {
  const { classes, orientation, textAlign, flexItem, withChildren } = ownerState;

  const slots = {
    root: [
      'root',
      orientation,
      `textAlign${capitalize(textAlign)}`,
      flexItem && 'flexItem',
      withChildren && 'withChildren',
    ],
    wrapper: ['wrapper'],
  };

  return composeClasses(slots, getDividerUtilityClass, classes);
};

const DividerRoot = styled('div', {
  name: 'ESDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation, textAlign, flexItem, withChildren },
    } = props;

    return [
      styles.root,
      styles[orientation],
      styles[`textAlign${capitalize(textAlign)}`],
      flexItem && styles.flexItem,
      withChildren && styles.withChildren,
    ];
  },
})<{ ownerState: DividerOwnerState }>({
  flexShrink: 0,
  color: 'var(--ESDivider-color)',

  variants: [
    {
      props: {
        withChildren: false,
      },
      style: {
        backgroundColor: 'currentColor',
      },
    },
    {
      props: {
        withChildren: false,
        orientation: 'horizontal',
      },
      style: {
        height: 'var(--ESDivider-width)',
      },
    },
    {
      props: {
        withChildren: false,
        orientation: 'vertical',
      },
      style: {
        height: '100%',
        width: 'var(--ESDivider-width)',
      },
    },

    {
      props: {
        withChildren: true,
      },
      style: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '12px',

        '&::before, &::after': {
          backgroundColor: 'currentColor',
          content: '""',
          display: 'block',
          flex: 1,
        },
      },
    },
    {
      props: {
        withChildren: true,
        orientation: 'horizontal',
      },
      style: {
        flexDirection: 'row',

        '&::before, &::after': {
          height: 'var(--ESDivider-width)',
        },
      },
    },
    {
      props: {
        withChildren: true,
        orientation: 'vertical',
      },
      style: {
        flexDirection: 'column',
        height: '100%',

        '&::before, &::after': {
          width: 'var(--ESDivider-width)',
        },
      },
    },
    {
      props: {
        withChildren: true,
        textAlign: 'start',
      },
      style: {
        '&::before': {
          content: 'unset',
        },
      },
    },
    {
      props: {
        withChildren: true,
        textAlign: 'end',
      },
      style: {
        '&::after': {
          content: 'unset',
        },
      },
    },

    {
      props: {
        orientation: 'vertical',
        flexItem: true,
      },
      style: {
        alignSelf: 'stretch',
        height: 'auto',
      },
    },
  ],
});

const DividerWrapper = styled('span', {
  name: 'ESDivider',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper,
})(({ theme }) => ({
  ...theme.typography.caption,
  display: 'inline-block',
  color: theme.vars.palette.monoA.A700,
}));

/**
 * The Divider is a thin line that groups content in lists and layouts.
 */
export const Divider = (inProps: DividerProps) => {
  const {
    className,
    children,
    sx,
    color = 'monoA.A100',
    width = 1,
    orientation = 'horizontal',
    textAlign = 'center',
    flexItem,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESDivider',
  });

  const theme = useTheme();

  const ownerState = { ...props, orientation, textAlign, flexItem, withChildren: !!children };
  const classes = useUtilityClasses(ownerState);

  return (
    <DividerRoot
      className={clsx(className, classes.root)}
      ownerState={ownerState}
      style={
        {
          '--ESDivider-color': getPath<string>(theme, `palette.${color}`) || (color as string),
          '--ESDivider-width': `${width}px`,
        } as React.CSSProperties
      }
      sx={sx}
    >
      {children ? <DividerWrapper className={classes.wrapper}>{children}</DividerWrapper> : null}
    </DividerRoot>
  );
};

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
Divider.muiSkipListHighlight = true;
