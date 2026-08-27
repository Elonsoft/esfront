import { useMemo } from 'react';

import {
  getDescription,
  getFunctionDescription,
  getProperty,
  TableCode,
  TableContainer,
  TableDescription,
} from './TableBase';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

import { useDarkMode } from 'storybook-dark-mode';

interface TableFunctionProps {
  name: string;
}

const TableFunctionBase = ({ name }: TableFunctionProps) => {
  const data: {
    params: Array<{
      id: number;
      name: string;
      isOptional: boolean;
      type: string;
      default: string | null;
      description: string | null;
    }>;
    returns: {
      type: string;
      description: string | null;
    };
  } | null = useMemo(() => {
    const entry = json.children.find((e) => e.name === name);
    const signature = entry?.signatures?.[0];

    if (signature) {
      const params = (signature as any).parameters
        ? (signature as any).parameters.map((child) => ({
            id: child.id,
            name: child.name,
            isOptional: !!child.flags.isOptional,
            type: getProperty(child.type),
            default: child.comment?.tags?.find((tag) => tag.tag === 'default')?.text,
            description: getDescription(child),
          }))
        : [];
      const returns = { type: getProperty(signature.type), description: getFunctionDescription(signature) };
      return { params, returns };
    }

    return null;
  }, [name]);

  if (!data) {
    return (
      <div>
        No type definitions found for <code>{name}</code>
      </div>
    );
  }

  return (
    <TableContainer>
      {!!data.params.length && (
        <>
          <thead>
            <tr>
              <th colSpan={3}>
                <code className="body100">Arguments</code>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '200px' }}>Name</td>
              <td>Description</td>
              <td>Default</td>
            </tr>
            {data.params.map((e) => (
              <tr key={e.id}>
                <td>
                  <code className="body100">
                    {e.name}
                    {e.isOptional && '*'}
                  </code>
                </td>
                <td>
                  <TableDescription>{e.description}</TableDescription>
                  <TableCode>{e.type}</TableCode>
                </td>
                <td>{!!e.default && <TableCode>{e.default}</TableCode>}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
      <thead>
        <tr>
          <th colSpan={3}>
            <code className="body100">Return Value</code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3}>
            <TableDescription>{data.returns.description}</TableDescription>
            <TableCode>{data.returns.type}</TableCode>
          </td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export const TableFunction = (props: TableFunctionProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Theme isDarkMode={isDarkMode}>
      <TableFunctionBase {...props} />
    </Theme>
  );
};
