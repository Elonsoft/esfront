import React, { useRef } from 'react';

import clsx from 'clsx';
import { styled, useThemeProps } from '@material-ui/core/styles';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { getDropzoneUtilityClass } from './Dropzone.classes';

import { DropzoneProps, FileError, FileRejection } from './Dropzone.types';

import { ButtonBase, Typography } from '@material-ui/core';

import { useDragOver } from './useDragOver';
import { useDocumentEventListener } from '../hooks';
import { validateFileType } from '../utils';

type DropzoneStyleProps = {
  classes?: DropzoneProps['classes'];
  error: boolean;
  isDragOver: boolean;
  isDragOverDocument: boolean;
};

const useUtilityClasses = (styleProps: DropzoneStyleProps) => {
  const { classes, error, isDragOver, isDragOverDocument } = styleProps;

  const slots = {
    root: ['root'],
    dropzone: [
      'dropzone',
      error && 'dropzoneError',
      isDragOver && 'dropzoneDragOver',
      isDragOverDocument && 'dropzoneDragOverDocument'
    ],
    input: ['input'],
    icon: ['icon'],
    heading: ['heading'],
    headingText: ['headingText'],
    subheading: ['subheading'],
    helperText: ['helperText', error && 'helperTextError']
  };

  return composeClasses(slots, getDropzoneUtilityClass, classes);
};

const DropzoneRoot = styled('div', {
  name: 'ESDropzone',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'grid',
  gap: 8,
  gridAutoFlow: 'row'
}));

const DropzoneDropzone = styled(ButtonBase, {
  name: 'ESDropzone',
  slot: 'Dropzone',
  overridesResolver: (props, styles) => {
    const {
      styleProps: { error, isDragOver, isDragOverDocument }
    } = props;
    return [
      styles.dropzone,
      error && styles.dropzoneError,
      isDragOver && styles.dropzoneDragOver,
      isDragOverDocument && styles.dropzoneDragOverDocument
    ];
  }
})<{ styleProps: DropzoneStyleProps }>(({ theme, styleProps }) => ({
  width: '100%',
  backgroundColor: theme.palette.monoA.A50,
  border: `1px dashed ${theme.palette.monoA.A200}`,
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  padding: '22px 24px',
  transitionDuration: `${theme.transitions.duration.short}ms`,
  transitionProperty: 'background-color, border',
  transitionTimingFunction: theme.transitions.easing.easeInOut,
  ...(styleProps.isDragOverDocument && {
    backgroundColor: theme.palette.primary.A50,
    border: `1px dashed ${theme.palette.primary.A500}`
  }),
  '& .MuiTouchRipple-root': {
    transitionDuration: `${theme.transitions.duration.short}ms`,
    transitionProperty: 'background-color, border',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    ...(styleProps.isDragOver && {
      backgroundColor: theme.palette.primary.A100
    }),
    ...(styleProps.error && {
      backgroundColor: theme.palette.error.A50,
      border: `1px dashed ${theme.palette.error.A800}`
    })
  },
  '&:hover .MuiTouchRipple-root, &:focus-visible .MuiTouchRipple-root': {
    backgroundColor: theme.palette.monoA.A50
  }
}));

const DropzoneHeading = styled('div', {
  name: 'ESDropzone',
  slot: 'Heading',
  overridesResolver: (props, styles) => styles.heading
})(({ theme }) => ({
  alignItems: 'center',
  color: theme.palette.primary[300],
  display: 'grid',
  gap: 4,
  gridAutoFlow: 'column',
  justifyContent: 'center'
}));

const DropzoneHeadingText = styled(Typography, {
  name: 'ESDropzone',
  slot: 'HeadingText',
  overridesResolver: (props, styles) => styles.headingText
})(({ theme }) => ({
  paddingBottom: 8,
  paddingTop: 8,
  lineHeight: theme.typography.pxToRem(16)
}));

const DropzoneSubheading = styled(Typography, {
  name: 'ESDropzone',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.subheading
})(({ theme }) => ({
  color: theme.palette.monoA.A500,
  marginTop: 4
}));

const DropzoneIcon = styled('div', {
  name: 'ESDropzone',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.icon
})(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
}));

const DropzoneInput = styled('input', {
  name: 'ESDropzone',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input
})(() => ({
  display: 'none'
}));

const DropzoneHelperText = styled(Typography, {
  name: 'ESDropzone',
  slot: 'HelperText',
  overridesResolver: (props, styles) => {
    const {
      styleProps: { error }
    } = props;
    return [styles.helperText, error && styles.helperTextError];
  }
})<{ styleProps: DropzoneStyleProps }>(({ theme, styleProps }) => ({
  color: theme.palette.monoA.A700,
  ...(styleProps.error && {
    color: theme.palette.error.A800
  })
}));

export const Dropzone = (inProps: DropzoneProps): JSX.Element => {
  const {
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
    className,
    ref,
    onChange,
    onReject,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDropzone'
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
    const acceptedFiles: File[] = [];
    const rejectedFiles: FileRejection[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const typeMatch = validateFileType(file, accept);
      const sizeMatch = validateFileSize(file);

      if (typeMatch && sizeMatch) {
        acceptedFiles.push(file);
      } else {
        const errors: FileError[] = [];
        !typeMatch && errors.push('file-invalid-type');
        !sizeMatch && errors.push('file-too-large');
        rejectedFiles.push({
          file,
          errors
        });
      }
    }
    if (rejectedFiles.length) {
      onReject && onReject(event, rejectedFiles);
    } else if (!multiple && acceptedFiles.length > 1) {
      acceptedFiles.forEach((file) => {
        rejectedFiles.push({
          file,
          errors: ['too-many-files']
        });
      });
      onReject && onReject(event, rejectedFiles);
    } else {
      onChange && onChange(event, acceptedFiles);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onDropzoneDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDrop();
    event.dataTransfer && onFileList(event, event.dataTransfer.files);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files && onFileList(event, event.target.files);
  };

  useDocumentEventListener('dragenter', callbacks.onDragEnter);
  useDocumentEventListener('dragleave', callbacks.onDragLeave);
  useDocumentEventListener('drop', callbacks.onDrop);

  const styleProps = { ...props, error, isDragOver, isDragOverDocument };
  const classes = useUtilityClasses(styleProps);

  return (
    <DropzoneRoot ref={ref} className={clsx(classes.root, className)}>
      <DropzoneDropzone
        data-testid="dropzone"
        className={clsx(classes.dropzone)}
        styleProps={styleProps}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDropzoneDrop}
        onClick={onClick}
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
              <DropzoneHeadingText className={classes.headingText} variant="button">
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
        <DropzoneHelperText className={classes.helperText} styleProps={styleProps} variant="caption">
          {helperText}
        </DropzoneHelperText>
      )}
      <DropzoneInput
        data-testid="input"
        ref={inputRef}
        className={classes.input}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onInputChange}
      />
    </DropzoneRoot>
  );
};
