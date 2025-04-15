import { FiltersFilterProps } from './FiltersFilter.types';

import clsx from 'clsx';
import { getFiltersFilterUtilityClass } from './FiltersFilter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useBoolean } from '../../../hooks';
import { IconChevronDownW300, IconChevronUpW300 } from '../../../icons';
import { buttonClasses } from '../../Button';
import { InformationIcon } from '../../InformationIcon';
import { switchClasses } from '../../Switch';
import { Tooltip } from '../../Tooltip';

type FiltersFilterOwnerState = {
  classes?: FiltersFilterProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersFilterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFiltersFilterUtilityClass, classes);
};

const FiltersFilterRoot = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({});

const FiltersFilterHeader = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'Header',
  overridesResolver: (_props, styles) => styles.header,
})({
  paddingTop: '8px',
  display: 'flex',
  alignItems: 'center',
});

const FiltersFilterContainer = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'Header',
  overridesResolver: (_props, styles) => styles.header,
})({
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
});

const FiltersFilterTitle = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'Title',
  overridesResolver: (_props, styles) => styles.header,
})(({ theme }) => ({
  ...theme.typography.body200Medium,

  alignItems: 'center',
  color: theme.vars.palette.monoA.A800,
  display: 'flex',
  padding: '6px 0',

  '&:has(button)': {
    cursor: 'pointer',
    userSelect: 'none',
  },
}));

const FiltersFilterToggle = styled('button', {
  name: 'ESFiltersFilter',
  slot: 'Toggle',
  overridesResolver: (_props, styles) => styles.toggle,
})(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: '50%',
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  overflow: 'hidden',
  background: 'transparent',

  marginLeft: '2px',
  color: theme.vars.palette.monoA.A400,

  '&::-moz-focus-inner': {
    borderStyle: 'none',
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
  },
}));

const FiltersFilterInformationIcon = styled(InformationIcon, {
  name: 'ESFiltersFilter',
  slot: 'InformationIcon',
  overridesResolver: (_props, styles) => styles.informationIcon,
})({
  marginLeft: '8px',
});

const FiltersFilterEndAdornment = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'EndAdornment',
  overridesResolver: (_props, styles) => styles.endAdornment,
})(({ theme }) => ({
  paddingRight: '12px',
  marginLeft: 'auto',

  [`.${buttonClasses.variantText}.${buttonClasses.colorTertiary}`]: {
    '--icon': theme.vars.palette.monoA.A400,
  },

  [`.${switchClasses.root}`]: {
    margin: '0 -8px',
  },
}));

const FiltersFilterContent = styled('div', {
  name: 'ESFiltersFilter',
  slot: 'Content',
  overridesResolver: (_props, styles) => styles.content,
})({
  padding: '0 8px 8px',
});

export const FiltersFilter = (inProps: FiltersFilterProps) => {
  const {
    children,
    className,
    sx,
    title,
    endAdornment,
    TooltipProps,
    labelHide,
    labelShow,
    iconHide = <IconChevronDownW300 container containerSize="20px" />,
    iconShow = <IconChevronUpW300 container containerSize="20px" />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFiltersFilter',
  });

  const [open, toggleOpen] = useBoolean(true);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersFilterRoot className={clsx(classes.root, className)} sx={sx}>
      <FiltersFilterHeader>
        <FiltersFilterContainer>
          <FiltersFilterTitle onClick={toggleOpen}>
            {title}
            {!!children && (
              <FiltersFilterToggle aria-label={open ? labelHide : labelShow}>
                {open ? iconHide : iconShow}
              </FiltersFilterToggle>
            )}
          </FiltersFilterTitle>
          {!!TooltipProps && (
            <Tooltip {...TooltipProps}>
              <FiltersFilterInformationIcon variant="question" />
            </Tooltip>
          )}
        </FiltersFilterContainer>
        {!!endAdornment && <FiltersFilterEndAdornment>{endAdornment}</FiltersFilterEndAdornment>}
      </FiltersFilterHeader>
      {!!open && !!children && <FiltersFilterContent>{children}</FiltersFilterContent>}
    </FiltersFilterRoot>
  );
};
