import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconExternalLinkW500 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M10 6V8H6V18H16V14H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H10ZM20 4V12H18V7.413L11.207 14.207L9.793 12.793L16.585 6H12V4H20Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
