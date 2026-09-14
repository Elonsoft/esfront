import{j as o}from"./iframe-Bc8-Q25v.js";import{u as a}from"./useMenu-Da5t8w3Q.js";import{B as u}from"./Button-BCRxDX6B.js";import{M as c}from"./Menu-CriPHtCP.js";import{a as n}from"./MenuItem-8wSZO-ML.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";import"./Popover-CjDfwJ6v.js";import"./debounce-mYveAr4B.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-Cqh-UVFo.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-CCPOMy0K.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-BIFNHrHU.js";import"./Fade-Cz0N_mL7.js";import"./utils-xjkStw31.js";import"./createTransition-BIZAeqwx.js";import"./Portal-BW-pjcFK.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./FocusTrap-cBv2YN9d.js";import"./Grow-s7Bol92u.js";import"./useTimeout-DowuL8C4.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const N={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[e,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:e,open:!!e,onClose:s,children:[o.jsx(n,{children:"Item 1"}),o.jsx(n,{children:"Item 2"})]})]})}};var t,m,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const P=["Demo"];export{r as Demo,P as __namedExportsOrder,N as default};
