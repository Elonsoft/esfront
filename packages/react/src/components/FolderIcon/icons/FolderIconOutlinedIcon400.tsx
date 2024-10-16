import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon400 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="32" viewBox="0 0 24 32" width="24" {...props}>
      <path
        clipRule="evenodd"
        d="M21.88 29.28c-.18.03-.36.05-.55.05H15.9a2.67 2.67 0 0 1-2.05 2.13l8.03-2.18Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M24 26.67c0 1.47-1.2 2.66-2.67 2.66h-5.37a2.7 2.7 0 0 1-3.06 2.15L2.23 29.7A2.67 2.67 0 0 1 0 27.07V2.67C0 1.19 1.2 0 2.67 0h16.66C20.81 0 22 1.2 22 2.67v11l.53.26c.9.45 1.47 1.37 1.47 2.38v10.36ZM2.91 1.44l12.67 1.88c.82.12 1.42.82 1.42 1.65V17.1c0 .36-.12.71-.33 1l-.94 1.24c-.47.64-.73 1.41-.73 2.2v7.3c0 1.03-.92 1.81-1.94 1.65L2.39 28.72C1.6 28.58 1 27.89 1 27.07V3.1c0-1.02.9-1.8 1.91-1.65Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M20 26c0 .74-.6 1.33-1.33 1.33H16v-5.77c0-.58.19-1.14.53-1.6l.94-1.25c.34-.46.53-1.02.53-1.6V4.97c0-1.32-.97-2.45-2.28-2.64L13.5 2h5.17C19.4 2 20 2.6 20 3.33V26Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
