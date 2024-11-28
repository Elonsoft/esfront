import { useMemo } from 'react';

import json from '../../src/typedoc.json';

interface DescriptionProps {
  name: string;
}

export const Description = ({ name }: DescriptionProps) => {
  const description = useMemo(() => {
    const entry = json.children.find((e) => e.name === name);
    return entry?.comment?.summary?.map((e) => e.text)?.join('') || '';
  }, [name]);

  return (
    <p
      style={{
        margin: '16px 0',
        fontFamily:
          '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: '14px',
        lineHeight: '24px',
      }}
    >
      {description}
    </p>
  );
};
