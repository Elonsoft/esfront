// eslint-disable-next-line
import type {} from '@mui/material/themeCssVarsAugmentation';

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BreakpointOverrides,
  styled,
  Components,
  ComponentNameToClassKey,
  ComponentsProps,
  ComponentsPropsList,
} from '@mui/material/styles';
import { FormControlPropsSizeOverrides } from '@mui/material/FormControl';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase';
import { TextFieldPropsSizeOverrides } from '@mui/material/TextField';

import {
  AlertActionsClassKey,
  AlertActionsProps,
  AlertClassKey,
  AlertCloseClassKey,
  AlertCloseProps,
  AlertProps,
  AlertTitleClassKey,
  AlertTitleProps,
} from './components/Alert';
import { AppBarClassKey, AppBarProps } from './components/AppBar';
import { FormControlLabelClassKey, FormControlLabelProps } from './components/FormControlLabel';
import { AudioPlayerClassKey, AudioPlayerProps } from './components/AudioPlayer';
import { AutocompleteClassKey, AutocompleteProps } from './components/Autocomplete';
import { AutocompleteFieldClassKey, AutocompleteFieldProps } from './components/AutocompleteField';
import {
  AutocompleteMenuClassKey,
  AutocompleteMenuFooterClassKey,
  AutocompleteMenuFooterProps,
  AutocompleteMenuHeaderClassKey,
  AutocompleteMenuHeaderProps,
  AutocompleteMenuProps,
} from './components/AutocompleteMenu';
import { AvatarGroupClassKey, AvatarGroupProps } from './components/AvatarGroup';
import {
  BannerActionsClassKey,
  BannerActionsProps,
  BannerClassKey,
  BannerProps,
  BannerTitleClassKey,
  BannerTitleProps,
} from './components/Banner';
import { BottomSheetClassKey, BottomSheetProps } from './components/BottomSheet';
import { BreadcrumbClassKey, BreadcrumbProps, BreadcrumbsClassKey, BreadcrumbsProps } from './components/Breadcrumbs';
import { ButtonClassKey, ButtonOwnProps } from './components/Button';
import { ButtonBaseClassKey, ButtonBaseProps } from './components/ButtonBase';
import {
  CalendarButtonClassKey,
  CalendarButtonProps,
  CalendarClassKey,
  CalendarHeadClassKey,
  CalendarHeadProps,
  CalendarProps,
} from './components/Calendar';
import { CheckboxClassKey, CheckboxProps, CheckboxIconClassKey, CheckboxIconProps } from './components/Checkbox';
import { ChipClassKey, ChipProps } from './components/Chip';
import { ChipsClassKey, ChipsProps } from './components/Chips';
import {
  DialogActionsClassKey,
  DialogActionsProps,
  DialogArrowClassKey,
  DialogArrowProps,
  DialogClassKey,
  DialogCloseClassKey,
  DialogCloseProps,
  DialogContentClassKey,
  DialogContentProps,
  DialogProps,
  DialogTitleClassKey,
  DialogTitleProps,
} from './components/Dialog';
import { DividerClassKey, DividerProps } from './components/Divider';
import { DropzoneClassKey, DropzoneProps } from './components/Dropzone';
import { EmptyStateClassKey, EmptyStateProps } from './components/EmptyState';
import { EmptyStateCompactClassKey, EmptyStateCompactProps } from './components/EmptyStateCompact';
import {
  ErrorPageActionsClassKey,
  ErrorPageActionsProps,
  ErrorPageClassKey,
  ErrorPageDescriptionClassKey,
  ErrorPageDescriptionProps,
  ErrorPageFooterClassKey,
  ErrorPageFooterProps,
  ErrorPageHeadingClassKey,
  ErrorPageHeadingProps,
  ErrorPageLogoClassKey,
  ErrorPageLogoProps,
  ErrorPageProps,
  ErrorPageStatusClassKey,
  ErrorPageStatusProps,
} from './components/ErrorPage';
import {
  FileIconBadgeClassKey,
  FileIconBadgeProps,
  FileIconClassKey,
  FileIconProps,
  FileIconTextClassKey,
  FileIconTextProps,
} from './components/FileIcon';
import {
  FileInfoClassKey,
  FileInfoContentClassKey,
  FileInfoContentProps,
  FileInfoMetaClassKey,
  FileInfoMetaProps,
  FileInfoMetaSeparatorClassKey,
  FileInfoMetaSeparatorProps,
  FileInfoNameClassKey,
  FileInfoNameProps,
  FileInfoProps,
} from './components/FileInfo';
import {
  FiltersClassKey,
  FiltersProps,
  FiltersContentClassKey,
  FiltersContentProps,
  FiltersFilterClassKey,
  FiltersFilterProps,
  FiltersFooterClassKey,
  FiltersFooterProps,
  FiltersFormControlLabelClassKey,
  FiltersFormControlLabelProps,
  FiltersFormGroupClassKey,
  FiltersFormGroupProps,
  FiltersHeaderClassKey,
  FiltersHeaderProps,
} from './components/Filters';
import { FlagClassKey } from './components/Flags';
import { FormatDateProps } from './components/FormatDate';
import { FormatSizeProps } from './components/FormatSize';
import {
  GalleryActionsButtonGroupClassKey,
  GalleryActionsButtonGroupProps,
  GalleryActionsClassKey,
  GalleryActionsProps,
  GalleryClassKey,
  GalleryDescriptionClassKey,
  GalleryDescriptionProps,
  GalleryMetaClassKey,
  GalleryMetaProps,
  GalleryMetaSeparatorClassKey,
  GalleryMetaSeparatorProps,
  GalleryMetaTextClassKey,
  GalleryMetaTextProps,
  GalleryPanelClassKey,
  GalleryPanelProps,
  GalleryProps,
  GallerySwiperClassKey,
  GallerySwiperImageClassKey,
  GallerySwiperImageProps,
  GallerySwiperProps,
  GalleryThumbnailsClassKey,
  GalleryThumbnailsImageClassKey,
  GalleryThumbnailsImageProps,
  GalleryThumbnailsItemClassKey,
  GalleryThumbnailsItemProps,
  GalleryThumbnailsProps,
} from './components/Gallery';
import { ImageZoomClassKey, ImageZoomProps } from './components/ImageZoom';
import { InformationIconClassKey, InformationIconProps } from './components/InformationIcon';
import { KbdProps } from './components/Kbd';
import { LinearProgressClassKey, LinearProgressProps } from './components/LinearProgress';
import { LinkClassKey, LinkProps } from './components/Link';
import { LoadingButtonClassKey, LoadingButtonProps } from './components/LoadingButton';
import { MadeByClassKey, MadeByProps } from './components/MadeBy';
import { MenuGroupClassKey, MenuGroupProps } from './components/MenuGroup';
import { MenuItemClassKey, MenuItemProps } from './components/MenuItem';
import {
  PageHGroupActionsClassKey,
  PageHGroupActionsProps,
  PageHGroupBreadcrumbsClassKey,
  PageHGroupBreadcrumbsProps,
  PageHGroupClassKey,
  PageHGroupHeadingClassKey,
  PageHGroupHeadingProps,
  PageHGroupMainClassKey,
  PageHGroupMainProps,
  PageHGroupProps,
  PageHGroupStatusClassKey,
  PageHGroupStatusProps,
} from './components/PageHGroup';
import {
  PaginationClassKey,
  PaginationPagesClassKey,
  PaginationPagesProps,
  PaginationProps,
  PaginationRangeClassKey,
  PaginationRangeProps,
} from './components/Pagination';
import { PasswordFieldClassKey, PasswordFieldProps } from './components/PasswordField';
import { PropertyClassKey, PropertyProps } from './components/Property';
import { PriceClassKey, PriceProps } from './components/Price';
import { RadioClassKey, RadioIconClassKey, RadioIconProps, RadioProps } from './components/Radio';
import { RadioGroupClassKey, RadioGroupProps } from './components/RadioGroup';
import { RibbonBadgeClassKey, RibbonBadgeProps } from './components/RibbonBadge';
import { SearchClassKey, SearchProps } from './components/Search';
import { PhoneFieldClassKey, PhoneFieldProps } from './components/PhoneField';
import {
  SFSButtonClassKey,
  SFSButtonProps,
  SFSChipsProps,
  SFSChipsClassKey,
  SFSClassKey,
  SFSFiltersClassKey,
  SFSFiltersGroupClassKey,
  SFSFiltersGroupProps,
  SFSFiltersProps,
  SFSProps,
  SFSRowClassKey,
  SFSRowProps,
  SFSSearchClassKey,
  SFSSearchProps,
  SFSSortingClassKey,
  SFSSortingProps,
} from './components/SFS';
import {
  SidebarClassKey,
  SidebarDividerClassKey,
  SidebarDividerProps,
  SidebarItemClassKey,
  SidebarItemProps,
  SidebarMenuClassKey,
  SidebarMenuProps,
  SidebarProps,
  SidebarScrollableClassKey,
  SidebarScrollableProps,
  SidebarSpacerClassKey,
  SidebarSpacerProps,
  SidebarToggleClassKey,
  SidebarToggleProps,
} from './components/Sidebar';
import { SidenavClassKey, SidenavItemClassKey, SidenavItemProps, SidenavProps } from './components/Sidenav';
import { SnackbarClassKey, SnackbarProps, SnackbarCloseProps, SnackbarCloseClassKey } from './components/Snackbar';
import { SortingMenuClassKey, SortingMenuProps } from './components/SortingMenu';
import {
  SpinnerDashRingClassKey,
  SpinnerDashRingProps,
  SpinnerFadingBarsClassKey,
  SpinnerFadingBarsProps,
  SpinnerFadingDotsClassKey,
  SpinnerFadingDotsProps,
  SpinnerFadingDoubleRingClassKey,
  SpinnerFadingDoubleRingProps,
  SpinnerFadingRingClassKey,
  SpinnerFadingRingProps,
  SpinnerRingClassKey,
  SpinnerRingProps,
} from './components/Spinner';
import { SvgIconClassKey, SvgIconProps } from './components/SvgIcon';
import {
  SwiperButtonClassKey,
  SwiperButtonProps,
  SwiperClassKey,
  SwiperPaginationClassKey,
  SwiperPaginationProps,
  SwiperProps,
} from './components/Swiper';
import { SwitchClassKey, SwitchProps } from './components/Switch';
import { SwitchBaseClassKey, SwitchBaseProps } from './components/SwitchBase';
import { TabBarClassKey, TabBarItemClassKey, TabBarItemProps, TabBarProps } from './components/TabBar';
import {
  TableActionsClassKey,
  TableActionsProps,
  TableItemClassKey,
  TableItemProps,
  TableBodyClassKey,
  TableBodyProps,
  TableCellClassKey,
  TableCellProps,
  TableClassKey,
  TableFootClassKey,
  TableFootProps,
  TableHeadClassKey,
  TableHeadProps,
  TableProps,
  TableRowClassKey,
  TableRowProps,
  TableScrollbarClassKey,
  TableScrollbarProps,
  TableTextClassKey,
  TableTextProps,
} from './components/Table';
import { TagClassKey, TagProps } from './components/Tag';
import {
  TabClassKey,
  TabProps,
  TabsClassKey,
  TabScrollButtonClassKey,
  TabScrollButtonProps,
  TabsProps,
} from './components/Tabs';
import { TextFieldGroupClassKey, TextFieldGroupProps } from './components/TextFieldGroup';
import { TouchRippleClassKey, TouchRippleProps } from './components/TouchRipple';
import { TooltipClassKey, TooltipProps } from './components/Tooltip';
import { AvatarProps } from './components';
import { BadgeProps, BadgeClassKey } from './components/Badge';
import { BadgePlacementControlProps, BadgePlacementControlClassKey } from './components/BadgePlacementControl';

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    ESAlert: AlertProps;
    ESAlertActions: AlertActionsProps;
    ESAlertClose: AlertCloseProps;
    ESAppBar: AppBarProps;
    ESAvatar: AvatarProps;
    ESAvatarGroup: AvatarGroupProps;
    ESAlertTitle: AlertTitleProps;
    ESAudioPlayer: AudioPlayerProps;
    ESAutocomplete: AutocompleteProps<any>;
    ESAutocompleteField: AutocompleteFieldProps<any>;
    ESAutocompleteMenu: AutocompleteMenuProps<any>;
    ESAutocompleteMenuFooter: AutocompleteMenuFooterProps;
    ESAutocompleteMenuHeader: AutocompleteMenuHeaderProps;
    ESBanner: BannerProps;
    ESBannerActions: BannerActionsProps;
    ESBannerTitle: BannerTitleProps;
    ESBadge: BadgeProps;
    ESBadgePlacementControl: BadgePlacementControlProps;
    ESBreadcrumbs: BreadcrumbsProps;
    ESBreadcrumb: BreadcrumbProps;
    ESBottomSheet: BottomSheetProps;
    ESButton: ButtonOwnProps;
    ESButtonBase: ButtonBaseProps;
    ESCalendar: CalendarProps;
    ESCalendarButton: CalendarButtonProps;
    ESCalendarHead: CalendarHeadProps;
    ESCheckbox: CheckboxProps;
    ESCheckboxIcon: CheckboxIconProps;
    ESChip: ChipProps;
    ESChips: ChipsProps;
    ESDialog: DialogProps;
    ESDialogActions: DialogActionsProps;
    ESDialogArrow: DialogArrowProps;
    ESDialogClose: DialogCloseProps;
    ESDialogContent: DialogContentProps;
    ESDialogTitle: DialogTitleProps;
    ESDivider: DividerProps;
    ESDropzone: DropzoneProps;
    ESEmptyState: EmptyStateProps;
    ESEmptyStateCompact: EmptyStateCompactProps;
    ESErrorPage: ErrorPageProps;
    ESErrorPageActions: ErrorPageActionsProps;
    ESErrorPageDescription: ErrorPageDescriptionProps;
    ESErrorPageFooter: ErrorPageFooterProps;
    ESErrorPageHeading: ErrorPageHeadingProps;
    ESErrorPageLogo: ErrorPageLogoProps;
    ESErrorPageStatus: ErrorPageStatusProps;
    ESFileIcon: FileIconProps;
    ESFileIconBadge: FileIconBadgeProps;
    ESFileIconText: FileIconTextProps;
    ESFileInfo: FileInfoProps;
    ESFileInfoContent: FileInfoContentProps;
    ESFileInfoMeta: FileInfoMetaProps;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorProps;
    ESFileInfoName: FileInfoNameProps;
    ESFilters: FiltersProps;
    ESFiltersContent: FiltersContentProps;
    ESFiltersFilter: FiltersFilterProps;
    ESFiltersFooter: FiltersFooterProps;
    ESFiltersFormControlLabel: FiltersFormControlLabelProps;
    ESFiltersFormGroup: FiltersFormGroupProps;
    ESFiltersHeader: FiltersHeaderProps;
    ESFormatDate: FormatDateProps;
    ESFormatSize: FormatSizeProps;
    ESFormControlLabel: FormControlLabelProps;
    ESGallery: GalleryProps;
    ESGalleryActions: GalleryActionsProps;
    ESGalleryActionsButtonGroup: GalleryActionsButtonGroupProps;
    ESGalleryDescription: GalleryDescriptionProps;
    ESGalleryMeta: GalleryMetaProps;
    ESGalleryMetaSeparator: GalleryMetaSeparatorProps;
    ESGalleryMetaText: GalleryMetaTextProps;
    ESGalleryPanel: GalleryPanelProps;
    ESGallerySwiper: GallerySwiperProps;
    ESGallerySwiperImage: GallerySwiperImageProps;
    ESGalleryThumbnails: GalleryThumbnailsProps;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageProps;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemProps;
    ESImageZoom: ImageZoomProps;
    ESInformationIcon: InformationIconProps;
    ESKbd: KbdProps;
    ESLinearProgress: LinearProgressProps;
    ESLink: LinkProps;
    ESLoadingButton: LoadingButtonProps;
    ESMenuItem: MenuItemProps;
    ESMenuGroup: MenuGroupProps;
    ESMadeBy: MadeByProps;
    ESPageHGroup: PageHGroupProps;
    ESPageHGroupActions: PageHGroupActionsProps;
    ESPageHGroupBreadcrumbs: PageHGroupBreadcrumbsProps;
    ESPageHGroupHeading: PageHGroupHeadingProps;
    ESPageHGroupMain: PageHGroupMainProps;
    ESPageHGroupStatus: PageHGroupStatusProps;
    ESPagination: PaginationProps;
    ESPaginationPages: PaginationPagesProps;
    ESPaginationRange: PaginationRangeProps;
    ESPasswordField: PasswordFieldProps;
    ESPhoneField: PhoneFieldProps;
    ESProperty: PropertyProps;
    ESPrice: PriceProps;
    ESRadio: RadioProps;
    ESRadioIcon: RadioIconProps;
    ESRadioGroup: RadioGroupProps;
    ESRibbonBadge: RibbonBadgeProps;
    ESSearch: SearchProps;
    ESSidebar: SidebarProps;
    ESSidebarSpacer: SidebarSpacerProps;
    ESSidebarToggle: SidebarToggleProps;
    ESSidebarItem: SidebarItemProps;
    ESSidebarDivider: SidebarDividerProps;
    ESSidebarMenu: SidebarMenuProps;
    ESSidebarScrollable: SidebarScrollableProps;
    ESSidenav: SidenavProps;
    ESSidenavItem: SidenavItemProps;
    ESSFS: SFSProps;
    ESSFSButton: SFSButtonProps;
    ESSFSChips: SFSChipsProps;
    ESSFSSearch: SFSSearchProps;
    ESSFSSorting: SFSSortingProps;
    ESSFSFilters: SFSFiltersProps;
    ESSFSFiltersGroup: SFSFiltersGroupProps;
    ESSFSRow: SFSRowProps;
    ESSpinnerDashRing: SpinnerDashRingProps;
    ESSpinnerFadingBars: SpinnerFadingBarsProps;
    ESSpinnerFadingDots: SpinnerFadingDotsProps;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingProps;
    ESSpinnerFadingRing: SpinnerFadingRingProps;
    ESSpinnerRing: SpinnerRingProps;
    ESSnackbar: SnackbarProps;
    ESSnackbarClose: SnackbarCloseProps;
    ESSortingMenu: SortingMenuProps;
    ESSvgIcon: SvgIconProps;
    ESSwiper: SwiperProps;
    ESSwitch: SwitchProps;
    ESSwitchBase: SwitchBaseProps;
    ESSwiperButton: SwiperButtonProps;
    ESSwiperPagination: SwiperPaginationProps;
    ESTabBar: TabBarProps;
    ESTabBarItem: TabBarItemProps;
    ESTable: TableProps;
    ESTableActions: TableActionsProps;
    ESTableItem: TableItemProps;
    ESTableBody: TableBodyProps;
    ESTableCell: TableCellProps;
    ESTableFoot: TableFootProps;
    ESTableHead: TableHeadProps;
    ESTableRow: TableRowProps;
    ESTableScrollbar: TableScrollbarProps;
    ESTableText: TableTextProps;
    ESTag: TagProps;
    ESTabs: TabsProps;
    ESTab: TabProps;
    ESTabScrollButton: TabScrollButtonProps;
    ESTouchRipple: TouchRippleProps;
    ESTextFieldGroup: TextFieldGroupProps;
    ESTooltip: TooltipProps;
  }
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    ESAlert: AlertClassKey;
    ESAlertActions: AlertActionsClassKey;
    ESAlertClose: AlertCloseClassKey;
    ESAppBar: AppBarClassKey;
    ESAvatar: AvatarClasses;
    ESAvatarGroup: AvatarGroupClassKey;
    ESAlertTitle: AlertTitleClassKey;
    ESAudioPlayer: AudioPlayerClassKey;
    ESAutocomplete: AutocompleteClassKey;
    ESAutocompleteField: AutocompleteFieldClassKey;
    ESAutocompleteMenu: AutocompleteMenuClassKey;
    ESAutocompleteMenuFooter: AutocompleteMenuFooterClassKey;
    ESAutocompleteMenuHeader: AutocompleteMenuHeaderClassKey;
    ESBanner: BannerClassKey;
    ESBannerActions: BannerActionsClassKey;
    ESBannerTitle: BannerTitleClassKey;
    ESBadge: BadgeClassKey;
    ESBadgePlacementControl: BadgePlacementControlClassKey;
    ESBreadcrumbs: BreadcrumbsClassKey;
    ESBreadcrumb: BreadcrumbClassKey;
    ESBottomSheet: BottomSheetClassKey;
    ESButton: ButtonClassKey;
    ESButtonBase: ButtonBaseClassKey;
    ESCalendar: CalendarClassKey;
    ESCalendarButton: CalendarButtonClassKey;
    ESCalendarHead: CalendarHeadClassKey;
    ESCheckbox: CheckboxClassKey;
    ESCheckboxIcon: CheckboxIconClassKey;
    ESChip: ChipClassKey;
    ESChips: ChipsClassKey;
    ESDialog: DialogClassKey;
    ESDialogActions: DialogActionsClassKey;
    ESDialogArrow: DialogArrowClassKey;
    ESDialogClose: DialogCloseClassKey;
    ESDialogContent: DialogContentClassKey;
    ESDialogTitle: DialogTitleClassKey;
    ESDivider: DividerClassKey;
    ESDropzone: DropzoneClassKey;
    ESEmptyState: EmptyStateClassKey;
    ESEmptyStateCompact: EmptyStateCompactClassKey;
    ESErrorPage: ErrorPageClassKey;
    ESErrorPageActions: ErrorPageActionsClassKey;
    ESErrorPageDescription: ErrorPageDescriptionClassKey;
    ESErrorPageFooter: ErrorPageFooterClassKey;
    ESErrorPageHeading: ErrorPageHeadingClassKey;
    ESErrorPageLogo: ErrorPageLogoClassKey;
    ESErrorPageStatus: ErrorPageStatusClassKey;
    ESFileIcon: FileIconClassKey;
    ESFileIconBadge: FileIconBadgeClassKey;
    ESFileIconText: FileIconTextClassKey;
    ESFileInfo: FileInfoClassKey;
    ESFileInfoContent: FileInfoContentClassKey;
    ESFileInfoMeta: FileInfoMetaClassKey;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorClassKey;
    ESFileInfoName: FileInfoNameClassKey;
    ESFilters: FiltersClassKey;
    ESFiltersContent: FiltersContentClassKey;
    ESFiltersFilter: FiltersFilterClassKey;
    ESFiltersFooter: FiltersFooterClassKey;
    ESFiltersFormControlLabel: FiltersFormControlLabelClassKey;
    ESFiltersFormGroup: FiltersFormGroupClassKey;
    ESFiltersHeader: FiltersHeaderClassKey;
    ESFormControlLabel: FormControlLabelClassKey;
    ESFlag: FlagClassKey;
    ESGallery: GalleryClassKey;
    ESGalleryActions: GalleryActionsClassKey;
    ESGalleryActionsButtonGroup: GalleryActionsButtonGroupClassKey;
    ESGalleryDescription: GalleryDescriptionClassKey;
    ESGalleryMeta: GalleryMetaClassKey;
    ESGalleryMetaSeparator: GalleryMetaSeparatorClassKey;
    ESGalleryMetaText: GalleryMetaTextClassKey;
    ESGalleryPanel: GalleryPanelClassKey;
    ESGallerySwiper: GallerySwiperClassKey;
    ESGallerySwiperImage: GallerySwiperImageClassKey;
    ESGalleryThumbnails: GalleryThumbnailsClassKey;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageClassKey;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemClassKey;
    ESImageZoom: ImageZoomClassKey;
    ESInformationIcon: InformationIconClassKey;
    ESLinearProgress: LinearProgressClassKey;
    ESLink: LinkClassKey;
    ESLoadingButton: LoadingButtonClassKey;
    ESMenuItem: MenuItemClassKey;
    ESMenuGroup: MenuGroupClassKey;
    ESMadeBy: MadeByClassKey;
    ESPageHGroup: PageHGroupClassKey;
    ESPageHGroupActions: PageHGroupActionsClassKey;
    ESPageHGroupBreadcrumbs: PageHGroupBreadcrumbsClassKey;
    ESPageHGroupHeading: PageHGroupHeadingClassKey;
    ESPageHGroupMain: PageHGroupMainClassKey;
    ESPageHGroupStatus: PageHGroupStatusClassKey;
    ESPagination: PaginationClassKey;
    ESPaginationPages: PaginationPagesClassKey;
    ESPaginationRange: PaginationRangeClassKey;
    ESPasswordField: PasswordFieldClassKey;
    ESPhoneField: PhoneFieldClassKey;
    ESProperty: PropertyClassKey;
    ESPrice: PriceClassKey;
    ESRadio: RadioClassKey;
    ESRadioIcon: RadioIconClassKey;
    ESRadioGroup: RadioGroupClassKey;
    ESRibbonBadge: RibbonBadgeClassKey;
    ESSearch: SearchClassKey;
    ESSidebar: SidebarClassKey;
    ESSidebarItem: SidebarItemClassKey;
    ESSidebarToggle: SidebarToggleClassKey;
    ESSidebarMenu: SidebarMenuClassKey;
    ESSidebarDivider: SidebarDividerClassKey;
    ESSidebarSpacer: SidebarSpacerClassKey;
    ESSidebarScrollable: SidebarScrollableClassKey;
    ESSidenav: SidenavClassKey;
    ESSidenavItem: SidenavItemClassKey;
    ESSFS: SFSClassKey;
    ESSFSButton: SFSButtonClassKey;
    ESSFSChips: SFSChipsClassKey;
    ESSFSSearch: SFSSearchClassKey;
    ESSFSSorting: SFSSortingClassKey;
    ESSFSFilters: SFSFiltersClassKey;
    ESSFSFiltersGroup: SFSFiltersGroupClassKey;
    ESSFSRow: SFSRowClassKey;
    ESSpinnerDashRing: SpinnerDashRingClassKey;
    ESSpinnerFadingBars: SpinnerFadingBarsClassKey;
    ESSpinnerFadingDots: SpinnerFadingDotsClassKey;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingClassKey;
    ESSpinnerFadingRing: SpinnerFadingRingClassKey;
    ESSpinnerRing: SpinnerRingClassKey;
    ESSnackbar: SnackbarClassKey;
    ESSnackbarClose: SnackbarCloseClassKey;
    ESSortingMenu: SortingMenuClassKey;
    ESSvgIcon: SvgIconClassKey;
    ESSwiper: SwiperClassKey;
    ESSwitch: SwitchClassKey;
    ESSwitchBase: SwitchBaseClassKey;
    ESSwiperButton: SwiperButtonClassKey;
    ESSwiperPagination: SwiperPaginationClassKey;
    ESTabBar: TabBarClassKey;
    ESTabBarItem: TabBarItemClassKey;
    ESTabs: TabsClassKey;
    ESTab: TabClassKey;
    ESTabScrollButton: TabScrollButtonClassKey;
    ESTable: TableClassKey;
    ESTableActions: TableActionsClassKey;
    ESTableItem: TableItemClassKey;
    ESTableBody: TableBodyClassKey;
    ESTableCell: TableCellClassKey;
    ESTableFoot: TableFootClassKey;
    ESTableHead: TableHeadClassKey;
    ESTableRow: TableRowClassKey;
    ESTableScrollbar: TableScrollbarClassKey;
    ESTableText: TableTextClassKey;
    ESTag: TagClassKey;
    ESTouchRipple: TouchRippleClassKey;
    ESTextFieldGroup: TextFieldGroupClassKey;
    ESTooltip: TooltipClassKey;
  }
}

declare module '@mui/material/styles/components' {
  interface Components {
    ESAlert?: {
      defaultProps?: ComponentsProps['ESAlert'];
    };
    ESAvatar?: {
      defaultProps?: ComponentsProps['ESAvatar'];
    };
    ESAvatarGroup?: {
      defaultProps?: ComponentsProps['ESAvatarGroup'];
    };
    ESAlertClose?: {
      defaultProps?: ComponentsProps['ESAlertClose'];
    };
    ESAlertActions?: {
      defaultProps?: ComponentsProps['ESAlertActions'];
    };
    ESAlertTitle?: {
      defaultProps?: ComponentsProps['ESAlertTitle'];
    };
    ESAppBar?: {
      defaultProps?: ComponentsProps['ESAppBar'];
    };
    ESAudioPlayer?: {
      defaultProps?: ComponentsProps['ESAudioPlayer'];
    };
    ESAutocomplete?: {
      defaultProps?: ComponentsProps['ESAutocomplete'];
    };
    ESAutocompleteField?: {
      defaultProps?: ComponentsProps['ESAutocompleteField'];
    };
    ESAutocompleteMenu?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenu'];
    };
    ESAutocompleteMenuFooter?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenuFooter'];
    };
    ESAutocompleteMenuHeader?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenuHeader'];
    };
    ESBanner?: {
      defaultProps?: ComponentsProps['ESBanner'];
    };
    ESBannerActions?: {
      defaultProps?: ComponentsProps['ESBannerActions'];
    };
    ESBannerTitle?: {
      defaultProps?: ComponentsProps['ESBannerTitle'];
    };
    ESBadge?: {
      defaultProps?: ComponentsProps['ESBadge'];
    };
    ESBadgePlacementControl?: {
      defaultProps?: ComponentsProps['ESBadgePlacementControl'];
    };
    ESBreadcrumbs?: {
      defaultProps?: ComponentsProps['ESBreadcrumbs'];
    };
    ESBreadcrumb?: {
      defaultProps?: ComponentsProps['ESBreadcrumb'];
    };
    ESBottomSheet?: {
      defaultProps?: ComponentsProps['ESBottomSheet'];
    };
    ESButton?: {
      defaultProps?: ComponentsProps['ESButton'];
    };
    ESButtonBase?: {
      defaultProps?: ComponentsProps['ESButtonBase'];
    };
    ESCalendar?: {
      defaultProps?: ComponentsProps['ESCalendar'];
    };
    ESCalendarButton?: {
      defaultProps?: ComponentsProps['ESCalendarButton'];
    };
    ESCalendarHead?: {
      defaultProps?: ComponentsProps['ESCalendarHead'];
    };
    ESCheckbox?: {
      defaultProps?: ComponentsProps['ESCheckbox'];
    };
    ESCheckboxIcon?: {
      defaultProps?: ComponentsProps['ESCheckboxIcon'];
    };
    ESChip?: {
      defaultProps?: ComponentsProps['ESChip'];
    };
    ESChips?: {
      defaultProps?: ComponentsProps['ESChips'];
    };
    ESDialog?: {
      defaultProps?: ComponentsProps['ESDialog'];
    };
    ESDialogActions?: {
      defaultProps?: ComponentsProps['ESDialogActions'];
    };
    ESDialogArrow?: {
      defaultProps?: ComponentsProps['ESDialogArrow'];
    };
    ESDialogClose?: {
      defaultProps?: ComponentsProps['ESDialogClose'];
    };
    ESDialogContent?: {
      defaultProps?: ComponentsProps['ESDialogContent'];
    };
    ESDialogTitle?: {
      defaultProps?: ComponentsProps['ESDialogTitle'];
    };
    ESDivider?: {
      defaultProps?: ComponentsProps['ESDivider'];
    };
    ESEmptyState?: {
      defaultProps?: ComponentsProps['ESEmptyState'];
    };
    ESEmptyStateCompact?: {
      defaultProps?: ComponentsProps['ESEmptyStateCompact'];
    };
    ESErrorPage?: {
      defaultProps?: ComponentsProps['ESErrorPage'];
    };
    ESErrorPageActions?: {
      defaultProps?: ComponentsProps['ESErrorPageActions'];
    };
    ESErrorPageDescription?: {
      defaultProps?: ComponentsProps['ESErrorPageDescription'];
    };
    ESErrorPageFooter?: {
      defaultProps?: ComponentsProps['ESErrorPageFooter'];
    };
    ESErrorPageHeading?: {
      defaultProps?: ComponentsProps['ESErrorPageHeading'];
    };
    ESErrorPageLogo?: {
      defaultProps?: ComponentsProps['ESErrorPageLogo'];
    };
    ESErrorPageStatus?: {
      defaultProps?: ComponentsProps['ESErrorPageStatus'];
    };
    ESGallery?: {
      defaultProps?: ComponentsProps['ESGallery'];
    };
    ESGalleryActions?: {
      defaultProps?: ComponentsProps['ESGalleryActions'];
    };
    ESGalleryActionsButtonGroup?: {
      defaultProps?: ComponentsProps['ESGalleryActionsButtonGroup'];
    };
    ESGalleryDescription?: {
      defaultProps?: ComponentsProps['ESGalleryDescription'];
    };
    ESGalleryMeta?: {
      defaultProps?: ComponentsProps['ESGalleryMeta'];
    };
    ESGalleryMetaSeparator?: {
      defaultProps?: ComponentsProps['ESGalleryMetaSeparator'];
    };
    ESGalleryMetaText?: {
      defaultProps?: ComponentsProps['ESGalleryMetaText'];
    };
    ESGalleryPanel?: {
      defaultProps?: ComponentsProps['ESGalleryPanel'];
    };
    ESGallerySwiper?: {
      defaultProps?: ComponentsProps['ESGallerySwiper'];
    };
    ESGallerySwiperImage?: {
      defaultProps?: ComponentsProps['ESGallerySwiperImage'];
    };
    ESGalleryThumbnails?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnails'];
    };
    ESGalleryThumbnailsImage?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnailsImage'];
    };
    ESGalleryThumbnailsItem?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnailsItem'];
    };
    ESImageZoom?: {
      defaultProps?: ComponentsProps['ESImageZoom'];
    };
    ESInformationIcon?: {
      defaultProps?: ComponentsProps['ESInformationIcon'];
    };
    ESSwiper?: {
      defaultProps?: ComponentsProps['ESSwiper'];
    };
    ESSwitch?: {
      defaultProps?: ComponentsProps['ESSwitch'];
    };
    ESSwitchBase?: {
      defaultProps?: ComponentsProps['ESSwitchBase'];
    };
    ESSwiperButton?: {
      defaultProps?: ComponentsProps['ESSwiperButton'];
    };
    ESSwiperPagination?: {
      defaultProps?: ComponentsProps['ESSwiperPagination'];
    };
    ESDropzone?: {
      defaultProps?: ComponentsProps['ESDropzone'];
    };
    ESFileIcon?: {
      defaultProps?: ComponentsProps['ESFileIcon'];
    };
    ESFileIconBadge?: {
      defaultProps?: ComponentsProps['ESFileIconBadge'];
    };
    ESFileIconText?: {
      defaultProps?: ComponentsProps['ESFileIconText'];
    };
    ESFileInfo?: {
      defaultProps?: ComponentsProps['ESFileInfo'];
    };
    ESFileInfoContent?: {
      defaultProps?: ComponentsProps['ESFileInfoContent'];
    };
    ESFileInfoMeta?: {
      defaultProps?: ComponentsProps['ESFileInfoMeta'];
    };
    ESFileInfoMetaSeparator?: {
      defaultProps?: ComponentsProps['ESFileInfoMetaSeparator'];
    };
    ESFileInfoName?: {
      defaultProps?: ComponentsProps['ESFileInfoName'];
    };
    ESFilters?: {
      defaultProps?: ComponentsProps['ESFilters'];
    };
    ESFiltersContent?: {
      defaultProps?: ComponentsProps['ESFiltersContent'];
    };
    ESFiltersFilter?: {
      defaultProps?: ComponentsProps['ESFiltersFilter'];
    };
    ESFiltersFooter?: {
      defaultProps?: ComponentsProps['ESFiltersFooter'];
    };
    ESFiltersFormControlLabel?: {
      defaultProps?: ComponentsProps['ESFiltersFormControlLabel'];
    };
    ESFiltersFormGroup?: {
      defaultProps?: ComponentsProps['ESFiltersFormGroup'];
    };
    ESFiltersHeader?: {
      defaultProps?: ComponentsProps['ESFiltersHeader'];
    };
    ESFormatDate?: {
      defaultProps?: ComponentsProps['ESFormatDate'];
    };
    ESFormatSize?: {
      defaultProps?: ComponentsProps['ESFormatSize'];
    };
    ESFormControlLabel?: {
      defaultProps?: ComponentsProps['ESFormControlLabel'];
    };
    ESKbd?: {
      defaultProps?: ComponentsProps['ESKbd'];
    };
    ESLinearProgress?: {
      defaultProps?: ComponentsProps['ESLinearProgress'];
    };
    ESLink?: {
      defaultProps?: ComponentsProps['ESLink'];
    };
    ESLoadingButton?: {
      defaultProps?: ComponentsProps['ESLoadingButton'];
    };
    ESMenuItem?: {
      defaultProps?: ComponentsProps['ESMenuItem'];
    };
    ESMenuGroup?: {
      defaultProps?: ComponentsProps['ESMenuGroup'];
    };
    ESMadeBy?: {
      defaultProps?: ComponentsProps['ESMadeBy'];
    };
    ESPageHGroup?: {
      defaultProps?: ComponentsProps['ESPageHGroup'];
    };
    ESPageHGroupActions?: {
      defaultProps?: ComponentsProps['ESPageHGroupActions'];
    };
    ESPageHGroupBreadcrumbs?: {
      defaultProps?: ComponentsProps['ESPageHGroupBreadcrumbs'];
    };
    ESPageHGroupHeading?: {
      defaultProps?: ComponentsProps['ESPageHGroupHeading'];
    };
    ESPageHGroupMain?: {
      defaultProps?: ComponentsProps['ESPageHGroupMain'];
    };
    ESPageHGroupStatus?: {
      defaultProps?: ComponentsProps['ESPageHGroupStatus'];
    };
    ESPagination?: {
      defaultProps?: ComponentsProps['ESPagination'];
    };
    ESPaginationPages?: {
      defaultProps?: ComponentsProps['ESPaginationPages'];
    };
    ESPaginationRange?: {
      defaultProps?: ComponentsProps['ESPaginationRange'];
    };
    ESPasswordField?: {
      defaultProps?: ComponentsProps['ESPasswordField'];
    };
    ESPhoneField?: {
      defaultProps?: ComponentsProps['ESPhoneField'];
    };
    ESProperty?: {
      defaultProps?: ComponentsProps['ESProperty'];
    };
    ESPrice?: {
      defaultProps?: ComponentsProps['ESPrice'];
    };
    ESRadio?: {
      defaultProps?: ComponentsProps['ESRadio'];
    };
    ESRadioIcon?: {
      defaultProps?: ComponentsProps['ESRadioIcon'];
    };
    ESRadioGroup?: {
      defaultProps?: ComponentsProps['ESRadioGroup'];
    };
    ESRibbonBadge?: {
      defaultProps?: ComponentsProps['ESRibbonBadge'];
    };
    ESSearch?: {
      defaultProps?: ComponentsProps['ESSearch'];
    };
    ESSFS?: {
      defaultProps?: ComponentsProps['ESSFS'];
    };
    ESSFSButton?: {
      defaultProps?: ComponentsProps['ESSFSButton'];
    };
    ESSFSChips?: {
      defaultProps?: ComponentsProps['ESSFSChips'];
    };
    ESSFSSearch?: {
      defaultProps?: ComponentsProps['ESSFSSearch'];
    };
    ESSFSSorting?: {
      defaultProps?: ComponentsProps['ESSFSSorting'];
    };
    ESSFSFilters?: {
      defaultProps?: ComponentsProps['ESSFSFilters'];
    };
    ESSFSFiltersGroup?: {
      defaultProps?: ComponentsProps['ESSFSFiltersGroup'];
    };
    ESSFSRow?: {
      defaultProps?: ComponentsProps['ESSFSRow'];
    };
    ESSpinnerDashRing?: {
      defaultProps?: ComponentsProps['ESSpinnerDashRing'];
    };
    ESSpinnerFadingBars?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingBars'];
    };
    ESSpinnerFadingDots?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDots'];
    };
    ESSpinnerFadingDoubleRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDoubleRing'];
    };
    ESSpinnerFadingRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingRing'];
    };
    ESSpinnerRing?: {
      defaultProps?: ComponentsProps['ESSpinnerRing'];
    };
    ESSnackbar?: {
      defaultProps?: ComponentsProps['ESSnackbar'];
    };
    ESSnackbarClose?: {
      defaultProps?: ComponentsProps['ESSnackbarClose'];
    };
    ESSortingMenu?: {
      defaultProps?: ComponentsProps['ESSortingMenu'];
    };
    ESSvgIcon?: {
      defaultProps?: ComponentsProps['ESSvgIcon'];
    };
    ESTabBar?: {
      defaultProps?: ComponentsProps['ESTabBar'];
    };
    ESTabBarItem?: {
      defaultProps?: ComponentsProps['ESTabBarItem'];
    };
    ESTable?: {
      defaultProps?: ComponentsProps['ESTable'];
    };
    ESTableActions?: {
      defaultProps?: ComponentsProps['ESTableActions'];
    };
    ESTableItem?: {
      defaultProps?: ComponentsProps['ESTableItem'];
    };
    ESTableBody?: {
      defaultProps?: ComponentsProps['ESTableBody'];
    };
    ESTableCell?: {
      defaultProps?: ComponentsProps['ESTableCell'];
    };
    ESTableFoot?: {
      defaultProps?: ComponentsProps['ESTableFoot'];
    };
    ESTableHead?: {
      defaultProps?: ComponentsProps['ESTableHead'];
    };
    ESTableRow?: {
      defaultProps?: ComponentsProps['ESTableRow'];
    };
    ESTableScrollbar?: {
      defaultProps?: ComponentsProps['ESTableScrollbar'];
    };
    ESTableText?: {
      defaultProps?: ComponentsProps['ESTableText'];
    };
    ESTag?: {
      defaultProps?: ComponentsProps['ESTag'];
    };
    ESTabs?: {
      defaultProps?: ComponentsProps['ESTabs'];
    };
    ESTab?: {
      defaultProps?: ComponentsProps['ESTab'];
    };
    ESTabScrollButton?: {
      defaultProps?: ComponentsProps['ESTabScrollButton'];
    };
    ESTouchRipple?: {
      defaultProps?: ComponentsProps['ESTouchRipple'];
    };
    ESSidebar?: {
      defaultProps?: ComponentsProps['ESSidebar'];
    };
    ESSidebarMenu?: {
      defaultProps?: ComponentsProps['ESSidebarMenu'];
    };
    ESSidebarItem?: {
      defaultProps?: ComponentsProps['ESSidebarItem'];
    };
    ESSidebarToggle?: {
      defaultProps?: ComponentsProps['ESSidebarToggle'];
    };
    ESSidebarDivider?: {
      defaultProps?: ComponentsProps['ESSidebarDivider'];
    };
    ESSidebarSpace?: {
      defaultProps?: ComponentsProps['ESSidebarSpacer'];
    };
    ESSidebarScrollable?: {
      defaultProps?: ComponentsProps['ESSidebarScrollable'];
    };
    ESSidenav?: {
      defaultProps?: ComponentsProps['ESSidenav'];
    };
    ESSidenavItem?: {
      defaultProps?: ComponentsProps['ESSidenavItem'];
    };
    ESTextFieldGroup?: {
      defaultProps?: ComponentsProps['ESTextFieldGroup'];
    };
    ESTooltip?: {
      defaultProps?: ComponentsProps['ESTooltip'];
    };
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tabletXS: true;
    desktopXS: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}
