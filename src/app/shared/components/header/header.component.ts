import { Component, OnDestroy, OnInit } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';
import { UploadService } from '../../../service/imageHeader/upload.service';



@Component({
  selector: 'infoSalud-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{

  imageUrl: string | ArrayBuffer | null = null;
  // currentDate: moment.Moment = moment(); //Fecha actual
  // format = moment().format('YYYY-MM-DD hh:mm A');
  // format = moment().format('hh:mm A, MMMM D YYYY')

  fechaFormateada: string = '';
  private intervalid: any;

  constructor (private UploadService: UploadService) {
  }

  ngOnInit(): void {
      moment.locale('es'); //Se configura en español
      this.actualizarFecha();

      this.intervalid = setInterval(() => {
        this.actualizarFecha();
      }, 1000); //Se actualiza cada segundo

      this.UploadService.currentImage.subscribe(image =>{
        this.imageUrl = image;
      });
  }
  
  actualizarFecha(): void{
    const fechaActual = moment();
    //this.fechaFormateada = fechaActual.format('LLLL'); //Tipo de formato
    this.fechaFormateada = fechaActual.format('dddd, MMM D YYYY, h:mm:ss a');
  }

  //Limpiar cuando el componente se destruya
  ngOnDestroy(): void {
      if(this.intervalid){
        clearInterval(this.intervalid);
      }
  }
}
