import{j as a}from"./jsx-runtime-BTJTZTIL.js";import{r as g}from"./index-Wm5baAvf.js";import{c as N}from"./clsx.m-C7bORDfW.js";import{u as q}from"./DefaultPropsProvider-BaGbio7E.js";import{u as ne}from"./DateAdapter.context-DN26yuu8.js";import{T as de}from"./Tooltip-Bp1S5HE5.js";import{B as ue}from"./ButtonBase-BhCJPokL.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./useForkRef-CGhsnMYO.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./SvgIcon-Bb8ef9Tm.js";const H=n=>{var b,D,v;const{children:e,className:l,style:r,disabled:o,inactive:i,selected:s,hovered:t,today:p,position:m,onClick:u,onHover:x,TooltipProps:d}=q({props:n,name:"ESCalendarButton"});return a.jsx("div",{className:N("es-calendar-button",s&&"es-calendar-button--selected",t&&"es-calendar-button--hovered",m&&`es-calendar-button--position--${m}`,l),style:r,onClick:u,onFocus:x,onMouseEnter:x,children:a.jsx("div",{className:"es-calendar-button__wrapper",children:a.jsx(de,{disableInteractive:!0,...d,TransitionProps:{timeout:0,...d==null?void 0:d.TransitionProps},slotProps:{...d==null?void 0:d.slotProps,popper:{...(b=d==null?void 0:d.slotProps)==null?void 0:b.popper,className:N("es-calendar-button__tooltip",(v=(D=d==null?void 0:d.slotProps)==null?void 0:D.popper)==null?void 0:v.className)}},title:(d==null?void 0:d.title)||"",children:a.jsx("div",{style:{width:"100%"},children:a.jsx(ue,{className:N("es-calendar-button__button",i&&"es-calendar-button__button--inactive",s&&m!=="between"&&"es-calendar-button__button--selected",p&&"es-calendar-button__button--today"),disabled:o,children:e})})})})})};try{H.displayName="CalendarButton",H.__docgenInfo={description:"",displayName:"CalendarButton",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"Whether the date is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},inactive:{defaultValue:null,description:"Whether the date is inactive.",name:"inactive",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Whether the date is selected.",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Whether the date is hovered.",name:"hovered",required:!1,type:{name:"boolean"}},today:{defaultValue:null,description:"Whether the date is today.",name:"today",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"The position of selected button in the selection range.",name:"position",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'},{value:'"between"'}]}},onClick:{defaultValue:null,description:"Callback fired when the date button is clicked.",name:"onClick",required:!1,type:{name:"(() => void)"}},onHover:{defaultValue:null,description:"Callback fired when the date button is hovered or focused.",name:"onHover",required:!1,type:{name:"(() => void)"}},TooltipProps:{defaultValue:null,description:"Props applied to the tooltip component.",name:"TooltipProps",required:!1,type:{name:"Partial<TooltipProps>"}}}}}catch{}const ce=(n,e,l)=>g.useMemo(()=>{const o=[],i=[],s=[],t=new Date(n,e,1),p=t.getDay()-l;for(t.setDate(1-(p>=0?p:7+p));t.getDate()!==1;)i.push(t.getDate()),t.setDate(t.getDate()+1);let m=1;for(;t.getMonth()===e;)o.push(m++),t.setDate(m);for(m=1;t.getDay()!==l;)s.push(m++),t.setDate(m);return{dates:o,prevDates:i,nextDates:s}},[n,e,l]),y=n=>{const{className:e,style:l,year:r,month:o,weekStart:i=1,rows:s="max",selection:t,hover:p,showPrevMonth:m,showNextMonth:u,onSelectionChange:x,onHover:d,getButtonDisabled:b,getButtonTooltipProps:D}=q({props:n,name:"ESCalendar"}),{adapter:v}=ne();if(v===void 0)throw new Error("No provider for DateAdapterContext.");const{dates:oe,prevDates:re,nextDates:se}=ce(r,o,i),j=(c,le,ie)=>{const w=new Date(c,le,ie);let _,W=!1,T=!1;if(t&&t[0]){const B=new Date(t[0]),F=t[1]?new Date(t[1]):null;let f=[B,F],h=[B,F||p];f[0]&&f[1]&&f[0]>f[1]&&(f=f.reverse()),h[0]&&h[1]&&h[0]>h[1]&&(h=h.reverse()),h[1]&&v.isWithinRange(w,h)&&(_="between"),v.isSameDay(h[0],w)&&(_="start"),h[1]&&v.isSameDay(h[1],w)&&(_="end"),(v.isSameDay(f[0],w)||f[0]&&f[1]&&v.isWithinRange(w,f))&&(W=!0),p&&h[1]&&!v.isSameDay(h[0],h[1])&&(T=v.isWithinRange(w,h))}const R=b==null?void 0:b(w);return{position:_,disabled:R,selected:W,hovered:T,today:v.isSameDay(new Date,w),onClick:()=>!R&&(x==null?void 0:x(w)),onHover:()=>!R&&(d==null?void 0:d(w)),TooltipProps:D==null?void 0:D(w)}};return a.jsxs("div",{className:N("es-calendar",`es-calendar--rows--${s}`,e),style:l,children:[re.map(c=>m?a.jsx(H,{inactive:!0,...j(r,o-1,c),children:c},c):a.jsx("span",{},c)),oe.map(c=>a.jsx(H,{...j(r,o,c),children:c},c)),se.map(c=>u?a.jsx(H,{inactive:!0,...j(r,o+1,c),children:c},c):a.jsx("span",{},c))]})};try{y.displayName="Calendar",y.__docgenInfo={description:"The calendar allows users to pick a date or a range of dates.",displayName:"Calendar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},year:{defaultValue:null,description:"The year to display.",name:"year",required:!0,type:{name:"number"}},month:{defaultValue:null,description:"The month to display.",name:"month",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"10"},{value:"4"},{value:"3"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"11"}]}},weekStart:{defaultValue:null,description:"The day the week starts with.",name:"weekStart",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"4"},{value:"3"},{value:"5"},{value:"6"}]}},rows:{defaultValue:{value:"'max'"},description:"Count of calendar rows to display.",name:"rows",required:!1,type:{name:"enum",value:[{value:'"max"'},{value:'"auto"'}]}},selection:{defaultValue:null,description:"The current selected date range.",name:"selection",required:!1,type:{name:"[string | number | Date, string | number | Date | null] | null"}},onSelectionChange:{defaultValue:null,description:"Callback fired when the date is selected.",name:"onSelectionChange",required:!1,type:{name:"((value: Date) => void)"}},hover:{defaultValue:null,description:"The current hovered date.",name:"hover",required:!1,type:{name:"Date | null"}},onHover:{defaultValue:null,description:"Callback fired when the date button is hovered or focused.",name:"onHover",required:!1,type:{name:"((date: Date | null) => void)"}},showPrevMonth:{defaultValue:null,description:"Whether to display dates of the previous month at the start the current month.",name:"showPrevMonth",required:!1,type:{name:"boolean"}},showNextMonth:{defaultValue:null,description:"Whether to display dates of the next month at the end of the current month.",name:"showNextMonth",required:!1,type:{name:"boolean"}},getButtonDisabled:{defaultValue:null,description:"Used to determine the disabled state for a given date.",name:"getButtonDisabled",required:!1,type:{name:"((date: Date) => boolean)"}},getButtonTooltipProps:{defaultValue:null,description:"Used to determine the props applied to the tooltip element of a given date .",name:"getButtonTooltipProps",required:!1,type:{name:"((date: Date) => Partial<TooltipProps>)"}}}}}catch{}const S=n=>{const{className:e,style:l,weekStart:r=1,getWeekDays:o}=q({props:n,name:"ESCalendarHead"}),i=g.useMemo(()=>{const s=o();for(let t=0;t<r;t++)s.push(s.shift()||"");return s},[r,o]);return a.jsx("div",{className:N("es-calendar-head",e),style:l,children:i.map((s,t)=>a.jsx("div",{className:"es-calendar-head__day caption",children:s},t))})};try{S.displayName="CalendarHead",S.__docgenInfo={description:"The days list for the calendar.",displayName:"CalendarHead",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},weekStart:{defaultValue:null,description:"The day the week starts with.",name:"weekStart",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"4"},{value:"3"},{value:"5"},{value:"6"}]}},getWeekDays:{defaultValue:null,description:"The labels for the days of week.",name:"getWeekDays",required:!1,type:{name:"(() => ReactNode[])"}}}}}catch{}const V=()=>{const[n,e]=g.useState(null),[l,r]=g.useState(null),o=g.useCallback(t=>{if(!n||!n[0]||n[1])e([t,null]);else{const p=new Date(n[0]);r(null),p<t?e([p,t]):e([t,p])}},[n]);return{selection:n,hover:l,onSelectionChange:o,onHover:t=>{n&&n[0]&&!n[1]&&r(t)},onHoverDelete:()=>{r(null)}}},Ie={tags:["autodocs"],component:y,parameters:{references:["Calendar","CalendarButton","CalendarHead"]},argTypes:{selection:{table:{disable:!0}},hover:{table:{disable:!0}},getButtonDisabled:{table:{disable:!0}},getButtonTooltipProps:{table:{disable:!0}}},args:{year:2024,month:1,weekStart:1}},P={render:function(e){const[l,r]=g.useState(null),o=g.useCallback(i=>{r([i,null])},[l]);return a.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},children:[a.jsx(S,{weekStart:e.weekStart}),a.jsx(y,{month:e.month,rows:e.rows,selection:l,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onSelectionChange:o})]})}},k={render:function(e){const{selection:l,hover:r,onSelectionChange:o,onHover:i,onHoverDelete:s}=V();return a.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},onMouseLeave:s,children:[a.jsx(S,{weekStart:e.weekStart}),a.jsx(y,{hover:r,month:e.month,rows:e.rows,selection:l,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onHover:i,onSelectionChange:o})]})}},C={render:function(e){const{selection:l,hover:r,onSelectionChange:o,onHover:i,onHoverDelete:s}=V();return a.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"800px",display:"flex"},onMouseLeave:s,children:[a.jsxs("div",{style:{borderRight:"1px solid var(--es-mono-a-a100)",flexGrow:1},children:[a.jsx(S,{weekStart:e.weekStart}),a.jsx(y,{showPrevMonth:!0,hover:r,month:1,rows:e.rows,selection:l,weekStart:e.weekStart,year:2024,onHover:i,onSelectionChange:o})]}),a.jsxs("div",{style:{flexGrow:1},children:[a.jsx(S,{weekStart:e.weekStart}),a.jsx(y,{showNextMonth:!0,hover:r,month:2,rows:e.rows,selection:l,weekStart:e.weekStart,year:2024,onHover:i,onSelectionChange:o})]})]})}},M={render:function(e,l){const r=l.globals.locale||"en",{adapter:o}=ne(),{selection:i,hover:s,onSelectionChange:t,onHover:p,onHoverDelete:m}=V();return a.jsxs("div",{style:{borderRadius:"8px",boxShadow:"var(--es-shadow-down-600)",maxWidth:"400px"},onMouseLeave:m,children:[a.jsx(S,{weekStart:e.weekStart}),a.jsx(y,{getButtonDisabled:u=>u.getFullYear()===2024&&u.getMonth()===1&&u.getDate()===9||u.getFullYear()===2024&&u.getMonth()===0&&u.getDate()===30,getButtonTooltipProps:u=>u.getFullYear()===2024&&u.getMonth()===1&&u.getDate()===9||u.getFullYear()===2024&&u.getMonth()===0&&u.getDate()===30?{title:r==="ru"?"Дата уже забронирована":"The date is already booked"}:i&&i[0]&&!i[1]&&s&&(o!=null&&o.isSameDay(u,s))?{title:r==="ru"?"N суток":"N days"}:{},hover:s,month:e.month,rows:e.rows,selection:i,showNextMonth:e.showNextMonth,showPrevMonth:e.showPrevMonth,weekStart:e.weekStart,year:e.year,onHover:p,onSelectionChange:t})]})}};var E,Y,L;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
