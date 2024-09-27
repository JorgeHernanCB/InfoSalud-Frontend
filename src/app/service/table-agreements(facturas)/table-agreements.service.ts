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
        numberFactureAssigned: '0011',
        numberFactura: '111',
        ramo: 'ARL',
        nameProvider: 'Cristian Gonzalez',
        agreementNumber: '01200',
        dateEmision: '05/08/2022',
        dateEnd: '04/06/2024',
        datePay: '05/06/2023',
        invoiceFactura: '$45,000',
        stateFactura: 'PAGADA',
        statePay: 'PAGADA'
      },

    ]
  }
  getData(){
    return Promise.resolve(this.getDataTable());
  }
}
