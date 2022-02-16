import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0v7.814L0 8.008V0h24Z" fill="#0052B4" />
      <path
        d="M9.912 5.565a1.043 1.043 0 0 0-1.739-.777v-.614h.348v-.696h-.348V3.13h-.696v.348H7.13v.696h.347v.614a1.043 1.043 0 1 0-1.391 1.555v.614h3.478v-.614c.214-.191.348-.469.348-.778Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
