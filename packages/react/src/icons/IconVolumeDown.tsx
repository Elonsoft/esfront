import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconVolumeDown = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M3 10.0005C3 9.44825 3.44772 9.00053 4 9.00053H7L10.293 5.70882C10.9231 5.07905 12 5.52526 12 6.41607V17.5834C12 18.4742 10.9231 18.9204 10.293 18.2907L7 14.9989H4C3.44772 14.9989 3 14.5512 3 13.9989V10.0005ZM13 13.9994C14.1046 13.9994 15 13.104 15 11.9994C15 10.8948 14.1046 9.99939 13 9.99939V13.9994Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
