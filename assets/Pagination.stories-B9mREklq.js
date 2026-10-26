import{r,j as t}from"./iframe-D3HjMCd-.js";import{P as u,a as I,b as R}from"./PaginationRange-DBlMj5tT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-21R-WjRB.js";import"./IconChevronLeftLineW400-ChBziwhx.js";import"./SvgIcon-D3b7riVA.js";import"./IconChevronRightLineW400-DK22BRzZ.js";import"./IconDotsHorizontalLineW100-BN0gu9Fb.js";import"./useDocumentEventListener-ZCzUrXhY.js";import"./useControlled-e9NyoJZq.js";import"./Button-D_kL-LjM.js";import"./ButtonBase-ZB4rAPke.js";import"./useForkRef-GwhPXW4N.js";import"./Tooltip-D9TtGqQ4.js";import"./Popper-DF_DllmW.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-0j9kOChL.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-CLniivOv.js";import"./setRef-B4em79P6.js";import"./Fade-0_oz4Mfm.js";import"./utils-DukZKYgr.js";import"./createTransition-BOjDIFAa.js";import"./useTimeout-C5VTQpkg.js";import"./useId-DNcBXqE4.js";import"./useEvent-BEzyp1Bz.js";import"./TextField-DT-FTa2W.js";import"./FormFieldHelperText-d3-TP2cu.js";import"./FormField.context-Ba4OjAmF.js";import"./FormFieldLabel-DOLpuC-H.js";import"./IconMenuDownFillW300-CXszpPo2.js";import"./Menu-DmjFOseh.js";import"./MenuItem-B3CXYI4l.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./Popover-Dz797W0x.js";import"./debounce-mYveAr4B.js";import"./Modal-CVnyES7t.js";import"./lockScroll-qqOLVCfx.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-7AV8cpXU.js";import"./FocusTrap-DpkLcZxt.js";import"./Grow-BZJ-EgiL.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Ce={tags:["autodocs"],component:u,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},o={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=n=>{m(n)},c=n=>{g(n)};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{})]})}},a={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=e=>{m(e)},c=e=>{g(e)},n=e=>{e.preventDefault()};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{slotProps:{page:e=>({href:`#page=${e.page}`,onClick:n}),previous:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n}),next:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n})},slots:{page:"a",previous:"a",next:"a"}})]})}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
