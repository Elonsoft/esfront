import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as c}from"./useBoolean-Fgx-l6SR.js";import{B as l}from"./Box-CBu-ct3E.js";import{B as e}from"./Button-DhPfczDk.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";const N={tags:["autodocs"],title:"Hooks/useBoolean",parameters:{references:["useBoolean"]}},r={render:function(){const[s,t]=c(!0);return o.jsxs(l,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[o.jsx("div",{children:s?"ON":"OFF"}),o.jsx(e,{color:"primary",variant:"contained",onClick:t,children:"Toggle"}),o.jsx(e,{color:"primary",variant:"contained",onClick:()=>t(!0),children:"set ON"}),o.jsx(e,{color:"primary",variant:"contained",onClick:()=>t(!1),children:"set OFF"})]})}};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Demo"];export{r as Demo,R as __namedExportsOrder,N as default};
