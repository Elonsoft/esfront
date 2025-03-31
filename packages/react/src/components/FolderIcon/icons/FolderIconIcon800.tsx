import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon800 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="48" viewBox="0 0 36 48" width="36" {...props}>
      <g clipPath="url(#a)">
        <path
          clipRule="evenodd"
          d="M32.82 43.92c-.26.05-.54.08-.82.08h-8.15a4 4 0 0 1-3.07 3.18v.01l12.04-3.27Z"
          fill={theme.vars.palette.black.A50}
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M32 44a4 4 0 0 0 4-4V24.47a4 4 0 0 0-2.21-3.58L33 20.5V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v.63A4 4 0 0 1 4.59.68l19 2.81A4 4 0 0 1 27 7.45v18.22a4 4 0 0 1-.8 2.4l-1.4 1.86a4 4 0 0 0-.8 2.4v10.95c0 .25-.02.49-.06.72H32Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M30 39a2 2 0 0 1-2 2h-4v-8.67a4 4 0 0 1 .8-2.4l1.4-1.86a4 4 0 0 0 .8-2.4V7.45a4 4 0 0 0-3.41-3.96L20.25 3H28a2 2 0 0 1 2 2v34Z"
          fill={theme.vars.palette.white.A900}
          fillRule="evenodd"
        />
        <path
          d="M19.34 47.22A4 4 0 0 0 24 43.28V32.33a4 4 0 0 1 .8-2.4l1.4-1.86a4 4 0 0 0 .8-2.4V7.45a4 4 0 0 0-3.41-3.96L4.59.68A4 4 0 0 0 0 4.64V40.6a4 4 0 0 0 3.34 3.95l16 2.66Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h36v48H0z" fill={theme.vars.palette.white.A900} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

/*
      <path
        clipRule="evenodd"
        d="M32.8205 43.916C32.5557 43.9712 32.2812 44.0002 32 44.0002H28.2727H25.9139H24.4091H23.8488C23.5575 45.6 22.3194 46.8425 20.7773 47.1833V47.1902L32.8205 43.916Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M32.0009 44C34.21 44 36.0009 42.2091 36.0009 40V24.4721C36.0009 22.957 35.1449 21.572 33.7898 20.8944L33.0002 20.4996V4C33.0002 1.79086 31.2093 1.18935e-06 29.0002 1.09279e-06L4 0C1.79086 -9.657e-08 1.24008e-07 1.79086 2.70084e-08 4L0 4.63062C0.00331889 2.19082 2.17186 0.321746 4.58618 0.679412L23.5871 3.49427C25.5484 3.78482 27.0009 5.46834 27.0009 7.45108V25.6667C27.0009 26.5321 26.7202 27.3743 26.2009 28.0667L24.8009 29.9333C24.2816 30.6257 24.0009 31.4679 24.0009 32.3333V43.2782C24.0009 43.5253 23.9787 43.7664 23.9364 44H28.0009H30.0002H32.0009Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M30 39C30 40.1046 29.1046 41 28 41H24V32.3333C24 31.4679 24.2807 30.6257 24.8 29.9333L26.2 28.0667C26.7193 27.3743 27 26.5321 27 25.6667V7.45108C27 5.46834 25.5475 3.78482 23.5862 3.49427L20.2498 3H28C29.1046 3 30 3.89543 30 5V39Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M19.3433 47.2233C21.7814 47.6297 24.0009 45.7495 24.0009 43.2777V32.3326C24.0009 31.4672 24.2816 30.625 24.8009 29.9327L26.2009 28.066C26.7202 27.3736 27.0009 26.5315 27.0009 25.666V7.45042C27.0009 5.46768 25.5484 3.78416 23.5871 3.4936L4.58618 0.678751C2.17001 0.320811 1.67901e-06 2.19302 1.57201e-06 4.63556L0 40.6108C-8.6e-08 42.5662 1.41364 44.2349 3.34238 44.5564L19.3433 47.2233Z"
        fill="currentColor"
      />
 */
