import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon700 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="44" viewBox="0 0 33 44" width="33" {...props}>
      <path
        clipRule="evenodd"
        d="M30.08 40.26c-.24.05-.49.07-.75.07h-7.47a3.67 3.67 0 0 1-2.82 2.92l11.04-3Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M33 36.67a3.67 3.67 0 0 1-3.67 3.66h-7.39s-.81 3.53-4.2 2.96L3.05 40.85A3.67 3.67 0 0 1 0 37.23V4.25c0-.07 0-.08 0 0v-.58A3.67 3.67 0 0 1 3.67 0h22.91a3.67 3.67 0 0 1 3.67 3.67v15.12l.72.36A3.67 3.67 0 0 1 33 22.43v14.24ZM4.06 1.6 21.47 4.2c1.31.2 2.28 1.32 2.28 2.64v16.7c0 .58-.19 1.14-.53 1.6l-1.29 1.71c-.6.8-.93 1.8-.93 2.8v10.03c0 1.65-1.48 2.9-3.1 2.63L3.23 39.86A2.67 2.67 0 0 1 1 37.23V4.25a2.67 2.67 0 0 1 3.06-2.64Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M27.5 35.75c0 1.01-.82 1.83-1.83 1.83H22v-7.94c0-.8.26-1.57.73-2.2l1.29-1.71c.47-.64.73-1.4.73-2.2V6.83a3.67 3.67 0 0 0-3.13-3.63l-3.06-.45h7.1c1.02 0 1.84.82 1.84 1.83v31.17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
