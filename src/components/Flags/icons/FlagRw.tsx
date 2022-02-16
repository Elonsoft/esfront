import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagRw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.985h24V0Z" fill="#338AF3" />
      <path d="M24 11.996H0V16h24v-4.004Z" fill="#496E2D" />
      <path
        d="M24 7.992H0v4.004h24V7.992ZM13.043 4.677l.978.46-.52.945 1.06-.203.135 1.07.739-.787.739.788.134-1.071 1.06.203-.52-.946.978-.459-.977-.459.52-.945-1.061.202-.134-1.07-.74.787-.739-.787-.134 1.07-1.06-.202.52.945-.978.46Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
