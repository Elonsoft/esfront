import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{T as u}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const l=(s,t)=>{const o=n.useRef(!0);n.useEffect(()=>{if(o.current)o.current=!1;else return s()},t)},T={tags:["autodocs"],title:"Hooks/useUpdateEffect",parameters:{references:["useUpdateEffect"]}},r={render:function(){const[t,o]=n.useState(0),[p,d]=n.useState(null),[i,m]=n.useState(null);return n.useEffect(()=>{setTimeout(()=>{d(t)},1e3)},[t]),l(()=>{setTimeout(()=>{m(t)},1e3)},[t]),e.jsxs(e.Fragment,{children:[e.jsxs(u,{component:"div",variant:"body100",children:["Count: ",t]}),e.jsx("button",{onClick:()=>o(t+1),children:"Increment"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(u,{component:"div",variant:"body100",children:["Count from effect: ",p]}),e.jsxs(u,{component:"div",variant:"body100",children:["Count from update effect: ",i]})]})}};var c,a,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    const [effectCount, setEffectCount] = useState<number | null>(null);
    const [updateEffectCount, setUpdateEffectCount] = useState<number | null>(null);
    useEffect(() => {
      setTimeout(() => {
        setEffectCount(count);
      }, 1000);
    }, [count]);
    useUpdateEffect(() => {
      setTimeout(() => {
        setUpdateEffectCount(count);
      }, 1000);
    }, [count]);
    return <>
        <Typography component="div" variant="body100">
          Count: {count}
        </Typography>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <br />
        <Typography component="div" variant="body100">
          Count from effect: {effectCount}
        </Typography>
        <Typography component="div" variant="body100">
          Count from update effect: {updateEffectCount}
        </Typography>
      </>;
  }
}`,...(f=(a=r.parameters)==null?void 0:a.docs)==null?void 0:f.source}}};const g=["Demo"];export{r as Demo,g as __namedExportsOrder,T as default};
