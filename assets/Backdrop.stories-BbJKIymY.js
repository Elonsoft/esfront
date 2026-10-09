import{r as u,j as t}from"./iframe-WZaTcFld.js";import{B as p}from"./Backdrop-CeeqQCtd.js";import{B as x}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./ButtonBase-A8DfStIe.js";const f=o=>o.globals.locale==="en"?"Show":"Показать",I={tags:["autodocs"],component:p,parameters:{references:["Backdrop"]},argTypes:{children:{table:{disable:!0}},open:{table:{disable:!0}}}},e={render:function(i,l){const[c,r]=u.useState(!1),m=()=>{r(!0)},d=()=>{r(!1)};return t.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(x,{color:"primary",variant:"contained",onClick:m,children:f(l)}),t.jsx(p,{...i,open:c,style:{zIndex:1300},onClick:d})]})}};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const S=["Demo"];export{e as Demo,S as __namedExportsOrder,I as default};
