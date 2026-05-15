import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-Wm5baAvf.js";import{u as d}from"./useCallbackThrottle-B-3XiPi3.js";import{T as n}from"./TextField-BE5m1Jj6.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";const at={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},e={render:function(){const[p,a]=s.useState(""),m=d(l=>{a(l.target.value)},1e3);return t.jsxs("div",{children:[t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:t.jsx(n,{fullWidth:!0,label:"Value",size:"40",onChange:m})}),t.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",p]})]})}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [throttledValue, setThrottledValue] = useState('');
    const onChange = useCallbackThrottle((event: React.ChangeEvent<HTMLInputElement>) => {
      setThrottledValue(event.target.value);
    }, 1000);
    return <div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" onChange={onChange} />
        </div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const mt=["Demo"];export{e as Demo,mt as __namedExportsOrder,at as default};
