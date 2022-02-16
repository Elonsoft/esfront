import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagAz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0H0v5.333h24V0Z" fill="#338AF3" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#6DA544" />
      <path d="M12.15 9.95a1.95 1.95 0 1 1 .928-3.666 2.4 2.4 0 1 0 0 3.431 1.94 1.94 0 0 1-.928.235Z" fill="#F0F0F0" />
      <path
        d="m13.65 6.65.258.726.697-.331-.331.696.726.258-.726.259.33.696-.696-.331-.258.726-.258-.726-.697.331.332-.696-.727-.259.726-.258-.33-.696.696.33.258-.726Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
