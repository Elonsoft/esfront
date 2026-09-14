import{r as l,j as a}from"./iframe-Bc8-Q25v.js";import{T as p}from"./TextField-j8tsbYSO.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";const x=(t,e)=>{const r=l.useRef(Date.now()),[u,s]=l.useState(t);return l.useEffect(()=>{const i=Date.now()-r.current;if(i>=e)r.current=Date.now(),s(t);else{const m=setTimeout(()=>{r.current=Date.now(),s(t)},e-i);return()=>{clearTimeout(m)}}},[t,e]),u},W={tags:["autodocs"],title:"Hooks/useValueThrottle",parameters:{references:["useValueThrottle"]}},o={render:function(){const[e,r]=l.useState(""),u=x(e,1e3);return a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:a.jsx(p,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:s=>r(s.target.value)})}),a.jsxs("div",{className:"body200 mt-8",children:["Value: ",e]}),a.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",u]})]})}};var d,n,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const throttledValue = useValueThrottle(value, 1000);
    return <div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="500" value={value} onChange={event => setValue(event.target.value)} />
        </div>

        <div className="body200 mt-8">Value: {value}</div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>;
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const R=["Demo"];export{o as Demo,R as __namedExportsOrder,W as default};
