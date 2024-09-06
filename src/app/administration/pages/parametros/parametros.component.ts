import { Component, ViewChild } from '@angular/core';
import { UploadService } from '../../../service/imageHeader/upload.service';
import { FileUpload } from 'primeng/fileupload';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.css'
})
export class ParametrosComponent {

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  

  @ViewChild(FileUpload) fileUpload!: FileUpload;
  

  constructor(private UploadService: UploadService) {
    this.UploadService.currentImage.subscribe(image => {
      this.imageUrl = image;
    });
  }

  onSelect(event: any){
    this.selectedFile = event.files[0];
    const reader = new FileReader();

    if(this.selectedFile) {
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload() {
    if(this.selectedFile) {
      const reader = new FileReader();

      reader.onload = () =>{
        this.UploadService.changeImage(reader.result);
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  onDelete() {
    this.UploadService.changeImage(null);

    //Clear the archive select and preview
    this.selectedFile = null;
    this.imageUrl = null;

    //Clear component
    if(this.fileUpload){
      this.fileUpload.clear(); //Delete the archive of the component
    }
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
