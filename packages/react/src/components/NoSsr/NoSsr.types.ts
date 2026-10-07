import { ReactNode } from 'react';

export interface NoSsrProps {
  children?: ReactNode;
  /**
   * If `true`, the children are additionally deferred to a different screen frame. Use it to unblock the initial paint
   * when the children are expensive to render.
   * @default false
   */
  defer?: boolean;
  /**
   * The content rendered on the server and until the children are mounted on the client.
   * @default null
   */
  fallback?: ReactNode;
}
