import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as x}from"./Box-BsYG6vwI.js";import{T as h}from"./TextField-BNsw1mhy.js";import{M as r}from"./MenuItem-OzUXNg8S.js";import{T as g}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./clsx.m-C7bORDfW.js";import"./useForkRef-DJnV46t9.js";import"./ButtonBase-B9dD5NpA.js";const v=a=>{const[o,m]=p.useState("");return p.useEffect(()=>{let n=!0,t=null;const i=()=>{n&&m(()=>(t==null?void 0:t.state)??"")};return navigator.permissions.query(a).then(d=>{t=d,t.addEventListener("change",i),i()}),()=>{t&&t.removeEventListener("change",i),n=!1,t=null}},[a]),o},xe={tags:["autodocs"],title:"Hooks/usePermission",parameters:{references:["usePermission"]}},s={render:function(){const[o,m]=p.useState("camera"),n=v({name:o}),t=i=>{m(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{maxWidth:"320px"},children:e.jsxs(h,{fullWidth:!0,select:!0,label:"Permission",size:"40",value:o,onChange:t,children:[e.jsx(r,{value:"camera",children:"camera"}),e.jsx(r,{value:"geolocation",children:"geolocation"}),e.jsx(r,{value:"microphone",children:"microphone"}),e.jsx(r,{value:"midi",children:"midi"}),e.jsx(r,{value:"notifications",children:"notifications"}),e.jsx(r,{value:"persistent-storage",children:"persistent-storage"}),e.jsx(r,{value:"push",children:"push"}),e.jsx(r,{value:"screen-wake-lock",children:"screen-wake-lock"}),e.jsx(r,{value:"speaker",children:"speaker"}),e.jsx(r,{value:"xr-spatial-tracking",children:"xr-spatial-tracking"})]})}),e.jsxs(g,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Permission status: ",JSON.stringify(n,null,2)]})]})}};var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const [permission, setPermission] = useState<any>('camera');
    const state = usePermission({
      name: permission
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPermission(e.target.value);
    };
    return <>
        <Box sx={{
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
        </Box>
        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Permission status: {JSON.stringify(state, null, 2)}
        </Typography>
      </>;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const he=["Demo"];export{s as Demo,he as __namedExportsOrder,xe as default};
