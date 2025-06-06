import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as m}from"./Box-BsYG6vwI.js";import{B as c}from"./Button-Kloa1MkC.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";const x=()=>p.useCallback(t=>{window.navigator.vibrate&&window.navigator.vibrate(t)},[]),k={tags:["autodocs"],title:"Hooks/useVibration",parameters:{references:["useVibration"]}},r={render:function(){const n=x(),s=()=>{n(200)};return o.jsx(m,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Vibrate"})})}};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Demo"];export{r as Demo,y as __namedExportsOrder,k as default};
