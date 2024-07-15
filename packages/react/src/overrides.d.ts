// eslint-disable-next-line
import type {} from '@mui/material/themeCssVarsAugmentation';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { BreakpointOverrides, styled, Components, ComponentsProps, ComponentsPropsList } from '@mui/material/styles';
import { FormControlPropsSizeOverrides } from '@mui/material/FormControl';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase';
import { TextFieldPropsSizeOverrides } from '@mui/material/TextField';

import { AlertActionsProps, AlertCloseProps, AlertProps, AlertTitleProps } from './components/Alert';
import { AppBarProps } from './components/AppBar';
import { FormControlLabelProps } from './components/FormControlLabel';
import { AudioPlayerProps } from './components/AudioPlayer';
import { AutocompleteProps } from './components/Autocomplete';
import { AutocompleteFieldProps } from './components/AutocompleteField';
import {
  AutocompleteMenuFooterProps,
  AutocompleteMenuHeaderProps,
  AutocompleteMenuProps,
} from './components/AutocompleteMenu';
import { AvatarGroupProps } from './components/AvatarGroup';
import { BannerActionsProps, BannerProps, BannerTitleProps } from './components/Banner';
import { BottomSheetProps } from './components/BottomSheet';
import { BreadcrumbProps, BreadcrumbsProps } from './components/Breadcrumbs';
import { ButtonOwnProps } from './components/Button';
import { ButtonBaseProps } from './components/ButtonBase';
import { CalendarButtonProps, CalendarHeadProps, CalendarProps } from './components/Calendar';
import { CheckboxProps, CheckboxIconProps } from './components/Checkbox';
import { ChipProps } from './components/Chip';
import { ChipsProps } from './components/Chips';
import { ClearButtonProps } from './components/ClearButton';
import {
  DialogActionsProps,
  DialogArrowProps,
  DialogCloseProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
} from './components/Dialog';
import { DividerProps } from './components/Divider';
import { DropzoneProps } from './components/Dropzone';
import { DropzoneCompactProps } from './components/DropzoneCompact';
import { EmptyStateProps } from './components/EmptyState';
import { EmptyStateCompactProps } from './components/EmptyStateCompact';
import {
  ErrorPageActionsProps,
  ErrorPageDescriptionProps,
  ErrorPageFooterProps,
  ErrorPageHeadingProps,
  ErrorPageLogoProps,
  ErrorPageProps,
  ErrorPageStatusProps,
} from './components/ErrorPage';
import { FileIconBadgeProps, FileIconProps, FileIconTextProps } from './components/FileIcon';
import {
  FileInfoContentProps,
  FileInfoMetaProps,
  FileInfoMetaSeparatorProps,
  FileInfoNameProps,
  FileInfoProps,
} from './components/FileInfo';
import {
  FiltersProps,
  FiltersContentProps,
  FiltersFilterProps,
  FiltersFooterProps,
  FiltersFormControlLabelProps,
  FiltersFormGroupProps,
  FiltersHeaderProps,
} from './components/Filters';
import { FormatDateProps } from './components/FormatDate';
import { FormatSizeProps } from './components/FormatSize';
import {
  GalleryActionsButtonGroupProps,
  GalleryActionsProps,
  GalleryDescriptionProps,
  GalleryMetaProps,
  GalleryMetaSeparatorProps,
  GalleryMetaTextProps,
  GalleryPanelProps,
  GalleryProps,
  GallerySwiperImageProps,
  GallerySwiperProps,
  GalleryThumbnailsImageProps,
  GalleryThumbnailsItemProps,
  GalleryThumbnailsProps,
} from './components/Gallery';
import { ImageZoomProps } from './components/ImageZoom';
import { InformationIconProps } from './components/InformationIcon';
import { KbdProps } from './components/Kbd';
import { LinearProgressProps } from './components/LinearProgress';
import { LinkProps } from './components/Link';
import { LoadingButtonProps } from './components/LoadingButton';
import { MadeByProps } from './components/MadeBy';
import { MenuGroupProps } from './components/MenuGroup';
import { MenuItemProps } from './components/MenuItem';
import {
  PageHGroupActionsProps,
  PageHGroupBreadcrumbsProps,
  PageHGroupHeadingProps,
  PageHGroupMainProps,
  PageHGroupProps,
  PageHGroupStatusProps,
} from './components/PageHGroup';
import { PaginationPagesProps, PaginationProps, PaginationRangeProps } from './components/Pagination';
import { PasswordFieldProps } from './components/PasswordField';
import { PropertyProps } from './components/Property';
import { PriceProps } from './components/Price';
import { RadioIconProps, RadioProps } from './components/Radio';
import { RadioGroupProps } from './components/RadioGroup';
import { RibbonBadgeProps } from './components/RibbonBadge';
import { SearchProps } from './components/Search';
import { PhoneFieldProps } from './components/PhoneField';
import {
  SFSButtonProps,
  SFSChipsProps,
  SFSFiltersGroupProps,
  SFSFiltersProps,
  SFSProps,
  SFSRowProps,
  SFSSearchProps,
  SFSSortingProps,
} from './components/SFS';
import {
  SidebarDividerProps,
  SidebarItemProps,
  SidebarMenuProps,
  SidebarProps,
  SidebarScrollableProps,
  SidebarSpacerProps,
  SidebarToggleProps,
} from './components/Sidebar';
import { SidenavItemProps, SidenavProps } from './components/Sidenav';
import { SnackbarProps, SnackbarCloseProps } from './components/Snackbar';
import { SortingMenuProps } from './components/SortingMenu';
import {
  SpinnerDashRingProps,
  SpinnerFadingBarsProps,
  SpinnerFadingDotsProps,
  SpinnerFadingDoubleRingProps,
  SpinnerFadingRingProps,
  SpinnerRingProps,
} from './components/Spinner';
import { SvgIconProps } from './components/SvgIcon';
import { SwiperButtonProps, SwiperPaginationProps, SwiperProps } from './components/Swiper';
import { SwitchProps } from './components/Switch';
import { SwitchBaseProps } from './components/SwitchBase';
import { TabBarItemProps, TabBarProps } from './components/TabBar';
import {
  TableActionsProps,
  TableItemProps,
  TableBodyProps,
  TableCellProps,
  TableFootProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TableScrollbarProps,
  TableTextProps,
} from './components/Table';
import { TagProps } from './components/Tag';
import { TabProps, TabScrollButtonProps, TabsProps } from './components/Tabs';
import { TextFieldGroupProps } from './components/TextFieldGroup';
import { TouchRippleProps } from './components/TouchRipple';
import { TooltipProps } from './components/Tooltip';
import { AvatarProps } from './components';
import { BadgeProps } from './components/Badge';
import { BadgePlacementControlProps } from './components/BadgePlacementControl';

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
    ESClearButton: ClearButtonProps;
    ESDialog: DialogProps;
    ESDialogActions: DialogActionsProps;
    ESDialogArrow: DialogArrowProps;
    ESDialogClose: DialogCloseProps;
    ESDialogContent: DialogContentProps;
    ESDialogTitle: DialogTitleProps;
    ESDivider: DividerProps;
    ESDropzone: DropzoneProps;
    ESDropzoneCompact: DropzoneCompactProps;
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
    ESClearButton?: {
      defaultProps?: ComponentsProps['ESClearButton'];
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
    ESDropzoneCompact?: {
      defaultProps?: ComponentsProps['ESDropzoneCompact'];
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
