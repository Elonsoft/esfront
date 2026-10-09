import{r as y,j as e}from"./iframe-WZaTcFld.js";import{C as p}from"./Collapse-C819yTYG.js";import{B as b}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./utils-B5irXgth.js";import"./useDefaultProps-BZnal23W.js";import"./useTimeout-BCL6eOzm.js";import"./useForkRef-B9g_LZ2g.js";import"./useEvent-PLZAS_3a.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./ButtonBase-A8DfStIe.js";const C=r=>r.globals.locale==="en"?"Toggle":"Переключить",_={tags:["autodocs"],component:p,parameters:{references:["Collapse"]},argTypes:{children:{table:{disable:!0}},in:{table:{disable:!0}},orientation:{options:["vertical","horizontal"],control:{type:"select"}}},args:{orientation:"vertical"}},o={render:function(i,s){const[a,l]=y.useState(!0),n=()=>{l(c=>!c)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{color:"primary",variant:"contained",onClick:n,children:C(s)}),e.jsx(p,{...i,in:a,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"240px"}})})]})}},t={args:{collapsedSize:40},render:function(i,s){const[a,l]=y.useState(!1),n=()=>{l(c=>!c)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{color:"primary",variant:"contained",onClick:n,children:C(s)}),e.jsx(p,{...i,in:a,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"240px"}})})]})}};var d,g,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Collapse {...args} in={isVisible}>
          <div style={{
          backgroundColor: 'var(--es-primary-500)',
          height: '120px',
          width: '240px'
        }} />
        </Collapse>
      </div>;
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,x,v,h,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    collapsedSize: 40
  },
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(false);
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
        <Collapse {...args} in={isVisible}>
          <div style={{
          backgroundColor: 'var(--es-primary-500)',
          height: '120px',
          width: '240px'
        }} />
        </Collapse>
      </div>;
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"The container keeps the `collapsedSize` visible when the transition is out.",...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const O=["Demo","CollapsedSize"];export{t as CollapsedSize,o as Demo,O as __namedExportsOrder,_ as default};
