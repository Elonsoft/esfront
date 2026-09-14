import{r as n,j as o}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";const c=t=>{const[e,r]=n.useState(null),[i,h]=n.useState(null),[v,d]=n.useState(!0);return n.useEffect(()=>{const l=a=>{r(a),d(!1)},u=a=>{h(a),d(!1)};navigator.geolocation.getCurrentPosition(l,u,t);const f=navigator.geolocation.watchPosition(l,u,t);return()=>{navigator.geolocation.clearWatch(f)}},[]),{position:e,error:i,loading:v}};try{c.displayName="useGeolocation",c.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",filePath:"/home/runner/work/esfront/esfront/packages/react/src/hooks/useGeolocation/useGeolocation.tsx",methods:[],props:{},tags:{param:"options An optional object that provides configuration options for the location watch.",returns:"Current position or position error and loading state."}}}catch{}const j={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},s={render:function(){const{position:e,error:r,loading:i}=c();return o.jsxs("div",{className:"body100",children:[!!i&&o.jsx("div",{children:"Loading..."}),!!e&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:["Latitude: ",e.coords.latitude]}),o.jsxs("div",{children:["Longitude: ",e.coords.longitude]})]}),!!r&&o.jsxs("div",{children:["Error: ",r.message]})]})}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const E=["Demo"];export{s as Demo,E as __namedExportsOrder,j as default};
