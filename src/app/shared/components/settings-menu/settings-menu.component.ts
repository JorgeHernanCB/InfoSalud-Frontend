import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';

interface UploadEvent{
  originalEvent: Event;
  files: File[]
}

@Component({
  selector: 'infoSalud-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.css'
})
export class SettingsMenuComponent {

  public settingSidebar: boolean = false;

  onUpload(event:any) {
    console.log(event);
  }
}
