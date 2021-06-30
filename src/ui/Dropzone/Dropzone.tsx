import React, { useRef } from 'react';

import clsx from 'clsx';
import { useStyles } from './Dropzone.styles';

import { DropzoneProps, FileError, FileRejection } from './Dropzone.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';
import { ButtonBase, Typography } from '@material-ui/core';

import { useDragOver } from './useDragOver';
import { useDocumentEventListener } from '../hooks';
import { validateFileType } from '../utils';

export const Dropzone = (inProps: DropzoneProps): JSX.Element => {
  const {
    heading,
    subheading,
    dragHeading,
    dragSubheading,
    helperText,
    error,
    icon,
    multiple,
    accept = '*',
    maxSize,
    classes,
    className,
    ref,
    onChange,
    onReject
  } = useThemeProps({
    props: inProps,
    name: 'ESDropzone'
  });
  const styles = useStyles({ classes });

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

  return (
    <div ref={ref} className={clsx(styles.root, className)}>
      <ButtonBase
        data-testid="dropzone"
        className={clsx(
          styles.dropzone,
          !!error && styles.dropzoneError,
          isDragOver && styles.dropzoneDragOver,
          isDragOverDocument && styles.dropzoneDragOverDocument
        )}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDropzoneDrop}
        onClick={onClick}
      >
        <div className={styles.heading}>
          {!!icon && !(isDragOverDocument && !!dragHeading) && (
            <div className={styles.icon} data-testid="icon">
              {icon}
            </div>
          )}

          {isDragOverDocument && !!dragHeading ? (
            <Typography className={styles.headingText} variant="body200">
              {dragHeading}
            </Typography>
          ) : (
            !!heading && (
              <Typography className={styles.headingText} variant="button">
                {heading}
              </Typography>
            )
          )}
        </div>

        {isDragOverDocument && !!dragSubheading ? (
          <Typography className={styles.subheading} variant="caption">
            {dragSubheading}
          </Typography>
        ) : (
          !!subheading && (
            <Typography className={styles.subheading} variant="caption">
              {subheading}
            </Typography>
          )
        )}
      </ButtonBase>

      {!!helperText && (
        <Typography className={clsx(styles.helperText, !!error && styles.errorText)} variant="caption">
          {helperText}
        </Typography>
      )}
      <input
        data-testid="input"
        ref={inputRef}
        className={styles.input}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onInputChange}
      />
    </div>
  );
};
