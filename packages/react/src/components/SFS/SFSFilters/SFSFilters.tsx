import { memo, useState } from 'react';

import { SFSFiltersProps } from './SFSFilters.types';

import clsx from 'clsx';
import { getSFSFiltersUtilityClass } from './SFSFilters.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { backdropClasses } from '@mui/material/Backdrop';
import Drawer from '@mui/material/Drawer';
import { paperClasses } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

import { IconCloseLineW600, IconFilterLineW300 } from '../../../icons';
import { Button } from '../../Button';
import { SFSButton } from '../SFSButton';
import { SFSButtonBadge } from '../SFSButtonBadge';

type SFSFiltersOwnerState = {
  classes?: SFSFiltersProps['classes'];
};

const useUtilityClasses = (ownerState: SFSFiltersOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    buttonBadge: ['buttonBadge'],
    drawer: ['drawer'],
    header: ['header'],
    footer: ['footer'],
    container: ['container'],
    closeButton: ['closeButton'],
    resetButton: ['resetButton'],
  };

  return composeClasses(slots, getSFSFiltersUtilityClass, classes);
};

const SFSFiltersRoot = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({
  position: 'relative',
}));

const SFSFiltersButton = styled(SFSButton, {
  name: 'ESSFSFilters',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.button,
})({});

const SFSFiltersButtonBadge = styled(SFSButtonBadge, {
  name: 'ESSFSFilters',
  slot: 'ButtonBadge',
  overridesResolver: (_, styles) => styles.buttonBadge,
})({}) as typeof SFSButtonBadge;

const SFSFiltersDrawer = styled(Drawer, {
  name: 'ESSFSFilters',
  slot: 'Drawer',
  overridesResolver: (_, styles) => styles.drawer,
})(({ theme }) => ({
  [`& .${backdropClasses.root}`]: {
    backgroundColor: theme.vars.palette.overlay[200],
  },
  [`& .${paperClasses.root}`]: {
    width: '100%',
    maxWidth: '337px',
    boxShadow: theme.vars.palette.shadow.left[800],
    backgroundImage: 'none',
    backgroundColor: theme.vars.palette.surface[200],
    borderLeft: `1px solid ${theme.vars.palette.monoA.A100}`,
  },
}));

const SFSFiltersHeader = styled(Typography, {
  name: 'ESSFSFilters',
  slot: 'Header',
  overridesResolver: (_, styles) => styles.header,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px',
  paddingLeft: '20px',
  borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
  color: theme.vars.palette.monoA.A900,
}));

const SFSFiltersFooter = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Footer',
  overridesResolver: (_, styles) => styles.footer,
})(({ theme }) => ({
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
  marginTop: 'auto',
  padding: '16px 20px',
}));

const SFSFiltersContainer = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Container',
  overridesResolver: (_, styles) => styles.container,
})(({ theme }) => ({
  ...theme.scrollbars.overlayMonoA,
}));

const SFSFiltersCloseButton = styled(Button, {
  name: 'ESSFSFilters',
  slot: 'CloseButton',
  overridesResolver: (_, styles) => styles.closeButton,
})(({ theme }) => ({
  '--icon': theme.vars.palette.monoA.A500,
}));

const SFSFiltersResetButton = styled(Button, {
  name: 'ESSFSFilters',
  slot: 'ResetButton',
  overridesResolver: (_, styles) => styles.resetButton,
})({});

export const SFSFilters = memo(function SFSFilters(inProps: SFSFiltersProps) {
  const {
    children,
    button,

    className,
    sx,

    count,
    onReset,

    labelButton,
    labelHeader,
    labelClose,
    labelReset,

    iconFilters = <IconFilterLineW300 />,
    iconClose = <IconCloseLineW600 />,

    FooterProps,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSFilters',
  });

  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSFiltersRoot className={clsx(className, classes.root)} color="tertiary" sx={sx} {...props}>
      {button ? (
        button({ open: isOpen, setOpen })
      ) : (
        <SFSFiltersButton active={!!count} className={classes.button} onClick={onOpen}>
          <Typography component="div" variant="body100">
            {labelButton}
          </Typography>
          {iconFilters}
          {!!count && (
            <SFSFiltersButtonBadge className={classes.buttonBadge} component="div" variant="mini200">
              {count}
            </SFSFiltersButtonBadge>
          )}
        </SFSFiltersButton>
      )}
      <SFSFiltersDrawer anchor="right" className={classes.drawer} open={isOpen} onClose={onClose}>
        <SFSFiltersHeader className={classes.header} variant="h5">
          {labelHeader}
          <SFSFiltersCloseButton
            aria-label={labelClose}
            className={classes.closeButton}
            color="tertiary"
            size="500"
            onClick={onClose}
          >
            {iconClose}
          </SFSFiltersCloseButton>
        </SFSFiltersHeader>

        <SFSFiltersContainer className={classes.container}>{children}</SFSFiltersContainer>

        {count ? (
          <SFSFiltersFooter className={classes.footer}>
            {FooterProps ? (
              FooterProps.children
            ) : (
              <SFSFiltersResetButton
                fullWidth
                className={classes.resetButton}
                color="error"
                size="600"
                variant="outlined"
                onClick={onReset}
              >
                {labelReset}
              </SFSFiltersResetButton>
            )}
          </SFSFiltersFooter>
        ) : null}
      </SFSFiltersDrawer>
    </SFSFiltersRoot>
  );
});
