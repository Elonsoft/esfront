import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0v8H12L0 0h24Z" fill="#0052B4" />
      <path d="M24 8v8H0l12-8h12Z" fill="#D80027" />
      <path
        d="m7.59 8-1.28-.602.681-1.239-1.389.266-.176-1.403-.967 1.032-.968-1.032-.176 1.403-1.389-.266.682 1.24-1.28.6 1.28.602-.682 1.24 1.39-.266.175 1.403.968-1.032.967 1.032.176-1.403 1.39.265-.682-1.239L7.59 8ZM1.021 1.513l.426.595.697-.221-.434.589.426.595-.695-.232-.434.59.006-.732-.695-.232.698-.22.005-.732ZM1.021 12.571l.426.596.697-.221-.434.588.426.595-.695-.23-.434.588.006-.732-.695-.231.698-.22.005-.733ZM9.862 7.042l-.425.595-.698-.221.434.589-.425.595.694-.231.434.588-.005-.731.694-.232-.697-.22-.006-.732Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
