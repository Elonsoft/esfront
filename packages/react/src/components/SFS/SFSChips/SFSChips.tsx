import { SFSChipsProps } from './SFSChips.types';

import clsx from 'clsx';
import { getSFSChipsUtilityClass } from './SFSChips.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

import { IconCloseW400 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { buttonBaseClasses } from '../../ButtonBase';
import { chipClasses } from '../../Chip';
import { chipsClasses } from '../../Chips';
import { Tooltip } from '../../Tooltip';

type SFSChipsOwnerState = {
  classes?: SFSChipsProps['classes'];
};

const useUtilityClasses = (ownerState: SFSChipsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
  };

  return composeClasses(slots, getSFSChipsUtilityClass, classes);
};

const SFSChipsRoot = styled('div', {
  name: 'ESSFSChips',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  alignItems: 'flex-start',
  display: 'flex',
  gap: '8px',
  padding: '0 12px 14px 14px',
  width: '100%',

  [`& .${chipsClasses.root}`]: {
    width: '100%',
    minWidth: 0,

    [`.${chipsClasses.button}.${buttonClasses.size300}.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      paddingRight: '4px',
    },
  },

  [`& .${chipClasses.root}.${chipClasses.variantFilled}`]: {
    '--background': theme.vars.palette.monoA.A50,
    boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A50}`,

    [`&.${chipClasses.disabled}`]: {
      boxShadow: `inset 0px 0px 0px 1px  ${theme.vars.palette.monoA.A50}`,
    },

    [`&.${chipClasses.size100}`]: {
      [`&:has(.${chipClasses.deleteIcon}) .${chipClasses.label}`]: {
        paddingRight: 0,
      },

      [`& .${chipClasses.label}`]: {
        ...theme.typography.caption,
      },
    },
  },
}));

const SFSChipsButton = styled(Button, {
  name: 'ESSFSChips',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.button,
})(({ theme }) => ({
  '--icon': theme.vars.palette.monoA.A400,
  flexShrink: 0,
}));

export const SFSChips = (inProps: SFSChipsProps) => {
  const {
    className,
    children,
    sx,
    labelDelete,
    iconDelete = <IconCloseW400 container containerSize="20px" />,
    onDelete,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSChips',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSChipsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
      {!!onDelete && (
        <Tooltip distance={2} placement="left" title={labelDelete} {...TooltipProps}>
          <SFSChipsButton
            rounded
            aria-label={labelDelete}
            className={classes.button}
            color="tertiary"
            size="300"
            variant="text"
            onClick={onDelete}
          >
            {iconDelete}
          </SFSChipsButton>
        </Tooltip>
      )}
    </SFSChipsRoot>
  );
};
