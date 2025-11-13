import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as l}from"./index-DIDRz_s2.js";import{S as q,a as j,b as s,c as t,d as c,e as k,f as A}from"./SidebarToggle-DucxQgsH.js";import{B as y}from"./Box-wRm4ebgR.js";import{L as C}from"./MenuItem-CTB1bkQ4.js";import{I as o}from"./IconAt-s57xNtQj.js";import{I as M,a as D}from"./IconMagnify-fJFbwLaA.js";import{I as L}from"./IconAccountLc-DgJqwTYD.js";import{L as E}from"./ListItemIcon-76jTCTlw.js";import{L as N}from"./ListItemText-CHPZBcWU.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-QckRPC_l.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useLatest-sVqXUmVb.js";import"./useDocumentEventListener-DcHHZa3z.js";import"./useWindowEventListener-DbdMtNlQ.js";import"./IconChevronLeftW300-D4Sa8MLb.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./index-_5f_3xJX.js";import"./useTheme-Dg4q0o-B.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useResizeObserver-BNbozrrH.js";import"./memoTheme-DzcScnLI.js";import"./useTheme-ErypeN0Y.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./useTimeout-BgqVTnbA.js";import"./useForkRef-Cmn-Dh7x.js";import"./Typography-dCWir4IF.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Tooltip-Cf2Aozb7.js";import"./Fade-DWBj0t68.js";import"./useControlled-BX5XFdR0.js";import"./useId-DHFVogFr.js";import"./useEvent-B4f6aq-e.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popper-5tNl5wyi.js";import"./index-CycuZXML.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Cdjvc33M.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./Button-CjV5PmVb.js";import"./ButtonBase-BtCzZW19.js";import"./MenuList-hBx3FRLR.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./Divider-BxrR7wQ_.js";const Pe={tags:["autodocs"],component:q,parameters:{references:["Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{color:{control:{type:"select"},options:["default","primary","secondary"]},behaviour:{control:{type:"select"},options:["click","hover"]},exclusive:{control:{type:"boolean"}},open:{table:{disable:!0}},width:{table:{disable:!0}}},args:{color:"default",behaviour:"click",exclusive:!1,minWidth:220,maxWidth:400}},u={render:function({color:r,behaviour:x,exclusive:v,minWidth:f,maxWidth:h},{globals:{locale:i}}){const[n,g]=l.useState(!1),[S,I]=l.useState(280);return e.jsxs(y,{sx:{height:"100vh",m:"-16px",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(q,{color:r,maxWidth:h,minWidth:f,open:n,sx:{position:"sticky",top:"0"},width:S,onWidthChangeCommit:m=>I(m),children:[e.jsxs(C,{component:"div",sx:{padding:"16px 16px 15px",overflow:"hidden",flexShrink:"0",height:"auto !important"},children:[e.jsx(E,{children:e.jsx(o,{sx:{color:r==="primary"?"monoB.A800":"monoA.A500"}})}),e.jsx(N,{primary:"CRM",primaryTypographyProps:{variant:"h6",color:r==="primary"?"monoB.A800":"monoA.A900"},sx:{my:"0",display:`${n?"block":"none"}`}})]}),e.jsx(j,{open:n,onClick:()=>g(!n)}),e.jsx(s,{children:e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Time tracking":"Рабочее время",onClick:()=>console.info("Time tracking")})}),e.jsx(c,{}),e.jsx(k,{afterScroll:e.jsx(c,{}),children:e.jsxs(s,{behaviour:x,exclusive:v,children:[e.jsx(t,{selected:!0,component:"button",icon:e.jsx(o,{}),id:"0",text:i==="en"?"Projects":"Проекты",onClick:()=>console.info("Projects"),children:[...Array(5)].map((m,a)=>e.jsx(t,{inset:!0,selected:a===2,text:(i==="en"?"Project":"Проект")+" №"+a,onClick:()=>console.info(`Project ${a}`)},a))}),e.jsx(t,{icon:e.jsx(o,{}),id:"1",text:i==="en"?"Files":"Файлы",children:[...Array(8)].map((m,a)=>e.jsx(t,{inset:!0,text:(i==="en"?"File":"Файл")+" №"+a,onClick:()=>console.info(`File ${a}`)},a))}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Infographic":"Инфографика",onClick:()=>console.info("Infographic")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Schedule":"Расписание",onClick:()=>console.info("Schedule")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Messages":"Сообщения",onClick:()=>console.info("Messages")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Inbox":"Входящие",onClick:()=>console.info("Inbox")})]})}),e.jsx(A,{}),e.jsxs(s,{children:[e.jsx(t,{icon:e.jsx(M,{}),text:i==="en"?"Search":"Поиск",onClick:()=>console.info("Search")}),e.jsx(t,{icon:e.jsx(D,{}),text:i==="en"?"Notifications":"Уведомления",onClick:()=>console.info("Notifications")})]}),e.jsx(c,{}),e.jsx(s,{children:e.jsx(t,{icon:e.jsx(L,{container:!0,containerSize:"24px"}),text:i==="en"?"Name":"Имя"})})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil quibusdam natus dolore suscipit deleniti? Alias quod veritatis odit ipsa nam ipsum atque placeat voluptates, molestias ipsam, necessitatibus facilis provident consequuntur beatae! Aut incidunt non debitis, nesciunt necessitatibus ex praesentium error tenetur veniam velit fugiat ullam quas similique impedit eveniet. Consectetur sint sunt cumque molestiae quos rem autem fugiat. Perferendis eveniet facilis porro necessitatibus at. Voluptate maxime omnis dolore ipsum rerum? Dolorum voluptatibus atque perspiciatis incidunt non, iusto, officiis consequuntur harum aperiam doloribus, veritatis quo dignissimos ratione ex magni quaerat!"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa sint, eos quidem, pariatur obcaecati culpa voluptas ducimus ad velit deleniti, nostrum facere voluptatum id odit facilis? Nostrum minima vitae accusantium reprehenderit, tempora quo saepe eligendi assumenda tenetur vero quasi alias esse sunt quod veniam consectetur nemo beatae accusamus delectus odit impedit exercitationem laudantium ipsum. Repellat vitae nisi voluptatibus ea in rerum eaque perferendis doloribus, dolores corrupti ipsam illum recusandae maxime nihil sit sed delectus commodi obcaecati consequuntur non enim doloremque error tempore. Ea sequi, ipsa, hic temporibus eveniet ipsam eius libero accusamus quaerat harum, iste recusandae! Maiores assumenda illum labore? Nihil ipsam dolores error, cum sunt, harum architecto hic ex quibusdam nobis cumque laboriosam rerum tempore quo, ut magni aspernatur! Quo nihil exercitationem consequatur eius distinctio assumenda, repellat hic. Vel, velit eius facere repudiandae dicta earum doloribus, et aliquam, perspiciatis vitae obcaecati. At, autem placeat maiores molestias neque voluptatum!"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ut incidunt alias quae laudantium magni atque vitae suscipit eveniet sequi possimus aspernatur nisi repellendus earum doloremque, neque facilis voluptate omnis quo veniam asperiores. Rem et quo voluptas aliquid voluptatibus, in quis velit, officiis natus iure sint voluptates doloribus quibusdam facilis facere dignissimos, reiciendis debitis omnis accusantium! Rerum eligendi iusto natus, porro omnis, accusantium enim cumque, inventore possimus nulla fugiat magni iste! Quod excepturi ratione obcaecati qui veniam quam eum, delectus accusantium beatae a exercitationem fuga nesciunt reiciendis, ad mollitia temporibus velit. Ex distinctio amet dolorum iste libero quis magnam nisi expedita, cumque architecto repudiandae modi consequuntur officiis? Consectetur, aut, est possimus labore earum maiores placeat totam voluptate ipsa amet odit esse facilis modi error reprehenderit, eligendi minus! Dicta consequuntur ut architecto quas rem dolore totam voluptates illum quibusdam impedit, distinctio in perferendis aperiam, tenetur cum voluptatibus eum nam? Iusto, in. Dicta tenetur provident atque, iste earum praesentium ex aliquam incidunt adipisci consequatur, explicabo amet totam. Eos quod praesentium, at dicta ducimus tempora fugit reiciendis illum eaque molestiae. Eaque temporibus optio corrupti deleniti delectus maiores inventore officia, officiis itaque aut nobis, recusandae pariatur possimus laboriosam tempore amet dolor, sunt at architecto in ipsa quam quis? Quidem saepe culpa fuga quam excepturi obcaecati, iste repellat accusamus magni iusto? Voluptatum fugit nihil enim. Nemo debitis soluta reprehenderit perspiciatis et ratione, similique placeat animi blanditiis totam magnam recusandae accusantium. Debitis eum ut animi consequatur fuga? Sint qui fugiat odit quam iusto. Molestias obcaecati minima provident aspernatur vel aut, minus quas repellat iusto? Ipsam exercitationem reprehenderit quasi distinctio sunt dolorem aliquam commodi provident perspiciatis! Tempora velit nisi rem nesciunt eius deserunt quasi modi, unde corporis neque voluptate ea excepturi repellendus cum vel veniam voluptatem debitis recusandae vitae amet? Eligendi nesciunt laborum vero mollitia laboriosam, voluptatum debitis obcaecati error fugit temporibus, soluta repellat nisi aspernatur, voluptatem facere! Rem officiis deserunt blanditiis nisi veniam atque pariatur, minima architecto odit, laudantium quis eligendi consequuntur, harum cum? Facere ipsam nostrum nihil consequuntur cum odit laborum unde, accusamus ea! Deserunt, minus distinctio excepturi labore eveniet odit assumenda quam eius quo nemo a numquam cupiditate voluptate ipsa maiores. Dolore officiis enim odit commodi corporis sed libero, molestiae tenetur expedita quod numquam! Minus eaque id harum excepturi reprehenderit quidem sunt, totam beatae aperiam illum sequi, quaerat officia velit rem in. Quisquam temporibus aliquid minima dolore nobis et architecto, explicabo doloremque eius numquam veniam consectetur, voluptates, impedit esse aliquam sunt vitae fugit tempora earum. Eligendi, inventore dicta sed quaerat voluptates optio, asperiores a consequatur deserunt hic laudantium rem numquam fuga porro doloremque officia voluptas nulla? Nulla, iusto! Odit expedita dolores eius aliquam delectus amet doloribus tenetur ad totam magnam ratione nam, sapiente commodi aperiam ea reiciendis perspiciatis possimus harum repellendus ex repudiandae officia qui iusto natus? Ex id tempora dolore repellendus, dignissimos odit modi fugit voluptates reprehenderit sed dolor ullam vero voluptatibus at. Odio nisi maiores sint iusto adipisci, vel, nam dolor minus eius, eveniet aut deserunt maxime distinctio facilis. Excepturi, quia dolorem."})]})]})}};var d,p,b;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render({
    color,
    behaviour,
    exclusive,
    minWidth,
    maxWidth
  }, {
    globals: {
      locale
    }
  }) {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(280);
    return <Box sx={{
      height: '100vh',
      m: '-16px',
      display: 'flex',
      gap: '20px',
      overflow: 'auto'
    }}>
        <Sidebar color={color} maxWidth={maxWidth} minWidth={minWidth} open={isOpen} sx={{
        position: 'sticky',
        top: '0'
      }} width={width} onWidthChangeCommit={(value: number) => setWidth(value)}>
          <ListItem component="div" sx={{
          padding: '16px 16px 15px',
          overflow: 'hidden',
          flexShrink: '0',
          height: 'auto !important'
        }}>
            <ListItemIcon>
              <IconAt sx={{
              color: color === 'primary' ? 'monoB.A800' : 'monoA.A500'
            }} />
            </ListItemIcon>
            <ListItemText primary="CRM" primaryTypographyProps={{
            variant: 'h6',
            color: color === 'primary' ? 'monoB.A800' : 'monoA.A900'
          }} sx={{
            my: '0',
            display: \`\${isOpen ? 'block' : 'none'}\`
          }} />
          </ListItem>

          <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <SidebarMenu>
            <SidebarItem icon={<IconAt />} text={locale === 'en' ? 'Time tracking' : 'Рабочее время'} onClick={() => console.info(\`Time tracking\`)} />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarScrollable afterScroll={<SidebarDivider />}>
            <SidebarMenu behaviour={behaviour} exclusive={exclusive}>
              <SidebarItem selected component="button" icon={<IconAt />} id="0" text={locale === 'en' ? 'Projects' : 'Проекты'} onClick={() => console.info(\`Projects\`)}>
                {[...Array(5)].map((_, i) => <SidebarItem key={i} inset selected={i === 2} text={(locale === 'en' ? 'Project' : 'Проект') + ' №' + i} onClick={() => console.info(\`Project \${i}\`)} />)}
              </SidebarItem>
              <SidebarItem icon={<IconAt />} id="1" text={locale === 'en' ? 'Files' : 'Файлы'}>
                {[...Array(8)].map((_, i) => <SidebarItem key={i} inset text={(locale === 'en' ? 'File' : 'Файл') + ' №' + i} onClick={() => console.info(\`File \${i}\`)} />)}
              </SidebarItem>
              <SidebarItem icon={<IconAt />} text={locale === 'en' ? 'Infographic' : 'Инфографика'} onClick={() => console.info(\`Infographic\`)} />
              <SidebarItem icon={<IconAt />} text={locale === 'en' ? 'Schedule' : 'Расписание'} onClick={() => console.info(\`Schedule\`)} />
              <SidebarItem icon={<IconAt />} text={locale === 'en' ? 'Messages' : 'Сообщения'} onClick={() => console.info(\`Messages\`)} />
              <SidebarItem icon={<IconAt />} text={locale === 'en' ? 'Inbox' : 'Входящие'} onClick={() => console.info(\`Inbox\`)} />
            </SidebarMenu>
          </SidebarScrollable>
          <SidebarSpacer />

          <SidebarMenu>
            <SidebarItem icon={<IconMagnify />} text={locale === 'en' ? 'Search' : 'Поиск'} onClick={() => console.info(\`Search\`)} />
            <SidebarItem icon={<IconBellFill />} text={locale === 'en' ? 'Notifications' : 'Уведомления'} onClick={() => console.info(\`Notifications\`)} />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarMenu>
            <SidebarItem icon={<IconAccountLc container containerSize="24px" />} text={locale === 'en' ? 'Name' : 'Имя'} />
          </SidebarMenu>
        </Sidebar>

        <div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil quibusdam natus dolore suscipit
            deleniti? Alias quod veritatis odit ipsa nam ipsum atque placeat voluptates, molestias ipsam, necessitatibus
            facilis provident consequuntur beatae! Aut incidunt non debitis, nesciunt necessitatibus ex praesentium
            error tenetur veniam velit fugiat ullam quas similique impedit eveniet. Consectetur sint sunt cumque
            molestiae quos rem autem fugiat. Perferendis eveniet facilis porro necessitatibus at. Voluptate maxime omnis
            dolore ipsum rerum? Dolorum voluptatibus atque perspiciatis incidunt non, iusto, officiis consequuntur harum
            aperiam doloribus, veritatis quo dignissimos ratione ex magni quaerat!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa sint, eos quidem, pariatur
            obcaecati culpa voluptas ducimus ad velit deleniti, nostrum facere voluptatum id odit facilis? Nostrum
            minima vitae accusantium reprehenderit, tempora quo saepe eligendi assumenda tenetur vero quasi alias esse
            sunt quod veniam consectetur nemo beatae accusamus delectus odit impedit exercitationem laudantium ipsum.
            Repellat vitae nisi voluptatibus ea in rerum eaque perferendis doloribus, dolores corrupti ipsam illum
            recusandae maxime nihil sit sed delectus commodi obcaecati consequuntur non enim doloremque error tempore.
            Ea sequi, ipsa, hic temporibus eveniet ipsam eius libero accusamus quaerat harum, iste recusandae! Maiores
            assumenda illum labore? Nihil ipsam dolores error, cum sunt, harum architecto hic ex quibusdam nobis cumque
            laboriosam rerum tempore quo, ut magni aspernatur! Quo nihil exercitationem consequatur eius distinctio
            assumenda, repellat hic. Vel, velit eius facere repudiandae dicta earum doloribus, et aliquam, perspiciatis
            vitae obcaecati. At, autem placeat maiores molestias neque voluptatum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ut incidunt alias quae laudantium magni
            atque vitae suscipit eveniet sequi possimus aspernatur nisi repellendus earum doloremque, neque facilis
            voluptate omnis quo veniam asperiores. Rem et quo voluptas aliquid voluptatibus, in quis velit, officiis
            natus iure sint voluptates doloribus quibusdam facilis facere dignissimos, reiciendis debitis omnis
            accusantium! Rerum eligendi iusto natus, porro omnis, accusantium enim cumque, inventore possimus nulla
            fugiat magni iste! Quod excepturi ratione obcaecati qui veniam quam eum, delectus accusantium beatae a
            exercitationem fuga nesciunt reiciendis, ad mollitia temporibus velit. Ex distinctio amet dolorum iste
            libero quis magnam nisi expedita, cumque architecto repudiandae modi consequuntur officiis? Consectetur,
            aut, est possimus labore earum maiores placeat totam voluptate ipsa amet odit esse facilis modi error
            reprehenderit, eligendi minus! Dicta consequuntur ut architecto quas rem dolore totam voluptates illum
            quibusdam impedit, distinctio in perferendis aperiam, tenetur cum voluptatibus eum nam? Iusto, in. Dicta
            tenetur provident atque, iste earum praesentium ex aliquam incidunt adipisci consequatur, explicabo amet
            totam. Eos quod praesentium, at dicta ducimus tempora fugit reiciendis illum eaque molestiae. Eaque
            temporibus optio corrupti deleniti delectus maiores inventore officia, officiis itaque aut nobis, recusandae
            pariatur possimus laboriosam tempore amet dolor, sunt at architecto in ipsa quam quis? Quidem saepe culpa
            fuga quam excepturi obcaecati, iste repellat accusamus magni iusto? Voluptatum fugit nihil enim. Nemo
            debitis soluta reprehenderit perspiciatis et ratione, similique placeat animi blanditiis totam magnam
            recusandae accusantium. Debitis eum ut animi consequatur fuga? Sint qui fugiat odit quam iusto. Molestias
            obcaecati minima provident aspernatur vel aut, minus quas repellat iusto? Ipsam exercitationem reprehenderit
            quasi distinctio sunt dolorem aliquam commodi provident perspiciatis! Tempora velit nisi rem nesciunt eius
            deserunt quasi modi, unde corporis neque voluptate ea excepturi repellendus cum vel veniam voluptatem
            debitis recusandae vitae amet? Eligendi nesciunt laborum vero mollitia laboriosam, voluptatum debitis
            obcaecati error fugit temporibus, soluta repellat nisi aspernatur, voluptatem facere! Rem officiis deserunt
            blanditiis nisi veniam atque pariatur, minima architecto odit, laudantium quis eligendi consequuntur, harum
            cum? Facere ipsam nostrum nihil consequuntur cum odit laborum unde, accusamus ea! Deserunt, minus distinctio
            excepturi labore eveniet odit assumenda quam eius quo nemo a numquam cupiditate voluptate ipsa maiores.
            Dolore officiis enim odit commodi corporis sed libero, molestiae tenetur expedita quod numquam! Minus eaque
            id harum excepturi reprehenderit quidem sunt, totam beatae aperiam illum sequi, quaerat officia velit rem
            in. Quisquam temporibus aliquid minima dolore nobis et architecto, explicabo doloremque eius numquam veniam
            consectetur, voluptates, impedit esse aliquam sunt vitae fugit tempora earum. Eligendi, inventore dicta sed
            quaerat voluptates optio, asperiores a consequatur deserunt hic laudantium rem numquam fuga porro doloremque
            officia voluptas nulla? Nulla, iusto! Odit expedita dolores eius aliquam delectus amet doloribus tenetur ad
            totam magnam ratione nam, sapiente commodi aperiam ea reiciendis perspiciatis possimus harum repellendus ex
            repudiandae officia qui iusto natus? Ex id tempora dolore repellendus, dignissimos odit modi fugit
            voluptates reprehenderit sed dolor ullam vero voluptatibus at. Odio nisi maiores sint iusto adipisci, vel,
            nam dolor minus eius, eveniet aut deserunt maxime distinctio facilis. Excepturi, quia dolorem.
          </p>
        </div>
      </Box>;
  }
}`,...(b=(p=u.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const Be=["Demo"];export{u as Demo,Be as __namedExportsOrder,Pe as default};
