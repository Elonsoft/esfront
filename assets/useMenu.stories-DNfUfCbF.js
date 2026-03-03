import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{u as a}from"./useMenu-CAmp7O7d.js";import{B as u}from"./Button-BRu9apcn.js";import{M as c}from"./Menu-D1WsZbsN.js";import{M as e}from"./MenuItem-DrDY2G9B.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./clsx-B-dksMZM.js";import"./index-CkcRf-8q.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";const ro={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[t,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:t,open:!!t,onClose:s,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var n,m,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const to=["Demo"];export{r as Demo,to as __namedExportsOrder,ro as default};
