import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M24 0H0v3.2h24V0ZM3.506 6.4H0v3.2h2.466l.301-.927L.913 7.326h2.292l.301-.927ZM4.32 6.4l.301.926h2.292L5.06 8.673l.3.926H24V6.4H4.32ZM4.041 9.6l-.128-.094-.128.093h.256ZM0 12.8h24V16H0v-3.2Z"
        fill="#D80027"
      />
      <path
        clipRule="evenodd"
        d="m0 16 12-8L0 0v16Zm4.621-8.674-.708-2.18-.708 2.18H.913l1.854 1.347-.708 2.18 1.854-1.347 1.854 1.347-.708-2.18 1.854-1.347H4.621Z"
        fill="#0052B4"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
