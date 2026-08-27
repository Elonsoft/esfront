import { cloneElement, ForwardedRef, forwardRef, isValidElement, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.types';

import { useEnhancedEffect, useForkRef } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { getReactElementRef, setRef } from '../../utils';

const getContainer = (container: PortalProps['container']) => {
  return typeof container === 'function' ? container() : container;
};

/**
 * Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the
 * parent component.
 */
export const Portal = forwardRef(function Portal(inProps: PortalProps, ref: ForwardedRef<Element>) {
  const {
    children,
    container,
    disablePortal = false,
  } = useDefaultProps({
    props: inProps,
    name: 'ESPortal',
  });

  const [mountNode, setMountNode] = useState<Element | null>(null);

  const handleRef = useForkRef(isValidElement(children) ? getReactElementRef(children) : null, ref);

  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);

      return () => {
        setRef(ref, null);
      };
    }
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if (isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ ref?: React.Ref<unknown> }>, { ref: handleRef });
    }

    return children;
  }

  return mountNode ? createPortal(children, mountNode) : mountNode;
});
