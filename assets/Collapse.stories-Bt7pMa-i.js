import{r as y,j as e}from"./iframe-Bc8-Q25v.js";import{C as p}from"./Collapse-CP7fT-uY.js";import{B as b}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./utils-xjkStw31.js";import"./useDefaultProps-lGeK2dpt.js";import"./useTimeout-DowuL8C4.js";import"./useForkRef-rVwNGtGZ.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./ButtonBase-BBaKRXh4.js";const C=r=>r.globals.locale==="en"?"Toggle":"Переключить",E={tags:["autodocs"],component:p,parameters:{references:["Collapse"]},argTypes:{children:{table:{disable:!0}},in:{table:{disable:!0}},orientation:{options:["vertical","horizontal"],control:{type:"select"}}},args:{orientation:"vertical"}},o={render:function(i,s){const[a,l]=y.useState(!0),n=()=>{l(c=>!c)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{color:"primary",variant:"contained",onClick:n,children:C(s)}),e.jsx(p,{...i,in:a,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"240px"}})})]})}},t={args:{collapsedSize:40},render:function(i,s){const[a,l]=y.useState(!1),n=()=>{l(c=>!c)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{color:"primary",variant:"contained",onClick:n,children:C(s)}),e.jsx(p,{...i,in:a,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"240px"}})})]})}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,x,v,h,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"The container keeps the `collapsedSize` visible when the transition is out.",...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const _=["Demo","CollapsedSize"];export{t as CollapsedSize,o as Demo,_ as __namedExportsOrder,E as default};
