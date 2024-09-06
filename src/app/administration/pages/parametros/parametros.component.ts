import { Component } from '@angular/core';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.css'
})
export class ParametrosComponent {
  // constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (let file of event.files) {

      console.log('Archivo subido',file);
    }
    //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});

  }


}








  //  constructor(private messageService: MessageService) {}

  // onUpload(event: any) {
    // this.messageService
    // .add(
    //   {severity: 'info',
    //   summary: 'File Uploaded',
    //   detail: 'File uploaded successfully'});
   // console.log(event);
    //}
