import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#496E2D" />
      <path d="M12 10.009a4.5 4.5 0 0 1-4.395-3.536 4.5 4.5 0 1 0 8.79 0A4.5 4.5 0 0 1 12 10.009Z" fill="#FFDA44" />
      <path
        d="m12 4.062.419 1.29h1.355l-1.096.796.419 1.289L12 6.64l-1.097.797.42-1.29-1.097-.796h1.355L12 4.062Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
