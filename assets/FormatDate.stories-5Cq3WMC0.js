import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{T as i,e as m,D as p,P as d,C as c,f as l,h as u}from"./index-C47PwA_p.js";import{R as f}from"./ReferencesList-t5UryQSr.js";import{F as n}from"./FormatDate-DXxV2O17.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-CVbYF98I.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";import"./index-ATBrvDWy.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./DateAdapter.context-BR056eYO.js";const x=`## Requirements

This component relies on the date management library of your choice. Please install any of the libraries supported by
[date-io](https://github.com/dmtrKovalenko/date-io) and set up the date engine by wrapping your application with
\`DateAdapterProvider\`:

\`\`\`tsx
import { DateAdapterProvider } from '@esfront/react';

import DateFnsAdapter from '@date-io/date-fns';
import { ru } from 'date-fns/locale';

const App = () => {
  return (
    <DateAdapterProvider adapter={DateFnsAdapter} locale={ru}>
      ...
    </DateAdapterProvider>
  );
};
\`\`\`
`,C={tags:["autodocs"],component:n,argTypes:{children:{control:{type:"date"}},formatString:{table:{disable:!0}}},args:{children:"2021-01-30T13:00:00.000Z",format:"fullDateTime"},parameters:{references:["DateAdapterProvider","FormatDate"],docs:{page:()=>r.jsxs(r.Fragment,{children:[r.jsx(i,{}),r.jsx(m,{}),r.jsx(p,{}),r.jsx(d,{}),r.jsx(c,{}),r.jsx(l,{includePrimary:!1}),r.jsx(u,{children:x}),r.jsx(f,{})]})}}},e={render:s=>r.jsx(n,{...s})};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <FormatDate {...args} />;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const k=["Demo"];export{e as Demo,k as __namedExportsOrder,C as default};
