import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface uploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.css'
})
export class ParametrosComponent {
  // constructor(private messageService: MessageService) {}

  // onUpload(event: uploadEvent) {
  //   this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: 'File uploaded successfully'});

  //   }
}
