import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagUn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="M12.012 5.237a2.77 2.77 0 1 0 0 5.538 2.77 2.77 0 0 0 0-5.538Zm-.693 2.769a.692.692 0 1 1 1.385 0 .692.692 0 0 1-1.385 0Zm1.41-1.185a1.378 1.378 0 0 0-.348-.15v-.709c.312.056.6.182.847.36l-.499.5Zm-1.04-.162c-.13.031-.253.08-.366.146l-.501-.501c.253-.178.548-.3.866-.35v.705Zm-.366 2.548c.113.065.236.114.365.145v.705a2.066 2.066 0 0 1-.866-.35l.501-.5Zm1.058.133c.124-.034.24-.085.348-.15l.499.499a2.065 2.065 0 0 1-.847.36V9.34Zm.832-.646c.06-.106.108-.22.14-.342h.706c-.052.31-.172.596-.345.843l-.501-.5Zm.14-1.034a1.38 1.38 0 0 0-.14-.343l.5-.5c.174.246.294.533.346.843h-.706Zm-3.024-.87.498.498a1.38 1.38 0 0 0-.156.372h-.707c.054-.322.181-.618.365-.87Zm-.365 1.562h.707c.034.132.087.257.156.371l-.498.5a2.063 2.063 0 0 1-.365-.871Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.512 8.006c0-1.231-.495-2.346-1.296-3.159l-.734.734a3.462 3.462 0 1 1-4.918-.023l-.734-.734a4.502 4.502 0 0 0 1.953 7.512c-.207.393-.175.888.12 1.257l1.132-.907c.34.274.743.596 1.131.907.299-.373.328-.874.114-1.27a4.502 4.502 0 0 0 3.232-4.317Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};