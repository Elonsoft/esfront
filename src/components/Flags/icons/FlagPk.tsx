import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagPk = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        clipRule="evenodd"
        d="M6 0h18v16H6V0Zm6.427 9.275a3.25 3.25 0 0 0 5.562-.491 4 4 0 1 1-3.35-4.635 3.25 3.25 0 0 0-2.213 5.127Zm5.295-4.288-.82-.883.144 1.196-1.093.507 1.182.233.144 1.196.586-1.052 1.183.232-.82-.883.587-1.052-1.093.506Z"
        fill="#496E2D"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
