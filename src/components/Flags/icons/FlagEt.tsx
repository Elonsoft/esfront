import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagEt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path clipRule="evenodd" d="M0 0h24v5.333H12.095L12 5.037l-.096.296H0V0Z" fill="#6DA544" fillRule="evenodd" />
      <path
        clipRule="evenodd"
        d="M11.652 10.667H0V16h24v-5.333H12.348v.115h-.696v-.115Z"
        fill="#D80027"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15.826 8a3.826 3.826 0 1 1-7.652 0 3.826 3.826 0 0 1 7.652 0ZM12.53 6.676 12 5.037l-.532 1.637-.821-1.13-.563.409.879 1.21h-1.89l1.353.982-1.179.384.215.661 1.329-.432-.602 1.848 1.464-1.065v1.241h.696v-1.24l1.465 1.066-.605-1.85 1.33.432.216-.661-1.18-.384 1.354-.982h-1.89l.879-1.21-.563-.409-.822 1.132Z"
        fill="#0052B4"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
