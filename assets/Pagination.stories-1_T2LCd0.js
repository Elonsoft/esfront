import{r,j as t}from"./iframe-WZaTcFld.js";import{P as u,a as I,b as R}from"./PaginationRange-mk5Zsp3C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./IconChevronLeftLineW400-CPUiAMuh.js";import"./SvgIcon-CImGifIE.js";import"./IconChevronRightLineW400-BehMRCA7.js";import"./IconDotsHorizontalLineW100-CVbbT5JL.js";import"./useDocumentEventListener-DF4sX5o5.js";import"./useControlled-BkzgZrqK.js";import"./Button-DX7vCFDA.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./Tooltip-Cf9elEFD.js";import"./Popper-Di5muT-r.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BYj3FDWN.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./createTransition-B0gmdMvU.js";import"./useTimeout-BCL6eOzm.js";import"./useId-Cowwq5kl.js";import"./useEvent-PLZAS_3a.js";import"./TextField-DC1lqpSU.js";import"./FormFieldHelperText-DZMLTBde.js";import"./FormField.context-xKPgMKao.js";import"./FormFieldLabel-Dhbs71bh.js";import"./IconMenuDownFillW300-BXaw8Ap6.js";import"./Menu-2XP5SIII.js";import"./MenuItem-D8cap5ou.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./Popover-C3kEi3Bv.js";import"./debounce-mYveAr4B.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./FocusTrap-1Ul32FaH.js";import"./Grow-D1yaFj-8.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const Ce={tags:["autodocs"],component:u,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},o={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=n=>{m(n)},c=n=>{g(n)};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{})]})}},a={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=e=>{m(e)},c=e=>{g(e)},n=e=>{e.preventDefault()};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{slotProps:{page:e=>({href:`#page=${e.page}`,onClick:n}),previous:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n}),next:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n})},slots:{page:"a",previous:"a",next:"a"}})]})}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
