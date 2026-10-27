import{j as o}from"./iframe-DIMiXZkL.js";import{u as a}from"./useMenu-DPmP6PMk.js";import{B as u}from"./Button-Ccz4Bnbg.js";import{M as c}from"./Menu-C6zM3OlK.js";import{a as n}from"./MenuItem-CXgkQCJq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-CQ2vN7PH.js";import"./ButtonBase-GQvGf2x8.js";import"./useForkRef-AZ5KJT18.js";import"./Popover-G-zlK6Le.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-Rkq7Dudf.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-Czny6oHG.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-B8JLWY41.js";import"./Fade-CsnZi5m8.js";import"./utils-B5vS3m3C.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-1CZU_5uS.js";import"./Portal-BO9UDDXf.js";import"./useEnhancedEffect-DDywECfU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-ByvrgsB6.js";import"./Grow-D3CZ4A3_.js";import"./useTimeout-GUoFRKQj.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Q={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[e,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:e,open:!!e,onClose:s,children:[o.jsx(n,{children:"Item 1"}),o.jsx(n,{children:"Item 2"})]})]})}};var t,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    const [anchorEl, onOpen, onClose] = useMenu();
    return <>
        <Button color="primary" variant="contained" onClick={onOpen}>
          Menu
        </Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>;
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const T=["Demo"];export{r as Demo,T as __namedExportsOrder,Q as default};
