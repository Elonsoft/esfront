import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M0 0v16h24V0H0Z" fill="#D80027" />
      <path
        d="M16.5 6.617h-3.438L12 3.347l-1.062 3.27H7.5l2.781 2.02-1.062 3.27L12 9.887l2.781 2.02-1.062-3.27 2.781-2.02Zm-5.44 1.767.359-1.105h1.162l.36 1.105-.941.684-.94-.684Zm1.306-1.767h-.732L12 5.49l.366 1.127Zm1.138 1.358-.227-.696h1.185l-.958.696Zm-2.781-.696-.227.696-.958-.696h1.185Zm-.245 2.894.366-1.126.593.43-.959.696Zm2.085-.696.593-.43.366 1.126-.959-.696Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
