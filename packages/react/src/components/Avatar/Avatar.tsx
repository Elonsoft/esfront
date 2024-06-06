import { ReactNode, useEffect, useState } from 'react';

import { AvatarProps } from './Avatar.types';

import clsx from 'clsx';
import { avatarClasses, getAvatarUtilityClass } from './Avatar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { svgIconClasses } from '../SvgIcon';

type AvatarOwnerState = {
  classes?: AvatarProps['classes'];
  size: NonNullable<AvatarProps['size']>;
  variant: NonNullable<AvatarProps['variant']>;
  outlined: NonNullable<AvatarProps['outlined']>;
};

const useUtilityClasses = (ownerState: AvatarOwnerState) => {
  const { classes, variant = 'square', outlined } = ownerState;

  const slots = {
    root: ['root', `variant${capitalize(variant)}`, outlined && 'outlined'],
    image: ['image'],
  };

  return composeClasses(slots, getAvatarUtilityClass, classes);
};

function useLoaded(src: string): 'loaded' | 'error' | null {
  const [loaded, setLoaded] = useState<'loaded' | 'error' | null>(null);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded(null);

    let active = true;
    const image = new Image();

    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
}

const AvatarRoot = styled('div', {
  name: 'ESAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant, outlined },
    } = props;

    return [styles.root, styles[`variant${capitalize(variant)}`], outlined && styles.outlined];
  },
})<{ ownerState: AvatarOwnerState }>(({ theme, ownerState: { size } }) => ({
  ...theme.typography.body100,
  height: `${size}px`,
  width: `${size}px`,
  backgroundColor: theme.vars.palette.monoA.A100,
  backgroundSize: '100%',
  flexShrink: 0,
  textAlign: 'center',
  objectFit: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: theme.vars.palette.monoA.A500,

  [`& .${svgIconClasses.root}`]: {
    color: theme.vars.palette.monoA.A400,
  },

  [`&.${avatarClasses.variantSquare}`]: {
    borderRadius: '8px',
  },

  [`&.${avatarClasses.variantCircle}`]: {
    borderRadius: '50%',
  },

  [`&.${avatarClasses.outlined}`]: {
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      borderRadius: 'inherit',
      border: `1px solid ${theme.vars.palette.monoA.A100}`,
    },
  },
}));

const AvatarImage = styled('img', {
  name: 'ESAvatar',
  slot: 'Image',
  overridesResolver: (props, styles) => {
    return [styles.image];
  },
})({
  width: '100%',
  height: '100%',
});

/** Avatar is used to represent users or things. */
export const Avatar = (inProps: AvatarProps) => {
  const {
    className,
    children,
    variant = 'square',
    src,
    alt,
    size = 40,
    outlined = false,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAvatar',
  });

  const ownerState = { ...props, variant, size, outlined };
  const classes = useUtilityClasses(ownerState);

  const hasImgLoaded = useLoaded(src || '') === 'loaded';
  const hasImgNotFailing = src ? hasImgLoaded : false;

  let child: ReactNode = null;

  if (hasImgNotFailing) {
    child = <AvatarImage className={clsx(className, classes.image)} src={src} />;
  } else if (!!children || children === 0) {
    child = children;
  } else if (src && alt) {
    child = alt;
  }

  return (
    <AvatarRoot className={clsx(className, classes.root)} ownerState={ownerState} {...props}>
      {child}
    </AvatarRoot>
  );
};
