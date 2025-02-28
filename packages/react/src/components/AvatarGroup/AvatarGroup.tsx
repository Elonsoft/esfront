import React from 'react';

import { AvatarGroupProps } from './AvatarGroup.types';

import clsx from 'clsx';
import { avatarGroupClasses, getAlertUtilityClass } from './AvatarGroup.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

import { getCuttingOffset } from './AvatarGroup.utils';

type AvatarGroupOwnerState = {
  classes?: AvatarGroupProps['classes'];
  size?: number;
  direction?: AvatarGroupProps['direction'];
  spacing?: number;
  cutoutWidth?: number;
};

const useUtilityClasses = (ownerState: AvatarGroupOwnerState) => {
  const { classes, direction } = ownerState;

  const slots = {
    root: ['root', direction],
    avatar: ['avatar'],
  };

  return composeClasses(slots, getAlertUtilityClass, classes);
};

const AvatarGroupRoot = styled('div', {
  name: 'ESAvatarGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => [styles.root, styles[props.ownerState.direction]],
})<{ ownerState: AvatarGroupOwnerState }>(
  ({ ownerState: { spacing = -6, size = 32, direction = 'rtl', cutoutWidth = 2 } }) => ({
    display: 'flex',

    [`& .${avatarGroupClasses.avatar}`]: {
      width: `${size}px`,
      height: `${size}px`,

      '&:not(:nth-of-type(1))': {
        marginLeft: `${spacing}px`,
      },

      '& > *': {
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      },

      [`&:not(:${direction === 'ltr' ? 'first' : 'last'}-of-type)`]: {
        // safari
        '@supports selector(:nth-child(1 of x))': {
          overflow: 'visible',
        },

        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'%3E%3Ccircle cx='${
          size / 2
        }' cy='${size / 2}' r='${
          size / 2
        }' fill='black' /%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'%3E%3Ccircle cx='${
          size / 2
        }' cy='${size / 2}' fill='white' r='${size / 2}'/%3E%3C/svg%3E")`,
        WebkitMaskSize: `${cutoutWidth === 0 ? size : size + cutoutWidth * 2}px, ${size}px`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: `${getCuttingOffset(size, direction, spacing, cutoutWidth)}, center`,

        // safari ios
        '@supports (-webkit-touch-callout: none)': {
          maskComposite: 'exclude',
        },

        // firefox chrome safari
        '@supports (not (-webkit-touch-callout: none))': {
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },

        // firefox
        '@supports ( -moz-appearance:none )': {
          WebkitMaskSize: `${+size + cutoutWidth * 2}px, ${+size + 0.5}px`,
        },

        // chrome safari
        '@supports (not( -moz-appearance:none ))': {
          WebkitMaskSize: `${+size + cutoutWidth * 2}px, ${+size}px`,
        },
      },
    },
  })
);

/**
 * AvatarGroup renders its children as a stack.
 */
export const AvatarGroup = (inProps: AvatarGroupProps) => {
  const {
    className,
    children,
    direction = 'rtl',
    spacing = -6,
    cutoutWidth = 2,
    size = 32,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAvatarGroup',
  });

  const ownerState = { ...props, spacing, direction, cutoutWidth, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <AvatarGroupRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {React.Children.map(children, (child: any, i: number) => (
        <div key={i} className={avatarGroupClasses.avatar}>
          {child}
        </div>
      ))}
    </AvatarGroupRoot>
  );
};
