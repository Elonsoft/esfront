import { FolderIconProps } from './FolderIcon.types';

import clsx from 'clsx';
import { folderIconClasses, getFolderIconUtilityClass } from './FolderIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { PaletteColor, styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import {
  FolderIconIcon100,
  FolderIconIcon200,
  FolderIconIcon300,
  FolderIconIcon400,
  FolderIconIcon500,
  FolderIconIcon600,
  FolderIconIcon700,
  FolderIconIcon800,
  FolderIconOutlinedIcon100,
  FolderIconOutlinedIcon200,
  FolderIconOutlinedIcon300,
  FolderIconOutlinedIcon400,
  FolderIconOutlinedIcon500,
  FolderIconOutlinedIcon600,
  FolderIconOutlinedIcon700,
  FolderIconOutlinedIcon800,
} from './icons';

const SIZE = {
  '100': {
    width: '15px',
    height: '20px',
    icon: FolderIconIcon100,
    iconOutline: FolderIconOutlinedIcon100,
  },
  '200': {
    width: '18px',
    height: '24px',
    icon: FolderIconIcon200,
    iconOutline: FolderIconOutlinedIcon200,
  },
  '300': {
    width: '21px',
    height: '28px',
    icon: FolderIconIcon300,
    iconOutline: FolderIconOutlinedIcon300,
  },
  '400': {
    width: '24px',
    height: '32px',
    icon: FolderIconIcon400,
    iconOutline: FolderIconOutlinedIcon400,
  },
  '500': {
    width: '27px',
    height: '36px',
    icon: FolderIconIcon500,
    iconOutline: FolderIconOutlinedIcon500,
  },
  '600': {
    width: '30px',
    height: '40px',
    icon: FolderIconIcon600,
    iconOutline: FolderIconOutlinedIcon600,
  },
  '700': {
    width: '33px',
    height: '44px',
    icon: FolderIconIcon700,
    iconOutline: FolderIconOutlinedIcon700,
  },
  '800': {
    width: '36px',
    height: '48px',
    icon: FolderIconIcon800,
    iconOutline: FolderIconOutlinedIcon800,
  },
};

function getPath<P>(obj: any, path: string): P | null {
  return path.split('.').reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

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
})<{ ownerState: FolderIconOwnerState }>(({ ownerState: { color }, theme }) => ({
  display: 'flex',
  height: 'auto',
  justifyContent: 'center',

  [`&.${folderIconClasses.variantDefault}`]: {
    color: theme.vars.palette.yellow[300],

    '& svg path': {
      ':nth-of-type(3)': {
        display: 'none',
      },
      ':nth-of-type(2)': {
        color: theme.vars.palette.yellow[400],
      },
    },

    [`&.${folderIconClasses.filled}`]: {
      '& svg path': {
        ':nth-of-type(3)': {
          display: 'block',
        },
      },
    },
  },

  [`&.${folderIconClasses.variantOutlined}`]: {
    color: theme.vars.palette.monoA.A150,
    '& svg path': {
      ':nth-of-type(3)': {
        display: 'none',
      },
    },

    [`&.${folderIconClasses.filled}`]: {
      '& svg path': {
        ':nth-of-type(3)': {
          display: 'block',
        },
      },
    },
  },

  [`&.${folderIconClasses.variantContained}`]: {
    color: theme.vars.palette.monoA.A150,

    '& svg path': {
      ':nth-of-type(2)': {
        fill: theme.vars.palette.monoA.A400,
      },
      ':nth-of-type(3)': {
        display: 'none',
      },
    },

    [`&.${folderIconClasses.filled}`]: {
      '& svg path': {
        ':nth-of-type(3)': {
          display: 'block',
        },
      },
    },
  },
  [`&.${folderIconClasses.variantColored}`]: {
    color: getPath<PaletteColor>(theme, `palette.${color}`)?.A500 || (color as string),

    '& svg path': {
      ':nth-of-type(2)': {
        color: getPath<PaletteColor>(theme, `palette.${color}`)?.A800 || (color as string),
      },
      ':nth-of-type(3)': {
        display: 'none',
      },
    },

    [`&.${folderIconClasses.filled}`]: {
      '& svg path': {
        ':nth-of-type(3)': {
          display: 'block',
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
    icon,
    size = '500',
    filled = true,
    color = 'violet',
    SvgIconProps,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIcon',
  });

  const ownerState = { ...props, color, variant, filled };
  const classes = useUtilityClasses(ownerState);

  const defaultIconFilled = variant === 'outlined' ? SIZE[size]?.iconOutline : SIZE[size]?.icon;

  const Icon = icon ?? defaultIconFilled;

  return (
    <FolderIconRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props}>
      <Icon {...SIZE[size]} {...SvgIconProps} className={clsx(classes.icon, SvgIconProps?.className)} />
    </FolderIconRoot>
  );
};
