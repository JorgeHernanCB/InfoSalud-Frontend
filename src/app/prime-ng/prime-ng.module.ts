import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';


import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    MenubarModule,
    PanelMenuModule,
    PanelModule,
    PasswordModule,
    FloatLabelModule,
    SidebarModule,
    InputTextModule,
    KeyFilterModule,
    DropdownModule,
    FormsModule,
    ChipModule,
    ButtonGroupModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,

  ]
})
export class PrimeNgModule { }


/*El objetivo de este modulo es poder exportar todo los modulos de primeNG
 que se estan utilizando en la aplicacion y no llene el app.module.ts
*/
