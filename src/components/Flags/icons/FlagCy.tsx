import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FCFCFC" />
      <path
        d="M16.5 6.963h-1.039a3.462 3.462 0 0 1-6.923 0H7.5a4.502 4.502 0 0 0 3.271 4.33c-.207.394-.175.889.12 1.258l1.132-.907 1.132.907c.298-.373.328-.874.114-1.27A4.502 4.502 0 0 0 16.5 6.964Z"
        fill="#6DA544"
      />
      <path
        d="M9.23 6.617s0 1.73 1.731 1.73l.346.347H12s.346-1.039 1.038-1.039c0 0 0-.692.692-.692h1.039s-.346-1.385 1.385-2.423l-.693-.346s-2.423 1.73-4.154 1.384v.693h-.692l-.346-.346-1.039.692Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
