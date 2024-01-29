import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagVe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 4.521H0v6.958h24V4.52Z" fill="#0052B4" />
      <path
        d="m17.218 9.4-.377.294.164.449-.396-.268-.377.295.132-.46-.396-.267.477-.017.132-.459.164.45.477-.017ZM16.254 7.73 16 8.135l.308.366-.464-.116-.253.406-.034-.477-.463-.116.443-.179-.033-.476.307.366.443-.18ZM14.777 6.49l-.1.467.414.24-.475.05-.1.467-.194-.437-.475.05.355-.32-.194-.436.414.239.355-.32ZM12.965 5.83l.066.474.47.083-.429.21.067.472-.332-.343-.43.21.225-.423-.332-.343.47.082.225-.421ZM11.037 5.83l.224.422.47-.083-.332.344.225.422-.43-.21-.332.344.067-.473-.43-.21.471-.082.066-.473ZM9.224 6.49l.356.32.413-.24-.194.437.355.32-.475-.05-.194.437-.1-.468-.475-.05.414-.239-.1-.467ZM7.747 7.73l.444.179.307-.366-.034.477.443.179-.463.115-.034.477-.253-.405-.463.115L8 8.135l-.254-.405ZM6.783 9.4l.478.016.163-.449.132.46.478.016-.397.268.132.459-.376-.294-.397.267.164-.45-.377-.293Z"
        fill="#F0F0F0"
      />
      <path d="M24 0H0v4.521h24V0Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
