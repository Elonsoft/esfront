import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{P as m,a as h,b as x}from"./PaginationRange-Bq95Qh00.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./IconChevronLeftW400--GWbu4t6.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./IconChevronRightW400-6ML1RefC.js";import"./IconMenuDownW300-gCG_wLZa.js";import"./useDocumentEventListener-DcHHZa3z.js";import"./useLatest-sVqXUmVb.js";import"./useControlled-DdQm0pQX.js";import"./Button-Kloa1MkC.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./Tooltip-JjMSGEEd.js";import"./useTheme-LlnDz48U.js";import"./Fade-CJiQNbBq.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useForkRef-B4JCUkpP.js";import"./useTimeout-CS-EPZZq.js";import"./useControlled-ew9sXcp7.js";import"./useId-Dx6QqNEU.js";import"./useEvent-B4f6aq-e.js";import"./useIsFocusVisible-moa6TI2l.js";import"./appendOwnerState-B9NMWNaQ.js";import"./Popper-BXVPFJIb.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DAw-RMf5.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-Dpc6KwLu.js";import"./TextField-BNsw1mhy.js";import"./clsx-B-dksMZM.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-D5YxnQCr.js";import"./MenuList-Ccyljjh3.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./Typography-BriYb5H6.js";import"./MenuItem-OzUXNg8S.js";const vt={tags:["autodocs"],component:m,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},t={render:function({count:p}){const[s,g]=o.useState(1),[P,c]=o.useState(10),u=e=>{c(e)},d=e=>{g(e)};return r.jsxs(m,{count:p,itemsPerPage:P,page:s,onItemsPerPageChange:u,onPageChange:d,children:[r.jsx(h,{}),r.jsx(x,{})]})}};var i,a,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Dt=["Demo"];export{t as Demo,Dt as __namedExportsOrder,vt as default};
