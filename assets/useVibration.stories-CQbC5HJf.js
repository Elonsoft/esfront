import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as m}from"./Box-Og3xCN3M.js";import{B as c}from"./Button-Bw7cy9Im.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./clsx.m-C7bORDfW.js";import"./useThemeProps-DTzdApbH.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";const x=()=>p.useCallback(t=>{window.navigator.vibrate&&window.navigator.vibrate(t)},[]),W={tags:["autodocs"],title:"Hooks/useVibration",parameters:{references:["useVibration"]}},r={render:function(){const n=x(),s=()=>{n(200)};return o.jsx(m,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Vibrate"})})}};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
