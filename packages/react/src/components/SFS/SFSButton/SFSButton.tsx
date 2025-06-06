import { forwardRef } from 'react';

import { SFSButtonOwnProps, SFSButtonTypeMap } from './SFSButton.types';

import { getSFSButtonUtilityClass, sfsButtonClasses } from './SFSButton.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { Button, buttonClasses, ExtendButton } from '../../Button';
import { buttonBaseClasses } from '../../ButtonBase';
import { svgIconClasses } from '../../SvgIcon';

type SFSButtonOwnerState = {
  classes?: SFSButtonOwnProps['classes'];
  active: SFSButtonOwnProps['active'];
};

const useUtilityClasses = (ownerState: SFSButtonOwnerState) => {
  const { active, classes } = ownerState;

  const slots = {
    root: ['root', active && 'active'],
  };

  const composedClasses = composeClasses(slots, getSFSButtonUtilityClass, classes);

  return {
    // forward the outlined, color, etc. classes to Button
    ...classes,
    ...composedClasses,
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
      ownerState: { active },
    } = props;
    return [styles.root, active && active.loading];
  },
})(({ theme }) => ({
  textTransform: 'inherit',

  [`&.${buttonClasses.root}`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      gap: '4px',
    },

    '&:hover .ESSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .ESSvgIcon-root, &:focus-visible .MuiTypography-root':
      {
        color: theme.vars.palette.monoA.A600,
      },

    '& .MuiTypography-root': {
      color: theme.vars.palette.monoA.A550,
    },

    '& .ESSvgIcon-root': {
      color: theme.vars.palette.monoA.A500,
    },
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& .MuiTypography-root:first-of-type': {
      display: 'none',
    },
  },

  [theme.breakpoints.up('tabletXS')]: {
    [`&.${sfsButtonClasses.active} > .${buttonBaseClasses.wrapper} > .${svgIconClasses.root}`]: {
      display: 'none',
    },
  },
}));

export const SFSButton = forwardRef(function SFSButton(inProps, ref) {
  const { classes: inClasses, active, ...props } = useDefaultProps({ props: inProps, name: 'ESSFSButton' });

  const ownerState = {
    classes: inClasses,
    active,
  };

  const classes = useUtilityClasses(ownerState);

  return <SFSButtonRoot ref={ref} classes={classes} color="tertiary" size="400" {...props} />;
}) as ExtendButton<SFSButtonTypeMap>;
