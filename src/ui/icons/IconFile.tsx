/* eslint-disable react/display-name */
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const IconFile = React.forwardRef<SVGPathElement, SvgIconProps>((props, ref) => {
  const theme = useTheme();
  return (
    <SvgIcon
      width={props.width}
      height={props.height}
      viewBox="0 0 36 48"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C2.68629 0 0 2.68629 0 6V42C0 45.3137 2.68629 48 6 48H30C33.3137 48 36 45.3137 36 42V11.2931C36 10.4678 35.6599 9.67883 35.0599 9.1121L26.2789 0.818961C25.722 0.293009 24.985 0 24.219 0H6Z"
        fill={theme.palette.monoA.A100}
      />
      <path
        ref={ref}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.1213 10.1213L25.8787 2.87868C25.3161 2.31607 24.553 2 23.7574 2H23V10C23 11.6569 24.3431 13 26 13H34V12.2426C34 11.447 33.6839 10.6839 33.1213 10.1213Z"
        fill={theme.palette.monoA.A100}
      />
    </SvgIcon>
  );
});
