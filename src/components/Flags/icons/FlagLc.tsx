import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagLc = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path d="M9.043 10.782h5.913L12 3.826l-2.956 6.956Z" fill="#F3F3F3" />
      <path d="M10.07 10.087 12 5.699l1.928 4.388H10.07Z" fill="#333" />
      <path d="M9.043 10.782h5.913L12 8l-2.956 2.782Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
