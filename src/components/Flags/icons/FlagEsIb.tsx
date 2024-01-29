import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagEsIb = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="M24 3.555H0v1.777h24V3.555ZM24 7.11H0v1.778h24V7.111ZM24 10.666H0v1.778h24v-1.778ZM24 14.222H0V16h24v-1.778ZM24 0H0v1.778h24V0Z"
        fill="#FFDA44"
      />
      <path d="M12 0H0v8h12V0Z" fill="#4A1F63" />
      <path
        d="M8.086 3.304v.695h-.348v-.695h-.695v.695h-.348V2.608H5.304v1.391h-.348v-.695H4.26v.695h-.348v-.695h-.695V5.39h5.565V3.304h-.696Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
