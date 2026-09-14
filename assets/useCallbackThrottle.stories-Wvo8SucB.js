import{r as n,j as e}from"./iframe-Bc8-Q25v.js";import{u as p}from"./useCallbackThrottle-COoM9HFA.js";import{T as u}from"./TextField-j8tsbYSO.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";const W={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},t={render:function(){const[o,s]=n.useState(""),d=p(i=>{s(i.target.value)},1e3);return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:e.jsx(u,{fullWidth:!0,label:"Value",size:"500",onChange:d})}),e.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",o]})]})}};var r,a,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const k=["Demo"];export{t as Demo,k as __namedExportsOrder,W as default};
