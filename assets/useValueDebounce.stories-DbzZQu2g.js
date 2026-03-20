import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-Wm5baAvf.js";import{T as b}from"./TextField-BE5m1Jj6.js";import{F as u}from"./FormControlLabel-DXHUSaHo.js";import{C as d}from"./Checkbox-DnCq8MIY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./clsx.m-C7bORDfW.js";import"./SwitchBase-CeEjr7S8.js";import"./useControlled-CibYmksV.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const h=(i,a,p={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:s=!0}=p,r=o.useRef(!0),[c,l]=o.useState(i);return o.useEffect(()=>{r.current&&(r.current=!1,n&&l(i));const t=setTimeout(()=>{r.current=!0,s&&l(i)},a);return()=>{clearTimeout(t)}},[i,a,n,s]),c},he={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},m={render:function(){const[a,p]=o.useState(""),[n,s]=o.useState(!1),[r,c]=o.useState(!0),l=h(a,1e3,{leading:n,trailing:r});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(b,{fullWidth:!0,label:"Value",size:"40",value:a,onChange:t=>p(t.target.value)}),e.jsx(u,{control:e.jsx(d,{checked:n,onChange:t=>s(t.target.checked)}),label:"Leading"}),e.jsx(u,{control:e.jsx(d,{checked:r,onChange:t=>c(t.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var g,x,f;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const debouncedValue = useValueDebounce(value, 1000, {
      leading,
      trailing
    });
    return <div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" value={value} onChange={event => setValue(event.target.value)} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>;
  }
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const ve=["Demo"];export{m as Demo,ve as __namedExportsOrder,he as default};
