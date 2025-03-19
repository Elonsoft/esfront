import { CalendarButtonProps } from './CalendarButton.types';

import clsx from 'clsx';
import { calendarButtonClasses, getCalendarButtonUtilityClass } from './CalendarButton.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { capitalize } from '@mui/material/utils';
import composeClasses from '@mui/utils/composeClasses';

import { ButtonBase, buttonBaseClasses } from '../../ButtonBase';

type CalendarButtonOwnerState = {
  classes?: CalendarButtonProps['classes'];

  disabled?: boolean;
  inactive?: boolean;

  selected?: boolean;
  hovered?: boolean;
  today?: boolean;

  position?: 'start' | 'end' | 'between';
};

const useUtilityClasses = (ownerState: CalendarButtonOwnerState) => {
  const { classes, inactive, selected, hovered, today, position } = ownerState;

  const slots = {
    root: ['root', selected && 'selected', hovered && 'hovered', position && `position${capitalize(position)}`],
    wrapper: ['wrapper'],
    button: [
      'button',
      inactive && 'buttonInactive',
      selected && position !== 'between' && 'buttonSelected',
      today && 'buttonToday',
    ],
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getCalendarButtonUtilityClass, classes);
};

const CalendarButtonRoot = styled('div', {
  name: 'ESCalendarButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { selected, hovered, position },
    } = props;

    return [
      styles.root,
      selected && styles.selected,
      hovered && styles.hovered,
      position && styles[`position${capitalize(position)}`],
    ];
  },
})<{ ownerState: CalendarButtonOwnerState }>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '2px',
  position: 'relative',

  '&::before': {
    border: `0 dashed ${theme.vars.palette.monoA.A300}`,
    content: '""',
    inset: 0,
    position: 'absolute',
  },

  [`&.${calendarButtonClasses.hovered}`]: {
    [`&.${calendarButtonClasses.positionStart}::before`]: {
      borderBottomLeftRadius: '8px',
      borderBottomWidth: '1px',
      borderLeftWidth: '1px',
      borderTopLeftRadius: '8px',
      borderTopWidth: '1px',
    },

    [`&.${calendarButtonClasses.positionBetween}::before`]: {
      borderBottomWidth: '1px',
      borderTopWidth: '1px',
    },

    [`&.${calendarButtonClasses.positionEnd}::before`]: {
      borderBottomRightRadius: '8px',
      borderBottomWidth: '1px',
      borderRightWidth: '1px',
      borderTopRightRadius: '8px',
      borderTopWidth: '1px',
    },
  },

  '&:nth-child(7n), &:last-of-type': {
    [`&.${calendarButtonClasses.hovered}::before`]: {
      borderBottomRightRadius: '8px',
      borderRightWidth: '1px',
      borderTopRightRadius: '8px',
    },

    [`& .${calendarButtonClasses.wrapper}`]: {
      borderBottomRightRadius: '6px',
      borderTopRightRadius: '6px',

      '&::after': {
        display: 'none',
      },
    },
  },

  '&:nth-child(7n + 1), &:first-of-type': {
    [`&.${calendarButtonClasses.hovered}::before`]: {
      borderBottomLeftRadius: '8px',
      borderLeftWidth: '1px',
      borderTopLeftRadius: '8px',
    },

    [`& .${calendarButtonClasses.wrapper}`]: {
      borderBottomLeftRadius: '6px',
      borderTopLeftRadius: '6px',

      '&::before': {
        display: 'none',
      },
    },
  },

  [`&.${calendarButtonClasses.selected}.${calendarButtonClasses.positionBetween} .${calendarButtonClasses.wrapper}`]: {
    background: theme.vars.palette.secondary.A200,

    '&::before, &::after': {
      content: '""',
    },
  },

  [`&.${calendarButtonClasses.selected}.${calendarButtonClasses.positionStart}:has(~ .${calendarButtonClasses.selected}) .${calendarButtonClasses.wrapper}`]:
    {
      background: `linear-gradient(to right, transparent 50%, ${theme.vars.palette.secondary.A200} 50%)`,
      borderBottomLeftRadius: '6px',
      borderTopLeftRadius: '6px',

      '&::after': {
        content: '""',
      },
    },

  [`&.${calendarButtonClasses.selected} ~ .${calendarButtonClasses.selected}.${calendarButtonClasses.positionEnd} .${calendarButtonClasses.wrapper}`]:
    {
      background: `linear-gradient(to left, transparent 50%, ${theme.vars.palette.secondary.A200} 50%)`,
      borderBottomRightRadius: '6px',
      borderTopRightRadius: '6px',

      '&::before': {
        content: '""',
      },
    },
}));

const CalendarButtonWrapper = styled('div', {
  name: 'ESCalendarButton',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper,
})(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '32px',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',

  '&::before, &::after': {
    background: theme.vars.palette.secondary.A200,
    bottom: 0,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    width: '2px',
  },

  '&::before': {
    left: '-2px',
  },

  '&::after': {
    right: '-2px',
  },
}));

const CalendarButtonButton = styled(ButtonBase, {
  name: 'ESCalendarButton',
  slot: 'Button',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { inactive, selected, today, position },
    } = props;

    return [
      styles.button,
      inactive && styles.buttonInactive,
      selected && position !== 'between' && styles.buttonSelected,
      today && styles.buttonToday,
    ];
  },
})<{ ownerState: CalendarButtonOwnerState }>(({ theme }) => ({
  [`&.${buttonBaseClasses.root}`]: {
    ...theme.typography.body100,
    alignItems: 'center',
    borderRadius: '6px',
    display: 'flex',
    fontFamily: 'inherit',
    height: '32px',
    justifyContent: 'center',
    width: '100%',
    '--text': theme.vars.palette.monoA.A900,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,

    [`&.${calendarButtonClasses.buttonToday}`]: {
      ...theme.typography.body100Bold,
      border: `1px solid ${theme.vars.palette.monoA.A400}`,
    },

    [`&.${buttonBaseClasses.root}.${calendarButtonClasses.buttonInactive}`]: {
      '--text': theme.vars.palette.monoA.A550,
    },

    [`&.${calendarButtonClasses.buttonSelected}`]: {
      '--background': theme.vars.palette.secondary[300],
    },

    [`&.${buttonBaseClasses.root}.${buttonBaseClasses.disabled}`]: {
      '--text': theme.vars.palette.monoA.A400,
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  },
}));

const CalendarButtonTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESCalendarButton',
    slot: 'Tooltip',
    overridesResolver: (_props, styles) => styles.tooltip,
  }
)(() => ({
  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    marginBottom: '12px !important',
  },
}));

export const CalendarButton = (inProps: CalendarButtonProps) => {
  const {
    children,
    className,
    sx,
    disabled,
    inactive,
    selected,
    hovered,
    today,
    position,
    onClick,
    onHover,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESCalendarButton',
  });

  const ownerState = { today, disabled, inactive, selected, hovered, position, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <CalendarButtonRoot
      className={clsx(className, classes.root)}
      ownerState={ownerState}
      sx={sx}
      onClick={onClick}
      onFocus={onHover}
      onMouseEnter={onHover}
    >
      <CalendarButtonWrapper className={classes.wrapper}>
        <CalendarButtonTooltip
          disableInteractive
          className={clsx(classes.tooltip)}
          placement="top"
          {...TooltipProps}
          TransitionProps={{ timeout: 0, ...TooltipProps?.TransitionProps }}
          title={TooltipProps?.title || ''}
        >
          <div style={{ width: '100%' }}>
            <CalendarButtonButton className={classes.button} disabled={disabled} ownerState={ownerState}>
              {children}
            </CalendarButtonButton>
          </div>
        </CalendarButtonTooltip>
      </CalendarButtonWrapper>
    </CalendarButtonRoot>
  );
};
