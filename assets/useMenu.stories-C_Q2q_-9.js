import{j as o}from"./iframe-WZaTcFld.js";import{u as a}from"./useMenu-Cb7hnuY3.js";import{B as u}from"./Button-DX7vCFDA.js";import{M as c}from"./Menu-2XP5SIII.js";import{a as n}from"./MenuItem-D8cap5ou.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./Popover-C3kEi3Bv.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-PLZAS_3a.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./Portal-BYj3FDWN.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-1Ul32FaH.js";import"./Grow-D1yaFj-8.js";import"./useTimeout-BCL6eOzm.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Q={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[e,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:e,open:!!e,onClose:s,children:[o.jsx(n,{children:"Item 1"}),o.jsx(n,{children:"Item 2"})]})]})}};var t,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
