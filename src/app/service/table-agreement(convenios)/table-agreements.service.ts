import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableAgreemetsService {

  constructor() { }

          // 'numberAgreement',
          // 'typeAgreement',
          // 'nameAgreement',
          // 'product',
          // 'dateStart',
          // 'dateFinish ',
          // 'dateStart',
          // 'statusAgreement',
          // 'activeRate'

  getDataTable() {
    return [
      {
        id: 1,
        numberAgreement: '0011',
        typeAgreement: 'General',
        nameAgreement: 'MAPFRE',
        product: 'ortopedia',
        dateStart: '04/06/2021',
        dateFinish: '04/06/2022',
        statusAgreement: 'Vigente',
        activeRate: '',
      },
      {
        id: 2,
        numberAgreement: '0022',
        typeAgreement: 'Red Especial',
        nameAgreement: 'Metlife',
        product: 'Medicina General',
        dateStart: '09/06/2021',
        dateFinish: '09/06/2022',
        statusAgreement: 'Bloqueado',
        activeRate: '',
      },
      {
        id: 3,
        numberAgreement: '0033',
        typeAgreement: 'General',
        nameAgreement: 'Liberty',
        product: 'Dental',
        dateStart: '11/06/2021',
        dateFinish: '11/06/2022',
        statusAgreement: 'Cancelado',
        activeRate: '',
      },
      {
        id: 4,
        numberAgreement: '0044',
        typeAgreement: 'Red especial',
        nameAgreement: 'SURAMERICANA',
        product: 'Oftalmologia',
        dateStart: '30/06/2021',
        dateFinish: '30/06/2022',
        statusAgreement: 'Cancelado',
        activeRate: '',
      },
      {
        id: 5,
        numberAgreement: '0055',
        typeAgreement: 'General',
        nameAgreement: 'POSITIVA',
        product: 'Urgencias',
        dateStart: '10/06/2021',
        dateFinish: '10/06/2022',
        statusAgreement: 'Pendiente Formalización',
        activeRate: '',
      },
      {
        id: 6,
        numberAgreement: '0066',
        typeAgreement: 'Red especial',
        nameAgreement: 'SANITAS',
        product: 'Sinietros',
        dateStart: '20/06/2021',
        dateFinish: '20/06/2022',
        statusAgreement: 'Vigente',
        activeRate: '',
      },

    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
