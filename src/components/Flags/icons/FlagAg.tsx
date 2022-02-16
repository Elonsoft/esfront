import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagAg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#000" />
      <path d="M4.16 6.4a8.036 8.036 0 0 0 0 3.2l7.84.487 7.84-.487a8.04 8.04 0 0 0 0-3.2" fill="#0052B4" />
      <path d="M19.84 9.6H4.16a8.003 8.003 0 0 0 15.68 0Z" fill="#F0F0F0" />
      <path
        d="M15.478 6.4H8.521l1.422-.669-.757-1.376 1.543.295.196-1.56L12 4.238l1.075-1.146.195 1.559 1.544-.295-.757 1.376 1.421.669Z"
        fill="#FFDA44"
      />
      <path d="M12 16 0 0v16h12ZM24 16V0L12 16h12Z" fill="#A2001D" />
    </FlagRoot>
  );
};
