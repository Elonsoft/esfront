import{r as t,a as v,j as e}from"./iframe-Bc8-Q25v.js";import{T as h}from"./TextField-j8tsbYSO.js";import{F as g}from"./FormControlLabel-CWzNpRDE.js";import{C as p}from"./Checkbox-B74rhBu5.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./SwitchBase-C6cffuB5.js";import"./useControlled-BKv9s01-.js";import"./ButtonBase-BBaKRXh4.js";import"./SvgIcon-CMA3Mbq7.js";const C=(m,a,c,o={leading:!1,trailing:!0})=>{const{leading:u=!1,trailing:s=!0}=o,r=t.useRef(!0),l=v(m);t.useEffect(()=>{r.current&&(r.current=!1,u&&l.current());const d=setTimeout(()=>{r.current=!0,s&&l.current()},a);return()=>{clearTimeout(d)}},c)},O={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},i={render:function(){const[a,c]=t.useState(""),[o,u]=t.useState(!1),[s,r]=t.useState(!0),[l,d]=t.useState("");return C(()=>{d(a)},1e3,[a],{leading:o,trailing:s}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(h,{fullWidth:!0,label:"Value",size:"500",value:a,onChange:n=>c(n.target.value)}),e.jsx(g,{control:e.jsx(p,{checked:o,onChange:n=>u(n.target.checked)}),label:"Leading"}),e.jsx(g,{control:e.jsx(p,{checked:s,onChange:n=>r(n.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const q=["Demo"];export{i as Demo,q as __namedExportsOrder,O as default};
