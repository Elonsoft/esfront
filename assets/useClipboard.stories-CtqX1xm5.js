import{j as i}from"./jsx-runtime-BoZ7yaty.js";import{r as e}from"./index-DIDRz_s2.js";import{B as C}from"./Box-BsYG6vwI.js";import{T as v}from"./TextField-BNsw1mhy.js";import{B as d}from"./Button-Kloa1MkC.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";const b=()=>{var t,r;const l=e.useCallback(o=>window.navigator.clipboard.writeText(o),[]),p=e.useCallback(o=>window.navigator.clipboard.write(o),[]),n=e.useCallback(()=>window.navigator.clipboard.readText(),[]),s=e.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:l,write:p,readText:n,read:s,isReadSupported:!!((r=(t=window==null?void 0:window.navigator)==null?void 0:t.clipboard)!=null&&r.readText)}},wt={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},a={render:function(){const{writeText:p,readText:n,isReadSupported:s}=b(),[t,r]=e.useState(""),o=()=>{p(t)},w=()=>{n().then(m=>{r(m)})};return i.jsxs(C,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[i.jsx(v,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:m=>r(m.target.value)}),i.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:o,children:"Copy"}),s&&i.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:w,children:"Paste"})]})}};var c,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const Ct=["Demo"];export{a as Demo,Ct as __namedExportsOrder,wt as default};
