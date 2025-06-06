import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{u}from"./useDocumentEventListener-DcHHZa3z.js";import{T as i}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const v={tags:["autodocs"],title:"Hooks/useDocumentEventListener",parameters:{references:["useDocumentEventListener"]}},e={render:function(){const[t,c]=a.useState(0);return u("click",()=>{c(t+1)}),o.jsxs(i,{variant:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:t}),"."]})}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });
    return <Typography variant="body100">
        Count of clicks on this page: <b>{count}</b>.
      </Typography>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const D=["Demo"];export{e as Demo,D as __namedExportsOrder,v as default};
