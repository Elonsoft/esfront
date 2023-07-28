import { FileInfoNameProps } from './FileInfoName.types';

import clsx from 'clsx';
import { getFileInfoNameUtilityClass } from './FileInfoName.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { IconCloseSmall } from '../../../icons';

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

const FileInfoNameButton = styled(IconButton, {
  name: 'ESFileInfoName',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(() => ({
  marginLeft: 4
}));

export const FileInfoName = (inProps: FileInfoNameProps) => {
  const {
    children,
    className,
    sx,
    onDelete,
    labelDelete,
    iconDelete = <IconCloseSmall />,
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
