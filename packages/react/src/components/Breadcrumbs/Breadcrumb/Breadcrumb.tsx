import { BreadcrumbProps, BreadcrumbTypeMap } from './Breadcrumb.types';

import clsx from 'clsx';
import { breadcrumbsClasses } from '../Breadcrumbs.classes';
import { breadcrumbClasses, getBreadcrumbUtilityClass } from './Breadcrumb.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

import { IconBreadcrumbArrowRight } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { buttonBaseClasses } from '../../ButtonBase';
import { svgIconClasses } from '../../SvgIcon';
import { TooltipEllipsis, TooltipEllipsisProps } from '../../TooltipEllipsis';

type BreadcrumbOwnerState = {
  classes?: BreadcrumbProps['classes'];
  shouldFirstShrink?: boolean;
  disabled?: boolean;
};

const useUtilityClasses = (ownerState: BreadcrumbOwnerState) => {
  const { classes, disabled, shouldFirstShrink } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', shouldFirstShrink && 'shouldFirstShrink'],
    content: ['content'],
    separator: ['separator'],
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getBreadcrumbUtilityClass, classes);
};

const BreadcrumbRoot = styled(Typography, {
  name: 'ESBreadcrumb',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, shouldFirstShrink },
    } = props;
    return [styles.root, disabled && styles.disabled, shouldFirstShrink && styles.shouldFirstShrink];
  },
})<{ ownerState: BreadcrumbOwnerState }>(() => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  minWidth: '56px',
  overflow: 'hidden',

  [`&.${breadcrumbsClasses.buttonMore}`]: {
    minWidth: '40px',
  },

  span: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  '&:last-of-type': {
    minWidth: '40px',
    flexGrow: 1,
    flexShrink: '1',
    flexBasis: '0px',

    [`.${breadcrumbClasses.separator}`]: {
      display: 'none',
    },
  },

  variants: [
    {
      props: {
        shouldFirstShrink: true,
      },
      style: {
        '&:first-of-type': {
          flexShrink: '1',
          flexGrow: 0,
        },
      },
    },
    {
      props: {
        disabled: true,
      },
      style: {
        div: {
          cursor: 'not-allowed',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
      },
    },
  ],
})) as any;

const BreadcrumbTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESBreadcrumb',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)(() => ({}));

const BreadcrumbContent = styled(Button, {
  name: 'ESBreadcrumb',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})(({ theme }) => ({
  [`&.${buttonClasses.size300} .${buttonBaseClasses.wrapper}`]: {
    ...theme.typography.caption,
    padding: 0,
  },

  [`&.${buttonClasses.root}.${breadcrumbClasses.content}`]: {
    padding: '0 4px',
    width: '100%',
    maxWidth: '400px',
    '--text': theme.vars.palette.monoA.A900,

    [`&.${buttonBaseClasses.disabled}`]: {
      '--text': theme.vars.palette.monoA.A500,
      pointerEvents: 'none',
    },

    [`& .${svgIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A500,
    },
  },

  [`&:not(:disabled):focus-visible`]: {
    outline: 'none',
    boxShadow: `inset 0px 0px 0px 2px ${theme.vars.palette.monoA[500]}`,
  },
})) as typeof Button;

const BreadcrumbSeparator = styled('div', {
  name: 'ESBreadcrumb',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  color: theme.vars.palette.monoA.A500,

  [`& .${svgIconClasses.root}`]: {
    width: '16px',
  },
}));

export const Breadcrumb: OverridableComponent<BreadcrumbTypeMap> = (inProps: BreadcrumbProps) => {
  const {
    children,
    itemContent,
    className,
    sx,
    style,
    separator = <IconBreadcrumbArrowRight container containerWidth="16px" />,
    disabled,
    position,
    shouldFirstShrink,

    ...props
  } = useDefaultProps({ props: inProps, name: 'ESBreadcrumb' });

  const ownerState = { disabled, shouldFirstShrink, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BreadcrumbRoot
      noWrap
      align="center"
      className={clsx(classes.root, className)}
      component="li"
      itemProp={position ? 'itemListElement' : undefined}
      itemScope={position ? true : undefined}
      itemType={position ? 'https://schema.org/ListItem' : undefined}
      ownerState={ownerState}
      style={style}
      sx={sx}
    >
      <BreadcrumbTooltip
        disableInteractive
        className={clsx(classes.tooltip)}
        title={<Typography variant="caption">{children}</Typography>}
        {...(position ? {} : { disableHoverListener: true, disableFocusListener: true, disableTouchListener: true })}
      >
        {({ ref, childrenRef }) => (
          <div ref={ref as never} style={{ minWidth: 0 }}>
            <BreadcrumbContent
              className={clsx(classes.content)}
              color="monoA"
              disabled={disabled}
              itemProp={position ? 'item' : undefined}
              size="300"
              {...props}
            >
              {position ? (
                <span ref={childrenRef} content={itemContent} itemProp="name">
                  {children}
                </span>
              ) : (
                <>{children}</>
              )}
            </BreadcrumbContent>
          </div>
        )}
      </BreadcrumbTooltip>

      {!!position && <meta content={position} itemProp="position" />}
      <BreadcrumbSeparator className={clsx(classes.separator)}>{separator}</BreadcrumbSeparator>
    </BreadcrumbRoot>
  );
};
