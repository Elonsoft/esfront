import{r as x,j as e}from"./iframe-Bc8-Q25v.js";import{S as t}from"./Slider-7oVEaaSB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useControlled-BKv9s01-.js";import"./useForkRef-rVwNGtGZ.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./useEvent-CCPOMy0K.js";import"./ownerDocument-By9UUC6B.js";import"./extractEventHandlers-DC_lrI0t.js";import"./useDefaultProps-lGeK2dpt.js";const m=[{value:0},{value:10},{value:20},{value:30},{value:40},{value:50}],g=[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}],R={tags:["autodocs"],component:t,parameters:{references:["Slider"]},argTypes:{color:{control:{type:"select"},options:["primary","secondary"]},size:{control:{type:"select"},options:["small","medium"]},track:{control:{type:"select"},options:["normal","inverted",!1]},valueLabelDisplay:{control:{type:"select"},options:["off","auto","on"]},height:{control:{type:"range",min:2,max:8,step:1}}},args:{color:"secondary",size:"medium",track:"normal",valueLabelDisplay:"auto",disabled:!1,height:4}},l={render:function({height:s,...n}){const[o,d]=x.useState([20,60]),i=(h,y)=>{d(y)},a={height:`${s}px`},r={height:"100%",width:`${s}px`};return e.jsxs("div",{style:{display:"grid",gap:"24px",gridAutoFlow:"row",maxWidth:"400px",paddingTop:"16px"},children:[e.jsx(t,{max:100,min:0,style:a,...n}),e.jsx(t,{marks:m,max:50,min:0,step:null,style:a,...n}),e.jsx(t,{max:100,min:0,style:a,value:o,onChange:i,...n}),e.jsx(t,{marks:g,max:100,min:0,step:25,style:a,...n}),e.jsxs("div",{style:{display:"grid",gap:"24px",gridAutoFlow:"column",height:"150px",justifyContent:"start"},children:[e.jsx(t,{max:100,min:0,orientation:"vertical",style:r,...n}),e.jsx(t,{marks:m,max:50,min:0,orientation:"vertical",step:null,style:r,...n}),e.jsx(t,{max:100,min:0,orientation:"vertical",style:r,value:o,onChange:i,...n})]})]})}};var p,u,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render({
    height,
    ...args
  }) {
    const [value, setValue] = useState<number[]>([20, 60]);
    const onChange = (_event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
    const styleHorizontal = {
      height: \`\${height}px\`
    };
    const styleVertical = {
      height: '100%',
      width: \`\${height}px\`
    };
    return <div style={{
      display: 'grid',
      gap: '24px',
      gridAutoFlow: 'row',
      maxWidth: '400px',
      paddingTop: '16px'
    }}>
        <Slider max={100} min={0} style={styleHorizontal} {...args} />
        <Slider marks={MARKS} max={50} min={0} step={null} style={styleHorizontal} {...args} />
        <Slider max={100} min={0} style={styleHorizontal} value={value} onChange={onChange} {...args} />
        <Slider marks={MARKS_LABELED} max={100} min={0} step={25} style={styleHorizontal} {...args} />
        <div style={{
        display: 'grid',
        gap: '24px',
        gridAutoFlow: 'column',
        height: '150px',
        justifyContent: 'start'
      }}>
          <Slider max={100} min={0} orientation="vertical" style={styleVertical} {...args} />
          <Slider marks={MARKS} max={50} min={0} orientation="vertical" step={null} style={styleVertical} {...args} />
          <Slider max={100} min={0} orientation="vertical" style={styleVertical} value={value} onChange={onChange} {...args} />
        </div>
      </div>;
  }
}`,...(c=(u=l.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["Demo"];export{l as Demo,D as __namedExportsOrder,R as default};
