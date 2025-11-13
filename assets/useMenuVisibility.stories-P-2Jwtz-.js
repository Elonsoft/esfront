import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as l}from"./useMenuVisibility-BkWp49N0.js";import{u as d}from"./useMenu-DFWmEK8e.js";import{B as M}from"./Button-CjV5PmVb.js";import{M as E}from"./Menu-_nfAmUNL.js";import{M as e}from"./MenuItem-CTB1bkQ4.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-QckRPC_l.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./memoTheme-DzcScnLI.js";import"./index-CycuZXML.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-ErypeN0Y.js";import"./useTheme-Dg4q0o-B.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";const po={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},r={render:function(){const[t,s,p]=d(),[a,u,c]=l();return o.jsxs(o.Fragment,{children:[o.jsxs(M,{color:"primary",variant:"contained",onClick:s,children:["Menu ",!a&&"not"," visible"]}),o.jsxs(E,{TransitionProps:{onEnter:u,onExited:c},anchorEl:t,open:!!t,onClose:p,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
