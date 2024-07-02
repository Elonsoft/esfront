"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[8906],{"../../node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("../../node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("../../node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("../../node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("../../node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./src/hooks/useCookie/useCookie.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useCookie_stories});var Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),react=__webpack_require__("../../node_modules/react/index.js");var Button=__webpack_require__("./src/components/Button/Button.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useCookie_stories={tags:["autodocs"],title:"Hooks/useCookie",parameters:{references:["useCookie"]}},Demo={render:function Render(){const[cookie,updateCookie,removeCookie]=((name,defaultValue)=>{const initialValue=(0,react.useMemo)((()=>{const cookie=document.cookie.split("; ").find((c=>c.startsWith(`${encodeURIComponent(name)}=`)));return cookie?decodeURIComponent(cookie.slice(cookie.indexOf("=")+1)):defaultValue??null}),[]),[value,setValue]=(0,react.useState)(initialValue),update=(0,react.useCallback)(((data,attributes)=>{const cookie=[];cookie.push(`${encodeURIComponent(name)}=${encodeURIComponent(data)}`),attributes?.expires&&cookie.push(`expires=${attributes.expires}`),attributes?.maxAge&&cookie.push(`max-age=${attributes.expires}`),attributes?.path&&cookie.push(`path=${attributes.path}`),attributes?.domain&&cookie.push(`domain=${attributes.domain}`),attributes?.secure&&cookie.push("secure"),attributes?.sameSite&&cookie.push(`samesite=${attributes.sameSite}`),document.cookie=cookie.join("; "),setValue(data)}),[]),remove=(0,react.useCallback)((()=>{update("",{expires:new Date(0).toUTCString()}),setValue("")}),[]);return[value,update,remove]})("useCookie","");return(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,"aria-label":"Cookie",helperText:"This input's value is saved inside the 'useCookie' cookie.",size:"40",value:cookie,onChange:event=>updateCookie(event.target.value)}),(0,jsx_runtime.jsx)(Button.z,{color:"primary",size:"400",variant:"contained",onClick:removeCookie,children:"Remove cookie"})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const [cookie, updateCookie, removeCookie] = useCookie('useCookie', '');\n    return <Box sx={{\n      display: 'flex',\n      flexWrap: 'wrap',\n      gap: '8px',\n      maxWidth: '360px'\n    }}>\n        <TextField fullWidth aria-label=\"Cookie\" helperText=\"This input's value is saved inside the 'useCookie' cookie.\" size=\"40\" value={cookie} onChange={event => updateCookie(event.target.value)} />\n        <Button color=\"primary\" size=\"400\" variant=\"contained\" onClick={removeCookie}>\n          Remove cookie\n        </Button>\n      </Box>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);