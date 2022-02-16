import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="m14.391 3.826-.977-.46.52-.946-1.06.203-.135-1.072L12 2.34l-.739-.789-.134 1.072-1.061-.203.52.946-.977.46h4.782Z"
        fill="#D80027"
      />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#496E2D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h24v5.333H0V0Zm13.414 3.366.977.46H9.61l.977-.46-.52-.946 1.06.203.135-1.072.739.789.739-.789.134 1.072 1.061-.203-.52.946Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
