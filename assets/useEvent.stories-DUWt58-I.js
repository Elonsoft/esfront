import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as i}from"./index-DIDRz_s2.js";import{u as g}from"./useEvent-B4f6aq-e.js";import{B as m}from"./Box-Og3xCN3M.js";import{T as f}from"./TextField-Cv87NqMI.js";import{B as h}from"./Button-Bw7cy9Im.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./memoTheme-CJcpijc4.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BubGiXqi.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./FormControl-CYKlpDDs.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cdrn0csy.js";import"./Menu-DtX3jm--.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./useTheme-D4EsW5Cf.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-CW64547e.js";import"./SvgIcon-U0LES8Ux.js";import"./clsx.m-C7bORDfW.js";import"./useThemeProps-DTzdApbH.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";const Et={tags:["autodocs"],title:"Hooks/useEvent",parameters:{references:["useEvent"]}},e={render:function(){const[x,u]=i.useState(""),[o,c]=i.useState(""),[r,l]=i.useState(0);function d(){const s=g(()=>{u(o),l(r+1)});return t.jsxs(h,{color:"primary",sx:{width:"220px"},onClick:s,children:["Click ",!!r&&r]})}return t.jsxs(t.Fragment,{children:[t.jsxs(m,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(f,{fullWidth:!0,label:"Value",size:"40",value:o,onChange:s=>c(s.target.value)}),t.jsx(d,{})]}),t.jsxs(m,{sx:{margin:"8px"},children:["Text: ",o]}),t.jsxs(m,{sx:{margin:"8px"},children:["Message: ",x]})]})}};var p,n,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const St=["Demo"];export{e as Demo,St as __namedExportsOrder,Et as default};
