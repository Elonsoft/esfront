import{j as o}from"./iframe-CewJnQGO.js";import{u as l}from"./useMenuVisibility-CptmpzPL.js";import{u as d}from"./useMenu-CPaFAxJH.js";import{B as M}from"./Button-CARyXaDc.js";import{M as E}from"./Menu-Ds9zupjl.js";import{a as t}from"./MenuItem-BXacV2h_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BQG9LCtD.js";import"./ButtonBase-tfkuyuZ2.js";import"./useForkRef-PUt3GJOR.js";import"./Popover-B3LT_wYv.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-CkVaNQ1D.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-HnIqz_5H.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-D3Gz-v9A.js";import"./Fade-SMRngdmN.js";import"./utils-D-vYaPrS.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-CuLWYDp3.js";import"./Portal-Cu-Unasq.js";import"./useEnhancedEffect-C21djuXa.js";import"./setRef-B4em79P6.js";import"./FocusTrap-CzrwTWpZ.js";import"./Grow-RORD-UBe.js";import"./useTimeout-DghG-qhN.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const X={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[r,m,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:m,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:r,open:!!r,onClose:p,children:[o.jsx(t,{children:"Item 1"}),o.jsx(t,{children:"Item 2"})]})]})}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
