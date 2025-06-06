import React, { memo, useState } from 'react';

import { SFSSortingProps } from './SFSSorting.types';

import clsx from 'clsx';
import { getSFSSortingUtilityClass } from './SFSSorting.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { IconSortAscending2, IconSortDescending2, IconSortOff } from '../../../icons';
import { SortingMenu } from '../../SortingMenu';
import { SFSButton } from '../SFSButton';
import { SFSButtonBadge } from '../SFSButtonBadge';

type SFSSortingOwnerState = {
  classes?: SFSSortingProps['classes'];
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    buttonBadge: ['buttonBadge'],
  };

  return composeClasses(slots, getSFSSortingUtilityClass, classes);
};

const SFSSortingRoot = styled('div', {
  name: 'ESSFSSorting',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})({});

const SFSSortingButton = styled(SFSButton, {
  name: 'ESSFSSorting',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.button,
})({});

const SFSSortingButtonBadge = styled(SFSButtonBadge, {
  name: 'ESSFSSorting',
  slot: 'ButtonBadge',
  overridesResolver: (_, styles) => styles.buttonBadge,
})({}) as typeof SFSButtonBadge;

export const SFSSorting = memo(function SFSSorting(inProps: SFSSortingProps) {
  const {
    classes: inClasses,
    className,
    sx,

    options,

    labelButton,
    iconSort = <IconSortOff />,
    iconAsc = <IconSortAscending2 container containerSize="16px" />,
    iconDesc = <IconSortDescending2 container containerSize="16px" />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSSorting',
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  return (
    <SFSSortingRoot className={clsx(classes.root, className)} sx={sx}>
      <SFSSortingButton active={!!values[0]} className={classes.button} onClick={onMenuOpen}>
        <Typography component="div" variant="body100">
          {values.length === 1 ? options.find((o) => o.value === values[0].value)?.label : labelButton}
        </Typography>
        {iconSort}
        {values.length === 1 && (
          <SFSSortingButtonBadge className={classes.buttonBadge} component="div">
            {values[0].direction === 'asc' ? iconAsc : iconDesc}
          </SFSSortingButtonBadge>
        )}
        {values.length > 1 && (
          <SFSSortingButtonBadge className={classes.buttonBadge} component="div" variant="mini200">
            {values.length}
          </SFSSortingButtonBadge>
        )}
      </SFSSortingButton>
      <SortingMenu
        PopoverProps={{
          anchorEl: menuAnchor,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          open: !!menuAnchor,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          onClose: onMenuClose,
        }}
        options={options}
        {...props}
      />
    </SFSSortingRoot>
  );
});
