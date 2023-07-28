import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="M14.087 8a2.087 2.087 0 1 1-4.174 0 2.087 2.087 0 0 1 4.174 0Zm-3.218 0L12 7.477l1.131.521v.87L12 9.564l-1.13-.695v-.87Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M12 11.825a3.826 3.826 0 1 0 0-7.652 3.826 3.826 0 0 0 0 7.652Zm3.13-3.826a3.13 3.13 0 1 1-6.26 0 3.13 3.13 0 0 1 6.26 0Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15.13 8a3.13 3.13 0 1 1-6.26 0 3.13 3.13 0 0 1 6.26 0Zm-1.044 0a2.087 2.087 0 1 1-4.173 0 2.087 2.087 0 0 1 4.173 0Z"
        fill="#6DA544"
        fillRule="evenodd"
      />
      <path d="M13.13 6.956h-2.26V8h2.26V6.956Z" fill="#FFDA44" />
      <path d="M24 0H0v1.391h24V0ZM24 14.609H0V16h24v-1.391Z" fill="#A2001D" />
    </FlagRoot>
  );
};
