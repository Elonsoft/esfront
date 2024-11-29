import { forwardRef, useState } from 'react';

import { InformationIconProps } from './InformationIcon.types';

import clsx from 'clsx';
import { getInformationIconUtilityClass, informationIconClasses } from './InformationIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconInformationFillW200, IconInformationLineW200, IconQuestionFill, IconQuestionLine } from '../../icons';

type InformationIconOwnerState = {
  classes?: InformationIconProps['classes'];
  variant: 'info' | 'question';
  isActive?: boolean;
};

const useUtilityClasses = (ownerState: InformationIconOwnerState) => {
  const { classes, variant, isActive } = ownerState;

  const slots = {
    root: ['root', `${variant}`, isActive && 'active'],
    icon: ['icon'],
  };

  return composeClasses(slots, getInformationIconUtilityClass, classes);
};

const InformationIconRoot = styled('div', {
  name: 'ESAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant, isActive },
    } = props;

    return [styles.root, styles[variant], isActive && styles.active];
  },
})<{ ownerState: InformationIconOwnerState }>(({ theme, ownerState }) => ({
  width: '24px',
  cursor: 'pointer',
  color: theme.vars.palette.monoA.A300,

  '& svg path': {
    ':nth-of-type(2)': {
      color: theme.vars.palette.monoA.A400,
    },
  },

  [`&.${informationIconClasses.info}`]: {
    '&:hover, &:active, &:focus': {
      color: theme.vars.palette.info[300],
    },
  },
  [`&.${informationIconClasses.question}`]: {
    '&:hover, &:active, &:focus': {
      color: theme.vars.palette.secondary[300],
    },
  },

  ...(ownerState.isActive && {
    [`&.${informationIconClasses.info}`]: {
      color: theme.vars.palette.info[300],
    },

    [`&.${informationIconClasses.question}`]: {
      color: theme.vars.palette.secondary[300],
    },
  }),
}));

/**
 * This component is for displaying InformationIcon.
 */
export const InformationIcon = forwardRef(function InformationIcon(
  inProps: InformationIconProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    className,
    sx,
    variant = 'info',
    SvgIconProps,
    onClick,
    isActive,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESInformationIcon',
  });

  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const ownerState = { ...props, variant, isActive };
  const classes = useUtilityClasses(ownerState);

  const IconFill = variant === 'info' ? IconInformationFillW200 : IconQuestionFill;
  const IconState = variant === 'info' ? IconInformationLineW200 : IconQuestionLine;
  const Icon = isHovered || isFocused || isActive ? IconFill : IconState;

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setFocused(false);
    }
  };

  return (
    <InformationIconRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      sx={sx}
      {...props}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon {...SvgIconProps} className={clsx(classes.icon, SvgIconProps?.className)} />
    </InformationIconRoot>
  );
});
