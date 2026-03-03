import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-Wm5baAvf.js";import{P as m,a as h,b as x}from"./PaginationRange-CbwlxXYF.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./IconChevronLeftLineW400-BnYMLcPa.js";import"./SvgIcon-Bb8ef9Tm.js";import"./IconChevronRightLineW400-_L_kWYUC.js";import"./IconDotsHorizontalLineW100-C4fFGOjv.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./useLatest-C1UtP6al.js";import"./useControlled-CibYmksV.js";import"./Button-BRu9apcn.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./Tooltip-Bp1S5HE5.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./TextField-BE5m1Jj6.js";import"./clsx-B-dksMZM.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-pQd8fEAo.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./Popover-D33wSAFU.js";import"./MenuList-CymzI1Pn.js";import"./IconMenuDownFillW300-BYpUa_Jj.js";import"./MenuItem-DrDY2G9B.js";const Et={tags:["autodocs"],component:m,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},t={render:function({count:p}){const[s,g]=o.useState(1),[P,c]=o.useState(10),u=e=>{c(e)},d=e=>{g(e)};return r.jsxs(m,{count:p,itemsPerPage:P,page:s,onItemsPerPageChange:u,onPageChange:d,children:[r.jsx(h,{}),r.jsx(x,{})]})}};var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render({
    count
  }) {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const onItemsPerPageChange = (event: number) => {
      setItemsPerPage(event);
    };
    const onPageChange = (page: number) => {
      setPage(page);
    };
    return <Pagination count={count} itemsPerPage={itemsPerPage} page={page} onItemsPerPageChange={onItemsPerPageChange} onPageChange={onPageChange}>
        <PaginationRange />
        <PaginationPages />
      </Pagination>;
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const vt=["Demo"];export{t as Demo,vt as __namedExportsOrder,Et as default};
