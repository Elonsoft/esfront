import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as m,e as z}from"./index-DIDRz_s2.js";import{c as T}from"./clsx.m-C7bORDfW.js";import{g as ne,a as oe}from"./identifier-haEvzVNA.js";import{u as se}from"./DefaultPropsProvider-BgzOhfjl.js";import{u as de}from"./useLatest-sVqXUmVb.js";import{u as pe}from"./useWindowEventListener-DbdMtNlQ.js";import{s as I,c as re}from"./styled-CkBBDypc.js";import{u as ve,s as fe,g as ue,h as qe,S as X,b as D,a as be,f as xe,d as le,e as Q,c as he,i as ge}from"./SidebarToggle-CYYuBJcz.js";import{B as Se}from"./Box-CBu-ct3E.js";import{T as Ce,t as ye}from"./Tooltip-CJy9C140.js";import{L as Ie,b as W,c as je}from"./MenuItem-CqODWihV.js";import{b as Ae}from"./ButtonBase-CDV15rsf.js";import{L as we}from"./ListItemIcon-Cz1DRd10.js";import{I as g}from"./IconAtLineW500-Bpv2V7h8.js";import{I as ke}from"./IconAccountFillW500Lc-njPIawdD.js";import{I as Y,i as Me}from"./InputAdornment-B3vvdigS.js";import{T as me}from"./Typography-56Df3xvc.js";import{T as Ee,t as De,o as Re}from"./TextField-D_RGTig6.js";import{s as Pe}from"./SvgIcon.classes-BQruNm0T.js";import{b as Le}from"./Button-DhPfczDk.js";import{l as Te}from"./listItemButtonClasses-CTDMcBG6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useDocumentEventListener-DcHHZa3z.js";import"./IconChevronLeftLineW300-D9pzSSh6.js";import"./SvgIcon-DUjU_dba.js";import"./index-CGrjeSgt.js";import"./useTheme-Bas6BIKa.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useResizeObserver-BNbozrrH.js";import"./memoTheme-DCKoxpDd.js";import"./useTheme-B7wNoq1D.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./useTimeout-BgqVTnbA.js";import"./useForkRef-Cmn-Dh7x.js";import"./MenuList-BFLSMrOv.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Divider-CdpCW034.js";import"./ListItemText-Bi_6f9AE.js";import"./extendSxProp-gK8sWd8Z.js";import"./Fade-EMyAcTYj.js";import"./useControlled-BX5XFdR0.js";import"./useId-DHFVogFr.js";import"./useEvent-B4f6aq-e.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popper-g9x5hpqb.js";import"./index-CycuZXML.js";import"./Portal-Cdjvc33M.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./useFormControl-Crkhef2u.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CFc0_OMk.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./isHostComponent-DVu5iVWx.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./Popover-BLlr3l9T.js";import"./Grow-BwlAxJrJ.js";import"./Modal-DZyPzB9s.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-vTo9pgoY.js";import"./SvgIcon-5liiqC3t.js";const Ne=3,_e=300,We=(i,n,S,s)=>{const t=m.useRef([]),p=m.useRef(null),h=m.useRef(null),v=()=>{if(!i.current||!S)return 0;const a=i.current.getBoundingClientRect();a.left,a.top;const C={x:a.left+a.width,y:a.top};a.left+a.width,a.top;const u={x:a.left+a.width,y:a.top+a.height},c=t.current[t.current.length-1];let f=t.current[0];if(!c||(f||(f=c),f.x<a.left||f.x>u.x||f.y<a.top||f.y>u.y)||h.current&&c.x===h.current.x&&c.y===h.current.y)return 0;const l=(R,P)=>(P.y-R.y)/(P.x-R.x);let o=C,A=u;o=C,A=u;const w=l(c,o),M=l(c,A),E=l(f,o),_=l(f,A);return w<E&&M>_?(h.current=c,_e):(h.current=null,0)},j=a=>{const C=v();C?p.current=setTimeout(()=>{j(a)},C):s(a)};return{onMouseMove:a=>{t.current.push({x:a.pageX,y:a.pageY}),t.current.length>Ne&&t.current.shift()},onMouseOver:a=>{p.current&&(clearTimeout(p.current),p.current=null),j(a.target)},onMouseLeave:()=>{p.current&&(clearTimeout(p.current),p.current=null)}}};function $e(i){return oe("ESSidenav",i)}const K=ne("ESSidenav",["root","hover","container","rail","drawer","overlay"]),B=m.createContext(null),Oe=()=>{const i=m.useContext(B);if(i===null)throw new Error("No provider for SidenavContext");return i};function He(i){return oe("ESSidenavItem",i)}const Ve=ne("ESSidenavItem",["root","wrapper","tooltip"]),Fe=i=>{const{classes:n}=i;return re({root:["root"],wrapper:["wrapper"],tooltip:["tooltip"]},He,n)},Ke=I(Ie,{name:"ESSidenavItem",slot:"Root",overridesResolver:(i,n)=>n.root})(({theme:i})=>({[`&.${W.root}`]:{borderRadius:"6px",padding:"0",justifyContent:"center","--text":i.vars.palette.monoA.A800,"--icon":i.vars.palette.monoA.A500,"--hovered":i.vars.palette.monoA.A50,"--pressed":i.vars.palette.monoA.A150,[`&.${W.selected}`]:{"--icon":i.vars.palette.monoA.A600,"--background":i.vars.palette.monoA.A100},[`& .${Ae.wrapper}`]:{justifyContent:"center"},[`& .${je.root}`]:{color:"var(--icon)",padding:0}},variants:[{props:{color:"primary"},style:{[`&.${W.root}`]:{"--text":i.vars.palette.monoB.A800,"--icon":i.vars.palette.monoB.A800,"--hovered":i.vars.palette.monoB.A50,"--pressed":i.vars.palette.monoB.A150,[`&.${W.selected}`]:{"--text":i.vars.palette.monoB[500],"--icon":i.vars.palette.monoB[500],"--background":i.vars.palette.monoB.A100}}}}]})),Be=I("div",{name:"ESSidenavItem",slot:"Wrapper",overridesResolver:(i,n)=>n.wrapper})({margin:"0 8px"}),Ue=I(({className:i,...n})=>e.jsx(Ce,{...n,classes:{popper:i}}),{name:"ESidenavItem",slot:"Tooltip",overridesResolver:(i,n)=>n.tooltip})(({theme:i})=>({[`&[data-popper-placement*="right"] .${ye.tooltip}`]:{padding:"4px 8px",maxWidth:"288px",...i.typography.caption},"&[data-popper-reference-hidden]":{pointerEvents:"none",opacity:"0"}})),N=i=>{const{className:n,sx:S,id:s=null,icon:t,text:p,selected:h,onClick:v,onTouchStart:j,onKeyDown:q,onFocus:b,...x}=se({props:i,name:"ESSidenavItem"}),{open:a,hover:C,itemId:u,setHover:c,setItemId:f,disableItemHover:l}=Oe(),{color:o}=ve(),[A,w]=m.useState(!1),M=m.useRef(null),E=m.useRef(!1),_=r=>{j==null||j(r),s&&!a&&(!C||s!==u)&&(E.current=!0)},R=r=>{if(s?(f(s),a||c(!0)):c(!1),E.current){E.current=!1,r.preventDefault(),r.stopPropagation();return}v==null||v(r)},P=r=>{b==null||b(r),s?(f(s),a||c(!0)):c(!1)},V=r=>{if(q==null||q(r),M.current&&r.key==="ArrowRight"){const U=M.current.closest(`.${K.root}`).querySelector(`.${K.drawer}`).querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');U&&U.focus()}},F=m.useCallback(()=>{w(!1)},[]),L=()=>{p&&(!s||s!==u&&a&&l)&&w(!0)};m.useEffect(()=>{A&&s&&s===u&&w(!1)},[A,s,u]);const k={color:o,open:a,...x},d=Fe(k);return e.jsx(Ue,{disableInteractive:!0,arrow:!!p,className:d.tooltip,distance:-5,enterNextDelay:200,leaveDelay:120,open:A,placement:"right",title:e.jsx(e.Fragment,{children:p}),onClose:F,onOpen:L,children:e.jsx(Be,{className:d.wrapper,"data-id":s,children:e.jsx(Ke,{ref:M,button:!0,className:T(d.root,n),"data-id":s,ownerState:k,selected:h,sx:S,onClick:R,onFocus:P,onKeyDown:V,onTouchStart:_,...x,children:e.jsx(we,{children:t})})})})};try{N.displayName="SidenavItem",N.__docgenInfo={description:"",displayName:"SidenavItem",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SidenavItemClasses> & Partial<ClassNameMap<never>>)"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},id:{defaultValue:null,description:"The id of the element.",name:"id",required:!1,type:{name:"string | null"}},icon:{defaultValue:null,description:"Icon for the element.",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Text for the element.",name:"text",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"If true, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const ze=i=>{const{classes:n,hover:S}=i;return re({root:["root",S&&"hover"],container:["container"],rail:["rail"],drawer:["drawer"],overlay:["overlay"]},$e,n)},Xe=I("div",{name:"ESSidenav",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:S}=i;return[n.root,S.hover&&n.hover]}})(()=>({zIndex:"100"})),Qe=I("div",{name:"ESSidenav",slot:"Container",overridesResolver:(i,n)=>n.container})(()=>({display:"flex",height:"100%"})),Ye=I("div",{name:"ESSidenav",slot:"Overlay",overridesResolver:(i,n)=>n.overlay})(({theme:i})=>({opacity:"0",userSelect:"none",top:"0",left:"0",position:"fixed",height:"100%",width:"100%",backgroundColor:i.vars.palette.overlay[200],transition:"opacity 0.3s",variants:[{props:{hover:!0},style:{opacity:"1"}},{props:{open:!0},style:{[i.breakpoints.down("desktopXS")]:{opacity:"1"}}}]})),Ge=I("div",{name:"ESSidenav",slot:"Rail",overridesResolver:(i,n)=>n.rail})(({theme:i})=>({display:"flex",height:"100%",width:"57px",zIndex:"99",[`& .${ue.handler}`]:{display:"none"},[i.breakpoints.down("desktopXS")]:{[`& .${fe.button}`]:{display:"none"}}})),Je=I("div",{name:"ESSidenav",slot:"Drawer",overridesResolver:(i,n)=>n.drawer})(({theme:i})=>({position:"absolute",top:"0",left:"-57px",transform:"translateX(-100%)",zIndex:"98",height:"100%",transition:"all 0.2s",variants:[{props:{hover:!0},style:{left:"57px",transform:"translateX(0)"}},{props:{open:!0},style:{left:"57px",transform:"translateX(0)",[i.breakpoints.down("desktopXS")]:{position:"absolute"}}}]})),H=i=>{const{className:n,children:S,open:s,sx:t,disableEscapeKeyDown:p,disableItemHover:h,onClose:v,...j}=se({props:i,name:"ESSidenav"}),[q,b]=m.useState(!1),[x,a]=m.useState(null),[C,u]=m.useState(!1),c=m.useRef(null),f=m.useRef(null),l=m.useRef(null),o=de(()=>{v&&v()});m.useEffect(()=>{const d=r=>{r.key==="Escape"&&v&&o.current()};return s&&v&&!p&&document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[s,p]);const A=d=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{d&&(a(d),s||b(!0))},90)},w=()=>{l.current&&clearTimeout(l.current);const d=document.activeElement,r=document.querySelector(`.${K.drawer}`);(!(r==null?void 0:r.contains(d))||(d==null?void 0:d.tagName)!=="INPUT")&&(C||b(!1))},M=d=>{if(s&&h)return;const r=d.closest(".ESSidenavItem-wrapper");r&&r.dataset.id?A(r.dataset.id):d.className.toString().includes(qe.root)||d.className.toString().includes(ue.content)?A():(w(),l.current&&clearTimeout(l.current))},E=()=>{v==null||v(),b(!1),u(!1)},_=d=>{if(c.current&&d.key==="ArrowLeft"){const r=c.current.querySelector(`.${Ve.root}[data-id="${x}"]`);r&&r.focus()}};pe("resize",()=>s&&v&&v());const{onMouseMove:R,onMouseOver:P,onMouseLeave:V}=We(c,"left",q,M),F=m.useMemo(()=>({open:s,hover:q,setHover:b,setItemId:a,itemId:x,disableItemHover:h,onClose:v}),[s,q,b,a,x,h]),L={open:s,hover:q,...j},k=ze(L);return e.jsx(B.Provider,{value:F,children:e.jsxs(Xe,{className:T(k.root,n),ownerState:L,sx:t,children:[e.jsx(Qe,{className:T(k.container),onMouseLeave:w,children:z.Children.map(S,(d,r)=>r?e.jsx(Je,{ref:f,className:T(k.drawer),ownerState:L,onKeyDown:_,onMouseDown:()=>u(!0),onMouseUp:()=>u(!1),children:z.cloneElement(d,{open:s||q,hover:q})}):e.jsx(Ge,{ref:c,className:T(k.rail),onMouseLeave:V,onMouseMove:R,onMouseOver:P,children:d}))}),!s&&q&&e.jsx(Ye,{className:T(k.overlay),ownerState:L,onClick:E})]})})};try{H.displayName="Sidenav",H.__docgenInfo={description:"The Sidenav component is a fixed-position toggleable slide out box.",displayName:"Sidenav",props:{sx:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},classes:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"classes",required:!1,type:{name:"Partial<SidenavClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Whether the sidebar should be displayed.",name:"open",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:null,description:"If true, hitting escape will not fire the onClose callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disableItemHover:{defaultValue:null,description:"If true, hovering over `SidenavItem` won't change the selected element when open=true.",name:"disableItemHover",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const G=I(Ee)(({theme:i})=>({[`&.${De.root}`]:{margin:"12px 16px 16px",[`& .${Re.root}`]:{padding:"0 4px",[`& .${Le.root}`]:{"--icon":i.vars.palette.monoA.A500},[`& .${Me.positionStart}`]:{marginRight:"4px",[`& .${Pe.root}`]:{color:i.vars.palette.monoA.A400}}}}})),J=i=>e.jsxs(e.Fragment,{children:[e.jsx(me,{sx:{padding:"16px",color:"monoA.A900"},variant:"h6",children:i.title}),e.jsx(le,{})]}),$=i=>e.jsx(me,{noWrap:!0,sx:{padding:"0 16px",color:"monoA.A600",flexShrink:"0"},variant:"caption",children:i.title}),y=I(he)(()=>({margin:"0 16px",[`& .${Te.root}.${ge.button}`]:{padding:"4px"}})),Ze=I("div")(({ownerState:{isOpen:i,width:n}})=>({transition:"padding-left 0.2s",paddingLeft:`${i?n:0}px`})),Z=220,ee=300,Ct={tags:["autodocs"],component:H,parameters:{references:["Sidenav","SidenavItem","Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{disableEscapeKeyDown:{control:{type:"boolean"}},disableItemHover:{control:{type:"boolean"}},color:{control:{type:"select"},options:["default","primary","secondary"]},open:{table:{disable:!0}}},args:{disableEscapeKeyDown:!1,disableItemHover:!1,color:"secondary"}},O={render:function({disableEscapeKeyDown:n,disableItemHover:S,color:s},{globals:{locale:t}}){const[p,h]=m.useState(!1),[v,j]=m.useState(287),[q,b]=m.useState(1),x=m.useRef(null),a={isOpen:p,width:v},C=u=>{u.target.selectionStart!==0&&u.stopPropagation()};return e.jsxs(Se,{sx:{height:"100vh",margin:"-1rem",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(H,{disableEscapeKeyDown:n,disableItemHover:S,open:p,sx:{position:"sticky",top:"0"},onClose:()=>h(!1),children:[e.jsxs(X,{color:s,children:[e.jsx(D,{children:e.jsx(N,{icon:e.jsx(g,{}),selected:q===1,onClick:()=>b(1)})}),e.jsx(be,{open:p,onClick:()=>h(!p)}),e.jsxs(D,{children:[e.jsx(N,{icon:e.jsx(g,{}),id:"1",selected:q===2,text:t==="en"?"Projects":"Проекты",onClick:()=>{b(2),console.info("Projects")}}),e.jsx(N,{icon:e.jsx(g,{}),id:"2",selected:q===3,text:t==="en"?"Reports":"Отчеты",onClick:()=>{b(3),console.info("Reports")}})]}),e.jsx(xe,{}),e.jsx(le,{}),e.jsx(D,{children:e.jsx(N,{icon:e.jsx(ke,{container:!0,containerSize:"24px"}),text:t==="en"?"Profile":"Профиль"})})]}),e.jsx(X,{maxWidth:ee,minWidth:Z,width:v,onWidthChange:u=>{x.current&&p&&(x.current.style.transition="none",x.current.style.paddingLeft=`${Math.min(Math.max(u,Z),ee)}px`)},onWidthChangeCommit:u=>{x.current&&p&&(x.current.style.transition="",x.current.style.paddingLeft=""),j(u)},children:e.jsx(B.Consumer,{children:u=>{switch(u==null?void 0:u.itemId){default:case"1":const c=l=>()=>{b(2),l()};return e.jsxs(m.Fragment,{children:[e.jsx(J,{title:t==="en"?"Projects":"Проекты"}),e.jsx(G,{InputProps:{startAdornment:e.jsx(Y,{position:"start",children:e.jsx(g,{})})},placeholder:t==="en"?"Search":"Поиск",size:"32",onKeyDown:C}),e.jsxs(Q,{children:[e.jsx($,{title:t==="en"?"Favorites":"Избранное"}),e.jsxs(D,{children:[e.jsx(y,{icon:e.jsx(g,{}),text:t==="en"?"All projects":"Все проекты",onClick:c(()=>console.info("All projects"))}),e.jsx(y,{icon:e.jsx(g,{}),id:"1",text:t==="en"?"Documents":"Документы",onClick:c(()=>console.info("Selected")),children:[...Array(10)].map((l,o)=>e.jsx(y,{inset:!0,text:(t==="en"?"Document":"Документ")+" №"+o,onClick:c(()=>console.info(`Project ${o}`))},o))}),e.jsx(y,{icon:e.jsx(g,{}),id:"2",text:t==="en"?"New projects":"Новые проекты",onClick:()=>console.info("Projects"),children:[...Array(10)].map((l,o)=>e.jsx(y,{inset:!0,text:(t==="en"?"New project":"Новый проект")+" №"+o,onClick:c(()=>console.info(`Project ${o}`))},o))})]}),e.jsx($,{title:t==="en"?"Current projects":"Текущие проекты"}),e.jsx(D,{children:[...Array(5)].map((l,o)=>e.jsx(y,{icon:e.jsx(g,{}),text:(t==="en"?"Current project":"Текущий проект")+" №"+o,onClick:c(()=>console.info(`Current project ${o}`))},o))})]})]},"1");case"2":const f=l=>()=>{b(3),l()};return e.jsxs(m.Fragment,{children:[e.jsx(J,{title:t==="en"?"Reports":"Отчеты"}),e.jsx(G,{InputProps:{startAdornment:e.jsx(Y,{position:"start",children:e.jsx(g,{})})},placeholder:t==="en"?"Search":"Поиск",size:"32",onKeyDown:C}),e.jsxs(Q,{children:[e.jsx($,{title:t==="en"?"Favorites":"Избранное"}),e.jsxs(D,{children:[e.jsx(y,{icon:e.jsx(g,{}),id:"1",text:t==="en"?"All reports":"Все отчеты",onClick:f(()=>console.info("All reports"))}),e.jsx(y,{icon:e.jsx(g,{}),id:"2",text:t==="en"?"Saved reports":"Сохраненные отчеты",onClick:f(()=>console.info("Saved reports")),children:[...Array(5)].map((l,o)=>e.jsx(y,{inset:!0,text:(t==="en"?"Saved report":"Сохраненный отчет")+" №"+o,onClick:f(()=>console.info(`Saved report ${o}`))},o))}),e.jsx(y,{icon:e.jsx(g,{}),id:"3",text:t==="en"?"Scheduled reports":"Запланированные отчеты",children:[...Array(10)].map((l,o)=>e.jsx(y,{inset:!0,text:(t==="en"?"Scheduled report":"Запланированный отчет")+" №"+o,onClick:f(()=>console.info(`Report ${o}`))},o))})]}),e.jsx($,{title:t==="en"?"Current reports":"Текущие отчеты"}),e.jsx(D,{children:[...Array(5)].map((l,o)=>e.jsx(y,{icon:e.jsx(g,{}),text:(t==="en"?"Current report":"Текущий отчет")+" №"+o,onClick:f(()=>console.info(`Current report ${o}`))},o))})]})]},"2")}}})})]}),e.jsxs(Ze,{ref:x,ownerState:a,children:[e.jsx("h2",{children:q}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem. Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse, consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores? Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id, alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil! Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis, minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem, dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi ipsum quaerat odit tempora repellat."}),e.jsx("p",{children:"Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga. Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam, aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente. Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias, in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem, optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt magnam."}),e.jsx("p",{children:"Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae? Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum, dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam."})]})]})}};var ie,te,ae;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: function Render({
    disableEscapeKeyDown,
    disableItemHover,
    color
  }, {
    globals: {
      locale
    }
  }) {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(287);
    const [page, setPage] = useState(1);
    const ref = useRef<HTMLDivElement | null>(null);
    const ownerState = {
      isOpen,
      width
    };
    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if ((event.target as HTMLInputElement).selectionStart !== 0) {
        event.stopPropagation();
      }
    };
    return <Box sx={{
      height: '100vh',
      margin: '-1rem',
      display: 'flex',
      gap: '20px',
      overflow: 'auto'
    }}>
        <Sidenav disableEscapeKeyDown={disableEscapeKeyDown} disableItemHover={disableItemHover} open={isOpen} sx={{
        position: 'sticky',
        top: '0'
      }} onClose={() => setIsOpen(false)}>
          <Sidebar color={color}>
            <SidebarMenu>
              <SidenavItem icon={<IconAtLineW500 />} selected={page === 1} onClick={() => setPage(1)} />
            </SidebarMenu>

            <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

            <SidebarMenu>
              <SidenavItem icon={<IconAtLineW500 />} id="1" selected={page === 2} text={locale === 'en' ? 'Projects' : 'Проекты'} onClick={() => {
              setPage(2);
              console.info('Projects');
            }} />
              <SidenavItem icon={<IconAtLineW500 />} id="2" selected={page === 3} text={locale === 'en' ? 'Reports' : 'Отчеты'} onClick={() => {
              setPage(3);
              console.info('Reports');
            }} />
            </SidebarMenu>

            <SidebarSpacer />
            <SidebarDivider />

            <SidebarMenu>
              <SidenavItem icon={<IconAccountFillW500Lc container containerSize="24px" />} text={locale === 'en' ? 'Profile' : 'Профиль'} />
            </SidebarMenu>
          </Sidebar>

          <Sidebar maxWidth={MAX_WIDTH} minWidth={MIN_WIDTH} width={width} onWidthChange={value => {
          if (ref.current && isOpen) {
            ref.current.style.transition = 'none';
            ref.current.style.paddingLeft = \`\${Math.min(Math.max(value, MIN_WIDTH), MAX_WIDTH)}px\`;
          }
        }} onWidthChangeCommit={(value: number) => {
          if (ref.current && isOpen) {
            ref.current.style.transition = '';
            ref.current.style.paddingLeft = '';
          }
          setWidth(value);
        }}>
            <SidenavContext.Consumer>
              {value => {
              switch (value?.itemId) {
                default:
                case '1':
                  const onProjectClick = (callback: () => void) => () => {
                    setPage(2);
                    callback();
                  };
                  return <Fragment key="1">
                        <SidebarHeading title={locale === 'en' ? 'Projects' : 'Проекты'} />
                        <SearchField InputProps={{
                      startAdornment: <InputAdornment position="start">
                                <IconAtLineW500 />
                              </InputAdornment>
                    }} placeholder={locale === 'en' ? 'Search' : 'Поиск'} size="32" onKeyDown={onInputKeyDown} />

                        <SidebarScrollable>
                          <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                          <SidebarMenu>
                            <SidebarMenuItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'All projects' : 'Все проекты'} onClick={onProjectClick(() => console.info(\`All projects\`))} />
                            <SidebarMenuItem icon={<IconAtLineW500 />} id="1" text={locale === 'en' ? 'Documents' : 'Документы'} onClick={onProjectClick(() => console.info(\`Selected\`))}>
                              {[...Array(10)].map((_, idx) => <SidebarMenuItem key={idx} inset text={(locale === 'en' ? 'Document' : 'Документ') + ' №' + idx} onClick={onProjectClick(() => console.info(\`Project \${idx}\`))} />)}
                            </SidebarMenuItem>
                            <SidebarMenuItem icon={<IconAtLineW500 />} id="2" text={locale === 'en' ? 'New projects' : 'Новые проекты'} onClick={() => console.info(\`Projects\`)}>
                              {[...Array(10)].map((_, idx) => <SidebarMenuItem key={idx} inset text={(locale === 'en' ? 'New project' : 'Новый проект') + ' №' + idx} onClick={onProjectClick(() => console.info(\`Project \${idx}\`))} />)}
                            </SidebarMenuItem>
                          </SidebarMenu>

                          <SidebarCaption title={locale === 'en' ? 'Current projects' : 'Текущие проекты'} />
                          <SidebarMenu>
                            {[...Array(5)].map((_, idx) => <SidebarMenuItem key={idx} icon={<IconAtLineW500 />} text={(locale === 'en' ? 'Current project' : 'Текущий проект') + ' №' + idx} onClick={onProjectClick(() => console.info(\`Current project \${idx}\`))} />)}
                          </SidebarMenu>
                        </SidebarScrollable>
                      </Fragment>;
                case '2':
                  const onReportClick = (callback: () => void) => () => {
                    setPage(3);
                    callback();
                  };
                  return <Fragment key="2">
                        <SidebarHeading title={locale === 'en' ? 'Reports' : 'Отчеты'} />
                        <SearchField InputProps={{
                      startAdornment: <InputAdornment position="start">
                                <IconAtLineW500 />
                              </InputAdornment>
                    }} placeholder={locale === 'en' ? 'Search' : 'Поиск'} size="32" onKeyDown={onInputKeyDown} />

                        <SidebarScrollable>
                          <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                          <SidebarMenu>
                            <SidebarMenuItem icon={<IconAtLineW500 />} id="1" text={locale === 'en' ? 'All reports' : 'Все отчеты'} onClick={onReportClick(() => console.info(\`All reports\`))} />
                            <SidebarMenuItem icon={<IconAtLineW500 />} id="2" text={locale === 'en' ? 'Saved reports' : 'Сохраненные отчеты'} onClick={onReportClick(() => console.info(\`Saved reports\`))}>
                              {[...Array(5)].map((_, idx) => <SidebarMenuItem key={idx} inset text={(locale === 'en' ? 'Saved report' : 'Сохраненный отчет') + ' №' + idx} onClick={onReportClick(() => console.info(\`Saved report \${idx}\`))} />)}
                            </SidebarMenuItem>

                            <SidebarMenuItem icon={<IconAtLineW500 />} id="3" text={locale === 'en' ? 'Scheduled reports' : 'Запланированные отчеты'}>
                              {[...Array(10)].map((_, idx) => <SidebarMenuItem key={idx} inset text={(locale === 'en' ? 'Scheduled report' : 'Запланированный отчет') + ' №' + idx} onClick={onReportClick(() => console.info(\`Report \${idx}\`))} />)}
                            </SidebarMenuItem>
                          </SidebarMenu>

                          <SidebarCaption title={locale === 'en' ? 'Current reports' : 'Текущие отчеты'} />
                          <SidebarMenu>
                            {[...Array(5)].map((_, idx) => <SidebarMenuItem key={idx} icon={<IconAtLineW500 />} text={(locale === 'en' ? 'Current report' : 'Текущий отчет') + ' №' + idx} onClick={onReportClick(() => console.info(\`Current report \${idx}\`))} />)}
                          </SidebarMenu>
                        </SidebarScrollable>
                      </Fragment>;
              }
            }}
            </SidenavContext.Consumer>
          </Sidebar>
        </Sidenav>

        <Content ref={ref} ownerState={ownerState}>
          <h2>{page}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus
            tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem.
            Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat
            sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis
            debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima
            laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla
            possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse,
            consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil
            numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus
            accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere
            fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores?
            Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores
            facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi
            incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem
            deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni
            laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id,
            alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil!
            Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel
            aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut
            reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis
            nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id
            sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis
            aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a
            molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit
            quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi
            temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis,
            minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda
            illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium
            pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur
            dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio
            sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos
            quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem,
            dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas
            obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem
            voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi
            ipsum quaerat odit tempora repellat.
          </p>
          <p>
            Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet
            tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga.
            Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium
            dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam,
            aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil
            ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio
            dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam
            quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus
            vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio
            porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum
            illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis
            necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente.
            Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias,
            in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima
            ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore
            minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque
            rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem,
            optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia
            dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum
            cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam
            distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum
            praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate
            suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam
            nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure
            earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus
            consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur
            consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam
            suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente
            expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium
            atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas
            laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis
            aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt
            magnam.
          </p>
          <p>
            Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis
            corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem
            quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda
            amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam
            fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo
            aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut
            voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis
            deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius
            et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi
            dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus
            iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit
            labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis
            maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste
            dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro
            blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae?
            Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores
            eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum,
            dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione
            eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam.
          </p>
        </Content>
      </Box>;
  }
}`,...(ae=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const yt=["Demo"];export{O as Demo,yt as __namedExportsOrder,Ct as default};
