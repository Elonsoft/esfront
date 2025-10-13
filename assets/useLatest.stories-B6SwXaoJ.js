import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{r as s}from"./index-DIDRz_s2.js";import{u as m}from"./useLatest-sVqXUmVb.js";import{T as p}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DzcScnLI.js";import"./styled-QckRPC_l.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const R={tags:["autodocs"],title:"Hooks/useLatest",parameters:{references:["useLatest"]}},t={render:function(){const[e,i]=s.useState(0),u=m(()=>{i(e+1)});return s.useEffect(()=>{const o=()=>{u.current()};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[]),r.jsxs(p,{variant:"body100",children:["Count of clicks on this page: ",r.jsx("b",{children:e}),"."]})}};var n,c,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const S=["Demo"];export{t as Demo,S as __namedExportsOrder,R as default};
