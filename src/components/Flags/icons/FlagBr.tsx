import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="m12 3.579 6 4.42-6 4.422L6 8l6-4.421Z" fill="#FFDA44" />
      <path d="M11.999 10.526a2.526 2.526 0 1 0 0-5.052 2.526 2.526 0 0 0 0 5.052Z" fill="#F0F0F0" />
      <path
        d="M10.737 7.842c-.44 0-.863.067-1.262.19a2.526 2.526 0 0 0 4.594 1.417 4.257 4.257 0 0 0-3.332-1.607ZM14.48 8.484a2.526 2.526 0 0 0-4.801-1.481 5.196 5.196 0 0 1 4.801 1.481Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};
