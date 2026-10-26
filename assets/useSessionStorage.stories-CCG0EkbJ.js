import{r as i,j as m}from"./iframe-D3HjMCd-.js";import{T as w}from"./TextField-DT-FTa2W.js";import{B as z}from"./Button-D_kL-LjM.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-21R-WjRB.js";import"./useId-DNcBXqE4.js";import"./FormFieldHelperText-d3-TP2cu.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-Ba4OjAmF.js";import"./useForkRef-GwhPXW4N.js";import"./FormFieldLabel-DOLpuC-H.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-CLniivOv.js";import"./ButtonBase-ZB4rAPke.js";const I=(e,t,d)=>{const{raw:s=!0,writeInitialValue:o,serializer:a=JSON.stringify,deserializer:g=JSON.parse}={},u=i.useMemo(()=>{try{const r=window.sessionStorage.getItem(e);return r!==null?s?r:g(r):t??null}catch{return t}},[e]),[p,l]=i.useState(()=>({key:e,value:u}));p.key!==e&&l({key:e,value:u});const x=p.key===e?p.value:u;i.useEffect(()=>{if(o)try{window.sessionStorage.getItem(e)===null&&window.sessionStorage.setItem(e,s?t:a(t))}catch{}},[e]);const f=i.useCallback(r=>{window.sessionStorage.setItem(e,s?r:a(r)),l({key:e,value:r})},[e,s,a]),h=i.useCallback(()=>{window.sessionStorage.removeItem(e),o&&window.sessionStorage.setItem(e,s?t:a(t)),l({key:e,value:t})},[e,s,a,t,o]);return[x,f,h]},H={tags:["autodocs"],title:"Hooks/useSessionStorage",parameters:{references:["useSessionStorage"]}},n={render:function(){const[t,d,s]=I("useSessionStorage","");return m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[m.jsx(w,{fullWidth:!0,"aria-label":"SessionStorage",helperText:"This input's value is saved inside the sessionStorage in 'useSessionStorage' key.",size:"500",value:t||"",variant:"outlined",onChange:o=>d(o.target.value)}),m.jsx(z,{color:"primary",size:"400",variant:"contained",onClick:()=>s(),children:"Remove"})]})}};var c,S,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [value, update, remove] = useSessionStorage('useSessionStorage', '');
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '360px'
    }}>
        <TextField fullWidth aria-label="SessionStorage" helperText="This input's value is saved inside the sessionStorage in 'useSessionStorage' key." size="500" value={value || ''} variant="outlined" onChange={event => update(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={() => remove()}>
          Remove
        </Button>
      </div>;
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const M=["Demo"];export{n as Demo,M as __namedExportsOrder,H as default};
