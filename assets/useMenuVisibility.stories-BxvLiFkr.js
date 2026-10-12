import{j as o}from"./iframe-BYc7QBr5.js";import{u as l}from"./useMenuVisibility-CMeoLn56.js";import{u as d}from"./useMenu-DDWmz-oC.js";import{B as M}from"./Button-CBEaRZ-l.js";import{M as E}from"./Menu-Bu6QXZ_7.js";import{a as t}from"./MenuItem-C8E2ODvI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-DBegVBAf.js";import"./ButtonBase-CQOMMh1y.js";import"./useForkRef-DB7gLYYj.js";import"./Popover-Dp20RxNY.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-uL1Ezqmr.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-sFMfcM9R.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-Cffo5YeF.js";import"./Fade-DZUkkklo.js";import"./utils-CaOz1aTQ.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-ksOFfcKC.js";import"./Portal-BchVpaqy.js";import"./useEnhancedEffect-CKw70sL4.js";import"./setRef-B4em79P6.js";import"./FocusTrap-BKsgFiPt.js";import"./Grow-73dxiOct.js";import"./useTimeout-DvcTotH6.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const X={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[r,m,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:m,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:r,open:!!r,onClose:p,children:[o.jsx(t,{children:"Item 1"}),o.jsx(t,{children:"Item 2"})]})]})}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
