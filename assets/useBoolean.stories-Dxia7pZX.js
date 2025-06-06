import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as c}from"./useBoolean-Fgx-l6SR.js";import{B as l}from"./Box-BsYG6vwI.js";import{B as t}from"./Button-Kloa1MkC.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";const C={tags:["autodocs"],title:"Hooks/useBoolean",parameters:{references:["useBoolean"]}},r={render:function(){const[s,e]=c(!0);return o.jsxs(l,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[o.jsx("div",{children:s?"ON":"OFF"}),o.jsx(t,{color:"primary",variant:"contained",onClick:e,children:"Toggle"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>e(!0),children:"set ON"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>e(!1),children:"set OFF"})]})}};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [on, toggle] = useBoolean(true);
    return <Box sx={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <div>{on ? 'ON' : 'OFF'}</div>
        <Button color="primary" variant="contained" onClick={toggle}>
          Toggle
        </Button>
        <Button color="primary" variant="contained" onClick={() => toggle(true)}>
          set ON
        </Button>
        <Button color="primary" variant="contained" onClick={() => toggle(false)}>
          set OFF
        </Button>
      </Box>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const h=["Demo"];export{r as Demo,h as __namedExportsOrder,C as default};
