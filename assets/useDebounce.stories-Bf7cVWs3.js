import{r as t,b as v,j as e}from"./iframe-D3HjMCd-.js";import{T as h}from"./TextField-DT-FTa2W.js";import{F as g}from"./FormControlLabel-Dl-ISLRc.js";import{C as p}from"./Checkbox-D4WnBd5a.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-21R-WjRB.js";import"./useId-DNcBXqE4.js";import"./FormFieldHelperText-d3-TP2cu.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-Ba4OjAmF.js";import"./useForkRef-GwhPXW4N.js";import"./FormFieldLabel-DOLpuC-H.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-CLniivOv.js";import"./SwitchBase-DZ4MDsjL.js";import"./useControlled-e9NyoJZq.js";import"./ButtonBase-ZB4rAPke.js";import"./SvgIcon-D3b7riVA.js";const C=(m,a,c,o={leading:!1,trailing:!0})=>{const{leading:u=!1,trailing:s=!0}=o,r=t.useRef(!0),l=v(m);t.useEffect(()=>{r.current&&(r.current=!1,u&&l.current());const d=setTimeout(()=>{r.current=!0,s&&l.current()},a);return()=>{clearTimeout(d)}},c)},q={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},i={render:function(){const[a,c]=t.useState(""),[o,u]=t.useState(!1),[s,r]=t.useState(!0),[l,d]=t.useState("");return C(()=>{d(a)},1e3,[a],{leading:o,trailing:s}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(h,{fullWidth:!0,label:"Value",size:"500",value:a,onChange:n=>c(n.target.value)}),e.jsx(g,{control:e.jsx(p,{checked:o,onChange:n=>u(n.target.checked)}),label:"Leading"}),e.jsx(g,{control:e.jsx(p,{checked:s,onChange:n=>r(n.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var b,x,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
