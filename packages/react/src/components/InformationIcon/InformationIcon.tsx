import { forwardRef } from 'react';

import { InformationIconProps, InformationIconTypeMap } from './InformationIcon.types';

import clsx from 'clsx';
import { getInformationIconUtilityClass, informationIconClasses } from './InformationIcon.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { IconInformationFillW200, IconInformationLineW200, IconQuestionFill, IconQuestionLine } from '../../icons';

type InformationIconOwnerState = {
  classes?: InformationIconProps['classes'];
  variant: NonNullable<InformationIconProps['variant']>;
};

const useUtilityClasses = (ownerState: InformationIconOwnerState) => {
  const { classes, variant } = ownerState;

  const slots = {
    root: ['root', variant],
    icon: ['icon'],
    activeIcon: ['activeIcon'],
  };

  return composeClasses(slots, getInformationIconUtilityClass, classes);
};

const InformationIconRoot = styled('div', {
  name: 'ESInformationIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant },
    } = props;

    return [styles.root, styles[variant]];
  },
})<{ ownerState: InformationIconOwnerState }>(({ theme }) => ({
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  overflow: 'hidden',
  background: 'none',

  color: theme.vars.palette.monoA.A300,
  cursor: 'help',
  display: 'inline-flex',

  '&::-moz-focus-inner': {
    // Remove Firefox dotted outline.
    borderStyle: 'none',
  },

  '&:focus': {
    outline: 'none',
  },

  '& svg path:nth-of-type(2)': {
    color: theme.vars.palette.monoA.A400,
  },

  [`& .${informationIconClasses.activeIcon}`]: {
    display: 'none',
  },

  '&:hover, &:focus-visible, &[aria-describedby]': {
    [`& .${informationIconClasses.icon}`]: {
      display: 'none',
    },

    [`& .${informationIconClasses.activeIcon}`]: {
      display: 'inline-flex',
    },
  },

  variants: [
    {
      props: {
        variant: 'info',
      },
      style: {
        '&:hover, &:focus-visible, &[aria-describedby]': {
          color: theme.vars.palette.info[300],

          '& svg path:nth-of-type(2)': {
            fill: theme.vars.palette.monoB[500],
          },
        },
      },
    },
    {
      props: {
        variant: 'question',
      },
      style: {
        '&:hover, &:focus-visible, &[aria-describedby]': {
          color: theme.vars.palette.secondary[300],

          '& svg path:nth-of-type(2)': {
            fill: theme.vars.palette.monoB[500],
          },
        },
      },
    },
  ] as never,
})) as any;

const defaultIconMapping = {
  info: IconInformationLineW200,
  question: IconQuestionLine,
};

const defaultActiveIconMapping = {
  info: IconInformationFillW200,
  question: IconQuestionFill,
};

/**
 * This component is for displaying information icon.
 */
export const InformationIcon = forwardRef(function InformationIcon(
  inProps: InformationIconProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    component,
    classes: classesProp,
    className,
    sx,
    variant = 'info',
    iconMapping = defaultIconMapping,
    activeIconMapping = defaultActiveIconMapping,
    slotProps = {},

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESInformationIcon',
  });

  const ownerState = { classes: classesProp, variant };
  const classes = useUtilityClasses(ownerState);

  const Icon = iconMapping[variant];
  const ActiveIcon = activeIconMapping[variant];

  return (
    <InformationIconRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      sx={sx}
      tabIndex={0}
      {...props}
      as={component}
    >
      <Icon
        container
        containerSize="16px"
        {...slotProps.icon}
        className={clsx(classes.icon, slotProps.icon?.className)}
      />
      <ActiveIcon
        container
        containerSize="16px"
        {...slotProps.activeIcon}
        className={clsx(classes.activeIcon, slotProps.activeIcon?.className)}
      />
    </InformationIconRoot>
  );
}) as OverridableComponent<InformationIconTypeMap>;
