import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as s}from"./index-DIDRz_s2.js";import{u as p}from"./useResizeObserver-BNbozrrH.js";import{T as i}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const k={tags:["autodocs"],title:"Hooks/useResizeObserver",parameters:{references:["useResizeObserver"]}},t={render:function(){const[m,c]=s.useState(0),r=s.useRef(null);return p(r,()=>{r.current&&c(r.current.clientHeight)}),e.jsxs(i,{variant:"body100",children:[e.jsxs(i,{gutterBottom:!0,children:["Height of the element is ",m," PX."]}),e.jsxs("details",{ref:r,children:[e.jsx("summary",{children:"Click here in order to change element's height."}),e.jsxs("div",{children:[e.jsx("code",{children:"ResizeObserver"})," is triggered upon this text's visibility change."]})]})]})}};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDetailsElement | null>(null);
    useResizeObserver(ref, () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    });
    return <Typography variant="body100">
        <Typography gutterBottom>Height of the element is {height} PX.</Typography>
        <details ref={ref}>
          <summary>Click here in order to change element&apos;s height.</summary>
          <div>
            <code>ResizeObserver</code> is triggered upon this text&apos;s visibility change.
          </div>
        </details>
      </Typography>;
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const D=["Demo"];export{t as Demo,D as __namedExportsOrder,k as default};
