import { Story } from '@storybook/react';

import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import { Swiper } from './Swiper';
import { SwiperButtonProps } from './Swiper.types';
import { SwiperPagination } from './SwiperPagination';

import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

const Image: React.FC<{ src: string; width?: string }> = ({ src, width }) => {
  return <img src={src} width={width || '160px'} height="160px" style={{ objectFit: 'cover', borderRadius: '8px' }} />;
};

export const Demo: Story = ({
  PaginationPropsPosition,
  PaginationPropsVariant,
  PaginationPropsSiblingCount,
  PaginationPropsTransitionDuration,
  ...args
}) => {
  return (
    <Swiper
      {...args}
      pagination={SwiperPagination}
      PaginationProps={{
        position: PaginationPropsPosition,
        variant: PaginationPropsVariant,
        siblingCount: PaginationPropsSiblingCount,
        transitionDuration: PaginationPropsTransitionDuration
      }}
    >
      <Image src="/swiper/1.png" />
      <Image src="/swiper/2.png" width="320px" />
      <Image src="/swiper/3.png" />
      <Image src="/swiper/4.png" />
      <Image src="/swiper/1.png" />
      <Image src="/swiper/2.png" width="320px" />
      <Image src="/swiper/3.png" />
      <Image src="/swiper/4.png" />
      <Image src="/swiper/1.png" />
      <Image src="/swiper/2.png" />
      <Image src="/swiper/3.png" />
      <Image src="/swiper/4.png" />
    </Swiper>
  );
};

export const Vertical: Story = ({
  PaginationPropsPosition,
  PaginationPropsVariant,
  PaginationPropsSiblingCount,
  PaginationPropsTransitionDuration,
  ...args
}) => {
  return (
    <div style={{ height: 'min(512px, calc(100vh - 2rem))' }}>
      <Swiper
        {...args}
        direction="vertical"
        pagination={SwiperPagination}
        PaginationProps={{
          position: PaginationPropsPosition,
          variant: PaginationPropsVariant,
          siblingCount: PaginationPropsSiblingCount,
          transitionDuration: PaginationPropsTransitionDuration
        }}
      >
        <Image src="/swiper/1.png" />
        <Image src="/swiper/2.png" />
        <Image src="/swiper/3.png" />
        <Image src="/swiper/4.png" />
        <Image src="/swiper/1.png" />
        <Image src="/swiper/2.png" />
        <Image src="/swiper/3.png" />
        <Image src="/swiper/4.png" />
        <Image src="/swiper/1.png" />
        <Image src="/swiper/2.png" />
        <Image src="/swiper/3.png" />
        <Image src="/swiper/4.png" />
      </Swiper>
    </div>
  );
};

const CustomizationButton = styled(IconButton)<{ prev?: boolean; next?: boolean }>(({ theme, prev, next }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.palette.white.A600,
  color: theme.palette.black[500],
  padding: 4,

  '&:hover': {
    backgroundColor: theme.palette.white.A600
  },

  ...(prev && {
    left: 8
  }),
  ...(next && {
    right: 8
  })
}));

const CustomizationButtonPrev: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
  return (
    <CustomizationButton className={className} prev onClick={onClick} aria-label={label}>
      <ChevronLeftIcon />
    </CustomizationButton>
  );
};

const CustomizationButtonNext: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
  return (
    <CustomizationButton className={className} next onClick={onClick} aria-label={label}>
      <ChevronRightIcon />
    </CustomizationButton>
  );
};

export const Customization: Story = (args) => {
  const Image: React.FC<{ src: string }> = ({ src }) => {
    return <img src={src} width="56px" height="56px" />;
  };

  return (
    <Swiper {...args} buttonPrev={CustomizationButtonPrev} buttonNext={CustomizationButtonNext} gap={8}>
      <Image src="/swiper/2-1.png" />
      <Image src="/swiper/2-2.png" />
      <Image src="/swiper/2-3.png" />
      <Image src="/swiper/2-4.png" />
      <Image src="/swiper/2-5.png" />
      <Image src="/swiper/2-6.png" />
      <Image src="/swiper/2-7.png" />
      <Image src="/swiper/2-8.png" />
      <Image src="/swiper/2-9.png" />
      <Image src="/swiper/2-1.png" />
      <Image src="/swiper/2-2.png" />
      <Image src="/swiper/2-3.png" />
      <Image src="/swiper/2-4.png" />
      <Image src="/swiper/2-5.png" />
      <Image src="/swiper/2-6.png" />
      <Image src="/swiper/2-7.png" />
      <Image src="/swiper/2-8.png" />
      <Image src="/swiper/2-9.png" />
      <Image src="/swiper/2-1.png" />
      <Image src="/swiper/2-2.png" />
      <Image src="/swiper/2-3.png" />
      <Image src="/swiper/2-4.png" />
      <Image src="/swiper/2-5.png" />
      <Image src="/swiper/2-6.png" />
      <Image src="/swiper/2-7.png" />
      <Image src="/swiper/2-8.png" />
      <Image src="/swiper/2-9.png" />
    </Swiper>
  );
};
