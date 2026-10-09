import{u as t,j as e,M as c,d as i}from"./iframe-WZaTcFld.js";import{T as r}from"./TableInterface-BjyQXUdo.js";import"./preload-helper-Dp1pzeXC.js";import"./TableBase-CWhy6Fao.js";import"./typedoc-BRcbqk2I.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components API/Tour"}),`
`,e.jsx(n.h1,{id:"tour-api",children:"Tour API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Tour } from '@esfront/react';
`})}),`
`,e.jsx(n.h2,{id:"component-name",children:"Component name"}),`
`,e.jsxs(n.p,{children:["The name ",e.jsx(n.code,{children:"ESTour"})," can be used when providing default props."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{name:"TourProps",variant:"props"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"step",children:"Step"}),`
`,e.jsxs(n.p,{children:["Each entry of the ",e.jsx(n.code,{children:"steps"})," prop describes one stop of the tour."]}),`
`,e.jsx(r,{name:"TourStep",variant:"props"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"content"})," of a step may be a function, in which case it receives the navigation handles."]}),`
`,e.jsx(r,{name:"TourContentProps",variant:"props"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"step-context",children:"Step context"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"before"})," and ",e.jsx(n.code,{children:"after"})," callbacks of a step receive the step the tour is moving to."]}),`
`,e.jsx(r,{name:"TourStepContext",variant:"props"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"demos",children:"Demos"}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(i,{kind:"components-Tour",story:"demo",children:e.jsx("code",{children:"Tour"})})})})]})}function j(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
