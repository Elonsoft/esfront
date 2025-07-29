import { forwardRef, MouseEvent, useContext } from 'react';

import { ToggleButtonOwnProps, ToggleButtonTypeMap } from './ToggleButton.types';

import clsx from 'clsx';
import { getToggleButtonUtilityClass, toggleButtonClasses } from './ToggleButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { ButtonBase, buttonBaseClasses, ExtendButtonBase } from '../../ButtonBase';
import { svgIconClasses } from '../../SvgIcon';
import isValueSelected from '../isValueSelected';
import { ToggleButtonGroupContext } from '../ToggleButtonGroup.context';

type ToggleButtonOwnerState = {
  classes: ToggleButtonOwnProps['classes'];
  selected?: ToggleButtonOwnProps['selected'];
  size: NonNullable<ToggleButtonOwnProps['size']>;
  fullWidth?: ToggleButtonOwnProps['fullWidth'];
};

const useUtilityClasses = (ownerState: ToggleButtonOwnerState) => {
  const { classes, selected, size, fullWidth } = ownerState;

  const slots = {
    root: ['root', selected && 'selected', fullWidth && 'fullWidth', `size${capitalize(size)}`],
    startIcon: ['icon', 'startIcon'],
    endIcon: ['icon', 'endIcon'],
  };

  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};

const ToggleButtonRoot = styled(ButtonBase, {
  name: 'ESToggleButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { selected, fullWidth, size },
    } = props;

    return [styles.root, selected && styles.selected, fullWidth && styles.fullWidth, styles[`size${capitalize(size)}`]];
  },
})<{ ownerState: ToggleButtonOwnerState }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'none',

  '--background': 'transparent',
  '--text': theme.vars.palette.monoA.A700,
  '--icon': theme.vars.palette.monoA.A600,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`&.${toggleButtonClasses.selected}`]: {
    '--background': theme.vars.palette.monoA.A100,
    '--text': theme.vars.palette.monoA.A900,
    '--icon': theme.vars.palette.monoA.A900,
  },

  [`&.${toggleButtonClasses.fullWidth}`]: {
    width: '100%',
  },

  [`&.${buttonBaseClasses.disabled}`]: {
    cursor: 'not-allowed',

    '--text': theme.vars.palette.monoA.A400,
    '--icon': theme.vars.palette.monoA.A400,
  },

  [`& .${buttonBaseClasses.wrapper}`]: {
    ...theme.typography.body100,
  },

  [`&.${toggleButtonClasses.size400}`]: {
    height: '32px',

    [`& .${buttonBaseClasses.wrapper}`]: {
      padding: '0 10px',

      [`& .${toggleButtonClasses.startIcon}`]: {
        marginLeft: '-4px',
        marginRight: '4px',
      },
      [`& .${toggleButtonClasses.endIcon}`]: {
        marginLeft: '4px',
        marginRight: '-4px',
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`&.${toggleButtonClasses.size500}`]: {
    height: '40px',

    [`& .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',

      [`& .${toggleButtonClasses.startIcon}`]: {
        marginLeft: '-4px',
        marginRight: '6px',
      },
      [`& .${toggleButtonClasses.endIcon}`]: {
        marginLeft: '6px',
        marginRight: '-4px',
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`&.${toggleButtonClasses.size600}`]: {
    height: '48px',

    [`& .${buttonBaseClasses.wrapper}`]: {
      padding: '0 16px',

      [`& .${toggleButtonClasses.startIcon}`]: {
        marginLeft: '-4px',
        marginRight: '8px',
      },
      [`& .${toggleButtonClasses.endIcon}`]: {
        marginLeft: '8px',
        marginRight: '-4px',
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
  [`&.${toggleButtonClasses.size700}`]: {
    height: '56px',

    [`& .${buttonBaseClasses.wrapper}`]: {
      padding: '0 20px',

      [`& .${toggleButtonClasses.startIcon}`]: {
        marginLeft: '-4px',
        marginRight: '8px',
      },
      [`& .${toggleButtonClasses.endIcon}`]: {
        marginLeft: '8px',
        marginRight: '-4px',
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px',
      },
    },
  },
}));

const ToggleButtonStartIcon = styled('span', {
  name: 'ESToggleButton',
  slot: 'StartIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.startIcon],
})(() => ({
  display: 'inherit',
  color: 'var(--icon)',
}));

const ToggleButtonEndIcon = styled('span', {
  name: 'ESToggleButton',
  slot: 'EndIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.endIcon],
})(() => ({
  display: 'inherit',
  color: 'var(--icon)',
}));

export const ToggleButton = forwardRef(function ToggleButton(inProps, ref) {
  const {
    value: contextValue,
    onChange,
    size: groupSize = '500',
    disabled: groupDisabled,
    fullWidth: groupFullWidth,
    ...contextProps
  } = useContext(ToggleButtonGroupContext);

  const {
    className,
    classes: classesProp,
    children,
    sx,
    value,
    selected = isValueSelected(inProps.value, contextValue),
    size = groupSize,
    disabled = groupDisabled,
    fullWidth = groupFullWidth,
    startIcon,
    endIcon,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange: onChangeProp,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESToggleButton',
  });

  const ownerState = { classes: classesProp, selected, fullWidth, size };
  const classes = useUtilityClasses(ownerState);

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event, value);

      if (event.defaultPrevented) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <ToggleButtonRoot
      ref={ref as any}
      aria-label={value}
      className={clsx(contextProps.className, classes.root, className)}
      disabled={disabled}
      ownerState={ownerState}
      sx={sx}
      value={value}
      {...props}
      onClick={handleChange}
    >
      {startIcon && <ToggleButtonStartIcon className={classes.startIcon}>{startIcon}</ToggleButtonStartIcon>}
      {children}
      {endIcon && <ToggleButtonEndIcon className={classes.endIcon}>{endIcon}</ToggleButtonEndIcon>}
    </ToggleButtonRoot>
  );
}) as ExtendButtonBase<ToggleButtonTypeMap>;
