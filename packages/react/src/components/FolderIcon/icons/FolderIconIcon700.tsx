import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon700 = (props: SvgIconProps) => {
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
        d="M29.33 40.33A3.67 3.67 0 0 0 33 36.67V22.43c0-1.39-.78-2.66-2.03-3.28l-.72-.36V3.67A3.67 3.67 0 0 0 26.58 0H3.67A3.67 3.67 0 0 0 0 3.67v.57C0 2.01 2 .3 4.2.62L21.62 3.2a3.67 3.67 0 0 1 3.13 3.63v16.7c0 .8-.26 1.56-.73 2.2l-1.29 1.7c-.47.64-.73 1.42-.73 2.2v10.04c0 .23-.02.45-.06.66H29.33Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M27.5 35.75c0 1.01-.82 1.83-1.83 1.83H22v-7.94c0-.8.26-1.57.73-2.2l1.29-1.71c.47-.64.73-1.4.73-2.2V6.83a3.67 3.67 0 0 0-3.13-3.63l-3.06-.45h7.1c1.02 0 1.84.82 1.84 1.83v31.17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M17.73 43.29A3.67 3.67 0 0 0 22 39.67V29.64c0-.8.26-1.57.73-2.2l1.29-1.71c.47-.64.73-1.4.73-2.2V6.83a3.67 3.67 0 0 0-3.13-3.63L4.2.62A3.67 3.67 0 0 0 0 4.25v32.98c0 1.79 1.3 3.32 3.06 3.61l14.67 2.45Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
