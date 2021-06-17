import { Story } from '@storybook/react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
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

const useButtonStyles = makeStyles((theme) => ({
  button: {
    '&.MuiIconButton-root': {
      backdropFilter: 'blur(10px)',
      backgroundColor: theme.palette.white.A600,
      color: theme.palette.black[500],
      padding: 4,

      '&:hover': {
        backgroundColor: theme.palette.white.A600
      }
    }
  },
  buttonPrev: {
    '&.MuiIconButton-root': {
      left: 8
    }
  },
  buttonNext: {
    '&.MuiIconButton-root': {
      right: 8
    }
  }
}));

const CustomizationButtonPrev: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
  const styles = useButtonStyles();

  return (
    <IconButton className={clsx(className, styles.button, styles.buttonPrev)} onClick={onClick} aria-label={label}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

const CustomizationButtonNext: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
  const styles = useButtonStyles();

  return (
    <IconButton className={clsx(className, styles.button, styles.buttonNext)} onClick={onClick} aria-label={label}>
      <ChevronRightIcon />
    </IconButton>
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
