import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVc = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M8 0H0v16h8V0Z" fill="#338AF3" />
      <path
        d="M24 0h-8v16h8V0ZM10.044 9.304 8.479 6.956l1.565-2.348 1.565 2.348-1.565 2.348ZM13.957 9.304l-1.565-2.348 1.565-2.348 1.565 2.348-1.565 2.348ZM12 12.434l-1.565-2.348L12 7.74l1.565 2.347L12 12.434Z"
        fill="#6DA544"
      />
    </FlagRoot>
  );
};
