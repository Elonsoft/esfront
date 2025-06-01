import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon400 = (props: SvgIconProps) => {
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
        d="M21.33 29.33c1.48 0 2.67-1.2 2.67-2.66V16.3c0-1-.57-1.93-1.47-2.38l-.53-.26v-11C22 1.19 20.8 0 19.33 0H2.67A2.67 2.67 0 0 0 0 2.67v.42A2.67 2.67 0 0 1 3.06.45l12.66 1.88c1.31.2 2.28 1.32 2.28 2.64V17.1c0 .58-.19 1.14-.53 1.6l-.94 1.25a2.67 2.67 0 0 0-.53 1.6v7.3c0 .16-.01.32-.04.47h5.37Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M20 26c0 .74-.6 1.33-1.33 1.33H16v-5.77c0-.58.19-1.14.53-1.6l.94-1.25c.34-.46.53-1.02.53-1.6V4.97c0-1.32-.97-2.45-2.28-2.64L13.5 2h5.17C19.4 2 20 2.6 20 3.33V26Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M12.9 31.48c1.62.27 3.1-.98 3.1-2.63v-7.3c0-.57.19-1.13.53-1.6l.94-1.24c.34-.46.53-1.02.53-1.6V4.97c0-1.32-.97-2.45-2.28-2.64L3.06.45A2.67 2.67 0 0 0 0 3.1v23.98c0 1.3.94 2.42 2.23 2.63l10.67 1.78Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
