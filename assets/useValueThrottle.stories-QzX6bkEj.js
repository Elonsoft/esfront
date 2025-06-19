import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{B as x}from"./Box-Og3xCN3M.js";import{T as h}from"./TextField-Cv87NqMI.js";import{T as n}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./memoTheme-CJcpijc4.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BubGiXqi.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./FormControl-CYKlpDDs.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cdrn0csy.js";import"./Menu-DtX3jm--.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./useTheme-D4EsW5Cf.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-CW64547e.js";import"./SvgIcon-U0LES8Ux.js";const T=(r,t)=>{const e=a.useRef(Date.now()),[m,p]=a.useState(r);return a.useEffect(()=>{const s=Date.now()-e.current;if(s>=t)e.current=Date.now(),p(r);else{const c=setTimeout(()=>{e.current=Date.now(),p(r)},t-s);return()=>{clearTimeout(c)}}},[r,t]),m},Tt={tags:["autodocs"],title:"Hooks/useValueThrottle",parameters:{references:["useValueThrottle"]}},i={render:function(){const[t,e]=a.useState(""),m=T(t,1e3);return o.jsxs("div",{children:[o.jsx(x,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(h,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:p=>e(p.target.value)})}),o.jsxs(n,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Value: ",t]}),o.jsxs(n,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",m]})]})}};var l,u,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const throttledValue = useValueThrottle(value, 1000);
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ft=["Demo"];export{i as Demo,ft as __namedExportsOrder,Tt as default};
