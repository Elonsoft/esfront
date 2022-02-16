import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagAr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0ZM24 10.666H0V16h24v-5.334Z" fill="#338AF3" />
      <path
        d="m13.914 8-.782.368.416.757-.848-.162-.108.857-.591-.63-.591.63-.108-.857-.849.162.417-.757L10.088 8l.782-.367-.417-.757.849.162.108-.857.59.63.592-.63.107.857.85-.162-.417.757.782.367Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
