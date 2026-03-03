import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-Wm5baAvf.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";const c=r=>{const[e,t]=n.useState(null),[i,v]=n.useState(null),[h,d]=n.useState(!0);return n.useEffect(()=>{const l=a=>{t(a),d(!1)},u=a=>{v(a),d(!1)};navigator.geolocation.getCurrentPosition(l,u,r);const f=navigator.geolocation.watchPosition(l,u,r);return()=>{navigator.geolocation.clearWatch(f)}},[]),{position:e,error:i,loading:h}};try{c.displayName="useGeolocation",c.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",props:{}}}catch{}const L={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},s={render:function(){const{position:e,error:t,loading:i}=c();return o.jsxs("div",{className:"body100",children:[!!i&&o.jsx("div",{children:"Loading..."}),!!e&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:["Latitude: ",e.coords.latitude]}),o.jsxs("div",{children:["Longitude: ",e.coords.longitude]})]}),!!t&&o.jsxs("div",{children:["Error: ",t.message]})]})}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const {
      position,
      error,
      loading
    } = useGeolocation();
    return <div className="body100">
        {!!loading && <div>Loading...</div>}
        {!!position && <>
            <div>Latitude: {position.coords.latitude}</div>
            <div>Longitude: {position.coords.longitude}</div>
          </>}
        {!!error && <div>Error: {error.message}</div>}
      </div>;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const y=["Demo"];export{s as Demo,y as __namedExportsOrder,L as default};
