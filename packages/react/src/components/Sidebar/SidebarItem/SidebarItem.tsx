import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { SidebarItemProps, SidebarItemTypeMap } from './SidebarItem.types';

import clsx from 'clsx';
import { getSidebarItemUtilityClass, sidebarItemClasses } from './SidebarItem.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useMediaQuery } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import MenuList from '@mui/material/MenuList';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography, { TypographyProps } from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

import { useResizeObserver } from '../../../hooks';
import { IconChevronLeftW200 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { buttonBaseClasses as ESbuttonBaseClasses } from '../../ButtonBase';
import { Divider } from '../../Divider';
import {
  ListItem,
  listItemClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  listItemTextClasses,
} from '../../ListItem';
import { MenuItem, menuItemClasses } from '../../MenuItem';
import { svgIconClasses } from '../../SvgIcon';
import { Tooltip, tooltipClasses, TooltipProps } from '../../Tooltip';
import { useSidebarContext } from '../Sidebar.context';
import { useSidebarMenuContext } from '../SidebarMenu/SidebarMenu.context';

type SidebarItemOwnerState = {
  classes?: SidebarItemProps['classes'];
  icon?: ReactNode;
  open?: boolean;
  color?: TypographyProps['color'];
  isNestedMenuOpen?: boolean | null;
  behaviour?: 'click' | 'hover';
  children?: boolean;
};

const useUtilityClasses = (ownerState: SidebarItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: ['wrapper'],
    button: ['button'],
    tooltip: ['tooltip'],
    tooltipItem: ['tooltipItem'],
    tooltipTitle: ['tooltipTitle'],
    tooltipDivider: ['tooltipDivider'],
    text: ['text'],
    icon: ['icon'],
    nestedMenu: ['nestedMenu'],
    container: ['container'],
    secondaryAction: ['secondaryAction'],
  };

  return composeClasses(slots, getSidebarItemUtilityClass, classes);
};

const SidebarItemRoot = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  margin: '0 8px',
}));

const SidebarItemWrapper = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper,
})(() => ({
  position: 'relative',
}));

const SidebarItemButton = styled(ListItem, {
  name: 'ESSidebarItem',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button,
})<{ ownerState: SidebarItemOwnerState }>(({ theme }) => ({
  [`&.${listItemClasses.root}`]: {
    borderRadius: '4px',
    width: '100%',

    '--text': theme.vars.palette.monoA.A800,
    '--icon': theme.vars.palette.monoA.A500,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,

    [`&.${listItemClasses.selected}`]: {
      '--icon': theme.vars.palette.monoA.A600,
      '--background': theme.vars.palette.monoA.A100,
    },

    [`&.${listItemClasses.root}`]: {
      padding: '6px 8px',
    },

    [`& .${listItemIconClasses.root}`]: {
      color: 'var(--icon)',
      padding: 0,
    },
  },

  variants: [
    {
      props: {
        color: 'primary',
      },
      style: {
        [`&.${listItemClasses.root}`]: {
          '--text': theme.vars.palette.monoB.A800,
          '--icon': theme.vars.palette.monoB.A800,
          '--hovered': theme.vars.palette.monoB.A50,
          '--pressed': theme.vars.palette.monoB.A150,

          [`&.${listItemClasses.selected}`]: {
            '--text': theme.vars.palette.monoB[500],
            '--icon': theme.vars.palette.monoB[500],
            '--background': theme.vars.palette.monoB.A100,
          },
        },
      },
    },
  ],
}));

const SidebarItemSecondaryAction = styled(Button, {
  name: 'ESSidebarItem',
  slot: 'SecondaryAction',
  overridesResolver: (props, styles) => styles.secondaryAction,
})<{ ownerState: SidebarItemOwnerState }>(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  left: 'var(--ESSidebarItemSecondaryAction-width)',
  top: '8px',
  zIndex: '5',
  borderRadius: '50%',

  '--background': 'transparent',
  '--icon': theme.vars.palette.monoA.A500,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,

  [`& .${svgIconClasses.root}`]: {
    transform: 'none',
  },

  [`&.${buttonClasses.size300} .${ESbuttonBaseClasses.wrapper}`]: {
    padding: '0px 8px',
  },

  variants: [
    {
      props: {
        behaviour: 'hover',
      },
      style: {
        pointerEvents: 'none',
      },
    },
    {
      props: {
        color: 'primary',
      },
      style: {
        '--background': 'transparent',
        '--icon': theme.vars.palette.monoB.A800,
        '--hovered': theme.vars.palette.monoB.A50,
        '--pressed': theme.vars.palette.monoB.A150,
      },
    },
    {
      props: {
        isNestedMenuOpen: true,
      },
      style: {
        [`& .${svgIconClasses.root}`]: {
          transform: 'rotate(270deg)',
        },
      },
    },
  ],
}));

const SidebarItemText = styled(ListItemText, {
  name: 'ESSidebarItem',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text,
})<{ ownerState: SidebarItemOwnerState }>(() => ({
  whiteSpace: 'nowrap',
  display: 'none',

  variants: [
    {
      props: {
        open: true,
      },
      style: {
        display: 'block',
      },
    },
  ],

  [`&.${listItemTextClasses.inset}`]: {
    paddingLeft: '36px',
  },
}));

const SidebarItemIcon = styled(ListItemIcon, {
  name: 'ESSidebarItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})<{ ownerState: SidebarItemOwnerState }>(() => ({
  '&:last-of-type': {
    marginLeft: '3.5px',
  },

  [`& .${svgIconClasses.root}`]: {
    transform: 'none',
  },

  variants: [
    {
      props: {
        isNestedMenuOpen: true,
      },
      style: {
        [`& .${svgIconClasses.root}`]: {
          transform: 'rotate(270deg)',
        },
      },
    },
  ],
}));

const SidebarItemContainer = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})(() => ({
  display: 'flex',
  alignItems: 'center',

  [`& .${listItemIconClasses.root}:first-of-type`]: {
    marginRight: '12px',
  },
}));

const SidebarItemNestedMenu = styled('div', {
  name: 'ESSidebarItem',
  slot: 'NestedMenu',
  overridesResolver: (props, styles) => styles.nestedMenu,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  marginTop: '2px',

  [`& .${sidebarItemClasses.root}`]: {
    margin: '0',
  },
}));

const SidebarItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESSidebarItem',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)(({ theme }) => ({
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    padding: '0',
    maxWidth: '288px',
    background: theme.vars.palette.surface[400],
    boxShadow: theme.vars.palette.shadow.down[600],
    color: theme.vars.palette.monoA.A900,
    borderRadius: '4px',

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.vars.palette.surface[400],
      backdropFilter: 'none',
    },
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0',
  },
}));

const SidebarItemTooltipTitle = styled(MenuList, {
  name: 'ESSidebarItem',
  slot: 'TooltipTitle',
  overridesResolver: (props, styles) => styles.tooltipTitle,
})<{ ownerState: SidebarItemOwnerState }>(({ theme }) => ({
  maxHeight: '100vh',
  ...theme.scrollbars.overlayMonoA,

  variants: [
    {
      props: {
        children: true,
      },
      style: {
        paddingBottom: '8px',
      },
    },
  ],
}));

const SidebarItemTooltipItem = styled(MenuItem, {
  name: 'ESSidebarItem',
  slot: 'TooltipItem',
  overridesResolver: (props, styles) => styles.tooltipItem,
})(() => ({
  [`&.${menuItemClasses.root}`]: {
    width: '100%',

    '&:first-child': {
      margin: '4px 0',
    },

    [`&.${listItemClasses.disabled}`]: {
      opacity: '1',
    },
  },
})) as typeof MenuItem;

const SidebarItemTooltipDivider = styled(Divider, {
  name: 'ESSidebarItem',
  slot: 'TooltipDivider',
  overridesResolver: (props, styles) => styles.tooltipDivider,
})(() => ({
  marginBottom: '8px',
}));

export const SidebarItem: OverridableComponent<SidebarItemTypeMap> = (inProps: SidebarItemProps) => {
  const {
    children,
    className,
    icon,
    iconToggle = <IconChevronLeftW200 container containerSize="20px" />,
    inset,
    onClick,
    onKeyDown,
    onTouchStart,
    labelOpen,
    labelHide,
    sx,
    text,
    id,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarItem',
  });

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const refTooltip = useRef<HTMLUListElement | null>(null);
  const refItem = useRef<HTMLLIElement | null>(null);
  const shouldSkipClick = useRef(false);

  const { color, open } = useSidebarContext();
  const { openedItems, onOpen, behaviour: inBehaviour, onClose } = useSidebarMenuContext();

  const isNestedMenuOpen = id ? openedItems.includes(id) : null;

  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
  const behaviour = isTouchDevice ? 'click' : inBehaviour;

  const component = (props as any).component as React.ElementType;

  useResizeObserver(ref, () => {
    if (ref.current && component) {
      const { clientWidth, offsetLeft } = ref.current;
      setWidth(clientWidth + offsetLeft);
    }
  });

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onTooltipOpen = () => {
    if (!open && text) {
      setTooltipOpen(true);
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipKeyDown = (event: React.KeyboardEvent) => {
    if (children && refItem.current && event.key === 'ArrowLeft') {
      refItem.current.focus();
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (children && refTooltip.current && event.key === 'ArrowRight') {
      let element = refTooltip.current.firstChild as HTMLElement;

      if (element.getAttribute('aria-disabled')) {
        element = element.nextSibling?.nextSibling as HTMLElement;
      }

      element.focus();
    }

    onKeyDown?.(event);
  };

  const onNestedMenuHover = (e: React.MouseEvent) => {
    if (behaviour === 'hover' && id) {
      if (e.type === 'mouseenter') {
        onOpen(id);
      } else {
        onClose(id);
      }
    }
  };

  const onNestedMenuClick = (e: React.MouseEvent) => {
    if (children && !isTooltipOpen) {
      e.preventDefault();
    }

    if (open && (behaviour === 'click' || e.detail === 0) && id) {
      if (isNestedMenuOpen) {
        onClose(id);
      } else {
        onOpen(id);
      }
    }
  };

  const onItemTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
    onTouchStart?.(e);

    if (!open && !isTooltipOpen && children) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      e.preventDefault();
      return;
    }

    onClick?.(e);

    if (!component) {
      onNestedMenuClick(e);
    }
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const ownerState = { children: !!children, icon, open, color, isNestedMenuOpen, behaviour, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarItemTooltip
      arrow={!!text}
      className={clsx(classes.tooltip)}
      disableInteractive={!children}
      enterDelay={100}
      enterNextDelay={200}
      enterTouchDelay={0}
      leaveDelay={120}
      leaveTouchDelay={Infinity}
      open={isTooltipOpen}
      placement={children ? 'right-start' : 'right'}
      title={
        <SidebarItemTooltipTitle
          ref={refTooltip}
          disablePadding
          className={clsx(classes.tooltipTitle)}
          ownerState={ownerState}
          onKeyDown={onTooltipKeyDown}
          onMouseDown={onMouseDown}
        >
          <SidebarItemTooltipItem
            className={clsx(classes.tooltipItem)}
            component={component}
            disabled={!onClick}
            size="100"
            tabIndex={-1}
            onClick={onClick}
            {...props}
            selected={false}
          >
            <Typography variant="body100">{text}</Typography>
          </SidebarItemTooltipItem>

          {!!children && <SidebarItemTooltipDivider />}
          {!!children &&
            React.Children.map(children, (child: any, idx: number) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { text, inset, ...rest } = child.props;

              return (
                <SidebarItemTooltipItem
                  key={idx}
                  className={clsx(classes.tooltipItem)}
                  size="100"
                  tabIndex={idx}
                  {...rest}
                >
                  <Typography variant="body100">{text}</Typography>
                </SidebarItemTooltipItem>
              );
            })}
        </SidebarItemTooltipTitle>
      }
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <SidebarItemRoot
        className={clsx(classes.root, className)}
        sx={sx}
        onMouseEnter={onNestedMenuHover}
        onMouseLeave={onNestedMenuHover}
      >
        <SidebarItemWrapper className={clsx(classes.wrapper)}>
          <SidebarItemButton
            ref={refItem}
            button
            className={clsx(classes.button)}
            ownerState={ownerState}
            onClick={onItemClick}
            onKeyDown={onItemKeyDown}
            onTouchStart={onItemTouchStart}
            {...props}
          >
            <SidebarItemContainer ref={ref} className={clsx(classes.container)}>
              {!!icon && <ListItemIcon>{icon}</ListItemIcon>}

              <SidebarItemText
                className={clsx(classes.text)}
                inset={inset}
                ownerState={ownerState}
                primary={text}
                primaryTypographyProps={{ variant: 'body100' }}
              />
              {children && open && !component && (
                <SidebarItemIcon className={clsx(classes.icon)} ownerState={ownerState}>
                  {iconToggle}
                </SidebarItemIcon>
              )}
            </SidebarItemContainer>
          </SidebarItemButton>

          {children && open && component && (
            <SidebarItemSecondaryAction
              aria-label={isNestedMenuOpen ? labelHide : labelOpen}
              className={clsx(classes.secondaryAction)}
              ownerState={ownerState}
              size="300"
              style={
                {
                  '--ESSidebarItemSecondaryAction-width': `${width}px`,
                } as React.CSSProperties
              }
              onClick={onNestedMenuClick}
            >
              {iconToggle}
            </SidebarItemSecondaryAction>
          )}
        </SidebarItemWrapper>

        {open && !!children && (
          <Collapse unmountOnExit in={!!isNestedMenuOpen} timeout="auto">
            <SidebarItemNestedMenu className={clsx(classes.nestedMenu)}>{children}</SidebarItemNestedMenu>
          </Collapse>
        )}
      </SidebarItemRoot>
    </SidebarItemTooltip>
  );
};
