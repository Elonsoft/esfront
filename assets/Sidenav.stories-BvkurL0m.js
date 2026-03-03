import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as u,e as V}from"./index-Wm5baAvf.js";import{c as R}from"./clsx.m-C7bORDfW.js";import{u as Z}from"./DefaultPropsProvider-BaGbio7E.js";import{u as te}from"./useLatest-C1UtP6al.js";import{u as ae}from"./useWindowEventListener-qwmc7qq6.js";import{u as ne,S as K,b as k,a as oe,f as se,d as ee,e as $,c as ue}from"./SidebarToggle-BLNH_Eu2.js";import{T as re}from"./Tooltip-Bp1S5HE5.js";import{L as le}from"./MenuItem-DrDY2G9B.js";import{L as me}from"./ListItemIcon-Ck6lPhYq.js";import{I as g}from"./IconAtLineW500-BIDdAVQY.js";import{I as ce}from"./IconAccountFillW500Lc-vqiE4ZhJ.js";import{s as O}from"./styled-BHLkoNCB.js";import{I as Q,i as de}from"./InputAdornment-DbV9zmm4.js";import{T as pe,t as ve,o as qe}from"./TextField-BE5m1Jj6.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./IconChevronLeftLineW300-BOx1aSt-.js";import"./SvgIcon-Bb8ef9Tm.js";import"./index-DrUVGiHv.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./useResizeObserver-C6sKC9YN.js";import"./Button-BRu9apcn.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./clsx-B-dksMZM.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./defaultTheme-oBDS3u9v.js";import"./memoTheme-Khho5aaB.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./useTimeout-CqYeTkks.js";import"./composeClasses-CAXbtk_0.js";import"./MenuList-CymzI1Pn.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Divider-BKuyIAQ4.js";import"./ListItemText-Bazqrad0.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./index-pH_Peplc.js";import"./useFormControl-B4OjCVsv.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Modal-exZMVhKV.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FocusTrap-pQd8fEAo.js";import"./FormControl-C3d8ZCOJ.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./Popover-D33wSAFU.js";const fe=3,be=300,xe=(d,I,l,j)=>{const i=u.useRef([]),m=u.useRef(null),x=u.useRef(null),c=()=>{if(!d.current||!l)return 0;const a=d.current.getBoundingClientRect();a.left,a.top;const b={x:a.left+a.width,y:a.top};a.left+a.width,a.top;const n={x:a.left+a.width,y:a.top+a.height},p=i.current[i.current.length-1];let s=i.current[0];if(!p||(s||(s=p),s.x<a.left||s.x>n.x||s.y<a.top||s.y>n.y)||x.current&&p.x===x.current.x&&p.y===x.current.y)return 0;const v=(_,w)=>(w.y-_.y)/(w.x-_.x);let t=b,y=n;t=b,y=n;const M=v(p,t),A=v(p,y),D=v(s,t),P=v(s,y);return M<D&&A>P?(x.current=p,be):(x.current=null,0)},q=a=>{const b=c();b?m.current=setTimeout(()=>{q(a)},b):j(a)};return{onMouseMove:a=>{i.current.push({x:a.pageX,y:a.pageY}),i.current.length>fe&&i.current.shift()},onMouseOver:a=>{m.current&&(clearTimeout(m.current),m.current=null),q(a.target)},onMouseLeave:()=>{m.current&&(clearTimeout(m.current),m.current=null)}}},H=u.createContext(null),he=()=>{const d=u.useContext(H);if(d===null)throw new Error("No provider for SidenavContext");return d},T=d=>{const{className:I,style:l,children:j,open:i,disableEscapeKeyDown:m,disableItemHover:x,onClose:c}=Z({props:d,name:"ESSidenav"}),[q,h]=u.useState(!1),[S,f]=u.useState(null),[a,b]=u.useState(!1),n=u.useRef(null),p=u.useRef(null),s=u.useRef(null),v=te(()=>{c&&c()});u.useEffect(()=>{const r=o=>{o.key==="Escape"&&c&&v.current()};return i&&c&&!m&&document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[i,m]);const t=r=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{r&&(f(r),i||h(!0))},90)},y=()=>{s.current&&clearTimeout(s.current);const r=document.activeElement,o=document.querySelector(".es-sidenav__drawer");(!(o==null?void 0:o.contains(r))||(r==null?void 0:r.tagName)!=="INPUT")&&(a||h(!1))},M=r=>{if(i&&x)return;const o=r.closest(".es-sidenav-item__wrapper");o&&o.dataset.id?t(o.dataset.id):r.className.toString().includes("es-sidebar-menu")||r.className.toString().includes("es-sidebar__content")?t():(y(),s.current&&clearTimeout(s.current))},A=()=>{c==null||c(),h(!1),b(!1)},D=r=>{if(n.current&&r.key==="ArrowLeft"){const o=n.current.querySelector(`.es-sidenav-item[data-id="${S}"]`);o&&o.focus()}};ae("resize",()=>i&&c&&c());const{onMouseMove:P,onMouseOver:_,onMouseLeave:w}=xe(n,"left",q,M),W=u.useMemo(()=>({open:i,hover:q,setHover:h,setItemId:f,itemId:S,disableItemHover:x,onClose:c}),[i,q,h,f,S,x]);return e.jsx(H.Provider,{value:W,children:e.jsxs("div",{className:R("es-sidenav",I),style:l,children:[e.jsx("div",{className:"es-sidenav__container",onMouseLeave:y,children:V.Children.map(j,(r,o)=>o?e.jsx("div",{ref:p,className:R("es-sidenav__drawer",i&&"es-sidenav__drawer--open",q&&"es-sidenav__drawer--hover"),onKeyDown:D,onMouseDown:()=>b(!0),onMouseUp:()=>b(!1),children:V.cloneElement(r,{open:i||q,hover:q})}):e.jsx("div",{ref:n,className:"es-sidenav__rail",onMouseLeave:w,onMouseMove:P,onMouseOver:_,children:r}))}),!i&&q&&e.jsx("div",{className:R("es-sidenav__overlay",i&&"es-sidenav__overlay--open",q&&"es-sidenav__overlay--hover"),onClick:A})]})})};try{T.displayName="Sidenav",T.__docgenInfo={description:"The Sidenav component is a fixed-position toggleable slide out box.",displayName:"Sidenav",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},open:{defaultValue:null,description:"Whether the sidebar should be displayed.",name:"open",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:null,description:"If true, hitting escape will not fire the onClose callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disableItemHover:{defaultValue:null,description:"If true, hovering over `SidenavItem` won't change the selected element when open=true.",name:"disableItemHover",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const E=d=>{const{className:I,id:l=null,icon:j,text:i,selected:m,onClick:x,onTouchStart:c,onKeyDown:q,onFocus:h,...S}=Z({props:d,name:"ESSidenavItem"}),{open:f,hover:a,itemId:b,setHover:n,setItemId:p,disableItemHover:s}=he(),{color:v}=ne(),[t,y]=u.useState(!1),M=u.useRef(null),A=u.useRef(!1),D=o=>{c==null||c(o),l&&!f&&(!a||l!==b)&&(A.current=!0)},P=o=>{if(l?(p(l),f||n(!0)):n(!1),A.current){A.current=!1,o.preventDefault(),o.stopPropagation();return}x==null||x(o)},_=o=>{h==null||h(o),l?(p(l),f||n(!0)):n(!1)},w=o=>{if(q==null||q(o),M.current&&o.key==="ArrowRight"){const F=M.current.closest(".es-sidenav").querySelector(".es-sidenav__drawer").querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');F&&F.focus()}},W=u.useCallback(()=>{y(!1)},[]),r=()=>{i&&(!l||l!==b&&f&&s)&&y(!0)};return u.useEffect(()=>{t&&l&&l===b&&y(!1)},[t,l,b]),e.jsx(re,{disableInteractive:!0,arrow:!!i,distance:-5,enterNextDelay:200,leaveDelay:120,open:t,placement:"right",slotProps:{popper:{className:"es-sidenav-item__tooltip"}},title:e.jsx(e.Fragment,{children:i}),onClose:W,onOpen:r,children:e.jsx("div",{className:"es-sidenav-item__wrapper","data-id":l,children:e.jsx(le,{ref:M,button:!0,className:R("es-sidenav-item",`es-sidenav-item--color--${v}`,I),"data-id":l,selected:m,onClick:P,onFocus:_,onKeyDown:w,onTouchStart:D,...S,children:e.jsx(me,{children:j})})})})};try{E.displayName="SidenavItem",E.__docgenInfo={description:"",displayName:"SidenavItem",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the element.",name:"id",required:!1,type:{name:"string | null"}},icon:{defaultValue:null,description:"Icon for the element.",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Text for the element.",name:"text",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"If true, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const z=O(pe)(()=>({[`&.${ve.root}`]:{margin:"12px 16px 16px",[`& .${qe.root}`]:{padding:"0 4px","& .es-button":{"--icon":"var(--es-mono-a-a500)"},[`& .${de.positionStart}`]:{marginRight:"4px","& .es-svg-icon":{color:"var(--es-mono-a-a400)"}}}}})),U=d=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h6 px-16 py-16",style:{color:"var(--es-mono-a-a900)"},children:d.title}),e.jsx(ee,{})]}),L=d=>e.jsx("div",{className:"caption",style:{padding:"0 16px",color:"var(--es-mono-a-a600)",flexShrink:"0",flexWrap:"nowrap"},children:d.title}),C=O(ue)(()=>({margin:"0 16px","& .es-list-item.es-sidebar-item__button":{padding:"4px"}})),ge=O("div")(({ownerState:{isOpen:d,width:I}})=>({transition:"padding-left 0.2s",paddingLeft:`${d?I:0}px`})),X=220,Y=300,Li={tags:["autodocs"],component:T,parameters:{references:["Sidenav","SidenavItem","Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{disableEscapeKeyDown:{control:{type:"boolean"}},disableItemHover:{control:{type:"boolean"}},color:{control:{type:"select"},options:["default","primary","secondary"]},open:{table:{disable:!0}}},args:{disableEscapeKeyDown:!1,disableItemHover:!1,color:"secondary"}},N={render:function({disableEscapeKeyDown:I,disableItemHover:l,color:j},{globals:{locale:i}}){const[m,x]=u.useState(!1),[c,q]=u.useState(287),[h,S]=u.useState(1),f=u.useRef(null),a={isOpen:m,width:c},b=n=>{n.target.selectionStart!==0&&n.stopPropagation()};return e.jsxs("div",{style:{height:"100vh",margin:"-1rem",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(T,{disableEscapeKeyDown:I,disableItemHover:l,open:m,style:{position:"sticky",top:"0"},onClose:()=>x(!1),children:[e.jsxs(K,{color:j,children:[e.jsx(k,{children:e.jsx(E,{icon:e.jsx(g,{}),selected:h===1,onClick:()=>S(1)})}),e.jsx(oe,{open:m,onClick:()=>x(!m)}),e.jsxs(k,{children:[e.jsx(E,{icon:e.jsx(g,{}),id:"1",selected:h===2,text:i==="en"?"Projects":"Проекты",onClick:()=>{S(2),console.info("Projects")}}),e.jsx(E,{icon:e.jsx(g,{}),id:"2",selected:h===3,text:i==="en"?"Reports":"Отчеты",onClick:()=>{S(3),console.info("Reports")}})]}),e.jsx(se,{}),e.jsx(ee,{}),e.jsx(k,{children:e.jsx(E,{icon:e.jsx(ce,{container:!0,containerSize:"24px"}),text:i==="en"?"Profile":"Профиль"})})]}),e.jsx(K,{maxWidth:Y,minWidth:X,width:c,onWidthChange:n=>{f.current&&m&&(f.current.style.transition="none",f.current.style.paddingLeft=`${Math.min(Math.max(n,X),Y)}px`)},onWidthChangeCommit:n=>{f.current&&m&&(f.current.style.transition="",f.current.style.paddingLeft=""),q(n)},children:e.jsx(H.Consumer,{children:n=>{switch(n==null?void 0:n.itemId){default:case"1":const p=v=>()=>{S(2),v()};return e.jsxs(u.Fragment,{children:[e.jsx(U,{title:i==="en"?"Projects":"Проекты"}),e.jsx(z,{InputProps:{startAdornment:e.jsx(Q,{position:"start",children:e.jsx(g,{})})},placeholder:i==="en"?"Search":"Поиск",size:"32",onKeyDown:b}),e.jsxs($,{children:[e.jsx(L,{title:i==="en"?"Favorites":"Избранное"}),e.jsxs(k,{children:[e.jsx(C,{icon:e.jsx(g,{}),text:i==="en"?"All projects":"Все проекты",onClick:p(()=>console.info("All projects"))}),e.jsx(C,{icon:e.jsx(g,{}),id:"1",text:i==="en"?"Documents":"Документы",onClick:p(()=>console.info("Selected")),children:[...Array(10)].map((v,t)=>e.jsx(C,{inset:!0,text:(i==="en"?"Document":"Документ")+" №"+t,onClick:p(()=>console.info(`Project ${t}`))},t))}),e.jsx(C,{icon:e.jsx(g,{}),id:"2",text:i==="en"?"New projects":"Новые проекты",onClick:()=>console.info("Projects"),children:[...Array(10)].map((v,t)=>e.jsx(C,{inset:!0,text:(i==="en"?"New project":"Новый проект")+" №"+t,onClick:p(()=>console.info(`Project ${t}`))},t))})]}),e.jsx(L,{title:i==="en"?"Current projects":"Текущие проекты"}),e.jsx(k,{children:[...Array(5)].map((v,t)=>e.jsx(C,{icon:e.jsx(g,{}),text:(i==="en"?"Current project":"Текущий проект")+" №"+t,onClick:p(()=>console.info(`Current project ${t}`))},t))})]})]},"1");case"2":const s=v=>()=>{S(3),v()};return e.jsxs(u.Fragment,{children:[e.jsx(U,{title:i==="en"?"Reports":"Отчеты"}),e.jsx(z,{InputProps:{startAdornment:e.jsx(Q,{position:"start",children:e.jsx(g,{})})},placeholder:i==="en"?"Search":"Поиск",size:"32",onKeyDown:b}),e.jsxs($,{children:[e.jsx(L,{title:i==="en"?"Favorites":"Избранное"}),e.jsxs(k,{children:[e.jsx(C,{icon:e.jsx(g,{}),id:"1",text:i==="en"?"All reports":"Все отчеты",onClick:s(()=>console.info("All reports"))}),e.jsx(C,{icon:e.jsx(g,{}),id:"2",text:i==="en"?"Saved reports":"Сохраненные отчеты",onClick:s(()=>console.info("Saved reports")),children:[...Array(5)].map((v,t)=>e.jsx(C,{inset:!0,text:(i==="en"?"Saved report":"Сохраненный отчет")+" №"+t,onClick:s(()=>console.info(`Saved report ${t}`))},t))}),e.jsx(C,{icon:e.jsx(g,{}),id:"3",text:i==="en"?"Scheduled reports":"Запланированные отчеты",children:[...Array(10)].map((v,t)=>e.jsx(C,{inset:!0,text:(i==="en"?"Scheduled report":"Запланированный отчет")+" №"+t,onClick:s(()=>console.info(`Report ${t}`))},t))})]}),e.jsx(L,{title:i==="en"?"Current reports":"Текущие отчеты"}),e.jsx(k,{children:[...Array(5)].map((v,t)=>e.jsx(C,{icon:e.jsx(g,{}),text:(i==="en"?"Current report":"Текущий отчет")+" №"+t,onClick:s(()=>console.info(`Current report ${t}`))},t))})]})]},"2")}}})})]}),e.jsxs(ge,{ref:f,ownerState:a,children:[e.jsx("h2",{children:h}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem. Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse, consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores? Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id, alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil! Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis, minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem, dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi ipsum quaerat odit tempora repellat."}),e.jsx("p",{children:"Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga. Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam, aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente. Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias, in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem, optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt magnam."}),e.jsx("p",{children:"Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae? Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum, dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam."})]})]})}};var B,G,J;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    return <div style={{
      height: '100vh',
      margin: '-1rem',
      display: 'flex',
      gap: '20px',
      overflow: 'auto'
    }}>
        <Sidenav disableEscapeKeyDown={disableEscapeKeyDown} disableItemHover={disableItemHover} open={isOpen} style={{
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
      </div>;
  }
}`,...(J=(G=N.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ni=["Demo"];export{N as Demo,Ni as __namedExportsOrder,Li as default};
