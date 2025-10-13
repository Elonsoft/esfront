import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as m}from"./Box-wRm4ebgR.js";import{B as c}from"./Button-CL4pDWwx.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";const x=()=>p.useCallback(t=>{window.navigator.vibrate&&window.navigator.vibrate(t)},[]),y={tags:["autodocs"],title:"Hooks/useVibration",parameters:{references:["useVibration"]}},r={render:function(){const n=x(),s=()=>{n(200)};return o.jsx(m,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Vibrate"})})}};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const W=["Demo"];export{r as Demo,W as __namedExportsOrder,y as default};
