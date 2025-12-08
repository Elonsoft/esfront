import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as x}from"./Box-CBu-ct3E.js";import{T as h}from"./TextField-D_RGTig6.js";import{M as r}from"./MenuItem-CqODWihV.js";import{T as g}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";import"./clsx.m-C7bORDfW.js";import"./useForkRef-DJnV46t9.js";import"./ButtonBase-CDV15rsf.js";const v=a=>{const[o,m]=p.useState("");return p.useEffect(()=>{let n=!0,t=null;const i=()=>{n&&m(()=>(t==null?void 0:t.state)??"")};return navigator.permissions.query(a).then(d=>{t=d,t.addEventListener("change",i),i()}),()=>{t&&t.removeEventListener("change",i),n=!1,t=null}},[a]),o},Me={tags:["autodocs"],title:"Hooks/usePermission",parameters:{references:["usePermission"]}},s={render:function(){const[o,m]=p.useState("camera"),n=v({name:o}),t=i=>{m(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{maxWidth:"320px"},children:e.jsxs(h,{fullWidth:!0,select:!0,label:"Permission",size:"40",value:o,onChange:t,children:[e.jsx(r,{value:"camera",children:"camera"}),e.jsx(r,{value:"geolocation",children:"geolocation"}),e.jsx(r,{value:"microphone",children:"microphone"}),e.jsx(r,{value:"midi",children:"midi"}),e.jsx(r,{value:"notifications",children:"notifications"}),e.jsx(r,{value:"persistent-storage",children:"persistent-storage"}),e.jsx(r,{value:"push",children:"push"}),e.jsx(r,{value:"screen-wake-lock",children:"screen-wake-lock"}),e.jsx(r,{value:"speaker",children:"speaker"}),e.jsx(r,{value:"xr-spatial-tracking",children:"xr-spatial-tracking"})]})}),e.jsxs(g,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Permission status: ",JSON.stringify(n,null,2)]})]})}};var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Ie=["Demo"];export{s as Demo,Ie as __namedExportsOrder,Me as default};
