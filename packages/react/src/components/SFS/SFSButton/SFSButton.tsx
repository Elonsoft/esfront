import { forwardRef } from 'react';

import { SFSButtonOwnProps, SFSButtonTypeMap } from './SFSButton.types';

import { getSFSButtonUtilityClass, sfsButtonClasses } from './SFSButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { ExtendButton } from '@mui/material/Button';

import { svgIconClasses } from '../../SvgIcon';

type SFSButtonOwnerState = {
  classes?: SFSButtonOwnProps['classes'];
  active: SFSButtonOwnProps['active'];
};

const useUtilityClasses = (ownerState: SFSButtonOwnerState) => {
  const { active, classes } = ownerState;

  const slots = {
    root: ['root', active && 'active']
  };

  const composedClasses = composeClasses(slots, getSFSButtonUtilityClass, classes);

  return {
    // forward the outlined, color, etc. classes to Button
    ...classes,
    ...composedClasses
  };
};

const rootShouldForwardProp = (prop: string) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const SFSButtonRoot = styled(Button, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  name: 'ESSFSButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { active }
    } = props;
    return [styles.root, active && active.loading];
  }
})(({ theme }) => ({
  gap: '4px',
  textTransform: 'inherit',
  '&.MuiButton-root': {
    '&:hover .ESSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .ESSvgIcon-root, &:focus-visible .MuiTypography-root':
      {
        color: theme.vars.palette.monoA.A600
      },

    '& .MuiTypography-root': {
      color: theme.vars.palette.monoA.A550
    },

    '& .ESSvgIcon-root': {
      color: theme.vars.palette.monoA.A500
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& > .MuiTypography-root:first-of-type': {
      display: 'none'
    }
  },

  [theme.breakpoints.up('tabletXS')]: {
    [`&.${sfsButtonClasses.active} > .${svgIconClasses.root}`]: {
      display: 'none'
    }
  }
}));

export const SFSButton = forwardRef(function SFSButton(inProps, ref) {
  const { classes: inClasses, active, ...props } = useThemeProps({ props: inProps, name: 'ESSFSButton' });

  const ownerState = {
    classes: inClasses,
    active
  };

  const classes = useUtilityClasses(ownerState);

  return <SFSButtonRoot ref={ref} classes={classes} color="tertiary" size="32" {...props} />;
}) as ExtendButton<SFSButtonTypeMap>;
