import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon800 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="48" viewBox="0 0 36 48" width="36" {...props}>
      <path
        clipRule="evenodd"
        d="M32.82 43.92c-.26.05-.54.08-.82.08h-8.15a4 4 0 0 1-3.07 3.18v.01l12.04-3.27Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M36 40a4 4 0 0 1-4 4h-8.06a4.04 4.04 0 0 1-4.6 3.22l-16-2.66A4 4 0 0 1 0 40.6V4a4 4 0 0 1 4-4h25a4 4 0 0 1 4 4v16.5l.79.4A4 4 0 0 1 36 24.46V40ZM4.44 1.67l19 2.81A3 3 0 0 1 26 7.45v18.22a3 3 0 0 1-.6 1.8L24 29.33a5 5 0 0 0-1 3v10.95a3 3 0 0 1-3.5 2.96l-16-2.67A3 3 0 0 1 1 40.61V4.64a3 3 0 0 1 3.44-2.97Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M30 39a2 2 0 0 1-2 2h-4v-8.67a4 4 0 0 1 .8-2.4l1.4-1.86a4 4 0 0 0 .8-2.4V7.45a4 4 0 0 0-3.41-3.96L20.25 3H28a2 2 0 0 1 2 2v34Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
