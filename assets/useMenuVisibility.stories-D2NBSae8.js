import{j as o}from"./iframe-DIMiXZkL.js";import{u as l}from"./useMenuVisibility-hJaW6RDg.js";import{u as d}from"./useMenu-DPmP6PMk.js";import{B as M}from"./Button-Ccz4Bnbg.js";import{M as E}from"./Menu-C6zM3OlK.js";import{a as t}from"./MenuItem-CXgkQCJq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-CQ2vN7PH.js";import"./ButtonBase-GQvGf2x8.js";import"./useForkRef-AZ5KJT18.js";import"./Popover-G-zlK6Le.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-Rkq7Dudf.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-Czny6oHG.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-B8JLWY41.js";import"./Fade-CsnZi5m8.js";import"./utils-B5vS3m3C.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-1CZU_5uS.js";import"./Portal-BO9UDDXf.js";import"./useEnhancedEffect-DDywECfU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-ByvrgsB6.js";import"./Grow-D3CZ4A3_.js";import"./useTimeout-GUoFRKQj.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const X={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[r,m,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:m,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:r,open:!!r,onClose:p,children:[o.jsx(t,{children:"Item 1"}),o.jsx(t,{children:"Item 2"})]})]})}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [anchorEl, onOpen, onClose] = useMenu();
    const [visible, onEnter, onExited] = useMenuVisibility();
    return <>
        <Button color="primary" variant="contained" onClick={onOpen}>
          Menu {!visible && 'not'} visible
        </Button>
        <Menu TransitionProps={{
        onEnter,
        onExited
      }} anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>;
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const Y=["Demo"];export{e as Demo,Y as __namedExportsOrder,X as default};
