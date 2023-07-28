import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagVi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        clipRule="evenodd"
        d="M13.359 5.589a1.359 1.359 0 0 0-2.717 0h-2.99c0 .738.644 1.337 1.383 1.337H8.99c0 .717.563 1.302 1.271 1.337V6.257h3.478v2.006a1.338 1.338 0 0 0 1.271-1.337h-.044c.739 0 1.382-.599 1.382-1.337h-2.99Zm-.523 4.397c-.423.254-.836.35-.836.35s-.412-.097-.836-.35l-.604 1.363a3.812 3.812 0 0 0 2.88 0l-.604-1.363Z"
        fill="#FFDA44"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="m6.881 10.687-.94-2.63h-.71l1.366 3.477h.569l1.357-3.478h-.71l-.932 2.63Zm9.99-2.63v3.477h.676V8.056h-.676Z"
        fill="#338AF3"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M10.957 9.849V7.013h.696v3.21a3.061 3.061 0 0 1-.696-.374Zm2.087 0V7.013h-.696v3.21c.2-.077.457-.198.696-.374Z"
        fill="#D80027"
        fillRule="evenodd"
      />
      <path d="M13.74 6.256h-3.478V7.36h3.478V6.256Z" fill="#0052B4" />
    </FlagRoot>
  );
};
