import { SFSRowProps } from './SFSRow.types';

import clsx from 'clsx';
import { getSFSRowUtilityClass } from './SFSRow.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type SFSRowOwnerState = {
  classes?: SFSRowProps['classes'];
};

const useUtilityClasses = (ownerState: SFSRowOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getSFSRowUtilityClass, classes);
};

const SFSRowRoot = styled('div', {
  name: 'ESSFSRow',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({
  display: 'flex',
  padding: '8px',

  '& .MuiDivider-root': {
    margin: '8px 2px',
    height: '16px',
  },
}));

export const SFSRow = (inProps: SFSRowProps) => {
  const { className, children, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESSFSRow',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSRowRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </SFSRowRoot>
  );
};
