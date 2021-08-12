import React from 'react';

import { DropzoneClasses } from './Dropzone.classes';

export type FileError = 'file-too-large' | 'file-invalid-type' | 'too-many-files';

export type DropzoneProps = {
  ref?: React.Ref<HTMLDivElement>;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DropzoneClasses>;
  /** Heading text. */
  heading?: string;
  /** Subheading text. */
  subheading?: string;
  /** Heading text when file is dragged over the page. */
  dragHeading?: string;
  /** Subheading text when file is dragged over the page. */
  dragSubheading?: string;
  /** Helper text. */
  helperText?: string;
  /** Indicate if component is in error state. */
  error?: boolean;
  /** Icon to display with heading. */
  icon?: React.ReactNode;
  /** Allow multiple files. */
  multiple?: boolean;
  /** Accepted file types.
   * @default '*'
   */
  accept?: string;
  /** Maximum file size (in bytes). */
  maxSize?: number;
  /** Callback fired when files were accepted. */
  onChange?: (event: React.ChangeEvent<unknown>, files: File[]) => void;
  /** Callback fired when files were rejected. */
  onReject?: (event: React.ChangeEvent<unknown>, rejections: FileRejection[]) => void;
};

export type FileRejection = {
  file: File;
  errors: FileError[];
};
