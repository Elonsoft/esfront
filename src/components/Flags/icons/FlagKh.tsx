import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagKh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333Z" fill="#0052B4" />
      <path
        d="M14.226 9.218v-.835h-.557V7.27l-.557-.557-.556.557V6.157l-.557-.557-.556.557V7.27l-.557-.557-.556.557v1.113h-.557v.835h-.556v.834h5.565v-.834h-.556Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
