"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[8620],{"./src/components/Pagination/Pagination.context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>usePaginationContext,I:()=>PaginationContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const PaginationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),usePaginationContext=()=>{const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaginationContext);if(null===value)throw new Error("No provider for PaginationContext.");return value}},"./src/components/Pagination/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Pagination});var react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getPaginationUtilityClass(slot){return(0,generateUtilityClass.Z)("ESPagination",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESPagination",["root"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Pagination_context=__webpack_require__("./src/components/Pagination/Pagination.context.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PaginationRoot=(0,styled.ZP)("div",{name:"ESPagination",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({display:"flex",alignItems:"center",flexWrap:"wrap",gap:12,"& > *:first-of-type":{flexGrow:.5,marginLeft:"auto"},"& > *:last-of-type":{flexGrow:.5,justifyContent:"flex-end"}}))),Pagination=(0,react.memo)((function Pagination(inProps){const{className,sx,children,count,itemsPerPage,page,onPageChange,onItemsPerPageChange,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESPagination"}),value=(0,react.useMemo)((()=>({count,itemsPerPage,page,onPageChange,onItemsPerPageChange})),[count,itemsPerPage,page,onPageChange,onItemsPerPageChange]),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getPaginationUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(Pagination_context.I.Provider,{value,children:(0,jsx_runtime.jsx)(PaginationRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children})})}));Pagination.__docgenInfo={description:"The Pagination component enables the user to select a specific page from a range of pages.",methods:[],displayName:"Pagination",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."}]}}],raw:"Partial<PaginationClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},count:{required:!0,tsType:{name:"number"},description:"The total number of items."},itemsPerPage:{required:!0,tsType:{name:"number"},description:"The number of items per page."},page:{required:!0,tsType:{name:"number"},description:"The current page."},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback fired when the page is changed."},onItemsPerPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(itemPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"itemPerPage"}],return:{name:"void"}}},description:"Callback fired when the items per page is changed."}}}},"./src/components/Pagination/PaginationPages/PaginationPages.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>PaginationPages});var react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getPaginationPagesUtilityClass(slot){return(0,generateUtilityClass.Z)("ESPaginationPages",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESPaginationPages",["root","pagination","paginationItem","button","ellipsis","textField","tooltip"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),outlinedInputClasses=__webpack_require__("./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js"),buttonBaseClasses=__webpack_require__("./node_modules/@mui/material/ButtonBase/buttonBaseClasses.js"),touchRippleClasses=__webpack_require__("./node_modules/@mui/material/ButtonBase/touchRippleClasses.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),iconButtonClasses=__webpack_require__("./node_modules/@mui/material/IconButton/iconButtonClasses.js"),Pagination=__webpack_require__("./node_modules/@mui/material/Pagination/Pagination.js"),paginationClasses=__webpack_require__("./node_modules/@mui/material/Pagination/paginationClasses.js"),PaginationItem=__webpack_require__("./node_modules/@mui/material/PaginationItem/PaginationItem.js"),paginationItemClasses=__webpack_require__("./node_modules/@mui/material/PaginationItem/paginationItemClasses.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),tooltipClasses=__webpack_require__("./node_modules/@mui/material/Tooltip/tooltipClasses.js"),useDocumentEventListener=__webpack_require__("./src/hooks/useDocumentEventListener/useDocumentEventListener.ts"),IconChevronLeftW400=__webpack_require__("./src/icons/IconChevronLeftW400.tsx"),IconChevronRightW400=__webpack_require__("./src/icons/IconChevronRightW400.tsx"),IconDotsHorizontalW100=__webpack_require__("./src/icons/IconDotsHorizontalW100.tsx"),IconArrowLeft2W300=__webpack_require__("./src/icons/IconArrowLeft2W300.tsx"),IconArrowRight2W300=__webpack_require__("./src/icons/IconArrowRight2W300.tsx"),Pagination_context=__webpack_require__("./src/components/Pagination/Pagination.context.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const enterKeyframe=emotion_react_browser_esm.F4`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,PaginationPagesRoot=(0,styled.ZP)("div",{name:"ESPaginationPages",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({display:"flex",alignItems:"center"}))),PaginationPagesPagination=(0,styled.ZP)(Pagination.Z,{name:"ESPaginationPages",slot:"Pagination",overridesResolver:(props,styles)=>styles.pagination})((()=>({[`& .${paginationClasses.Z.ul}`]:{flexWrap:"nowrap"}}))),PaginationPagesButton=(0,styled.ZP)(IconButton.Z,{name:"ESPaginationPages",slot:"Button",overridesResolver:(props,styles)=>styles.button})((({theme})=>({[`&.${iconButtonClasses.Z.root}`]:{"&, &:not(:disabled):hover, &:not(:disabled):active":{color:theme.palette.monoA.A500}},[`&.${iconButtonClasses.Z.disabled}`]:{color:theme.palette.monoA.A300}}))),PaginationPagesEllipsis=(0,styled.ZP)("div",{name:"ESPaginationPages",slot:"Ellipsis",overridesResolver:(props,styles)=>styles.ellipsis})((({theme})=>({display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,color:theme.palette.monoA.A500}))),PaginationPagesPaginationItem=(0,styled.ZP)(PaginationItem.Z,{name:"ESPaginationPages",slot:"PaginationItem",overridesResolver:(props,styles)=>styles.paginationItem})((({theme})=>({[`&.${buttonBaseClasses.Z.root}`]:{...theme.typography.caption,margin:0,padding:"0 4px",[`&.${paginationItemClasses.Z.root}`]:{[`& .${touchRippleClasses.Z.root}`]:{transitionDuration:`${theme.transitions.duration.short}ms`}},[`& .${touchRippleClasses.Z.rippleVisible}`]:{animationName:`${enterKeyframe} !important`,opacity:"1 !important"},...theme.mixins.button({background:"transparent",color:theme.palette.monoA.A600,hover:theme.palette.monoA.A50,focus:theme.palette.monoA.A200,active:theme.palette.monoA.A150}),[`&.${paginationItemClasses.Z.selected}`]:{fontWeight:700,...theme.mixins.button({background:theme.palette.secondary.A100,color:theme.palette.monoA.A800,hover:theme.palette.secondary.A100,focus:theme.palette.secondary.A200,active:theme.palette.secondary.A150})}}}))),PaginationPagesTextField=(0,styled.ZP)(TextField.Z,{name:"ESPaginationPages",slot:"TextField",overridesResolver:(props,styles)=>styles.textField})((({theme})=>({[`& .${outlinedInputClasses.Z.root}`]:{marginLeft:"16px",width:"64px",[`& .${outlinedInputClasses.Z.input}`]:{...theme.typography.caption,color:theme.palette.monoA.A600,padding:"7px 8px","&::placeholder":{color:theme.palette.monoA.A600},"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{appearance:"none",margin:0},"&[type=number]":{appearance:"textfield"}}}}))),PaginationPagesTooltip=(0,styled.ZP)((({className,...props})=>(0,jsx_runtime.jsx)(Tooltip.Z,{...props,classes:{popper:className}})),{name:"ESPaginationPages",slot:"Tooltip",overridesResolver:(props,styles)=>styles.tooltip})((({theme})=>({[`& .${tooltipClasses.Z.tooltip}`]:{...theme.typography.caption,alignItems:"center",display:"grid",gap:4,gridAutoFlow:"column"}}))),REGEX=/^[0-9]*$/,PaginationPages=(0,react.memo)((function PaginationPages(inProps){const{className,sx,boundaryCount,siblingCount,labelPrevPage,labelNextPage,labelPage,iconPrevPage=(0,jsx_runtime.jsx)(IconChevronLeftW400.D,{}),iconNextPage=(0,jsx_runtime.jsx)(IconChevronRightW400.p,{}),iconEllipsis=(0,jsx_runtime.jsx)(IconDotsHorizontalW100.l,{}),iconTooltipPrevPage=(0,jsx_runtime.jsx)(IconArrowLeft2W300.t,{}),iconTooltipNextPage=(0,jsx_runtime.jsx)(IconArrowRight2W300.e,{}),...props}=(0,useThemeProps.Z)({props:inProps,name:"ESPaginationPages"}),{count,itemsPerPage,page,onPageChange}=(0,Pagination_context.E)(),[state,setState]=(0,react.useState)("");(0,useDocumentEventListener.V)("keydown",(event=>{event.ctrlKey&&("ArrowLeft"===event.key?onPageChange(Math.max(1,page-1)):"ArrowRight"===event.key&&onPageChange(Math.min(Math.ceil(count/itemsPerPage),page+1)))}));const classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],pagination:["pagination"],paginationItem:["paginationItem"],button:["button"],ellipsis:["ellipsis"],textField:["textField"],tooltip:["tooltip"]},getPaginationPagesUtilityClass,classes)})({...props});return(0,jsx_runtime.jsxs)(PaginationPagesRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children:[(0,jsx_runtime.jsx)(PaginationPagesPagination,{boundaryCount,className:(0,clsx_m.Z)(classes.pagination),count:Math.ceil(count/itemsPerPage),page,renderItem:item=>{switch(item.type){case"previous":case"next":return(0,jsx_runtime.jsx)(PaginationPagesButton,{"aria-label":`${"next"===item.type?labelNextPage:labelPrevPage}`,className:classes.button,disabled:item.disabled,size:"32",onClick:item.onClick,children:"previous"===item.type?iconPrevPage:iconNextPage});case"start-ellipsis":case"end-ellipsis":return(0,jsx_runtime.jsx)(PaginationPagesEllipsis,{className:classes.ellipsis,children:iconEllipsis});default:return(0,jsx_runtime.jsx)(PaginationPagesTooltip,{arrow:!0,className:classes.tooltip,placement:"top",title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[iconTooltipPrevPage," Ctrl ",iconTooltipNextPage]}),children:(0,jsx_runtime.jsx)(PaginationPagesPaginationItem,{className:(0,clsx_m.Z)(classes.paginationItem),component:"div",...item})})}},siblingCount,onChange:(event,page)=>{page&&onPageChange(page)}}),(0,jsx_runtime.jsx)(PaginationPagesTextField,{className:(0,clsx_m.Z)(classes.textField),placeholder:`${page} ${labelPage}`,size:"32",type:"text",value:state,onChange:event=>{REGEX.test(event.target.value)&&setState(event.target.value)},onKeyPress:event=>{const inputValue=event.target.value;"Enter"===event.key&&inputValue&&(onPageChange(Math.min(Math.ceil(count/itemsPerPage),Math.max(1,+state))),setState(""))}})]})}));PaginationPages.__docgenInfo={description:"",methods:[],displayName:"PaginationPages",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the pagination element. */\n  pagination: string;\n  /** Styles applied to the paginationItem element. */\n  paginationItem: string;\n  /** Styles applied to the next and prev button elements. */\n  button: string;\n  /** Styles applied to the pagination ellipsis. */\n  ellipsis: string;\n  /** Styles applied to the textField element. */\n  textField: string;\n  /** Styles applied to the tooltip element. */\n  tooltip: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"pagination",value:{name:"string",required:!0},description:"Styles applied to the pagination element."},{key:"paginationItem",value:{name:"string",required:!0},description:"Styles applied to the paginationItem element."},{key:"button",value:{name:"string",required:!0},description:"Styles applied to the next and prev button elements."},{key:"ellipsis",value:{name:"string",required:!0},description:"Styles applied to the pagination ellipsis."},{key:"textField",value:{name:"string",required:!0},description:"Styles applied to the textField element."},{key:"tooltip",value:{name:"string",required:!0},description:"Styles applied to the tooltip element."}]}}],raw:"Partial<PaginationPagesClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},boundaryCount:{required:!1,tsType:{name:"number"},description:"Number of always visible pages at the beginning and end."},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of always visible pages before and after the current page."},labelPrevPage:{required:!1,tsType:{name:"string"},description:"Text for the previous page button aria-label."},labelNextPage:{required:!1,tsType:{name:"string"},description:"Text for the next page button aria-label."},labelPage:{required:!1,tsType:{name:"string"},description:"Text for the input placeholder."},iconPrevPage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the previous page button."},iconNextPage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the next page button."},iconEllipsis:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the pagination ellipsis."},iconTooltipPrevPage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the previous page hint in tooltip."},iconTooltipNextPage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the next page hint in tooltip."}}}},"./src/components/Pagination/PaginationRange/PaginationRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>PaginationRange});var react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getPaginationRangeUtilityClass(slot){return(0,generateUtilityClass.Z)("ESPaginationRange",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESPaginationRange",["root","label","button","value"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),buttonClasses=__webpack_require__("./node_modules/@mui/material/Button/buttonClasses.js"),Menu=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),IconMenuDownW300=__webpack_require__("./src/icons/IconMenuDownW300.tsx"),Pagination_context=__webpack_require__("./src/components/Pagination/Pagination.context.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PaginationRangeRoot=(0,styled.ZP)("div",{name:"ESPaginationRange",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({display:"flex",alignItems:"center"}))),PaginationRangeLabel=(0,styled.ZP)(Typography.Z,{name:"ESPaginationRange",slot:"Label",overridesResolver:(props,styles)=>styles.label})((({theme})=>({display:"inline-block",color:theme.palette.monoA.A600}))),PaginationRangeButton=(0,styled.ZP)(Button.Z,{name:"ESPaginationRange",slot:"Button",overridesResolver:(props,styles)=>styles.button})((({theme})=>({[`&.${buttonClasses.Z.root}`]:{[`&.${buttonClasses.Z.text}`]:{padding:"0 6px 0 4px","&, &:not(:disabled):hover, &:not(:disabled):active":{color:theme.palette.monoA.A900}},[`& .${buttonClasses.Z.endIcon}`]:{color:theme.palette.monoA.A500,marginLeft:"2px"}}}))),PaginationRangeValue=(0,styled.ZP)(Typography.Z,{name:"ESPaginationRange",slot:"Value",overridesResolver:(props,styles)=>styles.value})((({theme})=>({marginLeft:"16px",color:theme.palette.monoA.A600}))),OPTIONS=[10,25,100],PaginationRange=(0,react.memo)((function PaginationRange(inProps){const[anchorEl,setAnchorEl]=(0,react.useState)(null),open=Boolean(anchorEl),{className,sx,options=OPTIONS,labelItemsPerPage,labelOf,iconItemsPerPage=(0,jsx_runtime.jsx)(IconMenuDownW300.m,{container:!0,containerSize:"16px"}),...props}=(0,useThemeProps.Z)({props:inProps,name:"ESPaginationRange"}),{count,itemsPerPage,page,onItemsPerPageChange,onPageChange}=(0,Pagination_context.E)(),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],label:["label"],button:["button"],value:["value"]},getPaginationRangeUtilityClass,classes)})({...props});return(0,jsx_runtime.jsxs)(PaginationRangeRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children:[(0,jsx_runtime.jsx)(PaginationRangeLabel,{variant:"caption",children:labelItemsPerPage}),(0,jsx_runtime.jsx)(PaginationRangeButton,{"aria-expanded":open?"true":void 0,className:(0,clsx_m.Z)(classes.button,className),color:"tertiary",endIcon:iconItemsPerPage,size:"32",onClick:event=>{setAnchorEl(event.currentTarget)},children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"caption",children:itemsPerPage})}),(0,jsx_runtime.jsx)(Menu.Z,{anchorEl,open,onClose:()=>{setAnchorEl(null)},children:options.map(((option,index)=>(0,jsx_runtime.jsx)(MenuItem.Z,{selected:index===itemsPerPage,onClick:event=>((_event,index)=>{setAnchorEl(null),onItemsPerPageChange(options[index]),onPageChange(1)})(0,index),children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"caption",children:option})},option)))}),(0,jsx_runtime.jsxs)(PaginationRangeValue,{className:(0,clsx_m.Z)(classes.value,className),variant:"caption",children:[(page-1)*itemsPerPage+(count?1:0),"–",Math.min(page*itemsPerPage,count)," ",labelOf," ",count]})]})}));PaginationRange.__docgenInfo={description:"",methods:[],displayName:"PaginationRange",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the typography element. */\n  label: string;\n  /** Styles applied to the button element. */\n  button: string;\n  /** Styles applied to the typography element. */\n  value: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"label",value:{name:"string",required:!0},description:"Styles applied to the typography element."},{key:"button",value:{name:"string",required:!0},description:"Styles applied to the button element."},{key:"value",value:{name:"string",required:!0},description:"Styles applied to the typography element."}]}}],raw:"Partial<PaginationRangeClasses>"},description:"Override or extend the styles applied to the component."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},options:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Options of the rows per page select field."},labelItemsPerPage:{required:!1,tsType:{name:"string"},description:"Text for the items per page."},labelOf:{required:!1,tsType:{name:"string"},description:"Text for the page range preposition."},iconItemsPerPage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the items per page select."}}}},"./src/hooks/useDocumentEventListener/useDocumentEventListener.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>useDocumentEventListener});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_useLatest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useLatest/useLatest.ts");const useDocumentEventListener=(type,callback,options)=>{const latestCallback=(0,_useLatest__WEBPACK_IMPORTED_MODULE_1__.d)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onEvent=event=>latestCallback.current(event);return document.addEventListener(type,onEvent,options),()=>{document.removeEventListener(type,onEvent)}}),[])}}}]);
//# sourceMappingURL=8620.4ce7b465.iframe.bundle.js.map