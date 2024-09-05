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

  // // Upload Files
  // uploadedFiles: any[] = [];

  // constructor(private messageService: MessageService) {}

  // onUpload(event:any) {
  //     for(let file of event.files) {
  //         this.uploadedFiles.push(file);
  //     }

  //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }
  onUpload(event:any) {
    console.log(event);
  }
}
