import{r,j as e}from"./iframe-Bc8-Q25v.js";import{B as d}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";const m=()=>{const[,n]=r.useState({});return r.useCallback(()=>{n({})},[])},D={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const s=m(),a=r.useRef(new Date(0).getTime()),o=r.useRef(!0);return o.current?o.current=!1:a.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:s,children:"Update"}),e.jsxs("div",{className:"body200 mt-8",children:["Time: ",a.current]})]})}};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const T=["Demo"];export{t as Demo,T as __namedExportsOrder,D as default};
