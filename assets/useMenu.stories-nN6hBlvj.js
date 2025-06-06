import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as a}from"./useMenu-DFWmEK8e.js";import{B as u}from"./Button-Kloa1MkC.js";import{M as c}from"./Menu-BU22523T.js";import{M as e}from"./MenuItem-OzUXNg8S.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-B-dksMZM.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./appendOwnerState-B9NMWNaQ.js";import"./useForkRef-B4JCUkpP.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";const Z={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[t,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:t,open:!!t,onClose:s,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var n,m,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const $=["Demo"];export{r as Demo,$ as __namedExportsOrder,Z as default};
