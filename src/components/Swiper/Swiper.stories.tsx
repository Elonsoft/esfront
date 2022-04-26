import { Story } from '@storybook/react';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useSwiperContext } from './Swiper.context';
import { Swiper, SwiperPagination } from '.';

import { IconChevronLeft, IconChevronRight } from '../../icons';

const Image: React.FC<{ src: string; width?: string }> = ({ src, width }) => {
  return <img src={src} width={width || '160px'} height="160px" style={{ objectFit: 'cover', borderRadius: '8px' }} />;
};

export const Demo: Story = ({
  SwiperPaginationPosition,
  SwiperPaginationVariant,
  SwiperPaginationSiblingCount,
  SwiperPaginationTransitionDuration,
  ...args
}) => {
  return (
    <Swiper
      {...args}
      pagination={
        <SwiperPagination
          position={SwiperPaginationPosition}
          variant={SwiperPaginationVariant}
          siblingCount={SwiperPaginationSiblingCount}
          transitionDuration={SwiperPaginationTransitionDuration}
        />
      }
    >
      <Image src="./swiper/1.png" />
      <Image src="./swiper/2.png" width="320px" />
      <Image src="./swiper/3.png" />
      <Image src="./swiper/4.png" />
      <Image src="./swiper/1.png" />
      <Image src="./swiper/2.png" width="320px" />
      <Image src="./swiper/3.png" />
      <Image src="./swiper/4.png" />
      <Image src="./swiper/1.png" />
      <Image src="./swiper/2.png" />
      <Image src="./swiper/3.png" />
      <Image src="./swiper/4.png" />
    </Swiper>
  );
};

export const Vertical: Story = ({
  SwiperPaginationPosition,
  SwiperPaginationVariant,
  SwiperPaginationSiblingCount,
  SwiperPaginationTransitionDuration,
  ...args
}) => {
  return (
    <div style={{ height: 'min(512px, calc(100vh - 2rem))' }}>
      <Swiper
        {...args}
        direction="vertical"
        pagination={
          <SwiperPagination
            position={SwiperPaginationPosition}
            variant={SwiperPaginationVariant}
            siblingCount={SwiperPaginationSiblingCount}
            transitionDuration={SwiperPaginationTransitionDuration}
          />
        }
      >
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
      </Swiper>
    </div>
  );
};

const CustomizationButton = styled(IconButton)<{ prev?: boolean; next?: boolean }>(({ theme, prev, next }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  ...(prev && {
    left: 8
  }),
  ...(next && {
    right: 8
  }),

  '&.MuiIconButton-root.MuiIconButton-root': {
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.palette.white.A600,
    color: theme.palette.black[500],
    padding: 4,

    '&:hover': {
      backgroundColor: theme.palette.white.A600
    }
  }
}));

const CustomizationButtonPrev: React.FC = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1);
  };

  return (
    <CustomizationButton prev onClick={onClick}>
      <IconChevronLeft />
    </CustomizationButton>
  );
};

const CustomizationButtonNext: React.FC = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active + 1);
  };

  return (
    <CustomizationButton next onClick={onClick}>
      <IconChevronRight />
    </CustomizationButton>
  );
};

export const Customization: Story = (args) => {
  const Image: React.FC<{ src: string }> = ({ src }) => {
    return <img src={src} width="56px" height="56px" />;
  };

  return (
    <Swiper {...args} buttonPrev={<CustomizationButtonPrev />} buttonNext={<CustomizationButtonNext />} gap={8}>
      <Image src="./swiper/2-1.png" />
      <Image src="./swiper/2-2.png" />
      <Image src="./swiper/2-3.png" />
      <Image src="./swiper/2-4.png" />
      <Image src="./swiper/2-5.png" />
      <Image src="./swiper/2-6.png" />
      <Image src="./swiper/2-7.png" />
      <Image src="./swiper/2-8.png" />
      <Image src="./swiper/2-9.png" />
      <Image src="./swiper/2-1.png" />
      <Image src="./swiper/2-2.png" />
      <Image src="./swiper/2-3.png" />
      <Image src="./swiper/2-4.png" />
      <Image src="./swiper/2-5.png" />
      <Image src="./swiper/2-6.png" />
      <Image src="./swiper/2-7.png" />
      <Image src="./swiper/2-8.png" />
      <Image src="./swiper/2-9.png" />
      <Image src="./swiper/2-1.png" />
      <Image src="./swiper/2-2.png" />
      <Image src="./swiper/2-3.png" />
      <Image src="./swiper/2-4.png" />
      <Image src="./swiper/2-5.png" />
      <Image src="./swiper/2-6.png" />
      <Image src="./swiper/2-7.png" />
      <Image src="./swiper/2-8.png" />
      <Image src="./swiper/2-9.png" />
    </Swiper>
  );
};
