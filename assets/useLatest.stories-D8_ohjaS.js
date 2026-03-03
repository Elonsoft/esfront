import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-Wm5baAvf.js";import{u as d}from"./useLatest-C1UtP6al.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";const v={tags:["autodocs"],title:"Hooks/useLatest",parameters:{references:["useLatest"]}},e={render:function(){const[t,u]=r.useState(0),i=d(()=>{u(t+1)});return r.useEffect(()=>{const s=()=>{i.current()};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),o.jsxs("div",{className:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:t}),"."]})}};var n,c,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const E=["Demo"];export{e as Demo,E as __namedExportsOrder,v as default};
