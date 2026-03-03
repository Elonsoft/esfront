import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-Wm5baAvf.js";import{S as q,a as j,b as s,c as t,d as m,e as y,f as k}from"./SidebarToggle-BLNH_Eu2.js";import{L as C}from"./MenuItem-DrDY2G9B.js";import{I as o}from"./IconAtLineW500-BIDdAVQY.js";import{I as L,a as W}from"./IconMagnifyLineW500-WPWmCiCb.js";import{I as A}from"./IconAccountFillW500Lc-vqiE4ZhJ.js";import{L as M}from"./ListItemIcon-Ck6lPhYq.js";import{L as D}from"./ListItemText-Bazqrad0.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./useLatest-C1UtP6al.js";import"./useDocumentEventListener-D39Pm-AK.js";import"./useWindowEventListener-qwmc7qq6.js";import"./IconChevronLeftLineW300-BOx1aSt-.js";import"./SvgIcon-Bb8ef9Tm.js";import"./index-DrUVGiHv.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./useResizeObserver-C6sKC9YN.js";import"./Tooltip-Bp1S5HE5.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./defaultTheme-oBDS3u9v.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./useForkRef-CGhsnMYO.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./Button-BRu9apcn.js";import"./ButtonBase-BhCJPokL.js";import"./clsx-B-dksMZM.js";import"./memoTheme-Khho5aaB.js";import"./MenuList-CymzI1Pn.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./Divider-BKuyIAQ4.js";const Me={tags:["autodocs"],component:q,parameters:{references:["Sidebar","SidebarDivider","SidebarItem","SidebarMenu","SidebarScrollable","SidebarSpacer","SidebarToggle"]},argTypes:{color:{control:{type:"select"},options:["default","primary","secondary"]},behaviour:{control:{type:"select"},options:["click","hover"]},exclusive:{control:{type:"boolean"}},open:{table:{disable:!0}},width:{table:{disable:!0}}},args:{color:"default",behaviour:"click",exclusive:!1,minWidth:220,maxWidth:400}},u={render:function({color:c,behaviour:v,exclusive:x,minWidth:f,maxWidth:h},{globals:{locale:i}}){const[n,g]=l.useState(!1),[S,I]=l.useState(280);return e.jsxs("div",{style:{height:"100vh",margin:"-16px",display:"flex",gap:"20px",overflow:"auto"},children:[e.jsxs(q,{color:c,maxWidth:h,minWidth:f,open:n,style:{position:"sticky",top:"0"},width:S,onWidthChangeCommit:r=>I(r),children:[e.jsxs(C,{component:"div",style:{padding:"16px 16px 15px 0px",overflow:"hidden",flexShrink:"0",height:"auto"},children:[e.jsx(M,{children:e.jsx(o,{style:{color:c==="primary"?"var(--es-mono-b-a800)":"var(--es-mono-a-a500)"}})}),e.jsx(D,{primary:"CRM",primaryTypographyClassName:"h6",style:{marginTop:"0",marginBottom:"0",display:`${n?"block":"none"}`}})]}),e.jsx(j,{open:n,onClick:()=>g(!n)}),e.jsx(s,{children:e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Time tracking":"Рабочее время",onClick:()=>console.info("Time tracking")})}),e.jsx(m,{}),e.jsx(y,{afterScroll:e.jsx(m,{}),children:e.jsxs(s,{behaviour:v,exclusive:x,children:[e.jsx(t,{selected:!0,component:"button",icon:e.jsx(o,{}),id:"0",text:i==="en"?"Projects":"Проекты",onClick:()=>console.info("Projects"),children:[...Array(5)].map((r,a)=>e.jsx(t,{inset:!0,selected:a===2,text:(i==="en"?"Project":"Проект")+" №"+a,onClick:()=>console.info(`Project ${a}`)},a))}),e.jsx(t,{icon:e.jsx(o,{}),id:"1",text:i==="en"?"Files":"Файлы",children:[...Array(8)].map((r,a)=>e.jsx(t,{inset:!0,text:(i==="en"?"File":"Файл")+" №"+a,onClick:()=>console.info(`File ${a}`)},a))}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Infographic":"Инфографика",onClick:()=>console.info("Infographic")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Schedule":"Расписание",onClick:()=>console.info("Schedule")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Messages":"Сообщения",onClick:()=>console.info("Messages")}),e.jsx(t,{icon:e.jsx(o,{}),text:i==="en"?"Inbox":"Входящие",onClick:()=>console.info("Inbox")})]})}),e.jsx(k,{}),e.jsxs(s,{children:[e.jsx(t,{icon:e.jsx(L,{}),text:i==="en"?"Search":"Поиск",onClick:()=>console.info("Search")}),e.jsx(t,{icon:e.jsx(W,{}),text:i==="en"?"Notifications":"Уведомления",onClick:()=>console.info("Notifications")})]}),e.jsx(m,{}),e.jsx(s,{children:e.jsx(t,{icon:e.jsx(A,{container:!0,containerSize:"24px"}),text:i==="en"?"Name":"Имя"})})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil quibusdam natus dolore suscipit deleniti? Alias quod veritatis odit ipsa nam ipsum atque placeat voluptates, molestias ipsam, necessitatibus facilis provident consequuntur beatae! Aut incidunt non debitis, nesciunt necessitatibus ex praesentium error tenetur veniam velit fugiat ullam quas similique impedit eveniet. Consectetur sint sunt cumque molestiae quos rem autem fugiat. Perferendis eveniet facilis porro necessitatibus at. Voluptate maxime omnis dolore ipsum rerum? Dolorum voluptatibus atque perspiciatis incidunt non, iusto, officiis consequuntur harum aperiam doloribus, veritatis quo dignissimos ratione ex magni quaerat!"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa sint, eos quidem, pariatur obcaecati culpa voluptas ducimus ad velit deleniti, nostrum facere voluptatum id odit facilis? Nostrum minima vitae accusantium reprehenderit, tempora quo saepe eligendi assumenda tenetur vero quasi alias esse sunt quod veniam consectetur nemo beatae accusamus delectus odit impedit exercitationem laudantium ipsum. Repellat vitae nisi voluptatibus ea in rerum eaque perferendis doloribus, dolores corrupti ipsam illum recusandae maxime nihil sit sed delectus commodi obcaecati consequuntur non enim doloremque error tempore. Ea sequi, ipsa, hic temporibus eveniet ipsam eius libero accusamus quaerat harum, iste recusandae! Maiores assumenda illum labore? Nihil ipsam dolores error, cum sunt, harum architecto hic ex quibusdam nobis cumque laboriosam rerum tempore quo, ut magni aspernatur! Quo nihil exercitationem consequatur eius distinctio assumenda, repellat hic. Vel, velit eius facere repudiandae dicta earum doloribus, et aliquam, perspiciatis vitae obcaecati. At, autem placeat maiores molestias neque voluptatum!"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ut incidunt alias quae laudantium magni atque vitae suscipit eveniet sequi possimus aspernatur nisi repellendus earum doloremque, neque facilis voluptate omnis quo veniam asperiores. Rem et quo voluptas aliquid voluptatibus, in quis velit, officiis natus iure sint voluptates doloribus quibusdam facilis facere dignissimos, reiciendis debitis omnis accusantium! Rerum eligendi iusto natus, porro omnis, accusantium enim cumque, inventore possimus nulla fugiat magni iste! Quod excepturi ratione obcaecati qui veniam quam eum, delectus accusantium beatae a exercitationem fuga nesciunt reiciendis, ad mollitia temporibus velit. Ex distinctio amet dolorum iste libero quis magnam nisi expedita, cumque architecto repudiandae modi consequuntur officiis? Consectetur, aut, est possimus labore earum maiores placeat totam voluptate ipsa amet odit esse facilis modi error reprehenderit, eligendi minus! Dicta consequuntur ut architecto quas rem dolore totam voluptates illum quibusdam impedit, distinctio in perferendis aperiam, tenetur cum voluptatibus eum nam? Iusto, in. Dicta tenetur provident atque, iste earum praesentium ex aliquam incidunt adipisci consequatur, explicabo amet totam. Eos quod praesentium, at dicta ducimus tempora fugit reiciendis illum eaque molestiae. Eaque temporibus optio corrupti deleniti delectus maiores inventore officia, officiis itaque aut nobis, recusandae pariatur possimus laboriosam tempore amet dolor, sunt at architecto in ipsa quam quis? Quidem saepe culpa fuga quam excepturi obcaecati, iste repellat accusamus magni iusto? Voluptatum fugit nihil enim. Nemo debitis soluta reprehenderit perspiciatis et ratione, similique placeat animi blanditiis totam magnam recusandae accusantium. Debitis eum ut animi consequatur fuga? Sint qui fugiat odit quam iusto. Molestias obcaecati minima provident aspernatur vel aut, minus quas repellat iusto? Ipsam exercitationem reprehenderit quasi distinctio sunt dolorem aliquam commodi provident perspiciatis! Tempora velit nisi rem nesciunt eius deserunt quasi modi, unde corporis neque voluptate ea excepturi repellendus cum vel veniam voluptatem debitis recusandae vitae amet? Eligendi nesciunt laborum vero mollitia laboriosam, voluptatum debitis obcaecati error fugit temporibus, soluta repellat nisi aspernatur, voluptatem facere! Rem officiis deserunt blanditiis nisi veniam atque pariatur, minima architecto odit, laudantium quis eligendi consequuntur, harum cum? Facere ipsam nostrum nihil consequuntur cum odit laborum unde, accusamus ea! Deserunt, minus distinctio excepturi labore eveniet odit assumenda quam eius quo nemo a numquam cupiditate voluptate ipsa maiores. Dolore officiis enim odit commodi corporis sed libero, molestiae tenetur expedita quod numquam! Minus eaque id harum excepturi reprehenderit quidem sunt, totam beatae aperiam illum sequi, quaerat officia velit rem in. Quisquam temporibus aliquid minima dolore nobis et architecto, explicabo doloremque eius numquam veniam consectetur, voluptates, impedit esse aliquam sunt vitae fugit tempora earum. Eligendi, inventore dicta sed quaerat voluptates optio, asperiores a consequatur deserunt hic laudantium rem numquam fuga porro doloremque officia voluptas nulla? Nulla, iusto! Odit expedita dolores eius aliquam delectus amet doloribus tenetur ad totam magnam ratione nam, sapiente commodi aperiam ea reiciendis perspiciatis possimus harum repellendus ex repudiandae officia qui iusto natus? Ex id tempora dolore repellendus, dignissimos odit modi fugit voluptates reprehenderit sed dolor ullam vero voluptatibus at. Odio nisi maiores sint iusto adipisci, vel, nam dolor minus eius, eveniet aut deserunt maxime distinctio facilis. Excepturi, quia dolorem."})]})]})}};var d,p,b;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    return <div style={{
      height: '100vh',
      margin: '-16px',
      display: 'flex',
      gap: '20px',
      overflow: 'auto'
    }}>
        <Sidebar color={color} maxWidth={maxWidth} minWidth={minWidth} open={isOpen} style={{
        position: 'sticky',
        top: '0'
      }} width={width} onWidthChangeCommit={(value: number) => setWidth(value)}>
          <ListItem component="div" style={{
          padding: '16px 16px 15px 0px',
          overflow: 'hidden',
          flexShrink: '0',
          height: 'auto'
        }}>
            <ListItemIcon>
              <IconAtLineW500 style={{
              color: color === 'primary' ? 'var(--es-mono-b-a800)' : 'var(--es-mono-a-a500)'
            }} />
            </ListItemIcon>
            <ListItemText primary="CRM"
          // primaryTypographyProps={{ variant: 'h6', color: color === 'primary' ? 'monoB.A800' : 'monoA.A900' }}
          primaryTypographyClassName="h6" style={{
            marginTop: '0',
            marginBottom: '0',
            display: \`\${isOpen ? 'block' : 'none'}\`
          }} />
          </ListItem>

          <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <SidebarMenu>
            <SidebarItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'Time tracking' : 'Рабочее время'} onClick={() => console.info(\`Time tracking\`)} />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarScrollable afterScroll={<SidebarDivider />}>
            <SidebarMenu behaviour={behaviour} exclusive={exclusive}>
              <SidebarItem selected component="button" icon={<IconAtLineW500 />} id="0" text={locale === 'en' ? 'Projects' : 'Проекты'} onClick={() => console.info(\`Projects\`)}>
                {[...Array(5)].map((_, i) => <SidebarItem key={i} inset selected={i === 2} text={(locale === 'en' ? 'Project' : 'Проект') + ' №' + i} onClick={() => console.info(\`Project \${i}\`)} />)}
              </SidebarItem>
              <SidebarItem icon={<IconAtLineW500 />} id="1" text={locale === 'en' ? 'Files' : 'Файлы'}>
                {[...Array(8)].map((_, i) => <SidebarItem key={i} inset text={(locale === 'en' ? 'File' : 'Файл') + ' №' + i} onClick={() => console.info(\`File \${i}\`)} />)}
              </SidebarItem>
              <SidebarItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'Infographic' : 'Инфографика'} onClick={() => console.info(\`Infographic\`)} />
              <SidebarItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'Schedule' : 'Расписание'} onClick={() => console.info(\`Schedule\`)} />
              <SidebarItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'Messages' : 'Сообщения'} onClick={() => console.info(\`Messages\`)} />
              <SidebarItem icon={<IconAtLineW500 />} text={locale === 'en' ? 'Inbox' : 'Входящие'} onClick={() => console.info(\`Inbox\`)} />
            </SidebarMenu>
          </SidebarScrollable>
          <SidebarSpacer />

          <SidebarMenu>
            <SidebarItem icon={<IconMagnifyLineW500 />} text={locale === 'en' ? 'Search' : 'Поиск'} onClick={() => console.info(\`Search\`)} />
            <SidebarItem icon={<IconBellFillW500 />} text={locale === 'en' ? 'Notifications' : 'Уведомления'} onClick={() => console.info(\`Notifications\`)} />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarMenu>
            <SidebarItem icon={<IconAccountFillW500Lc container containerSize="24px" />} text={locale === 'en' ? 'Name' : 'Имя'} />
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
      </div>;
  }
}`,...(b=(p=u.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const De=["Demo"];export{u as Demo,De as __namedExportsOrder,Me as default};
