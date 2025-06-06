import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{u as M}from"./useMenu-DFWmEK8e.js";import{B as E}from"./Button-Kloa1MkC.js";import{M as x}from"./Menu-BU22523T.js";import{M as m}from"./MenuItem-OzUXNg8S.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-B-dksMZM.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./appendOwnerState-B9NMWNaQ.js";import"./useForkRef-B4JCUkpP.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";const b=()=>{const[s,t]=n.useState(!1),r=n.useCallback(()=>{t(!0)},[]),i=n.useCallback(()=>{t(!1)},[]);return[s,r,i]},ro={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},e={render:function(){const[t,r,i]=M(),[c,l,d]=b();return o.jsxs(o.Fragment,{children:[o.jsxs(E,{color:"primary",variant:"contained",onClick:r,children:["Menu ",!c&&"not"," visible"]}),o.jsxs(x,{TransitionProps:{onEnter:l,onExited:d},anchorEl:t,open:!!t,onClose:i,children:[o.jsx(m,{children:"Item 1"}),o.jsx(m,{children:"Item 2"})]})]})}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const io=["Demo"];export{e as Demo,io as __namedExportsOrder,ro as default};
