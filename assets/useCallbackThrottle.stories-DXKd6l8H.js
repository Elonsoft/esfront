import{j as p}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{u as x}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-BsYG6vwI.js";import{T as f}from"./TextField-BNsw1mhy.js";import{T}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";const g=(s,t)=>{const r=o.useRef(Date.now()),e=o.useRef(null),a=x((...i)=>{s(...i)}),d=o.useCallback((...i)=>{const n=Date.now()-r.current;n>=t?(r.current=Date.now(),a.current(...i)):e.current=setTimeout(()=>{r.current=Date.now(),a.current(...i)},t-n)},[t]);return o.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]),d},ct={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},m={render:function(){const[t,r]=o.useState(""),e=g(a=>{r(a.target.value)},1e3);return p.jsxs("div",{children:[p.jsx(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:p.jsx(f,{fullWidth:!0,label:"Value",size:"40",onChange:e})}),p.jsxs(T,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",t]})]})}};var l,u,c;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    const [throttledValue, setThrottledValue] = useState('');
    const onChange = useCallbackThrottle((event: React.ChangeEvent<HTMLInputElement>) => {
      setThrottledValue(event.target.value);
    }, 1000);
    return <div>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" onChange={onChange} />
        </Box>

        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Throttled value: {throttledValue}
        </Typography>
      </div>;
  }
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const dt=["Demo"];export{m as Demo,dt as __namedExportsOrder,ct as default};
