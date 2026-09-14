import{r,j as i}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";const v=(e,o)=>{let t;return()=>{t||(t=setTimeout(()=>{e(),clearTimeout(t),t=void 0},o))}},D=e=>{const[o,t]=r.useState(null),c=r.useRef(!1),s=r.useRef(0),u=r.useCallback(()=>{const n=e!=null&&e.container?e.container.scrollTop:window.scrollY;t(n>s.current?"down":"up"),s.current=Math.max(0,n),c.current=!1},[e]);return r.useEffect(()=>{s.current=e!=null&&e.container?e.container.scrollTop:window.scrollY;const n=()=>{c.current||(window.requestAnimationFrame(v(u,(e==null?void 0:e.throttleTimeout)??5)),c.current=!0)};return((e==null?void 0:e.container)||window).addEventListener("scroll",n),()=>{((e==null?void 0:e.container)||window).removeEventListener("scroll",n)}},[u,e==null?void 0:e.throttleTimeout,e==null?void 0:e.container]),o},w={tags:["autodocs"],title:"Hooks/useScrollDirection",parameters:{references:["useScrollDirection"],docs:{story:{inline:!1}}},argTypes:{throttleTimeout:{control:{type:"number"}}}},l={render:function(o){const t=D({throttleTimeout:o.throttleTimeout});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"overline",style:{position:"fixed"},children:t||"the page hasn't been scrolled"}),i.jsx("div",{style:{height:"150vh"}})]})}};var d,h,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const scrollDirection = useScrollDirection({
      throttleTimeout: args.throttleTimeout
    });
    return <>
        <div className="overline" style={{
        position: 'fixed'
      }}>
          {scrollDirection ? scrollDirection : \`the page hasn't been scrolled\`}
        </div>
        <div style={{
        height: '150vh'
      }} />
      </>;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const x=["Demo"];export{l as Demo,x as __namedExportsOrder,w as default};
