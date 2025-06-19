import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{u as M}from"./useMenu-DFWmEK8e.js";import{B as E}from"./Button-Bw7cy9Im.js";import{M as x}from"./Menu-DtX3jm--.js";import{M as m}from"./MenuItem-D4peanbb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./memoTheme-CJcpijc4.js";import"./index-CycuZXML.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-D4EsW5Cf.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";const b=()=>{const[s,t]=n.useState(!1),e=n.useCallback(()=>{t(!0)},[]),i=n.useCallback(()=>{t(!1)},[]);return[s,e,i]},ao={tags:["autodocs"],title:"Hooks/useMenuVisibility",parameters:{references:["useMenu","useMenuVisibility"]}},r={render:function(){const[t,e,i]=M(),[c,l,d]=b();return o.jsxs(o.Fragment,{children:[o.jsxs(E,{color:"primary",variant:"contained",onClick:e,children:["Menu ",!c&&"not"," visible"]}),o.jsxs(x,{TransitionProps:{onEnter:l,onExited:d},anchorEl:t,open:!!t,onClose:i,children:[o.jsx(m,{children:"Item 1"}),o.jsx(m,{children:"Item 2"})]})]})}};var p,a,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const uo=["Demo"];export{r as Demo,uo as __namedExportsOrder,ao as default};
