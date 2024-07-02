"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[9955],{"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx.Z)(classes.root,className)},other))}))},"./src/hooks/useGeolocation/useGeolocation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useGeolocation_stories});var Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),react=__webpack_require__("../../node_modules/react/index.js");const useGeolocation=options=>{const[position,setPosition]=(0,react.useState)(null),[error,setError]=(0,react.useState)(null),[loading,setLoading]=(0,react.useState)(!0);return(0,react.useEffect)((()=>{const onSuccess=event=>{setPosition(event),setLoading(!1)},onError=error=>{setError(error),setLoading(!1)};navigator.geolocation.getCurrentPosition(onSuccess,onError,options);const id=navigator.geolocation.watchPosition(onSuccess,onError,options);return()=>{navigator.geolocation.clearWatch(id)}}),[]),{position,error,loading}};try{useGeolocation.displayName="useGeolocation",useGeolocation.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useGeolocation/useGeolocation.tsx#useGeolocation"]={docgenInfo:useGeolocation.__docgenInfo,name:"useGeolocation",path:"src/hooks/useGeolocation/useGeolocation.tsx#useGeolocation"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useGeolocation_stories={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},Demo={render:function Render(){const{position,error,loading}=useGeolocation();return(0,jsx_runtime.jsxs)(Typography.Z,{component:"div",variant:"body100",children:[!!loading&&(0,jsx_runtime.jsx)("div",{children:"Loading..."}),!!position&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:["Latitude: ",position.coords.latitude]}),(0,jsx_runtime.jsxs)("div",{children:["Longitude: ",position.coords.longitude]})]}),!!error&&(0,jsx_runtime.jsxs)("div",{children:["Error: ",error.message]})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const {\n      position,\n      error,\n      loading\n    } = useGeolocation();\n    return <Typography component="div" variant="body100">\n        {!!loading && <div>Loading...</div>}\n        {!!position && <>\n            <div>Latitude: {position.coords.latitude}</div>\n            <div>Longitude: {position.coords.longitude}</div>\n          </>}\n        {!!error && <div>Error: {error.message}</div>}\n      </Typography>;\n  }\n}',...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);