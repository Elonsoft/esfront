import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ChevronLeftIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z" />
    </SvgIcon>
  );
};
