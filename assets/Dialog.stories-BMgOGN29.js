import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-Wm5baAvf.js";import{c}from"./clsx.m-C7bORDfW.js";import{u as V}from"./DefaultPropsProvider-BaGbio7E.js";import{F as pe}from"./Fade-C3LuwS6k.js";import{e as O}from"./identifier-BWvkVwSG.js";import{u as ge}from"./useId-BsPUOvOw.js";import{M as fe,B as be}from"./Modal-exZMVhKV.js";import{u as Ce}from"./DialogStack.context-C-3qS0Ep.js";import{B as n}from"./Button-BRu9apcn.js";import{I as ve}from"./IconArrowRightLineW500-YcbLgK2w.js";import{I as he}from"./IconArrowLeftLineW500-DTtVFMXB.js";import{D as j,a as q,b as x}from"./DialogTitle-DgU8iFW9.js";import{I as ye}from"./IconCloseLineW600-DJYrcAqu.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./useTheme-LLMgoSjJ.js";import"./clsx-B-dksMZM.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";import"./useStuckSentinel-D9wUrkuC.js";import"./useIntersectionObserver-CywOKxjJ.js";import"./useLatest-C1UtP6al.js";const je={enter:O.enteringScreen,exit:O.leavingScreen},l=f.forwardRef(function(i,t){const o=V({props:i,name:"MuiDialog"}),{"aria-describedby":r,"aria-labelledby":s,children:u,before:S,after:T,className:se,disableEscapeKeyDown:ae=!1,fullScreen:m=!1,fullWidth:ie=m,maxWidth:re="100%",align:oe="center",onClose:_,open:P,BackdropProps:C,TransitionComponent:ne=pe,transitionDuration:W=je,TransitionProps:ue,...ce}=o,B=f.useRef(null),v=f.useRef(null),le=N=>{B.current&&B.current===N.target?v.current=!0:v.current=!1},me=N=>{v.current&&(v.current=null,_&&_(N,"backdropClick"))},de=ge(s);return e.jsx(fe,{ref:t,closeAfterTransition:!0,BackdropComponent:be,BackdropProps:{transitionDuration:W,...C,className:c("es-dialog__backdrop",C==null?void 0:C.className)},className:c("es-dialog",se),disableEscapeKeyDown:ae,open:P||!1,onClick:me,onClose:_,...ce,children:e.jsx(ne,{appear:!0,in:P,role:"presentation",timeout:W,...ue,children:e.jsx("div",{className:c("es-dialog__container",m&&"es-dialog__container--full-screen"),onMouseDown:le,children:e.jsx("div",{ref:B,"aria-describedby":r,"aria-labelledby":de,className:c("es-dialog__wrapper",`es-dialog__wrapper--align--${oe}`,m&&"es-dialog__wrapper--full-screen"),role:"dialog",children:e.jsxs("div",{className:c("es-dialog__content",ie&&"es-dialog__content--full-width",m&&"es-dialog__content--full-screen"),style:{maxWidth:re},children:[S,e.jsx("div",{className:c("es-dialog__paper",m&&"es-dialog__paper--full-screen"),children:u}),T]})})})})})});try{l.displayName="Dialog",l.__docgenInfo={description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",displayName:"Dialog",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Dialog children, usually the included sub-components.",name:"children",required:!1,type:{name:"ReactNode"}},before:{defaultValue:null,description:"Content inserted before the paper element.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Content inserted after the paper element.",name:"after",required:!1,type:{name:"ReactNode"}},"aria-describedby":{defaultValue:null,description:"The id(s) of the element(s) that describe the dialog.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"The id(s) of the element(s) that label the dialog.",name:"aria-labelledby",required:!1,type:{name:"string"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},fullScreen:{defaultValue:{value:"false"},description:"If `true`, the dialog is full-screen.",name:"fullScreen",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the dialog stretches to `maxWidth`.\n\nNotice that the dialog width grow is limited by the default margin.",name:"fullWidth",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"'100%'"},description:`Determine the max-width of the dialog.
The dialog width grows with the size of the screen.`,name:"maxWidth",required:!1,type:{name:"string"}},align:{defaultValue:{value:"'center'"},description:"Dialog vertical alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"flex-end"'},{value:'"center"'},{value:'"flex-start"'}]}},hideBackdrop:{defaultValue:null,description:"If true, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},BackdropProps:{defaultValue:null,description:"Props applied to the backdrop element.",name:"BackdropProps",required:!1,type:{name:'Partial<BackdropProps<"div", {}>>'}},TransitionComponent:{defaultValue:null,description:"The component used for the transition.",name:"TransitionComponent",required:!1,type:{name:"JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>"}},TransitionProps:{defaultValue:null,description:"Props applied to the transition element.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},transitionDuration:{defaultValue:{value:"{ enter: duration.enteringScreen, exit: duration.leavingScreen }"},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"transitionDuration",required:!1,type:{name:"number | { appear?: number; enter?: number; exit?: number | undefined; } | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | undefined"}}}}}catch{}const y=a=>{const{className:i,style:t,direction:o,onClick:r,labelPrev:s,labelNext:u,iconPrev:S=e.jsx(he,{}),iconNext:T=e.jsx(ve,{})}=V({props:a,name:"ESDialogArrow"});return e.jsx("div",{className:c("es-dialog-arrow",`es-dialog-arrow--${o}`,i),style:t,children:e.jsx(n,{"aria-label":o==="prev"?s:u,className:"es-dialog-arrow__button",color:"white",variant:"text",onClick:r,children:o==="prev"?S:T})})};try{y.displayName="DialogArrow",y.__docgenInfo={description:"",displayName:"DialogArrow",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"prev"'},{value:'"next"'}]}},onClick:{defaultValue:null,description:"Callback fired when the button is clicked.",name:"onClick",required:!1,type:{name:"(() => void)"}},labelPrev:{defaultValue:null,description:"Text for the prev button aria-label.",name:"labelPrev",required:!1,type:{name:"string"}},labelNext:{defaultValue:null,description:"Text for the next button aria-label.",name:"labelNext",required:!1,type:{name:"string"}},iconPrev:{defaultValue:null,description:"Icon for the prev button.",name:"iconPrev",required:!1,type:{name:"string"}},iconNext:{defaultValue:null,description:"Icon for the next button.",name:"iconNext",required:!1,type:{name:"string"}}}}}catch{}const w=a=>{const{className:i,style:t,onClick:o,label:r,labelEscapeKey:s,icon:u=e.jsx(ye,{})}=V({props:a,name:"ESDialogClose"});return e.jsx("div",{className:c("es-dialog-close",i),style:t,children:e.jsxs(n,{"aria-label":r,className:"es-dialog-close__button",color:"white",onClick:o,children:[u,e.jsx("div",{className:"es-dialog-close__escape-key caption",children:s})]})})};try{w.displayName="DialogClose",w.__docgenInfo={description:"",displayName:"DialogClose",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Callback fired when the button is clicked.",name:"onClick",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"Text for the button aria-label.",name:"label",required:!1,type:{name:"string"}},labelEscapeKey:{defaultValue:null,description:"Text for the escape key.",name:"labelEscapeKey",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon for the button.",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const k=()=>{const a=Ce(),i=f.useRef([]);return f.useEffect(()=>()=>{i.current.forEach(t=>{a.close(t)})},[]),{...a,open:(t,o)=>{const r=a.open(t,o);return i.current.push(r.id),r.afterClosed.then(()=>{i.current=i.current.filter(s=>s!==r.id)}),r}}},b=a=>a.globals.locale==="en"?"Open dialog window":"Открыть диалоговое окно",D=a=>a.globals.locale==="en"?"Heading":"Заголовок",M=a=>a.globals.locale==="en"?"Cancel":"Отмена",A=a=>a.globals.locale==="en"?"Create":"Создать",lt={tags:["autodocs"],component:l,parameters:{references:["Dialog","DialogActions","DialogArrow","DialogClose","DialogTitle","DialogStackProvider"]},argTypes:{DialogTitleSticky:{name:"sticky",description:"Whether the actions should be sticky.",table:{category:"DialogTitle"},defaultValue:!0,control:{type:"boolean"}},DialogActionsSticky:{name:"sticky",description:"Whether the title should be sticky.",table:{category:"DialogActions"},defaultValue:!0,control:{type:"boolean"}}},args:{DialogTitleSticky:!0,DialogActionsSticky:!0}},h={render:function(i,t){const o=k(),r=()=>{o.open(({close:s})=>e.jsxs(l,{fullWidth:!0,align:"center",before:e.jsx(w,{onClick:()=>s()}),maxWidth:"700px",onClose:()=>s(),children:[e.jsx(y,{direction:"prev"}),e.jsx(y,{direction:"next"}),e.jsx(j,{sticky:i.DialogTitleSticky,children:D(t)}),e.jsx(q,{children:e.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})}),e.jsxs(x,{sticky:i.DialogActionsSticky,children:[e.jsx(n,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:M(t)}),e.jsx(n,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:A(t)})]})]})).afterClosed.then(s=>{console.info(s)})};return e.jsx(n,{color:"primary",variant:"contained",onClick:r,children:b(t)})}},d={render:function(i,t){const o=k(),r=()=>{o.open(({close:s})=>e.jsxs(l,{fullWidth:!0,align:"flex-start",maxWidth:"700px",onClose:()=>s(),children:[e.jsx(j,{sticky:i.DialogTitleSticky,children:D(t)}),e.jsx(q,{children:e.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."})}),e.jsxs(x,{sticky:i.DialogActionsSticky,children:[e.jsx(n,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:M(t)}),e.jsx(n,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:A(t)})]})]})).afterClosed.then(s=>{console.info(s)})};return e.jsx(n,{color:"primary",variant:"contained",onClick:r,children:b(t)})}},p={render:function(i,t){const o=k(),r=()=>{o.open(({close:s})=>e.jsxs(l,{fullScreen:!0,align:"flex-start",onClose:()=>s(),children:[e.jsx(j,{sticky:i.DialogTitleSticky,children:D(t)}),e.jsx(q,{children:e.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})}),e.jsxs(x,{sticky:i.DialogActionsSticky,children:[e.jsx(n,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:M(t)}),e.jsx(n,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:A(t)})]})]})).afterClosed.then(s=>{console.info(s)})};return e.jsx(n,{color:"primary",variant:"contained",onClick:r,children:b(t)})}},g={render:function(i,t){const o=k(),r=s=>()=>{o.open(({close:u})=>e.jsxs(l,{fullWidth:!0,maxWidth:"700px",onClose:()=>u(),children:[e.jsxs(j,{children:[D(t)," ",s+1]}),e.jsx(q,{children:e.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."})}),e.jsxs(x,{children:[e.jsx(n,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>u(),children:M(t)}),e.jsx(n,{color:"primary",size:"500",variant:"contained",onClick:r(s+1),children:b(t)})]})]}))};return e.jsx(n,{color:"primary",variant:"contained",onClick:r(0),children:b(t)})}};var R,I,z;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStack();
    const onOpen = () => {
      dialogStack.open(({
        close
      }) => <Dialog fullWidth align="center" before={<DialogClose onClick={() => close()} />} maxWidth="700px" onClose={() => close()}>
            <DialogArrow direction="prev" />
            <DialogArrow direction="next" />
            <DialogTitle sticky={args.DialogTitleSticky}>{getHeadingText(context)}</DialogTitle>
            <DialogContent>
              <div className="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </div>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="500" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="500" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>).afterClosed.then(data => {
        console.info(data);
      });
    };
    return <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>;
  }
}`,...(z=(I=h.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var E,K,H,L,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStack();
    const onOpen = () => {
      dialogStack.open(({
        close
      }) => <Dialog fullWidth align="flex-start" maxWidth="700px" onClose={() => close()}>
            <DialogTitle sticky={args.DialogTitleSticky}>{getHeadingText(context)}</DialogTitle>
            <DialogContent>
              <div className="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
              </div>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="500" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="500" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>).afterClosed.then(data => {
        console.info(data);
      });
    };
    return <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>;
  }
}`,...(H=(K=d.parameters)==null?void 0:K.docs)==null?void 0:H.source},description:{story:"Dialogs can be aligned to the top of the screen.",...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var $,J,X,Y,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStack();
    const onOpen = () => {
      dialogStack.open(({
        close
      }) => <Dialog fullScreen align="flex-start" onClose={() => close()}>
            <DialogTitle sticky={args.DialogTitleSticky}>{getHeadingText(context)}</DialogTitle>
            <DialogContent>
              <div className="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </div>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="500" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="500" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>).afterClosed.then(data => {
        console.info(data);
      });
    };
    return <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>;
  }
}`,...(X=(J=p.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Dialogs can be opened in `fullScreen` mode.",...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.description}}};var Q,U,Z,ee,te;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function Render(_args, context) {
    const dialogStack = useDialogStack();
    const onOpen = (i: number) => () => {
      dialogStack.open(({
        close
      }) => <Dialog fullWidth maxWidth="700px" onClose={() => close()}>
          <DialogTitle>
            {getHeadingText(context)} {i + 1}
          </DialogTitle>
          <DialogContent>
            <div className="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </DialogContent>
          <DialogActions>
            <Button color="tertiary" size="500" variant="outlined" onClick={() => close()}>
              {getCancelButtonText(context)}
            </Button>
            <Button color="primary" size="500" variant="contained" onClick={onOpen(i + 1)}>
              {getOpenButtonText(context)}
            </Button>
          </DialogActions>
        </Dialog>);
    };
    return <Button color="primary" variant="contained" onClick={onOpen(0)}>
        {getOpenButtonText(context)}
      </Button>;
  }
}`,...(Z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:"Dialogs can be easily stacked on top of each other with the help of the `DialogStackProvider`.",...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};const mt=["Demo","Alignment","FullScreen","Stack"];export{d as Alignment,h as Demo,p as FullScreen,g as Stack,mt as __namedExportsOrder,lt as default};
