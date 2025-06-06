import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{useMDXComponents as a}from"./index-EQ2lhxnn.js";import{M as s,S as r}from"./index-DJc1-Z6-.js";import{T as p,P as i,a as m}from"./theming.stories-qrzhQz_c.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-DO54u3bl.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";import"./useTheme-LlnDz48U.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./Typography-BriYb5H6.js";import"./clsx-B-dksMZM.js";import"./TableRow-Czbfdrt6.js";function o(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(t.h2,{id:"palette",children:"Palette"}),`
`,e.jsxs(t.p,{children:["Our design system build upon MUI palette and introduces new colors and hues. Palette can be customized via ",e.jsx(t.code,{children:"theme"}),` prop
in `,e.jsx(t.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { createTheme, palettes } from '@esfront/react';

const theme = createTheme({
  paletteDark: {
    ...palettes.common,
    ...palettes.dark,
  },
  paletteLight: {
    ...palettes.common,
    ...palettes.light,
  },
});

<ThemeProvider theme={theme}>...</ThemeProvider>;
`})}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.h2,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.p,{children:[`Typography is based on the guidelines from the Material Design spec and is arranged into typography levels. Each level
has a font-size, line-height, font-weight and letter-spacing. Typography can be customized via `,e.jsx(t.code,{children:"typography"}),` key in
`,e.jsx(t.code,{children:"createTheme"})," options."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Default typography
import { createTypography } from '@esfront/react';

const theme = createTheme({
  paletteDark: {
    ...palettes.common,
    ...palettes.dark,
  },
  paletteLight: {
    ...palettes.common,
    ...palettes.light,
  },
  typography: createTypography,
});

<ThemeProvider theme={theme}>...</ThemeProvider>;
`})}),`
`,e.jsx(r,{of:m})]})}function w(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{w as default};
