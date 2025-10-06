import React from 'react';

import { useOf } from '@storybook/addon-docs/blocks';
import LinkTo from '@storybook/addon-links/react';

export const ReferencesList = ({ of }: { of?: Parameters<typeof useOf>[0] }) => {
  const resolvedOf = useOf(of || 'story', ['story']);

  if (resolvedOf.type === 'story' && resolvedOf.story.parameters.references) {
    return (
      <>
        <h2>API</h2>
        <ul>
          {resolvedOf.story.parameters.references.map((reference: string) => (
            <li key={reference}>
              <LinkTo kind={`components-api-${reference}`} story="docs">
                <code>{reference}</code>
              </LinkTo>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return null;
};
