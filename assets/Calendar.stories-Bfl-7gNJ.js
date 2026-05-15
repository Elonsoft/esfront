import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as g}from"./index-Wm5baAvf.js";import{c as N}from"./clsx.m-C7bORDfW.js";import{u as q}from"./DefaultPropsProvider-BaGbio7E.js";import{u as ne}from"./DateAdapter.context-DN26yuu8.js";import{T as de}from"./Tooltip-CWEZrURX.js";import{B as ue}from"./ButtonBase-BhCJPokL.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./useForkRef-CGhsnMYO.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./SvgIcon-Bb8ef9Tm.js";const H=n=>{var b,D,m;const{children:e,className:d,style:a,disabled:l,inactive:i,selected:r,hovered:o,today:u,position:v,onClick:s,onHover:S,TooltipProps:c}=q({props:n,name:"ESCalendarButton"});return t.jsx("div",{className:N("es-calendar-button",r&&"es-calendar-button--selected",o&&"es-calendar-button--hovered",v&&`es-calendar-button--position--${v}`,d),style:a,onClick:s,onFocus:S,onMouseEnter:S,children:t.jsx("div",{className:"es-calendar-button__wrapper",children:t.jsx(de,{disableInteractive:!0,...c,TransitionProps:{timeout:0,...c==null?void 0:c.TransitionProps},slotProps:{...c==null?void 0:c.slotProps,popper:{...(b=c==null?void 0:c.slotProps)==null?void 0:b.popper,className:N("es-calendar-button__tooltip",(m=(D=c==null?void 0:c.slotProps)==null?void 0:D.popper)==null?void 0:m.className)}},title:(c==null?void 0:c.title)||"",children:t.jsx("div",{style:{width:"100%"},children:t.jsx(ue,{className:N("es-calendar-button__button",i&&"es-calendar-button__button--inactive",r&&v!=="between"&&"es-calendar-button__button--selected",u&&"es-calendar-button__button--today"),disabled:l,children:e})})})})})};try{H.displayName="CalendarButton",H.__docgenInfo={description:"",displayName:"CalendarButton",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"Whether the date is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},inactive:{defaultValue:null,description:"Whether the date is inactive.",name:"inactive",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Whether the date is selected.",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Whether the date is hovered.",name:"hovered",required:!1,type:{name:"boolean"}},today:{defaultValue:null,description:"Whether the date is today.",name:"today",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"The position of selected button in the selection range.",name:"position",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'},{value:'"between"'}]}},onClick:{defaultValue:null,description:"Callback fired when the date button is clicked.",name:"onClick",required:!1,type:{name:"(() => void)"}},onHover:{defaultValue:null,description:"Callback fired when the date button is hovered or focused.",name:"onHover",required:!1,type:{name:"(() => void)"}},TooltipProps:{defaultValue:null,description:"Props applied to the tooltip component.",name:"TooltipProps",required:!1,type:{name:"Partial<TooltipProps>"}}}}}catch{}const ce=(n,e,d,a)=>g.useMemo(()=>{const i=[],r=[],o=[],u=new Date(n,e,1),v=u.getDay()-d;for(u.setDate(1-(v>=0?v:7+v));u.getDate()!==1;)r.push(u.getDate()),u.setDate(u.getDate()+1);let s=1;for(;u.getMonth()===e;)i.push(s++),u.setDate(s);for(s=1;u.getDay()!==d||a==="max"&&o.length+r.length+i.length<42;)o.push(s++),u.setDate(s);return{dates:i,prevDates:r,nextDates:o}},[n,e,d,a]),y=n=>{const{className:e,style:d,year:a,month:l,weekStart:i=1,rows:r="max",selection:o,hover:u,showPrevMonth:v,showNextMonth:s,onSelectionChange:S,onHover:c,getButtonDisabled:b,getButtonTooltipProps:D}=q({props:n,name:"ESCalendar"}),{adapter:m}=ne();if(m===void 0)throw new Error("No provider for DateAdapterContext.");const{dates:oe,prevDates:re,nextDates:se}=ce(a,l,i,r),j=(h,le,ie)=>{const w=new Date(h,le,ie);let _,W=!1,T=!1;if(o&&o[0]){const B=new Date(o[0]),F=o[1]?new Date(o[1]):null;let f=[B,F],p=[B,F||u];f[0]&&f[1]&&f[0]>f[1]&&(f=f.reverse()),p[0]&&p[1]&&p[0]>p[1]&&(p=p.reverse()),p[1]&&m.isWithinRange(w,p)&&(_="between"),m.isSameDay(p[0],w)&&(_="start"),p[1]&&m.isSameDay(p[1],w)&&(_="end"),(m.isSameDay(f[0],w)||f[0]&&f[1]&&m.isWithinRange(w,f))&&(W=!0),u&&p[1]&&!m.isSameDay(p[0],p[1])&&(T=m.isWithinRange(w,p))}const R=b==null?void 0:b(w);return{position:_,disabled:R,selected:W,hovered:T,today:m.isSameDay(new Date,w),onClick:()=>!R&&(S==null?void 0:S(w)),onHover:()=>!R&&(c==null?void 0:c(w)),TooltipProps:D==null?void 0:D(w)}};return t.jsxs("div",{className:N("es-calendar",`es-calendar--rows--${r}`,e),style:d,children:[re.map(h=>v?t.jsx(H,{inactive:!0,...j(a,l-1,h),children:h},h):t.jsx("span",{},h)),oe.map(h=>t.jsx(H,{...j(a,l,h),children:h},h)),se.map(h=>s?t.jsx(H,{inactive:!0,...j(a,l+1,h),children:h},h):t.jsx("span",{},h))]})};try{y.displayName="Calendar",y.__docgenInfo={description:"The calendar allows users to pick a date or a range of dates.",displayName:"Calendar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},year:{defaultValue:null,description:"The year to display.",name:"year",required:!0,type:{name:"number"}},month:{defaultValue:null,description:"The month to display.",name:"month",required:!0,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"10"},{value:"4"},{value:"3"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"11"}]}},weekStart:{defaultValue:null,description:"The day the week starts with.",name:"weekStart",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"4"},{value:"3"},{value:"5"},{value:"6"}]}},rows:{defaultValue:{value:"'max'"},description:"Count of calendar rows to display.",name:"rows",required:!1,type:{name:"enum",value:[{value:'"max"'},{value:'"auto"'}]}},selection:{defaultValue:null,description:"The current selected date range.",name:"selection",required:!1,type:{name:"[string | number | Date, string | number | Date | null] | null"}},onSelectionChange:{defaultValue:null,description:"Callback fired when the date is selected.",name:"onSelectionChange",required:!1,type:{name:"((value: Date) => void)"}},hover:{defaultValue:null,description:"The current hovered date.",name:"hover",required:!1,type:{name:"Date | null"}},onHover:{defaultValue:null,description:"Callback fired when the date button is hovered or focused.",name:"onHover",required:!1,type:{name:"((date: Date | null) => void)"}},showPrevMonth:{defaultValue:null,description:"Whether to display dates of the previous month at the start the current month.",name:"showPrevMonth",required:!1,type:{name:"boolean"}},showNextMonth:{defaultValue:null,description:"Whether to display dates of the next month at the end of the current month.",name:"showNextMonth",required:!1,type:{name:"boolean"}},getButtonDisabled:{defaultValue:null,description:"Used to determine the disabled state for a given date.",name:"getButtonDisabled",required:!1,type:{name:"((date: Date) => boolean)"}},getButtonTooltipProps:{defaultValue:null,description:"Used to determine the props applied to the tooltip element of a given date .",name:"getButtonTooltipProps",required:!1,type:{name:"((date: Date) => Partial<TooltipProps>)"}}}}}catch{}const x=n=>{const{className:e,style:d,weekStart:a=1,getWeekDays:l}=q({props:n,name:"ESCalendarHead"}),i=g.useMemo(()=>{const r=l();for(let o=0;o<a;o++)r.push(r.shift()||"");return r},[a,l]);return t.jsx("div",{className:N("es-calendar-head",e),style:d,children:i.map((r,o)=>t.jsx("div",{className:"es-calendar-head__day caption",children:r},o))})};try{x.displayName="CalendarHead",x.__docgenInfo={description:"The days list for the calendar.",displayName:"CalendarHead",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},weekStart:{defaultValue:null,description:"The day the week starts with.",name:"weekStart",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"4"},{value:"3"},{value:"5"},{value:"6"}]}},getWeekDays:{defaultValue:null,description:"The labels for the days of week.",name:"getWeekDays",required:!1,type:{name:"(() => ReactNode[])"}}}}}catch{}const V=()=>{const[n,e]=g.useState(null),[d,a]=g.useState(null),l=g.useCallback(o=>{if(!n||!n[0]||n[1])e([o,null]);else{const u=new Date(n[0]);a(null),u<o?e([u,o]):e([o,u])}},[n]);return{selection:n,hover:d,onSelectionChange:l,onHover:o=>{n&&n[0]&&!n[1]&&a(o)},onHoverDelete:()=>{a(null)}}},Ie={tags:["autodocs"],component:y,parameters:{references:["Calendar","CalendarButton","CalendarHead"]},argTypes:{selection:{table:{disable:!0}},hover:{table:{disable:!0}},getButtonDisabled:{table:{disable:!0}},getButtonTooltipProps:{table:{disable:!0}}},args:{year:2024,month:1,weekStart:1}},P={render:function(e){const[d,a]=g.useState(null),l=g.useCallback(i=>{a([i,null])},[d]);return t.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},children:[t.jsx(x,{weekStart:e.weekStart}),t.jsx(y,{month:e.month,rows:e.rows,selection:d,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onSelectionChange:l})]})}},k={render:function(e){const{selection:d,hover:a,onSelectionChange:l,onHover:i,onHoverDelete:r}=V();return t.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},onMouseLeave:r,children:[t.jsx(x,{weekStart:e.weekStart}),t.jsx(y,{hover:a,month:e.month,rows:e.rows,selection:d,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onHover:i,onSelectionChange:l})]})}},C={render:function(e){const{selection:d,hover:a,onSelectionChange:l,onHover:i,onHoverDelete:r}=V();return t.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"800px",display:"flex"},onMouseLeave:r,children:[t.jsxs("div",{style:{borderRight:"1px solid var(--es-mono-a-a100)",flexGrow:1},children:[t.jsx(x,{weekStart:e.weekStart}),t.jsx(y,{showPrevMonth:!0,hover:a,month:1,rows:e.rows,selection:d,weekStart:e.weekStart,year:2024,onHover:i,onSelectionChange:l})]}),t.jsxs("div",{style:{flexGrow:1},children:[t.jsx(x,{weekStart:e.weekStart}),t.jsx(y,{showNextMonth:!0,hover:a,month:2,rows:e.rows,selection:d,weekStart:e.weekStart,year:2024,onHover:i,onSelectionChange:l})]})]})}},M={render:function(e,d){const a=d.globals.locale||"en",{adapter:l}=ne(),{selection:i,hover:r,onSelectionChange:o,onHover:u,onHoverDelete:v}=V();return t.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},onMouseLeave:v,children:[t.jsx(x,{weekStart:e.weekStart}),t.jsx(y,{getButtonDisabled:s=>s.getFullYear()===2024&&s.getMonth()===1&&s.getDate()===9||s.getFullYear()===2024&&s.getMonth()===0&&s.getDate()===30,getButtonTooltipProps:s=>s.getFullYear()===2024&&s.getMonth()===1&&s.getDate()===9||s.getFullYear()===2024&&s.getMonth()===0&&s.getDate()===30?{title:a==="ru"?"Дата уже забронирована":"The date is already booked"}:i&&i[0]&&!i[1]&&r&&(l!=null&&l.isSameDay(s,r))?{title:a==="ru"?"N суток":"N days"}:{},hover:r,month:e.month,rows:e.rows,selection:i,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onHover:u,onSelectionChange:o})]})}};var E,Y,L;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selection, setSelection] = useState<[Date, Date | null] | null>(null);
    const onSelectionChange = useCallback((date: Date) => {
      setSelection([date, null]);
    }, [selection]);
    return <div style={{
      borderRadius: '8px',
      boxShadow: 'var(--es-shadow-down-600)',
      maxWidth: '400px'
    }}>
        <CalendarHead weekStart={args.weekStart} />
        <Calendar month={args.month} rows={args.rows} selection={selection} showNextMonth={args.showNextMonth} showPrevMonth={args.showPrevMonth} weekStart={args.weekStart} year={args.year} onSelectionChange={onSelectionChange} />
      </div>;
  }
}`,...(L=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var A,G,I,U,$;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      selection,
      hover,
      onSelectionChange,
      onHover,
      onHoverDelete
    } = useRangeDatePicker();
    return <div style={{
      borderRadius: '8px',
      boxShadow: 'var(--es-shadow-down-600)',
      maxWidth: '400px'
    }} onMouseLeave={onHoverDelete}>
        <CalendarHead weekStart={args.weekStart} />
        <Calendar hover={hover} month={args.month} rows={args.rows} selection={selection} showNextMonth={args.showNextMonth} showPrevMonth={args.showPrevMonth} weekStart={args.weekStart} year={args.year} onHover={onHover} onSelectionChange={onSelectionChange} />
      </div>;
  }
}`,...(I=(G=k.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"We can select a range of dates.",...($=(U=k.parameters)==null?void 0:U.docs)==null?void 0:$.description}}};var O,z,J,K,Q;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      selection,
      hover,
      onSelectionChange,
      onHover,
      onHoverDelete
    } = useRangeDatePicker();
    return <div style={{
      borderRadius: '8px',
      boxShadow: 'var(--es-shadow-down-600)',
      maxWidth: '800px',
      display: 'flex'
    }} onMouseLeave={onHoverDelete}>
        <div style={{
        borderRight: '1px solid var(--es-mono-a-a100)',
        flexGrow: 1
      }}>
          <CalendarHead weekStart={args.weekStart} />
          <Calendar showPrevMonth hover={hover} month={1} rows={args.rows} selection={selection} weekStart={args.weekStart} year={2024} onHover={onHover} onSelectionChange={onSelectionChange} />
        </div>
        <div style={{
        flexGrow: 1
      }}>
          <CalendarHead weekStart={args.weekStart} />
          <Calendar showNextMonth hover={hover} month={2} rows={args.rows} selection={selection} weekStart={args.weekStart} year={2024} onHover={onHover} onSelectionChange={onSelectionChange} />
        </div>
      </div>;
  }
}`,...(J=(z=C.parameters)==null?void 0:z.docs)==null?void 0:J.source},description:{story:"We can use multiple calendars side-by-side.",...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Z,ee,te,ae;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const {
      adapter
    } = useDateAdapterContext();
    const {
      selection,
      hover,
      onSelectionChange,
      onHover,
      onHoverDelete
    } = useRangeDatePicker();
    return <div style={{
      borderRadius: '8px',
      boxShadow: 'var(--es-shadow-down-600)',
      maxWidth: '400px'
    }} onMouseLeave={onHoverDelete}>
        <CalendarHead weekStart={args.weekStart} />
        <Calendar getButtonDisabled={date => {
        if (date.getFullYear() === 2024 && date.getMonth() === 1 && date.getDate() === 9 || date.getFullYear() === 2024 && date.getMonth() === 0 && date.getDate() === 30) {
          return true;
        }
        return false;
      }} getButtonTooltipProps={date => {
        if (date.getFullYear() === 2024 && date.getMonth() === 1 && date.getDate() === 9 || date.getFullYear() === 2024 && date.getMonth() === 0 && date.getDate() === 30) {
          return {
            title: locale === 'ru' ? 'Дата уже забронирована' : 'The date is already booked'
          };
        }
        if (selection && selection[0] && !selection[1] && hover && adapter?.isSameDay(date, hover)) {
          return {
            title: locale === 'ru' ? 'N суток' : 'N days'
          };
        }
        return {};
      }} hover={hover} month={args.month} rows={args.rows} selection={selection} showNextMonth={args.showNextMonth} showPrevMonth={args.showPrevMonth} weekStart={args.weekStart} year={args.year} onHover={onHover} onSelectionChange={onSelectionChange} />
      </div>;
  }
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"We can disable certain dates and show tooltips.",...(ae=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const Ue=["Demo","Range","DualRange","DisabledAndTooltips"];export{P as Demo,M as DisabledAndTooltips,C as DualRange,k as Range,Ue as __namedExportsOrder,Ie as default};
