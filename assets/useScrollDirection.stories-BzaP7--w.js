import{j as c}from"./jsx-runtime-BoZ7yaty.js";import{r}from"./index-DIDRz_s2.js";import{T as x}from"./Typography-dCWir4IF.js";import{B as T}from"./Box-wRm4ebgR.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DzcScnLI.js";import"./styled-QckRPC_l.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const g=(e,o)=>{let t;return()=>{t||(t=setTimeout(()=>{e(),clearTimeout(t),t=void 0},o))}},D=e=>{const[o,t]=r.useState(null),i=r.useRef(!1),s=r.useRef(0),u=r.useCallback(()=>{const n=e!=null&&e.container?e.container.scrollTop:window.scrollY;t(n>s.current?"down":"up"),s.current=Math.max(0,n),i.current=!1},[e]);return r.useEffect(()=>{s.current=e!=null&&e.container?e.container.scrollTop:window.scrollY;const n=()=>{i.current||(window.requestAnimationFrame(g(u,(e==null?void 0:e.throttleTimeout)??5)),i.current=!0)};return((e==null?void 0:e.container)||window).addEventListener("scroll",n),()=>{((e==null?void 0:e.container)||window).removeEventListener("scroll",n)}},[u,e==null?void 0:e.throttleTimeout,e==null?void 0:e.container]),o},Y={tags:["autodocs"],title:"Hooks/useScrollDirection",parameters:{references:["useScrollDirection"],docs:{story:{inline:!1}}},argTypes:{throttleTimeout:{control:{type:"number"}}}},l={render:function(o){const t=D({throttleTimeout:o.throttleTimeout});return c.jsxs(c.Fragment,{children:[c.jsx(x,{sx:{position:"fixed"},variant:"overline",children:t||"the page hasn't been scrolled"}),c.jsx(T,{sx:{height:"150vh"}})]})}};var d,h,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const scrollDirection = useScrollDirection({
      throttleTimeout: args.throttleTimeout
    });
    return <>
        <Typography sx={{
        position: 'fixed'
      }} variant="overline">
          {scrollDirection ? scrollDirection : \`the page hasn't been scrolled\`}
        </Typography>
        <Box sx={{
        height: '150vh'
      }} />
      </>;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const _=["Demo"];export{l as Demo,_ as __namedExportsOrder,Y as default};
