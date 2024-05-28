import { ReactNode, useMemo, useState } from 'react';

import { GalleryThumbnailsContext } from './GalleryThumbnails.context';

export const GalleryThumbnailsProvider = ({ children }: { children?: ReactNode }) => {
  const [isVisible, setVisible] = useState(false);

  const value = useMemo(() => {
    return { isVisible, setVisible };
  }, [isVisible, setVisible]);

  return <GalleryThumbnailsContext.Provider value={value}>{children}</GalleryThumbnailsContext.Provider>;
};
