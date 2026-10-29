import{r as t,b as v,j as e}from"./iframe-CewJnQGO.js";import{T as h}from"./TextField-CjgXH9i3.js";import{F as g}from"./FormControlLabel-B_hScooQ.js";import{C as p}from"./Checkbox-BRh0Tpy6.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BQG9LCtD.js";import"./useId-CoUWHeYF.js";import"./FormFieldHelperText-CK7smVqh.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-CBpy0Ws-.js";import"./useForkRef-PUt3GJOR.js";import"./FormFieldLabel-C3QF6Ekc.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C21djuXa.js";import"./SwitchBase-CYjc7JZC.js";import"./useControlled-DQypTyn3.js";import"./ButtonBase-tfkuyuZ2.js";import"./SvgIcon-Djq_eQEN.js";const C=(m,a,c,o={leading:!1,trailing:!0})=>{const{leading:u=!1,trailing:s=!0}=o,r=t.useRef(!0),l=v(m);t.useEffect(()=>{r.current&&(r.current=!1,u&&l.current());const d=setTimeout(()=>{r.current=!0,s&&l.current()},a);return()=>{clearTimeout(d)}},c)},q={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},i={render:function(){const[a,c]=t.useState(""),[o,u]=t.useState(!1),[s,r]=t.useState(!0),[l,d]=t.useState("");return C(()=>{d(a)},1e3,[a],{leading:o,trailing:s}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(h,{fullWidth:!0,label:"Value",size:"500",value:a,onChange:n=>c(n.target.value)}),e.jsx(g,{control:e.jsx(p,{checked:o,onChange:n=>u(n.target.checked)}),label:"Leading"}),e.jsx(g,{control:e.jsx(p,{checked:s,onChange:n=>r(n.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var b,x,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const [debouncedValue, setDebouncedValue] = useState('');
    useDebounce(() => {
      setDebouncedValue(value);
    }, 1000, [value], {
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const A=["Demo"];export{i as Demo,A as __namedExportsOrder,q as default};
