import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as r}from"./index-D-lIKX7U.js";import{M as i}from"./index-ByOq6pjr.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BhMO_e0U.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";function n(o){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Localization",parameters:{viewMode:"docs"}}),`
`,e.jsx(t.h1,{id:"localization",children:"Localization"}),`
`,e.jsx(t.p,{children:"The default locale is English. If you want to use other locales, use the theme to configure the locale text globally:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useMemo } from 'react';

import { ThemeProvider, FormatSize, ru } from '@esfront/react';
import { ruRU } from '@mui/material/locale';

const Application = () => {
  const theme = createTheme({}, { ...ruRU, ru });

  return (
    <ThemeProvider theme={theme}>
      <FormatSize>1024</FormatSize>
    </ThemeProvider>
  );
};
`})}),`
`,e.jsxs(t.p,{children:["You can ",e.jsx(t.a,{href:"https://github.com/Elonsoft/esfront/blob/master/packages/react/src/components/locale/index.ts",rel:"nofollow",children:"find the source"}),`
in the GitHub repository.`]}),`
`,e.jsx(t.p,{children:`To create your own translation, or to customize the English text, copy this file to your project, make any changes
needed and import the locale from there.`})]})}function j(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{j as default};
