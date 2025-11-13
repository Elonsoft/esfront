import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as c}from"./useBoolean-Fgx-l6SR.js";import{B as l}from"./Box-wRm4ebgR.js";import{B as e}from"./Button-CjV5PmVb.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";const h={tags:["autodocs"],title:"Hooks/useBoolean",parameters:{references:["useBoolean"]}},r={render:function(){const[s,t]=c(!0);return o.jsxs(l,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[o.jsx("div",{children:s?"ON":"OFF"}),o.jsx(e,{color:"primary",variant:"contained",onClick:t,children:"Toggle"}),o.jsx(e,{color:"primary",variant:"contained",onClick:()=>t(!0),children:"set ON"}),o.jsx(e,{color:"primary",variant:"contained",onClick:()=>t(!1),children:"set OFF"})]})}};var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Demo"];export{r as Demo,N as __namedExportsOrder,h as default};
