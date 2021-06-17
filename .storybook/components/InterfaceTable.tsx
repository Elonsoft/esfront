// Waiting for storybook implementation of this feature.
// https://github.com/storybookjs/storybook/issues/15008

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../src/overrides.d.ts" />

import { FC, useMemo } from 'react';
import { useStyles } from './InterfaceTable.styles';

import { useDarkMode } from 'storybook-dark-mode';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

const getDescription = (c) => {
  return c.comment?.shortText || c.type?.declaration?.signatures?.[0]?.comment?.shortText || null;
};

const getType = (t) => {
  if (t.type === 'intrinsic') {
    return t.name;
  }
  if (t.type === 'literal') {
    if (t.value === null) {
      return `${t.value}`;
    }
    return `'${t.value}'`;
  }
  if (t.type === 'union') {
    return t.types.map(getType).join(' | ');
  }
  if (t.type === 'reference') {
    const reference = json.children.find((e) => e.id === t.id);
    if (reference && reference.type && reference.type.type !== 'reflection') {
      return getType(reference.type);
    }
    return `${t.name}${t.typeArguments ? `<${t.typeArguments.map(getType).join(', ')}>` : ''}`;
  }
  if (t.type === 'reflection') {
    const signature = t.declaration?.signatures?.[0];
    if (signature) {
      const parameters = signature.parameters
        ? signature.parameters.map((p) => `${p.name}: ${getType(p.type)}`).join(', ')
        : '';
      return `(${parameters}) => ${getType(signature.type)}`;
    }
    return '';
  }
  return '';
};

interface InterfaceTableProps {
  name: string;
  variant: 'props' | 'css';
}

const InterfaceTableBase: FC<InterfaceTableProps> = ({ name, variant }) => {
  const styles = useStyles();

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
          type: getType(child.type),
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
    <TableContainer className={styles.root}>
      <Table>
        <TableHead>
          <TableRow className={styles.row}>
            <TableCell colSpan={variant === 'props' ? 3 : 2}>
              <Typography component="code" variant="body100">
                {name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow className={styles.row}>
            <TableCell style={{ width: '200px' }}>Name</TableCell>
            <TableCell>Description</TableCell>
            {variant === 'props' && <TableCell>Default</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow className={styles.row} key={e.id}>
              <TableCell>
                <Typography component="code" variant="body100">
                  {e.name}
                  {variant === 'props' && !e.isOptional && '*'}
                </Typography>
              </TableCell>
              <TableCell>
                <div className={styles.description}>{e.description}</div>
                {variant === 'props' && <code className={styles.code}>{e.type}</code>}
              </TableCell>
              {variant === 'props' && (
                <TableCell>{!!e.default && <code className={styles.code}>{e.default}</code>}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
