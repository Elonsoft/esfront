import{r,j as e}from"./iframe-Bc8-Q25v.js";import{u as l}from"./useIntersectionObserver-DdA9y8B1.js";import"./preload-helper-Dp1pzeXC.js";const x={tags:["autodocs"],title:"Hooks/useIntersectionObserver",parameters:{references:["useIntersectionObserver"]}},t={render:function(){const[c,a]=r.useState(!1),s=r.useRef(null);return l(s,d=>{a(d[0].isIntersecting)}),e.jsxs("div",{style:{height:"min(calc(100vh - 32px), 300px)",overflow:"auto",border:"1px solid black",borderRadius:"4px"},children:[e.jsxs("div",{className:"body100",style:{position:"sticky",top:0,backgroundColor:"monoB.500",padding:"4px 8px"},children:["Bottom element is intersecting: ",c.toString()]}),e.jsx("div",{style:{height:"600px"}}),e.jsx("div",{ref:s,style:{height:"64px",backgroundColor:"var(--es-primary-300)"}})]})}};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useIntersectionObserver(ref, entries => {
      setIntersecting(entries[0].isIntersecting);
    });
    return <div style={{
      height: 'min(calc(100vh - 32px), 300px)',
      overflow: 'auto',
      border: '1px solid black',
      borderRadius: '4px'
    }}>
        <div className="body100" style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'monoB.500',
        padding: '4px 8px'
      }}>
          Bottom element is intersecting: {isIntersecting.toString()}
        </div>
        <div style={{
        height: '600px'
      }} />
        <div ref={ref} style={{
        height: '64px',
        backgroundColor: 'var(--es-primary-300)'
      }} />
      </div>;
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Demo"];export{t as Demo,v as __namedExportsOrder,x as default};
