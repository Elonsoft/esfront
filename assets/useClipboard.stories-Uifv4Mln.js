import{j as i}from"./jsx-runtime-BoZ7yaty.js";import{r as e}from"./index-DIDRz_s2.js";import{B as C}from"./Box-wRm4ebgR.js";import{T as v}from"./TextField-B-8j0Rl0.js";import{B as d}from"./Button-CL4pDWwx.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";const b=()=>{var t,r;const l=e.useCallback(o=>window.navigator.clipboard.writeText(o),[]),p=e.useCallback(o=>window.navigator.clipboard.write(o),[]),n=e.useCallback(()=>window.navigator.clipboard.readText(),[]),m=e.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:l,write:p,readText:n,read:m,isReadSupported:!!((r=(t=window==null?void 0:window.navigator)==null?void 0:t.clipboard)!=null&&r.readText)}},ht={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},a={render:function(){const{writeText:p,readText:n,isReadSupported:m}=b(),[t,r]=e.useState(""),o=()=>{p(t)},w=()=>{n().then(s=>{r(s)})};return i.jsxs(C,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[i.jsx(v,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:s=>r(s.target.value)}),i.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:o,children:"Copy"}),m&&i.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:w,children:"Paste"})]})}};var c,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const yt=["Demo"];export{a as Demo,yt as __namedExportsOrder,ht as default};
