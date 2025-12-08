import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as c}from"./index-DIDRz_s2.js";import{B as Tt}from"./Button-DhPfczDk.js";import{M as wt}from"./Menu-CgxVvckE.js";import{c as T,m as X}from"./memoTheme-DCKoxpDd.js";import{s as w,c as U,r as jt}from"./styled-CkBBDypc.js";import{a as h,L as St}from"./MenuList-BFLSMrOv.js";import{a as et,g as st,h as M}from"./identifier-haEvzVNA.js";import{u as N}from"./DefaultPropsProvider-DX0NN56D.js";import{u as Rt}from"./useEnhancedEffect-BGNjlb7u.js";import{u as ot}from"./useForkRef-Cmn-Dh7x.js";import{B as Mt}from"./ButtonBase-DpehaJbR.js";import{g as Pt,a as At,l as O,b as dt}from"./listItemTextClasses-DPyT4Jx9.js";import{d as pt}from"./dividerClasses-BVmV4PP1.js";import{I as b}from"./IconUploadFillW500-DJyqNYWl.js";import{u as tt}from"./useSlot-CFc0_OMk.js";import{T as q,t as mt}from"./Typography-56Df3xvc.js";import{D as nt}from"./Divider-CdpCW034.js";import{B as $t}from"./Box-CBu-ct3E.js";import{i as ut}from"./isHostComponent-DVu5iVWx.js";import{i as kt}from"./isMuiElement-DbqDAyDR.js";import{g as Ot,l as k}from"./listItemButtonClasses-CTDMcBG6.js";import{I as Ft}from"./IconDotsVerticalLineW400-CBcmE1TX.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./useTheme-Bas6BIKa.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./touchRippleClasses-DyPCunvA.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./SvgIcon-DUjU_dba.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function Ut(t){return et("MuiListItem",t)}st("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const Nt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},Dt=t=>{const{alignItems:e,classes:o,dense:n,disabled:r,disableGutters:a,divider:i,selected:l}=t,g=U({root:["root",n&&"dense",!a&&"gutters",i&&"divider",r&&"disabled",e==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},Ot,o);return{...o,...g}},Et=w(Mt,{shouldForwardProp:t=>jt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Nt})(X(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${k.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),W=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:a=!1,component:i="div",children:l,dense:d=!1,disableGutters:g=!1,divider:j=!1,focusVisibleClassName:S,selected:$=!1,className:R,...x}=n,v=c.useContext(h),m=c.useMemo(()=>({dense:d||v.dense||!1,alignItems:r,disableGutters:g}),[r,v.dense,d,g]),u=c.useRef(null);Rt(()=>{a&&u.current&&u.current.focus()},[a]);const I={...n,alignItems:r,dense:m.dense,disableGutters:g,divider:j,selected:$},y=Dt(I),L=ot(u,o);return s.jsx(h.Provider,{value:m,children:s.jsx(Et,{ref:L,href:x.href||x.to,component:(x.href||x.to)&&i==="div"?"button":i,focusVisibleClassName:T(y.focusVisible,S),ownerState:I,className:T(y.root,R),...x,classes:y,children:l})})});function Gt(t){return et("MuiListItemSecondaryAction",t)}st("MuiListItemSecondaryAction",["root","disableGutters"]);const Wt=t=>{const{disableGutters:e,classes:o}=t;return U({root:["root",e&&"disableGutters"]},Gt,o)},Vt=w("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),Bt=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemSecondaryAction"}),{className:r,...a}=n,i=c.useContext(h),l={...n,disableGutters:i.disableGutters},d=Wt(l);return s.jsx(Vt,{className:T(d.root,r),ownerState:l,ref:o,...a})});Bt.muiName="ListItemSecondaryAction";const _t=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.hasSecondaryAction&&e.secondaryAction]},zt=t=>{const{alignItems:e,classes:o,dense:n,disableGutters:r,disablePadding:a,divider:i,hasSecondaryAction:l}=t;return U({root:["root",n&&"dense",!r&&"gutters",!a&&"padding",i&&"divider",e==="flex-start"&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]},Ut,o)},Ht=w("div",{name:"MuiListItem",slot:"Root",overridesResolver:_t})(X(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${k.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),Yt=w("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),V=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItem"}),{alignItems:r="center",children:a,className:i,component:l,components:d={},componentsProps:g={},ContainerComponent:j="li",ContainerProps:{className:S,...$}={},dense:R=!1,disableGutters:x=!1,disablePadding:v=!1,divider:m=!1,secondaryAction:u,slotProps:I={},slots:y={},...L}=n,z=c.useContext(h),D=c.useMemo(()=>({dense:R||z.dense||!1,alignItems:r,disableGutters:x}),[r,z.dense,R,x]),Z=c.useRef(null),f=c.Children.toArray(a),H=f.length&&kt(f[f.length-1],["ListItemSecondaryAction"]),P={...n,alignItems:r,dense:D.dense,disableGutters:x,disablePadding:v,divider:m,hasSecondaryAction:H},lt=zt(P),ct=ot(Z,o),Y=y.root||d.Root||Ht,E=I.root||g.root||{},G={className:T(lt.root,E.className,i),...L};let A=l||"li";return H?(A=!G.component&&!l?"div":A,j==="li"&&(A==="li"?A="div":G.component==="li"&&(G.component="div")),s.jsx(h.Provider,{value:D,children:s.jsxs(Yt,{as:j,className:T(lt.container,S),ref:ct,ownerState:P,...$,children:[s.jsx(Y,{...E,...!ut(Y)&&{as:A,ownerState:{...P,...E.ownerState}},...G,children:f}),f.pop()]})})):s.jsx(h.Provider,{value:D,children:s.jsxs(Y,{...E,as:A,ref:ct,...!ut(Y)&&{ownerState:{...P,...E.ownerState}},...G,children:[f,u&&s.jsx(Bt,{children:u})]})})}),qt=t=>{const{alignItems:e,classes:o}=t;return U({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Pt,o)},Jt=w("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(X(({theme:t})=>({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),C=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemIcon"}),{className:r,...a}=n,i=c.useContext(h),l={...n,alignItems:i.alignItems},d=qt(l);return s.jsx(Jt,{className:T(d.root,r),ownerState:l,ref:o,...a})}),Kt=t=>{const{classes:e,inset:o,primary:n,secondary:r,dense:a}=t;return U({root:["root",o&&"inset",a&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]},At,e)},Qt=w("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${O.primary}`]:e.primary},{[`& .${O.secondary}`]:e.secondary},e.root,o.inset&&e.inset,o.primary&&o.secondary&&e.multiline,o.dense&&e.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${mt.root}:where(& .${O.primary})`]:{display:"block"},[`.${mt.root}:where(& .${O.secondary})`]:{display:"block"},variants:[{props:({ownerState:t})=>t.primary&&t.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:t})=>t.inset,style:{paddingLeft:56}}]}),p=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiListItemText"}),{children:r,className:a,disableTypography:i=!1,inset:l=!1,primary:d,primaryTypographyProps:g,secondary:j,secondaryTypographyProps:S,slots:$={},slotProps:R={},...x}=n,{dense:v}=c.useContext(h);let m=d??r,u=j;const I={...n,disableTypography:i,inset:l,primary:!!m,secondary:!!u,dense:v},y=Kt(I),L={slots:$,slotProps:{primary:g,secondary:S,...R}},[z,D]=tt("root",{className:T(y.root,a),elementType:Qt,externalForwardedProps:{...L,...x},ownerState:I,ref:o}),[Z,f]=tt("primary",{className:y.primary,elementType:q,externalForwardedProps:L,ownerState:I}),[H,P]=tt("secondary",{className:y.secondary,elementType:q,externalForwardedProps:L,ownerState:I});return m!=null&&m.type!==q&&!i&&(m=s.jsx(Z,{variant:v?"body2":"body1",component:f!=null&&f.variant?void 0:"span",...f,children:m})),u!=null&&u.type!==q&&!i&&(u=s.jsx(H,{variant:"body2",color:"textSecondary",...P,children:u})),s.jsxs(z,{...D,children:[m,u]})});function Xt(t){return et("MuiMenuItem",t)}const _=st("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Zt=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.divider&&e.divider,!o.disableGutters&&e.gutters]},te=t=>{const{disabled:e,dense:o,divider:n,disableGutters:r,selected:a,classes:i}=t,d=U({root:["root",o&&"dense",e&&"disabled",!r&&"gutters",n&&"divider",a&&"selected"]},Xt,i);return{...i,...d}},ee=w(Mt,{shouldForwardProp:t=>jt(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Zt})(X(({theme:t})=>({...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${_.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${_.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:M(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:M(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${_.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${_.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${pt.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${pt.inset}`]:{marginLeft:52},[`& .${O.root}`]:{marginTop:0,marginBottom:0},[`& .${O.inset}`]:{paddingLeft:36},[`& .${dt.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${dt.root} svg`]:{fontSize:"1.25rem"}}}]}))),B=c.forwardRef(function(e,o){const n=N({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:a="li",dense:i=!1,divider:l=!1,disableGutters:d=!1,focusVisibleClassName:g,role:j="menuitem",tabIndex:S,className:$,...R}=n,x=c.useContext(h),v=c.useMemo(()=>({dense:i||x.dense||!1,disableGutters:d}),[x.dense,i,d]),m=c.useRef(null);Rt(()=>{r&&m.current&&m.current.focus()},[r]);const u={...n,dense:v.dense,divider:l,disableGutters:d},I=te(n),y=ot(m,o);let L;return n.disabled||(L=S!==void 0?S:-1),s.jsx(h.Provider,{value:v,children:s.jsx(ee,{ref:y,role:j,tabIndex:L,component:a,focusVisibleClassName:T(I.focusVisible,g),className:T(I.root,$),...R,ownerState:u,classes:I})})}),se=t=>t.globals.locale==="en"?"Open menu":"Открыть меню",rt=t=>t.globals.locale==="en"?"Cut":"Вырезать",it=t=>t.globals.locale==="en"?"Copy":"Копировать",at=t=>t.globals.locale==="en"?"Paste":"Вставить",F=t=>t.globals.locale==="en"?"Action":"Действие",xt=t=>t.globals.locale==="en"?"Dangerous action":"Опасное действие",ls={title:"Overrides/Menu",parameters:{viewMode:"canvas"}},J={render:function(e,o){const[n,r]=c.useState(null),a=l=>{r(l.currentTarget)},i=()=>{r(null)};return s.jsxs("div",{children:[s.jsx(Tt,{variant:"contained",onClick:a,children:se(o)}),s.jsxs(wt,{anchorEl:n,open:!!n,onClose:i,children:[s.jsxs(B,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:rt(o)})]}),s.jsxs(B,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:it(o)})]}),s.jsxs(B,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:at(o)})]}),s.jsx(nt,{}),s.jsx(B,{children:s.jsx(p,{children:F(o)})}),s.jsx(B,{children:s.jsx(p,{inset:!0,children:F(o)})}),s.jsx(B,{children:s.jsx(p,{children:xt(o)})}),s.jsxs(B,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:xt(o)})]})]})]})}},K={render:(t,e)=>s.jsx($t,{sx:o=>({maxWidth:"360px",boxShadow:o.vars.palette.shadow.down[500],backgroundColor:o.vars.palette.surface[400],borderRadius:"4px"}),children:s.jsxs(St,{children:[s.jsxs(V,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:rt(e)})]}),s.jsxs(V,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:it(e)})]}),s.jsxs(V,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:at(e)})]}),s.jsx(nt,{}),s.jsxs(V,{children:[s.jsx(p,{children:F(e)}),s.jsx(Tt,{color:"tertiary",size:"400",sx:{borderRadius:"50%"},children:s.jsx(Ft,{})})]}),s.jsx(V,{children:s.jsx(p,{inset:!0,children:F(e)})})]})})},Q={render:(t,e)=>s.jsx($t,{sx:o=>({maxWidth:"360px",boxShadow:o.vars.palette.shadow.down[500],backgroundColor:o.vars.palette.surface[400],borderRadius:"4px"}),children:s.jsxs(St,{children:[s.jsxs(W,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:rt(e)})]}),s.jsxs(W,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:it(e)})]}),s.jsxs(W,{children:[s.jsx(C,{children:s.jsx(b,{})}),s.jsx(p,{children:at(e)})]}),s.jsx(nt,{}),s.jsx(W,{children:s.jsx(p,{children:F(e)})}),s.jsx(W,{children:s.jsx(p,{inset:!0,children:F(e)})})]})})};var It,gt,yt;J.parameters={...J.parameters,docs:{...(It=J.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconUploadFillW500 />
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
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(yt=(gt=J.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var ft,vt,Lt;K.parameters={...K.parameters,docs:{...(ft=K.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>{getActionText(context)}</ListItemText>
            <Button color="tertiary" size="400" sx={{
            borderRadius: '50%'
          }}>
              <IconDotsVerticalLineW400 />
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </List>
      </Box>;
  }
}`,...(Lt=(vt=K.parameters)==null?void 0:vt.docs)==null?void 0:Lt.source}}};var bt,Ct,ht;Q.parameters={...Q.parameters,docs:{...(bt=Q.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconUploadFillW500 />
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
}`,...(ht=(Ct=Q.parameters)==null?void 0:Ct.docs)==null?void 0:ht.source}}};const cs=["Demo","DemoList","DemoListButton"];export{J as Demo,K as DemoList,Q as DemoListButton,cs as __namedExportsOrder,ls as default};
