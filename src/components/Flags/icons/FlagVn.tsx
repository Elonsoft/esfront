import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M9.218 0H0v16h24V0H9.218Z" fill="#D80027" />
      <path
        d="m12 3.373 1.062 3.269H16.5l-2.781 2.02 1.062 3.27L12 9.912l-2.781 2.02 1.062-3.27L7.5 6.643h3.438L12 3.372Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
