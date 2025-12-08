import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as m}from"./Box-CBu-ct3E.js";import{B as c}from"./Button-DhPfczDk.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";const x=()=>p.useCallback(t=>{window.navigator.vibrate&&window.navigator.vibrate(t)},[]),W={tags:["autodocs"],title:"Hooks/useVibration",parameters:{references:["useVibration"]}},r={render:function(){const n=x(),s=()=>{n(200)};return o.jsx(m,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Vibrate"})})}};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: function Render() {
    const vibrate = useVibration();
    const onVibrate = () => {
      vibrate(200);
    };
    return <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '320px'
    }}>
        <Button color="primary" size="400" variant="contained" onClick={onVibrate}>
          Vibrate
        </Button>
      </Box>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,W as default};
