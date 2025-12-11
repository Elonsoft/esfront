import { forwardRef } from 'react';

import { InformationIconProps, InformationIconTypeMap } from './InformationIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import {
  IconInformationFillW200,
  IconInformationLineW200,
  IconQuestionFillW200,
  IconQuestionLineW200,
} from '../../icons';

const defaultIconMapping = {
  info: IconInformationLineW200,
  question: IconQuestionLineW200,
};

const defaultActiveIconMapping = {
  info: IconInformationFillW200,
  question: IconQuestionFillW200,
};

/**
 * This component is for displaying information icon.
 */
export const InformationIcon = forwardRef(function InformationIcon(
  inProps: InformationIconProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    component: Component = 'div',
    className,
    variant = 'info',
    iconMapping = defaultIconMapping,
    activeIconMapping = defaultActiveIconMapping,
    slotProps = {},

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESInformationIcon',
  });

  const Icon = iconMapping[variant];
  const ActiveIcon = activeIconMapping[variant];

  return (
    <Component
      ref={ref}
      className={clsx(className, 'es-information-icon', `es-information-icon--variant--${variant}`)}
      tabIndex={0}
      {...props}
    >
      <Icon
        container
        containerSize="16px"
        {...slotProps.icon}
        className={clsx('es-information-icon__icon', slotProps.icon?.className)}
      />
      <ActiveIcon
        container
        containerSize="16px"
        {...slotProps.activeIcon}
        className={clsx('es-information-icon__active-icon', slotProps.activeIcon?.className)}
      />
    </Component>
  );
}) as OverridableComponent<InformationIconTypeMap>;
