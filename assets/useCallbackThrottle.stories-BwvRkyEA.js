import{r as n,j as e}from"./iframe-CewJnQGO.js";import{u as p}from"./useCallbackThrottle-DW41yWh8.js";import{T as m}from"./TextField-CjgXH9i3.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BQG9LCtD.js";import"./useId-CoUWHeYF.js";import"./FormFieldHelperText-CK7smVqh.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-CBpy0Ws-.js";import"./useForkRef-PUt3GJOR.js";import"./FormFieldLabel-C3QF6Ekc.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C21djuXa.js";const k={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},t={render:function(){const[l,s]=n.useState(""),d=p(i=>{s(i.target.value)},1e3);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:e.jsx(m,{fullWidth:!0,label:"Value",size:"500",onChange:d})}),e.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",l]})]})}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <TextField fullWidth label="Value" size="500" onChange={onChange} />
        </div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const E=["Demo"];export{t as Demo,E as __namedExportsOrder,k as default};
