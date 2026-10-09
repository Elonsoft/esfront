import{r as S,j as e}from"./iframe-WZaTcFld.js";import{M as D}from"./Menu-2XP5SIII.js";import{B as F}from"./Button-DX7vCFDA.js";import{a as m,L as r}from"./MenuItem-D8cap5ou.js";import{L as o}from"./ListItemIcon-ClULJfKh.js";import{I as n}from"./IconUploadFillW500-D0xFkxQs.js";import{L as i}from"./ListItemText-DnLpL29d.js";import{D as I}from"./Divider-exvApZI5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./Popover-C3kEi3Bv.js";import"./debounce-mYveAr4B.js";import"./useForkRef-B9g_LZ2g.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./useEvent-PLZAS_3a.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./Portal-BYj3FDWN.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-1Ul32FaH.js";import"./Grow-D1yaFj-8.js";import"./useTimeout-BCL6eOzm.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./ButtonBase-A8DfStIe.js";import"./SvgIcon-CImGifIE.js";const U=t=>t.globals.locale==="en"?"Open menu":"Открыть меню",u=t=>t.globals.locale==="en"?"Cut":"Вырезать",p=t=>t.globals.locale==="en"?"Copy":"Копировать",L=t=>t.globals.locale==="en"?"Paste":"Вставить",c=t=>t.globals.locale==="en"?"Action":"Действие",j=t=>t.globals.locale==="en"?"Dangerous action":"Опасное действие",ze={title:"Menu",parameters:{references:["Menu","MenuList"]},argTypes:{size:{control:{type:"select"},options:["100","200","300","400"]}},args:{size:"200"}},a={render:function(s,l){const[h,z]=S.useState(null),f=A=>{z(A.currentTarget)},w=()=>{z(null)};return e.jsxs("div",{children:[e.jsx(F,{variant:"contained",onClick:f,children:U(l)}),e.jsxs(D,{anchorEl:h,open:!!h,slotProps:{paper:{style:{margin:"4px 0",minWidth:192}}},onClose:w,children:[e.jsxs(m,{selected:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(l)})]}),e.jsxs(m,{disabled:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(l)})]}),e.jsxs(m,{size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(l)})]}),e.jsx(I,{className:"my-8"}),e.jsx(m,{size:s.size,children:e.jsx(i,{children:c(l)})}),e.jsx(m,{size:s.size,children:e.jsx(i,{inset:!0,children:c(l)})}),e.jsx(m,{error:!0,size:s.size,children:e.jsx(i,{children:j(l)})}),e.jsxs(m,{error:!0,size:s.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:j(l)})]})]})]})}},x={render:(t,s)=>e.jsx("div",{style:{maxWidth:"360px",boxShadow:"var(--es-shadow-down-500)",backgroundColor:"var(--es-shadow-surface-400)",borderRadius:"4px"},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:"8px 0"},children:[e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(s)})]}),e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(s)})]}),e.jsxs(r,{size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(s)})]}),e.jsx(I,{className:"my-8"}),e.jsx(r,{size:t.size,children:e.jsx(i,{children:c(s)})}),e.jsx(r,{size:t.size,children:e.jsx(i,{inset:!0,children:c(s)})})]})})},d={render:(t,s)=>e.jsx("div",{style:{maxWidth:"360px",boxShadow:"var(--es-shadow-down-500)",backgroundColor:"var(--es-shadow-surface-400)",borderRadius:"4px"},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:"8px 0"},children:[e.jsxs(r,{button:!0,selected:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:u(s)})]}),e.jsxs(r,{button:!0,disabled:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:p(s)})]}),e.jsxs(r,{button:!0,size:t.size,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(i,{children:L(s)})]}),e.jsx(I,{className:"my-8"}),e.jsx(r,{button:!0,size:t.size,children:e.jsx(i,{children:c(s)})}),e.jsx(r,{button:!0,size:t.size,children:e.jsx(i,{inset:!0,children:c(s)})})]})})};var T,g,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const je=["Demo","DemoList","DemoListButton"];export{a as Demo,x as DemoList,d as DemoListButton,je as __namedExportsOrder,ze as default};
