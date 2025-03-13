import { forwardRef } from 'react';

import { InformationIconProps, InformationIconTypeMap } from './InformationIcon.types';

import clsx from 'clsx';
import { getInformationIconUtilityClass, informationIconClasses } from './InformationIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { IconInformationFillW200, IconInformationLineW200, IconQuestionFill, IconQuestionLine } from '../../icons';

type InformationIconOwnerState = {
  classes?: InformationIconProps['classes'];
  variant: NonNullable<InformationIconProps['variant']>;
};

const useUtilityClasses = (ownerState: InformationIconOwnerState) => {
  const { classes, variant } = ownerState;

  const slots = {
    root: ['root', `${variant}`],
    icon: ['icon'],
    activeIcon: ['activeIcon'],
  };

  return composeClasses(slots, getInformationIconUtilityClass, classes);
};

const InformationIconRoot = styled('div', {
  name: 'ESAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant },
    } = props;

    return [styles.root, styles[variant]];
  },
})<{ ownerState: InformationIconOwnerState }>(({ theme }) => ({
  color: theme.vars.palette.monoA.A300,
  cursor: 'pointer',
  display: 'inline-flex',
  width: '24px',
  height: '24px',

  '&:focus': {
    outline: 'none',
  },

  '& svg path': {
    ':nth-of-type(2)': {
      color: theme.vars.palette.monoA.A400,
    },
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
        },
      },
    },
  ],
}));

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
    className,
    sx,
    variant = 'info',
    iconMapping = defaultIconMapping,
    activeIconMapping = defaultActiveIconMapping,
    SvgIconProps,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESInformationIcon',
  });

  const ownerState = { ...props, variant };
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
    >
      <Icon {...SvgIconProps} className={clsx(classes.icon, SvgIconProps?.className)} />
      <ActiveIcon {...SvgIconProps} className={clsx(classes.activeIcon, SvgIconProps?.className)} />
    </InformationIconRoot>
  );
}) as OverridableComponent<InformationIconTypeMap>;
