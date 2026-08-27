// Waiting for storybook implementation of this feature.
// https://github.com/storybookjs/storybook/issues/15008

import { useMemo } from 'react';

import { getDefault, getDescription, getField, TableCode, TableContainer, TableDescription } from './TableBase';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

import { useDarkMode } from 'storybook-dark-mode';

interface TableInterfaceProps {
  name: string;
  variant: 'props' | 'css';
}

const TableInterfaceBase = ({ name, variant }: TableInterfaceProps) => {
  const data: Array<{
    id: number;
    name: string;
    isOptional: boolean;
    type: string;
    default: string | null;
    description: string | null;
  }> = useMemo(() => {
    let entry = json.children.find((e) => e.name === name);
    let children = entry?.children || entry?.type?.declaration?.children;

    if (variant === 'props' && entry.kindString === 'Type alias') {
      entry = json.children.find((e) => e.name === (entry.type.typeArguments[0] as any).name);
      children = (entry as any)?.children?.[1]?.type?.types?.[1]?.declaration?.children;
    }

    if (children) {
      return children
        .map((child) => ({
          id: child.id,
          name: child.name,
          isOptional: !!child.flags.isOptional,
          type: getField(child),
          default: getDefault(child),
          description: getDescription(child),
        }))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }

    return [];
  }, [name]);

  if (!data.length) {
    return (
      <div>
        No type definitions found for <code>{name}</code>
      </div>
    );
  }

  return (
    <TableContainer>
      <thead>
        <tr>
          <th colSpan={variant === 'props' ? 3 : 2}>
            <code className="body100">{name}</code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ width: '200px' }}>Name</td>
          <td>Description</td>
          {variant === 'props' && <td>Default</td>}
        </tr>
        {data.map((e) => (
          <tr key={e.id}>
            <td>
              <code className="body100">
                {e.name}
                {variant === 'props' && !e.isOptional && '*'}
              </code>
            </td>
            <td>
              <TableDescription>{e.description}</TableDescription>
              {variant === 'props' && <TableCode>{e.type}</TableCode>}
            </td>
            {variant === 'props' && <td>{!!e.default && <TableCode>{e.default}</TableCode>}</td>}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export const TableInterface = (props: TableInterfaceProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Theme isDarkMode={isDarkMode}>
      <TableInterfaceBase {...props} />
    </Theme>
  );
};
