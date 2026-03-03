import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-Wm5baAvf.js";import{B as d}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const m=()=>{const[,n]=r.useState({});return r.useCallback(()=>{n({})},[])},U={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const s=m(),o=r.useRef(new Date(0).getTime()),a=r.useRef(!0);return a.current?a.current=!1:o.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Update"}),e.jsxs("div",{className:"body200 mt-8",children:["Time: ",o.current]})]})}};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <div className="body200 mt-8">Time: {date.current}</div>
      </>;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const j=["Demo"];export{t as Demo,j as __namedExportsOrder,U as default};
