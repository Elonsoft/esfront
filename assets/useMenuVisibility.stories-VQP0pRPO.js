import{j as o}from"./iframe-WZaTcFld.js";import{u as l}from"./useMenuVisibility-4kv-JG0C.js";import{u as d}from"./useMenu-Cb7hnuY3.js";import{B as M}from"./Button-DX7vCFDA.js";import{M as E}from"./Menu-2XP5SIII.js";import{a as t}from"./MenuItem-D8cap5ou.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./Popover-C3kEi3Bv.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-PLZAS_3a.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./Portal-BYj3FDWN.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-1Ul32FaH.js";import"./Grow-D1yaFj-8.js";import"./useTimeout-BCL6eOzm.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const X={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[r,m,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:m,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:r,open:!!r,onClose:p,children:[o.jsx(t,{children:"Item 1"}),o.jsx(t,{children:"Item 2"})]})]})}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
