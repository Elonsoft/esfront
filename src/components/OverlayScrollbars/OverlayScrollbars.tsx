import GlobalStyles from '@mui/material/GlobalStyles';

import { overlayScrollbarsCss } from './css';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const globalStyles = <GlobalStyles styles={overlayScrollbarsCss} />;

export const OverlayScrollbars = ((props: any, ref: any) => {
  return <>{globalStyles}</>;
}) as typeof OverlayScrollbarsComponent;
