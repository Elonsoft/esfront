import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{r as s}from"./index-DIDRz_s2.js";import{u as m}from"./useLatest-sVqXUmVb.js";import{T as p}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const L={tags:["autodocs"],title:"Hooks/useLatest",parameters:{references:["useLatest"]}},t={render:function(){const[e,u]=s.useState(0),i=m(()=>{u(e+1)});return s.useEffect(()=>{const o=()=>{i.current()};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[]),r.jsxs(p,{variant:"body100",children:["Count of clicks on this page: ",r.jsx("b",{children:e}),"."]})}};var n,c,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    return <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>;
  }
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const g=["Demo"];export{t as Demo,g as __namedExportsOrder,L as default};
