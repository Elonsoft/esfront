"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[9849],{"./src/hooks/useForceUpdate/useForceUpdate.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Demo_:()=>_Demo_,__namedExportsOrder:()=>useForceUpdate_stories_namedExportsOrder,default:()=>useForceUpdate_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),Description=__webpack_require__("./.storybook/components/Description.tsx"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Demo=()=>{const update=(()=>{const[,setState]=(0,react.useState)({});return(0,react.useCallback)((()=>{setState({})}),[])})(),date=(0,react.useRef)(new Date(0).getTime()),isFirst=(0,react.useRef)(!0);return isFirst.current?isFirst.current=!1:date.current=(new Date).getTime(),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{size:"32",variant:"contained",onClick:update,children:"Update"}),(0,jsx_runtime.jsxs)(Typography.Z,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Time: ",date.current]})]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Hooks/useForceUpdate"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"useforceupdate",children:"useForceUpdate"}),"\n",(0,jsx_runtime.jsx)(Description.d,{name:"useForceUpdate"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{story:Demo,name:"Demo"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(dist_react.Z,{kind:"hooks-api-useForceUpdate",story:"page",children:(0,jsx_runtime.jsx)("code",{children:"useForceUpdate"})})})})]})}const _Demo_=Demo;_Demo_.storyName="Demo";const componentMeta={title:"Hooks/useForceUpdate",tags:["stories-mdx"],includeStories:["_Demo_"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const useForceUpdate_stories=componentMeta,useForceUpdate_stories_namedExportsOrder=["_Demo_"]},"./.storybook/components/Description.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Description});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_typedoc_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/typedoc.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Description=({name})=>{const description=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const entry=_src_typedoc_json__WEBPACK_IMPORTED_MODULE_2__.pI.find((e=>e.name===name)),signature=entry?.signatures?.[0];return signature&&signature?.comment?.shortText||""}),[name]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{margin:"16px 0",fontFamily:'"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:"14px",lineHeight:"24px"},children:description})};Description.displayName="Description";try{Description.displayName="Description",Description.__docgenInfo={description:"",displayName:"Description",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Description.tsx#Description"]={docgenInfo:Description.__docgenInfo,name:"Description",path:".storybook/components/Description.tsx#Description"})}catch(__react_docgen_typescript_loader_error){}}}]);