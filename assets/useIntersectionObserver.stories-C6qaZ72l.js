import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-Wm5baAvf.js";import{u as p}from"./useIntersectionObserver-CywOKxjJ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";const b={tags:["autodocs"],title:"Hooks/useIntersectionObserver",parameters:{references:["useIntersectionObserver"]}},t={render:function(){const[c,a]=s.useState(!1),r=s.useRef(null);return p(r,d=>{a(d[0].isIntersecting)}),e.jsxs("div",{style:{height:"min(calc(100vh - 32px), 300px)",overflow:"auto",border:"1px solid black",borderRadius:"4px"},children:[e.jsxs("div",{className:"body100",style:{position:"sticky",top:0,backgroundColor:"monoB.500",padding:"4px 8px"},children:["Bottom element is intersecting: ",c.toString()]}),e.jsx("div",{style:{height:"600px"}}),e.jsx("div",{ref:r,style:{height:"64px",backgroundColor:"var(--es-primary-300)"}})]})}};var o,i,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const h=["Demo"];export{t as Demo,h as __namedExportsOrder,b as default};
