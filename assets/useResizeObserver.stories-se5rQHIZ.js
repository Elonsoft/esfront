import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as t}from"./index-Wm5baAvf.js";import{u as d}from"./useResizeObserver-C6sKC9YN.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";const v={tags:["autodocs"],title:"Hooks/useResizeObserver",parameters:{references:["useResizeObserver"]}},r={render:function(){const[a,c]=t.useState(0),s=t.useRef(null);return d(s,()=>{s.current&&c(s.current.clientHeight)}),e.jsxs("div",{className:"body100",children:[e.jsxs("div",{className:"mb-8",children:["Height of the element is ",a," PX."]}),e.jsxs("details",{ref:s,children:[e.jsx("summary",{children:"Click here in order to change element's height."}),e.jsxs("div",{children:[e.jsx("code",{children:"ResizeObserver"})," is triggered upon this text's visibility change."]})]})]})}};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDetailsElement | null>(null);
    useResizeObserver(ref, () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    });
    return <div className="body100">
        <div className="mb-8">Height of the element is {height} PX.</div>
        <details ref={ref}>
          <summary>Click here in order to change element&apos;s height.</summary>
          <div>
            <code>ResizeObserver</code> is triggered upon this text&apos;s visibility change.
          </div>
        </details>
      </div>;
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const x=["Demo"];export{r as Demo,x as __namedExportsOrder,v as default};
