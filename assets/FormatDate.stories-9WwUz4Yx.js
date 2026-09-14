import{j as e,w as i,x as d,y as m,z as p,C as c,A as l,v as u,E as f}from"./iframe-Bc8-Q25v.js";import{F as s}from"./FormatDate-6ojMGFgL.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";const x=`## Requirements

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
`,y={tags:["autodocs"],component:s,argTypes:{children:{control:{type:"date"}},formatString:{table:{disable:!0}}},args:{children:"2021-01-30T13:00:00.000Z",format:"fullDateTime"},parameters:{references:["DateAdapterProvider","FormatDate"],docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(d,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(c,{}),e.jsx(l,{includePrimary:!1}),e.jsx(u,{children:x}),e.jsx(f,{})]})}}},r={render:o=>e.jsx(s,{...o})};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <FormatDate {...args} />;
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const A=["Demo"];export{r as Demo,A as __namedExportsOrder,y as default};
