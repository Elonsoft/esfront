import { SwiperButtonProps } from './Swiper.types';

import clsx from 'clsx';
import { useStyles } from './SwiperButton.styles';

import IconButton from '@material-ui/core/IconButton';

import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from '../icons';

const createSwiperButtonComponent = (Icon: React.ComponentType) => {
  const Button: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
    const styles = useStyles();

    return (
      <IconButton className={clsx(styles.root, className)} onClick={onClick} aria-label={label}>
        <Icon />
      </IconButton>
    );
  };

  return Button;
};

export const SwiperButtonDown = createSwiperButtonComponent(ArrowDownIcon);
export const SwiperButtonLeft = createSwiperButtonComponent(ArrowLeftIcon);
export const SwiperButtonRight = createSwiperButtonComponent(ArrowRightIcon);
export const SwiperButtonUp = createSwiperButtonComponent(ArrowUpIcon);
