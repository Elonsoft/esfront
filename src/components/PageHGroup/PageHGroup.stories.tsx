import { Story } from '@storybook/react';

import Button from '@mui/material/Button';

import {
  PageHGroup,
  PageHGroupActions,
  PageHGroupBreadcrumbs,
  PageHGroupHeading,
  PageHGroupMain,
  PageHGroupStatus
} from '.';

import { IconDotsHorizontalW500, IconPlusW400 } from '../../icons';
import { DemoBase as BreadcrumbsDemo } from '../Breadcrumbs/Breadcrumbs.stories';

export const Demo: Story = (args, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  return (
    <PageHGroup>
      <PageHGroupBreadcrumbs>{BreadcrumbsDemo({}, context)}</PageHGroupBreadcrumbs>
      <PageHGroupMain>
        <PageHGroupHeading maxLines={args.maxLines}>
          {args.children || (locale === 'en' ? 'Schedule' : 'Расписание')}
        </PageHGroupHeading>
        <PageHGroupActions>
          <Button color="primary" startIcon={<IconPlusW400 />} variant="contained">
            {locale === 'en' ? 'Create' : 'Создать'}
          </Button>
          <Button color="tertiary" variant="outlined">
            <IconDotsHorizontalW500 />
          </Button>
        </PageHGroupActions>
      </PageHGroupMain>
      <PageHGroupStatus>{locale === 'en' ? 'Link access enabled' : 'Доступ по ссылке включен'}</PageHGroupStatus>
    </PageHGroup>
  );
};
