import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMx = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M16 0H0v16h24V0h-8Z" fill="#D80027" />
      <path d="M16 0H8v16h8V0Z" fill="#F0F0F0" />
      <path d="M8 0H0v16h8V0ZM9.75 8a2.25 2.25 0 0 0 4.5 0v-.75h-4.5V8Z" fill="#6DA544" />
      <path
        d="M15 6.5h-2.25a.75.75 0 0 0-1.5 0H9c0 .414.36.75.775.75H9.75c0 .414.336.75.75.75 0 .414.336.75.75.75h1.5A.75.75 0 0 0 13.5 8a.75.75 0 0 0 .75-.75h-.025c.414 0 .775-.336.775-.75Z"
        fill="#FF9811"
      />
    </FlagRoot>
  );
};
