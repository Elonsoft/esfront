import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBb = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M8 0H0v16h8V0ZM24 0h-8v16h8V0Z" fill="#0052B4" />
      <path
        d="m14.434 4.87.466.233-.466-.234-.467-.233c-.028.056-.637 1.296-.737 3.19h-.71V4.869L12 4.174l-.523.695v2.957h-.709c-.1-1.894-.709-3.134-.737-3.19l-.933.467c.006.013.64 1.303.64 3.245v.521h1.74v2.957h1.043V8.869h1.739v-.521c0-1.004.174-1.832.32-2.35a5.8 5.8 0 0 1 .321-.896l-.467-.233Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
