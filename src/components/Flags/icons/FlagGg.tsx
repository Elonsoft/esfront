import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagGg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M13.5 0h-3v6.5H0v3h10.5V16h3V9.5H24v-3H13.5V0Z" fill="#D80027" />
      <path
        d="m14.967 8.456.685.457V7.087l-.685.456h-2.51v-2.51l.456-.685h-1.826l.456.684v2.511h-2.51l-.685-.456v1.826l.684-.457h2.511v2.511l-.456.685h1.826l-.457-.685v-2.51h2.511Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
