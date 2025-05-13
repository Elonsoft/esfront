import { Meta, StoryObj } from '@storybook/react';

import { InputAdornment } from '@mui/material';

import { Header, HeaderActions, HeaderLine, HeaderLogo, HeaderNavigation, HeaderSearch } from '.';

import { IconChevronDownW200, IconCloseLineW350, IconElonsoft, IconMagnify, IconMenuDownW400 } from '../../icons';
import { Button } from '../Button';
import { SvgIcon, SvgIconProps } from '../SvgIcon';

const meta: Meta<typeof Header> = {
  tags: ['autodocs'],
  component: Header,
  parameters: {
    references: ['Header'],
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

const IconMenuLineW500 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M3 7.00293V5.00293H21V7.00293H3Z" fill="currentColor" />
      <path d="M3 13.0029H21V11.0029H3V13.0029Z" fill="currentColor" />
      <path d="M3 19.0029H21V17.0029H3V19.0029Z" fill="currentColor" />
    </SvgIcon>
  );
};

const IconMapMarker = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.0002 20.5L7.05042 15.5209C4.31675 12.7709 4.31675 8.31238 7.05042 5.56245C9.78409 2.81252 14.2162 2.81252 16.9499 5.56245C19.6836 8.31238 19.6836 12.7709 16.9499 15.5209L12.0002 20.5ZM15.8499 14.4143C17.9761 12.2755 17.9761 8.80777 15.8499 6.66893C13.7238 4.5301 10.2765 4.5301 8.15036 6.66893C6.02417 8.80777 6.02417 12.2755 8.15036 14.4143L12.0002 18.287L15.8499 14.4143ZM12.0002 12.1064C11.141 12.1064 10.4446 11.4059 10.4446 10.5416C10.4446 9.67742 11.141 8.97683 12.0002 8.97683C12.8593 8.97683 13.5557 9.67742 13.5557 10.5416C13.5557 11.4059 12.8593 12.1064 12.0002 12.1064Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const Demo: Story = {
  render: () => {
    return (
      <Header sx={{ margin: '-1rem', padding: '8px 0' }}>
        <HeaderLine>
          <Button
            color="tertiary"
            endIcon={<IconChevronDownW200 />}
            size="400"
            startIcon={<IconMapMarker />}
            sx={{ marginRight: '16px' }}
            variant="text"
          >
            Москва
          </Button>

          <HeaderNavigation sx={{ marginRight: '16px' }}>
            <Button color="tertiary" size="400" variant="text">
              Каталог
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Доставка и оплата
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Контакты
            </Button>
            <Button color="tertiary" component="a" href="https://google.ru" size="400" target="_blank" variant="text">
              О компании
            </Button>
          </HeaderNavigation>

          <Button color="tertiary" size="400" sx={{ marginLeft: 'auto' }} variant="text">
            Заказать звонок
          </Button>
        </HeaderLine>

        <HeaderLine>
          <HeaderLogo href="https://github.com/Elonsoft/esfront" target="_blank">
            <IconElonsoft height="16px" width="80px" />
          </HeaderLogo>

          <Button
            color="primary"
            size="500"
            startIcon={<IconMenuLineW500 />}
            sx={{ marginRight: '16px' }}
            variant="contained"
          >
            Каталог
          </Button>

          {false && (
            <HeaderSearch
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {false && <IconMagnify />}
                    {true && (
                      <Button
                        color="tertiary"
                        endIcon={<IconMenuDownW400 />}
                        size="400"
                        sx={(theme) => ({
                          '& .ESButtonBase-wrapper.ESButtonBase-wrapper': {
                            ...theme.typography.button,
                          },
                        })}
                        variant="contained"
                      >
                        Везде
                      </Button>
                    )}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button color="tertiary" size="100" variant="text">
                      <IconCloseLineW350 container containerSize="16px" />
                    </Button>
                    {false && (
                      <Button color="tertiary" size="400" variant="text">
                        <IconMagnify />
                      </Button>
                    )}
                    {true && (
                      <Button color="primary" size="500" variant="contained">
                        <IconMagnify />
                      </Button>
                    )}
                  </InputAdornment>
                ),
              }}
              placeholder="Поиск"
            />
          )}

          <HeaderSearch
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconMagnify />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button color="tertiary" size="400" variant="text">
                    <IconCloseLineW350 />
                  </Button>
                </InputAdornment>
              ),
            }}
            placeholder="Поиск"
            variant="borderless"
          />

          <HeaderActions>
            <Button color="monoA" size="500" variant="text">
              <IconMenuLineW500 />
            </Button>
            <Button color="monoA" size="500" variant="text">
              <IconMenuLineW500 />
            </Button>
            <Button color="monoA" size="500" variant="text">
              <IconMenuLineW500 />
            </Button>
            <Button color="monoA" size="500" variant="text">
              <IconMenuLineW500 />
            </Button>
          </HeaderActions>
        </HeaderLine>

        <HeaderLine>
          <HeaderNavigation>
            <Button color="tertiary" size="400" variant="text">
              Ноутбуки
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Холодильники
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Пылесосы
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Печки
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Категория 1
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Категория 2
            </Button>
            <Button color="tertiary" size="400" variant="text">
              Категория 3
            </Button>
          </HeaderNavigation>
        </HeaderLine>
      </Header>
    );
  },
};
