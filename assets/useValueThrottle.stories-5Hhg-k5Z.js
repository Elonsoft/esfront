import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{B as x}from"./Box-wRm4ebgR.js";import{T as h}from"./TextField-B-8j0Rl0.js";import{T as n}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";const T=(r,t)=>{const e=a.useRef(Date.now()),[m,p]=a.useState(r);return a.useEffect(()=>{const s=Date.now()-e.current;if(s>=t)e.current=Date.now(),p(r);else{const c=setTimeout(()=>{e.current=Date.now(),p(r)},t-s);return()=>{clearTimeout(c)}}},[r,t]),m},Tt={tags:["autodocs"],title:"Hooks/useValueThrottle",parameters:{references:["useValueThrottle"]}},i={render:function(){const[t,e]=a.useState(""),m=T(t,1e3);return o.jsxs("div",{children:[o.jsx(x,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(h,{fullWidth:!0,label:"Value",size:"40",value:t,onChange:p=>e(p.target.value)})}),o.jsxs(n,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Value: ",t]}),o.jsxs(n,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",m]})]})}};var l,u,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
