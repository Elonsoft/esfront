import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMk = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path
        clipRule="evenodd"
        d="M0 0v5.98l9.25 1.423a2.805 2.805 0 0 0 0 .846L0 9.672V16h.854l8.902-6.528c.168.228.37.43.598.598L6.006 16h4.736l.835-5.423a2.8 2.8 0 0 0 .846 0L13.258 16h4.736l-4.348-5.93c.228-.168.43-.37.598-.598L23.146 16H24V9.672l-9.25-1.423a2.806 2.806 0 0 0 0-.846L24 5.98V0h-1.328l-8.428 6.18a2.8 2.8 0 0 0-.599-.598L17.74 0h-4.535l-.78 5.076a2.803 2.803 0 0 0-.847 0L10.796 0H6.261l4.094 5.582a2.8 2.8 0 0 0-.599.599L1.328 0H0Zm14.087 7.826a2.087 2.087 0 1 1-4.174 0 2.087 2.087 0 0 1 4.174 0Z"
        fill="#D80027"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
