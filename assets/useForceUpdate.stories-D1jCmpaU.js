import{r as s,j as e}from"./iframe-WZaTcFld.js";import{u}from"./useForceUpdate-Bnb30UZl.js";import{B as d}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";const T={tags:["autodocs"],title:"Hooks/useForceUpdate",parameters:{references:["useForceUpdate"]}},t={render:function(){const c=u(),r=s.useRef(new Date(0).getTime()),n=s.useRef(!0);return n.current?n.current=!1:r.current=new Date().getTime(),e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"primary",size:"400",variant:"contained",onClick:c,children:"Update"}),e.jsxs("div",{className:"body200 mt-8",children:["Time: ",r.current]})]})}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const U=["Demo"];export{t as Demo,U as __namedExportsOrder,T as default};
