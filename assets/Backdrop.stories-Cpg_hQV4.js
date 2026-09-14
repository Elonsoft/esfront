import{r as u,j as t}from"./iframe-Bc8-Q25v.js";import{B as p}from"./Backdrop-BIFNHrHU.js";import{B as x}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./Fade-Cz0N_mL7.js";import"./utils-xjkStw31.js";import"./useForkRef-rVwNGtGZ.js";import"./createTransition-BIZAeqwx.js";import"./ButtonBase-BBaKRXh4.js";const f=o=>o.globals.locale==="en"?"Show":"Показать",D={tags:["autodocs"],component:p,parameters:{references:["Backdrop"]},argTypes:{children:{table:{disable:!0}},open:{table:{disable:!0}}}},e={render:function(i,l){const[c,n]=u.useState(!1),m=()=>{n(!0)},d=()=>{n(!1)};return t.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(x,{color:"primary",variant:"contained",onClick:m,children:f(l)}),t.jsx(p,{...i,open:c,style:{zIndex:1300},onClick:d})]})}};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return <div style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button color="primary" variant="contained" onClick={onOpen}>
          {getToggleButtonText(context)}
        </Button>
        <Backdrop {...args} open={isOpen} style={{
        zIndex: 1300
      }} onClick={onClose} />
      </div>;
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const I=["Demo"];export{e as Demo,I as __namedExportsOrder,D as default};
