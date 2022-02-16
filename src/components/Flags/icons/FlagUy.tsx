import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagUy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0h12v2.286H12V0Zm0 6.857h12V4.571H12v2.286Zm12 4.572V9.143H0v2.286h24Zm-24 4.57v-2.285h24V16H0Z"
        fill="#338AF3"
      />
      <path
        d="m9 4.572-1.226.576.653 1.188-1.331-.255-.169 1.345L6 6.436l-.927.99-.169-1.345-1.33.254.652-1.187L3 4.572l1.226-.577-.653-1.187 1.331.255.169-1.345.927.989.927-.99.169 1.345 1.33-.254-.652 1.187L9 4.572Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
