import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        clipRule="evenodd"
        d="M16.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.136 0a2.659 2.659 0 0 0 3.924 2.34 3.273 3.273 0 1 1 0-4.679A2.659 2.659 0 0 0 10.364 8Zm2.962-.657-.772-1.064v1.314L11.303 8l1.25.407-.002 1.314.774-1.063 1.25.407L13.802 8l.774-1.063-1.25.406Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
