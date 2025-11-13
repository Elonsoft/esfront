import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as i}from"./index-DIDRz_s2.js";import{u as g}from"./useEvent-B4f6aq-e.js";import{B as m}from"./Box-wRm4ebgR.js";import{T as f}from"./TextField-B-8j0Rl0.js";import{B as h}from"./Button-CjV5PmVb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";const kt={tags:["autodocs"],title:"Hooks/useEvent",parameters:{references:["useEvent"]}},e={render:function(){const[x,u]=i.useState(""),[o,c]=i.useState(""),[r,l]=i.useState(0);function d(){const s=g(()=>{u(o),l(r+1)});return t.jsxs(h,{color:"primary",sx:{width:"220px"},onClick:s,children:["Click ",!!r&&r]})}return t.jsxs(t.Fragment,{children:[t.jsxs(m,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(f,{fullWidth:!0,label:"Value",size:"40",value:o,onChange:s=>c(s.target.value)}),t.jsx(d,{})]}),t.jsxs(m,{sx:{margin:"8px"},children:["Text: ",o]}),t.jsxs(m,{sx:{margin:"8px"},children:["Message: ",x]})]})}};var p,n,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    function Chat() {
      const onClick = useEvent(() => {
        setMessage(text);
        setCount(count + 1);
      });
      return <Button color="primary" sx={{
        width: '220px'
      }} onClick={onClick}>
          Click {!!count && count}
        </Button>;
    }
    return <>
        <Box sx={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <TextField fullWidth label="Value" size="40" value={text} onChange={event => setText(event.target.value)} />
          <Chat />
        </Box>
        <Box sx={{
        margin: '8px'
      }}>Text: {text}</Box>
        <Box sx={{
        margin: '8px'
      }}>Message: {message}</Box>
      </>;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const Et=["Demo"];export{e as Demo,Et as __namedExportsOrder,kt as default};
