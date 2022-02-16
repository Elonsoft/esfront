import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M14.225 9.803a.348.348 0 1 0 .42-.555.348.348 0 0 0-.42.555Z" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0h12v16H12V0Zm6.481 6.48-.839 1.11-.833-.629-1.503 1.99a1.043 1.043 0 1 1-.555-.42l2.343-3.1L18.48 6.48Z"
        fill="#F0F0F0"
      />
      <path d="m15.5 7.54-.437-.579-.833.628-.84-1.11 1.388-1.048 1.158 1.531-.436.577Z" fill="#ACABB1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.936 8.116.63.834a1.044 1.044 0 1 0 .555-.42l-.75-.99-.435.576Zm1.779 1.2a.348.348 0 1 0-.555.419.348.348 0 0 0 .555-.42Z"
        fill="#ACABB1"
      />
    </FlagRoot>
  );
};
