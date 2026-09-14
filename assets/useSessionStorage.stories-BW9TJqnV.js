import{r as n,j as m}from"./iframe-Bc8-Q25v.js";import{T as w}from"./TextField-j8tsbYSO.js";import{B as z}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./ButtonBase-BBaKRXh4.js";const I=(e,t,d)=>{const{raw:s=!0,writeInitialValue:o,serializer:a=JSON.stringify,deserializer:g=JSON.parse}={},u=n.useMemo(()=>{try{const r=window.sessionStorage.getItem(e);return r!==null?s?r:g(r):t??null}catch{return t}},[e]),[l,p]=n.useState(()=>({key:e,value:u}));l.key!==e&&p({key:e,value:u});const x=l.key===e?l.value:u;n.useEffect(()=>{if(o)try{window.sessionStorage.getItem(e)===null&&window.sessionStorage.setItem(e,s?t:a(t))}catch{}},[e]);const f=n.useCallback(r=>{window.sessionStorage.setItem(e,s?r:a(r)),p({key:e,value:r})},[e,s,a]),h=n.useCallback(()=>{window.sessionStorage.removeItem(e),o&&window.sessionStorage.setItem(e,s?t:a(t)),p({key:e,value:t})},[e,s,a,t,o]);return[x,f,h]},_={tags:["autodocs"],title:"Hooks/useSessionStorage",parameters:{references:["useSessionStorage"]}},i={render:function(){const[t,d,s]=I("useSessionStorage","");return m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[m.jsx(w,{fullWidth:!0,"aria-label":"SessionStorage",helperText:"This input's value is saved inside the sessionStorage in 'useSessionStorage' key.",size:"500",value:t||"",variant:"outlined",onChange:o=>d(o.target.value)}),m.jsx(z,{color:"primary",size:"400",variant:"contained",onClick:()=>s(),children:"Remove"})]})}};var c,S,v;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const H=["Demo"];export{i as Demo,H as __namedExportsOrder,_ as default};
