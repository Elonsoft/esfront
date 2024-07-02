"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[7567],{"../../node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("../../node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("../../node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("../../node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("../../node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./src/hooks/useSessionStorage/useSessionStorage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useSessionStorage_stories});var Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),react=__webpack_require__("../../node_modules/react/index.js");var Button=__webpack_require__("./src/components/Button/Button.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useSessionStorage_stories={tags:["autodocs"],title:"Hooks/useSessionStorage",parameters:{references:["useSessionStorage"]}},Demo={render:function Render(){const[value,update,remove]=((key,initialValue,options)=>{const{raw=!0,serializer=JSON.stringify,deserializer=JSON.parse}=options||{},initializer=(0,react.useMemo)((()=>{try{const storageValue=sessionStorage.getItem(key);return storageValue?raw?storageValue:deserializer(storageValue):initialValue??null}catch{return initialValue??null}}),[key]),[value,setValue]=(0,react.useState)(initializer),update=(0,react.useCallback)((value=>{sessionStorage.setItem(key,raw?value:serializer(value)),setValue(value)}),[key]);return[value,update,(0,react.useCallback)((()=>{sessionStorage.removeItem(key),setValue(initialValue??null)}),[key,initialValue])]})("useSessionStorage","");return(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,"aria-label":"SessionStorage",helperText:"This input's value is saved inside the sessionStorage in 'useSessionStorage' key.",size:"40",value:value||"",onChange:event=>update(event.target.value)}),(0,jsx_runtime.jsx)(Button.z,{color:"primary",size:"400",variant:"contained",onClick:()=>remove(),children:"Remove"})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const [value, update, remove] = useSessionStorage('useSessionStorage', '');\n    return <Box sx={{\n      display: 'flex',\n      flexWrap: 'wrap',\n      gap: '8px',\n      maxWidth: '360px'\n    }}>\n        <TextField fullWidth aria-label=\"SessionStorage\" helperText=\"This input's value is saved inside the sessionStorage in 'useSessionStorage' key.\" size=\"40\" value={value || ''} onChange={event => update(event.target.value)} />\n        <Button color=\"primary\" size=\"400\" variant=\"contained\" onClick={() => remove()}>\n          Remove\n        </Button>\n      </Box>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);