import { FileInfoNameProps } from './FileInfoName.types';

import clsx from 'clsx';
import { getFileInfoNameUtilityClass } from './FileInfoName.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconCloseW350 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { buttonBaseClasses } from '../../ButtonBase';

type FileInfoNameOwnerState = {
  classes?: FileInfoNameProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoNameOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button']
  };

  return composeClasses(slots, getFileInfoNameUtilityClass, classes);
};

const FileInfoNameRoot = styled('div', {
  name: 'ESFileInfoName',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const FileInfoNameButton = styled(Button, {
  name: 'ESFileInfoName',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(() => ({
  marginLeft: 4,
  borderRadius: '50%',

  [`&.${buttonClasses.size24} .${buttonBaseClasses.wrapper}`]: {
    padding: '0px 4px'
  }
}));

export const FileInfoName = (inProps: FileInfoNameProps) => {
  const {
    children,
    className,
    sx,
    onDelete,
    labelDelete,
    iconDelete = <IconCloseW350 />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileInfoName'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoNameRoot className={clsx(classes.root, className)}>
      {children}
      {!!onDelete && (
        <FileInfoNameButton aria-label={labelDelete} className={classes.button} size="24" sx={sx} onClick={onDelete}>
          {iconDelete}
        </FileInfoNameButton>
      )}
    </FileInfoNameRoot>
  );
};
