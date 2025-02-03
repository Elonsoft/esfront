import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon600 = (props: SvgIconProps) => {
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
        d="M26.67 36.67c1.84 0 3.33-1.5 3.33-3.34V20.4c0-1.26-.71-2.41-1.84-2.98l-.66-.33V3.33C27.5 1.5 26 0 24.17 0H3.33A3.33 3.33 0 0 0 0 3.33v.53C0 1.83 1.81.26 3.82.56l15.84 2.35a3.33 3.33 0 0 1 2.84 3.3v15.18c0 .72-.23 1.42-.67 2l-1.16 1.55a3.33 3.33 0 0 0-.67 2v9.13c0 .2-.02.4-.05.6h6.72Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M25 32.5c0 .92-.75 1.67-1.67 1.67H20v-7.23c0-.72.23-1.42.67-2l1.16-1.55c.44-.58.67-1.28.67-2V6.2a3.33 3.33 0 0 0-2.84-3.3l-2.79-.41h6.46c.92 0 1.67.75 1.67 1.67V32.5Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M16.12 39.35A3.33 3.33 0 0 0 20 36.07v-9.13c0-.72.23-1.42.67-2l1.16-1.55c.44-.58.67-1.28.67-2V6.2a3.33 3.33 0 0 0-2.84-3.3L3.82.57A3.33 3.33 0 0 0 0 3.87v29.97a3.33 3.33 0 0 0 2.79 3.3l13.33 2.21Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
