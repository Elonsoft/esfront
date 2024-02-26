import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="m14.961 5.362-.565 2.018-1.697-.313-1.092-2.251-2.95 1.047-.233-.656-.772-.095.582 1.64 2.03-.52.577 1.626-1.403 2.071 2.381 2.031-.451.53.303.716 1.13-1.323-1.466-1.499 1.12-1.313 2.495.18.569-3.078.684.126.469-.62-1.71-.317Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
