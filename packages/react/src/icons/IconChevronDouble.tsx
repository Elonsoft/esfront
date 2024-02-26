import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconChevronDouble = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M12.5294 7.46978L11.9991 6.93945L11.4688 7.46978L7.46875 11.4698L8.52941 12.5304L11.9991 9.06077L15.4688 12.5304L16.5294 11.4698L12.5294 7.46978ZM12.5303 12.4697L12 11.9393L11.4697 12.4697L7.46967 16.4697L8.53033 17.5303L12 14.0607L15.4697 17.5303L16.5303 16.4697L12.5303 12.4697Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
