/* eslint-disable no-use-before-define */
import { ReactNode } from 'react';

import json from '../../src/typedoc.json';

import './Table.scss';

export const TableContainer = ({ children }: { children: ReactNode }) => (
  <div className="sb-table-container">
    <table className="sb-table">{children}</table>
  </div>
);

export const TableDescription = ({ children }: { children: ReactNode }) => (
  <div className="sb-table__description">{children}</div>
);

export const TableCode = ({ children }: { children: ReactNode }) => <code className="sb-table__code">{children}</code>;

export const getDescription = (c) => {
  return c.comment?.summary?.map((e) => e.text).join('') || null;
};

export const getFunctionDescription = (s) => {
  const content = s.comment?.blockTags?.find((tag) => tag.tag === '@returns')?.content;

  if (content) {
    return content.map((e) => e.text).join('');
  }

  return null;
};

export const getDefault = (c) => {
  const text = c.comment?.blockTags?.find((tag) => tag.tag === '@default')?.content?.[0]?.text;

  if (text) {
    return text.substring(6, text.length - 4);
  }

  return text;
};

export const getMethod = (m) => {
  const signature = m?.signatures?.[0];

  if (signature) {
    const parameters = signature.parameters
      ? signature.parameters.map((p) => `${p.name}: ${getProperty(p.type)}`).join(', ')
      : '';
    return `(${parameters}) => ${getProperty(signature.type)}`;
  }

  return '';
};

export const getProperty = (p) => {
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
    case 'indexedAccess': {
      return `${getProperty(p.objectType)}[${getProperty(p.indexType)}]`;
    }
    default: {
      return '';
    }
  }
};

export const getField = (c) => {
  return getProperty(c.type);

  // if (t.kindString === 'Method') {
  //   return getMethod(t);
  // }

  // if (t.kindString === 'Property') {
  //   return getProperty(t.type);
  // }

  // return '';
};
