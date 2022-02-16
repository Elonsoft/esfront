import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagDj = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="M24 0v7.814L0 8.008V0h24Z" fill="#338AF3" />
      <path d="M12 8 0 16V0l12 8Z" fill="#F0F0F0" />
      <path
        d="m4.435 5.913.518 1.594h1.676l-1.356.985.518 1.594-1.356-.985-1.357.985.518-1.594-1.356-.985h1.677l.518-1.594Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
