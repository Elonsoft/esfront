import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{r as i}from"./index-DIDRz_s2.js";import{u as x}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-BsYG6vwI.js";import{T as v}from"./TextField-BNsw1mhy.js";import{T as l}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";const T=(m,t,s)=>{const e=i.useRef(Date.now()),o=x(m);i.useEffect(()=>{const a=Date.now()-e.current;if(a>=t)e.current=Date.now(),o.current();else{const c=setTimeout(()=>{e.current=Date.now(),o.current()},t-a);return()=>clearTimeout(c)}},s)},ut={tags:["autodocs"],title:"Hooks/useThrottle",parameters:{references:["useThrottle"]}},p={render:function(){const[t,s]=i.useState(""),[e,o]=i.useState("");return T(()=>{o(t)},1e3,[t]),r.jsxs("div",{children:[r.jsx(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:r.jsx(v,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:a=>s(a.target.value)})}),r.jsxs(l,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Value: ",t]}),r.jsxs(l,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",e]})]})}};var n,u,d;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');
    useThrottle(() => {
      setThrottledValue(value);
    }, 1000, [value]);
    return <div>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" value={value} onChange={event => setValue(event.target.value)} />
        </Box>

        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Value: {value}
        </Typography>

        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Throttled value: {throttledValue}
        </Typography>
      </div>;
  }
}`,...(d=(u=p.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const dt=["Demo"];export{p as Demo,dt as __namedExportsOrder,ut as default};
