import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCar = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M19 19.8889H5V20.9444C5 21.2244 4.89464 21.4929 4.70711 21.6908C4.51957 21.8888 4.26522 22 4 22H3C2.73478 22 2.48043 21.8888 2.29289 21.6908C2.10536 21.4929 2 21.2244 2 20.9444V10.3889L4.48 4.27933C4.63432 3.89933 4.89096 3.57553 5.21805 3.3481C5.54515 3.12067 5.92832 2.99963 6.32 3H17.68C18.0713 3.00005 18.4541 3.12128 18.7808 3.34868C19.1075 3.57609 19.3638 3.89966 19.518 4.27933L22 10.3889V20.9444C22 21.2244 21.8946 21.4929 21.7071 21.6908C21.5196 21.8888 21.2652 22 21 22H20C19.7348 22 19.4804 21.8888 19.2929 21.6908C19.1054 21.4929 19 21.2244 19 20.9444V19.8889ZM20 12.5H4V17.7778H20V12.5ZM4.176 10.3889H19.824L17.681 5.11111H6.32L4.177 10.3889H4.176ZM6.5 16.7222C6.10218 16.7222 5.72064 16.5554 5.43934 16.2585C5.15804 15.9615 5 15.5588 5 15.1389C5 14.719 5.15804 14.3162 5.43934 14.0193C5.72064 13.7224 6.10218 13.5556 6.5 13.5556C6.89782 13.5556 7.27936 13.7224 7.56066 14.0193C7.84196 14.3162 8 14.719 8 15.1389C8 15.5588 7.84196 15.9615 7.56066 16.2585C7.27936 16.5554 6.89782 16.7222 6.5 16.7222ZM17.5 16.7222C17.1022 16.7222 16.7206 16.5554 16.4393 16.2585C16.158 15.9615 16 15.5588 16 15.1389C16 14.719 16.158 14.3162 16.4393 14.0193C16.7206 13.7224 17.1022 13.5556 17.5 13.5556C17.8978 13.5556 18.2794 13.7224 18.5607 14.0193C18.842 14.3162 19 14.719 19 15.1389C19 15.5588 18.842 15.9615 18.5607 16.2585C18.2794 16.5554 17.8978 16.7222 17.5 16.7222Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};