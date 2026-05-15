import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-Wm5baAvf.js";import{c as R}from"./clsx.m-C7bORDfW.js";import{u as te}from"./useLatest-C1UtP6al.js";import{u as N}from"./DefaultPropsProvider-BaGbio7E.js";import{u as O}from"./useForkRef-EzStQRfh.js";import{u as we}from"./useIntersectionObserver-CywOKxjJ.js";import{I as Ge,a as Ee}from"./IconPencilLineW500-DR4ZtRFe.js";import{I as Je}from"./IconCheckLineW400-RByMWKro.js";import{I as Ye}from"./IconCloseLineW350-DBtToHzq.js";import{B as q}from"./Button-BRu9apcn.js";import{C as le}from"./Checkbox-DnCq8MIY.js";import{T as Ze}from"./TooltipEllipsis-7nwxx9vX.js";import{A as Qe}from"./Avatar-CovLsepL.js";import{I as _e}from"./IconDotsVerticalLineW500-DznRteI_.js";import{D as ke}from"./Divider-BKuyIAQ4.js";import{I as Pe}from"./IconCloseLineW600-DJYrcAqu.js";import{P as Ne,a as ze,b as Ae}from"./PaginationRange-CqVvOmOG.js";import{T as be}from"./TextField-BE5m1Jj6.js";import{M as he}from"./MenuItem-DrDY2G9B.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SvgIcon-Bb8ef9Tm.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SwitchBase-CeEjr7S8.js";import"./useControlled-CibYmksV.js";import"./useFormControl-B4OjCVsv.js";import"./useResizeObserver-C6sKC9YN.js";import"./Tooltip-CWEZrURX.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./IconChevronLeftLineW400-BnYMLcPa.js";import"./IconChevronRightLineW400-_L_kWYUC.js";import"./IconDotsHorizontalLineW100-C4fFGOjv.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./IconMenuDownFillW300-BYpUa_Jj.js";import"./Menu-D1WsZbsN.js";import"./clsx-B-dksMZM.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-pQd8fEAo.js";import"./Popover-D33wSAFU.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./MenuList-CymzI1Pn.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./FormHelperText-DKtzwqKg.js";const et=(...t)=>{const r=l.useRef(0),o=te(a=>{if(r.current>0){r.current-=1;return}r.current=t.length-1;const n=t.filter(i=>i.current!==a.target),c=a.target.scrollLeft;requestAnimationFrame(()=>{n.forEach(i=>{i.current&&(i.current.scrollLeft=c)})})});l.useLayoutEffect(()=>{const a=n=>{o.current(n)};return t.forEach(n=>{n.current&&n.current.addEventListener("scroll",a)}),()=>{t.forEach(n=>{n.current&&n.current.removeEventListener("scroll",a)})}},t.map(a=>a.current))},De=l.createContext(null),tt=()=>{const t=l.useContext(De);if(t===null)throw new Error("No provider for TableContext.");return t},Ie=l.createContext(null),lt=()=>{const t=l.useContext(Ie);if(t===null)throw new Error("No provider for TableBodyContext.");return t},se=l.createContext(null),nt=()=>{const t=l.useContext(se);if(t===null)throw new Error("Not provider for TableCellContext.");return t},at={ArrowLeft:-16,ArrowRight:16},it=t=>{t.preventDefault()},ot=t=>{t.stopPropagation()},m=l.memo(l.forwardRef(function(r,o){const a=nt(),{children:n,className:c,style:i,variant:s=a.variant,rowDivider:d=a.rowDividers,colDivider:u=a.colDividers,padding:p="normal",align:f="flex-start",id:S,onResize:_,onResizeCommit:j,colSpan:y,minWidth:w,pin:P,error:z,overlap:M,editable:A,onEdit:H,onEditAccept:F,onEditCancel:g,inputComponent:D="input",inputProps:b,inputRef:h,iconEdit:T=e.jsx(Ge,{}),iconEditAccept:k=e.jsx(Je,{container:!0,containerSize:"20px"}),iconEditCancel:U=e.jsx(Ye,{container:!0,containerSize:"20px"}),labelResize:X,labelEditAccept:He,labelEditCancel:Be}=N({props:r,name:"ESTableCell"}),E=l.useRef(null),We=O(E,o),K=l.useRef(null),[Y,pe]=l.useState(!1),Z=te(_),Q=te(j),Oe=te(x=>{if(Z.current&&E.current){if(K.current!==null){const C=Math.max(w||0,E.current.getBoundingClientRect().width+(x.screenX-K.current));Z.current(C,E.current)}K.current=x.screenX}}),Fe=x=>{K.current=x.screenX,pe(!0)},$e=x=>{const C=at[x.key];if(Z.current&&E.current&&C){x.preventDefault();const L=Math.max(w||0,E.current.getBoundingClientRect().width+(x.shiftKey?C*3:C));Z.current(L,E.current)}},Ue=x=>{(x.key==="ArrowLeft"||x.key==="ArrowRight")&&Q.current&&E.current&&Q.current(E.current.getBoundingClientRect().width,E.current)},[B,ce]=l.useState(!1),I=l.useRef(null),Xe=O(I,h),de=()=>{F&&I.current&&F(I.current),ce(!1)},ue=()=>{g&&I.current&&g(I.current),ce(!1)},fe=x=>{(M||A)&&x.stopPropagation(),A&&(B||(ce(!0),H==null||H()),requestAnimationFrame(()=>{var C,L;I.current&&((L=(C=I.current).focus)==null||L.call(C))}))};return l.useEffect(()=>{if(Y){const x=Ke=>{Oe.current(Ke)},C=()=>{K.current=null,pe(!1),Q.current&&E.current&&Q.current(E.current.getBoundingClientRect().width,E.current)},L=document.createElement("STYLE");return L.textContent="* { cursor: col-resize !important; } .es-table-cell__resize::after { display: none; }",document.addEventListener("mousemove",x),document.addEventListener("mouseup",C),document.head.appendChild(L),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",C),document.head.removeChild(L)}}},[Y]),e.jsxs("div",{ref:We,className:R("es-table-cell",`es-table-cell--variant--${s}`,`es-table-cell--padding--${p}`,P&&`es-table-cell--pin--${P}`,z&&"es-table-cell--error",M&&"es-table-cell--overlap",A&&"es-table-cell--editable",B&&"es-table-cell--editing",Y&&"es-table-cell--resizing",d&&"es-table-cell--row-divider",u&&"es-table-cell--col-divider",s==="body"?"body100":"caption",c),"data-minwidth":w,id:S,role:s==="head"?"columnheader":"cell",style:{"--es-table-cell-col-span":y,...i},onBlur:x=>{var C;(C=E.current)!=null&&C.contains(x.relatedTarget)||(z?ue():de())},onClick:fe,children:[A&&e.jsx("a",{className:"es-table-cell__edit-enter-link",tabIndex:B?-1:0,onFocus:fe,children:e.jsx("span",{})}),e.jsx("div",{className:"es-table-cell__wrapper",onMouseDown:x=>{B&&x.target!==I.current&&x.preventDefault()},children:e.jsxs("div",{className:"es-table-cell__container",children:[e.jsx("div",{className:R("es-table-cell__content",`es-table-cell__content--align--${f}`),children:B?e.jsx(D,{...b,ref:Xe,className:R("es-table-cell__input",`es-table-cell__input--align--${f}`,b==null?void 0:b.className),onKeyDown:x=>{var C;(C=b==null?void 0:b.onKeyDown)==null||C.call(b,x),!x.defaultPrevented&&(x.key==="Enter"&&!z&&de(),x.key==="Escape"&&ue())}}):n}),!!_&&e.jsx("button",{"aria-label":X,className:R("es-table-cell__resize",Y&&"es-table-cell__resize--resizing"),onKeyDown:$e,onKeyUp:Ue,onMouseDown:Fe})]})}),A&&!B&&e.jsx("div",{className:R("es-table-cell__edit-icon",`es-table-cell__edit-icon--align--${f}`),children:T}),B&&e.jsxs("div",{className:"es-table-cell__buttons",onClick:ot,onMouseDown:it,children:[e.jsx(q,{"aria-label":He,color:"success",disabled:z,size:"300",variant:"text",onClick:de,children:k}),e.jsx(q,{"aria-label":Be,color:"tertiary",size:"300",variant:"text",onClick:ue,children:U})]})]})}));try{m.displayName="TableCell",m.__docgenInfo={description:"",displayName:"TableCell",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"The id attribute passed to root element.",name:"id",required:!1,type:{name:"string"}},onResize:{defaultValue:null,description:"Callback function that is fired when the cell's width changed.",name:"onResize",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},align:{defaultValue:{value:"'flex-start'"},description:"Set the text-align on the table cell content.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},colSpan:{defaultValue:null,description:"A non-negative integer value that indicates for how many columns the cell extends.",name:"colSpan",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"head"'}]}},error:{defaultValue:null,description:"Indicate if component is in error state.",name:"error",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"Attributes applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},minWidth:{defaultValue:{value:"0"},description:"The minimum width of the cell for manual resizing.",name:"minWidth",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"'normal'"},description:"The padding applied to the cell.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"none"'},{value:'"normal"'}]}},inputComponent:{defaultValue:{value:"'input'"},description:"The component used for the `input` element.\nEither a string to use a HTML element or a component.",name:"inputComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},rowDivider:{defaultValue:{value:"false"},description:"If `true`, the table row divider is shown.",name:"rowDivider",required:!1,type:{name:"boolean"}},colDivider:{defaultValue:{value:"false"},description:"If `true`, the table col divider is shown.",name:"colDivider",required:!1,type:{name:"boolean"}},pin:{defaultValue:null,description:"Pin the cell to the left or right side.",name:"pin",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},overlap:{defaultValue:null,description:"If true, the table cell will overlap it's row.",name:"overlap",required:!1,type:{name:"boolean"}},editable:{defaultValue:null,description:"If true, the table cell is editable.",name:"editable",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:null,description:"Callback fired when user starts cell editing.",name:"onEdit",required:!1,type:{name:"(() => void)"}},onEditAccept:{defaultValue:null,description:"Callback fired when user accepts cell editing.",name:"onEditAccept",required:!1,type:{name:"((input: HTMLInputElement) => void)"}},onEditCancel:{defaultValue:null,description:"Callback fired when user cancels cell editing.",name:"onEditCancel",required:!1,type:{name:"((input: HTMLInputElement) => void)"}},onResizeCommit:{defaultValue:null,description:"Callback function that is fired when the cell's width finished changing.",name:"onResizeCommit",required:!1,type:{name:"((width: number, element: HTMLElement) => void)"}},iconEdit:{defaultValue:null,description:"Icon for the edit hint.",name:"iconEdit",required:!1,type:{name:"ReactNode"}},iconEditAccept:{defaultValue:null,description:"Icon for the edit accept button.",name:"iconEditAccept",required:!1,type:{name:"ReactNode"}},iconEditCancel:{defaultValue:null,description:"Icon for the edit cancel button.",name:"iconEditCancel",required:!1,type:{name:"ReactNode"}},labelResize:{defaultValue:null,description:"Text for the resize button aria-label.",name:"labelResize",required:!1,type:{name:"string"}},labelEditAccept:{defaultValue:null,description:"Text for the edit accept button aria-label.",name:"labelEditAccept",required:!1,type:{name:"string"}},labelEditCancel:{defaultValue:null,description:"Text for the edit cancel button aria-label.",name:"labelEditCancel",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const rt={variant:"body"},ne=l.memo(l.forwardRef(function(r,o){const{children:a,className:n,style:c,rowDividers:i=!0,colDividers:s=!1,striped:d}=N({props:r,name:"ESTableBody"}),{setRef:u}=lt(),p=O(u,o),f=l.useMemo(()=>({...rt,rowDividers:i,colDividers:s}),[i,s]);return e.jsx(se.Provider,{value:f,children:e.jsx("div",{ref:p,className:R("es-table-body",d&&"es-table-body--striped",n),role:"rowgroup",style:c,children:e.jsx("div",{className:"es-table-body__container",children:a})})})}));try{ne.displayName="TableBody",ne.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"If `true`, the table has zebra-striping variant.",name:"striped",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Le=l.createContext(null),st=()=>{const t=l.useContext(Le);if(t===null)throw new Error("No provider for TableHeadContext.");return t},ct={variant:"head"},ae=l.memo(l.forwardRef(function(r,o){const{children:a,className:n,sticky:c,style:i,rowDividers:s=!0,colDividers:d=!1}=N({props:r,name:"ESTableHead"}),[u,p]=l.useState(!1),{ref:f,setRef:S}=st(),_=O(S,o);we({current:f},y=>{p(y[0].intersectionRatio<1)},{threshold:[1],rootMargin:`-${(c||0)+1}px 0px 0px`});const j=l.useMemo(()=>({...ct,rowDividers:s,colDividers:d}),[s,d]);return e.jsx(se.Provider,{value:j,children:e.jsx("div",{ref:_,className:R("es-table-head",c!==void 0&&"es-table-head--sticky",c!==void 0&&u&&"es-table-head--stuck",n),role:"rowgroup",style:{"--es-table-head-top":c===void 0?void 0:`${c||0}px`,...i},children:e.jsx("div",{className:"es-table-head__container",children:a})})})}));try{ae.displayName="TableHead",ae.__docgenInfo={description:"",displayName:"TableHead",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},rowDividers:{defaultValue:{value:"true"},description:"If `true`, the table row dividers are shown.",name:"rowDividers",required:!1,type:{name:"boolean"}},colDividers:{defaultValue:{value:"false"},description:"If `true`, the table col dividers are shown.",name:"colDividers",required:!1,type:{name:"boolean"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const Ve=l.createContext(null),dt=()=>{const t=l.useContext(Ve);if(t===null)throw new Error("No provider for TableScrollbarContext.");return t},ie=l.memo(l.forwardRef(function(r,o){const{className:a,style:n}=N({props:r,name:"ESTableScrollbar"}),{width:c,setRef:i}=dt(),s=O(i,o);return e.jsx("div",{ref:s,className:R("es-table-scrollbar","scrollbar-thin-mono-a",a),style:n,children:e.jsx("div",{style:{width:`${c}px`,height:"1px"}})})}));try{ie.displayName="TableScrollbar",ie.__docgenInfo={description:"",displayName:"TableScrollbar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const ut=()=>{const[t,r]=l.useState(null),[o,a]=l.useState(null),[n,c]=l.useState(null),[i,s]=l.useState(0),d=l.useMemo(()=>({ref:t,setRef:r}),[t]),u=l.useMemo(()=>({ref:o,setRef:a}),[o]),p=l.useMemo(()=>({width:i,setWidth:s,ref:n,setRef:c}),[n,i]);return l.useEffect(()=>{if(t){const f=new ResizeObserver(S=>{s(S[0].target.scrollWidth)});return f.observe(t.firstChild),()=>{f.disconnect()}}},[t]),et({current:t},{current:o},{current:n}),{bodyContextValue:d,headContextValue:u,scrollbarContextValue:p}},xe=(t,r)=>{let o=0;if(t){if(r==="left"){let a=t.previousElementSibling;for(;a;)a.classList.contains("es-table-cell--pin--left")&&(o+=a.clientWidth),a=a.previousElementSibling}if(r==="right"){let a=t.nextElementSibling;for(;a;)a.classList.contains("es-table-cell--pin--right")&&(o+=a.clientWidth),a=a.nextElementSibling}}return`${o}px`},mt=t=>{l.useEffect(()=>{if(t.current){const r=new ResizeObserver(()=>{t.current&&(t.current.querySelectorAll(".es-table-cell--pin--left").forEach(n=>{n.style.left=xe(n,"left")}),t.current.querySelectorAll(".es-table-cell--pin--right").forEach(n=>{n.style.right=xe(n,"right")}))}),o=()=>{t.current&&t.current.querySelectorAll(".es-table-cell--pin--left, .es-table-cell--pin--right").forEach(n=>{r.observe(n)})},a=new MutationObserver(()=>{r.disconnect(),t.current&&(t.current.querySelectorAll(".es-table-cell").forEach(n=>{n.style.removeProperty("left"),n.style.removeProperty("right")}),o())});return t.current.querySelectorAll(".es-table-row__content").forEach(n=>{a.observe(n,{childList:!0})}),t.current.querySelectorAll(".es-table-cell").forEach(n=>{a.observe(n,{attributeFilter:["class"]})}),o(),()=>{r.disconnect(),a.disconnect()}}},[])},pt={variant:"body"},J=l.memo(l.forwardRef(function(r,o){const{children:a,className:n,columns:c,style:i}=N({props:r,name:"ESTable"}),s=l.useRef(null),d=O(s,o),u=l.useMemo(()=>({columns:c}),[c]),{bodyContextValue:p,headContextValue:f,scrollbarContextValue:S}=ut();return mt(s),e.jsx(De.Provider,{value:u,children:e.jsx(se.Provider,{value:pt,children:e.jsx(Ie.Provider,{value:p,children:e.jsx(Le.Provider,{value:f,children:e.jsx(Ve.Provider,{value:S,children:e.jsx("div",{ref:d,className:R("es-table",n),role:"table",style:i,children:a})})})})})})}));try{J.displayName="Table",J.__docgenInfo={description:"Tables display information in a way that's easy to scan, so that users can look for patterns and insights.",displayName:"Table",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},columns:{defaultValue:null,description:"The width of the columns.",name:"columns",required:!0,type:{name:"string[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const oe=l.memo(l.forwardRef(function(r,o){const{className:a,style:n,label:c,count:i,children:s}=N({props:r,name:"ESTableActions"});return e.jsxs("div",{ref:o,className:R("es-table-actions",a),style:n,children:[e.jsxs("div",{className:"es-table-actions__text body200",children:[c," ",i]}),e.jsx("div",{className:"es-table-actions__children",children:s})]})}));try{oe.displayName="TableActions",oe.__docgenInfo={description:"This component displays actions for the selected table rows.",displayName:"TableActions",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Customize the selected rows count label.",name:"label",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"The number of selected rows.",name:"count",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const re=l.memo(l.forwardRef(function(r,o){const{children:a,className:n,sticky:c,style:i}=N({props:r,name:"ESTableFoot"}),[s,d]=l.useState(!1),u=l.useRef(null),p=O(u,o);return we(u,f=>{d(f[0].intersectionRatio<1)},{threshold:[1],rootMargin:`0px 0px -${(c||0)+1}px`}),e.jsx("div",{ref:p,className:R("es-table-foot",c!==void 0&&"es-table-foot--sticky",c!==void 0&&s&&"es-table-foot--stuck",n),style:{"--es-table-foot-bottom":c===void 0?void 0:`${c||0}px`,...i},children:a})}));try{re.displayName="TableFoot",re.__docgenInfo={description:"",displayName:"TableFoot",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},sticky:{defaultValue:null,description:"If present, makes element sticky and specifies a threshold for sticky positioning.",name:"sticky",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const me=l.forwardRef(function(r,o){const{className:a,style:n,avatar:c,primary:i,secondary:s}=N({props:r,name:"ESTableItem"});return e.jsxs("div",{ref:o,className:R("es-table-item",a),style:n,children:[c,e.jsxs("div",{className:"es-table-item__content",children:[!!i&&e.jsx("div",{className:"es-table-item__primary body100",children:i}),!!s&&e.jsx("div",{className:"es-table-item__secondary caption",children:s})]})]})});try{me.displayName="TableItem",me.__docgenInfo={description:"",displayName:"TableItem",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},avatar:{defaultValue:null,description:"The avatar to display.",name:"avatar",required:!1,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"The primary text  to display.",name:"primary",required:!1,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"The secondary text to display.",name:"secondary",required:!1,type:{name:"ReactNode"}}}}}catch{}const W=l.memo(l.forwardRef(function(r,o){const{component:a="div",children:n,className:c,style:i,selected:s,hover:d,...u}=N({props:r,name:"ESTableRow"}),{columns:p}=tt();return e.jsx("div",{className:R("es-table-row",s&&"es-table-row--selected",d&&"es-table-row--hover",c),style:i,children:e.jsx(a,{ref:o,className:R("es-table-row__content",d&&"es-table-row__content--hover"),role:"row",style:{gridTemplateColumns:p.join(" ")},...u,children:n})})}));try{W.displayName="TableRow",W.__docgenInfo={description:"",displayName:"TableRow",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},hover:{defaultValue:null,description:"If true, the table row will shade on hover.",name:"hover",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"If true, the table row will have the selected shading.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const v=l.memo(l.forwardRef(function(r,o){var d,u,p;const{children:a,className:n,style:c,tooltip:i=!0,TooltipProps:s}=N({props:r,name:"ESTableText"});return i?e.jsx(Ze,{arrow:!0,disableInteractive:!0,placement:"top",title:a||!1,...s,slotProps:{...s==null?void 0:s.slotProps,popper:{...(d=s==null?void 0:s.slotProps)==null?void 0:d.popper,className:R("es-table-text__tooltip",(p=(u=s==null?void 0:s.slotProps)==null?void 0:u.popper)==null?void 0:p.className)}},children:({ref:f})=>e.jsx("div",{ref:f,className:R("es-table-text",n),style:c,children:a})}):e.jsx("div",{ref:o,className:R("es-table-text",n),style:c,children:a})}));try{v.displayName="TableText",v.__docgenInfo={description:"",displayName:"TableText",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},tooltip:{defaultValue:{value:"true"},description:"If true, shows the tooltip when text is truncated.",name:"tooltip",required:!1,type:{name:"boolean"}},TooltipProps:{defaultValue:null,description:"Props applied to the Tooltip component.",name:"TooltipProps",required:!1,type:{name:'Omit<TooltipEllipsisProps, "children">'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const qe=(t,r,o,a)=>({onResize:(i,s=1)=>(d,u)=>{if(t.current&&r.current){const p=t.current.querySelectorAll(".es-table-row__content,.es-table-row__overlap"),f=o.slice(),S=Array.from(r.current.querySelectorAll(".es-table-cell")),_=u.getBoundingClientRect().width;S.forEach((j,y)=>{if(y<i)f[y]=`${j.clientWidth}px`;else if(y>=i&&y<i+s){const w=j.getBoundingClientRect().width,P=+(j.dataset.minwidth||0);f[y]=`${Math.max(P,d*(w/_))}px`}}),p.forEach(j=>{j.style.gridTemplateColumns=f.join(" ")})}},onResizeCommit:(i,s=1)=>()=>{if(r.current){const d=o.slice();Array.from(r.current.querySelectorAll(".es-table-cell")).forEach((u,p)=>{p<i+s&&(d[p]=`${u.getBoundingClientRect().width}px`)}),a(d)}}}),Me=(t,r)=>{const[o,a]=l.useState(r.initialState||[]),n=l.useMemo(()=>t.every(d=>o.includes(d[r.key])),[t,o,r.key]),c=l.useMemo(()=>t.some(d=>o.includes(d[r.key]))&&!n,[t,o,n,r.key]),i=l.useCallback((d,u)=>{const p=o.indexOf(d);if(u??p===-1)a(o.concat(d));else{const f=o.slice();f.splice(p,1),a(f)}},[o]),s=l.useCallback(d=>{if(t){let u=o.filter(p=>!t.find(f=>f[r.key]===p));(d??!n)&&(u=u.concat(t.map(p=>p[r.key]))),a(u)}},[t,o,n,r.key]);return{selected:o,setSelected:a,isAllSelected:n,isSomeSelected:c,toggle:i,toggleAll:s}},$={en:[],ru:[]},V={en:{checkbox:"Checkbox",id:"ID",name:"Name",age:"Age",status:"Status",city:"City",menu:"Menu"},ru:{checkbox:"Чекбокс",id:"ID",name:"ФИО",age:"Возраст",status:"Статус",city:"Город",menu:"Меню"}};for(let t=0;t<50;t++)$.en.push({id:t+1,name:"John Doe",age:25,status:"Active",city:"New York City"}),$.ru.push({id:t+1,name:"Иванов Иван Иванович",age:25,status:"Активен",city:"Иваново"});const Dl={tags:["autodocs"],component:J,parameters:{references:["Table","TableActions","TableBody","TableCell","TableFoot","TableHead","TableItem","TableRow","TableScrollbar","TableText"]},argTypes:{columns:{table:{disable:!0}}},args:{rowDividers:!0,colDividers:!1,striped:!1}},ft=({value:t,onEditAccept:r})=>{const[o,a]=l.useState(t.toString());return e.jsx(m,{editable:!0,align:"flex-end",error:!o||!Number.isInteger(+o)||+o>150,inputProps:{inputMode:"numeric",value:o,onChange:n=>{a(n.target.value)}},onEdit:()=>{a(t.toString())},onEditAccept:n=>{r(+n.value)},onEditCancel:()=>{a(t.toString())},children:e.jsx(v,{children:t})})},ee={render:function(r,o){const{striped:a,colDividers:n,rowDividers:c}=r,i=o.globals.locale||"en",s=l.useRef(null),d=l.useRef(null),[u,p]=l.useState($),[f]=l.useState(["id","name","age","status","city"]),[S,_]=l.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:j,onResizeCommit:y}=qe(s,d,S,_),{selected:w,setSelected:P,isAllSelected:z,isSomeSelected:M,toggle:A,toggleAll:H}=Me($[i],{key:"id"}),F=l.useCallback(()=>{P([])},[]);return e.jsxs(J,{ref:s,columns:S,children:[e.jsxs(ae,{colDividers:n,sticky:0,children:[e.jsxs(W,{children:[e.jsx(m,{padding:"checkbox",children:e.jsx(le,{checked:z,color:"secondary",indeterminate:M,inputProps:{"aria-label":z?"Unselect all":"Select all"},onChange:()=>H()})}),e.jsx(m,{colSpan:3,onResize:j(1,3),onResizeCommit:y(1,3),children:i==="en"?"Group 1":"Группа 1"}),e.jsx(m,{colSpan:2,onResize:j(4,2),onResizeCommit:y(4,2),children:i==="en"?"Group 2":"Группа 2"}),e.jsx(m,{padding:"none"}),e.jsx(m,{})]}),e.jsxs(W,{ref:d,children:[e.jsx(m,{padding:"checkbox"}),f.map((g,D)=>e.jsx(m,{align:g==="age"?"flex-end":"flex-start",minWidth:g==="name"?130:90,onResize:j(D+1),onResizeCommit:y(D+1),children:e.jsx(v,{children:V[i][g]})},g)),e.jsx(m,{padding:"none"}),e.jsx(m,{})]})]}),e.jsx(ne,{colDividers:n,rowDividers:c,striped:a,children:u[i].map((g,D)=>{const b=w.indexOf(g.id)!==-1,h=`story-usage-checkbox-${g.id}`;return e.jsxs(W,{hover:!0,selected:b,tabIndex:0,children:[e.jsx(m,{overlap:!0,padding:"checkbox",children:e.jsx(le,{checked:b,color:"secondary",inputProps:{"aria-labelledby":h},onChange:()=>A(g.id)})}),e.jsx(m,{children:e.jsx(v,{children:g.id})}),e.jsx(m,{id:h,children:e.jsx(me,{avatar:e.jsx(Qe,{alt:"John Sharp",src:"./avatar/6.png"}),primary:e.jsx(v,{children:g.name}),secondary:e.jsx(v,{children:g.city})})}),f.map(T=>T!=="name"&&T!=="id"&&(T==="age"?e.jsx(ft,{value:g[T],onEditAccept:k=>{u[i][D][T]=k,p({...u})}},T):e.jsx(m,{children:e.jsx(v,{children:g[T]})},T))),e.jsx(m,{padding:"none"}),e.jsx(m,{overlap:!0,align:"flex-end",children:e.jsx(q,{rounded:!0,"aria-label":i==="en"?"More":"Ещё",children:e.jsx(_e,{})})})]},g.id)})}),e.jsxs(re,{sticky:0,children:[!!w.length&&e.jsxs(oe,{count:w.length,label:i==="en"?"Selected":"Выбрано",style:{borderBottom:"1px solid var(--es-mono-a-a100)"},children:[e.jsx(q,{"aria-label":i==="en"?"Edit":"Редактировать",children:e.jsx(Ee,{})}),e.jsx(ke,{flexItem:!0,orientation:"vertical"}),e.jsx(q,{"aria-label":i==="en"?"Unselect all":"Снять всё выделение",onClick:F,children:e.jsx(Pe,{})})]}),e.jsx(ie,{}),e.jsxs(Ne,{count:100,itemsPerPage:10,page:1,style:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[e.jsx(ze,{}),e.jsx(Ae,{boundaryCount:0,siblingCount:0})]})]})]})}},G={render:function(r,o){const{striped:a,colDividers:n,rowDividers:c}=r,i=o.globals.locale||"en",s=l.useRef(null),d=l.useRef(null),[u,p]=l.useState(["checkbox"]),[f,S]=l.useState(["menu"]),[_,j]=l.useState(["56px","minmax(50px, 1fr)","minmax(150px, 2fr)","150px","minmax(100px, 2fr)","minmax(100px, 1fr)","minmax(0px, auto)","72px"]),{onResize:y,onResizeCommit:w}=qe(s,d,_,j),{selected:P,setSelected:z,isAllSelected:M,isSomeSelected:A,toggle:H,toggleAll:F}=Me($[i],{key:"id"}),g=()=>{z([])},D=h=>T=>{const{target:{value:k}}=T;h==="left"&&(S(U=>U.filter(X=>!k.includes(X))),p(k)),h==="right"&&(p(U=>U.filter(X=>!k.includes(X))),S(k))},b=h=>{if(u.includes(h))return"left";if(f.includes(h))return"right"};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-16 mb-16",style:{maxWidth:"850px"},children:[e.jsx(be,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:i==="en"?"Pin left":"Закрепить слева",size:"40",value:u,onChange:D("left"),children:Object.entries(V[i]).map(([h,T])=>e.jsx(he,{value:h,children:T},h))}),e.jsx(be,{fullWidth:!0,select:!0,SelectProps:{multiple:!0},label:i==="en"?"Pin right":"Закрепить справа",size:"40",value:f,onChange:D("right"),children:Object.entries(V[i]).map(([h,T])=>e.jsx(he,{value:h,children:T},h))})]}),e.jsxs(J,{ref:s,columns:_,children:[e.jsx(ae,{colDividers:n,sticky:0,children:e.jsxs(W,{ref:d,children:[e.jsx(m,{padding:"checkbox",pin:b("checkbox"),children:e.jsx(le,{checked:M,color:"secondary",indeterminate:A,inputProps:{"aria-label":M?"Unselect all":"Select all"},onChange:()=>F()})}),e.jsx(m,{minWidth:100,pin:b("id"),onResize:y(1),onResizeCommit:w(1),children:e.jsx(v,{children:V[i].id})}),e.jsx(m,{minWidth:100,pin:b("name"),onResize:y(2),onResizeCommit:w(2),children:e.jsx(v,{children:V[i].name})}),e.jsx(m,{minWidth:100,pin:b("status"),onResize:y(3),onResizeCommit:w(3),children:e.jsx(v,{children:V[i].status})}),e.jsx(m,{minWidth:100,pin:b("age"),onResize:y(4),onResizeCommit:w(4),children:e.jsx(v,{children:V[i].age})}),e.jsx(m,{minWidth:100,pin:b("city"),onResize:y(5),onResizeCommit:w(5),children:e.jsx(v,{children:V[i].city})}),e.jsx(m,{padding:"none",pin:b("city")}),e.jsx(m,{pin:b("menu")})]})}),e.jsx(ne,{colDividers:n,rowDividers:c,striped:a,children:$[i].map(h=>{const T=P.indexOf(h.id)!==-1,k=`story-usage-checkbox-${h.id}`;return e.jsxs(W,{hover:!1,selected:T,children:[e.jsx(m,{overlap:!0,padding:"checkbox",pin:b("checkbox"),children:e.jsx(le,{checked:T,color:"secondary",inputProps:{"aria-labelledby":k},onChange:()=>H(h.id)})}),e.jsx(m,{pin:b("id"),children:e.jsx(v,{children:h.id})}),e.jsx(m,{id:k,pin:b("name"),children:e.jsx(v,{children:h.name})}),e.jsx(m,{pin:b("status"),children:e.jsx(v,{children:h.status})}),e.jsx(m,{pin:b("age"),children:e.jsx(v,{children:h.age})}),e.jsx(m,{pin:b("city"),children:e.jsx(v,{children:h.city})}),e.jsx(m,{padding:"none",pin:b("city")}),e.jsx(m,{overlap:!0,align:"flex-end",pin:b("menu"),children:e.jsx(q,{rounded:!0,"aria-label":i==="en"?"More":"Ещё",children:e.jsx(_e,{})})})]},h.id)})}),e.jsxs(re,{sticky:0,children:[!!P.length&&e.jsxs(oe,{count:P.length,label:i==="en"?"Selected":"Выбрано",style:{borderBottom:"1px solid var(--es-mono-a-a100)"},children:[e.jsx(q,{"aria-label":i==="en"?"Edit":"Редактировать",children:e.jsx(Ee,{})}),e.jsx(ke,{flexItem:!0,orientation:"vertical"}),e.jsx(q,{"aria-label":i==="en"?"Unselect all":"Снять всё выделение",onClick:g,children:e.jsx(Pe,{})})]}),e.jsx(ie,{}),e.jsxs(Ne,{count:100,itemsPerPage:10,page:1,style:{padding:"12px",paddingLeft:"16px"},onItemsPerPageChange:()=>{},onPageChange:()=>{},children:[e.jsx(ze,{}),e.jsx(Ae,{boundaryCount:0,siblingCount:0})]})]})]})]})}};var ye,ge,Te;ee.parameters={...ee.parameters,docs:{...(ye=ee.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const {
      striped,
      colDividers,
      rowDividers
    } = args;
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const ref = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [data, setData] = useState(DATA);
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
            {fields.map((field, index) => <TableCell key={field} align={field === 'age' ? 'flex-end' : 'flex-start'} minWidth={field === 'name' ? 130 : 90} onResize={onResize(index + 1)} onResizeCommit={onResizeCommit(index + 1)}>
                <TableText>{NAMES[locale][field]}</TableText>
              </TableCell>)}
            <TableCell padding="none" />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody colDividers={colDividers} rowDividers={rowDividers} striped={striped}>
          {data[locale].map((row, i) => {
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

                {fields.map(field => field !== 'name' && field !== 'id' && (field === 'age' ? <TableCellAge key={field} value={row[field]} onEditAccept={value => {
              data[locale][i][field as 'age'] = value;
              setData({
                ...data
              });
            }} /> : <TableCell key={field}>
                        <TableText>{row[field]}</TableText>
                      </TableCell>))}
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
}`,...(Te=(ge=ee.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var ve,Ce,Re,Se,je;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Re=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source},description:{story:`Pinned (or frozen, locked, or sticky) columns are columns that are visible at all time while the user scrolls the data grid horizontally. They can be pinned either to the left or right side.

You may encounter issues if the sum of the widths of the pinned columns is larger than the width of the table. Make sure
that the table can accommodate properly, at least, these columns.`,...(je=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:je.description}}};const Il=["Demo","ColumnPinning"];export{G as ColumnPinning,ee as Demo,Il as __namedExportsOrder,Dl as default};
