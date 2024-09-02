import { Component } from '@angular/core';
import { City } from '../../../catalogueOfActivities/models/interface/city.interface';
@Component({
  selector: 'infoSalud-dropdown-cards',
  templateUrl: './dropdown-cards.component.html',
  styleUrl: './dropdown-cards.component.css'
})
export class DropdownCardsComponent {

  public cities: City[] | undefined= [];

  public selectedCity: City | undefined;

  ngOnInit () {
    this.cities = [
      { name: 'Pereira', country: 'Colombia' },
      { name: 'Bogota', country: 'Colombia' },
      { name: 'London', country: 'England' },
      { name: 'Madrid', country: 'Spain' },
      { name: 'Paris', country: 'France' },
      { name: 'Buenos Aires', country: 'Argentina'},
      { name: 'Lima', country: 'Peru' },
      { name: 'Caracas', country: 'venezuela' }
    ];
  }

}
