import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as c}from"./index-DIDRz_s2.js";import{u as a}from"./useDocumentEventListener-DcHHZa3z.js";import{T as m}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-CJcpijc4.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./useTheme-B2nYkSwK.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";const L={tags:["autodocs"],title:"Hooks/useDocumentEventListener",parameters:{references:["useDocumentEventListener"]}},t={render:function(){const[e,i]=c.useState(0);return a("click",()=>{i(e+1)}),o.jsxs(m,{variant:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:e}),"."]})}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });
    return <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const T=["Demo"];export{t as Demo,T as __namedExportsOrder,L as default};
