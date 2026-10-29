import{r,j as e}from"./iframe-CewJnQGO.js";import{T as f}from"./TextField-CjgXH9i3.js";import{F as m}from"./FormControlLabel-B_hScooQ.js";import{C as g}from"./Checkbox-BRh0Tpy6.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BQG9LCtD.js";import"./useId-CoUWHeYF.js";import"./FormFieldHelperText-CK7smVqh.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-CBpy0Ws-.js";import"./useForkRef-PUt3GJOR.js";import"./FormFieldLabel-C3QF6Ekc.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C21djuXa.js";import"./SwitchBase-CYjc7JZC.js";import"./useControlled-DQypTyn3.js";import"./ButtonBase-tfkuyuZ2.js";import"./SvgIcon-Djq_eQEN.js";const h=(o,n,u={leading:!1,trailing:!0})=>{const{leading:s=!1,trailing:i=!0}=u,a=r.useRef(!0),[d,l]=r.useState(o);return r.useEffect(()=>{a.current&&(a.current=!1,s&&l(o));const t=setTimeout(()=>{a.current=!0,i&&l(o)},n);return()=>{clearTimeout(t)}},[o,n,s,i]),d},H={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},c={render:function(){const[n,u]=r.useState(""),[s,i]=r.useState(!1),[a,d]=r.useState(!0),l=h(n,1e3,{leading:s,trailing:a});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(f,{fullWidth:!0,label:"Value",size:"500",value:n,onChange:t=>u(t.target.value)}),e.jsx(m,{control:e.jsx(g,{checked:s,onChange:t=>i(t.target.checked)}),label:"Leading"}),e.jsx(m,{control:e.jsx(g,{checked:a,onChange:t=>d(t.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var p,x,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <TextField fullWidth label="Value" size="500" value={value} onChange={event => setValue(event.target.value)} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>;
  }
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const O=["Demo"];export{c as Demo,O as __namedExportsOrder,H as default};
