import{r,j as t}from"./iframe-DIMiXZkL.js";import{P as u,a as I,b as R}from"./PaginationRange-DOGvZlKw.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-CQ2vN7PH.js";import"./IconChevronLeftLineW400-0X8oG85U.js";import"./SvgIcon-DijRRPMl.js";import"./IconChevronRightLineW400-Ch94Hb27.js";import"./IconDotsHorizontalLineW100-BbMRm26Q.js";import"./useDocumentEventListener-C8zOMcFa.js";import"./useControlled-V-CCDtrK.js";import"./Button-Ccz4Bnbg.js";import"./ButtonBase-GQvGf2x8.js";import"./useForkRef-AZ5KJT18.js";import"./Tooltip-D3Uw3Mzy.js";import"./Popper-C_ttwvIS.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BO9UDDXf.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-DDywECfU.js";import"./setRef-B4em79P6.js";import"./Fade-CsnZi5m8.js";import"./utils-B5vS3m3C.js";import"./createTransition-1CZU_5uS.js";import"./useTimeout-GUoFRKQj.js";import"./useId-CXM3-UVf.js";import"./useEvent-Czny6oHG.js";import"./TextField-NZ9SeiFp.js";import"./FormFieldHelperText-C1PbgRgg.js";import"./FormField.context-BGx9jYzc.js";import"./FormFieldLabel-dEzWh-bq.js";import"./IconMenuDownFillW300-Cx980Cxv.js";import"./Menu-C6zM3OlK.js";import"./MenuItem-CXgkQCJq.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./Popover-G-zlK6Le.js";import"./debounce-mYveAr4B.js";import"./Modal-Rkq7Dudf.js";import"./lockScroll-qqOLVCfx.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-B8JLWY41.js";import"./FocusTrap-ByvrgsB6.js";import"./Grow-D3CZ4A3_.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Ce={tags:["autodocs"],component:u,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},o={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=n=>{m(n)},c=n=>{g(n)};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{})]})}},a={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=e=>{m(e)},c=e=>{g(e)},n=e=>{e.preventDefault()};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{slotProps:{page:e=>({href:`#page=${e.page}`,onClick:n}),previous:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n}),next:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n})},slots:{page:"a",previous:"a",next:"a"}})]})}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
