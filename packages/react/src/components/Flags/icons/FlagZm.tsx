import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagZm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#496E2D" />
      <path d="M18.667 8H16v8h2.667V8Z" fill="#D80027" />
      <path
        d="M23 5.163h-2.25a.75.75 0 0 0-1.5 0H17c0 .414.36.75.775.75h-.025c0 .414.336.75.75.75 0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75.75.75 0 0 0 .75-.75h-.025c.414 0 .775-.336.775-.75ZM24 8h-2.666v8H24V8Z"
        fill="#FF9811"
      />
      <path d="M21.333 8h-2.667v8h2.667V8Z" fill="#000" />
    </FlagRoot>
  );
};
