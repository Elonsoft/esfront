import{j as o}from"./iframe-D3HjMCd-.js";import{u as a}from"./useMenu-awyjCUXp.js";import{B as u}from"./Button-D_kL-LjM.js";import{M as c}from"./Menu-DmjFOseh.js";import{a as n}from"./MenuItem-B3CXYI4l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-21R-WjRB.js";import"./ButtonBase-ZB4rAPke.js";import"./useForkRef-GwhPXW4N.js";import"./Popover-Dz797W0x.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-CVnyES7t.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-BEzyp1Bz.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-7AV8cpXU.js";import"./Fade-0_oz4Mfm.js";import"./utils-DukZKYgr.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-BOjDIFAa.js";import"./Portal-0j9kOChL.js";import"./useEnhancedEffect-CLniivOv.js";import"./setRef-B4em79P6.js";import"./FocusTrap-DpkLcZxt.js";import"./Grow-BZJ-EgiL.js";import"./useTimeout-C5VTQpkg.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Q={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[e,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:e,open:!!e,onClose:s,children:[o.jsx(n,{children:"Item 1"}),o.jsx(n,{children:"Item 2"})]})]})}};var t,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
