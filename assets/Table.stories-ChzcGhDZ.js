import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{c as P}from"./clsx.m-C7bORDfW.js";import{a as N,g as I,s as x,c as _}from"./styled-QckRPC_l.js";import{u as oe}from"./useLatest-sVqXUmVb.js";import{u as $}from"./DefaultPropsProvider-BgzOhfjl.js";import{u as X}from"./useForkRef-Cmn-Dh7x.js";import{u as we}from"./useIntersectionObserver-Bn-bajRp.js";import{B as de}from"./Box-wRm4ebgR.js";import{C as le}from"./Checkbox-88teVN7k.js";import{T as Me}from"./TooltipEllipsis-D5NvwasF.js";import{T as ue}from"./Typography-dCWir4IF.js";import{A as We}from"./Avatar-pOVpN4vX.js";import{b as He,B as F}from"./Button-CL4pDWwx.js";import{I as ke}from"./IconDotsVerticalW500-4SgXNzTI.js";import{d as Oe}from"./dividerClasses-D-rMJkHp.js";import{I as Ee}from"./IconPencilW500-CeeWC1Wq.js";import{D as Ae}from"./Divider-CH9ZVQ77.js";import{I as je}from"./IconCloseW600-DgRjFvAO.js";import{P as Pe,a as ze,b as De}from"./PaginationRange-DZvVMz8c.js";import{T as me}from"./TextField-B-8j0Rl0.js";import{M as fe}from"./MenuItem-CTB1bkQ4.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./Checkbox.classes-Di0bQe5l.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./SwitchBase-B94b24U2.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./useResizeObserver-BNbozrrH.js";import"./Tooltip-BqXojrKv.js";import"./Fade-DWBj0t68.js";import"./useTheme-ErypeN0Y.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./useControlled-BX5XFdR0.js";import"./useId-DHFVogFr.js";import"./useEvent-B4f6aq-e.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popper-5tNl5wyi.js";import"./index-CycuZXML.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Cdjvc33M.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./memoTheme-DzcScnLI.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Avatar.classes-CMPzETZ3.js";import"./IconChevronLeftW400-0b7UA-ko.js";import"./IconChevronRightW400-zcXvIcn7.js";import"./IconDotsHorizontalW100-Dkka6KFg.js";import"./useDocumentEventListener-DcHHZa3z.js";import"./IconMenuDownW300-sXw80Qz7.js";import"./Menu-_nfAmUNL.js";import"./useSlot-CFc0_OMk.js";import"./Popover-DEEcjM6r.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-Dt_8BulK.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-vTo9pgoY.js";import"./MenuList-hBx3FRLR.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./FormHelperText-BEN161lL.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";const Fe=(...e)=>{const t=a.useRef(0),l=oe(n=>{if(t.current>0){t.current-=1;return}t.current=e.length-1;const s=e.filter(r=>r.current!==n.target),p=n.target.scrollLeft;requestAnimationFrame(()=>{s.forEach(r=>{r.current&&(r.current.scrollLeft=p)})})});a.useLayoutEffect(()=>{const n=s=>{l.current(s)};return e.forEach(s=>{s.current&&s.current.addEventListener("scroll",n)}),()=>{e.forEach(s=>{s.current&&s.current.removeEventListener("scroll",n)})}},e.map(n=>n.current))};function Ue(e){return N("ESTable",e)}I("ESTable",["root"]);const Ne=a.createContext(null),Xe=()=>{const e=a.useContext(Ne);if(e===null)throw new Error("No provider for TableContext.");return e};function Ge(e){return N("ESTableBody",e)}I("ESTableBody",["root","striped","container"]);const Ie=a.createContext(null),Je=()=>{const e=a.useContext(Ie);if(e===null)throw new Error("No provider for TableBodyContext.");return e};function Ke(e){return N("ESTableCell",e)}const c=I("ESTableCell",["root","head","body","paddingNone","paddingNormal","paddingCheckbox","pinLeft","pinRight","overlap","resizing","rowDivider","colDivider","wrapper","container","content","contentAlignFlexStart","contentAlignCenter","contentAlignFlexEnd","resize","resizeResizing"]),ce=a.createContext(null),Ye=()=>{const e=a.useContext(ce);if(e===null)throw new Error("Not provider for TableCellContext.");return e},Ze=e=>{const{classes:t,variant:l,padding:n,align:s,pin:p,overlap:r,isResizing:u,rowDivider:d,colDivider:m}=e;return _({root:["root",l,n==="none"&&"paddingNone",n==="normal"&&"paddingNormal",n==="checkbox"&&"paddingCheckbox",p==="left"&&"pinLeft",p==="right"&&"pinRight",r&&"overlap",u&&"resizing",d&&"rowDivider",m&&"colDivider"],wrapper:["wrapper"],container:["container"],content:["content",s==="flex-start"&&"contentAlignFlexStart",s==="center"&&"contentAlignCenter",s==="flex-end"&&"contentAlignFlexEnd"],resize:["resize",u&&"resizeResizing"]},Ke,t)},Qe=x("div",{name:"ESTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,t[l.variant],l.padding==="none"&&t.paddingNone,l.padding==="normal"&&t.paddingNormal,l.padding==="checkbox"&&t.paddingCheckbox,l.overlap&&t.overlap,l.isResizing&&t.resizing,l.rowDivider&&t.rowDivider,l.colDivider&&t.colDivider]}})(({theme:e})=>({position:"relative",height:"100%",gridColumnEnd:"span var(--ESTableCell-colSpan)",[`&.${c.pinLeft}, &.${c.pinRight}`]:{position:"sticky",[`&.${c.head}`]:{zIndex:2},[`&.${c.body}`]:{zIndex:3}},[`&.${c.pinLeft}`]:{boxShadow:`2px 0 0 0 ${e.vars.palette.monoA.A100}`},[`&.${c.pinRight}`]:{boxShadow:`-2px 0 0 0 ${e.vars.palette.monoA.A100}`},[`&.${c.pinRight} + .${c.pinRight}`]:{boxShadow:"none"},[`&.${c.pinLeft}:not(:nth-last-child(1 of .${c.pinLeft}))`]:{boxShadow:"none"},[`&.${c.pinRight}:not(:nth-child(1 of .${c.pinRight}))`]:{boxShadow:"none"},[`&.${c.pinLeft}:nth-last-child(1 of .${c.pinLeft}) + .${c.colDivider}`]:{[`& .${c.container}`]:{borderLeft:0}},[`&:hover .${c.resize}::after`]:{width:"1px",backgroundColor:e.vars.palette.monoA.A200},[`.${c.resize}:hover::after`]:{width:"3px",backgroundColor:e.vars.palette.monoA.A400},[`.${c.resize}:focus-visible::after`]:{width:"3px",backgroundColor:e.vars.palette.info.A600},variants:[{props:{variant:"head"},style:{...e.typography.caption,color:e.vars.palette.monoA.A600,backgroundColor:e.vars.palette.surface[100],position:"relative",zIndex:1,userSelect:"none",height:"49px"}},{props:{variant:"body"},style:{...e.typography.body100,color:e.vars.palette.monoA.A900,backgroundColor:e.vars.palette.surface[100],height:"57px"}},{props:{padding:"normal"},style:{[`& .${c.content}`]:{padding:"0 16px"}}},{props:{padding:"checkbox"},style:{[`& .${c.content}`]:{padding:"0 4px"},[`&:first-of-type .${c.content}`]:{paddingLeft:"16px"},[`&:last-of-type .${c.content}`]:{paddingRight:"16px"}}},{props:{isResizing:!0},style:{[`.${c.resize}.${c.resize}::after`]:{width:"3px",backgroundColor:e.vars.palette.info.A600}}},{props:{rowDivider:!0},style:{[`& .${c.container}`]:{borderBottom:`1px solid ${e.vars.palette.monoA.A100}`}}},{props:{colDivider:!0},style:{"&:not(:first-of-type)":{[`& .${c.container}`]:{borderLeft:`1px solid ${e.vars.palette.monoA.A100}`}}}}]})),et=x("div",{name:"ESTableCell",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(()=>({width:"100%",height:"100%"})),tt=x("div",{name:"ESTableCell",slot:"Container",overridesResolver:(e,t)=>t.container})(({theme:e})=>({borderBottom:0,transition:`${e.transitions.duration.short}ms, border-bottom 0ms`,width:"100%",height:"100%",display:"flex"})),ot=x("div",{name:"ESTableCell",slot:"Content",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.content,l.align==="flex-start"&&t.contentAlignFlexStart,l.align==="center"&&t.contentAlignCenter,l.align==="flex-end"&&t.contentAlignFlexEnd]}})(({theme:e})=>({transition:`${e.transitions.duration.short}ms`,width:"100%",height:"100%",overflow:"hidden",display:"flex",alignItems:"center",[`&.${c.contentAlignFlexStart}`]:{justifyContent:"flex-start",textAlign:"left"},[`&.${c.contentAlignCenter}`]:{justifyContent:"center",textAlign:"center"},[`&.${c.contentAlignFlexEnd}`]:{justifyContent:"flex-end",textAlign:"right"}})),lt=x("button",{name:"ESTableCell",slot:"Resize",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.resize,l.isResizing&&t.resizeResizing]}})({position:"absolute",right:0,top:0,bottom:0,width:"8px",cursor:"col-resize",border:0,padding:0,margin:0,background:"none",outline:"none",textDecoration:"none","&::after":{content:'""',position:"absolute",right:0,top:"12px",bottom:"12px",borderRadius:"3px"},variants:[{props:{isResizing:!0},style:{"&::after":{display:"block !important"}}}]}),nt={ArrowLeft:-16,ArrowRight:16},f=a.memo(a.forwardRef(function(t,l){const n=Ye(),{children:s,className:p,variant:r=n.variant,rowDivider:u=n.rowDividers,colDivider:d=n.colDividers,padding:m="normal",align:i="flex-start",id:b,onResize:g,onResizeCommit:C,colSpan:T,minWidth:v,labelResize:E,sx:j,pin:M,...W}=$({props:t,name:"ESTableCell"}),R=a.useRef(null),S=X(R,l),A=a.useRef(null),[V,z]=a.useState(!1),y=oe(g),h=oe(C),D=oe(k=>{if(y.current&&R.current){if(A.current!==null){const q=Math.max(v||0,R.current.getBoundingClientRect().width+(k.screenX-A.current));y.current(q,R.current)}A.current=k.screenX}}),L=k=>{A.current=k.screenX,z(!0)},G=k=>{const q=nt[k.key];if(y.current&&R.current&&q){k.preventDefault();const Y=Math.max(v||0,R.current.getBoundingClientRect().width+(k.shiftKey?q*3:q));y.current(Y,R.current)}},J=k=>{(k.key==="ArrowLeft"||k.key==="ArrowRight")&&h.current&&R.current&&h.current(R.current.getBoundingClientRect().width,R.current)},qe=k=>{W.overlap&&k.stopPropagation()};a.useEffect(()=>{if(V){const k=Be=>{D.current(Be)},q=()=>{A.current=null,z(!1),h.current&&R.current&&h.current(R.current.getBoundingClientRect().width,R.current)},Y=document.createElement("STYLE");return Y.textContent=`* { cursor: col-resize !important; } .${c.resize}::after { display: none; }`,document.addEventListener("mousemove",k),document.addEventListener("mouseup",q),document.head.appendChild(Y),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",q),document.head.removeChild(Y)}}},[V]);const ee={variant:r,padding:m,align:i,pin:M,isResizing:V,rowDivider:u,colDivider:d,...W},K=Ze(ee);return o.jsx(Qe,{ref:S,className:P(K.root,p),"data-minwidth":v,id:b,ownerState:ee,role:r==="head"?"columnheader":"cell",style:{"--ESTableCell-colSpan":T},sx:j,onClick:qe,children:o.jsx(et,{className:K.wrapper,children:o.jsxs(tt,{className:K.container,children:[o.jsx(ot,{className:K.content,ownerState:ee,children:s}),!!g&&o.jsx(lt,{"aria-label":E,className:K.resize,ownerState:ee,onKeyDown:G,onKeyUp:J,onMouseDown:L})]})})})}));try{f.displayName="TableCell",f.__docgenInfo={description:"",displayName:"TableCell",props:{id:{defaultValue:null,description:"The id attribute passed to root element.",name:"id",required:!1,type:{name:"string"}},minWidth:{defaultValue:{value:"0"},description:"The minimum width of the cell for manual resizing.",name:"minWidth",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"'normal'"},description:"The padding applied to the cell.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"checkbox"'}]}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableCellClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onResize:{defaultValue:null,description:"Callback function that is fired when the cell's width changed.",name:"onResize",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},align:{defaultValue:{value:"'flex-start'"},description:"Set the text-align on the table cell content.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},colSpan:{defaultValue:null,description:"A non-negative integer value that indicates for how many columns the cell extends.",name:"colSpan",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"head"'}]}},overlap:{defaultValue:null,description:"If true, the table cell will overlap it's row.",name:"overlap",required:!1,type:{name:"boolean"}},rowDivider:{defaultValue:{value:"false"},description:"If `true`, the table row divider is shown.",name:"rowDivider",required:!1,type:{name:"boolean"}},colDivider:{defaultValue:{value:"false"},description:"If `true`, the table col divider is shown.",name:"colDivider",required:!1,type:{name:"boolean"}},pin:{defaultValue:null,description:"Pin the cell to the left or right side.",name:"pin",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onResizeCommit:{defaultValue:null,description:"Callback function that is fired when the cell's width finished changing.",name:"onResizeCommit",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},labelResize:{defaultValue:null,description:"Text for the resize button aria-label.",name:"labelResize",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function st(e){return N("ESTableRow",e)}const O=I("ESTableRow",["root","hover","selected","content","overlap"]),rt=e=>{const{classes:t,hover:l,selected:n}=e;return _({root:["root",l&&"hover",n&&"selected"],content:["content"],overlap:["overlap"]},st,t)},at=x("div",{name:"ESTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.hover&&t.hover,l.selected&&t.selected]}})(({theme:e})=>({variants:[{props:{selected:!0},style:{[`& .${c.container}`]:{backgroundColor:e.vars.palette.secondary.A100}}},{props:{hover:!0},style:{"&:hover":{[`& .${c.content}`]:{backgroundColor:e.vars.palette.monoA.A50}}}}]})),it=x(de,{name:"ESTableRow",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"grid",gridAutoRows:"max-content",minWidth:"100%",border:0,padding:0,margin:0,background:"none",outline:"none",textDecoration:"none",variants:[{props:{hover:!0},style:{cursor:"pointer","&:focus-visible":{[`&, & + .${O.overlap}`]:{[`& .${c.content}.${c.content}`]:{backgroundColor:e.vars.palette.monoA.A50}}},"&:active":{[`&, & + .${O.overlap}`]:{[`& .${c.content}.${c.content}`]:{backgroundColor:e.vars.palette.monoA.A100}}}}}]})),H=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,sx:p,selected:r,hover:u,...d}=$({props:t,name:"ESTableRow"}),{columns:m}=Xe(),i={selected:r,hover:u,...d},b=rt(i);return o.jsx(at,{className:P(b.root,s),ownerState:i,sx:p,children:o.jsx(it,{ref:l,className:b.content,ownerState:i,role:"row",style:{gridTemplateColumns:m.join(" ")},...d,children:n})})}));try{H.displayName="TableRow",H.__docgenInfo={description:"",displayName:"TableRow",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<TableRowClasses> & Partial<ClassNameMap<never>>)"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},hover:{defaultValue:null,description:"If true, the table row will shade on hover.",name:"hover",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"If true, the table row will have the selected shading.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const ct=e=>{const{classes:t,striped:l}=e;return _({root:["root",l&&"striped"],container:["container"]},Ge,t)},dt=x("div",{name:"ESTableBody",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.striped&&t.striped]}})(({theme:e})=>({overflow:"auto",position:"relative",width:"100%",minWidth:"100%",maxWidth:"100%",zIndex:1,scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`& .${O.root}:last-of-type`]:{[`& .${c.container}`]:{borderBottom:0}},variants:[{props:{striped:!0},style:{[`& .${O.root}:nth-of-type(odd)`]:{[`.${c.wrapper}`]:{backgroundColor:e.vars.palette.monoA.A25}}}}]})),pt=x("div",{name:"ESTableBody",slot:"Container",overridesResolver:(e,t)=>t.container})(()=>({minWidth:"100%",width:"fit-content"})),ut={variant:"body"},ne=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,sx:p,rowDividers:r=!0,colDividers:u=!1,striped:d,...m}=$({props:t,name:"ESTableBody"}),{setRef:i}=Je(),b=X(i,l),g=a.useMemo(()=>({...ut,rowDividers:r,colDividers:u}),[r,u]),C={striped:d,...m},T=ct(C);return o.jsx(ce.Provider,{value:g,children:o.jsx(dt,{ref:b,className:P(T.root,s),ownerState:C,role:"rowgroup",sx:p,children:o.jsx(pt,{className:T.container,children:n})})})}));try{ne.displayName="TableBody",ne.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableBodyClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"If `true`, the table has zebra-striping variant.",name:"striped",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function mt(e){return N("ESTableHead",e)}I("ESTableHead",["root","sticky","stuck","container"]);const _e=a.createContext(null),ft=()=>{const e=a.useContext(_e);if(e===null)throw new Error("No provider for TableHeadContext.");return e},bt=e=>{const{classes:t,isSticky:l,isStuck:n}=e;return _({root:["root",l&&"sticky",l&&n&&"stuck"],container:["container"]},mt,t)},ht=x("div",{name:"ESTableHead",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:{isSticky:l,isStuck:n}}=e;return[t.root,l&&t.sticky,l&&n&&t.stuck]}})({overflow:"auto",position:"relative",width:"100%",minWidth:"100%",maxWidth:"100%",zIndex:2,borderTopLeftRadius:"6px",borderTopRightRadius:"6px",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},variants:[{props:{isSticky:!0},style:{position:"sticky",top:"var(--ESTableHead-top)"}},{props:{isSticky:!0,isStuck:!0},style:{borderTopLeftRadius:0,borderTopRightRadius:0}}]}),xt=x("div",{name:"ESTableBody",slot:"Container",overridesResolver:(e,t)=>t.container})(()=>({minWidth:"100%",width:"fit-content"})),gt={variant:"head"},se=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,sticky:p,sx:r,rowDividers:u=!0,colDividers:d=!1,...m}=$({props:t,name:"ESTableHead"}),[i,b]=a.useState(!1),{ref:g,setRef:C}=ft(),T=X(C,l);we({current:g},M=>{b(M[0].intersectionRatio<1)},{threshold:[1],rootMargin:`-${(p||0)+1}px 0px 0px`});const v=a.useMemo(()=>({...gt,rowDividers:u,colDividers:d}),[u,d]),E={isSticky:p!==void 0,isStuck:p!==void 0&&i,...m},j=bt(E);return o.jsx(ce.Provider,{value:v,children:o.jsx(ht,{ref:T,className:P(j.root,s),ownerState:E,role:"rowgroup",style:p===void 0?void 0:{"--ESTableHead-top":`${p||0}px`},sx:r,children:o.jsx(xt,{className:j.container,children:n})})})}));try{se.displayName="TableHead",se.__docgenInfo={description:"",displayName:"TableHead",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableHeadClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function Tt(e){return N("ESTableScrollbar",e)}I("ESTableScrollbar",["root"]);const $e=a.createContext(null),vt=()=>{const e=a.useContext($e);if(e===null)throw new Error("No provider for TableScrollbarContext.");return e},yt=e=>{const{classes:t}=e;return _({root:["root"]},Tt,t)},Ct=x("div",{name:"ESTableScrollbar",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({...e.scrollbars.thinMonoA,overflowX:"auto"})),re=a.memo(a.forwardRef(function(t,l){const{className:n,sx:s,...p}=$({props:t,name:"ESTableScrollbar"}),{width:r,setRef:u}=vt(),d=X(u,l),m={...p},i=yt(m);return o.jsx(Ct,{ref:d,className:P(n,i.root),sx:s,children:o.jsx("div",{style:{width:`${r}px`,height:"1px"}})})}));try{re.displayName="TableScrollbar",re.__docgenInfo={description:"",displayName:"TableScrollbar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableScrollbarClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const St=()=>{const[e,t]=a.useState(null),[l,n]=a.useState(null),[s,p]=a.useState(null),[r,u]=a.useState(0),d=a.useMemo(()=>({ref:e,setRef:t}),[e]),m=a.useMemo(()=>({ref:l,setRef:n}),[l]),i=a.useMemo(()=>({width:r,setWidth:u,ref:s,setRef:p}),[s,r]);return a.useEffect(()=>{if(e){const b=new ResizeObserver(g=>{u(g[0].target.scrollWidth)});return b.observe(e.firstChild),()=>{b.disconnect()}}},[e]),Fe({current:e},{current:l},{current:s}),{bodyContextValue:d,headContextValue:m,scrollbarContextValue:i}},be=(e,t)=>{let l=0;if(e){if(t==="left"){let n=e.previousElementSibling;for(;n;)n.classList.contains(c.pinLeft)&&(l+=n.clientWidth),n=n.previousElementSibling}if(t==="right"){let n=e.nextElementSibling;for(;n;)n.classList.contains(c.pinRight)&&(l+=n.clientWidth),n=n.nextElementSibling}}return`${l}px`},Rt=e=>{a.useEffect(()=>{if(e.current){const t=new ResizeObserver(()=>{e.current&&(e.current.querySelectorAll(`.${c.pinLeft}`).forEach(s=>{s.style.left=be(s,"left")}),e.current.querySelectorAll(`.${c.pinRight}`).forEach(s=>{s.style.right=be(s,"right")}))}),l=()=>{e.current&&e.current.querySelectorAll(`.${c.pinLeft}, .${c.pinRight}`).forEach(s=>{t.observe(s)})},n=new MutationObserver(()=>{t.disconnect(),e.current&&(e.current.querySelectorAll(`.${c.root}`).forEach(s=>{s.style.removeProperty("left"),s.style.removeProperty("right")}),l())});return e.current.querySelectorAll(`.${O.content}`).forEach(s=>{n.observe(s,{childList:!0})}),e.current.querySelectorAll(`.${c.root}`).forEach(s=>{n.observe(s,{attributeFilter:["class"]})}),l(),()=>{t.disconnect(),n.disconnect()}}},[])},wt=e=>{const{classes:t}=e;return _({root:["root"]},Ue,t)},kt=x("div",{name:"ESTable",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({backgroundColor:e.vars.palette.surface[100],boxShadow:e.vars.palette.shadow.down[100],borderRadius:"6px"})),Et={variant:"body"},Q=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,columns:p,sx:r,...u}=$({props:t,name:"ESTable"}),d=a.useRef(null),m=X(d,l),i=a.useMemo(()=>({columns:p}),[p]),{bodyContextValue:b,headContextValue:g,scrollbarContextValue:C}=St();Rt(d);const T={...u},v=wt(T);return o.jsx(Ne.Provider,{value:i,children:o.jsx(ce.Provider,{value:Et,children:o.jsx(Ie.Provider,{value:b,children:o.jsx(_e.Provider,{value:g,children:o.jsx($e.Provider,{value:C,children:o.jsx(kt,{ref:m,className:P(v.root,s),role:"table",sx:r,children:n})})})})})})}));try{Q.displayName="Table",Q.__docgenInfo={description:"Tables display information in a way that's easy to scan, so that users can look for patterns and insights.",displayName:"Table",props:{columns:{defaultValue:null,description:"The width of the columns.",name:"columns",required:!0,type:{name:"string[]"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function At(e){return N("ESTableActions",e)}I("ESTableActions",["root","text","children"]);const jt=e=>{const{classes:t}=e;return _({root:["root"],text:["text"],children:["children"]},At,t)},Pt=x("div",{name:"ESTableActions",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({alignItems:"center",backgroundColor:e.vars.palette.secondary.A100,display:"flex",padding:8,paddingLeft:24})),zt=x(ue,{name:"ESTableActions",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({color:e.vars.palette.monoA.A900,fontWeight:500,marginRight:"auto"})),Dt=x("div",{name:"ESTableActions",slot:"Children",overridesResolver:(e,t)=>t.children})(({theme:e})=>({alignItems:"center",alignSelf:"stretch",display:"grid",gap:2,gridAutoFlow:"column",[`& .${He.root}`]:{"--icon":e.vars.palette.monoA.A700},[`& .${Oe.root}`]:{backgroundColor:e.vars.palette.monoA.A200,margin:"0 6px"}})),ae=a.memo(a.forwardRef(function(t,l){const{className:n,sx:s,label:p,count:r,children:u,...d}=$({props:t,name:"ESTableActions"}),m={...d},i=jt(m);return o.jsxs(Pt,{ref:l,className:P(i.root,n),sx:s,children:[o.jsxs(zt,{className:i.text,variant:"body200",children:[p," ",r]}),o.jsx(Dt,{className:i.children,children:u})]})}));try{ae.displayName="TableActions",ae.__docgenInfo={description:"This component displays actions for the selected table rows.",displayName:"TableActions",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableActionsClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"Customize the selected rows count label.",name:"label",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"The number of selected rows.",name:"count",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function Nt(e){return N("ESTableFoot",e)}I("ESTableFoot",["root","sticky","stuck"]);const It=e=>{const{classes:t,isSticky:l,isStuck:n}=e;return _({root:["root",l&&"sticky",l&&n&&"stuck"]},Nt,t)},_t=x("div",{name:"ESTableFoot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:{isSticky:l,isStuck:n}}=e;return[t.root,l&&t.sticky,l&&n&&t.stuck]}})(({theme:e})=>({backgroundColor:e.vars.palette.surface[100],borderTop:`1px solid ${e.vars.palette.monoA.A100}`,position:"relative",zIndex:2,borderBottomLeftRadius:"6px",borderBottomRightRadius:"6px",variants:[{props:{isSticky:!0},style:{position:"sticky",bottom:"var(--ESTableFoot-bottom)"}},{props:{isSticky:!0,isStuck:!0},style:{borderBottomLeftRadius:0,borderBottomRightRadius:0}}]})),ie=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,sticky:p,sx:r,...u}=$({props:t,name:"ESTableFoot"}),[d,m]=a.useState(!1),i=a.useRef(null),b=X(i,l);we(i,T=>{m(T[0].intersectionRatio<1)},{threshold:[1],rootMargin:`0px 0px -${(p||0)+1}px`});const g={isSticky:p!==void 0,isStuck:p!==void 0&&d,...u},C=It(g);return o.jsx(_t,{ref:b,className:P(C.root,s),ownerState:g,style:p===void 0?void 0:{"--ESTableFoot-bottom":`${p||0}px`},sx:r,children:n})}));try{ie.displayName="TableFoot",ie.__docgenInfo={description:"",displayName:"TableFoot",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableFootClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}function $t(e){return N("ESTableItem",e)}I("ESTableItem",["root","content","primary","secondary"]);const Lt=e=>{const{classes:t}=e;return _({root:["root"],content:["content"],primary:["primary"],secondary:["secondary"]},$t,t)},Vt=x("div",{name:"ESTableItem",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden",display:"flex",gap:"16px"})),qt=x("div",{name:"ESTableItem",slot:"Content",overridesResolver:(e,t)=>t.content})(()=>({overflow:"hidden",display:"flex",flexDirection:"column",gap:"4px"})),Bt=x(ue,{name:"ESTableItem",slot:"Primary",overridesResolver:(e,t)=>t.primary})(()=>({wordBreak:"break-word"})),Mt=x(ue,{name:"ESTableItem",slot:"Secondary",overridesResolver:(e,t)=>t.secondary})(()=>({wordBreak:"break-word"})),pe=a.forwardRef(function(t,l){const{className:n,sx:s,avatar:p,primary:r,secondary:u,...d}=$({props:t,name:"ESTableItem"}),m={...d},i=Lt(m);return o.jsxs(Vt,{ref:l,className:P(i.root,n),sx:s,children:[p,o.jsxs(qt,{className:i.content,children:[!!r&&o.jsx(Bt,{className:i.primary,color:"monoA.A900",component:"div",variant:"body100",children:r}),!!u&&o.jsx(Mt,{className:i.secondary,color:"monoA.A600",component:"div",variant:"caption",children:u})]})]})});try{pe.displayName="TableItem",pe.__docgenInfo={description:"",displayName:"TableItem",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableItemClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},avatar:{defaultValue:null,description:"The avatar to display.",name:"avatar",required:!1,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"The primary text  to display.",name:"primary",required:!1,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"The secondary text to display.",name:"secondary",required:!1,type:{name:"ReactNode"}}}}}catch{}function Wt(e){return N("ESTableText",e)}I("ESTableText",["root","tooltip"]);const Ht=e=>{const{classes:t}=e;return _({root:["root"],tooltip:["tooltip"]},Wt,t)},he=x("div",{name:"ESTableText",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0})),Ot=x(({className:e,...t})=>o.jsx(Me,{...t,classes:{popper:e}}),{name:"ESTableText",slot:"Tooltip",overridesResolver:(e,t)=>t.tooltip})({}),w=a.memo(a.forwardRef(function(t,l){const{children:n,className:s,sx:p,tooltip:r=!0,TooltipProps:u,...d}=$({props:t,name:"ESTableText"}),m={...d},i=Ht(m);return r?o.jsx(Ot,{arrow:!0,disableInteractive:!0,className:P(i.tooltip),placement:"top",title:n||!1,...u,children:({ref:b})=>o.jsx(he,{ref:b,className:P(i.root,s),sx:p,children:n})}):o.jsx(he,{ref:l,className:P(i.root,s),sx:p,children:n})}));try{w.displayName="TableText",w.__docgenInfo={description:"",displayName:"TableText",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TableTextClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tooltip:{defaultValue:{value:"true"},description:"If true, shows the tooltip when text is truncated.",name:"tooltip",required:!1,type:{name:"boolean"}},TooltipProps:{defaultValue:null,description:"Props applied to the Tooltip component.",name:"TooltipProps",required:!1,type:{name:'Omit<TooltipEllipsisProps, "children">'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Le=(e,t,l,n)=>({onResize:(r,u=1)=>(d,m)=>{if(e.current&&t.current){const i=e.current.querySelectorAll(`.${O.content},.${O.overlap}`),b=l.slice(),g=Array.from(t.current.querySelectorAll(`.${c.root}`)),C=m.getBoundingClientRect().width;g.forEach((T,v)=>{if(v<r)b[v]=`${T.clientWidth}px`;else if(v>=r&&v<r+u){const E=T.getBoundingClientRect().width,j=+(T.dataset.minwidth||0);b[v]=`${Math.max(j,d*(E/C))}px`}}),i.forEach(T=>{T.style.gridTemplateColumns=b.join(" ")})}},onResizeCommit:(r,u=1)=>()=>{if(t.current){const d=l.slice();Array.from(t.current.querySelectorAll(`.${c.root}`)).forEach((m,i)=>{i<r+u&&(d[i]=`${m.getBoundingClientRect().width}px`)}),n(d)}}}),Ve=(e,t)=>{const[l,n]=a.useState(t.initialState||[]),s=a.useMemo(()=>e.every(d=>l.includes(d[t.key])),[e,l,t.key]),p=a.useMemo(()=>e.some(d=>l.includes(d[t.key]))&&!s,[e,l,s,t.key]),r=a.useCallback((d,m)=>{const i=l.indexOf(d);if(m??i===-1)n(l.concat(d));else{const b=l.slice();b.splice(i,1),n(b)}},[l]),u=a.useCallback(d=>{if(e){let m=l.filter(i=>!e.find(b=>b[t.key]===i));(d??!s)&&(m=m.concat(e.map(i=>i[t.key]))),n(m)}},[e,l,s,t.key]);return{selected:l,setSelected:n,isAllSelected:s,isSomeSelected:p,toggle:r,toggleAll:u}},U={en:[],ru:[]},B={en:{checkbox:"Checkbox",id:"ID",name:"Name",age:"Age",status:"Status",city:"City",menu:"Menu"},ru:{checkbox:"Чекбокс",id:"ID",name:"ФИО",age:"Возраст",status:"Статус",city:"Город",menu:"Меню"}};for(let e=0;e<50;e++)U.en.push({id:e+1,name:"John Doe",age:25,status:"Active",city:"New York City"}),U.ru.push({id:e+1,name:"Иванов Иван Иванович",age:25,status:"Активен",city:"Иваново"});const Cl={tags:["autodocs"],component:Q,parameters:{references:["Table","TableActions","TableBody","TableCell","TableFoot","TableHead","TableItem","TableRow","TableScrollbar","TableText"]},argTypes:{columns:{table:{disable:!0}}},args:{rowDividers:!0,colDividers:!1,striped:!1}},te={render:function(t,l){const{striped:n,colDividers:s,rowDividers:p}=t,r=l.globals.locale||"en",u=a.useRef(null),d=a.useRef(null),[m]=a.useState(["id","name","age","status","city"]),[i,b]=a.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:g,onResizeCommit:C}=Le(u,d,i,b),{selected:T,setSelected:v,isAllSelected:E,isSomeSelected:j,toggle:M,toggleAll:W}=Ve(U[r],{key:"id"}),R=a.useCallback(()=>{v([])},[]);return o.jsxs(Q,{ref:u,columns:i,children:[o.jsxs(se,{colDividers:s,sticky:0,children:[o.jsxs(H,{children:[o.jsx(f,{padding:"checkbox",children:o.jsx(le,{checked:E,color:"secondary",indeterminate:j,inputProps:{"aria-label":E?"Unselect all":"Select all"},onChange:()=>W()})}),o.jsx(f,{colSpan:3,onResize:g(1,3),onResizeCommit:C(1,3),children:r==="en"?"Group 1":"Группа 1"}),o.jsx(f,{colSpan:2,onResize:g(4,2),onResizeCommit:C(4,2),children:r==="en"?"Group 2":"Группа 2"}),o.jsx(f,{padding:"none"}),o.jsx(f,{})]}),o.jsxs(H,{ref:d,children:[o.jsx(f,{padding:"checkbox"}),m.map((S,A)=>o.jsx(f,{minWidth:S==="name"?130:90,onResize:g(A+1),onResizeCommit:C(A+1),children:o.jsx(w,{children:B[r][S]})},S)),o.jsx(f,{padding:"none"}),o.jsx(f,{})]})]}),o.jsx(ne,{colDividers:s,rowDividers:p,striped:n,children:U[r].map(S=>{const A=T.indexOf(S.id)!==-1,V=`story-usage-checkbox-${S.id}`;return o.jsxs(H,{hover:!0,selected:A,tabIndex:0,children:[o.jsx(f,{overlap:!0,padding:"checkbox",children:o.jsx(le,{checked:A,color:"secondary",inputProps:{"aria-labelledby":V},onChange:()=>M(S.id)})}),o.jsx(f,{children:o.jsx(w,{children:S.id})}),o.jsx(f,{id:V,children:o.jsx(pe,{avatar:o.jsx(We,{alt:"John Sharp",src:"./avatar/6.png"}),primary:o.jsx(w,{children:S.name}),secondary:o.jsx(w,{children:S.city})})}),m.map(z=>z!=="name"&&z!=="id"&&o.jsx(f,{children:o.jsx(w,{children:S[z]})},z)),o.jsx(f,{padding:"none"}),o.jsx(f,{overlap:!0,align:"flex-end",children:o.jsx(F,{rounded:!0,"aria-label":r==="en"?"More":"Ещё",children:o.jsx(ke,{})})})]},S.id)})}),o.jsxs(ie,{sticky:0,children:[!!T.length&&o.jsxs(ae,{count:T.length,label:r==="en"?"Selected":"Выбрано",sx:S=>({borderBottom:`1px solid ${S.vars.palette.monoA.A100}`}),children:[o.jsx(F,{"aria-label":r==="en"?"Edit":"Редактировать",children:o.jsx(Ee,{})}),o.jsx(Ae,{flexItem:!0,orientation:"vertical"}),o.jsx(F,{"aria-label":r==="en"?"Unselect all":"Снять всё выделение",onClick:R,children:o.jsx(je,{})})]}),o.jsx(re,{}),o.jsxs(Pe,{count:100,itemsPerPage:10,page:1,sx:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[o.jsx(ze,{}),o.jsx(De,{boundaryCount:0,siblingCount:0})]})]})]})}},Z={render:function(t,l){const{striped:n,colDividers:s,rowDividers:p}=t,r=l.globals.locale||"en",u=a.useRef(null),d=a.useRef(null),[m,i]=a.useState(["checkbox"]),[b,g]=a.useState(["menu"]),[C,T]=a.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:v,onResizeCommit:E}=Le(u,d,C,T),{selected:j,setSelected:M,isAllSelected:W,isSomeSelected:R,toggle:S,toggleAll:A}=Ve(U[r],{key:"id"}),V=()=>{M([])},z=h=>D=>{const{target:{value:L}}=D;h==="left"&&(g(G=>G.filter(J=>!L.includes(J))),i(L)),h==="right"&&(i(G=>G.filter(J=>!L.includes(J))),g(L))},y=h=>{if(m.includes(h))return"left";if(b.includes(h))return"right"};return o.jsxs(de,{children:[o.jsxs(de,{sx:h=>({display:"flex",flexDirection:"column",gap:"16px",marginBottom:"16px",maxWidth:"850px",[h.breakpoints.up("tabletXS")]:{flexDirection:"row"}}),children:[o.jsx(me,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:r==="en"?"Pin left":"Закрепить слева",size:"40",value:m,onChange:z("left"),children:Object.entries(B[r]).map(([h,D])=>o.jsx(fe,{value:h,children:D},h))}),o.jsx(me,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:r==="en"?"Pin right":"Закрепить справа",size:"40",value:b,onChange:z("right"),children:Object.entries(B[r]).map(([h,D])=>o.jsx(fe,{value:h,children:D},h))})]}),o.jsxs(Q,{ref:u,columns:C,children:[o.jsx(se,{colDividers:s,sticky:0,children:o.jsxs(H,{ref:d,children:[o.jsx(f,{padding:"checkbox",pin:y("checkbox"),children:o.jsx(le,{checked:W,color:"secondary",indeterminate:R,inputProps:{"aria-label":W?"Unselect all":"Select all"},onChange:()=>A()})}),o.jsx(f,{minWidth:100,pin:y("id"),onResize:v(1),onResizeCommit:E(1),children:o.jsx(w,{children:B[r].id})}),o.jsx(f,{minWidth:100,pin:y("name"),onResize:v(2),onResizeCommit:E(2),children:o.jsx(w,{children:B[r].name})}),o.jsx(f,{minWidth:100,pin:y("status"),onResize:v(3),onResizeCommit:E(3),children:o.jsx(w,{children:B[r].status})}),o.jsx(f,{minWidth:100,pin:y("age"),onResize:v(4),onResizeCommit:E(4),children:o.jsx(w,{children:B[r].age})}),o.jsx(f,{minWidth:100,pin:y("city"),onResize:v(5),onResizeCommit:E(5),children:o.jsx(w,{children:B[r].city})}),o.jsx(f,{padding:"none",pin:y("city")}),o.jsx(f,{pin:y("menu")})]})}),o.jsx(ne,{colDividers:s,rowDividers:p,striped:n,children:U[r].map(h=>{const D=j.indexOf(h.id)!==-1,L=`story-usage-checkbox-${h.id}`;return o.jsxs(H,{hover:!1,selected:D,children:[o.jsx(f,{overlap:!0,padding:"checkbox",pin:y("checkbox"),children:o.jsx(le,{checked:D,color:"secondary",inputProps:{"aria-labelledby":L},onChange:()=>S(h.id)})}),o.jsx(f,{pin:y("id"),children:o.jsx(w,{children:h.id})}),o.jsx(f,{id:L,pin:y("name"),children:o.jsx(w,{children:h.name})}),o.jsx(f,{pin:y("status"),children:o.jsx(w,{children:h.status})}),o.jsx(f,{pin:y("age"),children:o.jsx(w,{children:h.age})}),o.jsx(f,{pin:y("city"),children:o.jsx(w,{children:h.city})}),o.jsx(f,{padding:"none",pin:y("city")}),o.jsx(f,{overlap:!0,align:"flex-end",pin:y("menu"),children:o.jsx(F,{rounded:!0,"aria-label":r==="en"?"More":"Ещё",children:o.jsx(ke,{})})})]},h.id)})}),o.jsxs(ie,{sticky:0,children:[!!j.length&&o.jsxs(ae,{count:j.length,label:r==="en"?"Selected":"Выбрано",sx:h=>({borderBottom:`1px solid ${h.vars.palette.monoA.A100}`}),children:[o.jsx(F,{"aria-label":r==="en"?"Edit":"Редактировать",children:o.jsx(Ee,{})}),o.jsx(Ae,{flexItem:!0,orientation:"vertical"}),o.jsx(F,{"aria-label":r==="en"?"Unselect all":"Снять всё выделение",onClick:V,children:o.jsx(je,{})})]}),o.jsx(re,{}),o.jsxs(Pe,{count:100,itemsPerPage:10,page:1,sx:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[o.jsx(ze,{}),o.jsx(De,{boundaryCount:0,siblingCount:0})]})]})]})]})}};var xe,ge,Te;te.parameters={...te.parameters,docs:{...(xe=te.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const {
      striped,
      colDividers,
      rowDividers
    } = args;
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const ref = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [fields] = useState<Array<keyof (typeof DATA)['en'][0]>>(['id', 'name', 'age', 'status', 'city']);
    const [columns, setColumns] = useState(['56px', 'minmax(50px, 1fr)', 'minmax(150px, 2fr)', '150px', 'minmax(100px, 2fr)', 'minmax(100px, 1fr)', 'minmax(0px, auto)', '72px']);
    const {
      onResize,
      onResizeCommit
    } = useTableResize(ref, rowRef, columns, setColumns);
    const {
      selected,
      setSelected,
      isAllSelected,
      isSomeSelected,
      toggle,
      toggleAll
    } = useTableSelection(DATA[locale], {
      key: 'id'
    });
    const onClose = useCallback(() => {
      setSelected([]);
    }, []);
    return <Table ref={ref} columns={columns}>
        <TableHead colDividers={colDividers} sticky={0}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox checked={isAllSelected} color="secondary" indeterminate={isSomeSelected} inputProps={{
              'aria-label': isAllSelected ? 'Unselect all' : 'Select all'
            }} onChange={() => toggleAll()} />
            </TableCell>
            <TableCell colSpan={3} onResize={onResize(1, 3)} onResizeCommit={onResizeCommit(1, 3)}>
              {locale === 'en' ? 'Group 1' : 'Группа 1'}
            </TableCell>
            <TableCell colSpan={2} onResize={onResize(4, 2)} onResizeCommit={onResizeCommit(4, 2)}>
              {locale === 'en' ? 'Group 2' : 'Группа 2'}
            </TableCell>
            <TableCell padding="none" />
            <TableCell />
          </TableRow>
          <TableRow ref={rowRef}>
            <TableCell padding="checkbox" />
            {fields.map((field, index) => <TableCell key={field} minWidth={field === 'name' ? 130 : 90} onResize={onResize(index + 1)} onResizeCommit={onResizeCommit(index + 1)}>
                <TableText>{NAMES[locale][field]}</TableText>
              </TableCell>)}
            <TableCell padding="none" />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody colDividers={colDividers} rowDividers={rowDividers} striped={striped}>
          {DATA[locale].map(row => {
          const isSelected = selected.indexOf(row.id) !== -1;
          const labelId = \`story-usage-checkbox-\${row.id}\`;
          return <TableRow key={row.id} hover selected={isSelected} tabIndex={0}>
                <TableCell overlap padding="checkbox">
                  <Checkbox checked={isSelected} color="secondary" inputProps={{
                'aria-labelledby': labelId
              }} onChange={() => toggle(row.id)} />
                </TableCell>

                <TableCell>
                  <TableText>{row.id}</TableText>
                </TableCell>

                <TableCell id={labelId}>
                  <TableItem avatar={<Avatar alt="John Sharp" src="./avatar/6.png" />} primary={<TableText>{row.name}</TableText>} secondary={<TableText>{row.city}</TableText>} />
                </TableCell>

                {fields.map(field => field !== 'name' && field !== 'id' && <TableCell key={field}>
                        <TableText>{row[field]}</TableText>
                      </TableCell>)}
                <TableCell padding="none" />
                <TableCell overlap align="flex-end">
                  <Button rounded aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                    <IconDotsVerticalW500 />
                  </Button>
                </TableCell>
              </TableRow>;
        })}
        </TableBody>
        <TableFoot sticky={0}>
          {!!selected.length && <TableActions count={selected.length} label={locale === 'en' ? 'Selected' : 'Выбрано'} sx={theme => ({
          borderBottom: \`1px solid \${theme.vars.palette.monoA.A100}\`
        })}>
              <Button aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                <IconPencilW500 />
              </Button>
              <Divider flexItem orientation="vertical" />
              <Button aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                <IconCloseW600 />
              </Button>
            </TableActions>}
          <TableScrollbar />
          <Pagination count={100} itemsPerPage={10} page={1} sx={{
          padding: '12px',
          paddingLeft: '16px'
        }} onItemsPerPageChange={() => {
          /* */
        }} onPageChange={() => {
          /* */
        }}>
            <PaginationRange />
            <PaginationPages boundaryCount={0} siblingCount={0} />
          </Pagination>
        </TableFoot>
      </Table>;
  }
}`,...(Te=(ge=te.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var ve,ye,Ce,Se,Re;Z.parameters={...Z.parameters,docs:{...(ve=Z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const {
      striped,
      colDividers,
      rowDividers
    } = args;
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const ref = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [pinLeft, setPinLeft] = useState<Array<string>>(['checkbox']);
    const [pinRight, setPinRight] = useState<Array<string>>(['menu']);
    const [columns, setColumns] = useState(['56px', 'minmax(50px, 1fr)', 'minmax(150px, 2fr)', '150px', 'minmax(100px, 2fr)', 'minmax(100px, 1fr)', 'minmax(0px, auto)', '72px']);
    const {
      onResize,
      onResizeCommit
    } = useTableResize(ref, rowRef, columns, setColumns);
    const {
      selected,
      setSelected,
      isAllSelected,
      isSomeSelected,
      toggle,
      toggleAll
    } = useTableSelection(DATA[locale], {
      key: 'id'
    });
    const onClose = () => {
      setSelected([]);
    };
    const onPinChange = (pin: 'left' | 'right') => (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: {
          value
        }
      } = event;
      if (pin === 'left') {
        setPinRight(prev => prev.filter(e => !value.includes(e)));
        setPinLeft(value as unknown as string[]);
      }
      if (pin === 'right') {
        setPinLeft(prev => prev.filter(e => !value.includes(e)));
        setPinRight(value as unknown as string[]);
      }
    };
    const getPin = (field: string) => {
      if (pinLeft.includes(field)) {
        return 'left';
      }
      if (pinRight.includes(field)) {
        return 'right';
      }
      return undefined;
    };
    return <Box>
        <Box sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '16px',
        maxWidth: '850px',
        [theme.breakpoints.up('tabletXS')]: {
          flexDirection: 'row'
        }
      })}>
          <TextField fullWidth select SelectProps={{
          multiple: true
        }} label={locale === 'en' ? 'Pin left' : 'Закрепить слева'} size="40" value={pinLeft} onChange={onPinChange('left')}>
            {Object.entries(NAMES[locale]).map(([key, value]) => <MenuItem key={key} value={key}>
                {value}
              </MenuItem>)}
          </TextField>
          <TextField fullWidth select SelectProps={{
          multiple: true
        }} label={locale === 'en' ? 'Pin right' : 'Закрепить справа'} size="40" value={pinRight} onChange={onPinChange('right')}>
            {Object.entries(NAMES[locale]).map(([key, value]) => <MenuItem key={key} value={key}>
                {value}
              </MenuItem>)}
          </TextField>
        </Box>
        <Table ref={ref} columns={columns}>
          <TableHead colDividers={colDividers} sticky={0}>
            <TableRow ref={rowRef}>
              <TableCell padding="checkbox" pin={getPin('checkbox')}>
                <Checkbox checked={isAllSelected} color="secondary" indeterminate={isSomeSelected} inputProps={{
                'aria-label': isAllSelected ? 'Unselect all' : 'Select all'
              }} onChange={() => toggleAll()} />
              </TableCell>
              <TableCell minWidth={100} pin={getPin('id')} onResize={onResize(1)} onResizeCommit={onResizeCommit(1)}>
                <TableText>{NAMES[locale].id}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('name')} onResize={onResize(2)} onResizeCommit={onResizeCommit(2)}>
                <TableText>{NAMES[locale].name}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('status')} onResize={onResize(3)} onResizeCommit={onResizeCommit(3)}>
                <TableText>{NAMES[locale].status}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('age')} onResize={onResize(4)} onResizeCommit={onResizeCommit(4)}>
                <TableText>{NAMES[locale].age}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('city')} onResize={onResize(5)} onResizeCommit={onResizeCommit(5)}>
                <TableText>{NAMES[locale].city}</TableText>
              </TableCell>
              <TableCell padding="none" pin={getPin('city')} />
              <TableCell pin={getPin('menu')} />
            </TableRow>
          </TableHead>
          <TableBody colDividers={colDividers} rowDividers={rowDividers} striped={striped}>
            {DATA[locale].map(row => {
            const isSelected = selected.indexOf(row.id) !== -1;
            const labelId = \`story-usage-checkbox-\${row.id}\`;
            return <TableRow key={row.id} hover={false} selected={isSelected}>
                  <TableCell overlap padding="checkbox" pin={getPin('checkbox')}>
                    <Checkbox checked={isSelected} color="secondary" inputProps={{
                  'aria-labelledby': labelId
                }} onChange={() => toggle(row.id)} />
                  </TableCell>
                  <TableCell pin={getPin('id')}>
                    <TableText>{row.id}</TableText>
                  </TableCell>
                  <TableCell id={labelId} pin={getPin('name')}>
                    <TableText>{row.name}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('status')}>
                    <TableText>{row.status}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('age')}>
                    <TableText>{row.age}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('city')}>
                    <TableText>{row.city}</TableText>
                  </TableCell>
                  <TableCell padding="none" pin={getPin('city')} />
                  <TableCell overlap align="flex-end" pin={getPin('menu')}>
                    <Button rounded aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                      <IconDotsVerticalW500 />
                    </Button>
                  </TableCell>
                </TableRow>;
          })}
          </TableBody>
          <TableFoot sticky={0}>
            {!!selected.length && <TableActions count={selected.length} label={locale === 'en' ? 'Selected' : 'Выбрано'} sx={theme => ({
            borderBottom: \`1px solid \${theme.vars.palette.monoA.A100}\`
          })}>
                <Button aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                  <IconPencilW500 />
                </Button>
                <Divider flexItem orientation="vertical" />
                <Button aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                  <IconCloseW600 />
                </Button>
              </TableActions>}
            <TableScrollbar />
            <Pagination count={100} itemsPerPage={10} page={1} sx={{
            padding: '12px',
            paddingLeft: '16px'
          }} onItemsPerPageChange={() => {
            /* */
          }} onPageChange={() => {
            /* */
          }}>
              <PaginationRange />
              <PaginationPages boundaryCount={0} siblingCount={0} />
            </Pagination>
          </TableFoot>
        </Table>
      </Box>;
  }
}`,...(Ce=(ye=Z.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source},description:{story:`Pinned (or frozen, locked, or sticky) columns are columns that are visible at all time while the user scrolls the data grid horizontally. They can be pinned either to the left or right side.

You may encounter issues if the sum of the widths of the pinned columns is larger than the width of the table. Make sure
that the table can accommodate properly, at least, these columns.`,...(Re=(Se=Z.parameters)==null?void 0:Se.docs)==null?void 0:Re.description}}};const Sl=["Demo","ColumnPinning"];export{Z as ColumnPinning,te as Demo,Sl as __namedExportsOrder,Cl as default};
