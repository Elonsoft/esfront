import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r}from"./index-DIDRz_s2.js";import{B as m}from"./Button-DhPfczDk.js";import{T as u}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./styled-CkBBDypc.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";const d=()=>{const[,o]=r.useState({});return r.useCallback(()=>{o({})},[])},S={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const s=d(),a=r.useRef(new Date(0).getTime()),n=r.useRef(!0);return n.current?n.current=!1:a.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(m,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Update"}),e.jsxs(u,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Time: ",a.current]})]})}};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
