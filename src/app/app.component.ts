import { Component, OnInit } from '@angular/core';

import { LoggerService } from './logs/logger.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'infoSalud';

  constructor( private logger: LoggerService) {
  }
  ngOnInit(): void {
    this.logger.log('Hola mundo InfoSalud');
  }

}
