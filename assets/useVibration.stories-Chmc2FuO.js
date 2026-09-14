import{r as p,j as e}from"./iframe-Bc8-Q25v.js";import{B as c}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";const d=()=>p.useCallback(t=>{window.navigator.vibrate&&window.navigator.vibrate(t)},[]),V={tags:["autodocs"],title:"Hooks/useVibration",parameters:{references:["useVibration"]}},r={render:function(){const n=d(),s=()=>{n(200)};return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:e.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Vibrate"})})}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const vibrate = useVibration();
    const onVibrate = () => {
      vibrate(200);
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '320px'
    }}>
        <Button color="primary" size="400" variant="contained" onClick={onVibrate}>
          Vibrate
        </Button>
      </div>;
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["Demo"];export{r as Demo,g as __namedExportsOrder,V as default};
