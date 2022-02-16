import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVu = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#000" />
      <path d="M.42 15.969h.84l9.1-7.204H24v7.204H0l10.087-7.985H24v.26H10.178L.42 15.97Z" fill="#6DA544" />
      <path d="M24 7.203V0H1.26l9.1 7.203H24Z" fill="#D80027" />
      <path d="M24 7.724v.26H10.087L0 0h.42l9.758 7.724H24Z" fill="#D80027" />
      <path d="M.42 0H0v.332l9.667 7.652L0 15.636v.333h.42l9.758-7.724H24v-.521H10.178L.42 0Z" fill="#FFDA44" />
      <path
        d="M2.987 9.686v-.668c.668 0 1.212-.543 1.212-1.21a.858.858 0 0 0-.858-.857.585.585 0 0 0-.584.583c0 .206.168.373.374.373a.211.211 0 0 0 .211-.21h.67c0 .485-.395.88-.881.88a1.044 1.044 0 0 1-1.044-1.043c0-.69.563-1.252 1.254-1.252.843 0 1.529.684 1.529 1.525a1.883 1.883 0 0 1-1.883 1.88Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
