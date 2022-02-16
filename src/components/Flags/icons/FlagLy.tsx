import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#000" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#496E2D" />
      <path
        d="m13.19 7.064.42.579.681-.22-.42.578.42.579-.68-.222-.421.579V8.22L12.51 8l.68-.22v-.716Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.044 9.447a1.447 1.447 0 1 1 .689-2.72 1.78 1.78 0 1 0 0 2.546 1.44 1.44 0 0 1-.689.174Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
