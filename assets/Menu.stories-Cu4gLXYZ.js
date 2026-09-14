import{r as S,j as e}from"./iframe-Bc8-Q25v.js";import{M as D}from"./Menu-CriPHtCP.js";import{B as F}from"./Button-BCRxDX6B.js";import{a as c,L as r}from"./MenuItem-8wSZO-ML.js";import{L as o}from"./ListItemIcon-CUPi4qhb.js";import{I as n}from"./IconUploadFillW500-Vm4yNVwP.js";import{L as i}from"./ListItemText-DDF269fq.js";import{D as I}from"./Divider-COoXnJWy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./Popover-CjDfwJ6v.js";import"./debounce-mYveAr4B.js";import"./useForkRef-rVwNGtGZ.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-Cqh-UVFo.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-CCPOMy0K.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-BIFNHrHU.js";import"./Fade-Cz0N_mL7.js";import"./utils-xjkStw31.js";import"./createTransition-BIZAeqwx.js";import"./Portal-BW-pjcFK.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./FocusTrap-cBv2YN9d.js";import"./Grow-s7Bol92u.js";import"./useTimeout-DowuL8C4.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./ButtonBase-BBaKRXh4.js";import"./SvgIcon-CMA3Mbq7.js";const U=t=>t.globals.locale==="en"?"Open menu":"Открыть меню",u=t=>t.globals.locale==="en"?"Cut":"Вырезать",p=t=>t.globals.locale==="en"?"Copy":"Копировать",L=t=>t.globals.locale==="en"?"Paste":"Вставить",m=t=>t.globals.locale==="en"?"Action":"Действие",j=t=>t.globals.locale==="en"?"Dangerous action":"Опасное действие",Le={title:"Menu",parameters:{references:["Menu","MenuList"]},argTypes:{size:{control:{type:"select"},options:["100","200","300","400"]}},args:{size:"200"}},a={render:function(s,l){const[h,z]=S.useState(null),f=A=>{z(A.currentTarget)},w=()=>{z(null)};return e.jsxs("div",{children:[e.jsx(F,{variant:"contained",onClick:f,children:U(l)}),e.jsxs(D,{anchorEl:h,open:!!h,slotProps:{paper:{style:{margin:"4px 0",minWidth:192}}},onClose:w,children:[e.jsxs(c,{selected:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(l)})]}),e.jsxs(c,{disabled:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(l)})]}),e.jsxs(c,{size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(l)})]}),e.jsx(I,{className:"my-8"}),e.jsx(c,{size:s.size,children:e.jsx(i,{children:m(l)})}),e.jsx(c,{size:s.size,children:e.jsx(i,{inset:!0,children:m(l)})}),e.jsx(c,{error:!0,size:s.size,children:e.jsx(i,{children:j(l)})}),e.jsxs(c,{error:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:j(l)})]})]})]})}},x={render:(t,s)=>e.jsx("div",{style:{maxWidth:"360px",boxShadow:"var(--es-shadow-down-500)",backgroundColor:"var(--es-shadow-surface-400)",borderRadius:"4px"},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:"8px 0"},children:[e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(s)})]}),e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(s)})]}),e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(s)})]}),e.jsx(I,{className:"my-8"}),e.jsx(r,{size:t.size,children:e.jsx(i,{children:m(s)})}),e.jsx(r,{size:t.size,children:e.jsx(i,{inset:!0,children:m(s)})})]})})},d={render:(t,s)=>e.jsx("div",{style:{maxWidth:"360px",boxShadow:"var(--es-shadow-down-500)",backgroundColor:"var(--es-shadow-surface-400)",borderRadius:"4px"},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:"8px 0"},children:[e.jsxs(r,{button:!0,selected:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(s)})]}),e.jsxs(r,{button:!0,disabled:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(s)})]}),e.jsxs(r,{button:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(s)})]}),e.jsx(I,{className:"my-8"}),e.jsx(r,{button:!0,size:t.size,children:e.jsx(i,{children:m(s)})}),e.jsx(r,{button:!0,size:t.size,children:e.jsx(i,{inset:!0,children:m(s)})})]})})};var T,g,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const onClose = () => {
      setAnchorEl(null);
    };
    return <div>
        <Button variant="contained" onClick={onClick}>
          {getButtonText(context)}
        </Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} slotProps={{
        paper: {
          style: {
            margin: '4px 0',
            minWidth: 192
          }
        }
      }} onClose={onClose}>
          <MenuItem selected size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </MenuItem>
          <MenuItem disabled size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </MenuItem>
          <MenuItem size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </MenuItem>
          <Divider className="my-8" />
          <MenuItem size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem error size={args.size}>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
          <MenuItem error size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getErrorActionText(context)}</ListItemText>
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,v,M;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, context) => {
    return <div style={{
      maxWidth: '360px',
      boxShadow: 'var(--es-shadow-down-500)',
      backgroundColor: 'var(--es-shadow-surface-400)',
      borderRadius: '4px'
    }}>
        <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: '8px 0'
      }}>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider className="my-8" />
          <ListItem size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItem>
          <ListItem size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </ul>
      </div>;
  }
}`,...(M=(v=x.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var C,E,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    return <div style={{
      maxWidth: '360px',
      boxShadow: 'var(--es-shadow-down-500)',
      backgroundColor: 'var(--es-shadow-surface-400)',
      borderRadius: '4px'
    }}>
        <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: '8px 0'
      }}>
          <ListItem button selected size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCutText(context)}</ListItemText>
          </ListItem>
          <ListItem button disabled size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getCopyText(context)}</ListItemText>
          </ListItem>
          <ListItem button size={args.size}>
            <ListItemIcon>
              <IconUploadFillW500 />
            </ListItemIcon>
            <ListItemText>{getPasteText(context)}</ListItemText>
          </ListItem>
          <Divider className="my-8" />
          <ListItem button size={args.size}>
            <ListItemText>{getActionText(context)}</ListItemText>
          </ListItem>
          <ListItem button size={args.size}>
            <ListItemText inset>{getActionText(context)}</ListItemText>
          </ListItem>
        </ul>
      </div>;
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const he=["Demo","DemoList","DemoListButton"];export{a as Demo,x as DemoList,d as DemoListButton,he as __namedExportsOrder,Le as default};
