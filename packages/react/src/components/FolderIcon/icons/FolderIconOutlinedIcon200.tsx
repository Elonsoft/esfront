import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon200 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 18 24" width="18" {...props}>
      <path
        clipRule="evenodd"
        d="M16.41 21.96A2 2 0 0 1 16 22h-4.08a2 2 0 0 1-1.53 1.6l6.02-1.64Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M16 22a2 2 0 0 0 2-2v-7.76a2 2 0 0 0-1.1-1.8l-.4-.19V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v.32-.01 18a2 2 0 0 0 1.67 1.97l8 1.33a2.03 2.03 0 0 0 2.3-1.61H16Zm-5-.36a1 1 0 0 1-1.16.98l-8-1.33A1 1 0 0 1 1 20.3V2.32a1 1 0 0 1 1.15-1l9.5 1.42a1 1 0 0 1 .85.98v9.11a1 1 0 0 1-.2.6l-.7.94a3 3 0 0 0-.6 1.8v5.47Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15 19.5a1 1 0 0 1-1 1h-2v-4.33a2 2 0 0 1 .4-1.2l.7-.94a2 2 0 0 0 .4-1.2v-9.1a2 2 0 0 0-1.7-1.98l-1.68-.25H14a1 1 0 0 1 1 1v17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
