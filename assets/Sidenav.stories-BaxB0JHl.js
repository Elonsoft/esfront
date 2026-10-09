import{r as u,b as ne,e as se,j as e,R as Q}from"./iframe-WZaTcFld.js";import{c as D}from"./clsx.m-CH7BE6MN.js";import{u as te}from"./useDefaultProps-BZnal23W.js";import{u as oe,S as z,b as A,a as re,f as ue,d as ae,e as U,c as le}from"./SidebarToggle-gT2gx2aA.js";import{u as me}from"./useForkRef-B9g_LZ2g.js";import{T as ce}from"./Tooltip-Cf9elEFD.js";import{L as de}from"./MenuItem-D8cap5ou.js";import{L as pe}from"./ListItemIcon-ClULJfKh.js";import{I as h}from"./IconAtLineW500-E7lAYe_C.js";import{I as ve}from"./IconAccountFillW500Lc-bhMv1hr7.js";import{F as X}from"./FormFieldAdornment-C1B1Ee7s.js";import{T as fe}from"./TextField-DC1lqpSU.js";import"./preload-helper-Dp1pzeXC.js";import"./useDocumentEventListener-DF4sX5o5.js";import"./OverlayScrollbars-BFSpt5BN.js";import"./IconChevronLeftLineW300-Djc2IGfW.js";import"./SvgIcon-CImGifIE.js";import"./useMediaQuery-CViy8gZQ.js";import"./useResizeObserver-DfGkp_cm.js";import"./ListItemText-DnLpL29d.js";import"./Button-DX7vCFDA.js";import"./ButtonBase-A8DfStIe.js";import"./Collapse-C819yTYG.js";import"./utils-B5irXgth.js";import"./useTimeout-BCL6eOzm.js";import"./useEvent-PLZAS_3a.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./Divider-exvApZI5.js";import"./useRefState-BppT1cFh.js";import"./useForceUpdate-Bnb30UZl.js";import"./useScrollPosition-XLhyAfnk.js";import"./useMutationObserver-CyisDU0F.js";import"./useElementEventListener-DPPQSfuc.js";import"./Popper-Di5muT-r.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BYj3FDWN.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./Fade-xqmouTxf.js";import"./createTransition-B0gmdMvU.js";import"./useControlled-BkzgZrqK.js";import"./useId-Cowwq5kl.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./FormField.context-xKPgMKao.js";import"./FormFieldHelperText-DZMLTBde.js";import"./FormFieldLabel-Dhbs71bh.js";const qe=3,be=300,xe=(s,N,j,d)=>{const t=u.useRef([]),n=u.useRef(null),x=u.useRef(null),S=()=>{if(!s.current||!j)return 0;const a=s.current.getBoundingClientRect();a.left,a.top;const m={x:a.left+a.width,y:a.top};a.left+a.width,a.top;const v={x:a.left+a.width,y:a.top+a.height},o=t.current[t.current.length-1];let r=t.current[0];if(!o||(r||(r=o),r.x<a.left||r.x>v.x||r.y<a.top||r.y>v.y)||x.current&&o.x===x.current.x&&o.y===x.current.y)return 0;const i=(I,w)=>(w.y-I.y)/(w.x-I.x);let _=m,C=v;_=m,C=v;const k=i(o,_),E=i(o,C),M=i(r,_),L=i(r,C);return k<M&&E>L?(x.current=o,be):(x.current=null,0)},c=a=>{const m=S();m?n.current=setTimeout(()=>{c(a)},m):d(a)};return{onMouseMove:a=>{t.current.push({x:a.pageX,y:a.pageY}),t.current.length>qe&&t.current.shift()},onMouseOver:a=>{n.current&&(clearTimeout(n.current),n.current=null),c(a.target)},onMouseLeave:()=>{n.current&&(clearTimeout(n.current),n.current=null)}}},R=u.createContext(null),V=()=>{const s=u.useContext(R);if(s===null)throw new Error("No provider for SidenavContext");return s};try{R.displayName="SidenavContext",R.__docgenInfo={description:"",displayName:"SidenavContext",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/Sidenav.context.tsx",methods:[],props:{},tags:{}}}catch{}try{V.displayName="useSidenavContext",V.__docgenInfo={description:"The hook that returns the sidenav context. Throws when used outside of `Sidenav`.",displayName:"useSidenavContext",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/Sidenav.context.tsx",methods:[],props:{},tags:{}}}catch{}const F=({ref:s,...N})=>{const{className:j,style:d,children:t,open:n,disableEscapeKeyDown:x,disableItemHover:S,onClose:c}=te({props:N,name:"ESSidenav"}),[p,f]=u.useState(!1),[b,a]=u.useState(null),[m,v]=u.useState(!1),o=u.useRef(null),r=u.useRef(null),i=u.useRef(null),_=ne(()=>{c&&c()});u.useEffect(()=>{const l=q=>{q.key==="Escape"&&c&&_.current()};return n&&c&&!x&&document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[n,x]);const C=l=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{l&&(a(l),n||f(!0))},90)},k=()=>{i.current&&clearTimeout(i.current);const l=document.activeElement,q=document.querySelector(".es-sidenav__drawer");(!(q==null?void 0:q.contains(l))||(l==null?void 0:l.tagName)!=="INPUT")&&(m||f(!1))},E=l=>{if(n&&S)return;const q=l.closest(".es-sidenav-item__wrapper");q&&q.dataset.id?C(q.dataset.id):l.className.toString().includes("es-sidebar-menu")||l.className.toString().includes("es-sidebar__content")?C():(k(),i.current&&clearTimeout(i.current))},M=()=>{c==null||c(),f(!1),v(!1)},L=l=>{if(o.current&&l.key==="ArrowLeft"){const q=o.current.querySelector(`.es-sidenav-item[data-id="${b}"]`);q&&q.focus()}};se("resize",()=>n&&c&&c());const{onMouseMove:I,onMouseOver:w,onMouseLeave:O}=xe(o,"left",p,E),H=u.useMemo(()=>({open:n,hover:p,setHover:f,setItemId:a,itemId:b,disableItemHover:S,onClose:c}),[n,p,f,a,b,S]);return e.jsx(R.Provider,{value:H,children:e.jsxs("div",{ref:s,className:D("es-sidenav",j),style:d,children:[e.jsx("div",{className:"es-sidenav__container",onMouseLeave:k,children:Q.Children.map(t,(l,q)=>q?e.jsx("div",{ref:r,className:D("es-sidenav__drawer",n&&"es-sidenav__drawer--open",p&&"es-sidenav__drawer--hover"),onKeyDown:L,onMouseDown:()=>v(!0),onMouseUp:()=>v(!1),children:Q.cloneElement(l,{open:n||p,hover:p})}):e.jsx("div",{ref:o,className:"es-sidenav__rail",onMouseLeave:O,onMouseMove:I,onMouseOver:w,children:l}))}),!n&&p&&e.jsx("div",{className:D("es-sidenav__overlay",n&&"es-sidenav__overlay--open",p&&"es-sidenav__overlay--hover"),onClick:M})]})})};try{F.displayName="Sidenav",F.__docgenInfo={description:"The Sidenav component is a fixed-position toggleable slide out box.",displayName:"Sidenav",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/Sidenav.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Class applied to the root element.",name:"className",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"string"}},style:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Style applied to the root element.",name:"style",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"CSSProperties"}},open:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Whether the sidebar should be displayed.",name:"open",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"If true, hitting escape will not fire the onClose callback.",name:"disableEscapeKeyDown",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},disableItemHover:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"If true, hovering over `SidenavItem` won't change the selected element when open=true.",name:"disableItemHover",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},onClose:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Callback fired when the component requests to be closed.",name:"onClose",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"(() => void)"}}},tags:{}}}catch{}const P=({ref:s,...N})=>{const{className:j,id:d=null,icon:t,text:n,selected:x,onClick:S,onTouchStart:c,onKeyDown:p,onFocus:f,...b}=te({props:N,name:"ESSidenavItem"}),{open:a,hover:m,itemId:v,setHover:o,setItemId:r,disableItemHover:i}=V(),{color:_}=oe(),[C,k]=u.useState(!1),E=C&&!(d&&d===v),M=u.useRef(null),L=me(M,s),I=u.useRef(!1),w=y=>{c==null||c(y),d&&!a&&(!m||d!==v)&&(I.current=!0)},O=y=>{if(d?(r(d),a||o(!0)):o(!1),I.current){I.current=!1,y.preventDefault(),y.stopPropagation();return}S==null||S(y)},H=y=>{f==null||f(y),d?(r(d),a||o(!0)):o(!1)},l=y=>{if(p==null||p(y),M.current&&y.key==="ArrowRight"){const $=M.current.closest(".es-sidenav").querySelector(".es-sidenav__drawer").querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');$&&$.focus()}},q=u.useCallback(()=>{k(!1)},[]),K=()=>{n&&(!d||d!==v&&a&&i)&&k(!0)};return e.jsx(ce,{disableInteractive:!0,arrow:!!n,distance:-5,enterNextDelay:200,leaveDelay:120,open:E,placement:"right",slotProps:{popper:{className:"es-sidenav-item__tooltip"}},title:e.jsx(e.Fragment,{children:n}),onClose:q,onOpen:K,children:e.jsx("div",{className:"es-sidenav-item__wrapper","data-id":d,children:e.jsx(de,{ref:L,button:!0,className:D("es-sidenav-item",`es-sidenav-item--color--${_}`,j),component:"div","data-id":d,selected:x,onClick:O,onFocus:H,onKeyDown:l,onTouchStart:w,...b,children:e.jsx(pe,{children:t})})})})};try{P.displayName="SidenavItem",P.__docgenInfo={description:"",displayName:"SidenavItem",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/SidenavItem/SidenavItem.tsx",methods:[],props:{component:{defaultValue:null,declarations:[{fileName:"react/src/types/OverridableComponent.types.ts",name:"TypeLiteral"}],description:"The component used for the root node. Either a string to use an HTML element or a component.",name:"component",required:!0,tags:{},type:{name:"ElementType"}},className:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Class applied to the root element.",name:"className",required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"The id of the element.",name:"id",required:!1,tags:{},type:{name:"string | null"}},icon:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Icon for the element.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},text:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Text for the element.",name:"text",required:!1,tags:{},type:{name:"ReactNode"}},selected:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"If true, the component is selected.",name:"selected",required:!1,tags:{},type:{name:"boolean"}}},tags:{see:"`Sidenav`"}}}catch{}const Y=s=>e.jsx(fe,{...s,className:D("sidenav-story-search",s.className)}),B=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h6 px-16 py-16",style:{color:"var(--es-mono-a-a900)"},children:s.title}),e.jsx(ae,{})]}),T=s=>e.jsx("div",{className:"caption",style:{padding:"0 16px",color:"var(--es-mono-a-a600)",flexShrink:"0",flexWrap:"nowrap"},children:s.title}),g=s=>e.jsx(le,{...s,className:D("sidenav-story-menu-item",s.className)}),G=220,J=300,fi={tags:["autodocs"],component:F,parameters:{references:["Sidenav","SidenavItem","Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{disableEscapeKeyDown:{control:{type:"boolean"}},disableItemHover:{control:{type:"boolean"}},color:{control:{type:"select"},options:["default","primary","secondary"]},open:{table:{disable:!0}}},args:{disableEscapeKeyDown:!1,disableItemHover:!1,color:"secondary"}},W={render:function({disableEscapeKeyDown:N,disableItemHover:j,color:d},{globals:{locale:t}}){const[n,x]=u.useState(!1),[S,c]=u.useState(287),[p,f]=u.useState(1),b=u.useRef(null),a=m=>{m.target.selectionStart!==0&&m.stopPropagation()};return e.jsxs("div",{style:{height:"100vh",margin:"-1rem",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(F,{disableEscapeKeyDown:N,disableItemHover:j,open:n,style:{position:"sticky",top:"0"},onClose:()=>x(!1),children:[e.jsxs(z,{color:d,children:[e.jsx(A,{children:e.jsx(P,{icon:e.jsx(h,{}),selected:p===1,onClick:()=>f(1)})}),e.jsx(re,{open:n,onClick:()=>x(!n)}),e.jsxs(A,{children:[e.jsx(P,{icon:e.jsx(h,{}),id:"1",selected:p===2,text:t==="en"?"Projects":"Проекты",onClick:()=>{f(2),console.info("Projects")}}),e.jsx(P,{icon:e.jsx(h,{}),id:"2",selected:p===3,text:t==="en"?"Reports":"Отчеты",onClick:()=>{f(3),console.info("Reports")}})]}),e.jsx(ue,{}),e.jsx(ae,{}),e.jsx(A,{children:e.jsx(P,{icon:e.jsx(ve,{container:!0,containerSize:"24px"}),text:t==="en"?"Profile":"Профиль"})})]}),e.jsx(z,{maxWidth:J,minWidth:G,width:S,onWidthChange:m=>{b.current&&n&&(b.current.style.transition="none",b.current.style.paddingLeft=`${Math.min(Math.max(m,G),J)}px`)},onWidthChangeCommit:m=>{b.current&&n&&(b.current.style.transition="",b.current.style.paddingLeft=""),c(m)},children:e.jsx(R.Consumer,{children:m=>{switch(m==null?void 0:m.itemId){default:case"1":const v=r=>()=>{f(2),r()};return e.jsxs(u.Fragment,{children:[e.jsx(B,{title:t==="en"?"Projects":"Проекты"}),e.jsx(Y,{placeholder:t==="en"?"Search":"Поиск",size:"400",startAdornment:e.jsx(X,{position:"start",children:e.jsx(h,{})}),variant:"outlined",onKeyDown:a}),e.jsxs(U,{children:[e.jsx(T,{title:t==="en"?"Favorites":"Избранное"}),e.jsxs(A,{children:[e.jsx(g,{icon:e.jsx(h,{}),text:t==="en"?"All projects":"Все проекты",onClick:v(()=>console.info("All projects"))}),e.jsx(g,{icon:e.jsx(h,{}),id:"1",text:t==="en"?"Documents":"Документы",onClick:v(()=>console.info("Selected")),children:[...Array(10)].map((r,i)=>e.jsx(g,{inset:!0,text:(t==="en"?"Document":"Документ")+" №"+i,onClick:v(()=>console.info(`Project ${i}`))},i))}),e.jsx(g,{icon:e.jsx(h,{}),id:"2",text:t==="en"?"New projects":"Новые проекты",onClick:()=>console.info("Projects"),children:[...Array(10)].map((r,i)=>e.jsx(g,{inset:!0,text:(t==="en"?"New project":"Новый проект")+" №"+i,onClick:v(()=>console.info(`Project ${i}`))},i))})]}),e.jsx(T,{title:t==="en"?"Current projects":"Текущие проекты"}),e.jsx(A,{children:[...Array(5)].map((r,i)=>e.jsx(g,{icon:e.jsx(h,{}),text:(t==="en"?"Current project":"Текущий проект")+" №"+i,onClick:v(()=>console.info(`Current project ${i}`))},i))})]})]},"1");case"2":const o=r=>()=>{f(3),r()};return e.jsxs(u.Fragment,{children:[e.jsx(B,{title:t==="en"?"Reports":"Отчеты"}),e.jsx(Y,{placeholder:t==="en"?"Search":"Поиск",size:"400",startAdornment:e.jsx(X,{position:"start",children:e.jsx(h,{})}),variant:"outlined",onKeyDown:a}),e.jsxs(U,{children:[e.jsx(T,{title:t==="en"?"Favorites":"Избранное"}),e.jsxs(A,{children:[e.jsx(g,{icon:e.jsx(h,{}),id:"1",text:t==="en"?"All reports":"Все отчеты",onClick:o(()=>console.info("All reports"))}),e.jsx(g,{icon:e.jsx(h,{}),id:"2",text:t==="en"?"Saved reports":"Сохраненные отчеты",onClick:o(()=>console.info("Saved reports")),children:[...Array(5)].map((r,i)=>e.jsx(g,{inset:!0,text:(t==="en"?"Saved report":"Сохраненный отчет")+" №"+i,onClick:o(()=>console.info(`Saved report ${i}`))},i))}),e.jsx(g,{icon:e.jsx(h,{}),id:"3",text:t==="en"?"Scheduled reports":"Запланированные отчеты",children:[...Array(10)].map((r,i)=>e.jsx(g,{inset:!0,text:(t==="en"?"Scheduled report":"Запланированный отчет")+" №"+i,onClick:o(()=>console.info(`Report ${i}`))},i))})]}),e.jsx(T,{title:t==="en"?"Current reports":"Текущие отчеты"}),e.jsx(A,{children:[...Array(5)].map((r,i)=>e.jsx(g,{icon:e.jsx(h,{}),text:(t==="en"?"Current report":"Текущий отчет")+" №"+i,onClick:o(()=>console.info(`Current report ${i}`))},i))})]})]},"2")}}})})]}),e.jsxs("div",{ref:b,style:{transition:"padding-left 0.2s",paddingLeft:`${n?S:0}px`},children:[e.jsx("h2",{children:p}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem. Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse, consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores? Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id, alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil! Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis, minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem, dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi ipsum quaerat odit tempora repellat."}),e.jsx("p",{children:"Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga. Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam, aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente. Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias, in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem, optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt magnam."}),e.jsx("p",{children:"Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae? Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum, dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam."})]})]})}};var Z,ee,ie;W.parameters={...W.parameters,docs:{...(Z=W.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
                        <SearchField placeholder={locale === 'en' ? 'Search' : 'Поиск'} size="400" startAdornment={<FormFieldAdornment position="start">
                              <IconAtLineW500 />
                            </FormFieldAdornment>} variant="outlined" onKeyDown={onInputKeyDown} />

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
                        <SearchField placeholder={locale === 'en' ? 'Search' : 'Поиск'} size="400" startAdornment={<FormFieldAdornment position="start">
                              <IconAtLineW500 />
                            </FormFieldAdornment>} variant="outlined" onKeyDown={onInputKeyDown} />

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

        <div ref={ref} style={{
        transition: 'padding-left 0.2s',
        paddingLeft: \`\${isOpen ? width : 0}px\`
      }}>
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
        </div>
      </div>;
  }
}`,...(ie=(ee=W.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};const qi=["Demo"];export{W as Demo,qi as __namedExportsOrder,fi as default};
