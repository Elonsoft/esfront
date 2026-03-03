import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as p}from"./index-Wm5baAvf.js";import{T as h}from"./TextField-BE5m1Jj6.js";import{M as r}from"./MenuItem-DrDY2G9B.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./clsx.m-C7bORDfW.js";import"./useForkRef-CGhsnMYO.js";import"./ButtonBase-BhCJPokL.js";const v=a=>{const[s,m]=p.useState("");return p.useEffect(()=>{let o=!0,t=null;const i=()=>{o&&m(()=>(t==null?void 0:t.state)??"")};return navigator.permissions.query(a).then(d=>{t=d,t.addEventListener("change",i),i()}),()=>{t&&t.removeEventListener("change",i),o=!1,t=null}},[a]),s},le={tags:["autodocs"],title:"Hooks/usePermission",parameters:{references:["usePermission"]}},n={render:function(){const[s,m]=p.useState("camera"),o=v({name:s}),t=i=>{m(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{maxWidth:"320px"},children:e.jsxs(h,{fullWidth:!0,select:!0,label:"Permission",size:"40",value:s,onChange:t,children:[e.jsx(r,{value:"camera",children:"camera"}),e.jsx(r,{value:"geolocation",children:"geolocation"}),e.jsx(r,{value:"microphone",children:"microphone"}),e.jsx(r,{value:"midi",children:"midi"}),e.jsx(r,{value:"notifications",children:"notifications"}),e.jsx(r,{value:"persistent-storage",children:"persistent-storage"}),e.jsx(r,{value:"push",children:"push"}),e.jsx(r,{value:"screen-wake-lock",children:"screen-wake-lock"}),e.jsx(r,{value:"speaker",children:"speaker"}),e.jsx(r,{value:"xr-spatial-tracking",children:"xr-spatial-tracking"})]})}),e.jsxs("div",{className:"body200 mt-8",children:["Permission status: ",JSON.stringify(o,null,2)]})]})}};var u,l,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const [permission, setPermission] = useState<any>('camera');
    const state = usePermission({
      name: permission
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPermission(e.target.value);
    };
    return <>
        <div style={{
        maxWidth: '320px'
      }}>
          <TextField fullWidth select label="Permission" size="40" value={permission} onChange={onChange}>
            <MenuItem value="camera">camera</MenuItem>
            <MenuItem value="geolocation">geolocation</MenuItem>
            <MenuItem value="microphone">microphone</MenuItem>
            <MenuItem value="midi">midi</MenuItem>
            <MenuItem value="notifications">notifications</MenuItem>
            <MenuItem value="persistent-storage">persistent-storage</MenuItem>
            <MenuItem value="push">push</MenuItem>
            <MenuItem value="screen-wake-lock">screen-wake-lock</MenuItem>
            <MenuItem value="speaker">speaker</MenuItem>
            <MenuItem value="xr-spatial-tracking">xr-spatial-tracking</MenuItem>
          </TextField>
        </div>
        <div className="body200 mt-8">Permission status: {JSON.stringify(state, null, 2)}</div>
      </>;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ce=["Demo"];export{n as Demo,ce as __namedExportsOrder,le as default};
