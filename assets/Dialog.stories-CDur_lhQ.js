import{j as t,K as Q,r as k}from"./iframe-WZaTcFld.js";import{D as l,u as y,a as U}from"./useDialogStack-D4q6BH2b.js";import{B as r}from"./Button-DX7vCFDA.js";import{D as g,a as b}from"./DialogTitle-BMkcDQYq.js";import{D as f}from"./DialogActions-QF5fqT7W.js";import{c as X}from"./clsx.m-CH7BE6MN.js";import{u as Y}from"./useDefaultProps-BZnal23W.js";import{I as Z}from"./IconArrowRightLineW500-sA-82M9F.js";import{I as tt}from"./IconArrowLeftLineW500-C6E6bfpW.js";import"./preload-helper-Dp1pzeXC.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./useId-Cowwq5kl.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./useEvent-PLZAS_3a.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./Portal-BYj3FDWN.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-1Ul32FaH.js";import"./IconCloseLineW600-CnQid-aO.js";import"./SvgIcon-CImGifIE.js";import"./ButtonBase-A8DfStIe.js";import"./useStuckSentinel-BbTyB3Nk.js";import"./useIntersectionObserver-oQpH1Yfa.js";const x=({ref:i,...o})=>{const{className:e,style:u,direction:a,onClick:s,labelPrev:c,labelNext:$,iconPrev:G=t.jsx(tt,{}),iconNext:J=t.jsx(Z,{})}=Y({props:o,name:"ESDialogArrow"});return t.jsx("div",{ref:i,className:X("es-dialog-arrow",`es-dialog-arrow--${a}`,e),style:u,children:t.jsx(r,{"aria-label":a==="prev"?c:$,className:"es-dialog-arrow__button",color:"white",variant:"text",onClick:s,children:a==="prev"?G:J})})};try{x.displayName="DialogArrow",x.__docgenInfo={description:"",displayName:"DialogArrow",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/Dialog/DialogArrow/DialogArrow.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Class applied to the root element.",name:"className",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"string"}},style:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Style applied to the root element.",name:"style",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"CSSProperties"}},direction:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"",name:"direction",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!0,tags:{},type:{name:"enum",raw:'"next" | "prev"',value:[{value:'"next"'},{value:'"prev"'}]}},onClick:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Callback fired when the button is clicked.",name:"onClick",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"(() => void)"}},labelPrev:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Text for the prev button aria-label.",name:"labelPrev",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"string"}},labelNext:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Text for the next button aria-label.",name:"labelNext",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"string"}},iconPrev:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Icon for the prev button.",name:"iconPrev",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"string"}},iconNext:{defaultValue:null,declarations:[{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"}],description:"Icon for the next button.",name:"iconNext",parent:{fileName:"react/src/components/Dialog/DialogArrow/DialogArrow.types.ts",name:"DialogArrowProps"},required:!1,tags:{},type:{name:"string"}}},tags:{see:"`Dialog`"}}}catch{}const et=()=>{const i=Q(),o=k.useRef([]);return k.useEffect(()=>()=>{o.current.forEach(e=>{i.close(e)})},[]),{...i,open:(e,u)=>{const a=i.open(e,u);return o.current.push(a.id),a.afterClosed.then(()=>{o.current=o.current.filter(s=>s!==a.id)}),a}}},n=i=>i.globals.locale==="en"?"Open dialog window":"Открыть диалоговое окно",C=i=>i.globals.locale==="en"?"Heading":"Заголовок",v=i=>i.globals.locale==="en"?"Cancel":"Отмена",q=i=>i.globals.locale==="en"?"Create":"Создать",Vt={tags:["autodocs"],component:l,parameters:{references:["Dialog","DialogActions","DialogArrow","DialogClose","DialogTitle","DialogStack","DialogStackProvider"]},argTypes:{DialogTitleSticky:{name:"sticky",description:"Whether the actions should be sticky.",table:{category:"DialogTitle"},defaultValue:!0,control:{type:"boolean"}},DialogActionsSticky:{name:"sticky",description:"Whether the title should be sticky.",table:{category:"DialogActions"},defaultValue:!0,control:{type:"boolean"}}},args:{DialogTitleSticky:!0,DialogActionsSticky:!0}},D={render:function(o,e){const u=y(),a=()=>{u.open(({close:s})=>t.jsxs(l,{fullWidth:!0,align:"center",before:t.jsx(U,{onClick:()=>s()}),maxWidth:"700px",onClose:()=>s(),children:[t.jsx(x,{direction:"prev"}),t.jsx(x,{direction:"next"}),t.jsx(g,{sticky:o.DialogTitleSticky,children:C(e)}),t.jsx(b,{children:t.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})}),t.jsxs(f,{sticky:o.DialogActionsSticky,children:[t.jsx(r,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:v(e)}),t.jsx(r,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:q(e)})]})]})).afterClosed.then(s=>{console.info(s)})};return t.jsx(r,{color:"primary",variant:"contained",onClick:a,children:n(e)})}},m={render:function(o,e){const u=y(),a=()=>{u.open(({close:s})=>t.jsxs(l,{fullWidth:!0,align:"flex-start",maxWidth:"700px",onClose:()=>s(),children:[t.jsx(g,{sticky:o.DialogTitleSticky,children:C(e)}),t.jsx(b,{children:t.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."})}),t.jsxs(f,{sticky:o.DialogActionsSticky,children:[t.jsx(r,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:v(e)}),t.jsx(r,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:q(e)})]})]})).afterClosed.then(s=>{console.info(s)})};return t.jsx(r,{color:"primary",variant:"contained",onClick:a,children:n(e)})}},p={render:function(o,e){const u=y(),a=()=>{u.open(({close:s})=>t.jsxs(l,{fullScreen:!0,align:"flex-start",onClose:()=>s(),children:[t.jsx(g,{sticky:o.DialogTitleSticky,children:C(e)}),t.jsx(b,{children:t.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})}),t.jsxs(f,{sticky:o.DialogActionsSticky,children:[t.jsx(r,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>s(),children:v(e)}),t.jsx(r,{color:"primary",size:"500",variant:"contained",onClick:()=>s(!0),children:q(e)})]})]})).afterClosed.then(s=>{console.info(s)})};return t.jsx(r,{color:"primary",variant:"contained",onClick:a,children:n(e)})}},d={render:function(o,e){const u=et(),a=s=>()=>{u.open(({close:c})=>t.jsxs(l,{fullWidth:!0,maxWidth:"700px",onClose:()=>c(),children:[t.jsxs(g,{children:[C(e)," ",s+1]}),t.jsx(b,{children:t.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."})}),t.jsxs(f,{children:[t.jsx(r,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>c(),children:v(e)}),t.jsx(r,{color:"primary",size:"500",variant:"contained",onClick:a(s+1),children:n(e)})]})]}))};return t.jsx(r,{color:"primary",variant:"contained",onClick:a(0),children:n(e)})}},j={name:"Stack V2",render:function(o,e){const u=y(),a=s=>()=>{u.open(({close:c})=>t.jsxs(l,{fullWidth:!0,maxWidth:"700px",onClose:()=>c(),children:[t.jsxs(g,{children:[C(e)," ",s+1]}),t.jsx(b,{children:t.jsx("div",{className:"body200",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."})}),t.jsxs(f,{children:[t.jsx(r,{color:"tertiary",size:"500",variant:"outlined",onClick:()=>c(),children:v(e)}),t.jsx(r,{color:"primary",size:"500",variant:"contained",onClick:a(s+1),children:n(e)})]})]}))};return t.jsx(r,{color:"primary",variant:"contained",onClick:a(0),children:n(e)})}};var M,h,A;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStackV2();
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
}`,...(A=(h=D.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var w,S,B,T,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStackV2();
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
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source},description:{story:"Dialogs can be aligned to the top of the screen.",...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var P,O,z,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const dialogStack = useDialogStackV2();
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
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:"Dialogs can be opened in `fullScreen` mode.",...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var _,R,H,I,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:"Dialogs can be easily stacked on top of each other with the help of the `DialogStackProvider`.\n\n@deprecated `DialogStackProvider` is deprecated. See the `Stack V2` story for the `DialogStack` component.",...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var L,F,K;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Stack V2',
  render: function Render(_args, context) {
    const dialogStack = useDialogStackV2();
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
}`,...(K=(F=j.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const Wt=["Demo","Alignment","FullScreen","Stack","DialogStackV2"];export{m as Alignment,D as Demo,j as DialogStackV2,p as FullScreen,d as Stack,Wt as __namedExportsOrder,Vt as default};
