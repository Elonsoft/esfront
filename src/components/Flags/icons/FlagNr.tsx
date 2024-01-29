import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagNr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 7.25H0v1.5h24v-1.5Z" fill="#FFDA44" />
      <path
        d="m8.194 12-.896.422.477.868-.973-.186-.124.983L6 13.364l-.678.723-.123-.983-.973.186.477-.868L3.807 12l.896-.421-.477-.869.973.186.123-.983.678.723.679-.723.123.983.973-.186-.477.868.896.422Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
