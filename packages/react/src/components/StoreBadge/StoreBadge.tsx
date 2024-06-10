import { StoreBadgeOwnProps, StoreBadgeProps, StoreBadgeTypeMap } from './StoreBadge.types';

import clsx from 'clsx';
import { getStoreBadgeUtilityClass } from './StoreBadge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { Button } from '../Button';

type StoreBadgeOwnerState = {
  classes?: StoreBadgeOwnProps['classes'];
  disabled?: StoreBadgeOwnProps['disabled'];
  color: NonNullable<StoreBadgeOwnProps['color']>;
  variant: NonNullable<StoreBadgeOwnProps['variant']>;
};

const useUtilityClasses = (ownerState: StoreBadgeOwnerState) => {
  const { classes, disabled, color, variant } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', `color${capitalize(color)}`, `variant${capitalize(variant)}`],
    text: ['text'],
    container: ['container']
  };

  return composeClasses(slots, getStoreBadgeUtilityClass, classes);
};

const StoreBadgeRoot = styled(Button, {
  name: 'ESStoreBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, checked, size, variant, color }
    } = props;
    return [
      styles.root,
      disabled && styles.disabled,
      checked && styles.checked,
      styles[size],
      styles[`color${capitalize(color)}`],
      styles[`variant${capitalize(variant)}`]
    ];
  }
})(({ theme }) => ({
  ...theme.typography.body100,
  textTransform: 'none'
})) as typeof Button;

const StoreBadgeText = styled(Typography, {
  name: 'ESStoreBadge',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({ theme }) => ({
  ...theme.typography.micro,
  textTransform: 'none'
})) as typeof Typography;

const StoreBadgeContainer = styled('div', {
  name: 'ESStoreBadge',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px'
}));

export const StoreBadge: OverridableComponent<StoreBadgeTypeMap> = (inProps: StoreBadgeProps) => {
  const {
    className,
    disabled,
    color = 'monoA',
    variant = 'contained',
    children,
    startIcon,
    upperText,
    href,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStoreBadge'
  });

  const ownerState = { ...props, disabled, color, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <StoreBadgeRoot
      className={clsx(classes.root, className)}
      color={color}
      component="a"
      href={href}
      startIcon={startIcon}
      sx={sx}
      variant={variant}
    >
      <StoreBadgeContainer className={classes.container}>
        <StoreBadgeText className={classes.text}>{upperText}</StoreBadgeText>
        {children}
      </StoreBadgeContainer>
    </StoreBadgeRoot>
  );
};
