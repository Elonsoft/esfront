import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconChevronDouble = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M12.5304 7.46966L12.0001 6.93933L11.4697 7.46966L7.46973 11.4697L8.53039 12.5303L12.0001 9.06065L15.4697 12.5303L16.5304 11.4697L12.5304 7.46966ZM12.5313 12.4695L12.001 11.9392L11.4706 12.4695L7.47065 16.4695L8.53131 17.5302L12.001 14.0605L15.4706 17.5302L16.5313 16.4695L12.5313 12.4695Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
