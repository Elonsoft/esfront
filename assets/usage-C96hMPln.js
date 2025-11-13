import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{useMDXComponents as o}from"./index-EQ2lhxnn.js";import{M as i}from"./index-KGiTaVI6.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BuK3RciO.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";function n(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Usage",parameters:{viewMode:"docs"}}),`
`,e.jsx(t.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page."}),`
`,e.jsx(t.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(t.p,{children:"Here's a quick example to get you started:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {} from '@esfront/react/lib/overrides';

import ReactDOM from 'react-dom';

import { ThemeProvider, EmptyState } from '@esfront/react';
import Button from '@mui/material/Button';

const Application = () => {
  return (
    <ThemeProvider>
      <Button variant="contained">Hello World</Button>
      <EmptyState heading="There are no entities yet" subheading="Do you want to create the first entity?" />
    </ThemeProvider>
  );
};

ReactDOM.render(<Application />, document.querySelector('#root'));
`})}),`
`,e.jsxs(t.p,{children:["Then follow the usage instructions for ",e.jsx(t.a,{href:"https://mui.com/getting-started/usage/",rel:"nofollow",children:"MUI"}),`. You may also want to see
documentation for `,e.jsx(t.a,{href:"https://mui.com/guides/server-rendering/",rel:"nofollow",children:"server rendering"}),"."]}),`
`,e.jsx(t.h2,{id:"typescript",children:"Typescript"}),`
`,e.jsx(t.p,{children:"There are three ways to load the types overrides for MUI."}),`
`,e.jsxs(t.p,{children:["The easiest one, if your ",e.jsx(t.code,{children:"tsconfig.json"})," already has a ",e.jsx(t.code,{children:'"types"'})," array in the ",e.jsx(t.code,{children:'"compilerOptions"'}),` section, is to add
`,e.jsx(t.code,{children:'"@esfront/react/lib/overrides"'})," to the ",e.jsx(t.code,{children:'"types"'})," array."]}),`
`,e.jsxs(t.p,{children:[`Alternatively, a specific import syntax can to be used from a typescript file. This module does not exist in reality,
which is why the `,e.jsx(t.code,{children:"{}"})," is important:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import {} from '@esfront/react/lib/overrides';
`})}),`
`,e.jsx(t.p,{children:"It is also possible to include it through a triple-slash reference:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`/// <reference types="@esfront/react/lib/overrides" />
`})}),`
`,e.jsx(t.p,{children:"Either the import or the reference only needs to appear once, anywhere in the project."})]})}function f(r={}){const{wrapper:t}={...o(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{f as default};
