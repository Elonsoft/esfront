import{k as a}from"./generateUtilityClasses-D4qQEpRV.js";const o=8,p=a`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,y=a`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,n=a`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -110px;
  }
`,c=r=>[{props:{color:"inherit"},style:{color:"currentColor"}},{props:{color:"monoA"},style:{color:r.vars.palette.monoA[500]}},{props:{color:"primary"},style:{color:r.vars.palette.primary[300]}},{props:{color:"secondary"},style:{color:r.vars.palette.secondary[300]}}],l=()=>Array.from({length:o}).reduce((r,e,t)=>(r[`&:nth-of-type(${o-t})`]={animationDelay:`${-t/o*1e3}ms`},r),{});export{l as a,c as g,p as o,y as r,n as s};
