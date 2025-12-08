import{j as a}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{u as x}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-CBu-ct3E.js";import{T as f}from"./TextField-D_RGTig6.js";import{T}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";const g=(s,t)=>{const r=o.useRef(Date.now()),e=o.useRef(null),i=x((...p)=>{s(...p)}),d=o.useCallback((...p)=>{const n=Date.now()-r.current;n>=t?(r.current=Date.now(),i.current(...p)):e.current=setTimeout(()=>{r.current=Date.now(),i.current(...p)},t-n)},[t]);return o.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]),d},Tt={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},m={render:function(){const[t,r]=o.useState(""),e=g(i=>{r(i.target.value)},1e3);return a.jsxs("div",{children:[a.jsx(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:a.jsx(f,{fullWidth:!0,label:"Value",size:"40",onChange:e})}),a.jsxs(T,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",t]})]})}};var l,u,c;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const gt=["Demo"];export{m as Demo,gt as __namedExportsOrder,Tt as default};
