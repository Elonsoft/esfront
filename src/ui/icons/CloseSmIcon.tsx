import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const CloseSmIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="10" height="10" viewBox="0 0 10 10" fill="none" sx={{ fontSize: 10 }}>
      <path
        d="M10 1.41L8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
