import{r as v,j as t}from"./iframe-DIMiXZkL.js";import{P as m}from"./Popover-G-zlK6Le.js";import{B as x}from"./Button-Ccz4Bnbg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./debounce-mYveAr4B.js";import"./useDefaultProps-CQ2vN7PH.js";import"./useForkRef-AZ5KJT18.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-Rkq7Dudf.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-Czny6oHG.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-B8JLWY41.js";import"./Fade-CsnZi5m8.js";import"./utils-B5vS3m3C.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-1CZU_5uS.js";import"./Portal-BO9UDDXf.js";import"./useEnhancedEffect-DDywECfU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-ByvrgsB6.js";import"./Grow-D3CZ4A3_.js";import"./useTimeout-GUoFRKQj.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./ButtonBase-GQvGf2x8.js";const p=(n,e,o)=>n.globals.locale==="en"?e:o,N={tags:["autodocs"],component:m,parameters:{references:["Popover"]},argTypes:{children:{table:{disable:!0}},open:{table:{disable:!0}}}},r={render:function(e,o){const[i,a]=v.useState(null),d=h=>{a(h.currentTarget)},u=()=>{a(null)};return t.jsxs("div",{children:[t.jsx(x,{color:"primary",variant:"contained",onClick:d,children:p(o,"Open","Открыть")}),t.jsx(m,{anchorOrigin:{vertical:"bottom",horizontal:"left"},...e,anchorEl:i,open:!!i,onClose:u,children:t.jsx("div",{style:{color:"var(--es-mono-a-a900)",maxWidth:"240px",padding:"16px"},children:p(o,"The content of the popover.","Содержимое всплывающего окна.")})})]})}};var c,s,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const onClose = () => {
      setAnchorEl(null);
    };
    return <div>
        <Button color="primary" variant="contained" onClick={onClick}>
          {getText(context, 'Open', 'Открыть')}
        </Button>
        <Popover anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} {...args} anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <div style={{
          color: 'var(--es-mono-a-a900)',
          maxWidth: '240px',
          padding: '16px'
        }}>
            {getText(context, 'The content of the popover.', 'Содержимое всплывающего окна.')}
          </div>
        </Popover>
      </div>;
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Q=["Demo"];export{r as Demo,Q as __namedExportsOrder,N as default};
