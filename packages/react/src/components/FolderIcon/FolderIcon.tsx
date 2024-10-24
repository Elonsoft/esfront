import { FolderIconProps } from './FolderIcon.types';

import clsx from 'clsx';
import { folderIconClasses, getFolderIconUtilityClass } from './FolderIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { FolderIconFilledIcon, FolderIconIcon, FolderIconOutlinedFilledIcon, FolderIconOutlinedIcon } from './icons';
const SIZE = {
  '100': {
    width: '15px',
    height: '20px',
  },
  '200': {
    width: '18px',
    height: '24px',
  },
  '300': {
    width: '21px',
    height: '28px',
  },
  '400': {
    width: '24px',
    height: '32px',
  },
  '500': {
    width: '27px',
    height: '36px',
  },
  '600': {
    width: '30px',
    height: '40px',
  },
  '700': {
    width: '33px',
    height: '44px',
  },
  '800': {
    width: '36px',
    height: '48px',
  },
};

type FolderIconOwnerState = {
  classes?: FolderIconProps['classes'];
  filled: FolderIconProps['filled'];

  color: NonNullable<FolderIconProps['color']>;
  size?: NonNullable<FolderIconProps['size']>;
  variant: NonNullable<FolderIconProps['variant']>;
};

const useUtilityClasses = (ownerState: FolderIconOwnerState) => {
  const { classes, color, variant, filled } = ownerState;

  const slots = {
    root: ['root', filled && 'filled', `color${capitalize(color)}`, `variant${capitalize(variant)}`],
    icon: ['icon'],
  };

  return composeClasses(slots, getFolderIconUtilityClass, classes);
};

const FolderIconRoot = styled('div', {
  name: 'ESFolderIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, variant, filled },
    } = props;

    return [
      styles.root,
      filled && styles.filled,
      styles[`color${capitalize(color)}`],
      styles[`variant${capitalize(variant)}`],
    ];
  },
})<{ ownerState: FolderIconOwnerState }>(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  justifyContent: 'center',

  [`&.${folderIconClasses.variantDefault}`]: {
    color: theme.vars.palette.yellow[300],
  },

  [`&.${folderIconClasses.variantOutlined}`]: {
    [`&.${folderIconClasses.colorPrimary}`]: {
      color: theme.vars.palette.primary.A500,
    },

    [`&.${folderIconClasses.colorSecondary}`]: {
      color: theme.vars.palette.secondary.A500,
    },

    [`&.${folderIconClasses.colorMonoA}`]: {
      color: theme.vars.palette.monoA.A150,
    },
  },

  [`&.${folderIconClasses.variantContained}`]: {
    color: theme.vars.palette.monoA.A400,

    '& svg path': {
      ':nth-of-type(2)': {
        fill: theme.vars.palette.monoA.A500,
      },
    },
  },
  [`&.${folderIconClasses.variantColored}`]: {
    [`&.${folderIconClasses.colorPrimary}`]: {
      color: theme.vars.palette.primary.A500,

      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.primary.A800,
        },
      },
    },

    [`&.${folderIconClasses.colorSecondary}`]: {
      color: theme.vars.palette.secondary.A500,

      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.secondary.A800,
        },
      },
    },

    [`&.${folderIconClasses.colorMonoA}`]: {
      color: theme.vars.palette.monoA.A500,

      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.monoA.A800,
        },
      },
    },
  },
}));

/**
 * This component is for displaying folder.
 */
export const FolderIcon = (inProps: FolderIconProps) => {
  const {
    className,
    sx,
    variant = 'default',
    icon = FolderIconIcon,
    iconFilled = FolderIconFilledIcon,
    size = '500',
    filled = false,
    color = 'primary',
    SvgIconProps,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIcon',
  });

  const ownerState = { ...props, color, variant, filled };
  const classes = useUtilityClasses(ownerState);

  const defaultIcon = variant === 'outlined' ? FolderIconOutlinedIcon : icon;
  const defaultIconFilled = variant === 'outlined' ? FolderIconOutlinedFilledIcon : iconFilled;

  const Icon = filled ? defaultIconFilled : defaultIcon;

  return (
    <FolderIconRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props}>
      <Icon {...SIZE[size]} {...SvgIconProps} className={clsx(classes.icon, SvgIconProps?.className)} />
    </FolderIconRoot>
  );
};
