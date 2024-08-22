import { Component, OnDestroy, OnInit } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'infoSalud-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{

  // currentDate: moment.Moment = moment(); //Fecha actual
  // format = moment().format('YYYY-MM-DD hh:mm A');
  // format = moment().format('hh:mm A, MMMM D YYYY')

  fechaFormateada: string = '';
  private intervalid: any;

  constructor () {
  }

  ngOnInit(): void {
      moment.locale('es'); //Se configura en español
      this.actualizarFecha();

      this.intervalid = setInterval(() => {
        this.actualizarFecha();
      }, 1000); //Se actualiza cada segundo
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
