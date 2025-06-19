import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{u as a}from"./useMenu-DFWmEK8e.js";import{B as u}from"./Button-Bw7cy9Im.js";import{M as c}from"./Menu-DtX3jm--.js";import{M as e}from"./MenuItem-D4peanbb.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./memoTheme-CJcpijc4.js";import"./index-CycuZXML.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./isHostComponent-DVu5iVWx.js";import"./useTheme-D4EsW5Cf.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";const no={tags:["autodocs"],title:"Hooks/useMenu",parameters:{references:["useMenu"]}},r={render:function(){const[t,p,s]=a();return o.jsxs(o.Fragment,{children:[o.jsx(u,{color:"primary",variant:"contained",onClick:p,children:"Menu"}),o.jsxs(c,{anchorEl:t,open:!!t,onClose:s,children:[o.jsx(e,{children:"Item 1"}),o.jsx(e,{children:"Item 2"})]})]})}};var n,m,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const mo=["Demo"];export{r as Demo,mo as __namedExportsOrder,no as default};
