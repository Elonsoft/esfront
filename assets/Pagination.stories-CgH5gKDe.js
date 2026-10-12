import{r,j as t}from"./iframe-BYc7QBr5.js";import{P as u,a as I,b as R}from"./PaginationRange-ZeOuEST4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-DBegVBAf.js";import"./IconChevronLeftLineW400-DstCzqCn.js";import"./SvgIcon-Wn3RlfDb.js";import"./IconChevronRightLineW400-AZ87hVWF.js";import"./IconDotsHorizontalLineW100-C0n5QJ8L.js";import"./useDocumentEventListener-DoDjbtEf.js";import"./useControlled-CcB3PY7K.js";import"./Button-CBEaRZ-l.js";import"./ButtonBase-CQOMMh1y.js";import"./useForkRef-DB7gLYYj.js";import"./Tooltip-BhKiqPTC.js";import"./Popper-BcC2SVuu.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BchVpaqy.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-CKw70sL4.js";import"./setRef-B4em79P6.js";import"./Fade-DZUkkklo.js";import"./utils-CaOz1aTQ.js";import"./createTransition-ksOFfcKC.js";import"./useTimeout-DvcTotH6.js";import"./useId-DFpf6LO_.js";import"./useEvent-sFMfcM9R.js";import"./TextField-DGSadQ_y.js";import"./FormFieldHelperText-Ch69cSEL.js";import"./FormField.context-Bi2DcELR.js";import"./FormFieldLabel-CJCJ9uTG.js";import"./IconMenuDownFillW300-DXgPFCeE.js";import"./Menu-Bu6QXZ_7.js";import"./MenuItem-C8E2ODvI.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./Popover-Dp20RxNY.js";import"./debounce-mYveAr4B.js";import"./Modal-uL1Ezqmr.js";import"./lockScroll-qqOLVCfx.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-Cffo5YeF.js";import"./FocusTrap-BKsgFiPt.js";import"./Grow-73dxiOct.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Ce={tags:["autodocs"],component:u,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},o={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=n=>{m(n)},c=n=>{g(n)};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{})]})}},a={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=e=>{m(e)},c=e=>{g(e)},n=e=>{e.preventDefault()};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{slotProps:{page:e=>({href:`#page=${e.page}`,onClick:n}),previous:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n}),next:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n})},slots:{page:"a",previous:"a",next:"a"}})]})}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(h=o.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var C,f,x,b,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    const onClick = (e: React.MouseEvent) => {
      e.preventDefault();
    };
    return <Pagination count={count} itemsPerPage={itemsPerPage} page={page} onItemsPerPageChange={onItemsPerPageChange} onPageChange={onPageChange}>
        <PaginationRange />
        <PaginationPages slotProps={{
        page: item => ({
          href: \`#page=\${item.page}\`,
          onClick
        }),
        previous: item => ({
          href: item.disabled ? undefined : \`#page=\${item.page}\`,
          onClick
        }),
        next: item => ({
          href: item.disabled ? undefined : \`#page=\${item.page}\`,
          onClick
        })
      }} slots={{
        page: 'a',
        previous: 'a',
        next: 'a'
      }} />
      </Pagination>;
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Use `slots.page`, `slots.previous` and `slots.next` to change the component rendered for the\nnumbered page items and for the previous and next buttons, and the matching `slotProps` callbacks to\ngive them page aware props.",...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};const fe=["Demo","Links"];export{o as Demo,a as Links,fe as __namedExportsOrder,Ce as default};
