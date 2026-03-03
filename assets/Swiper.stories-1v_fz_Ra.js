import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{u as v,S as I}from"./Swiper-vXANzF6K.js";import{r as h}from"./index-Wm5baAvf.js";import{c as y}from"./clsx.m-C7bORDfW.js";import{u as H}from"./DefaultPropsProvider-BaGbio7E.js";import{s as O}from"./styled-BHLkoNCB.js";import{I as Y}from"./IconChevronLeftLineW400-BnYMLcPa.js";import{I as J}from"./IconChevronRightLineW400-_L_kWYUC.js";import{B as K}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./IconArrowRightLineW500-YcbLgK2w.js";import"./SvgIcon-Bb8ef9Tm.js";import"./IconArrowUpLineW500-CAJxKpl4.js";import"./IconArrowLeftLineW500-DTtVFMXB.js";import"./useLatest-C1UtP6al.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./useResizeObserver-C6sKC9YN.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const Q={height:0,margin:0,minHeight:0,minWidth:0,opacity:0,padding:0,width:0},S=({index:r,active:n,from:t,to:c,siblingFrom:o,siblingTo:s,name:u,transition:w,onSlideChange:a})=>{const p=r===o&&o>t||r===s&&s<c;return e.jsxs("label",{"aria-label":`${r}`,className:y("es-swiper-pagination-item",r===n&&"es-swiper-pagination-item--active"),style:r<o||r>s?{...Q,...w}:w,children:[e.jsx("input",{checked:r===n,className:"es-swiper-pagination-item__input",name:u,type:"radio",value:r,onChange:a}),e.jsx("div",{className:y("es-swiper-pagination-item__bullet",r===n&&"es-swiper-pagination-item__bullet--active",p&&"es-swiper-pagination-item__bullet--small"),style:w})]},r)};try{S.displayName="SwiperPaginationItem",S.__docgenInfo={description:"",displayName:"SwiperPaginationItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"number"}},from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},siblingFrom:{defaultValue:null,description:"",name:"siblingFrom",required:!0,type:{name:"number"}},siblingTo:{defaultValue:null,description:"",name:"siblingTo",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},transition:{defaultValue:null,description:"",name:"transition",required:!0,type:{name:"{ transitionDuration?: string | undefined; }"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const m=r=>{const{className:n,style:t,position:c="end",variant:o="small",siblingCount:s,transitionDuration:u}=H({props:r,name:"ESSwiperPagination"}),{direction:w,from:a,to:p,active:l,setActiveSlide:A}=v(),G=h.useMemo(()=>`pagination-${m.count++}`,[]),$=u||u===0?{transitionDuration:`${u}ms`}:{},F=h.useMemo(()=>{const g=[];for(let d=a;d<=p;d++)g.push(d);return g},[a,p]),{siblingFrom:W,siblingTo:L}=h.useMemo(()=>{const g=s?Math.max(a,l-s-Math.max(0,l+s-p)):a,d=s?Math.min(p,l+s+Math.max(0,a-(l-s))):p;return{siblingFrom:g,siblingTo:d}},[a,p,l,s]),R=g=>{A(+g.target.value)};return p<=a?null:e.jsx("div",{className:y("es-swiper-pagination",`es-swiper-pagination--direction--${w}`,`es-swiper-pagination--position--${c}`,`es-swiper-pagination--variant--${o}`,n),style:t,children:F.map(g=>e.jsx(S,{active:l,from:a,index:g,name:G,siblingFrom:W,siblingTo:L,to:p,transition:$,onSlideChange:R},g))})};m.count=0;try{m.displayName="SwiperPagination",m.__docgenInfo={description:"",displayName:"SwiperPagination",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},position:{defaultValue:null,description:"The pagination position.",name:"position",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},variant:{defaultValue:null,description:"The pagination variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"long"'}]}},siblingCount:{defaultValue:null,description:"Number of always visible items before and after active slide.",name:"siblingCount",required:!1,type:{name:"number"}},transitionDuration:{defaultValue:null,description:"The length of time a transition animation should take to complete.",name:"transitionDuration",required:!1,type:{name:"number"}}}}}catch{}const i=r=>e.jsx("img",{height:"160px",src:r.src,style:{objectFit:"cover",borderRadius:"8px"},width:r.width||"160px"}),Se={tags:["autodocs"],component:I,parameters:{references:["Swiper","SwiperButton","SwiperPagination"]},argTypes:{direction:{table:{disable:!0}},alignment:{table:{category:"General"},options:["center","start"],control:{type:"select"}},snap:{table:{category:"General"},defaultValue:!0},snapStop:{table:{category:"General"},options:["normal","always"],control:{type:"select"}},draggable:{table:{category:"General"},defaultValue:!0},gap:{table:{category:"General"}},loop:{table:{category:"General"}},autoPlay:{table:{category:"AutoPlay"}},autoPlayCount:{table:{category:"AutoPlay"}},buttonPrev:{table:{disable:!0}},buttonNext:{table:{disable:!0}},pagination:{table:{disable:!0}},SwiperPaginationPosition:{name:"SwiperPagination.position",description:"The position of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"end"}},options:["start","end"],control:{type:"select"}},SwiperPaginationVariant:{name:"SwiperPagination.variant",description:"The variant of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"small"}},options:["small","long","big"],control:{type:"select"}},SwiperPaginationSiblingCount:{name:"SwiperPagination.siblingCount",description:"Number of always visible items before and after active slide.",table:{category:"Pagination"},control:{type:"number"}},SwiperPaginationTransitionDuration:{name:"SwiperPagination.transitionDuration",description:"The length of time in ms a transition animation should take to complete.",table:{category:"Pagination"},control:{type:"number"}},actions:{table:{disable:!0}}},args:{}},j={render:({SwiperPaginationPosition:r,SwiperPaginationVariant:n,SwiperPaginationSiblingCount:t,SwiperPaginationTransitionDuration:c,...o})=>e.jsxs(I,{...o,pagination:e.jsx(m,{position:r,siblingCount:t,transitionDuration:c,variant:n}),children:[e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png",width:"320px"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"}),e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png",width:"320px"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"}),e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"})]})},x={render:({SwiperPaginationPosition:r,SwiperPaginationVariant:n,SwiperPaginationSiblingCount:t,SwiperPaginationTransitionDuration:c,...o})=>e.jsx("div",{style:{height:"min(512px, calc(100vh - 2rem))"},children:e.jsxs(I,{...o,direction:"vertical",pagination:e.jsx(m,{position:r,siblingCount:t,transitionDuration:c,variant:n}),children:[e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"}),e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"}),e.jsx(i,{src:"./swiper/1.png"}),e.jsx(i,{src:"./swiper/2.png"}),e.jsx(i,{src:"./swiper/3.png"}),e.jsx(i,{src:"./swiper/4.png"})]})})},E=O(K)(({prev:r,next:n})=>({position:"absolute",top:"50%",transform:"translateY(-50%)",borderRadius:"50%",...r&&{left:8},...n&&{right:8},backdropFilter:"blur(10px)","&.es-button.es-button--variant--text.es-button--color--black":{"--background":"var(--es-white-a600)"}})),U=()=>{const{active:r,setActiveSlide:n}=v(),t=()=>{n(r-1)};return e.jsx(E,{prev:!0,color:"black",onClick:t,children:e.jsx(Y,{})})},X=()=>{const{active:r,setActiveSlide:n}=v(),t=()=>{n(r+1)};return e.jsx(E,{next:!0,color:"black",onClick:t,children:e.jsx(J,{})})},b={render:r=>{const n=t=>e.jsx("img",{height:"56px",src:t.src,width:"56px"});return e.jsxs(I,{...r,buttonNext:e.jsx(X,{}),buttonPrev:e.jsx(U,{}),gap:8,children:[e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"}),e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"}),e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"})]})}};var f,P,C;j.parameters={...j.parameters,docs:{...(f=j.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return <Swiper {...args} pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
      </Swiper>;
  }
}`,...(C=(P=j.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var _,V,N,D,T;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return <div style={{
      height: 'min(512px, calc(100vh - 2rem))'
    }}>
        <Swiper {...args} direction="vertical" pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
        </Swiper>
      </div>;
  }
}`,...(N=(V=x.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"We can create vertical swiper.",...(T=(D=x.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var q,k,M,z,B;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const Image = (props: {
      src: string;
    }) => {
      return <img height="56px" src={props.src} width="56px" />;
    };
    return <Swiper {...args} buttonNext={<CustomizationButtonNext />} buttonPrev={<CustomizationButtonPrev />} gap={8}>
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
      </Swiper>;
  }
}`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:"Swiper is highly customizable. We can adjust `gap` between slides, override styles for swiper, swiper buttons and\npagination, or provide our own components via `buttonPrev`, `buttonNext` and `pagination` props.",...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};const ve=["Demo","Vertical","Customization"];export{b as Customization,j as Demo,x as Vertical,ve as __namedExportsOrder,Se as default};
