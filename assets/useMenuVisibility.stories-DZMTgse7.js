import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{u as l}from"./useMenuVisibility-DjfIwYPD.js";import{u as d}from"./useMenu-CAmp7O7d.js";import{B as M}from"./Button-BRu9apcn.js";import{M as E}from"./Menu-D1WsZbsN.js";import{M as e}from"./MenuItem-DrDY2G9B.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./clsx-B-dksMZM.js";import"./index-CkcRf-8q.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";const mo={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},r={render:function(){const[t,s,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:s,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:t,open:!!t,onClose:p,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const so=["Demo"];export{r as Demo,so as __namedExportsOrder,mo as default};
