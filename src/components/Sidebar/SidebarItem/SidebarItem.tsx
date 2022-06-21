import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { SidebarItemProps, SidebarItemTypeMap } from './SidebarItem.types';

import clsx from 'clsx';
import { getSidebarItemUtilityClass } from './SidebarItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import { useResizeObserver } from '../../../hooks';
import { IconChevronLeftSmall } from '../../../icons';
import { useSidebarContext } from '../Sidebar.context';
import { useSidebarMenuContext } from '../SidebarMenu/SidebarMenu.context';

type SidebarItemOwnerState = {
  classes?: SidebarItemProps['classes'];
  icon?: ReactNode;
  open?: boolean;
  color?: TypographyProps['color'];
  width: number;
  isNestedMenuOpen?: boolean | null;
  behaviour?: 'click' | 'hover';
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
    text: ['text'],
    icon: ['icon'],
    nestedMenu: ['nestedMenu'],
    container: ['icontainer'],
    secondaryAction: ['secondaryAction']
  };

  return composeClasses(slots, getSidebarItemUtilityClass, classes);
};

const SidebarItemRoot = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  margin: '0 8px'
}));

const SidebarItemWrapper = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})(() => ({
  position: 'relative'
}));

const SidebarItemButton = styled(ListItemButton, {
  name: 'ESSidebarItem',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})<{ ownerState: SidebarItemOwnerState }>(({ theme, ownerState }) => ({
  '&.MuiListItemButton-root': {
    borderRadius: '4px',
    width: '100%',
    padding: '6px 8px',

    '&.MuiButtonBase-root': {
      '& .MuiTouchRipple-root': {
        transitionDuration: `${theme.transitions.duration.short}ms`
      }
    },

    ...(ownerState.color === 'default' && {
      ...theme.mixins.listItem({
        background: 'transparent',
        color: theme.palette.monoA.A800,
        hover: theme.palette.monoA.A50,
        icon: theme.palette.monoA.A500,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      }),

      '&.Mui-selected': {
        ...theme.mixins.listItem({
          background: theme.palette.monoA.A100,
          hover: theme.palette.monoA.A50,
          icon: theme.palette.monoA.A600,
          focus: theme.palette.monoA.A75,
          active: theme.palette.monoA.A150
        })
      }
    }),

    ...(ownerState.color === 'primary' && {
      ...theme.mixins.listItem({
        background: 'transparent',
        color: theme.palette.monoB.A800,
        icon: theme.palette.monoB.A800,
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      }),

      '&.Mui-selected': {
        ...theme.mixins.listItem({
          background: theme.palette.monoB.A100,
          color: theme.palette.monoB[500],
          icon: theme.palette.monoB[500],
          hover: theme.palette.monoB.A50,
          focus: theme.palette.monoB.A75,
          active: theme.palette.monoB.A150
        })
      }
    })
  }
}));

const SidebarItemSecondaryAction = styled(IconButton, {
  name: 'ESSidebarItem',
  slot: 'SecondaryAction',
  overridesResolver: (props, styles) => styles.secondaryAction
})<{ ownerState: SidebarItemOwnerState }>(({ theme, ownerState }) => ({
  '&.MuiIconButton-root': {
    position: 'absolute',
    left: `${ownerState.width}px`,
    top: '8px',
    zIndex: '5',

    ...(ownerState.behaviour === 'hover' && {
      '&.Mui-disabled': {
        opacity: '1'
      }
    }),

    ...(ownerState.color === 'default' && {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoA.A500,
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      })
    }),

    ...(ownerState.color === 'primary' && {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoB.A800,
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      })
    }),

    '& .MuiSvgIcon-root': {
      transform: `${ownerState.isNestedMenuOpen ? 'rotate(270deg)' : 'none'}`
    }
  }
}));

const SidebarItemText = styled(ListItemText, {
  name: 'ESSidebarItem',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})<{ ownerState: SidebarItemOwnerState }>(({ ownerState: { open } }) => ({
  whiteSpace: 'nowrap',
  display: `${open ? 'block' : 'none'}`,

  '&.MuiListItemText-inset': {
    paddingLeft: '36px'
  }
}));

const SidebarItemIcon = styled(ListItemIcon, {
  name: 'ESSidebarItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})<{ ownerState: SidebarItemOwnerState }>(({ ownerState: { isNestedMenuOpen } }) => ({
  '&:last-of-type': {
    marginLeft: '4px'
  },

  '& .MuiSvgIcon-root': {
    transform: `${isNestedMenuOpen ? 'rotate(270deg)' : 'none'}`
  }
}));

const SidebarItemContainer = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'flex',
  alignItems: 'center',

  '& .MuiListItemIcon-root:first-of-type': {
    marginRight: '12px'
  }
}));

const SidebarItemNestedMenu = styled('div', {
  name: 'ESSidebarItem',
  slot: 'NestedMenu',
  overridesResolver: (props, styles) => styles.nestedMenu
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  marginTop: '2px',

  '& .ESSidebarItem-root': {
    margin: '0'
  }
}));

const SidebarItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESidebarItem',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(() => ({
  '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
    padding: '0',
    maxWidth: '288px'
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0'
  }
}));

const SidebarItemTooltipTitle = styled(MenuList, {
  name: 'ESSidebarItem',
  slot: 'TooltipTitle',
  overridesResolver: (props, styles) => styles.tooltipTitle
})(({ theme }) => ({
  maxHeight: '100vh',
  ...theme.scrollbars.overlay
}));

const SidebarItemTooltipItem = styled(MenuItem, {
  name: 'ESSidebarItem',
  slot: 'TooltipItem',
  overridesResolver: (props, styles) => styles.tooltipItem
})(({ theme }) => ({
  '&.MuiMenuItem-root': {
    width: '100%',
    minHeight: '24px',
    color: theme.palette.monoB[500],

    '&.Mui-disabled': {
      opacity: '1'
    }
  }
})) as typeof MenuItem;

export const SidebarItem: OverridableComponent<SidebarItemTypeMap> = (inProps: SidebarItemProps) => {
  const {
    children,
    className,
    icon,
    iconToggle = <IconChevronLeftSmall />,
    inset,
    onClick,
    onTouchStart,
    labelOpen,
    labelHide,
    sx,
    text,
    id,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarItem'
  });

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const refTooltip = useRef<HTMLUListElement | null>(null);
  const refItem = useRef<HTMLDivElement | null>(null);
  const shouldSkipClick = useRef(false);

  const { color, open } = useSidebarContext();
  const { openedItems, onOpen, behaviour, onClose } = useSidebarMenuContext();

  const isNestedMenuOpen = id ? openedItems.includes(id) : null;

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

  const onKeyDownItem = (event: React.KeyboardEvent) => {
    if (children) {
      event.key === 'ArrowLeft' && refItem.current?.focus();

      if (refTooltip.current && event.key === 'ArrowRight') {
        let element = refTooltip.current.firstChild as HTMLElement;
        if (element.getAttribute('aria-disabled')) {
          element = element.nextSibling as HTMLElement;
        }
        element.focus();
      }
    }
  };

  const onNestedMenuHover = (e: React.MouseEvent) => {
    if (behaviour === 'hover' && id) {
      e.type === 'mouseenter' ? onOpen(id) : onClose(id);
    }
  };

  const onNestedMenuClick = (e: React.MouseEvent) => {
    children && !isTooltipOpen && e.preventDefault();

    if (open && behaviour === 'click' && id) {
      isNestedMenuOpen ? onClose(id) : onOpen(id);
    }
  };

  const onItemTouchStart = () => {
    onTouchStart && onTouchStart();

    if (!open && !isTooltipOpen && children) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (e: React.MouseEvent) => {
    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      e.preventDefault();
      return;
    }

    onClick && onClick();
    !component && onNestedMenuClick(e);
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const ownerState = { children, icon, open, color, isNestedMenuOpen, width, behaviour, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <SidebarItemTooltip
        className={clsx(classes.tooltip)}
        open={isTooltipOpen}
        onClose={onTooltipClose}
        onOpen={onTooltipOpen}
        enterTouchDelay={0}
        leaveTouchDelay={Infinity}
        arrow={!!text}
        enterDelay={100}
        enterNextDelay={200}
        leaveDelay={120}
        disableInteractive={!children}
        title={
          <SidebarItemTooltipTitle
            className={clsx(classes.tooltipTitle)}
            disablePadding
            onKeyDown={onKeyDownItem}
            onMouseDown={onMouseDown}
            ref={refTooltip}
          >
            <SidebarItemTooltipItem
              className={clsx(classes.tooltipItem)}
              component={component}
              disabled={!onClick}
              tabIndex={-1}
              divider={!!children}
              onClick={onClick}
              {...props}
            >
              <Typography variant="caption">{text}</Typography>
            </SidebarItemTooltipItem>

            {children &&
              React.Children.map(children, (child: any, idx: number) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { text, inset, ...rest } = child.props;

                return (
                  <SidebarItemTooltipItem className={clsx(classes.tooltipItem)} key={idx} tabIndex={idx} {...rest}>
                    <Typography variant="caption">{text}</Typography>
                  </SidebarItemTooltipItem>
                );
              })}
          </SidebarItemTooltipTitle>
        }
        placement={children ? 'right-start' : 'right'}
      >
        <SidebarItemRoot
          className={clsx(classes.root, className)}
          onMouseEnter={onNestedMenuHover}
          onMouseLeave={onNestedMenuHover}
          sx={sx}
        >
          <SidebarItemWrapper className={clsx(classes.wrapper)}>
            <SidebarItemButton
              className={clsx(classes.button)}
              ownerState={ownerState}
              onTouchStart={onItemTouchStart}
              onClick={onItemClick}
              onKeyDown={onKeyDownItem}
              ref={refItem}
              {...props}
            >
              <SidebarItemContainer className={clsx(classes.container)} ref={ref}>
                {!!icon && <ListItemIcon>{icon}</ListItemIcon>}

                <SidebarItemText
                  className={clsx(classes.text)}
                  ownerState={ownerState}
                  primary={text}
                  primaryTypographyProps={{ variant: 'body100' }}
                  inset={inset}
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
                className={clsx(classes.secondaryAction)}
                onClick={onNestedMenuClick}
                aria-label={!isNestedMenuOpen ? labelOpen : labelHide}
                disabled={behaviour === 'hover'}
                ownerState={ownerState}
                size="24"
              >
                {iconToggle}
              </SidebarItemSecondaryAction>
            )}
          </SidebarItemWrapper>

          {open && (
            <Collapse in={!!isNestedMenuOpen} timeout="auto">
              <SidebarItemNestedMenu className={clsx(classes.nestedMenu)}>{children}</SidebarItemNestedMenu>
            </Collapse>
          )}
        </SidebarItemRoot>
      </SidebarItemTooltip>
    </>
  );
};
