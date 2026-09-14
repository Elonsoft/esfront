import{r,a as ie,d as te,j as e,R as H}from"./iframe-Bc8-Q25v.js";import{c as w}from"./clsx.m-CH7BE6MN.js";import{u as J}from"./useDefaultProps-lGeK2dpt.js";import{u as ae,S as V,b as M,a as ne,f as se,d as Z,e as K,c as oe}from"./SidebarToggle-EHshDjRB.js";import{T as re}from"./Tooltip-BgInsn7H.js";import{L as ue}from"./MenuItem-8wSZO-ML.js";import{L as le}from"./ListItemIcon-CUPi4qhb.js";import{I as S}from"./IconAtLineW500-CfSnc5n_.js";import{I as me}from"./IconAccountFillW500Lc-BMy7AYLw.js";import{F as $}from"./FormFieldAdornment-CW6zT670.js";import{T as ce}from"./TextField-j8tsbYSO.js";import"./preload-helper-Dp1pzeXC.js";import"./useDocumentEventListener-DgpvYq_r.js";import"./OverlayScrollbars-BQ9U6_9k.js";import"./IconChevronLeftLineW300-GFBs6Nad.js";import"./SvgIcon-CMA3Mbq7.js";import"./useMediaQuery-DimOjiJZ.js";import"./useResizeObserver-BcWsStiT.js";import"./ListItemText-DDF269fq.js";import"./Button-BCRxDX6B.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";import"./Collapse-CP7fT-uY.js";import"./utils-xjkStw31.js";import"./useTimeout-DowuL8C4.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./Divider-COoXnJWy.js";import"./Popper-DYg-78L5.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BW-pjcFK.js";import"./createTransition-BIZAeqwx.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./Fade-Cz0N_mL7.js";import"./useControlled-BKv9s01-.js";import"./useId-DYzkOzzt.js";import"./useEvent-CCPOMy0K.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerWindow-DZnlFwEW.js";import"./FormField.context-BjwhPGAJ.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./FormFieldLabel-CXp2Zlgj.js";const de=3,pe=300,ve=(u,A,c,j)=>{const i=r.useRef([]),d=r.useRef(null),b=r.useRef(null),p=()=>{if(!u.current||!c)return 0;const a=u.current.getBoundingClientRect();a.left,a.top;const s={x:a.left+a.width,y:a.top};a.left+a.width,a.top;const m={x:a.left+a.width,y:a.top+a.height},v=i.current[i.current.length-1];let n=i.current[0];if(!v||(n||(n=v),n.x<a.left||n.x>m.x||n.y<a.top||n.y>m.y)||b.current&&v.x===b.current.x&&v.y===b.current.y)return 0;const t=(N,_)=>(_.y-N.y)/(_.x-N.x);let y=s,C=m;y=s,C=m;const I=t(v,y),k=t(v,C),E=t(n,y),D=t(n,C);return I<E&&k>D?(b.current=v,pe):(b.current=null,0)},f=a=>{const s=p();s?d.current=setTimeout(()=>{f(a)},s):j(a)};return{onMouseMove:a=>{i.current.push({x:a.pageX,y:a.pageY}),i.current.length>de&&i.current.shift()},onMouseOver:a=>{d.current&&(clearTimeout(d.current),d.current=null),f(a.target)},onMouseLeave:()=>{d.current&&(clearTimeout(d.current),d.current=null)}}},F=r.createContext(null),fe=()=>{const u=r.useContext(F);if(u===null)throw new Error("No provider for SidenavContext");return u},T=u=>{const{className:A,style:c,children:j,open:i,disableEscapeKeyDown:d,disableItemHover:b,onClose:p}=J({props:u,name:"ESSidenav"}),[f,x]=r.useState(!1),[h,q]=r.useState(null),[a,s]=r.useState(!1),m=r.useRef(null),v=r.useRef(null),n=r.useRef(null),t=ie(()=>{p&&p()});r.useEffect(()=>{const l=o=>{o.key==="Escape"&&p&&t.current()};return i&&p&&!d&&document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[i,d]);const y=l=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{l&&(q(l),i||x(!0))},90)},C=()=>{n.current&&clearTimeout(n.current);const l=document.activeElement,o=document.querySelector(".es-sidenav__drawer");(!(o==null?void 0:o.contains(l))||(l==null?void 0:l.tagName)!=="INPUT")&&(a||x(!1))},I=l=>{if(i&&b)return;const o=l.closest(".es-sidenav-item__wrapper");o&&o.dataset.id?y(o.dataset.id):l.className.toString().includes("es-sidebar-menu")||l.className.toString().includes("es-sidebar__content")?y():(C(),n.current&&clearTimeout(n.current))},k=()=>{p==null||p(),x(!1),s(!1)},E=l=>{if(m.current&&l.key==="ArrowLeft"){const o=m.current.querySelector(`.es-sidenav-item[data-id="${h}"]`);o&&o.focus()}};te("resize",()=>i&&p&&p());const{onMouseMove:D,onMouseOver:N,onMouseLeave:_}=ve(m,"left",f,I),W=r.useMemo(()=>({open:i,hover:f,setHover:x,setItemId:q,itemId:h,disableItemHover:b,onClose:p}),[i,f,x,q,h,b]);return e.jsx(F.Provider,{value:W,children:e.jsxs("div",{className:w("es-sidenav",A),style:c,children:[e.jsx("div",{className:"es-sidenav__container",onMouseLeave:C,children:H.Children.map(j,(l,o)=>o?e.jsx("div",{ref:v,className:w("es-sidenav__drawer",i&&"es-sidenav__drawer--open",f&&"es-sidenav__drawer--hover"),onKeyDown:E,onMouseDown:()=>s(!0),onMouseUp:()=>s(!1),children:H.cloneElement(l,{open:i||f,hover:f})}):e.jsx("div",{ref:m,className:"es-sidenav__rail",onMouseLeave:_,onMouseMove:D,onMouseOver:N,children:l}))}),!i&&f&&e.jsx("div",{className:w("es-sidenav__overlay",i&&"es-sidenav__overlay--open",f&&"es-sidenav__overlay--hover"),onClick:k})]})})};try{T.displayName="Sidenav",T.__docgenInfo={description:"The Sidenav component is a fixed-position toggleable slide out box.",displayName:"Sidenav",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/Sidenav.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Class applied to the root element.",name:"className",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"string"}},style:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Style applied to the root element.",name:"style",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"CSSProperties"}},open:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Whether the sidebar should be displayed.",name:"open",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"If true, hitting escape will not fire the onClose callback.",name:"disableEscapeKeyDown",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},disableItemHover:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"If true, hovering over `SidenavItem` won't change the selected element when open=true.",name:"disableItemHover",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"boolean"}},onClose:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"}],description:"Callback fired when the component requests to be closed.",name:"onClose",parent:{fileName:"react/src/components/Sidenav/Sidenav.types.ts",name:"SidenavProps"},required:!1,tags:{},type:{name:"(() => void)"}}},tags:{}}}catch{}const P=u=>{const{className:A,id:c=null,icon:j,text:i,selected:d,onClick:b,onTouchStart:p,onKeyDown:f,onFocus:x,...h}=J({props:u,name:"ESSidenavItem"}),{open:q,hover:a,itemId:s,setHover:m,setItemId:v,disableItemHover:n}=fe(),{color:t}=ae(),[y,C]=r.useState(!1),I=r.useRef(null),k=r.useRef(!1),E=o=>{p==null||p(o),c&&!q&&(!a||c!==s)&&(k.current=!0)},D=o=>{if(c?(v(c),q||m(!0)):m(!1),k.current){k.current=!1,o.preventDefault(),o.stopPropagation();return}b==null||b(o)},N=o=>{x==null||x(o),c?(v(c),q||m(!0)):m(!1)},_=o=>{if(f==null||f(o),I.current&&o.key==="ArrowRight"){const O=I.current.closest(".es-sidenav").querySelector(".es-sidenav__drawer").querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');O&&O.focus()}},W=r.useCallback(()=>{C(!1)},[]),l=()=>{i&&(!c||c!==s&&q&&n)&&C(!0)};return r.useEffect(()=>{y&&c&&c===s&&C(!1)},[y,c,s]),e.jsx(re,{disableInteractive:!0,arrow:!!i,distance:-5,enterNextDelay:200,leaveDelay:120,open:y,placement:"right",slotProps:{popper:{className:"es-sidenav-item__tooltip"}},title:e.jsx(e.Fragment,{children:i}),onClose:W,onOpen:l,children:e.jsx("div",{className:"es-sidenav-item__wrapper","data-id":c,children:e.jsx(ue,{ref:I,button:!0,className:w("es-sidenav-item",`es-sidenav-item--color--${t}`,A),"data-id":c,selected:d,onClick:D,onFocus:N,onKeyDown:_,onTouchStart:E,...h,children:e.jsx(le,{children:j})})})})};try{P.displayName="SidenavItem",P.__docgenInfo={description:"",displayName:"SidenavItem",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Sidenav/SidenavItem/SidenavItem.tsx",methods:[],props:{component:{defaultValue:null,declarations:[{fileName:"react/src/types/OverridableComponent.types.ts",name:"TypeLiteral"}],description:"The component used for the root node. Either a string to use an HTML element or a component.",name:"component",required:!0,tags:{},type:{name:"ElementType"}},className:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Class applied to the root element.",name:"className",required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"The id of the element.",name:"id",required:!1,tags:{},type:{name:"string | null"}},icon:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Icon for the element.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},text:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"Text for the element.",name:"text",required:!1,tags:{},type:{name:"ReactNode"}},selected:{defaultValue:null,declarations:[{fileName:"react/src/components/Sidenav/SidenavItem/SidenavItem.types.ts",name:"TypeLiteral"}],description:"If true, the component is selected.",name:"selected",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const Q=u=>e.jsx(ce,{...u,className:w("sidenav-story-search",u.className)}),z=u=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h6 px-16 py-16",style:{color:"var(--es-mono-a-a900)"},children:u.title}),e.jsx(Z,{})]}),L=u=>e.jsx("div",{className:"caption",style:{padding:"0 16px",color:"var(--es-mono-a-a600)",flexShrink:"0",flexWrap:"nowrap"},children:u.title}),g=u=>e.jsx(oe,{...u,className:w("sidenav-story-menu-item",u.className)}),U=220,X=300,ni={tags:["autodocs"],component:T,parameters:{references:["Sidenav","SidenavItem","Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{disableEscapeKeyDown:{control:{type:"boolean"}},disableItemHover:{control:{type:"boolean"}},color:{control:{type:"select"},options:["default","primary","secondary"]},open:{table:{disable:!0}}},args:{disableEscapeKeyDown:!1,disableItemHover:!1,color:"secondary"}},R={render:function({disableEscapeKeyDown:A,disableItemHover:c,color:j},{globals:{locale:i}}){const[d,b]=r.useState(!1),[p,f]=r.useState(287),[x,h]=r.useState(1),q=r.useRef(null),a=s=>{s.target.selectionStart!==0&&s.stopPropagation()};return e.jsxs("div",{style:{height:"100vh",margin:"-1rem",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(T,{disableEscapeKeyDown:A,disableItemHover:c,open:d,style:{position:"sticky",top:"0"},onClose:()=>b(!1),children:[e.jsxs(V,{color:j,children:[e.jsx(M,{children:e.jsx(P,{icon:e.jsx(S,{}),selected:x===1,onClick:()=>h(1)})}),e.jsx(ne,{open:d,onClick:()=>b(!d)}),e.jsxs(M,{children:[e.jsx(P,{icon:e.jsx(S,{}),id:"1",selected:x===2,text:i==="en"?"Projects":"Проекты",onClick:()=>{h(2),console.info("Projects")}}),e.jsx(P,{icon:e.jsx(S,{}),id:"2",selected:x===3,text:i==="en"?"Reports":"Отчеты",onClick:()=>{h(3),console.info("Reports")}})]}),e.jsx(se,{}),e.jsx(Z,{}),e.jsx(M,{children:e.jsx(P,{icon:e.jsx(me,{container:!0,containerSize:"24px"}),text:i==="en"?"Profile":"Профиль"})})]}),e.jsx(V,{maxWidth:X,minWidth:U,width:p,onWidthChange:s=>{q.current&&d&&(q.current.style.transition="none",q.current.style.paddingLeft=`${Math.min(Math.max(s,U),X)}px`)},onWidthChangeCommit:s=>{q.current&&d&&(q.current.style.transition="",q.current.style.paddingLeft=""),f(s)},children:e.jsx(F.Consumer,{children:s=>{switch(s==null?void 0:s.itemId){default:case"1":const m=n=>()=>{h(2),n()};return e.jsxs(r.Fragment,{children:[e.jsx(z,{title:i==="en"?"Projects":"Проекты"}),e.jsx(Q,{placeholder:i==="en"?"Search":"Поиск",size:"400",startAdornment:e.jsx($,{position:"start",children:e.jsx(S,{})}),variant:"outlined",onKeyDown:a}),e.jsxs(K,{children:[e.jsx(L,{title:i==="en"?"Favorites":"Избранное"}),e.jsxs(M,{children:[e.jsx(g,{icon:e.jsx(S,{}),text:i==="en"?"All projects":"Все проекты",onClick:m(()=>console.info("All projects"))}),e.jsx(g,{icon:e.jsx(S,{}),id:"1",text:i==="en"?"Documents":"Документы",onClick:m(()=>console.info("Selected")),children:[...Array(10)].map((n,t)=>e.jsx(g,{inset:!0,text:(i==="en"?"Document":"Документ")+" №"+t,onClick:m(()=>console.info(`Project ${t}`))},t))}),e.jsx(g,{icon:e.jsx(S,{}),id:"2",text:i==="en"?"New projects":"Новые проекты",onClick:()=>console.info("Projects"),children:[...Array(10)].map((n,t)=>e.jsx(g,{inset:!0,text:(i==="en"?"New project":"Новый проект")+" №"+t,onClick:m(()=>console.info(`Project ${t}`))},t))})]}),e.jsx(L,{title:i==="en"?"Current projects":"Текущие проекты"}),e.jsx(M,{children:[...Array(5)].map((n,t)=>e.jsx(g,{icon:e.jsx(S,{}),text:(i==="en"?"Current project":"Текущий проект")+" №"+t,onClick:m(()=>console.info(`Current project ${t}`))},t))})]})]},"1");case"2":const v=n=>()=>{h(3),n()};return e.jsxs(r.Fragment,{children:[e.jsx(z,{title:i==="en"?"Reports":"Отчеты"}),e.jsx(Q,{placeholder:i==="en"?"Search":"Поиск",size:"400",startAdornment:e.jsx($,{position:"start",children:e.jsx(S,{})}),variant:"outlined",onKeyDown:a}),e.jsxs(K,{children:[e.jsx(L,{title:i==="en"?"Favorites":"Избранное"}),e.jsxs(M,{children:[e.jsx(g,{icon:e.jsx(S,{}),id:"1",text:i==="en"?"All reports":"Все отчеты",onClick:v(()=>console.info("All reports"))}),e.jsx(g,{icon:e.jsx(S,{}),id:"2",text:i==="en"?"Saved reports":"Сохраненные отчеты",onClick:v(()=>console.info("Saved reports")),children:[...Array(5)].map((n,t)=>e.jsx(g,{inset:!0,text:(i==="en"?"Saved report":"Сохраненный отчет")+" №"+t,onClick:v(()=>console.info(`Saved report ${t}`))},t))}),e.jsx(g,{icon:e.jsx(S,{}),id:"3",text:i==="en"?"Scheduled reports":"Запланированные отчеты",children:[...Array(10)].map((n,t)=>e.jsx(g,{inset:!0,text:(i==="en"?"Scheduled report":"Запланированный отчет")+" №"+t,onClick:v(()=>console.info(`Report ${t}`))},t))})]}),e.jsx(L,{title:i==="en"?"Current reports":"Текущие отчеты"}),e.jsx(M,{children:[...Array(5)].map((n,t)=>e.jsx(g,{icon:e.jsx(S,{}),text:(i==="en"?"Current report":"Текущий отчет")+" №"+t,onClick:v(()=>console.info(`Current report ${t}`))},t))})]})]},"2")}}})})]}),e.jsxs("div",{ref:q,style:{transition:"padding-left 0.2s",paddingLeft:`${d?p:0}px`},children:[e.jsx("h2",{children:x}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem. Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse, consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores? Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id, alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil! Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis, minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem, dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi ipsum quaerat odit tempora repellat."}),e.jsx("p",{children:"Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga. Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam, aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente. Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias, in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem, optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt magnam."}),e.jsx("p",{children:"Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae? Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum, dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam."})]})]})}};var Y,B,G;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(B=R.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const si=["Demo"];export{R as Demo,si as __namedExportsOrder,ni as default};
