import clsx from 'clsx';

import { SvgIcon, SvgIconProps } from '../SvgIcon';

export const FlagRoot = ({ className, ...props }: SvgIconProps) => {
  return <SvgIcon className={clsx(className, 'es-flag')} {...props} />;
};
