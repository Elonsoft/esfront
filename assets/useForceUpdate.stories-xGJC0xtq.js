import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r}from"./index-DIDRz_s2.js";import{B as m}from"./Button-Kloa1MkC.js";import{T as u}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-B-dksMZM.js";const d=()=>{const[,o]=r.useState({});return r.useCallback(()=>{o({})},[])},j={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const s=d(),a=r.useRef(new Date(0).getTime()),n=r.useRef(!0);return n.current?n.current=!1:a.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(m,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Update"}),e.jsxs(u,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Time: ",a.current]})]})}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["Demo"];export{t as Demo,k as __namedExportsOrder,j as default};
