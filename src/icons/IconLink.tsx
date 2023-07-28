import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconLink = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M10.5903 13.4103C11.0003 13.8003 11.0003 14.4403 10.5903 14.8303C10.2003 15.2203 9.56031 15.2203 9.17031 14.8303C7.22031 12.8803 7.22031 9.71031 9.17031 7.76031L12.7103 4.22031C14.6603 2.27031 17.8303 2.27031 19.7803 4.22031C21.7303 6.17031 21.7303 9.34031 19.7803 11.2903L18.2903 12.7803C18.3003 11.9603 18.1703 11.1403 17.8903 10.3603L18.3603 9.88031C19.5403 8.71031 19.5403 6.81031 18.3603 5.64031C17.1903 4.46031 15.2903 4.46031 14.1203 5.64031L10.5903 9.17031C9.41031 10.3403 9.41031 12.2403 10.5903 13.4103ZM13.4103 9.17031C13.8003 8.78031 14.4403 8.78031 14.8303 9.17031C16.7803 11.1203 16.7803 14.2903 14.8303 16.2403L11.2903 19.7803C9.34031 21.7303 6.17031 21.7303 4.22031 19.7803C2.27031 17.8303 2.27031 14.6603 4.22031 12.7103L5.71031 11.2203C5.70031 12.0403 5.83031 12.8603 6.11031 13.6503L5.64031 14.1203C4.46031 15.2903 4.46031 17.1903 5.64031 18.3603C6.81031 19.5403 8.71031 19.5403 9.88031 18.3603L13.4103 14.8303C14.5903 13.6603 14.5903 11.7603 13.4103 10.5903C13.0003 10.2003 13.0003 9.56031 13.4103 9.17031Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
