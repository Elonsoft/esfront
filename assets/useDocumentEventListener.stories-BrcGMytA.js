import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as c}from"./index-DIDRz_s2.js";import{u as m}from"./useDocumentEventListener-DcHHZa3z.js";import{T as a}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const T={tags:["autodocs"],title:"Hooks/useDocumentEventListener",parameters:{references:["useDocumentEventListener"]}},t={render:function(){const[e,i]=c.useState(0);return m("click",()=>{i(e+1)}),o.jsxs(a,{variant:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:e}),"."]})}};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });
    return <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,T as default};
