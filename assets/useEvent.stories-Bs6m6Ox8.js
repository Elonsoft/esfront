import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as i}from"./index-DIDRz_s2.js";import{u as g}from"./useEvent-B4f6aq-e.js";import{B as m}from"./Box-BsYG6vwI.js";import{T as f}from"./TextField-BNsw1mhy.js";import{B as h}from"./Button-Kloa1MkC.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";const ft={tags:["autodocs"],title:"Hooks/useEvent",parameters:{references:["useEvent"]}},e={render:function(){const[x,u]=i.useState(""),[o,c]=i.useState(""),[r,l]=i.useState(0);function d(){const s=g(()=>{u(o),l(r+1)});return t.jsxs(h,{color:"primary",sx:{width:"220px"},onClick:s,children:["Click ",!!r&&r]})}return t.jsxs(t.Fragment,{children:[t.jsxs(m,{sx:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(f,{fullWidth:!0,label:"Value",size:"40",value:o,onChange:s=>c(s.target.value)}),t.jsx(d,{})]}),t.jsxs(m,{sx:{margin:"8px"},children:["Text: ",o]}),t.jsxs(m,{sx:{margin:"8px"},children:["Message: ",x]})]})}};var p,n,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const ht=["Demo"];export{e as Demo,ht as __namedExportsOrder,ft as default};
