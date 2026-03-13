import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as s}from"./index-D-lIKX7U.js";import{M as o}from"./index-ByOq6pjr.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BhMO_e0U.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started/Usage",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page."}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '@esfront/theme/settings';

@use '@esfront/theme/components';
@use '@esfront/theme/utilities';

@use '@esfront/theme/presets/colors' as colorsPresets;
@use '@esfront/theme/presets/shadows' as shadowsPresets;

@include settings.include;

@include components.include;
@include utilities.include;

html {
  @include colorsPresets.common;

  @include colorsPresets.light;
  @include shadowsPresets.light;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {} from '@esfront/react/lib/overrides';

import ReactDOM from 'react-dom';

import { ThemeProvider, EmptyState } from '@esfront/react';
import Button from '@mui/material/Button';

import './theme.scss';

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
`,e.jsxs(n.p,{children:["Then follow the usage instructions for ",e.jsx(n.a,{href:"https://mui.com/getting-started/usage/",rel:"nofollow",children:"MUI"}),`. You may also want to see
documentation for `,e.jsx(n.a,{href:"https://mui.com/guides/server-rendering/",rel:"nofollow",children:"server rendering"}),"."]}),`
`,e.jsx(n.h2,{id:"typescript",children:"Typescript"}),`
`,e.jsx(n.p,{children:"There are three ways to load the types overrides for MUI."}),`
`,e.jsxs(n.p,{children:["The easiest one, if your ",e.jsx(n.code,{children:"tsconfig.json"})," already has a ",e.jsx(n.code,{children:'"types"'})," array in the ",e.jsx(n.code,{children:'"compilerOptions"'}),` section, is to add
`,e.jsx(n.code,{children:'"@esfront/react/lib/overrides"'})," to the ",e.jsx(n.code,{children:'"types"'})," array."]}),`
`,e.jsxs(n.p,{children:[`Alternatively, a specific import syntax can to be used from a typescript file. This module does not exist in reality,
which is why the `,e.jsx(n.code,{children:"{}"})," is important:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {} from '@esfront/react/lib/overrides';
`})}),`
`,e.jsx(n.p,{children:"It is also possible to include it through a triple-slash reference:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`/// <reference types="@esfront/react/lib/overrides" />
`})}),`
`,e.jsx(n.p,{children:"Either the import or the reference only needs to appear once, anywhere in the project."})]})}function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{j as default};
