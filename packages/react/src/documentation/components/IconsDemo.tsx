import { CSSProperties } from 'react';

import { Tooltip } from '../../components/Tooltip';
import * as icons from '../../icons';

const rootStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
};

const iconStyle: CSSProperties = {
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '2px',
  border: '1px solid var(--es-mono-a-a100)',
};

export const IconsDemo = () => {
  return (
    <div style={rootStyle}>
      {Object.keys(icons).map((name) => {
        const Icon = icons[name as keyof typeof icons];

        return (
          <Tooltip key={name} arrow title={<code>{name}</code>}>
            <div style={iconStyle}>
              <Icon />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};
