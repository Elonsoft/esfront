import{r as g,j as e}from"./iframe-Bc8-Q25v.js";import{F as a}from"./Fade-Cz0N_mL7.js";import{B as u}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-xjkStw31.js";import"./useDefaultProps-lGeK2dpt.js";import"./useForkRef-rVwNGtGZ.js";import"./createTransition-BIZAeqwx.js";import"./clsx.m-CH7BE6MN.js";import"./ButtonBase-BBaKRXh4.js";const x=r=>r.globals.locale==="en"?"Toggle":"Переключить",k={tags:["autodocs"],component:a,parameters:{references:["Fade"]},argTypes:{children:{table:{disable:!0}},in:{table:{disable:!0}}}},t={render:function(n,l){const[c,p]=g.useState(!0),d=()=>{p(m=>!m)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{color:"primary",variant:"contained",onClick:d,children:x(l)}),e.jsx(a,{...n,in:c,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"120px"}})})]})}};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        <Fade {...args} in={isVisible}>
          <div style={{
          backgroundColor: 'var(--es-primary-500)',
          height: '120px',
          width: '120px'
        }} />
        </Fade>
      </div>;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["Demo"];export{t as Demo,C as __namedExportsOrder,k as default};
