import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="M24 0H0v5.333h24V0Z" fill="#FFDA44" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#D80027" />
      <path
        d="M18 6.653h-4.584L12 2.293l-1.416 4.36H6l3.708 2.694-1.416 4.36L12 11.042l3.708 2.663-1.416-4.36L18 6.654Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
