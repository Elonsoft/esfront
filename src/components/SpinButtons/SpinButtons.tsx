import { SpinButtonsProps } from './SpinButtons.types';

import clsx from 'clsx';
import { getSpinButtonsUtilityClass } from './SpinButtons.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { Button, styled, useThemeProps } from '@mui/material';
import { iconButtonClasses } from '@mui/material/IconButton';

import { IconMinusW400, IconPlusW400 } from '../../icons';
import { svgIconClasses } from '../SvgIcon';

type SpinButtonsOwnerState = {
  classes?: SpinButtonsProps['classes'];
  size?: SpinButtonsProps['size'];
};

const useUtilityClasses = (ownerState: SpinButtonsOwnerState) => {
  const { classes, size } = ownerState;

  const slots = {
    root: ['root', size],
    button: ['button'],
    divider: ['divider']
  };

  return composeClasses(slots, getSpinButtonsUtilityClass, classes);
};
const SpinButtonsRoot = styled('div', {
  name: 'ESSpinButtons',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { size }
    } = props;

    return [styles.root, styles[size]];
  }
})(() => ({
  alignItems: 'center',
  display: 'inline-flex',
  textAlign: 'center'
}));

const SpinButton = styled(Button, {
  name: 'ESSpinButtons',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    borderRadius: 4
  },
  [`& .${svgIconClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

const SpinButtonsDivider = styled('div', {
  name: 'ESSpinButtons',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.divider
})(({ theme }) => ({
  width: '1px',
  height: '16px',
  margin: '0 8px',
  backgroundColor: theme.palette.monoA.A100
}));

/**
 * This component is a placeholder to use on pages without content.
 */
export const SpinButtons = (inProps: SpinButtonsProps) => {
  const {
    className,
    size = '32',
    sx,
    iconMinus = <IconMinusW400 />,
    iconPlus = <IconPlusW400 />,
    labelDecrement,
    labelIncrement,
    disabled,
    onDecrement,
    onIncrement,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinButtons'
  });

  const ownerState = { size, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinButtonsRoot className={clsx(classes.root, className)} sx={sx}>
      <SpinButton
        aria-label={labelDecrement}
        className={classes.button}
        color="tertiary"
        disabled={disabled}
        size="32"
        onClick={onDecrement}
      >
        {iconMinus}
      </SpinButton>
      <SpinButtonsDivider className={classes.divider} />
      <SpinButton
        aria-label={labelIncrement}
        className={classes.button}
        color="tertiary"
        size="32"
        onClick={onIncrement}
      >
        {iconPlus}
      </SpinButton>
    </SpinButtonsRoot>
  );
};
