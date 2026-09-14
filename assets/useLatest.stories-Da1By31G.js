import{r as n,a as d,j as o}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";const p={tags:["autodocs"],title:"Hooks/useLatest",parameters:{references:["useLatest"]}},e={render:function(){const[t,u]=n.useState(0),i=d(()=>{u(t+1)});return n.useEffect(()=>{const s=()=>{i.current()};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),o.jsxs("div",{className:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:t}),"."]})}};var c,r,a;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    const latestCallback = useLatest(() => {
      setCount(count + 1);
    });
    useEffect(() => {
      const onClick = () => {
        latestCallback.current();
      };
      document.addEventListener('click', onClick);
      return () => {
        document.removeEventListener('click', onClick);
      };
    }, []);
    return <div className="body100">
        Count of clicks on this page: <b>{count}</b>.
      </div>;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const C=["Demo"];export{e as Demo,C as __namedExportsOrder,p as default};
