import { NgModule } from '@angular/core';
// *************** FORM ***************
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChipsModule } from 'primeng/chips';
import { SelectButtonModule } from 'primeng/selectbutton';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from "primeng/inputmask";
import { PasswordModule } from 'primeng/password';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { ListboxModule } from 'primeng/listbox';
// *************** Button ***************
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
// *************** Data ***************
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { ScrollerModule } from 'primeng/scroller';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TimelineModule } from 'primeng/timeline';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
// *************** Panel **************
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
// *************** Overlay **************
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
// *************** File **************
import { FileUploadModule } from 'primeng/fileupload';
// *************** Menu **************
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
// *************** Chart **************
import { ChartModule } from 'primeng/chart';
// *************** Messages **************
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
// *************** Media **************
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
// *************** DragDrop **************
import { DragDropModule } from 'primeng/dragdrop';
// *************** Misc **************
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { InplaceModule } from 'primeng/inplace';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// *************** Directives **************
import { DeferModule } from 'primeng/defer';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateModule } from 'primeng/animate';
// *************** Utilities **************
import { OverlayModule } from 'primeng/overlay';
import { FilterService } from 'primeng/api';

const PRIMENGMODULES = [
  PanelMenuModule, ToastModule, TableModule, MultiSelectModule, InputTextModule, ButtonModule,
  DropdownModule, AutoCompleteModule, ProgressSpinnerModule, DialogModule, BlockUIModule, ListboxModule,
  PanelModule, SidebarModule, TreeModule, ToolbarModule, SplitButtonModule, DividerModule,
  PaginatorModule, ContextMenuModule, TabViewModule, CheckboxModule, CalendarModule, OverlayPanelModule,
  FileUploadModule, RadioButtonModule, DataViewModule, CardModule, DragDropModule, ToggleButtonModule,
  InputNumberModule, InputMaskModule, DynamicDialogModule, CarouselModule, PasswordModule, BreadcrumbModule,
  SplitterModule, PickListModule, FieldsetModule, ScrollPanelModule, AccordionModule, TooltipModule,
  MegaMenuModule, TabMenuModule, MenubarModule, ChipsModule, SelectButtonModule, TreeTableModule,
  ChartModule, TreeSelectModule, ConfirmDialogModule, AvatarModule, GalleriaModule, CascadeSelectModule,
  ColorPickerModule, EditorModule, InplaceModule, InputSwitchModule, InputTextareaModule, KnobModule,
  KeyFilterModule, RatingModule, SlideMenuModule, SliderModule, FilterService, OverlayModule,
  AnimateModule, AutoFocusModule, RippleModule, StyleClassModule, FocusTrapModule, DeferModule,
  TerminalModule, TagModule, ProgressBarModule, SkeletonModule, ScrollTopModule, ScrollerModule,
  TriStateCheckboxModule, SpeedDialModule, OrderListModule, OrganizationChartModule, TimelineModule, VirtualScrollerModule,
  ConfirmPopupModule, DockModule, MenuModule, StepsModule, TieredMenuModule, MessagesModule,
  ImageModule, BadgeModule, ChipModule
]

@NgModule({
  imports: [PRIMENGMODULES],
  exports: [PRIMENGMODULES],
})
export class PrimengUiModule { }
