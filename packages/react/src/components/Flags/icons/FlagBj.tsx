import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBj = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#6DA544" />
      <path d="M24 0H9.216v7.984h14.782V0Z" fill="#FFDA44" />
      <path d="M24 7.984H9.216v7.985h14.782V7.984Z" fill="#D80027" />
    </FlagRoot>
  );
};
