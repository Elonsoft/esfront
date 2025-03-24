import {
  cloneElement,
  FocusEvent,
  forwardRef,
  isValidElement,
  MouseEvent,
  MutableRefObject,
  SyntheticEvent,
  TouchEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TooltipProps } from './Tooltip.types';

import clsx from 'clsx';
import { getTooltipUtilityClass, tooltipClasses } from './Tooltip.classes';

import { appendOwnerState, unstable_composeClasses as composeClasses } from '@mui/base';

import styled from '@mui/material/styles/styled';
import useTheme from '@mui/material/styles/useTheme';
import useThemeProps from '@mui/material/styles/useThemeProps';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import capitalize from '@mui/utils/capitalize';
import useControlled from '@mui/utils/useControlled';
import useId from '@mui/utils/useId';
import useIsFocusVisible from '@mui/utils/useIsFocusVisible';
import useTimeout, { Timeout } from '@mui/utils/useTimeout';

import { IconPolygon, IconPolygon2, IconPolygon3 } from './icons';

import { useEvent, useForkRef } from '../../hooks';
import { svgIconClasses } from '../SvgIcon';

type TooltipOwnerState = {
  classes: TooltipProps['classes'];
  color: TooltipProps['color'];
  arrow: TooltipProps['arrow'];
  arrowSize?: TooltipProps['arrowSize'];
  disableInteractive: TooltipProps['disableInteractive'];
  placement: TooltipProps['placement'];
  PopperComponentProp: TooltipProps['PopperComponent'];
  touch: boolean;
};

const useUtilityClasses = (ownerState: TooltipOwnerState) => {
  const { classes, disableInteractive, arrow, touch, placement, color, arrowSize } = ownerState;

  const slots = {
    popper: [
      'popper',
      !disableInteractive && 'popperInteractive',
      arrow && 'popperArrow',
      arrowSize && `arrowSize${arrowSize}`,
    ],
    tooltip: [
      'tooltip',
      arrow && 'tooltipArrow',
      touch && 'touch',
      placement && `tooltipPlacement${capitalize(placement.split('-')[0])}`,
      color && `color${capitalize(color)}`,
    ],
    arrow: ['arrow'],
  };

  return composeClasses(slots, getTooltipUtilityClass, classes);
};

const TooltipPopper = styled(Popper, {
  name: 'ESTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.popper,
      styles[`arrowSize${ownerState.arrowSize}`],
      !ownerState.disableInteractive && styles.popperInteractive,
      ownerState.arrow && styles.popperArrow,
      !ownerState.open && styles.popperClose,
    ];
  },
})<{ ownerState: TooltipOwnerState }>(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
  pointerEvents: 'none',

  [`&[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
    transformOrigin: 'center top',
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    transformOrigin: 'center bottom',
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    transformOrigin: 'left center',
  },
  [`&[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]: {
    transformOrigin: 'right center',
  },

  variants: [
    {
      props: {
        disableInteractive: false,
      },
      style: {
        pointerEvents: 'auto',
      },
    },
    {
      props: {
        open: false,
      },
      style: {
        pointerEvents: 'none',
      },
    },
    {
      props: {
        arrow: false,
      },
      style: {
        [`&[data-popper-placement*="bottom"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginTop: '0',
          },
        },
        [`&[data-popper-placement*="top"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginBottom: '0',
          },
        },
        [`&[data-popper-placement*="right"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginLeft: '0',
          },
        },
        [`&[data-popper-placement*="left"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginRight: '0',
          },
        },
      },
    },
    {
      props: {
        arrow: true,
      },
      style: {
        [`&[data-popper-placement*="bottom"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginTop: 'calc(6px + var(--ESTooltip-distance))',
          },

          [`& .${tooltipClasses.arrow}`]: {
            bottom: '100%',
            height: '6px',
            width: '10px',
          },

          [`&.${tooltipClasses.arrowSize8}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginTop: 'calc(8px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '8px',
              width: '12px',
            },
          },

          [`&.${tooltipClasses.arrowSize10}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginTop: 'calc(10px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '10px',
              width: '16px',
            },
          },
        },
        [`&[data-popper-placement*="top"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginBottom: 'calc(6px + var(--ESTooltip-distance))',
          },

          [`& .${tooltipClasses.arrow}`]: {
            top: '100%',
            height: '6px',
            width: '10px',

            [`& .${svgIconClasses.root}`]: {
              transform: 'rotate(180deg)',
            },
          },

          [`&.${tooltipClasses.arrowSize8}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginBottom: 'calc(8px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '8px',
              width: '12px',
            },
          },

          [`&.${tooltipClasses.arrowSize10}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginBottom: 'calc(10px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '10px',
              width: '16px',
            },
          },
        },
        [`&[data-popper-placement*="right"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginLeft: 'calc(6px + var(--ESTooltip-distance))',
          },

          [`& .${tooltipClasses.arrow}`]: {
            right: '100%',
            height: '10px',
            width: '6px',

            [`& .${svgIconClasses.root}`]: {
              transform: 'rotate(270deg)',
            },
          },

          [`&.${tooltipClasses.arrowSize8}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginLeft: 'calc(8px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '12px',
              width: '8px',
            },
          },

          [`&.${tooltipClasses.arrowSize10}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginLeft: 'calc(10px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '16px',
              width: '10px',
            },
          },
        },
        [`&[data-popper-placement*="left"]`]: {
          [`& .${tooltipClasses.tooltip}`]: {
            marginRight: 'calc(6px + var(--ESTooltip-distance))',
          },

          [`& .${tooltipClasses.arrow}`]: {
            left: '100%',
            height: '10px',
            width: '6px',

            [`& .${svgIconClasses.root}`]: {
              transform: 'rotate(90deg)',
            },
          },

          [`&.${tooltipClasses.arrowSize8}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginRight: 'calc(8px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '12px',
              width: '8px',
            },
          },

          [`&.${tooltipClasses.arrowSize10}`]: {
            [`& .${tooltipClasses.tooltip}`]: {
              marginRight: 'calc(10px + var(--ESTooltip-distance))',
            },

            [`& .${tooltipClasses.arrow}`]: {
              height: '16px',
              width: '10px',
            },
          },
        },
      },
    },
  ],
}));

const TooltipTooltip = styled('div', {
  name: 'ESTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.tooltip,
      ownerState.touch && styles.touch,
      ownerState.arrow && styles.tooltipArrow,
      styles[`tooltipPlacement${capitalize(ownerState.placement.split('-')[0])}`],
    ];
  },
})<{ ownerState: TooltipOwnerState }>(({ theme }) => ({
  ...theme.typography.caption,
  backdropFilter: 'blur(40px)',
  borderRadius: '4px',
  color: theme.vars.palette.monoB[500],
  margin: '8px',
  maxWidth: '320px',
  padding: '4px 8px',
  wordWrap: 'break-word',

  variants: [
    {
      props: {
        arrow: true,
      },
      style: {
        position: 'relative',
      },
    },
    {
      props: { color: 'primary' },
      style: {
        backgroundColor: theme.vars.palette.primary[300],
      },
    },
    {
      props: { color: 'secondary' },
      style: {
        backgroundColor: theme.vars.palette.secondary[300],
        color: theme.vars.palette.black.A900,
      },
    },
    {
      props: { color: 'error' },
      style: {
        backgroundColor: theme.vars.palette.error[300],
      },
    },
    {
      props: { color: 'info' },
      style: {
        backgroundColor: theme.vars.palette.info[300],
      },
    },
    {
      props: { color: 'success' },
      style: {
        backgroundColor: theme.vars.palette.success[300],
      },
    },
    {
      props: { color: 'warning' },
      style: {
        backgroundColor: theme.vars.palette.warning[300],
      },
    },
    {
      props: { color: 'monoAA600' },
      style: {
        backgroundColor: theme.vars.palette.monoA.A600,
      },
    },
    {
      props: { color: 'monoB' },
      style: {
        backgroundColor: theme.vars.palette.monoB[500],
        color: theme.vars.palette.monoA.A900,
        boxShadow: `${theme.vars.palette.shadow.down[500]}`,
      },
    },
    {
      props: { color: 'monoBA600' },
      style: {
        backgroundColor: theme.vars.palette.monoB.A600,
        color: theme.vars.palette.monoA.A900,
      },
    },
    {
      props: { color: 'whiteA600' },
      style: {
        backgroundColor: theme.vars.palette.white.A600,
        color: theme.vars.palette.monoA.A900,
      },
    },
  ],
}));

const TooltipArrow = styled('span', {
  name: 'ESTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow,
})<{ ownerState: TooltipOwnerState }>(({ theme }) => ({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'absolute',

  variants: [
    {
      props: { color: 'primary' },
      style: {
        color: theme.vars.palette.primary[300],
      },
    },
    {
      props: { color: 'secondary' },
      style: {
        color: theme.vars.palette.secondary[300],
      },
    },
    {
      props: { color: 'error' },
      style: {
        color: theme.vars.palette.error[300],
      },
    },
    {
      props: { color: 'info' },
      style: {
        color: theme.vars.palette.info[300],
      },
    },
    {
      props: { color: 'success' },
      style: {
        color: theme.vars.palette.success[300],
      },
    },
    {
      props: { color: 'warning' },
      style: {
        color: theme.vars.palette.warning[300],
      },
    },
    {
      props: { color: 'monoAA600' },
      style: {
        color: theme.vars.palette.monoA.A600,
      },
    },
    {
      props: { color: 'monoB' },
      style: {
        color: theme.vars.palette.monoB[500],
      },
    },
    {
      props: { color: 'monoBA600' },
      style: {
        color: theme.vars.palette.monoB.A600,
      },
    },
    {
      props: { color: 'whiteA600' },
      style: {
        color: theme.vars.palette.white.A600,
      },
    },
  ],
}));

let hystersisOpen = false;
const hystersisTimer = new Timeout();
let cursorPosition = { x: 0, y: 0 };

export function testReset() {
  hystersisOpen = false;
  hystersisTimer.clear();
}

function composeEventHandler<T extends MouseEvent | FocusEvent | TouchEvent>(
  handler: (event: T, ...params: any[]) => void,
  eventHandler?: (event: T, ...params: any[]) => void
) {
  return (event: SyntheticEvent, ...params: any[]) => {
    if (eventHandler) {
      eventHandler(event as T, ...params);
    }

    handler(event as T, ...params);
  };
}

const defaultArrowIconMapping = {
  '6': { icon: <IconPolygon />, width: 10 },
  '8': { icon: <IconPolygon2 />, width: 12 },
  '10': { icon: <IconPolygon3 />, width: 16 },
};

export const Tooltip = forwardRef(function Tooltip(inProps: TooltipProps, ref) {
  const {
    arrow = true,
    arrowSize = '6',
    arrowIconMapping = defaultArrowIconMapping,
    distance = 4,
    children: childrenProp,
    classes: classesProp,
    color = 'monoAA600',
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'top',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp = Fade,
    TransitionProps,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTooltip' });

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = isValidElement(childrenProp) ? childrenProp : <span>{childrenProp}</span>;

  const theme = useTheme();

  const [childNode, setChildNode] = useState<HTMLElement>();
  const [arrowRef, setArrowRef] = useState(null);
  const ignoreNonTouchEvents = useRef(false);

  const disableInteractive = disableInteractiveProp || !!followCursor;

  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();

  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open',
  });

  let open = openState;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: isControlled } = useRef(openProp !== undefined);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (
        childNode &&
        (childNode as HTMLButtonElement).disabled &&
        !isControlled &&
        title !== '' &&
        childNode.tagName.toLowerCase() === 'button'
      ) {
        console.error(
          [
            'You are providing a disabled `button` child to the Tooltip component.',
            'A disabled element does not fire events.',
            "Tooltip needs to listen to the child element's events to display the title.",
            '',
            'Add a simple wrapper element, such as a `span`.',
          ].join('\n')
        );
      }
    }, [title, childNode, isControlled]);
  }

  const id = useId(idProp);

  const prevUserSelect = useRef<string>();

  const stopTouchInteraction = useEvent(() => {
    if (prevUserSelect.current !== undefined) {
      (document.body.style as any).WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    touchTimer.clear();
  });

  useEffect(() => {
    return () => {
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = (event: MouseEvent | FocusEvent | TouchEvent) => {
    hystersisTimer.clear();
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = useEvent((event: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent) => {
    hystersisTimer.start(800 + leaveDelay, () => {
      hystersisOpen = false;
    });

    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    closeTimer.start(theme.transitions.duration.shortest, () => {
      ignoreNonTouchEvents.current = false;
    });
  });

  const handleMouseOver = (event: MouseEvent | FocusEvent | TouchEvent) => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }

    enterTimer.clear();
    leaveTimer.clear();

    if (enterDelay || (hystersisOpen && enterNextDelay)) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };

  const handleMouseLeave = (event: MouseEvent | FocusEvent) => {
    enterTimer.clear();

    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.
  const [, setChildIsFocusVisible] = useState(false);

  const handleBlur = (event: FocusEvent) => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode && event.currentTarget instanceof HTMLElement) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };

  const detectTouchStart = (event: TouchEvent) => {
    ignoreNonTouchEvents.current = true;

    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();

    prevUserSelect.current = (document.body.style as any).WebkitUserSelect;
    // Prevent iOS text selection on long-tap.
    (document.body.style as any).WebkitUserSelect = 'none';

    touchTimer.start(enterTouchDelay, () => {
      (document.body.style as any).WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();

    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using blink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);

  const handleRef = useForkRef(
    (children as JSX.Element & { ref: MutableRefObject<unknown> }).ref,
    focusVisibleRef,
    setChildNode,
    ref
  );

  // There is no point in displaying an empty tooltip.
  if (!title && title !== 0) {
    open = false;
  }

  const popperRef = useRef<any>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    cursorPosition = { x: event.clientX, y: event.clientY };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps: {
    title?: string | null;
    'aria-describedby'?: string | null;
    'aria-label'?: string | null;
    'aria-labelledby'?: string | null;
  } = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = {
    ...nameOrDescProps,
    ...props,
    ...children.props,
    className: clsx(props.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...(followCursor ? { onMouseMove: handleMouseMove } : {}),
  };

  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-mui-internal-clone-element'] = true;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (childNode && !childNode.getAttribute('data-mui-internal-clone-element')) {
        console.error(
          [
            'The `children` component of the Tooltip is not forwarding its props correctly.',
            'Please make sure that props are spread on the same element that the ref is applied to.',
          ].join('\n')
        );
      }
    }, [childNode]);
  }

  const interactiveWrapperListeners: {
    onMouseOver?: (event: MouseEvent | FocusEvent | TouchEvent) => void;
    onMouseLeave?: (event: MouseEvent | FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
  } = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(
        [
          'You have provided a `title` prop to the child of <Tooltip />.',
          `Remove this title prop \`${children.props.title}\` or the Tooltip component.`,
        ].join('\n')
      );
    }
  }

  const popperOptions = useMemo(() => {
    let tooltipModifiers = [
      {
        name: 'arrow',
        enabled: Boolean(arrowRef),
        options: {
          element: arrowRef,
          padding: 4,
        },
      },
      {
        name: 'offset',
        options: {
          offset: ({ placement, reference, popper }: { placement: any; reference: any; popper: any }) => {
            const padding = 8;
            const arrowOffsetX = 14;
            const arrowOffsetY = 7;
            const arrowHalfWidth = arrowIconMapping[arrowSize].width / 2;

            if (placement === 'top-end' || placement === 'bottom-end') {
              return [
                Math.min(
                  -(reference.width / 2 - arrowHalfWidth - padding - arrowOffsetX),
                  -(reference.width / 2 - popper.width / 2)
                ),
                0,
              ];
            }

            if (placement === 'top-start' || placement === 'bottom-start') {
              return [
                Math.max(
                  reference.width / 2 - arrowHalfWidth - padding - arrowOffsetX,
                  reference.width / 2 - popper.width / 2
                ),
                0,
              ];
            }

            if (placement === 'right-end' || placement === 'left-end') {
              return [
                Math.min(
                  -(reference.height / 2 - arrowHalfWidth - padding - arrowOffsetY),
                  -(reference.height / 2 - popper.height / 2)
                ),
                0,
              ];
            }

            if (placement === 'right-start' || placement === 'left-start') {
              return [
                Math.max(
                  reference.height / 2 - arrowHalfWidth - padding - arrowOffsetY,
                  reference.height / 2 - popper.height / 2
                ),
                0,
              ];
            }

            return [0, 0];
          },
        },
      },
    ];

    if (PopperProps.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }

    return {
      ...PopperProps.popperOptions,
      modifiers: tooltipModifiers,
    };
  }, [arrowRef, PopperProps, distance, arrowSize]);

  const ownerState = {
    ...props,
    classes: classesProp,
    color,
    arrow,
    arrowSize: slots.arrow ? undefined : arrowSize,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current,
  };

  const classes = useUtilityClasses(ownerState);

  const PopperComponent = slots.popper ?? TooltipPopper;
  const TransitionComponent = slots.transition ?? TransitionComponentProp ?? Fade;
  const TooltipComponent = slots.tooltip ?? TooltipTooltip;
  const ArrowComponent = slots.arrow ?? TooltipArrow;

  const popperProps = appendOwnerState(
    PopperComponent,
    {
      ...PopperProps,
      ...slotProps.popper,
      className: clsx(classes.popper, PopperProps?.className, slotProps.popper?.className),
      style: {
        '--ESTooltip-distance': `${distance || 0}px`,
        ...PopperProps?.style,
        ...slotProps.popper?.style,
      } as React.CSSProperties,
    },
    ownerState
  );

  const transitionProps = appendOwnerState(
    TransitionComponent,
    { ...TransitionProps, ...slotProps.transition },
    ownerState
  );

  const tooltipProps = appendOwnerState(
    TooltipComponent,
    {
      ...slotProps.tooltip,
      className: clsx(classes.tooltip, slotProps.tooltip?.className),
    },
    ownerState
  );

  const tooltipArrowProps = appendOwnerState(
    ArrowComponent,
    {
      ...slotProps.arrow,
      className: clsx(classes.arrow, slotProps.arrow?.className),
    },
    ownerState
  );

  return (
    <>
      {cloneElement(children, childrenProps)}
      <PopperComponent
        transition
        anchorEl={
          followCursor
            ? {
                getBoundingClientRect: () => {
                  const { x, y } = cursorPosition;

                  if (followCursor !== 'both' && childNode) {
                    const rect = childNode.getBoundingClientRect();

                    if (followCursor === 'horizontal') {
                      return new DOMRect(x, rect.y, 0, rect.height);
                    }

                    return new DOMRect(rect.x, y, rect.width, 0);
                  }

                  return new DOMRect(x, y, 0, 0);
                },
              }
            : childNode
        }
        as={PopperComponentProp ?? Popper}
        id={id}
        open={childNode ? open : false}
        placement={placement}
        popperRef={popperRef}
        {...interactiveWrapperListeners}
        {...popperProps}
        popperOptions={popperOptions}
      >
        {({ TransitionProps: TransitionPropsInner }) => (
          // eslint-disable-next-line
          // @ts-ignore
          <TransitionComponent
            timeout={theme.transitions.duration.shorter}
            {...TransitionPropsInner}
            {...transitionProps}
          >
            <TooltipComponent {...tooltipProps}>
              {title}
              {arrow ? (
                <ArrowComponent {...tooltipArrowProps} ref={setArrowRef}>
                  {!slots.arrow && arrowIconMapping[arrowSize].icon}
                </ArrowComponent>
              ) : null}
            </TooltipComponent>
          </TransitionComponent>
        )}
      </PopperComponent>
    </>
  );
});
