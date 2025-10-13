import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{B as x}from"./Box-wRm4ebgR.js";import{T as h}from"./TextField-B-8j0Rl0.js";import{M as r}from"./MenuItem-CTB1bkQ4.js";import{T as g}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./useForkRef-DJnV46t9.js";import"./ButtonBase-BtCzZW19.js";const v=a=>{const[o,m]=p.useState("");return p.useEffect(()=>{let n=!0,t=null;const i=()=>{n&&m(()=>(t==null?void 0:t.state)??"")};return navigator.permissions.query(a).then(d=>{t=d,t.addEventListener("change",i),i()}),()=>{t&&t.removeEventListener("change",i),n=!1,t=null}},[a]),o},ke={tags:["autodocs"],title:"Hooks/usePermission",parameters:{references:["usePermission"]}},s={render:function(){const[o,m]=p.useState("camera"),n=v({name:o}),t=i=>{m(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{maxWidth:"320px"},children:e.jsxs(h,{fullWidth:!0,select:!0,label:"Permission",size:"40",value:o,onChange:t,children:[e.jsx(r,{value:"camera",children:"camera"}),e.jsx(r,{value:"geolocation",children:"geolocation"}),e.jsx(r,{value:"microphone",children:"microphone"}),e.jsx(r,{value:"midi",children:"midi"}),e.jsx(r,{value:"notifications",children:"notifications"}),e.jsx(r,{value:"persistent-storage",children:"persistent-storage"}),e.jsx(r,{value:"push",children:"push"}),e.jsx(r,{value:"screen-wake-lock",children:"screen-wake-lock"}),e.jsx(r,{value:"speaker",children:"speaker"}),e.jsx(r,{value:"xr-spatial-tracking",children:"xr-spatial-tracking"})]})}),e.jsxs(g,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Permission status: ",JSON.stringify(n,null,2)]})]})}};var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const je=["Demo"];export{s as Demo,je as __namedExportsOrder,ke as default};
