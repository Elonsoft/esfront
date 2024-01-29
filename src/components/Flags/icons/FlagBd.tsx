import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBd = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#496E2D" />
      <path d="M10.262 11.478a3.478 3.478 0 1 0 0-6.957 3.478 3.478 0 0 0 0 6.957Z" fill="#D80027" />
    </FlagRoot>
  );
};
