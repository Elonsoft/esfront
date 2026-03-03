import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-Wm5baAvf.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";const l=(u,e)=>{const s=n.useRef(!0);n.useEffect(()=>{if(s.current)s.current=!1;else return u()},e)},x={tags:["autodocs"],title:"Hooks/useUpdateEffect",parameters:{references:["useUpdateEffect"]}},o={render:function(){const[e,s]=n.useState(0),[a,d]=n.useState(null),[m,i]=n.useState(null);return n.useEffect(()=>{setTimeout(()=>{d(e)},1e3)},[e]),l(()=>{setTimeout(()=>{i(e)},1e3)},[e]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"body100",children:["Count: ",e]}),t.jsx("button",{onClick:()=>s(e+1),children:"Increment"}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"body100",children:["Count from effect: ",a]}),t.jsxs("div",{className:"body100",children:["Count from update effect: ",m]})]})}};var c,r,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <div className="body100">Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <br />
        <div className="body100">Count from effect: {effectCount}</div>
        <div className="body100">Count from update effect: {updateEffectCount}</div>
      </>;
  }
}`,...(f=(r=o.parameters)==null?void 0:r.docs)==null?void 0:f.source}}};const j=["Demo"];export{o as Demo,j as __namedExportsOrder,x as default};
