import React, { useRef } from 'react';

import { DropzoneProps, FileError, FileRejection } from './Dropzone.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { validateFileType } from './validateFileType';

import { useDocumentEventListener, useDragOver } from '../../hooks';
import { ButtonBase } from '../ButtonBase';

/**
 * This component allows to select files on click or by drag and drop.
 */
export const Dropzone = (inProps: DropzoneProps): JSX.Element => {
  const {
    className,
    style,
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

  return (
    <div ref={ref} className={clsx('es-dropzone', className)} style={style}>
      <ButtonBase
        className={clsx(
          'es-dropzone__dropzone',
          error && 'es-dropzone__dropzone--error',
          isDragOver && 'es-dropzone__dropzone--drag-over',
          isDragOverDocument && 'es-dropzone__dropzone--drag-over-document'
        )}
        onClick={onClick}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDropzoneDrop}
      >
        <div className="es-dropzone__heading">
          {!!icon && !(isDragOverDocument && !!dragHeading) && <div className="es-dropzone__icon">{icon}</div>}

          {isDragOverDocument && !!dragHeading ? (
            <div className="es-dropzone__heading-text body200">{dragHeading}</div>
          ) : (
            !!heading && <div className="es-dropzone__heading-text body100">{heading}</div>
          )}
        </div>

        {isDragOverDocument && !!dragSubheading ? (
          <div className="es-dropzone__subheading caption">{dragSubheading}</div>
        ) : (
          !!subheading && <div className="es-dropzone__subheading caption">{subheading}</div>
        )}
      </ButtonBase>

      {!!helperText && (
        <div className={clsx('es-dropzone__helper-text', error && 'es-dropzone__helper-text--error', 'caption')}>
          {helperText}
        </div>
      )}
      <input
        ref={inputRef}
        accept={accept}
        className="es-dropzone__input"
        multiple={multiple}
        type="file"
        onChange={onInputChange}
      />
    </div>
  );
};
