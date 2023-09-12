import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const EmptyStateIconImage = (props: SvgIconProps) => {
  return (
    <SvgIcon size="56px" viewBox="0 0 56 56" {...props}>
      <path
        clipRule="evenodd"
        d="M10 7C5.58172 7 2 10.5817 2 15V41C2 45.4183 5.58172 49 10 49H46C50.4183 49 54 45.4183 54 41V15C54 10.5817 50.4183 7 46 7H10ZM12 12C9.23858 12 7 14.2386 7 17V38.28L11.6062 32.1998C13.413 29.8148 16.8959 29.5401 19.0543 31.6122L24 36.36L33.3011 23.224C35.1803 20.57 39.053 20.3878 41.1731 22.8536L49 31.9569V17C49 14.2386 46.7614 12 44 12H12ZM24 20.5C24 22.9853 21.9853 25 19.5 25C17.0147 25 15 22.9853 15 20.5C15 18.0147 17.0147 16 19.5 16C21.9853 16 24 18.0147 24 20.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
