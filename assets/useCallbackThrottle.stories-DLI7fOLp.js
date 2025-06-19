import{j as a}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{u as x}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-Og3xCN3M.js";import{T as f}from"./TextField-Cv87NqMI.js";import{T}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./memoTheme-CJcpijc4.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BubGiXqi.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./FormControl-CYKlpDDs.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cdrn0csy.js";import"./Menu-DtX3jm--.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./useTheme-D4EsW5Cf.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-CW64547e.js";import"./SvgIcon-U0LES8Ux.js";const g=(s,t)=>{const r=o.useRef(Date.now()),e=o.useRef(null),i=x((...p)=>{s(...p)}),d=o.useCallback((...p)=>{const n=Date.now()-r.current;n>=t?(r.current=Date.now(),i.current(...p)):e.current=setTimeout(()=>{r.current=Date.now(),i.current(...p)},t-n)},[t]);return o.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]),d},vt={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},m={render:function(){const[t,r]=o.useState(""),e=g(i=>{r(i.target.value)},1e3);return a.jsxs("div",{children:[a.jsx(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:a.jsx(f,{fullWidth:!0,label:"Value",size:"40",onChange:e})}),a.jsxs(T,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",t]})]})}};var l,u,c;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const bt=["Demo"];export{m as Demo,bt as __namedExportsOrder,vt as default};
