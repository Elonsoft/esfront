import{j as o}from"./iframe-D3HjMCd-.js";import{u as l}from"./useMenuVisibility-zMR3nkPd.js";import{u as d}from"./useMenu-awyjCUXp.js";import{B as M}from"./Button-D_kL-LjM.js";import{M as E}from"./Menu-DmjFOseh.js";import{a as t}from"./MenuItem-B3CXYI4l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-21R-WjRB.js";import"./ButtonBase-ZB4rAPke.js";import"./useForkRef-GwhPXW4N.js";import"./Popover-Dz797W0x.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-CVnyES7t.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-BEzyp1Bz.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-7AV8cpXU.js";import"./Fade-0_oz4Mfm.js";import"./utils-DukZKYgr.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-BOjDIFAa.js";import"./Portal-0j9kOChL.js";import"./useEnhancedEffect-CLniivOv.js";import"./setRef-B4em79P6.js";import"./FocusTrap-DpkLcZxt.js";import"./Grow-BZJ-EgiL.js";import"./useTimeout-C5VTQpkg.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const X={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[r,m,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:m,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:r,open:!!r,onClose:p,children:[o.jsx(t,{children:"Item 1"}),o.jsx(t,{children:"Item 2"})]})]})}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
