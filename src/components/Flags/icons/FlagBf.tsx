import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBf = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="M24 0H0v8h24V0Z" fill="#D80027" />
      <path
        d="m12 5.217.604 1.86h1.956l-1.583 1.15.605 1.86-1.583-1.15-1.582 1.15.605-1.86-1.583-1.15h1.956L12 5.217Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
