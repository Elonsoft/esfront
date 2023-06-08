import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconSkipBack = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M7 6C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V7C8 6.44772 7.55228 6 7 6ZM9.98863 10.7345L16.6947 6.46702C17.6933 5.83155 19 6.54887 19 7.73251V16.2675C19 17.4511 17.6933 18.1684 16.6947 17.533L9.98863 13.2655C9.06238 12.6761 9.06238 11.3239 9.98863 10.7345Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
