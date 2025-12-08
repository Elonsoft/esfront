import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{u as p}from"./useWindowEventListener-DbdMtNlQ.js";import{T as c}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const T={tags:["autodocs"],title:"Hooks/useWindowEventListener",parameters:{references:["useWindowEventListener"]}},t={render:function(){const[o,i]=a.useState(0);return p("click",()=>{i(o+1)}),r.jsxs(c,{variant:"body100",children:["Count of clicks on this page: ",r.jsx("b",{children:o}),"."]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useWindowEventListener('click', () => {
      setCount(count + 1);
    });
    return <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const W=["Demo"];export{t as Demo,W as __namedExportsOrder,T as default};
