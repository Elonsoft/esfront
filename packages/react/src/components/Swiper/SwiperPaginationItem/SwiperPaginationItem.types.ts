export interface SwiperPaginationItemProps {
  index: number;
  active: number;
  from: number;
  to: number;
  siblingFrom: number;
  siblingTo: number;
  name: string;
  transition: {
    transitionDuration?: string;
  };
  onSlideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
