import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-Wm5baAvf.js";import{T as w}from"./TextField-BE5m1Jj6.js";import{B as l}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const C=()=>{var t,r;const d=o.useCallback(e=>window.navigator.clipboard.writeText(e),[]),p=o.useCallback(e=>window.navigator.clipboard.write(e),[]),n=o.useCallback(()=>window.navigator.clipboard.readText(),[]),s=o.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:d,write:p,readText:n,read:s,isReadSupported:typeof window<"u"&&!!((r=(t=window==null?void 0:window.navigator)==null?void 0:t.clipboard)!=null&&r.readText)}},ut={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},a={render:function(){const{writeText:p,readText:n,isReadSupported:s}=C(),[t,r]=o.useState(""),e=()=>{p(t)},v=()=>{n().then(m=>{r(m)})};return i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[i.jsx(w,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:m=>r(m.target.value)}),i.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:e,children:"Copy"}),s&&i.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:v,children:"Paste"})]})}};var c,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const {
      writeText,
      readText,
      isReadSupported
    } = useClipboard();
    const [value, setValue] = useState('');
    const onCopy = () => {
      writeText(value);
    };
    const onPaste = () => {
      readText().then(data => {
        setValue(data);
      });
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '320px'
    }}>
        <TextField fullWidth label="Value" size="40" value={value} onChange={event => setValue(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={onCopy}>
          Copy
        </Button>
        {isReadSupported && <Button color="primary" size="400" variant="contained" onClick={onPaste}>
            Paste
          </Button>}
      </div>;
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const xt=["Demo"];export{a as Demo,xt as __namedExportsOrder,ut as default};
