import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon600 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="40" viewBox="0 0 30 40" width="30" {...props}>
      <path
        clipRule="evenodd"
        d="M27.35 36.6c-.22.04-.45.07-.68.07h-6.8a3.34 3.34 0 0 1-2.56 2.65l10.04-2.72Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M30 33.33c0 1.84-1.5 3.34-3.33 3.34h-6.72c-.32 1.75-2 2.99-3.83 2.68L2.79 37.13A3.33 3.33 0 0 1 0 33.84V3.33C0 1.5 1.5 0 3.33 0h20.84C26 0 27.5 1.5 27.5 3.33v13.75l.66.33A3.33 3.33 0 0 1 30 20.4v12.94ZM3.68 1.56 19.5 3.9c1.14.17 2 1.15 2 2.3V21.4c0 .5-.17 1-.48 1.4l-1.16 1.55a4.33 4.33 0 0 0-.87 2.6v9.13c0 1.44-1.3 2.53-2.72 2.3L2.95 36.14A2.33 2.33 0 0 1 1 33.84V3.86a2.33 2.33 0 0 1 2.68-2.3Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M25 32.5c0 .92-.75 1.67-1.67 1.67H20v-7.23c0-.72.23-1.42.67-2l1.16-1.55c.44-.58.67-1.28.67-2V6.2a3.33 3.33 0 0 0-2.84-3.3l-2.79-.41h6.46c.92 0 1.67.75 1.67 1.67V32.5Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
