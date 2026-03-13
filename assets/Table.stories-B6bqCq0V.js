import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-Wm5baAvf.js";import{c as S}from"./clsx.m-C7bORDfW.js";import{u as G}from"./useLatest-C1UtP6al.js";import{u as E}from"./DefaultPropsProvider-BaGbio7E.js";import{u as W}from"./useForkRef-EzStQRfh.js";import{u as fe}from"./useIntersectionObserver-CywOKxjJ.js";import{C as J}from"./Checkbox-CUDjtzye.js";import{T as Ee}from"./TooltipEllipsis-CcczoydS.js";import{A as Ne}from"./Avatar-CovLsepL.js";import{B as M}from"./Button-BRu9apcn.js";import{I as be}from"./IconDotsVerticalLineW500-DznRteI_.js";import{I as he}from"./IconPencilLineW500-BQN-d0lK.js";import{D as xe}from"./Divider-BKuyIAQ4.js";import{I as ye}from"./IconCloseLineW600-DJYrcAqu.js";import{P as ge,a as Te,b as ve}from"./PaginationRange-CbwlxXYF.js";import{T as ne}from"./TextField-BE5m1Jj6.js";import{M as ae}from"./MenuItem-DrDY2G9B.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SwitchBase-CVLNl3tq.js";import"./useControlled-CibYmksV.js";import"./useFormControl-B4OjCVsv.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";import"./useResizeObserver-C6sKC9YN.js";import"./Tooltip-Bp1S5HE5.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./IconChevronLeftLineW400-BnYMLcPa.js";import"./IconChevronRightLineW400-_L_kWYUC.js";import"./IconDotsHorizontalLineW100-C4fFGOjv.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./IconMenuDownFillW300-BYpUa_Jj.js";import"./Menu-D1WsZbsN.js";import"./clsx-B-dksMZM.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-pQd8fEAo.js";import"./Popover-D33wSAFU.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./MenuList-CymzI1Pn.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./FormHelperText-DKtzwqKg.js";const ze=(...t)=>{const r=l.useRef(0),o=G(i=>{if(r.current>0){r.current-=1;return}r.current=t.length-1;const a=t.filter(n=>n.current!==i.target),c=i.target.scrollLeft;requestAnimationFrame(()=>{a.forEach(n=>{n.current&&(n.current.scrollLeft=c)})})});l.useLayoutEffect(()=>{const i=a=>{o.current(a)};return t.forEach(a=>{a.current&&a.current.addEventListener("scroll",i)}),()=>{t.forEach(a=>{a.current&&a.current.removeEventListener("scroll",i)})}},t.map(i=>i.current))},Ce=l.createContext(null),De=()=>{const t=l.useContext(Ce);if(t===null)throw new Error("No provider for TableContext.");return t},Re=l.createContext(null),Ae=()=>{const t=l.useContext(Re);if(t===null)throw new Error("No provider for TableBodyContext.");return t},te=l.createContext(null),Le=()=>{const t=l.useContext(te);if(t===null)throw new Error("Not provider for TableCellContext.");return t},Ie={ArrowLeft:-16,ArrowRight:16},p=l.memo(l.forwardRef(function(r,o){const i=Le(),{children:a,className:c,style:n,variant:s=i.variant,rowDivider:d=i.rowDividers,colDivider:m=i.colDividers,padding:u="normal",align:f="flex-start",id:T,onResize:j,onResizeCommit:R,colSpan:x,minWidth:w,labelResize:N,pin:q,overlap:I}=E({props:r,name:"ESTableCell"}),y=l.useRef(null),v=W(y,o),_=l.useRef(null),[z,k]=l.useState(!1),h=G(j),b=G(R),P=G(C=>{if(h.current&&y.current){if(_.current!==null){const A=Math.max(w||0,y.current.getBoundingClientRect().width+(C.screenX-_.current));h.current(A,y.current)}_.current=C.screenX}}),D=C=>{_.current=C.screenX,k(!0)},H=C=>{const A=Ie[C.key];if(h.current&&y.current&&A){C.preventDefault();const $=Math.max(w||0,y.current.getBoundingClientRect().width+(C.shiftKey?A*3:A));h.current($,y.current)}},O=C=>{(C.key==="ArrowLeft"||C.key==="ArrowRight")&&b.current&&y.current&&b.current(y.current.getBoundingClientRect().width,y.current)},ke=C=>{I&&C.stopPropagation()};return l.useEffect(()=>{if(z){const C=Pe=>{P.current(Pe)},A=()=>{_.current=null,k(!1),b.current&&y.current&&b.current(y.current.getBoundingClientRect().width,y.current)},$=document.createElement("STYLE");return $.textContent="* { cursor: col-resize !important; } .es-table-cell__resize::after { display: none; }",document.addEventListener("mousemove",C),document.addEventListener("mouseup",A),document.head.appendChild($),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",A),document.head.removeChild($)}}},[z]),e.jsx("div",{ref:v,className:S("es-table-cell",`es-table-cell--variant--${s}`,`es-table-cell--padding--${u}`,q&&`es-table-cell--pin--${q}`,I&&"es-table-cell--overlap",z&&"es-table-cell--resizing",d&&"es-table-cell--row-divider",m&&"es-table-cell--col-divider",s==="body"?"body100":"caption",c),"data-minwidth":w,id:T,role:s==="head"?"columnheader":"cell",style:{"--es-table-cell-col-span":x,...n},onClick:ke,children:e.jsx("div",{className:"es-table-cell__wrapper",children:e.jsxs("div",{className:"es-table-cell__container",children:[e.jsx("div",{className:S("es-table-cell__content",`es-table-cell__content--align--${f}`),children:a}),!!j&&e.jsx("button",{"aria-label":N,className:S("es-table-cell__resize",z&&"es-table-cell__resize--resizing"),onKeyDown:H,onKeyUp:O,onMouseDown:D})]})})})}));try{p.displayName="TableCell",p.__docgenInfo={description:"",displayName:"TableCell",props:{id:{defaultValue:null,description:"The id attribute passed to root element.",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},onResize:{defaultValue:null,description:"Callback function that is fired when the cell's width changed.",name:"onResize",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},align:{defaultValue:{value:"'flex-start'"},description:"Set the text-align on the table cell content.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colSpan:{defaultValue:null,description:"A non-negative integer value that indicates for how many columns the cell extends.",name:"colSpan",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"head"'}]}},minWidth:{defaultValue:{value:"0"},description:"The minimum width of the cell for manual resizing.",name:"minWidth",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"'normal'"},description:"The padding applied to the cell.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"none"'},{value:'"normal"'}]}},overlap:{defaultValue:null,description:"If true, the table cell will overlap it's row.",name:"overlap",required:!1,type:{name:"boolean"}},rowDivider:{defaultValue:{value:"false"},description:"If `true`, the table row divider is shown.",name:"rowDivider",required:!1,type:{name:"boolean"}},colDivider:{defaultValue:{value:"false"},description:"If `true`, the table col divider is shown.",name:"colDivider",required:!1,type:{name:"boolean"}},pin:{defaultValue:null,description:"Pin the cell to the left or right side.",name:"pin",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onResizeCommit:{defaultValue:null,description:"Callback function that is fired when the cell's width finished changing.",name:"onResizeCommit",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},labelResize:{defaultValue:null,description:"Text for the resize button aria-label.",name:"labelResize",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Ve={variant:"body"},K=l.memo(l.forwardRef(function(r,o){const{children:i,className:a,style:c,rowDividers:n=!0,colDividers:s=!1,striped:d}=E({props:r,name:"ESTableBody"}),{setRef:m}=Ae(),u=W(m,o),f=l.useMemo(()=>({...Ve,rowDividers:n,colDividers:s}),[n,s]);return e.jsx(te.Provider,{value:f,children:e.jsx("div",{ref:u,className:S("es-table-body",d&&"es-table-body--striped",a),role:"rowgroup",style:c,children:e.jsx("div",{className:"es-table-body__container",children:i})})})}));try{K.displayName="TableBody",K.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"If `true`, the table has zebra-striping variant.",name:"striped",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Se=l.createContext(null),qe=()=>{const t=l.useContext(Se);if(t===null)throw new Error("No provider for TableHeadContext.");return t},Me={variant:"head"},Y=l.memo(l.forwardRef(function(r,o){const{children:i,className:a,sticky:c,style:n,rowDividers:s=!0,colDividers:d=!1}=E({props:r,name:"ESTableHead"}),[m,u]=l.useState(!1),{ref:f,setRef:T}=qe(),j=W(T,o);fe({current:f},x=>{u(x[0].intersectionRatio<1)},{threshold:[1],rootMargin:`-${(c||0)+1}px 0px 0px`});const R=l.useMemo(()=>({...Me,rowDividers:s,colDividers:d}),[s,d]);return e.jsx(te.Provider,{value:R,children:e.jsx("div",{ref:j,className:S("es-table-head",c!==void 0&&"es-table-head--sticky",c!==void 0&&m&&"es-table-head--stuck",a),role:"rowgroup",style:{"--es-table-head-top":c===void 0?void 0:`${c||0}px`,...n},children:e.jsx("div",{className:"es-table-head__container",children:i})})})}));try{Y.displayName="TableHead",Y.__docgenInfo={description:"",displayName:"TableHead",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const we=l.createContext(null),Be=()=>{const t=l.useContext(we);if(t===null)throw new Error("No provider for TableScrollbarContext.");return t},Z=l.memo(l.forwardRef(function(r,o){const{className:i,style:a}=E({props:r,name:"ESTableScrollbar"}),{width:c,setRef:n}=Be(),s=W(n,o);return e.jsx("div",{ref:s,className:S("es-table-scrollbar","scrollbar-thin-mono-a",i),style:a,children:e.jsx("div",{style:{width:`${c}px`,height:"1px"}})})}));try{Z.displayName="TableScrollbar",Z.__docgenInfo={description:"",displayName:"TableScrollbar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const We=()=>{const[t,r]=l.useState(null),[o,i]=l.useState(null),[a,c]=l.useState(null),[n,s]=l.useState(0),d=l.useMemo(()=>({ref:t,setRef:r}),[t]),m=l.useMemo(()=>({ref:o,setRef:i}),[o]),u=l.useMemo(()=>({width:n,setWidth:s,ref:a,setRef:c}),[a,n]);return l.useEffect(()=>{if(t){const f=new ResizeObserver(T=>{s(T[0].target.scrollWidth)});return f.observe(t.firstChild),()=>{f.disconnect()}}},[t]),ze({current:t},{current:o},{current:a}),{bodyContextValue:d,headContextValue:m,scrollbarContextValue:u}},ie=(t,r)=>{let o=0;if(t){if(r==="left"){let i=t.previousElementSibling;for(;i;)i.classList.contains("es-table-cell--pin--left")&&(o+=i.clientWidth),i=i.previousElementSibling}if(r==="right"){let i=t.nextElementSibling;for(;i;)i.classList.contains("es-table-cell--pin--right")&&(o+=i.clientWidth),i=i.nextElementSibling}}return`${o}px`},He=t=>{l.useEffect(()=>{if(t.current){const r=new ResizeObserver(()=>{t.current&&(t.current.querySelectorAll(".es-table-cell--pin--left").forEach(a=>{a.style.left=ie(a,"left")}),t.current.querySelectorAll(".es-table-cell--pin--right").forEach(a=>{a.style.right=ie(a,"right")}))}),o=()=>{t.current&&t.current.querySelectorAll(".es-table-cell--pin--left, .es-table-cell--pin--right").forEach(a=>{r.observe(a)})},i=new MutationObserver(()=>{r.disconnect(),t.current&&(t.current.querySelectorAll(".es-table-cell").forEach(a=>{a.style.removeProperty("left"),a.style.removeProperty("right")}),o())});return t.current.querySelectorAll(".es-table-row__content").forEach(a=>{i.observe(a,{childList:!0})}),t.current.querySelectorAll(".es-table-cell").forEach(a=>{i.observe(a,{attributeFilter:["class"]})}),o(),()=>{r.disconnect(),i.disconnect()}}},[])},Oe={variant:"body"},U=l.memo(l.forwardRef(function(r,o){const{children:i,className:a,columns:c,style:n}=E({props:r,name:"ESTable"}),s=l.useRef(null),d=W(s,o),m=l.useMemo(()=>({columns:c}),[c]),{bodyContextValue:u,headContextValue:f,scrollbarContextValue:T}=We();return He(s),e.jsx(Ce.Provider,{value:m,children:e.jsx(te.Provider,{value:Oe,children:e.jsx(Re.Provider,{value:u,children:e.jsx(Se.Provider,{value:f,children:e.jsx(we.Provider,{value:T,children:e.jsx("div",{ref:d,className:S("es-table",a),role:"table",style:n,children:i})})})})})})}));try{U.displayName="Table",U.__docgenInfo={description:"Tables display information in a way that's easy to scan, so that users can look for patterns and insights.",displayName:"Table",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},columns:{defaultValue:null,description:"The width of the columns.",name:"columns",required:!0,type:{name:"string[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Q=l.memo(l.forwardRef(function(r,o){const{className:i,style:a,label:c,count:n,children:s}=E({props:r,name:"ESTableActions"});return e.jsxs("div",{ref:o,className:S("es-table-actions",i),style:a,children:[e.jsxs("div",{className:"es-table-actions__text body200",children:[c," ",n]}),e.jsx("div",{className:"es-table-actions__children",children:s})]})}));try{Q.displayName="TableActions",Q.__docgenInfo={description:"This component displays actions for the selected table rows.",displayName:"TableActions",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Customize the selected rows count label.",name:"label",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"The number of selected rows.",name:"count",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const ee=l.memo(l.forwardRef(function(r,o){const{children:i,className:a,sticky:c,style:n}=E({props:r,name:"ESTableFoot"}),[s,d]=l.useState(!1),m=l.useRef(null),u=W(m,o);return fe(m,f=>{d(f[0].intersectionRatio<1)},{threshold:[1],rootMargin:`0px 0px -${(c||0)+1}px`}),e.jsx("div",{ref:u,className:S("es-table-foot",c!==void 0&&"es-table-foot--sticky",c!==void 0&&s&&"es-table-foot--stuck",a),style:{"--es-table-foot-bottom":c===void 0?void 0:`${c||0}px`,...n},children:i})}));try{ee.displayName="TableFoot",ee.__docgenInfo={description:"",displayName:"TableFoot",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const le=l.forwardRef(function(r,o){const{className:i,style:a,avatar:c,primary:n,secondary:s}=E({props:r,name:"ESTableItem"});return e.jsxs("div",{ref:o,className:S("es-table-item",i),style:a,children:[c,e.jsxs("div",{className:"es-table-item__content",children:[!!n&&e.jsx("div",{className:"es-table-item__primary body100",children:n}),!!s&&e.jsx("div",{className:"es-table-item__secondary caption",children:s})]})]})});try{le.displayName="TableItem",le.__docgenInfo={description:"",displayName:"TableItem",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},avatar:{defaultValue:null,description:"The avatar to display.",name:"avatar",required:!1,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"The primary text  to display.",name:"primary",required:!1,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"The secondary text to display.",name:"secondary",required:!1,type:{name:"ReactNode"}}}}}catch{}const V=l.memo(l.forwardRef(function(r,o){const{component:i="div",children:a,className:c,style:n,selected:s,hover:d,...m}=E({props:r,name:"ESTableRow"}),{columns:u}=De();return e.jsx("div",{className:S("es-table-row",s&&"es-table-row--selected",d&&"es-table-row--hover",c),style:n,children:e.jsx(i,{ref:o,className:S("es-table-row__content",d&&"es-table-row__content--hover"),role:"row",style:{gridTemplateColumns:u.join(" ")},...m,children:a})})}));try{V.displayName="TableRow",V.__docgenInfo={description:"",displayName:"TableRow",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},hover:{defaultValue:null,description:"If true, the table row will shade on hover.",name:"hover",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"If true, the table row will have the selected shading.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const g=l.memo(l.forwardRef(function(r,o){var d,m,u;const{children:i,className:a,style:c,tooltip:n=!0,TooltipProps:s}=E({props:r,name:"ESTableText"});return n?e.jsx(Ee,{arrow:!0,disableInteractive:!0,placement:"top",title:i||!1,...s,slotProps:{...s==null?void 0:s.slotProps,popper:{...(d=s==null?void 0:s.slotProps)==null?void 0:d.popper,className:S("es-table-text__tooltip",(u=(m=s==null?void 0:s.slotProps)==null?void 0:m.popper)==null?void 0:u.className)}},children:({ref:f})=>e.jsx("div",{ref:f,className:S("es-table-text",a),style:c,children:i})}):e.jsx("div",{ref:o,className:S("es-table-text",a),style:c,children:i})}));try{g.displayName="TableText",g.__docgenInfo={description:"",displayName:"TableText",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},tooltip:{defaultValue:{value:"true"},description:"If true, shows the tooltip when text is truncated.",name:"tooltip",required:!1,type:{name:"boolean"}},TooltipProps:{defaultValue:null,description:"Props applied to the Tooltip component.",name:"TooltipProps",required:!1,type:{name:'Omit<TooltipEllipsisProps, "children">'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const je=(t,r,o,i)=>({onResize:(n,s=1)=>(d,m)=>{if(t.current&&r.current){const u=t.current.querySelectorAll(".es-table-row__content,.es-table-row__overlap"),f=o.slice(),T=Array.from(r.current.querySelectorAll(".es-table-cell")),j=m.getBoundingClientRect().width;T.forEach((R,x)=>{if(x<n)f[x]=`${R.clientWidth}px`;else if(x>=n&&x<n+s){const w=R.getBoundingClientRect().width,N=+(R.dataset.minwidth||0);f[x]=`${Math.max(N,d*(w/j))}px`}}),u.forEach(R=>{R.style.gridTemplateColumns=f.join(" ")})}},onResizeCommit:(n,s=1)=>()=>{if(r.current){const d=o.slice();Array.from(r.current.querySelectorAll(".es-table-cell")).forEach((m,u)=>{u<n+s&&(d[u]=`${m.getBoundingClientRect().width}px`)}),i(d)}}}),_e=(t,r)=>{const[o,i]=l.useState(r.initialState||[]),a=l.useMemo(()=>t.every(d=>o.includes(d[r.key])),[t,o,r.key]),c=l.useMemo(()=>t.some(d=>o.includes(d[r.key]))&&!a,[t,o,a,r.key]),n=l.useCallback((d,m)=>{const u=o.indexOf(d);if(m??u===-1)i(o.concat(d));else{const f=o.slice();f.splice(u,1),i(f)}},[o]),s=l.useCallback(d=>{if(t){let m=o.filter(u=>!t.find(f=>f[r.key]===u));(d??!a)&&(m=m.concat(t.map(u=>u[r.key]))),i(m)}},[t,o,a,r.key]);return{selected:o,setSelected:i,isAllSelected:a,isSomeSelected:c,toggle:n,toggleAll:s}},B={en:[],ru:[]},L={en:{checkbox:"Checkbox",id:"ID",name:"Name",age:"Age",status:"Status",city:"City",menu:"Menu"},ru:{checkbox:"Чекбокс",id:"ID",name:"ФИО",age:"Возраст",status:"Статус",city:"Город",menu:"Меню"}};for(let t=0;t<50;t++)B.en.push({id:t+1,name:"John Doe",age:25,status:"Active",city:"New York City"}),B.ru.push({id:t+1,name:"Иванов Иван Иванович",age:25,status:"Активен",city:"Иваново"});const rl={tags:["autodocs"],component:U,parameters:{references:["Table","TableActions","TableBody","TableCell","TableFoot","TableHead","TableItem","TableRow","TableScrollbar","TableText"]},argTypes:{columns:{table:{disable:!0}}},args:{rowDividers:!0,colDividers:!1,striped:!1}},X={render:function(r,o){const{striped:i,colDividers:a,rowDividers:c}=r,n=o.globals.locale||"en",s=l.useRef(null),d=l.useRef(null),[m]=l.useState(["id","name","age","status","city"]),[u,f]=l.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:T,onResizeCommit:j}=je(s,d,u,f),{selected:R,setSelected:x,isAllSelected:w,isSomeSelected:N,toggle:q,toggleAll:I}=_e(B[n],{key:"id"}),y=l.useCallback(()=>{x([])},[]);return e.jsxs(U,{ref:s,columns:u,children:[e.jsxs(Y,{colDividers:a,sticky:0,children:[e.jsxs(V,{children:[e.jsx(p,{padding:"checkbox",children:e.jsx(J,{checked:w,color:"secondary",indeterminate:N,inputProps:{"aria-label":w?"Unselect all":"Select all"},onChange:()=>I()})}),e.jsx(p,{colSpan:3,onResize:T(1,3),onResizeCommit:j(1,3),children:n==="en"?"Group 1":"Группа 1"}),e.jsx(p,{colSpan:2,onResize:T(4,2),onResizeCommit:j(4,2),children:n==="en"?"Group 2":"Группа 2"}),e.jsx(p,{padding:"none"}),e.jsx(p,{})]}),e.jsxs(V,{ref:d,children:[e.jsx(p,{padding:"checkbox"}),m.map((v,_)=>e.jsx(p,{minWidth:v==="name"?130:90,onResize:T(_+1),onResizeCommit:j(_+1),children:e.jsx(g,{children:L[n][v]})},v)),e.jsx(p,{padding:"none"}),e.jsx(p,{})]})]}),e.jsx(K,{colDividers:a,rowDividers:c,striped:i,children:B[n].map(v=>{const _=R.indexOf(v.id)!==-1,z=`story-usage-checkbox-${v.id}`;return e.jsxs(V,{hover:!0,selected:_,tabIndex:0,children:[e.jsx(p,{overlap:!0,padding:"checkbox",children:e.jsx(J,{checked:_,color:"secondary",inputProps:{"aria-labelledby":z},onChange:()=>q(v.id)})}),e.jsx(p,{children:e.jsx(g,{children:v.id})}),e.jsx(p,{id:z,children:e.jsx(le,{avatar:e.jsx(Ne,{alt:"John Sharp",src:"./avatar/6.png"}),primary:e.jsx(g,{children:v.name}),secondary:e.jsx(g,{children:v.city})})}),m.map(k=>k!=="name"&&k!=="id"&&e.jsx(p,{children:e.jsx(g,{children:v[k]})},k)),e.jsx(p,{padding:"none"}),e.jsx(p,{overlap:!0,align:"flex-end",children:e.jsx(M,{rounded:!0,"aria-label":n==="en"?"More":"Ещё",children:e.jsx(be,{})})})]},v.id)})}),e.jsxs(ee,{sticky:0,children:[!!R.length&&e.jsxs(Q,{count:R.length,label:n==="en"?"Selected":"Выбрано",style:{borderBottom:"1px solid var(--es-mono-a-a100)"},children:[e.jsx(M,{"aria-label":n==="en"?"Edit":"Редактировать",children:e.jsx(he,{})}),e.jsx(xe,{flexItem:!0,orientation:"vertical"}),e.jsx(M,{"aria-label":n==="en"?"Unselect all":"Снять всё выделение",onClick:y,children:e.jsx(ye,{})})]}),e.jsx(Z,{}),e.jsxs(ge,{count:100,itemsPerPage:10,page:1,style:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[e.jsx(Te,{}),e.jsx(ve,{boundaryCount:0,siblingCount:0})]})]})]})}},F={render:function(r,o){const{striped:i,colDividers:a,rowDividers:c}=r,n=o.globals.locale||"en",s=l.useRef(null),d=l.useRef(null),[m,u]=l.useState(["checkbox"]),[f,T]=l.useState(["menu"]),[j,R]=l.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:x,onResizeCommit:w}=je(s,d,j,R),{selected:N,setSelected:q,isAllSelected:I,isSomeSelected:y,toggle:v,toggleAll:_}=_e(B[n],{key:"id"}),z=()=>{q([])},k=b=>P=>{const{target:{value:D}}=P;b==="left"&&(T(H=>H.filter(O=>!D.includes(O))),u(D)),b==="right"&&(u(H=>H.filter(O=>!D.includes(O))),T(D))},h=b=>{if(m.includes(b))return"left";if(f.includes(b))return"right"};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-16 mb-16",style:{maxWidth:"850px"},children:[e.jsx(ne,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:n==="en"?"Pin left":"Закрепить слева",size:"40",value:m,onChange:k("left"),children:Object.entries(L[n]).map(([b,P])=>e.jsx(ae,{value:b,children:P},b))}),e.jsx(ne,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:n==="en"?"Pin right":"Закрепить справа",size:"40",value:f,onChange:k("right"),children:Object.entries(L[n]).map(([b,P])=>e.jsx(ae,{value:b,children:P},b))})]}),e.jsxs(U,{ref:s,columns:j,children:[e.jsx(Y,{colDividers:a,sticky:0,children:e.jsxs(V,{ref:d,children:[e.jsx(p,{padding:"checkbox",pin:h("checkbox"),children:e.jsx(J,{checked:I,color:"secondary",indeterminate:y,inputProps:{"aria-label":I?"Unselect all":"Select all"},onChange:()=>_()})}),e.jsx(p,{minWidth:100,pin:h("id"),onResize:x(1),onResizeCommit:w(1),children:e.jsx(g,{children:L[n].id})}),e.jsx(p,{minWidth:100,pin:h("name"),onResize:x(2),onResizeCommit:w(2),children:e.jsx(g,{children:L[n].name})}),e.jsx(p,{minWidth:100,pin:h("status"),onResize:x(3),onResizeCommit:w(3),children:e.jsx(g,{children:L[n].status})}),e.jsx(p,{minWidth:100,pin:h("age"),onResize:x(4),onResizeCommit:w(4),children:e.jsx(g,{children:L[n].age})}),e.jsx(p,{minWidth:100,pin:h("city"),onResize:x(5),onResizeCommit:w(5),children:e.jsx(g,{children:L[n].city})}),e.jsx(p,{padding:"none",pin:h("city")}),e.jsx(p,{pin:h("menu")})]})}),e.jsx(K,{colDividers:a,rowDividers:c,striped:i,children:B[n].map(b=>{const P=N.indexOf(b.id)!==-1,D=`story-usage-checkbox-${b.id}`;return e.jsxs(V,{hover:!1,selected:P,children:[e.jsx(p,{overlap:!0,padding:"checkbox",pin:h("checkbox"),children:e.jsx(J,{checked:P,color:"secondary",inputProps:{"aria-labelledby":D},onChange:()=>v(b.id)})}),e.jsx(p,{pin:h("id"),children:e.jsx(g,{children:b.id})}),e.jsx(p,{id:D,pin:h("name"),children:e.jsx(g,{children:b.name})}),e.jsx(p,{pin:h("status"),children:e.jsx(g,{children:b.status})}),e.jsx(p,{pin:h("age"),children:e.jsx(g,{children:b.age})}),e.jsx(p,{pin:h("city"),children:e.jsx(g,{children:b.city})}),e.jsx(p,{padding:"none",pin:h("city")}),e.jsx(p,{overlap:!0,align:"flex-end",pin:h("menu"),children:e.jsx(M,{rounded:!0,"aria-label":n==="en"?"More":"Ещё",children:e.jsx(be,{})})})]},b.id)})}),e.jsxs(ee,{sticky:0,children:[!!N.length&&e.jsxs(Q,{count:N.length,label:n==="en"?"Selected":"Выбрано",style:{borderBottom:"1px solid var(--es-mono-a-a100)"},children:[e.jsx(M,{"aria-label":n==="en"?"Edit":"Редактировать",children:e.jsx(he,{})}),e.jsx(xe,{flexItem:!0,orientation:"vertical"}),e.jsx(M,{"aria-label":n==="en"?"Unselect all":"Снять всё выделение",onClick:z,children:e.jsx(ye,{})})]}),e.jsx(Z,{}),e.jsxs(ge,{count:100,itemsPerPage:10,page:1,style:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[e.jsx(Te,{}),e.jsx(ve,{boundaryCount:0,siblingCount:0})]})]})]})]})}};var oe,re,se;X.parameters={...X.parameters,docs:{...(oe=X.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
                    <IconDotsVerticalLineW500 />
                  </Button>
                </TableCell>
              </TableRow>;
        })}
        </TableBody>
        <TableFoot sticky={0}>
          {!!selected.length && <TableActions count={selected.length} label={locale === 'en' ? 'Selected' : 'Выбрано'} style={{
          borderBottom: '1px solid var(--es-mono-a-a100)'
        }}>
              <Button aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                <IconPencilLineW500 />
              </Button>
              <Divider flexItem orientation="vertical" />
              <Button aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                <IconCloseLineW600 />
              </Button>
            </TableActions>}
          <TableScrollbar />
          <Pagination count={100} itemsPerPage={10} page={1} style={{
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
}`,...(se=(re=X.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ce,de,ue,me,pe;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    return <div>
        <div className="flex flex-col sm:flex-row gap-16 mb-16" style={{
        maxWidth: '850px'
      }}>
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
        </div>
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
                      <IconDotsVerticalLineW500 />
                    </Button>
                  </TableCell>
                </TableRow>;
          })}
          </TableBody>
          <TableFoot sticky={0}>
            {!!selected.length && <TableActions count={selected.length} label={locale === 'en' ? 'Selected' : 'Выбрано'} style={{
            borderBottom: '1px solid var(--es-mono-a-a100)'
          }}>
                <Button aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                  <IconPencilLineW500 />
                </Button>
                <Divider flexItem orientation="vertical" />
                <Button aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                  <IconCloseLineW600 />
                </Button>
              </TableActions>}
            <TableScrollbar />
            <Pagination count={100} itemsPerPage={10} page={1} style={{
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
      </div>;
  }
}`,...(ue=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:`Pinned (or frozen, locked, or sticky) columns are columns that are visible at all time while the user scrolls the data grid horizontally. They can be pinned either to the left or right side.

You may encounter issues if the sum of the widths of the pinned columns is larger than the width of the table. Make sure
that the table can accommodate properly, at least, these columns.`,...(pe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};const sl=["Demo","ColumnPinning"];export{F as ColumnPinning,X as Demo,sl as __namedExportsOrder,rl as default};
