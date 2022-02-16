import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagLk = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M0 0v16h24V0H0Z" fill="#FFDA44" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.435 14.957h12.522l-1.043-.001v-1.044h1.043V2.087h-1.043V1.043H11.479v1.044h-1.043v11.825h1.043v1.044h-1.043Zm6.379-7.218V5.652c0-.348-.522-.696-.522-.696s-.522.348-.522.696h-2.087V7.74h1.044v1.044c0 .228.046.447.13.645l-.478.398h-1.391V3.391c-.577 0-1.044.467-1.044 1.043v4.522c0 .31.134.587.348.778v1.657h.696v-.87h3.13v1.392h-.696v.695h1.392v-1.391l.637-.696h2.076v1.392h-.696v.695h1.392v-1.391l.637-.696.589-1.887-.518-.895v-.835H17.58v-.765h3.56V5.93H17.37v1.183h3.352v.626h.21-1.826c-.363-.003-.897-.002-1.37 0-.394.001-.747.002-.922 0Z"
        fill="#A2001D"
      />
      <path d="M5.217 1.043H1.043v13.914h4.174V1.043Z" fill="#6DA544" />
      <path d="M9.39 1.043H5.218v13.914H9.39V1.043Z" fill="#FF9811" />
    </FlagRoot>
  );
};
