import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconPushpin = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M10.0002 7C9.72411 7 9.50025 7.22386 9.50025 7.5C9.50025 7.77614 9.72411 8 10.0002 8H10.438L10.0003 11.5002L8.5 13.0001L8.50098 14.4996H11.2504V14.4999L11.2501 17.0002C11.2501 17.4144 11.5858 17.7502 12 17.7502C12.4143 17.7503 12.7501 17.4145 12.7501 17.0003L12.7504 14.5001V14.4996H15.5V13.0001L14.0003 11.5002L13.5629 8H14.0002C14.2764 8 14.5002 7.77614 14.5002 7.5C14.5002 7.22386 14.2764 7 14.0002 7H10.0002Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
