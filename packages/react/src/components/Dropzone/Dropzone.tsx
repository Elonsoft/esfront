import React, { useRef } from 'react';

import { DropzoneProps, FileError, FileRejection } from './Dropzone.types';

import clsx from 'clsx';
import { dropzoneClasses, getDropzoneUtilityClass } from './Dropzone.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { Typography } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

import { validateFileType } from './validateFileType';

import { useDocumentEventListener, useDragOver } from '../../hooks';
import { ButtonBase, buttonBaseClasses } from '../ButtonBase';
import { touchRippleClasses } from '../TouchRipple';

type DropzoneOwnerState = {
  classes?: DropzoneProps['classes'];
  error: boolean;
  isDragOver: boolean;
  isDragOverDocument: boolean;
};

const useUtilityClasses = (ownerState: DropzoneOwnerState) => {
  const { classes, error, isDragOver, isDragOverDocument } = ownerState;

  const slots = {
    root: ['root'],
    dropzone: [
      'dropzone',
      error && 'dropzoneError',
      isDragOver && 'dropzoneDragOver',
      isDragOverDocument && 'dropzoneDragOverDocument',
    ],
    input: ['input'],
    icon: ['icon'],
    heading: ['heading'],
    headingText: ['headingText'],
    subheading: ['subheading'],
    helperText: ['helperText', error && 'helperTextError'],
  };

  return composeClasses(slots, getDropzoneUtilityClass, classes);
};

const DropzoneRoot = styled('div', {
  name: 'ESDropzone',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'grid',
  gap: 8,
  gridAutoFlow: 'row',
}));

const DropzoneDropzone = styled(ButtonBase, {
  name: 'ESDropzone',
  slot: 'Dropzone',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { error, isDragOver, isDragOverDocument },
    } = props;
    return [
      styles.dropzone,
      error && styles.dropzoneError,
      isDragOver && styles.dropzoneDragOver,
      isDragOverDocument && styles.dropzoneDragOverDocument,
    ];
  },
})<{ ownerState: DropzoneOwnerState }>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  padding: '32px 24px',
  border: `1px dashed ${theme.vars.palette.monoA.A200}`,
  borderRadius: 4,
  '--background': theme.vars.palette.monoA.A25,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`& .${buttonBaseClasses.wrapper}`]: {
    flexDirection: 'column',
  },

  variants: [
    {
      props: {
        isDragOver: true,
      },
      style: {
        [`& .${touchRippleClasses.root}`]: {
          backgroundColor: 'var(--hovered)',
        },
      },
    },
    {
      props: {
        error: true,
      },
      style: {
        '--background': theme.vars.palette.error.A50,
        border: `1px dashed ${theme.vars.palette.error.A800}`,

        [` .${dropzoneClasses.heading}`]: {
          color: theme.vars.palette.error[300],
        },
      },
    },
  ],
}));

const DropzoneHeading = styled('div', {
  name: 'ESDropzone',
  slot: 'Heading',
  overridesResolver: (props, styles) => styles.heading,
})(({ theme }) => ({
  alignItems: 'center',
  color: theme.vars.palette.primary[300],
  display: 'grid',
  gap: '4px',
  gridAutoFlow: 'column',
  justifyContent: 'center',
  minHeight: '32px',
}));

const DropzoneHeadingText = styled(Typography, {
  name: 'ESDropzone',
  slot: 'HeadingText',
  overridesResolver: (props, styles) => styles.headingText,
})({
  paddingTop: '4px',
  paddingBottom: '4px',
});

const DropzoneSubheading = styled(Typography, {
  name: 'ESDropzone',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.subheading,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
  marginTop: '4px',
}));

const DropzoneIcon = styled('div', {
  name: 'ESDropzone',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.icon,
})(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

const DropzoneInput = styled('input', {
  name: 'ESDropzone',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input,
})(() => ({
  display: 'none',
}));

const DropzoneHelperText = styled(Typography, {
  name: 'ESDropzone',
  slot: 'HelperText',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { error },
    } = props;
    return [styles.helperText, error && styles.helperTextError];
  },
})<{ ownerState: DropzoneOwnerState }>(({ theme }) => ({
  color: theme.vars.palette.monoA.A700,

  variants: [
    {
      props: {
        error: true,
      },
      style: {
        color: theme.vars.palette.error.A800,
      },
    },
  ],
}));

/**
 * This component allows to select files on click or by drag and drop.
 */
export const Dropzone = (inProps: DropzoneProps): JSX.Element => {
  const {
    className,
    sx,
    heading,
    subheading,
    dragHeading,
    dragSubheading,
    helperText,
    error = false,
    icon,
    multiple,
    accept = '*',
    maxSize,
    ref,
    onChange,
    onReject,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESDropzone',
  });

  const { isDragOver, onDragEnter, onDragLeave, onDrop } = useDragOver();
  const { isDragOver: isDragOverDocument, ...callbacks } = useDragOver();

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * @param file File to validate.
   * @returns True if file size is less than maxSize, false otherwise.
   */
  const validateFileSize = (file: File): boolean => (maxSize ? maxSize >= file.size : true);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const onFileList = (event: React.ChangeEvent<unknown>, files: FileList) => {
    let acceptedFiles: File[] = [];
    const rejectedFiles: FileRejection[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const typeMatch = validateFileType(file, accept);
      const sizeMatch = validateFileSize(file);

      if (typeMatch && sizeMatch) {
        acceptedFiles.push(file);
      } else {
        const errors: FileError[] = [];

        if (!typeMatch) {
          errors.push('file-invalid-type');
        }

        if (!sizeMatch) {
          errors.push('file-too-large');
        }

        rejectedFiles.push({
          file,
          errors,
        });
      }
    }

    if (!multiple && acceptedFiles.length > 1) {
      acceptedFiles.slice(1).forEach((file) => {
        rejectedFiles.push({
          file,
          errors: ['too-many-files'],
        });
      });

      acceptedFiles = [acceptedFiles[0]];
    }

    if (rejectedFiles.length) {
      onReject?.(event, rejectedFiles);
    }

    if (acceptedFiles.length) {
      onChange?.(event, acceptedFiles);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onDropzoneDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDrop();

    if (event.dataTransfer) {
      onFileList(event, event.dataTransfer.files);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onFileList(event, event.target.files);
    }
  };

  useDocumentEventListener('dragenter', callbacks.onDragEnter);
  useDocumentEventListener('dragleave', callbacks.onDragLeave);
  useDocumentEventListener('drop', callbacks.onDrop);

  const ownerState = { ...props, error, isDragOver, isDragOverDocument };
  const classes = useUtilityClasses(ownerState);

  return (
    <DropzoneRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
      <DropzoneDropzone
        className={clsx(classes.dropzone)}
        data-testid="dropzone"
        ownerState={ownerState}
        onClick={onClick}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDropzoneDrop}
      >
        <DropzoneHeading className={classes.heading}>
          {!!icon && !(isDragOverDocument && !!dragHeading) && (
            <DropzoneIcon className={classes.icon} data-testid="icon">
              {icon}
            </DropzoneIcon>
          )}

          {isDragOverDocument && !!dragHeading ? (
            <DropzoneHeadingText className={classes.headingText} variant="body200">
              {dragHeading}
            </DropzoneHeadingText>
          ) : (
            !!heading && (
              <DropzoneHeadingText className={classes.headingText} variant="body100">
                {heading}
              </DropzoneHeadingText>
            )
          )}
        </DropzoneHeading>

        {isDragOverDocument && !!dragSubheading ? (
          <DropzoneSubheading className={classes.subheading} variant="caption">
            {dragSubheading}
          </DropzoneSubheading>
        ) : (
          !!subheading && (
            <DropzoneSubheading className={classes.subheading} variant="caption">
              {subheading}
            </DropzoneSubheading>
          )
        )}
      </DropzoneDropzone>

      {!!helperText && (
        <DropzoneHelperText className={classes.helperText} ownerState={ownerState} variant="caption">
          {helperText}
        </DropzoneHelperText>
      )}
      <DropzoneInput
        ref={inputRef}
        accept={accept}
        className={classes.input}
        data-testid="input"
        multiple={multiple}
        type="file"
        onChange={onInputChange}
      />
    </DropzoneRoot>
  );
};
