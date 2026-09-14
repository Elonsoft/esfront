import{u as r,j as e,M as a}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";function t(n){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Localization",parameters:{viewMode:"docs"}}),`
`,e.jsx(o.h1,{id:"localization",children:"Localization"}),`
`,e.jsxs(o.p,{children:[`The default locale is English. If you want to use other locales, pass the locale components to the
`,e.jsx(o.code,{children:"DefaultPropsProvider"})," to configure the locale text globally:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { DefaultPropsProvider, FormatSize, ru } from '@esfront/react';

const Application = () => {
  return (
    <DefaultPropsProvider value={ru.components}>
      <FormatSize>1024</FormatSize>
    </DefaultPropsProvider>
  );
};
`})}),`
`,e.jsx(o.p,{children:"A locale is an ordinary provider value, so spread it before your own defaults if you have any:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<DefaultPropsProvider value={{ ...ru.components, ESDrawer: { defaultProps: { anchor: 'right' } } }}>
`})}),`
`,e.jsxs(o.p,{children:["You can ",e.jsx(o.a,{href:"https://github.com/Elonsoft/esfront/blob/master/packages/react/src/components/locale/index.ts",rel:"nofollow",children:"find the source"}),`
in the GitHub repository.`]}),`
`,e.jsx(o.p,{children:`To create your own translation, or to customize the English text, copy this file to your project, make any changes
needed and import the locale from there.`})]})}function i(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{i as default};
