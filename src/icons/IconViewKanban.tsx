import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconViewKanban = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M2 5C2 4.44772 2.44772 4 3 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H3C2.44772 6 2 5.55228 2 5ZM2 10C2 8.89543 2.89543 8 4 8H9C10.1046 8 11 8.89543 11 10V19C11 20.1046 10.1046 21 9 21H4C2.89543 21 2 20.1046 2 19V10ZM9 10H4V19H9V10ZM13 10C13 8.89543 13.8954 8 15 8H19C20.1046 8 21 8.89543 21 10V14C21 15.1046 20.1046 16 19 16H15C13.8954 16 13 15.1046 13 14V10ZM19 10H15V14H19V10Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
