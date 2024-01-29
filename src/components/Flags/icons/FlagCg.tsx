import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="m20.8 0-16 16H0V0h20.8Z" fill="#6DA544" />
      <path d="m23.443 0-16 16H.558l16-16h6.886Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
