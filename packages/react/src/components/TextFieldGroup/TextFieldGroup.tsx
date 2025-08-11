import { TextFieldGroupProps } from './TextFieldGroup.types';

import clsx from 'clsx';
import { getTextFieldGroupUtilityClass } from './TextFieldGroup.classes';

import { Breakpoint, styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { textFieldClasses } from '@mui/material/TextField';
import composeClasses from '@mui/utils/composeClasses';

type TextFieldGroupOwnerState = {
  classes?: TextFieldGroupProps['classes'];
  breakpoint: number | Breakpoint;
};

const useUtilityClasses = (ownerState: TextFieldGroupOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getTextFieldGroupUtilityClass, classes);
};

export const TextFieldGroupRoot = styled('div', {
  name: 'ESTextFieldGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: TextFieldGroupOwnerState }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  gap: '24px',

  variants: [
    {
      props: (props: { breakpoint: number | Breakpoint }) => !!props.breakpoint,
      style: (props: { breakpoint: number | Breakpoint }) => ({
        [theme.breakpoints.up(props.breakpoint)]: {
          flexDirection: 'row',
          gap: 0,

          [`& .${textFieldClasses.root}:first-of-type .${outlinedInputClasses.root}`]: {
            borderRadius: '4px 0 0 4px',
          },

          [`& .${textFieldClasses.root} .${outlinedInputClasses.root}`]: {
            borderRadius: '0',
          },

          [`& .${textFieldClasses.root}:last-of-type .${outlinedInputClasses.root}`]: {
            borderRadius: '0 4px 4px 0',
          },

          [`& .${textFieldClasses.root}:not(:last-of-type) .${outlinedInputClasses.root}`]: {
            [`&:hover .${outlinedInputClasses.notchedOutline}, 
        &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
              borderRightWidth: '2px',
            },

            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderRightWidth: '0.5px',
            },
          },

          [`& .${textFieldClasses.root}:not(:first-of-type) .${outlinedInputClasses.root}`]: {
            [`&:hover .${outlinedInputClasses.notchedOutline}, 
        &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
              borderLeftWidth: '2px',
            },

            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderLeftWidth: '0.5px',
            },
          },

          [`& .${textFieldClasses.root}`]: {
            flex: 1,

            [`& .${outlinedInputClasses.root}.${outlinedInputClasses.error}`]: {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderWidth: '2px',
              },
            },
          },
        },
      }),
    },
  ],

  //
}));

/**
 * This component allows to group multiple text fields for related information.
 */
export const TextFieldGroup = (inProps: TextFieldGroupProps) => {
  const {
    className,
    children,
    sx,
    breakpoint = 'tabletXS',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESTextFieldGroup',
  });

  const ownerState = { breakpoint, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TextFieldGroupRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {children}
    </TextFieldGroupRoot>
  );
};
