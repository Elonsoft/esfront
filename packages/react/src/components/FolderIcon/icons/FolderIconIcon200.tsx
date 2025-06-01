import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon200 = (props: SvgIconProps) => {
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
        d="M16 22a2 2 0 0 0 2-2v-7.76a2 2 0 0 0-1.1-1.8l-.4-.19V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v.32A2 2 0 0 1 2.3.34l9.5 1.4a2 2 0 0 1 1.7 1.99v9.1a2 2 0 0 1-.4 1.2l-.7.94a2 2 0 0 0-.4 1.2v5.47l-.03.36H16Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M15 19.5a1 1 0 0 1-1 1h-2v-4.33a2 2 0 0 1 .4-1.2l.7-.94a2 2 0 0 0 .4-1.2v-9.1a2 2 0 0 0-1.7-1.98l-1.68-.25H14a1 1 0 0 1 1 1v17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M9.67 23.61A2 2 0 0 0 12 21.64v-5.47a2 2 0 0 1 .4-1.2l.7-.94a2 2 0 0 0 .4-1.2v-9.1a2 2 0 0 0-1.7-1.98L2.3.34A2 2 0 0 0 0 2.32V20.3a2 2 0 0 0 1.67 1.97l8 1.33Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
