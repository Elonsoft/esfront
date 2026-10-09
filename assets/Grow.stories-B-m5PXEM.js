import{r as g,j as e}from"./iframe-WZaTcFld.js";import{G as n}from"./Grow-D1yaFj-8.js";import{B as u}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B5irXgth.js";import"./useDefaultProps-BZnal23W.js";import"./useTimeout-BCL6eOzm.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./useEvent-PLZAS_3a.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./createTransition-B0gmdMvU.js";import"./clsx.m-CH7BE6MN.js";import"./ButtonBase-A8DfStIe.js";const x=r=>r.globals.locale==="en"?"Toggle":"Переключить",E={tags:["autodocs"],component:n,parameters:{references:["Grow"]},argTypes:{children:{table:{disable:!0}},in:{table:{disable:!0}}}},t={render:function(a,l){const[c,p]=g.useState(!0),m=()=>{p(d=>!d)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{color:"primary",variant:"contained",onClick:m,children:x(l)}),e.jsx(n,{...a,in:c,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"120px"}})})]})}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(true);
    const onToggle = () => {
      setVisible(value => !value);
    };
    return <div style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          {getToggleButtonText(context)}
        </Button>
        <Grow {...args} in={isVisible}>
          <div style={{
          backgroundColor: 'var(--es-primary-500)',
          height: '120px',
          width: '120px'
        }} />
        </Grow>
      </div>;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,E as default};
