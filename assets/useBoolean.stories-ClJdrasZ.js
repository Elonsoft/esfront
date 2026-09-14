import{j as o}from"./iframe-Bc8-Q25v.js";import{u as l}from"./useBoolean-C9CO5cqx.js";import{B as t}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";const f={tags:["autodocs"],title:"Hooks/useBoolean",parameters:{references:["useBoolean"]}},e={render:function(){const[s,r]=l(!0);return o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[o.jsx("div",{children:s?"ON":"OFF"}),o.jsx(t,{color:"primary",variant:"contained",onClick:r,children:"Toggle"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>r(!0),children:"set ON"}),o.jsx(t,{color:"primary",variant:"contained",onClick:()=>r(!1),children:"set OFF"})]})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Demo"];export{e as Demo,y as __namedExportsOrder,f as default};
