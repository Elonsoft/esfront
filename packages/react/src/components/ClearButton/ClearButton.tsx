import { ClearButtonProps } from './ClearButton.types';

import clsx from 'clsx';
import { getClearButtonUtilityClass } from './ClearButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconCloseW350 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';

type ClearButtonOwnerState = {
  classes?: ClearButtonProps['classes'];
};

const useUtilityClasses = (ownerState: ClearButtonOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getClearButtonUtilityClass, classes);
};

const ClearButtonRoot = styled(Button, {
  name: 'ClearButton',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    flexShrink: 0,
    '--icon': theme.vars.palette.monoA.A400,

    [`&.${buttonClasses.variantText}.${buttonClasses.colorMonoA}`]: {
      '--hovered': 'inherit',
      '--pressed': 'inherit',
    },

    '&:hover': {
      '--icon': theme.vars.palette.monoA.A500,
    },

    [`&.${buttonBaseClasses.pressed}`]: {
      '--icon': theme.vars.palette.monoA.A600,
    },
  },
}));

export const ClearButton = (inProps: ClearButtonProps) => {
  const {
    className,
    sx,
    onClick,
    ariaLabel = 'Clear',
    icon = <IconCloseW350 />,
    size,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSearch',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ClearButtonRoot
      disableTouchRipple
      aria-label={ariaLabel}
      className={clsx(classes.root, className)}
      color="monoA"
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {icon}
    </ClearButtonRoot>
  );
};
