import { Component, OnInit } from '@angular/core';

import { LoggerService } from './admin/logs/logger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  showHeaderFooter = true;
  title = 'infoSalud';

  constructor( private logger: LoggerService, private router: Router) {
    this.router.events.subscribe((val) =>{
      if(this.router.url == '/login'){
        this.showHeaderFooter = false;
      }else{
        this.showHeaderFooter = true;
      }
    });
  }
  ngOnInit(): void {
    this.logger.log('Hola mundo InfoSalud');
  }

}
