import { useCallback, useEffect, useRef, useState } from 'react';

import { SidenavItemProps, SidenavItemTypeMap } from './SidenavItem.types';

import clsx from 'clsx';
import { sidenavClasses } from '../Sidenav.classes';
import { getSidenavItemUtilityClass } from './SidenavItem.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { TypographyProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import composeClasses from '@mui/utils/composeClasses';

import { buttonBaseClasses } from '../../ButtonBase';
import { ListItem, listItemClasses, ListItemIcon, listItemIconClasses } from '../../ListItem';
import { useSidebarContext } from '../../Sidebar/Sidebar.context';
import { Tooltip, tooltipClasses, TooltipProps } from '../../Tooltip';
import { useSidenavContext } from '../Sidenav.context';

type SidenavItemOwnerState = {
  color?: TypographyProps['color'];
  classes?: SidenavItemProps['classes'];
};

const useUtilityClasses = (ownerState: SidenavItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: ['wrapper'],
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getSidenavItemUtilityClass, classes);
};

const SidenavItemRoot = styled(ListItem, {
  name: 'ESSidenavItem',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})<{ ownerState: SidenavItemOwnerState }>(({ theme }) => ({
  [`&.${listItemClasses.root}`]: {
    borderRadius: '6px',
    padding: '0',
    margin: '0 8px',
    justifyContent: 'center',

    '--text': theme.vars.palette.monoA.A800,
    '--icon': theme.vars.palette.monoA.A500,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,

    [`&.${listItemClasses.selected}`]: {
      '--icon': theme.vars.palette.monoA.A600,
      '--background': theme.vars.palette.monoA.A100,
    },

    [`& .${buttonBaseClasses.wrapper}`]: {
      justifyContent: 'center',
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

const SidenavItemWrapper = styled('div', {
  name: 'ESSidenavItem',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper,
})({
  display: 'flex',
});

const SidenavItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESidenavItem',
    slot: 'Tooltip',
    overridesResolver: (_props, styles) => styles.tooltip,
  }
)(({ theme }) => ({
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    padding: '4px 8px',
    maxWidth: '288px',
    ...theme.typography.caption,
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0',
  },
}));

export const SidenavItem: OverridableComponent<SidenavItemTypeMap> = (inProps: SidenavItemProps) => {
  const {
    className,
    sx,
    id = null,
    icon,
    text,
    selected,
    onClick,
    onTouchStart,
    onKeyDown,
    onFocus,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidenavItem',
  });

  const { open, hover, itemId, setHover, setItemId, disableItemHover } = useSidenavContext();
  const { color } = useSidebarContext();

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const ref = useRef<HTMLLIElement | null>(null);
  const shouldSkipClick = useRef(false);

  const onItemTouchStart = (event: React.TouchEvent<HTMLLIElement>) => {
    onTouchStart?.(event);

    if (id && !open && (!hover || id !== itemId)) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (id) {
      setItemId(id);

      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }

    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const onItemFocus = (event: React.FocusEvent<HTMLLIElement>) => {
    onFocus?.(event);

    if (id) {
      setItemId(id);

      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyDown?.(event);

    if (ref.current && event.key === 'ArrowRight') {
      const sidenav = ref.current.closest(`.${sidenavClasses.root}`) as HTMLElement;
      const sidebar = sidenav.querySelector(`.${sidenavClasses.drawer}`) as HTMLElement;
      const element = sidebar.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement | null;

      if (element) {
        element.focus();
      }
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipOpen = () => {
    if (text && (!id || (id !== itemId && open && disableItemHover))) {
      setTooltipOpen(true);
    }
  };

  useEffect(() => {
    if (isTooltipOpen && id && id === itemId) {
      setTooltipOpen(false);
    }
  }, [isTooltipOpen, id, itemId]);

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidenavItemTooltip
      disableInteractive
      arrow={!!text}
      className={classes.tooltip}
      distance={-5}
      enterNextDelay={200}
      leaveDelay={120}
      open={isTooltipOpen}
      placement="right"
      title={<>{text}</>}
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <SidenavItemWrapper className={classes.wrapper} data-id={id}>
        <SidenavItemRoot
          ref={ref}
          button
          className={clsx(classes.root, className)}
          data-id={id}
          ownerState={ownerState}
          selected={selected}
          sx={sx}
          onClick={onItemClick}
          onFocus={onItemFocus}
          onKeyDown={onItemKeyDown}
          onTouchStart={onItemTouchStart}
          {...props}
        >
          <ListItemIcon>{icon}</ListItemIcon>
        </SidenavItemRoot>
      </SidenavItemWrapper>
    </SidenavItemTooltip>
  );
};
