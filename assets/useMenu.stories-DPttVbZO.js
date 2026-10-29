import{j as o}from"./iframe-CewJnQGO.js";import{u as a}from"./useMenu-CPaFAxJH.js";import{B as u}from"./Button-CARyXaDc.js";import{M as c}from"./Menu-Ds9zupjl.js";import{a as n}from"./MenuItem-BXacV2h_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BQG9LCtD.js";import"./ButtonBase-tfkuyuZ2.js";import"./useForkRef-PUt3GJOR.js";import"./Popover-B3LT_wYv.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-CkVaNQ1D.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-HnIqz_5H.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-D3Gz-v9A.js";import"./Fade-SMRngdmN.js";import"./utils-D-vYaPrS.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-CuLWYDp3.js";import"./Portal-Cu-Unasq.js";import"./useEnhancedEffect-C21djuXa.js";import"./setRef-B4em79P6.js";import"./FocusTrap-CzrwTWpZ.js";import"./Grow-RORD-UBe.js";import"./useTimeout-DghG-qhN.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Q={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[e,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:e,open:!!e,onClose:s,children:[o.jsx(n,{children:"Item 1"}),o.jsx(n,{children:"Item 2"})]})]})}};var t,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
