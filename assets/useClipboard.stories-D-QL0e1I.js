import{j as i}from"./jsx-runtime-BoZ7yaty.js";import{r as e}from"./index-DIDRz_s2.js";import{B as C}from"./Box-CBu-ct3E.js";import{T as v}from"./TextField-D_RGTig6.js";import{B as l}from"./Button-DhPfczDk.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";const f=()=>{var t,r;const d=e.useCallback(o=>window.navigator.clipboard.writeText(o),[]),p=e.useCallback(o=>window.navigator.clipboard.write(o),[]),n=e.useCallback(()=>window.navigator.clipboard.readText(),[]),s=e.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:d,write:p,readText:n,read:s,isReadSupported:typeof window<"u"&&!!((r=(t=window==null?void 0:window.navigator)==null?void 0:t.clipboard)!=null&&r.readText)}},Tt={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},a={render:function(){const{writeText:p,readText:n,isReadSupported:s}=f(),[t,r]=e.useState(""),o=()=>{p(t)},w=()=>{n().then(m=>{r(m)})};return i.jsxs(C,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[i.jsx(v,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:m=>r(m.target.value)}),i.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:o,children:"Copy"}),s&&i.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:w,children:"Paste"})]})}};var c,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    return <Box sx={{
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
      </Box>;
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const gt=["Demo"];export{a as Demo,gt as __namedExportsOrder,Tt as default};
