import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as $t}from"./Button-Kloa1MkC.js";import{M as wt}from"./Menu-BU22523T.js";import{b as E,_ as P,a,h as v}from"./useThemeProps-DJft-tfL.js";import{c as L}from"./clsx-B-dksMZM.js";import{g as tt,a as et,s as S,c as V,r as Mt}from"./generateUtilityClasses-D4qQEpRV.js";import{a as C,L as Rt}from"./MenuList-Ccyljjh3.js";import{u as st}from"./useEnhancedEffect-BGNjlb7u.js";import{u as ot}from"./useForkRef-B4JCUkpP.js";import{B as nt}from"./ButtonBase-93FdoIZB.js";import{g as Ut,a as Gt,l as Q,b as ut}from"./listItemTextClasses-DSB--X9b.js";import{d as xt}from"./dividerClasses-DDuAdS6-.js";import{I as b}from"./IconUpload-DsHWHDua.js";import{T as Y}from"./Typography-BriYb5H6.js";import{D as at}from"./Divider-DrLGcsND.js";import{B as Bt}from"./Box-BsYG6vwI.js";import{i as Et}from"./isMuiElement-WSaQkCi4.js";import{i as It}from"./appendOwnerState-B9NMWNaQ.js";import{g as Vt,l as w}from"./listItemButtonClasses-BJffCrLM.js";import{I as Dt}from"./IconDotsVerticalW400-4koWB9ao.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./touchRippleClasses-Cax1NGQM.js";import"./useIsFocusVisible-moa6TI2l.js";import"./SvgIcon-DnRBQAn1.js";import"./clsx-KPMS8x67.js";function _t(t){return et("MuiListItem",t)}const U=tt("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Ft=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Wt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},zt=t=>{const{alignItems:e,classes:o,dense:n,disabled:i,disableGutters:c,divider:r,selected:l}=t,u=V({root:["root",n&&"dense",!c&&"gutters",r&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},Vt,o);return a({},o,u)},Ht=S(nt,{shouldForwardProp:t=>Mt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Wt})(({theme:t,ownerState:e})=>a({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${w.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),_=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:c=!1,component:r="div",children:l,dense:d=!1,disableGutters:u=!1,divider:h=!1,focusVisibleClassName:T,selected:j=!1,className:$}=n,m=P(n,Ft),I=p.useContext(C),g=p.useMemo(()=>({dense:d||I.dense||!1,alignItems:i,disableGutters:u}),[i,I.dense,d,u]),f=p.useRef(null);st(()=>{c&&f.current&&f.current.focus()},[c]);const M=a({},n,{alignItems:i,dense:g.dense,disableGutters:u,divider:h,selected:j}),R=zt(M),B=ot(f,o);return s.jsx(C.Provider,{value:g,children:s.jsx(Ht,a({ref:B,href:m.href||m.to,component:(m.href||m.to)&&r==="div"?"button":r,focusVisibleClassName:L(R.focusVisible,T),ownerState:M,className:L(R.root,$)},m,{classes:R,children:l}))})});function Yt(t){return et("MuiListItemSecondaryAction",t)}tt("MuiListItemSecondaryAction",["root","disableGutters"]);const qt=["className"],Jt=t=>{const{disableGutters:e,classes:o}=t;return V({root:["root",e&&"disableGutters"]},Yt,o)},Kt=S("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Ot=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=n,c=P(n,qt),r=p.useContext(C),l=a({},n,{disableGutters:r.disableGutters}),d=Jt(l);return s.jsx(Kt,a({className:L(d.root,i),ownerState:l,ref:o},c))});Ot.muiName="ListItemSecondaryAction";const Qt=["className"],Xt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Zt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.button&&e.button,o.hasSecondaryAction&&e.secondaryAction]},te=t=>{const{alignItems:e,button:o,classes:n,dense:i,disabled:c,disableGutters:r,disablePadding:l,divider:d,hasSecondaryAction:u,selected:h}=t;return V({root:["root",i&&"dense",!r&&"gutters",!l&&"padding",d&&"divider",c&&"disabled",o&&"button",e==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",h&&"selected"],container:["container"]},_t,n)},ee=S("div",{name:"MuiListItem",slot:"Root",overridesResolver:Zt})(({theme:t,ownerState:e})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&a({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${w.root}`]:{paddingRight:48}},{[`&.${U.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${U.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${U.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${U.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${U.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),se=S("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),F=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:c=!1,button:r=!1,children:l,className:d,component:u,components:h={},componentsProps:T={},ContainerComponent:j="li",ContainerProps:{className:$}={},dense:m=!1,disabled:I=!1,disableGutters:g=!1,disablePadding:f=!1,divider:M=!1,focusVisibleClassName:R,secondaryAction:B,selected:kt=!1,slotProps:At={},slots:Pt={}}=n,St=P(n.ContainerProps,Qt),Nt=P(n,Xt),lt=p.useContext(C),X=p.useMemo(()=>({dense:m||lt.dense||!1,alignItems:i,disableGutters:g}),[i,lt.dense,m,g]),Z=p.useRef(null);st(()=>{c&&Z.current&&Z.current.focus()},[c]);const N=p.Children.toArray(l),dt=N.length&&Et(N[N.length-1],["ListItemSecondaryAction"]),z=a({},n,{alignItems:i,autoFocus:c,button:r,dense:X.dense,disabled:I,disableGutters:g,disablePadding:f,divider:M,hasSecondaryAction:dt,selected:kt}),pt=te(z),mt=ot(Z,o),H=Pt.root||h.Root||ee,D=At.root||T.root||{},O=a({className:L(pt.root,D.className,d),disabled:I},Nt);let k=u||"li";return r&&(O.component=u||"div",O.focusVisibleClassName=L(U.focusVisible,R),k=nt),dt?(k=!O.component&&!u?"div":k,j==="li"&&(k==="li"?k="div":O.component==="li"&&(O.component="div")),s.jsx(C.Provider,{value:X,children:s.jsxs(se,a({as:j,className:L(pt.container,$),ref:mt,ownerState:z},St,{children:[s.jsx(H,a({},D,!It(H)&&{as:k,ownerState:a({},z,D.ownerState)},O,{children:N})),N.pop()]}))})):s.jsx(C.Provider,{value:X,children:s.jsxs(H,a({},D,{as:k,ref:mt},!It(H)&&{ownerState:a({},z,D.ownerState)},O,{children:[N,B&&s.jsx(Ot,{children:B})]}))})}),oe=["className"],ne=t=>{const{alignItems:e,classes:o}=t;return V({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Ut,o)},ae=S("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:t,ownerState:e})=>a({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},e.alignItems==="flex-start"&&{marginTop:8})),y=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiListItemIcon"}),{className:i}=n,c=P(n,oe),r=p.useContext(C),l=a({},n,{alignItems:r.alignItems}),d=ne(l);return s.jsx(ae,a({className:L(d.root,i),ownerState:l,ref:o},c))}),ie=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],re=t=>{const{classes:e,inset:o,primary:n,secondary:i,dense:c}=t;return V({root:["root",o&&"inset",c&&"dense",n&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},Gt,e)},ce=S("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${Q.primary}`]:e.primary},{[`& .${Q.secondary}`]:e.secondary},e.root,o.inset&&e.inset,o.primary&&o.secondary&&e.multiline,o.dense&&e.dense]}})(({ownerState:t})=>a({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),x=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiListItemText"}),{children:i,className:c,disableTypography:r=!1,inset:l=!1,primary:d,primaryTypographyProps:u,secondary:h,secondaryTypographyProps:T}=n,j=P(n,ie),{dense:$}=p.useContext(C);let m=d??i,I=h;const g=a({},n,{disableTypography:r,inset:l,primary:!!m,secondary:!!I,dense:$}),f=re(g);return m!=null&&m.type!==Y&&!r&&(m=s.jsx(Y,a({variant:$?"body2":"body1",className:f.primary,component:u!=null&&u.variant?void 0:"span",display:"block"},u,{children:m}))),I!=null&&I.type!==Y&&!r&&(I=s.jsx(Y,a({variant:"body2",className:f.secondary,color:"text.secondary",display:"block"},T,{children:I}))),s.jsxs(ce,a({className:L(f.root,c),ownerState:g,ref:o},j,{children:[m,I]}))});function le(t){return et("MuiMenuItem",t)}const W=tt("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),de=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],pe=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.divider&&e.divider,!o.disableGutters&&e.gutters]},me=t=>{const{disabled:e,dense:o,divider:n,disableGutters:i,selected:c,classes:r}=t,d=V({root:["root",o&&"dense",e&&"disabled",!i&&"gutters",n&&"divider",c&&"selected"]},le,r);return a({},r,d)},ue=S(nt,{shouldForwardProp:t=>Mt(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:pe})(({theme:t,ownerState:e})=>a({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${W.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${W.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${W.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v.alpha(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${W.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${W.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${xt.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${xt.inset}`]:{marginLeft:52},[`& .${Q.root}`]:{marginTop:0,marginBottom:0},[`& .${Q.inset}`]:{paddingLeft:36},[`& .${ut.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&a({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${ut.root} svg`]:{fontSize:"1.25rem"}}))),A=p.forwardRef(function(e,o){const n=E({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:c="li",dense:r=!1,divider:l=!1,disableGutters:d=!1,focusVisibleClassName:u,role:h="menuitem",tabIndex:T,className:j}=n,$=P(n,de),m=p.useContext(C),I=p.useMemo(()=>({dense:r||m.dense||!1,disableGutters:d}),[m.dense,r,d]),g=p.useRef(null);st(()=>{i&&g.current&&g.current.focus()},[i]);const f=a({},n,{dense:I.dense,divider:l,disableGutters:d}),M=me(n),R=ot(g,o);let B;return n.disabled||(B=T!==void 0?T:-1),s.jsx(C.Provider,{value:I,children:s.jsx(ue,a({ref:R,role:h,tabIndex:B,component:c,focusVisibleClassName:L(M.focusVisible,u),className:L(M.root,j)},$,{ownerState:f,classes:M}))})}),xe=t=>t.globals.locale==="en"?"Open menu":"Открыть меню",it=t=>t.globals.locale==="en"?"Cut":"Вырезать",rt=t=>t.globals.locale==="en"?"Copy":"Копировать",ct=t=>t.globals.locale==="en"?"Paste":"Вставить",G=t=>t.globals.locale==="en"?"Action":"Действие",gt=t=>t.globals.locale==="en"?"Dangerous action":"Опасное действие",ms={title:"Overrides/Menu",parameters:{viewMode:"canvas"}},q={render:function(e,o){const[n,i]=p.useState(null),c=l=>{i(l.currentTarget)},r=()=>{i(null)};return s.jsxs("div",{children:[s.jsx($t,{variant:"contained",onClick:c,children:xe(o)}),s.jsxs(wt,{anchorEl:n,open:!!n,onClose:r,children:[s.jsxs(A,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:it(o)})]}),s.jsxs(A,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:rt(o)})]}),s.jsxs(A,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:ct(o)})]}),s.jsx(at,{}),s.jsx(A,{children:s.jsx(x,{children:G(o)})}),s.jsx(A,{children:s.jsx(x,{inset:!0,children:G(o)})}),s.jsx(A,{children:s.jsx(x,{children:gt(o)})}),s.jsxs(A,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:gt(o)})]})]})]})}},J={render:(t,e)=>s.jsx(Bt,{sx:o=>({maxWidth:"360px",boxShadow:o.vars.palette.shadow.down[500],backgroundColor:o.vars.palette.surface[400],borderRadius:"4px"}),children:s.jsxs(Rt,{children:[s.jsxs(F,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:it(e)})]}),s.jsxs(F,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:rt(e)})]}),s.jsxs(F,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:ct(e)})]}),s.jsx(at,{}),s.jsxs(F,{children:[s.jsx(x,{children:G(e)}),s.jsx($t,{color:"tertiary",size:"400",sx:{borderRadius:"50%"},children:s.jsx(Dt,{})})]}),s.jsx(F,{children:s.jsx(x,{inset:!0,children:G(e)})})]})})},K={render:(t,e)=>s.jsx(Bt,{sx:o=>({maxWidth:"360px",boxShadow:o.vars.palette.shadow.down[500],backgroundColor:o.vars.palette.surface[400],borderRadius:"4px"}),children:s.jsxs(Rt,{children:[s.jsxs(_,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:it(e)})]}),s.jsxs(_,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:rt(e)})]}),s.jsxs(_,{children:[s.jsx(y,{children:s.jsx(b,{})}),s.jsx(x,{children:ct(e)})]}),s.jsx(at,{}),s.jsx(_,{children:s.jsx(x,{children:G(e)})}),s.jsx(_,{children:s.jsx(x,{inset:!0,children:G(e)})})]})})};var vt,ft,bt;q.parameters={...q.parameters,docs:{...(vt=q.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: function Render(_args, context) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const onClose = () => {
      setAnchorEl(null);
    };
    return <div>
        <Button variant="contained" onClick={onClick}>
          {getButtonText(context)}
        </Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(bt=(ft=q.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var yt,Lt,Ct;J.parameters={...J.parameters,docs:{...(yt=J.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: (_args, context) => {
    return <Box sx={theme => ({
      maxWidth: '360px',
      boxShadow: theme.vars.palette.shadow.down[500],
      backgroundColor: theme.vars.palette.surface[400],
      borderRadius: '4px'
    })}>
        <List>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>{getActionText(context)}</ListItemText>
            <Button color="tertiary" size="400" sx={{
            borderRadius: '50%'
          }}>
              <IconDotsVerticalW400 />
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </List>
      </Box>;
  }
}`,...(Ct=(Lt=J.parameters)==null?void 0:Lt.docs)==null?void 0:Ct.source}}};var ht,Tt,jt;K.parameters={...K.parameters,docs:{...(ht=K.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: (_args, context) => {
    return <Box sx={theme => ({
      maxWidth: '360px',
      boxShadow: theme.vars.palette.shadow.down[500],
      backgroundColor: theme.vars.palette.surface[400],
      borderRadius: '4px'
    })}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItemButton>
        </List>
      </Box>;
  }
}`,...(jt=(Tt=K.parameters)==null?void 0:Tt.docs)==null?void 0:jt.source}}};const us=["Demo","DemoList","DemoListButton"];export{q as Demo,J as DemoList,K as DemoListButton,us as __namedExportsOrder,ms as default};
