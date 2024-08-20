import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    MenubarModule,
    PanelModule,
    PasswordModule,
    FloatLabelModule

  ]
})
export class PrimeNgModule { }


/*El objetivo de este modulo es poder exportar todo los modulos de primeNG
 que se estan utilizando en la aplicacion y no llene el app.module.ts
*/
