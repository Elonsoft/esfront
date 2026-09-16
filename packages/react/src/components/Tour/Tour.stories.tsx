import { useState } from 'react';

import { TourContentProps, TourStep } from './Tour.types';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Tour } from './Tour';

import { Button } from '../Button';

const getText = (context: StoryContext<unknown>) => {
  const isEnglish = context.globals.locale === 'en';

  return {
    start: isEnglish ? 'Start the tour' : 'Начать тур',
    back: isEnglish ? 'Back' : 'Назад',
    next: isEnglish ? 'Next' : 'Далее',
    done: isEnglish ? 'Done' : 'Готово',
    skip: isEnglish ? 'Skip' : 'Пропустить',
    loading: isEnglish ? 'Loading…' : 'Загрузка…',
    welcome: isEnglish ? 'Welcome' : 'Добро пожаловать',
    welcomeText: isEnglish
      ? 'This short tour shows where everything lives.'
      : 'Короткий тур покажет, где что находится.',
    header: isEnglish ? 'Header' : 'Шапка',
    headerText: isEnglish
      ? 'The header stays pinned to the top of the page.'
      : 'Шапка всегда закреплена в верхней части страницы.',
    content: isEnglish ? 'Content' : 'Контент',
    contentText: isEnglish
      ? 'The cutout follows only the part the header does not cover.'
      : 'Подсветка охватывает только ту часть, которую не закрывает шапка.',
    late: isEnglish ? 'Loaded on demand' : 'Загружается по требованию',
    lateText: isEnglish
      ? 'This panel is fetched when the step opens and the tour waits for it.'
      : 'Эта панель запрашивается при открытии шага и тур дожидается её.',
    panel: isEnglish ? 'Fetched panel' : 'Полученная панель',
    row: isEnglish ? 'Row' : 'Строка',
  };
};

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

const meta: Meta<typeof Tour> = {
  tags: ['autodocs'],
  component: Tour,
  parameters: {
    references: ['Tour'],
  },
  argTypes: {
    steps: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    step: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tour>;

export const Demo: Story = {
  render: function Render(args, context) {
    const text = getText(context);

    const [isOpen, setOpen] = useState(false);
    const [isPanelLoaded, setPanelLoaded] = useState(false);

    const renderContent = (title: string, body: string) => {
      const render = ({ step, count, loading, next, prev, skip }: TourContentProps) => (
        <div className="px-16 py-16" style={{ maxWidth: '330px' }}>
          <div className="caption mb-8">{loading ? text.loading : `${step + 1} / ${count}`}</div>
          <div className="body100-w50 mb-8">{title}</div>
          <div className="body100 mb-16">{body}</div>
          <div className="flex gap-8">
            <Button disabled={step === 0 || loading} variant="outlined" onClick={prev}>
              {text.back}
            </Button>
            <Button color="primary" disabled={loading} variant="contained" onClick={next}>
              {step === count - 1 ? text.done : text.next}
            </Button>

            <Button className="ml-auto" variant="text" onClick={skip}>
              {text.skip}
            </Button>
          </div>
        </div>
      );

      return render;
    };

    const steps: TourStep[] = [
      {
        content: renderContent(text.welcome, text.welcomeText),
      },
      {
        placement: 'bottom-start',
        selector: '#tour-header',
        content: renderContent(text.header, text.headerText),
      },
      {
        placement: 'right',
        selector: '#tour-content',
        padding: '12px',
        radius: '12px',
        content: renderContent(text.content, text.contentText),
      },
      {
        placement: 'top',
        selector: '#tour-panel',
        content: renderContent(text.late, text.lateText),
        before: async () => {
          await delay(1000);
          setPanelLoaded(true);
        },
        after: () => {
          setPanelLoaded(false);
        },
      },
    ];

    return (
      <div style={{ height: '150vh', position: 'relative', margin: '-1rem' }}>
        <div
          className="flex align-items-center gap-16 px-32 py-12"
          style={{
            backgroundColor: 'var(--es-surface-400)',
            borderBottom: '1px solid var(--es-mono-a-a100)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div className="h6" id="tour-header">
            {text.header}
          </div>

          <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
            {text.start}
          </Button>
        </div>

        <div className="flex flex-col gap-24 px-32 py-16">
          <div
            className="flex flex-col gap-8"
            id="tour-content"
            style={{
              width: '320px',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <span key={row}>{`${text.row} ${row}`}</span>
            ))}
          </div>

          {isPanelLoaded && (
            <div
              id="tour-panel"
              style={{
                width: '320px',
              }}
            >
              {text.panel}
            </div>
          )}
        </div>

        <Tour
          {...args}
          open={isOpen}
          steps={steps}
          onClose={() => {
            setOpen(false);
            setPanelLoaded(false);
          }}
        />
      </div>
    );
  },
};
