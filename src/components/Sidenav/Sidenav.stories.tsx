import { useRef, useState } from 'react';

import { Story } from '@storybook/react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Sidenav } from './Sidenav';
import { SidenavContext } from './Sidenav.context';
import { SidenavItem } from './SidenavItem';

import { IconAccount, IconCloseSmall, IconFileDocument, IconHome, IconMagnifyVariantSmall, IconZap } from '../../icons';
import { Sidebar } from '../Sidebar';
import { SidebarDivider } from '../Sidebar/SidebarDivider';
import { SidebarItem } from '../Sidebar/SidebarItem';
import { SidebarMenu } from '../Sidebar/SidebarMenu';
import { SidebarScrollable } from '../Sidebar/SidebarScrollable';
import { SidebarSpacer } from '../Sidebar/SidebarSpacer';
import { SidebarToggle } from '../Sidebar/SidebarToggle';

const SearchField = styled(TextField)(({ theme }) => ({
  '&.MuiTextField-root': {
    margin: '12px 16px 16px',

    '& .MuiOutlinedInput-root': {
      padding: '0 4px',

      '& .MuiIconButton-root': {
        color: theme.palette.monoA.A500
      },
      '& .MuiInputAdornment-positionStart': {
        marginRight: '4px',

        '& .MuiSvgIcon-root': {
          color: theme.palette.monoA.A400
        }
      }
    }
  }
}));

const SidebarHeading = (props: { title: string }) => (
  <>
    <Typography variant="h6" sx={{ padding: '16px', color: 'monoA.A900' }}>
      {props.title}
    </Typography>
    <SidebarDivider />
  </>
);

const SidebarCaption = (props: { title: string }) => (
  <Typography variant="caption" noWrap sx={{ padding: '0 16px', color: 'monoA.A600', flexShrink: '0' }}>
    {props.title}
  </Typography>
);

const SidebarMenuItem = styled(SidebarItem)(() => ({
  margin: '0 16px',

  '& .MuiListItemButton-root.ESSidebarItem-button': {
    padding: '4px'
  }
}));

const Content = styled('div')<{ ownerState: { isOpen?: boolean; width?: number } }>(
  ({ ownerState: { isOpen, width } }) => ({
    transition: 'padding-left 0.2s',
    paddingLeft: `${isOpen ? width : 0}px`
  })
);

const MIN_WIDTH = 220;
const MAX_WIDTH = 300;

export const Demo: Story = ({ disableEscapeKeyDown }, { globals: { locale } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(287);
  const [searchValue, setSearch] = useState('');

  const ref = useRef<HTMLDivElement | null>(null);

  const ownerState = { isOpen, width };

  return (
    <Box sx={{ height: '100vh', margin: '-1rem', display: 'flex', gap: '20px', overflow: 'auto' }}>
      <Sidenav
        open={isOpen}
        disableEscapeKeyDown={disableEscapeKeyDown}
        sx={{ position: 'sticky', top: '0' }}
        onClose={() => setIsOpen(false)}
      >
        <Sidebar color="primary">
          <SidebarMenu>
            <SidenavItem icon={<IconHome />} />
          </SidebarMenu>

          <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <SidebarMenu>
            <SidenavItem id="1" icon={<IconZap />} text={locale === 'en' ? 'Projects' : 'Проекты'} />
            <SidenavItem id="2" icon={<IconFileDocument />} text={locale === 'en' ? 'Reports' : 'Отчеты'} />
          </SidebarMenu>

          <SidebarSpacer />
          <SidebarDivider />

          <SidebarMenu>
            <SidenavItem icon={<IconAccount />} text={locale === 'en' ? 'Profile' : 'Профиль'} />
          </SidebarMenu>
        </Sidebar>

        <Sidebar
          onWidthChange={(value) => {
            if (ref.current && isOpen) {
              ref.current.style.transition = 'none';
              ref.current.style.paddingLeft = `${Math.min(Math.max(value, MIN_WIDTH), MAX_WIDTH)}px`;
            }
          }}
          onWidthChangeCommit={(value: number) => {
            if (ref.current && isOpen) {
              ref.current.style.transition = '';
              ref.current.style.paddingLeft = '';
            }
            setWidth(value);
          }}
          width={width}
          minWidth={MIN_WIDTH}
          maxWidth={MAX_WIDTH}
        >
          <SidenavContext.Consumer>
            {(value) => {
              switch (value?.itemId) {
                default:
                case '1':
                  return (
                    <>
                      <SidebarHeading title={locale === 'en' ? 'Projects' : 'Проекты'} />
                      <SearchField
                        placeholder={locale === 'en' ? 'Search' : 'Поиск'}
                        size="32"
                        value={searchValue}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconMagnifyVariantSmall />
                            </InputAdornment>
                          ),
                          endAdornment: searchValue && (
                            <IconButton size="24" disableRipple onClick={() => setSearch('')}>
                              <IconCloseSmall />
                            </IconButton>
                          )
                        }}
                      />

                      <SidebarScrollable>
                        <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                        <SidebarMenu>
                          <SidebarMenuItem
                            icon={<IconFileDocument />}
                            text={locale === 'en' ? 'All projects' : 'Все проекты'}
                            onClick={() => console.log(`All projects`)}
                          />
                          <SidebarMenuItem
                            id="1"
                            icon={<IconFileDocument />}
                            text={locale === 'en' ? 'Documents' : 'Документы'}
                            onClick={() => console.log(`Selected`)}
                          >
                            {[...Array(10)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                text={(locale === 'en' ? 'Document' : 'Документ') + ' №' + idx}
                                inset={true}
                                onClick={() => console.log(`Project ${idx}`)}
                              />
                            ))}
                          </SidebarMenuItem>
                          <SidebarMenuItem
                            id="2"
                            icon={<IconFileDocument />}
                            text={locale === 'en' ? 'New projects' : 'Новые проекты'}
                            onClick={() => console.log(`Projects`)}
                          >
                            {[...Array(10)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                text={(locale === 'en' ? 'New project' : 'Новый проект') + ' №' + idx}
                                inset={true}
                                onClick={() => console.log(`Project ${idx}`)}
                              />
                            ))}
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarScrollable>

                      <SidebarCaption title={locale === 'en' ? 'Current projects' : 'Текущие проекты'} />
                      <SidebarMenu>
                        {[...Array(5)].map((_, idx) => (
                          <SidebarMenuItem
                            key={idx}
                            text={(locale === 'en' ? 'Current project' : 'Текущий проект') + ' №' + idx}
                            icon={<IconFileDocument />}
                          />
                        ))}
                      </SidebarMenu>
                    </>
                  );
                case '2':
                  return (
                    <>
                      <SidebarHeading title={locale === 'en' ? 'Reports' : 'Отчеты'} />
                      <SearchField
                        size="32"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconMagnifyVariantSmall />
                            </InputAdornment>
                          ),
                          endAdornment: searchValue && (
                            <IconButton size="24" disableRipple onClick={() => setSearch('')}>
                              <IconCloseSmall />
                            </IconButton>
                          )
                        }}
                      />

                      <SidebarScrollable>
                        <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                        <SidebarMenu>
                          <SidebarMenuItem
                            id="1"
                            icon={<IconFileDocument />}
                            text={locale === 'en' ? 'All reports' : 'Все отчеты'}
                            onClick={() => console.log(`All reports`)}
                          />
                          <SidebarMenuItem
                            id="2"
                            icon={<IconFileDocument />}
                            text={locale === 'en' ? 'Saved reports' : 'Сохраненные отчеты'}
                            onClick={() => console.log(`Saved reports`)}
                          >
                            {[...Array(5)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                text={(locale === 'en' ? 'Saved report' : 'Сохраненный отчет') + ' №' + idx}
                                inset={true}
                                onClick={() => console.log(`Saved report ${idx}`)}
                              />
                            ))}
                          </SidebarMenuItem>

                          <SidebarMenuItem
                            id="3"
                            text={locale === 'en' ? 'Scheduled reports' : 'Запланированные отчеты'}
                            icon={<IconFileDocument />}
                          >
                            {[...Array(10)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                text={(locale === 'en' ? 'Scheduled report' : 'Запланированный отчет') + ' №' + idx}
                                inset={true}
                                onClick={() => console.log(`Report ${idx}`)}
                              />
                            ))}
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarScrollable>

                      <SidebarCaption title={locale === 'en' ? 'Current reports' : 'Текущие отчеты'} />
                      <SidebarMenu>
                        {[...Array(5)].map((_, idx) => (
                          <SidebarMenuItem
                            key={idx}
                            text={(locale === 'en' ? 'Current report' : 'Текущий отчет') + ' №' + idx}
                            icon={<IconFileDocument />}
                          />
                        ))}
                      </SidebarMenu>
                    </>
                  );
              }
            }}
          </SidenavContext.Consumer>
        </Sidebar>
      </Sidenav>

      <Content ref={ref} ownerState={ownerState}>
        <h2>Lorem ipsum</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus
          tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem.
          Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat
          sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis
          debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima
          laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla
          possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse,
          consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil numquam
          omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus accusantium,
          recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere fugiat accusamus
          voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores? Dolor, nemo? Est
          aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores facere nulla enim
          nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi incidunt suscipit vel
          cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem deserunt, nostrum officiis
          eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni laboriosam amet fugiat libero
          voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id, alias sed. Velit ipsa voluptatem
          incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil! Numquam, minus voluptatum quidem
          rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel aliquam doloribus, explicabo omnis
          repellat architecto est accusamus voluptatum placeat officiis ut reiciendis dolor, illo voluptatem id.
          Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis nulla quos molestias doloremque tempore
          iste. Ex, autem nesciunt nisi ut minus harum error voluptas id sapiente delectus excepturi doloremque fugiat?
          Assumenda distinctio, accusantium, numquam modi blanditiis aut vel explicabo officiis laborum nulla ipsa odit
          praesentium quas molestias tempora. Commodi est a molestias alias maiores, saepe deserunt tenetur enim
          exercitationem. Commodi fuga soluta repellat dolor odit quisquam vero id veniam ullam modi quis culpa,
          molestiae officia suscipit, atque earum. Consequuntur quasi temporibus facere voluptatem dolorem a molestiae,
          distinctio fugiat sint repudiandae praesentium omnis, minima tenetur nostrum fuga non quam sunt consectetur,
          facilis autem eum? Quibusdam accusantium assumenda illo aspernatur suscipit repellat, tempore laboriosam earum
          veritatis at saepe facere delectus laudantium pariatur obcaecati nisi veniam mollitia quas ea nam, minus
          expedita. Magnam id accusamus voluptas pariatur dolorem, ullam laudantium quis rem natus maiores ea dolore
          quod distinctio, corrupti rerum doloremque optio sapiente perspiciatis autem enim. Eum dignissimos iusto
          reprehenderit rem vel asperiores non, tempore quos quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa
          laborum odit nulla voluptates dolore dolorem, dolorum non aspernatur! Sequi rerum eveniet doloremque vitae
          explicabo impedit, natus reprehenderit quas obcaecati omnis nam, blanditiis minima possimus harum id quisquam
          ullam et sit consequuntur quod quidem voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam
          ullam explicabo illum sint nisi quasi ipsum quaerat odit tempora repellat.
        </p>
        <p>
          Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet
          tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga.
          Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium
          dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam,
          aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil
          ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio
          dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam
          quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus vitae
          optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio porro ut
          maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum illo ut
          cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis necessitatibus in
          inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente. Doloremque officiis
          voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias, in repellat tenetur
          laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima ullam excepturi
          perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore minus repellendus
          optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque rerum quae eligendi ea
          fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem, optio beatae autem ea
          inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia dolorum necessitatibus nobis
          ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum cumque inventore at repellendus
          est consectetur non fugiat exercitationem necessitatibus voluptas aperiam distinctio assumenda quisquam,
          reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum praesentium quisquam temporibus,
          deleniti porro veritatis nisi fugit consectetur quae hic cupiditate suscipit aspernatur autem ullam obcaecati
          similique quasi nostrum dolores minus odio architecto? At, quam nam culpa exercitationem nisi eius, voluptas a
          odit libero vitae nulla laudantium praesentium non iure earum, autem dicta ratione quos ducimus maxime cumque
          enim nemo veritatis inventore. Nihil voluptatibus consectetur illo voluptates suscipit esse, quas et earum est
          facere? Unde, reprehenderit. Possimus tenetur consequatur ab molestias assumenda animi nihil deserunt eius
          doloremque, placeat deleniti error soluta nam suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel
          iusto quos modi tenetur enim, sapiente expedita asperiores at dignissimos veritatis fugit in ipsa culpa
          necessitatibus dolorem illum sit laudantium atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt
          excepturi corrupti dolores commodi quas laudantium similique atque neque quidem minus cumque minima tempore
          fuga ad quisquam. Suscipit atque nobis aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto
          ullam totam repellat fugiat incidunt magnam.
        </p>
        <p>
          Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis
          corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem
          quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda
          amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam
          fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo
          aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut
          voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis
          deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius et
          ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi dicta
          animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus iure
          excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit labore
          nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis maiores at
          corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste dolor ex
          consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro blanditiis
          inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae? Vel hic
          assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores eos
          commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum, dolor
          quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione eligendi
          eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam.
        </p>
      </Content>
    </Box>
  );
};
