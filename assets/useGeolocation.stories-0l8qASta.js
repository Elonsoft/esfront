import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{T as y}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DzcScnLI.js";import"./styled-QckRPC_l.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const c=t=>{const[r,e]=n.useState(null),[s,v]=n.useState(null),[h,d]=n.useState(!0);return n.useEffect(()=>{const p=a=>{e(a),d(!1)},l=a=>{v(a),d(!1)};navigator.geolocation.getCurrentPosition(p,l,t);const f=navigator.geolocation.watchPosition(p,l,t);return()=>{navigator.geolocation.clearWatch(f)}},[]),{position:r,error:s,loading:h}};try{c.displayName="useGeolocation",c.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",props:{}}}catch{}const N={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},i={render:function(){const{position:r,error:e,loading:s}=c();return o.jsxs(y,{component:"div",variant:"body100",children:[!!s&&o.jsx("div",{children:"Loading..."}),!!r&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:["Latitude: ",r.coords.latitude]}),o.jsxs("div",{children:["Longitude: ",r.coords.longitude]})]}),!!e&&o.jsxs("div",{children:["Error: ",e.message]})]})}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const {
      position,
      error,
      loading
    } = useGeolocation();
    return <Typography component="div" variant="body100">
        {!!loading && <div>Loading...</div>}
        {!!position && <>
            <div>Latitude: {position.coords.latitude}</div>
            <div>Longitude: {position.coords.longitude}</div>
          </>}
        {!!error && <div>Error: {error.message}</div>}
      </Typography>;
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const w=["Demo"];export{i as Demo,w as __namedExportsOrder,N as default};
