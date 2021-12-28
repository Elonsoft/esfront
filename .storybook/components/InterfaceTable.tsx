// Waiting for storybook implementation of this feature.
// https://github.com/storybookjs/storybook/issues/15008

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../src/overrides.d.ts" />

import { FC, useMemo } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

import { useDarkMode } from 'storybook-dark-mode';

const getDescription = (c) => {
  return c.comment?.shortText || c.type?.declaration?.signatures?.[0]?.comment?.shortText || null;
};

const getMethod = (m) => {
  const signature = m?.signatures?.[0];
  if (signature) {
    const parameters = signature.parameters
      ? signature.parameters.map((p) => `${p.name}: ${getProperty(p.type)}`).join(', ')
      : '';
    return `(${parameters}) => ${getProperty(signature.type)}`;
  }
  return '';
};

const getProperty = (p) => {
  switch (p.type) {
    case 'intrinsic': {
      return p.name;
    }
    case 'literal': {
      if (p.value === null) {
        return `${p.value}`;
      }
      return `'${p.value}'`;
    }
    case 'union': {
      return p.types.map(getProperty).join(' | ');
    }
    case 'array': {
      return `Array<${getProperty(p.elementType)}>`;
    }
    case 'reference': {
      const reference = json.children.find((e) => e.id === p.id);
      if (reference && reference.type && reference.type.type !== 'reflection') {
        return getProperty(reference.type);
      }
      return `${p.name}${p.typeArguments ? `<${p.typeArguments.map(getProperty).join(', ')}>` : ''}`;
    }
    case 'typeOperator': {
      return `${p.operator} ${getProperty(p.target)}`;
    }
    case 'reflection': {
      return getMethod(p.declaration);
    }
    default: {
      return '';
    }
  }
};

const getField = (t) => {
  if (t.kindString === 'Method') {
    return getMethod(t);
  }
  if (t.kindString === 'Property') {
    return getProperty(t.type);
  }
  return '';
};

const InterfaceTableRoot = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.monoA.A150}`,
  borderRadius: 4,
  marginTop: 24
}));

const InterfaceTableRow = styled(TableRow)(({ theme }) => ({
  '& .MuiTableCell-root': {
    borderBottom: `1px solid ${theme.palette.monoA.A150}`
  },
  '&:last-child .MuiTableCell-root': {
    borderBottom: 0
  },
  '&.MuiTableRow-head:last-child .MuiTableCell-root': {
    borderBottom: `1px solid ${theme.palette.monoA.A150}`
  }
}));

const InterfaceTableDescription = styled('div')(() => ({
  marginBottom: 4
}));

const InterfaceTableCode = styled('code')(({ theme }) => ({
  display: 'inline-block',
  padding: '3px 5px',
  borderRadius: 3,
  backgroundColor: theme.palette.monoA.A50,
  border: `1px solid ${theme.palette.monoA.A150}`
}));

interface InterfaceTableProps {
  name: string;
  variant: 'props' | 'css';
}

const InterfaceTableBase: FC<InterfaceTableProps> = ({ name, variant }) => {
  const data: Array<{
    id: number;
    name: string;
    isOptional: boolean;
    type: string;
    default: string | null;
    description: string | null;
  }> = useMemo(() => {
    const entry = json.children.find((e) => e.name === name);
    const children = entry?.children || entry?.type?.declaration?.children;
    if (children) {
      return children
        .map((child) => ({
          id: child.id,
          name: child.name,
          isOptional: !!child.flags.isOptional,
          type: getField(child),
          default: child.comment?.tags?.find((tag) => tag.tag === 'default')?.text,
          description: getDescription(child)
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
    <InterfaceTableRoot>
      <Table>
        <TableHead>
          <InterfaceTableRow>
            <TableCell colSpan={variant === 'props' ? 3 : 2}>
              <Typography component="code" variant="body100">
                {name}
              </Typography>
            </TableCell>
          </InterfaceTableRow>
          <InterfaceTableRow>
            <TableCell style={{ width: '200px' }}>Name</TableCell>
            <TableCell>Description</TableCell>
            {variant === 'props' && <TableCell>Default</TableCell>}
          </InterfaceTableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <InterfaceTableRow key={e.id}>
              <TableCell>
                <Typography component="code" variant="body100">
                  {e.name}
                  {variant === 'props' && !e.isOptional && '*'}
                </Typography>
              </TableCell>
              <TableCell>
                <InterfaceTableDescription>{e.description}</InterfaceTableDescription>
                {variant === 'props' && <InterfaceTableCode>{e.type}</InterfaceTableCode>}
              </TableCell>
              {variant === 'props' && (
                <TableCell>{!!e.default && <InterfaceTableCode>{e.default}</InterfaceTableCode>}</TableCell>
              )}
            </InterfaceTableRow>
          ))}
        </TableBody>
      </Table>
    </InterfaceTableRoot>
  );
};

export const InterfaceTable: React.FC<InterfaceTableProps> = (props) => {
  const isDarkMode = useDarkMode();

  return (
    <Theme isDarkMode={isDarkMode}>
      <InterfaceTableBase {...props} />
    </Theme>
  );
};
