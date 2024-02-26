import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagDz = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#496E2D" />
      <path d="M24 0H12v16h12V0Z" fill="#F0F0F0" />
      <path
        d="m13.72 6.465-.657.905L12 7.025l.657.904-.656.904 1.063-.346.657.904V8.274l1.062-.346-1.063-.345V6.465Z"
        fill="#D80027"
      />
      <path
        d="M12.664 10.26a2.26 2.26 0 1 1 1.075-4.25 2.783 2.783 0 1 0 0 3.978 2.25 2.25 0 0 1-1.075.273Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
