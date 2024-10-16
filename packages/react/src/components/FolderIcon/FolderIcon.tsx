import { FolderIconProps } from './FolderIcon.types';

import clsx from 'clsx';
import { folderIconClasses, getFolderIconUtilityClass } from './FolderIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { FolderIconIcon, FolderIconIconFilled, FolderIconOutlinedFilledIcon, FolderIconOutlinedIcon } from './icons';
const SIZE = {
  '100': {
    width: 15,
    height: 20,
  },
  '200': {
    width: 18,
    height: 24,
  },
  '300': {
    width: 21,
    height: 28,
  },
  '400': {
    width: 24,
    height: 32,
  },
  '500': {
    width: 27,
    height: 36,
  },
  '600': {
    width: 30,
    height: 40,
  },
  '700': {
    width: 33,
    height: 44,
  },
  '800': {
    width: 36,
    height: 48,
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

  [`&.${folderIconClasses.variantOutlined}`]: {
    [`&.${folderIconClasses.colorPrimary}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.primary.A800,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.primary.A500,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.primary.A500,
          },
        },
      },
    },
    [`&.${folderIconClasses.colorSecondary}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.secondary.A800,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.secondary.A500,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.secondary.A500,
          },
        },
      },
    },

    [`&.${folderIconClasses.colorMonoA}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.monoA.A150,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.monoA.A150,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.monoA.A150,
          },
        },
      },
    },
  },

  [`&.${folderIconClasses.variantContained}`]: {
    '& svg path': {
      ':nth-of-type(2)': {
        fill: theme.vars.palette.monoA.A500,
      },
      ':nth-of-type(3)': {
        fill: theme.vars.palette.monoA.A400,
      },
    },

    [`&.${folderIconClasses.filled}`]: {
      '& svg path': {
        ':nth-of-type(3)': {
          fill: theme.vars.palette.white.A900,
        },
        ':nth-of-type(4)': {
          fill: theme.vars.palette.monoA.A400,
        },
      },
    },
  },
  [`&.${folderIconClasses.variantColored}`]: {
    [`&.${folderIconClasses.colorPrimary}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.primary.A800,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.primary.A500,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.primary.A500,
          },
        },
      },
    },

    [`&.${folderIconClasses.colorSecondary}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.secondary.A800,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.secondary.A500,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.secondary.A500,
          },
        },
      },
    },

    [`&.${folderIconClasses.colorMonoA}`]: {
      '& svg path': {
        ':nth-of-type(2)': {
          fill: theme.vars.palette.monoA.A800,
        },
        ':nth-of-type(3)': {
          fill: theme.vars.palette.monoA.A500,
        },
      },

      [`&.${folderIconClasses.filled}`]: {
        '& svg path': {
          ':nth-of-type(3)': {
            fill: theme.vars.palette.white.A900,
          },
          ':nth-of-type(4)': {
            fill: theme.vars.palette.monoA.A500,
          },
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
    icon = variant === 'outlined' ? FolderIconOutlinedIcon : FolderIconIcon,
    iconFilled = variant === 'outlined' ? FolderIconOutlinedFilledIcon : FolderIconIconFilled,
    size = '500',
    filled = false,
    color = 'primary',

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIcon',
  });

  const ownerState = { ...props, color, variant, filled };
  const classes = useUtilityClasses(ownerState);

  const Icon = filled ? iconFilled : icon;

  return (
    <FolderIconRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props}>
      <Icon className={classes.icon} height={SIZE[size].height} width={SIZE[size].width} />
    </FolderIconRoot>
  );
};
