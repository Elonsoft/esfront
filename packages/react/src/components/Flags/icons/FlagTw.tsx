import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M12 0H0v8h12V0Z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="M7.62 4.527 8.74 4l-1.12-.526.597-1.084L7 2.622l-.154-1.227-.846.902-.847-.902L5 2.622 3.785 2.39l.596 1.084L3.261 4l1.12.527-.596 1.084L5 5.378l.154 1.228.847-.903.846.903.154-1.228 1.216.233-.596-1.084ZM7.36 4a1.36 1.36 0 1 1-2.719 0 1.36 1.36 0 0 1 2.72 0Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
      <path d="M6.001 4.91a.91.91 0 0 1 0-1.819.91.91 0 0 1 0 1.818Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
