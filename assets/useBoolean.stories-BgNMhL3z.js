import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{u as l}from"./useBoolean-CESKsCOg.js";import{B as t}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const O={tags:["autodocs"],title:"Hooks/useBoolean",parameters:{references:["useBoolean"]}},e={render:function(){const[s,r]=l(!0);return o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[o.jsx("div",{children:s?"ON":"OFF"}),o.jsx(t,{color:"primary",variant:"contained",onClick:r,children:"Toggle"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>r(!0),children:"set ON"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>r(!1),children:"set OFF"})]})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [on, toggle] = useBoolean(true);
    return <div style={{
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
      </div>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const F=["Demo"];export{e as Demo,F as __namedExportsOrder,O as default};
