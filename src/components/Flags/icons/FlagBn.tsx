import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="m0 5.332 24 9.712v-2.188L12.808 8.431 0 3.145v2.187Z" fill="#000" />
      <path d="M24 12.856v-2.188L0 .957v2.187" fill="#F0F0F0" />
      <path
        d="M14.261 7.13a2.26 2.26 0 1 1-4.249-1.075 2.782 2.782 0 1 0 3.978 0c.173.32.272.686.272 1.076Z"
        fill="#D80027"
      />
      <path d="M12.523 4.522h-1.044v5.216h1.044V4.522Z" fill="#D80027" />
      <path
        d="M13.74 5.565h-3.478c0 .24.21.435.45.435h-.015c0 .24.195.435.435.435 0 .24.194.434.434.434h.87c.24 0 .434-.194.434-.434.24 0 .435-.195.435-.435h-.014c.24 0 .449-.195.449-.435ZM14.435 10.087H9.567v1.043h4.868v-1.043Z"
        fill="#D80027"
      />
      <path d="M15.131 10.434h-2.087v1.043h2.087v-1.043ZM10.958 10.434H8.87v1.043h2.087v-1.043Z" fill="#D80027" />
    </FlagRoot>
  );
};
