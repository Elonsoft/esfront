import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagAf = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#D80027" />
      <path d="M24 0H15.48v15.969H24V0Z" fill="#496E2D" />
      <path d="M8.522 0H0v15.969h8.522V0Z" fill="#000" />
      <path
        d="M12 5.207a2.78 2.78 0 0 0-2.783 2.777 2.78 2.78 0 0 0 2.782 2.777 2.78 2.78 0 0 0 2.783-2.777 2.78 2.78 0 0 0-2.783-2.777Zm0 4.513c-.961 0-1.74-.777-1.74-1.736 0-.958.779-1.736 1.74-1.736.96 0 1.739.778 1.739 1.736 0 .959-.78 1.736-1.74 1.736Z"
        fill="#FFDA44"
      />
      <path d="M12 6.943a.695.695 0 0 0-.696.694V8.68h1.391V7.637A.695.695 0 0 0 12 6.943Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
