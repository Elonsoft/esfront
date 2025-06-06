import { AlertCloseProps } from '../Alert';
import { AudioPlayerProps } from '../AudioPlayer';
import { AutocompleteMenuProps } from '../AutocompleteMenu';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { CalendarHeadProps } from '../Calendar';
import { ChipsProps } from '../Chips';
import { DialogArrowProps, DialogCloseProps } from '../Dialog';
import { FileInfoNameProps } from '../FileInfo';
import { FiltersFilterProps, FiltersFormGroupProps, FiltersHeaderProps } from '../Filters';
import { FormatSizeProps } from '../FormatSize';
import { GalleryActionsProps, GalleryDescriptionProps, GalleryMetaProps, GallerySwiperProps } from '../Gallery';
import { MadeByProps } from '../MadeBy';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { PasswordFieldProps } from '../PasswordField';
import { PriceProps } from '../Price';
import { SFSChipsProps, SFSFiltersProps, SFSSearchProps, SFSSortingProps } from '../SFS';
import { SidebarItemProps, SidebarToggleProps } from '../Sidebar';
import { SnackbarCloseProps } from '../Snackbar';
import { SortingMenuProps } from '../SortingMenu';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps, TableCellProps } from '../Table';

export interface Localization {
  ESAlertClose: Pick<AlertCloseProps, 'label'>;
  ESAudioPlayer: Pick<
    AudioPlayerProps,
    | 'labelBack'
    | 'labelCurrent'
    | 'labelDownload'
    | 'labelMute'
    | 'labelOptions'
    | 'labelPause'
    | 'labelPlay'
    | 'labelRate'
    | 'labelRateNormal'
    | 'labelUnmute'
    | 'labelVolume'
  >;
  ESAutocompleteMenu: Pick<
    AutocompleteMenuProps<unknown>,
    'labelNoOptions' | 'labelNoMatches' | 'labelLoading' | 'labelSearch' | 'labelSearchClear'
  >;
  ESBreadcrumbs: Pick<BreadcrumbsProps, 'labelButtonMore'>;
  ESCalendarHead: Pick<CalendarHeadProps, 'getWeekDays'>;
  ESChips: Pick<ChipsProps, 'labelHide' | 'labelShow'>;
  ESDialogArrow: Pick<DialogArrowProps, 'labelPrev' | 'labelNext'>;
  ESDialogClose: Pick<DialogCloseProps, 'label' | 'labelEscapeKey'>;
  ESFileInfoName: Pick<FileInfoNameProps, 'labelDelete'>;
  ESFiltersFilter: Pick<FiltersFilterProps, 'labelHide' | 'labelShow'>;
  ESFiltersHeader: Pick<FiltersHeaderProps, 'labelFilters' | 'labelReset'>;
  ESFiltersFormGroup: Pick<FiltersFormGroupProps, 'labelHide' | 'labelShow'>;
  ESGalleryActions: Pick<GalleryActionsProps, 'labelClose' | 'labelThumbnails'>;
  ESGalleryDescription: Pick<GalleryDescriptionProps, 'labelCollapse' | 'labelExpand'>;
  ESGalleryMeta: Pick<GalleryMetaProps, 'labelClose'>;
  ESGallerySwiper: Pick<GallerySwiperProps, 'labelNext' | 'labelPrev'>;
  ESPaginationPages: Pick<PaginationPagesProps, 'labelPrevPage' | 'labelNextPage' | 'labelPage'>;
  ESPaginationRange: Pick<PaginationRangeProps, 'labelItemsPerPage' | 'labelOf'>;
  ESPasswordField: Pick<PasswordFieldProps, 'labelHidePassword' | 'labelShowPassword'>;
  ESPrice: Pick<PriceProps, 'locales'>;
  ESSidebarToggle: Pick<SidebarToggleProps, 'labelOpen' | 'labelHide'>;
  ESSidebarItem: Pick<SidebarItemProps, 'labelOpen' | 'labelHide'>;
  ESSFSSearch: Pick<SFSSearchProps, 'ariaLabel' | 'placeholder' | 'labelClear'>;
  ESSFSSorting: Pick<SFSSortingProps, 'labelButton'>;
  ESSFSFilters: Pick<SFSFiltersProps, 'labelButton' | 'labelHeader' | 'labelClose' | 'labelReset'>;
  ESSFSChips: Pick<SFSChipsProps, 'labelDelete'>;
  ESSnackbarClose: Pick<SnackbarCloseProps, 'label'>;
  ESSortingMenu: Pick<
    SortingMenuProps,
    | 'labelAsc'
    | 'labelDesc'
    | 'labelResetButton'
    | 'labelSortOrder'
    | 'labelSortTooltip'
    | 'labelMultisortTitle'
    | 'labelMultisortLMB'
    | 'labelMultisortMobileOn'
    | 'labelMultisortMobileOff'
  >;
  ESFormatSize: Pick<FormatSizeProps, 'metricUnits' | 'binaryUnits'>;
  ESSwiperButton: Pick<SwiperButtonProps, 'labelPrev' | 'labelNext'>;
  ESTableActions: Pick<TableActionsProps, 'label'>;
  ESTableCell: Pick<TableCellProps, 'labelResize'>;
  ESMadeBy: Pick<MadeByProps, 'text'>;
}

export const en: Localization = {
  ESAlertClose: {
    label: 'Close',
  },
  ESAudioPlayer: {
    labelBack: 'Back',
    labelCurrent: 'Current playback time',
    labelDownload: 'Download',
    labelMute: 'Mute',
    labelOptions: 'Options',
    labelPause: 'Pause',
    labelPlay: 'Play',
    labelRate: 'Rate',
    labelRateNormal: 'Normal',
    labelUnmute: 'Unmute',
    labelVolume: 'Volume',
  },
  ESAutocompleteMenu: {
    labelNoOptions: 'No options',
    labelNoMatches: 'No matches',
    labelLoading: 'Loading',
    labelSearch: 'Search',
    labelSearchClear: 'Reset',
  },
  ESBreadcrumbs: {
    labelButtonMore: 'More',
  },
  ESCalendarHead: {
    getWeekDays: () => ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  },
  ESChips: {
    labelHide: 'Hide',
    labelShow: 'More',
  },
  ESDialogArrow: {
    labelPrev: 'Previous',
    labelNext: 'Next',
  },
  ESDialogClose: {
    label: 'Close',
    labelEscapeKey: 'Esc',
  },
  ESFileInfoName: {
    labelDelete: 'Delete',
  },
  ESFiltersFilter: {
    labelHide: 'Hide',
    labelShow: 'Show',
  },
  ESFiltersHeader: {
    labelFilters: 'Filters',
    labelReset: 'Reset all',
  },
  ESFiltersFormGroup: {
    labelHide: 'Hide',
    labelShow: 'Show all',
  },
  ESFormatSize: {
    metricUnits: ['B', 'KB', 'MB', 'GB', 'TB'],
    binaryUnits: ['B', 'KiB', 'MiB', 'GiB', 'TiB'],
  },
  ESGalleryActions: {
    labelClose: 'Close',
    labelThumbnails: 'Thumbnails',
  },
  ESGalleryDescription: {
    labelCollapse: 'Collapse description',
    labelExpand: 'Expand description',
  },
  ESGalleryMeta: {
    labelClose: 'Close',
  },
  ESGallerySwiper: {
    labelNext: 'Next photo',
    labelPrev: 'Previous photo',
  },
  ESPaginationPages: {
    labelPrevPage: 'Go to previous page',
    labelNextPage: 'Go to next page',
    labelPage: 'page',
  },
  ESPaginationRange: {
    labelItemsPerPage: 'Per:',
    labelOf: 'of',
  },
  ESPasswordField: {
    labelHidePassword: 'Hide',
    labelShowPassword: 'Show',
  },
  ESPrice: {
    locales: 'en-US',
  },
  ESSidebarToggle: {
    labelOpen: 'Expand',
    labelHide: 'Collapse',
  },
  ESSidebarItem: {
    labelOpen: 'Show nested list',
    labelHide: 'Hide nested list',
  },
  ESSFSSearch: {
    ariaLabel: 'Search',
    placeholder: 'Search',
    labelClear: 'Clear',
  },
  ESSFSSorting: {
    labelButton: 'Sorting',
  },
  ESSFSFilters: {
    labelButton: 'Filters',
    labelHeader: 'Filters',
    labelClose: 'Close',
    labelReset: 'Reset all filters',
  },
  ESSFSChips: {
    labelDelete: 'Reset all filters',
  },
  ESSnackbarClose: {
    label: 'Close',
  },
  ESSortingMenu: {
    labelAsc: 'Ascending',
    labelDesc: 'Descending',
    labelResetButton: 'Reset',
    labelSortOrder: 'The sort order',
    labelSortTooltip: 'Sort by properties',
    labelMultisortTitle: 'Multisort',
    labelMultisortLMB: 'LMB',
    labelMultisortMobileOn: 'Multisort enabled',
    labelMultisortMobileOff: 'Hold to multisort',
  },
  ESSwiperButton: {
    labelPrev: 'Previous slide',
    labelNext: 'Next slide',
  },
  ESTableActions: {
    label: 'Selected',
  },
  ESTableCell: {
    labelResize: 'Resize',
  },
  ESMadeBy: {
    text: 'Made by',
  },
};

export const ru: Localization = {
  ESAlertClose: {
    label: 'Закрыть',
  },
  ESAudioPlayer: {
    labelBack: 'Назад',
    labelCurrent: 'Текущее время воспроизведения',
    labelDownload: 'Скачать',
    labelMute: 'Выключить звук',
    labelOptions: 'Опции',
    labelPause: 'Остановить воспроизведение',
    labelPlay: 'Начать воспроизведение',
    labelRate: 'Скорость',
    labelRateNormal: 'Обычная',
    labelUnmute: 'Включить звук',
    labelVolume: 'Громкость',
  },
  ESAutocompleteMenu: {
    labelNoOptions: 'Ничего нет',
    labelNoMatches: 'Совпадений нет',
    labelLoading: 'Загрузка',
    labelSearch: 'Поиск по списку',
    labelSearchClear: 'Сбросить',
  },
  ESBreadcrumbs: {
    labelButtonMore: 'Ещё',
  },
  ESCalendarHead: {
    getWeekDays: () => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  },
  ESChips: {
    labelHide: 'Скрыть',
    labelShow: 'Ещё',
  },
  ESDialogArrow: {
    labelPrev: 'Назад',
    labelNext: 'Вперёд',
  },
  ESDialogClose: {
    label: 'Закрыть',
    labelEscapeKey: 'Esc',
  },
  ESFileInfoName: {
    labelDelete: 'Удалить',
  },
  ESFiltersFilter: {
    labelHide: 'Скрыть',
    labelShow: 'Показать',
  },
  ESFiltersHeader: {
    labelFilters: 'Фильтры',
    labelReset: 'Сбросить всё',
  },
  ESFiltersFormGroup: {
    labelHide: 'Скрыть',
    labelShow: 'Показать всё',
  },
  ESFormatSize: {
    metricUnits: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'],
    binaryUnits: ['Б', 'КиБ', 'МиБ', 'ГиБ', 'ТиБ'],
  },
  ESGalleryActions: {
    labelClose: 'Закрыть',
    labelThumbnails: 'Миниатюры',
  },
  ESGalleryDescription: {
    labelCollapse: 'Свернуть описание',
    labelExpand: 'Развернуть описание',
  },
  ESGalleryMeta: {
    labelClose: 'Закрыть',
  },
  ESGallerySwiper: {
    labelNext: 'Следующее фото',
    labelPrev: 'Предыдущее фото',
  },
  ESPaginationPages: {
    labelPrevPage: 'Предыдущая страница',
    labelNextPage: 'Следующая страница',
    labelPage: 'стр.',
  },
  ESPaginationRange: {
    labelItemsPerPage: 'По:',
    labelOf: 'из',
  },
  ESPasswordField: {
    labelHidePassword: 'Скрыть',
    labelShowPassword: 'Показать',
  },
  ESPrice: {
    locales: 'ru-RU',
  },
  ESSidebarToggle: {
    labelOpen: 'Развернуть',
    labelHide: 'Свернуть',
  },
  ESSidebarItem: {
    labelOpen: 'Показать вложенный список',
    labelHide: 'Скрыть вложенный список',
  },
  ESSFSSearch: {
    ariaLabel: 'Поиск',
    placeholder: 'Поиск',
    labelClear: 'Сбросить',
  },
  ESSFSSorting: {
    labelButton: 'Сортировка',
  },
  ESSFSFilters: {
    labelButton: 'Фильтры',
    labelHeader: 'Фильтры',
    labelClose: 'Закрыть',
    labelReset: 'Сбросить все фильтры',
  },
  ESSFSChips: {
    labelDelete: 'Сбросить все фильтры',
  },
  ESSnackbarClose: {
    label: 'Закрыть',
  },
  ESSortingMenu: {
    labelAsc: 'По возрастанию',
    labelDesc: 'По убыванию',
    labelResetButton: 'Сбросить',
    labelSortOrder: 'Порядок сортировки',
    labelSortTooltip: 'Сортировка по свойствам',
    labelMultisortTitle: 'Мультисортировка',
    labelMultisortLMB: 'ЛКМ',
    labelMultisortMobileOn: 'Мультисортировка включена',
    labelMultisortMobileOff: 'Удерживайте для мультисортировки',
  },
  ESSwiperButton: {
    labelPrev: 'Предыдущий слайд',
    labelNext: 'Следующий слайд',
  },
  ESTableActions: {
    label: 'Выбрано',
  },
  ESTableCell: {
    labelResize: 'Изменить ширину',
  },
  ESMadeBy: {
    text: 'Сделано в',
  },
};
