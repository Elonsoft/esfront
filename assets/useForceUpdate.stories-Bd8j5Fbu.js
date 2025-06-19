import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r}from"./index-DIDRz_s2.js";import{B as m}from"./Button-Bw7cy9Im.js";import{T as u}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./memoTheme-CJcpijc4.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";const d=()=>{const[,o]=r.useState({});return r.useCallback(()=>{o({})},[])},S={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const s=d(),a=r.useRef(new Date(0).getTime()),n=r.useRef(!0);return n.current?n.current=!1:a.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(m,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Update"}),e.jsxs(u,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Time: ",a.current]})]})}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const update = useForceUpdate();
    const date = useRef(new Date(0).getTime());
    const isFirst = useRef(true);
    if (isFirst.current) {
      isFirst.current = false;
    } else {
      date.current = new Date().getTime();
    }
    return <>
        <Button color="primary" size="400" variant="contained" onClick={update}>
          Update
        </Button>
        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Time: {date.current}
        </Typography>
      </>;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const z=["Demo"];export{t as Demo,z as __namedExportsOrder,S as default};
