import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line no-restricted-imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const FolderIconIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon
      height={props.height}
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
      viewBox="0 0 36 48"
      width={props.width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M32.8205 43.916C32.5557 43.9712 32.2812 44.0002 32 44.0002H28.2727H25.9139H24.4091H23.8488C23.5575 45.6 22.3194 46.8425 20.7773 47.1833V47.1902L32.8205 43.916Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M32.0009 44C34.21 44 36.0009 42.2091 36.0009 40V24.4721C36.0009 22.957 35.1449 21.572 33.7898 20.8944L33.0002 20.4996V4C33.0002 1.79086 31.2093 1.18935e-06 29.0002 1.09279e-06L4 0C1.79086 -9.657e-08 1.24008e-07 1.79086 2.70084e-08 4L0 4.63062C0.00331889 2.19082 2.17186 0.321746 4.58618 0.679412L23.5871 3.49427C25.5484 3.78482 27.0009 5.46834 27.0009 7.45108V25.6667C27.0009 26.5321 26.7202 27.3743 26.2009 28.0667L24.8009 29.9333C24.2816 30.6257 24.0009 31.4679 24.0009 32.3333V43.2782C24.0009 43.5253 23.9787 43.7664 23.9364 44H28.0009H30.0002H32.0009Z"
        fill={theme.vars.palette.yellow[400]}
        fillRule="evenodd"
      />
      <path
        d="M19.3433 47.2233C21.7814 47.6297 24.0009 45.7495 24.0009 43.2777V32.3326C24.0009 31.4672 24.2816 30.625 24.8009 29.9327L26.2009 28.066C26.7202 27.3736 27.0009 26.5315 27.0009 25.666V7.45042C27.0009 5.46768 25.5484 3.78416 23.5871 3.4936L4.58618 0.678751C2.17001 0.320811 1.67901e-06 2.19302 1.57201e-06 4.63556L0 40.6108C-8.6e-08 42.5662 1.41364 44.2349 3.34238 44.5564L19.3433 47.2233Z"
        fill={theme.vars.palette.yellow[300]}
      />
    </SvgIcon>
  );
};
