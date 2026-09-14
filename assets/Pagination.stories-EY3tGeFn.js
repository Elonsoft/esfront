import{r,j as t}from"./iframe-Bc8-Q25v.js";import{P as u,a as I,b as R}from"./PaginationRange-DvFWwKUu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./IconChevronLeftLineW400-BPisti1n.js";import"./SvgIcon-CMA3Mbq7.js";import"./IconChevronRightLineW400-5enZZUPe.js";import"./IconDotsHorizontalLineW100-Cf6skHuh.js";import"./useDocumentEventListener-DgpvYq_r.js";import"./useControlled-BKv9s01-.js";import"./Button-BCRxDX6B.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";import"./Tooltip-BgInsn7H.js";import"./Popper-DYg-78L5.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BW-pjcFK.js";import"./createTransition-BIZAeqwx.js";import"./utils-xjkStw31.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./Fade-Cz0N_mL7.js";import"./useTimeout-DowuL8C4.js";import"./useId-DYzkOzzt.js";import"./useEvent-CCPOMy0K.js";import"./TextField-j8tsbYSO.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./FormField.context-BjwhPGAJ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./IconMenuDownFillW300-ivIlnvSt.js";import"./Menu-CriPHtCP.js";import"./MenuItem-8wSZO-ML.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./Popover-CjDfwJ6v.js";import"./debounce-mYveAr4B.js";import"./Modal-Cqh-UVFo.js";import"./lockScroll-qqOLVCfx.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-BIFNHrHU.js";import"./FocusTrap-cBv2YN9d.js";import"./Grow-s7Bol92u.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const he={tags:["autodocs"],component:u,parameters:{references:["Pagination","PaginationPages","PaginationRange"]},argTypes:{itemsPerPage:{table:{disable:!0}},page:{table:{disable:!0}}},args:{count:100}},o={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=n=>{m(n)},c=n=>{g(n)};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{})]})}},a={render:function({count:s}){const[i,g]=r.useState(1),[p,m]=r.useState(10),P=e=>{m(e)},c=e=>{g(e)},n=e=>{e.preventDefault()};return t.jsxs(u,{count:s,itemsPerPage:p,page:i,onItemsPerPageChange:P,onPageChange:c,children:[t.jsx(I,{}),t.jsx(R,{slotProps:{page:e=>({href:`#page=${e.page}`,onClick:n}),previous:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n}),next:e=>({href:e.disabled?void 0:`#page=${e.page}`,onClick:n})},slots:{page:"a",previous:"a",next:"a"}})]})}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Use `slots.page`, `slots.previous` and `slots.next` to change the component rendered for the\nnumbered page items and for the previous and next buttons, and the matching `slotProps` callbacks to\ngive them page aware props.",...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};const le=["Demo","Links"];export{o as Demo,a as Links,le as __namedExportsOrder,he as default};
