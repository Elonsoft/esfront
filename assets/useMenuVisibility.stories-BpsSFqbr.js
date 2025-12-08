import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as l}from"./useMenuVisibility-BkWp49N0.js";import{u as d}from"./useMenu-DFWmEK8e.js";import{B as M}from"./Button-DhPfczDk.js";import{M as E}from"./Menu-CgxVvckE.js";import{M as e}from"./MenuItem-CqODWihV.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./styled-CkBBDypc.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";import"./memoTheme-DCKoxpDd.js";import"./index-CycuZXML.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-B7wNoq1D.js";import"./useTheme-Bas6BIKa.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";const po={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},r={render:function(){const[t,s,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:s,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:t,open:!!t,onClose:p,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const ao=["Demo"];export{r as Demo,ao as __namedExportsOrder,po as default};
