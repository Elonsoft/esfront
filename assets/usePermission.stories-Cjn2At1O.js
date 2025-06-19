import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as x}from"./Box-Og3xCN3M.js";import{T as h}from"./TextField-Cv87NqMI.js";import{M as r}from"./MenuItem-D4peanbb.js";import{T as g}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./memoTheme-CJcpijc4.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BubGiXqi.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./FormControl-CYKlpDDs.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cdrn0csy.js";import"./Menu-DtX3jm--.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./useTheme-D4EsW5Cf.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-CW64547e.js";import"./SvgIcon-U0LES8Ux.js";import"./clsx.m-C7bORDfW.js";import"./useThemeProps-DTzdApbH.js";import"./useForkRef-DJnV46t9.js";import"./ButtonBase-C33Z4or-.js";const v=m=>{const[o,a]=p.useState("");return p.useEffect(()=>{let n=!0,t=null;const i=()=>{n&&a(()=>(t==null?void 0:t.state)??"")};return navigator.permissions.query(m).then(d=>{t=d,t.addEventListener("change",i),i()}),()=>{t&&t.removeEventListener("change",i),n=!1,t=null}},[m]),o},je={tags:["autodocs"],title:"Hooks/usePermission",parameters:{references:["usePermission"]}},s={render:function(){const[o,a]=p.useState("camera"),n=v({name:o}),t=i=>{a(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{maxWidth:"320px"},children:e.jsxs(h,{fullWidth:!0,select:!0,label:"Permission",size:"40",value:o,onChange:t,children:[e.jsx(r,{value:"camera",children:"camera"}),e.jsx(r,{value:"geolocation",children:"geolocation"}),e.jsx(r,{value:"microphone",children:"microphone"}),e.jsx(r,{value:"midi",children:"midi"}),e.jsx(r,{value:"notifications",children:"notifications"}),e.jsx(r,{value:"persistent-storage",children:"persistent-storage"}),e.jsx(r,{value:"push",children:"push"}),e.jsx(r,{value:"screen-wake-lock",children:"screen-wake-lock"}),e.jsx(r,{value:"speaker",children:"speaker"}),e.jsx(r,{value:"xr-spatial-tracking",children:"xr-spatial-tracking"})]})}),e.jsxs(g,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Permission status: ",JSON.stringify(n,null,2)]})]})}};var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ye=["Demo"];export{s as Demo,ye as __namedExportsOrder,je as default};
