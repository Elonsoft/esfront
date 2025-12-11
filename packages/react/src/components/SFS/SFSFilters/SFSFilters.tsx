import { memo, useState } from 'react';

import { SFSFiltersProps } from './SFSFilters.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Drawer from '@mui/material/Drawer';

import { IconCloseLineW600, IconFilterLineW300 } from '../../../icons';
import { Button } from '../../Button';
import { SFSButton } from '../SFSButton';

export const SFSFilters = memo(function SFSFilters(inProps: SFSFiltersProps) {
  const {
    children,
    button,

    className,
    style,

    count,
    onReset,

    labelButton,
    labelHeader,
    labelClose,
    labelReset,

    iconFilters = <IconFilterLineW300 />,
    iconClose = <IconCloseLineW600 />,

    FooterProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSFilters',
  });

  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <div className={clsx(className, 'es-sfs-filters')} color="tertiary" style={style}>
      {button ? (
        button({ open: isOpen, setOpen })
      ) : (
        <SFSButton active={!!count} className="es-sfs-filters__button" onClick={onOpen}>
          <div className="body100">{labelButton}</div>
          {iconFilters}
          {!!count && <div className="es-sfs-button-badge es-sfs-filters__button-badge mini200">{count}</div>}
        </SFSButton>
      )}
      <Drawer anchor="right" className="es-sfs-filters__drawer" open={isOpen} onClose={onClose}>
        <div className="es-sfs-filters__header h5">
          {labelHeader}
          <Button
            aria-label={labelClose}
            className="es-sfs-filters__close-button"
            color="tertiary"
            size="500"
            onClick={onClose}
          >
            {iconClose}
          </Button>
        </div>

        <div className="es-sfs-filters__container">{children}</div>

        {count ? (
          <div className="es-sfs-filters__footer">
            {FooterProps ? (
              FooterProps.children
            ) : (
              <Button
                fullWidth
                className="es-sfs-filters__reset-button"
                color="error"
                size="600"
                variant="outlined"
                onClick={onReset}
              >
                {labelReset}
              </Button>
            )}
          </div>
        ) : null}
      </Drawer>
    </div>
  );
});
